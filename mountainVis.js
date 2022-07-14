import * as THREE from 'three';
import { ConvexGeometry } from 'https://unpkg.com/three/examples/jsm/geometries/ConvexGeometry.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

// Swap these out with variable names from your elevationData/ and routeInfo/ js files
const pointsData = whitneyElevationData;
const routeData = whitneyTrailData;
//const landmarkData = whitneyLandmarkData;

const spotFeedID = "";

const GRID_X_OFFSET = 0.1;
const GRID_Y_OFFSET = -0.1;
const ELEVATION_MODIFIER = 0.0008;
const ELEVATION_BASE = 0.8;
const ROUTE_HOVER = 0.008;

const SMOOTHING_FACTOR = 0.25;

// Color gradient transition points (useful for creating treelines, etc)
const colorCutoff1 = 3200;
const colorCutoff2 = 3800;

// Color schemes, choose or create your own
const readableColors = [0x004400, 0x334400, 0xDDDDBB, 0xFFFFFF];
const summerColors = [0x582a56, 0xb95263, 0xf89b59, 0xfafa6e];
const miamiHeat = [0x2B3D41, 0x34b18f, 0x872BFF, 0xdc58d4];
const timesNewRoman = [0x000000, 0x444444, 0xbbbbbb, 0xffffff];

const wallColor = new THREE.Color(0x615c53);
const colorScheme = readableColors;

// Render Mountain

// param determines mountain data to render (ie '/peakTracker?location=whitney')
// This allows for testing of the code locally before we fly to Whitney

// Check location within polygon (to put info about points on the hike)

var scene = new THREE.Scene();
var viewport, renderer, camera, controls, particleDistance, centerPoint = {};

var cube;

var minElevation = pointsData.minElevation || 9000;   // Mt. Everest, submit a PR if you discovered something taller
var maxElevation = pointsData.maxElevation || -11000; // Marianas Trench; see above

var peak_i, peak_j = -1;

var smoothedElevationGrid;

const material = new THREE.MeshBasicMaterial( { vertexColors: true } );
const pointsMaterial = new THREE.PointsMaterial({size: 0.04, color: 0xff4444});
const lineMaterial = new THREE.LineBasicMaterial({
    linewidth: 1.3, 
    color: 0xff0000,
    linejoin:  'round',
    linecap: 'round',
    
});

init();

function init(){
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    viewport = document.getElementById('viewport');

    renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer({ antialias: 0, clearAlpha: 0, alpha:true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor( 0x000000, 0 ); // the default
    viewport.appendChild(renderer.domElement);
    window.addEventListener( 'resize', onWindowResize, false );

    camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 1000);
    camera.position.y = 4;
    camera.position.z = 5;
    controls = new OrbitControls( camera, renderer.domElement );
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.25;
    // Restrict user from wiggling too much
    //controls.maxAzimuthAngle = Math.PI/2;
    //controls.minAzimuthAngle = - Math.PI/2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = 0;
    controls.minDistance = 1.0;
    controls.maxDistance = 7.0;
    controls.update();
    
    scene.add(camera);

    createMountain();
    createRoute();
    animate();

    //findVertexLocationFromLatLon(36.57128, -118.2364);
    findVertexLocationFromLatLon(36.59528, -118.2993);
    
}

function createMountain(){
    var vertices_array = [];
    var cleanArray = cleanPointsData(pointsData);
    vertices_array = pointsToTriangles(cleanArray);

    //console.log(vertices_array);

    var mountainGeometry = new THREE.BufferGeometry();

    mountainGeometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices_array.points, 3 ));
    mountainGeometry.setAttribute('color', new THREE.Float32BufferAttribute( vertices_array.colors, 3 ));

    var mesh = new THREE.Mesh( mountainGeometry, material );
    moveCreatedMeshToPosition(mesh);
    scene.add( mesh );
}

function createRoute(){

    for(var w = 0; w < routeData.ways.length; w++){
        var vertices_array = [];
        for(var i = 0; i < routeData.ways[w].nodes.length; i++){
            var location = findVertexLocationFromLatLon(routeData.ways[w].nodes[i].lat, routeData.ways[w].nodes[i].lon);
            vertices_array.push(location.x, location.y, location.z);
        }
    
        var lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices_array, 3 ));
        var line = new THREE.Line(lineGeometry, lineMaterial);
        moveCreatedMeshToPosition(line);
        
        scene.add(line);
    }
}

function createLandmarks(){

}

function moveCreatedMeshToPosition(mesh){
    mesh.rotation.x = -1 * Math.PI / 2;
    mesh.translateZ(-3);
    mesh.translateX(-3);
    mesh.translateY(2);
}

function findVertexLocationFromLatLon(latitude, longitude){
    var neighbors = findNeighborsFromLatLon(latitude, longitude);
    // Take four neighbors and compute grid position & elevation from distances and GRID_X_OFFSET / GRID_Y_OFFSET
    var x = (neighbors[0].x + neighbors[0].x_dist) * GRID_X_OFFSET ;
    var y = (neighbors[0].y + neighbors[0].y_dist) * GRID_Y_OFFSET ;

    // Average distances for the neighbors on each half  (where distance is already normalized to total 1)
    var westSum = (((1 - neighbors[0].y_dist) * neighbors[0].elevation) + ((1-neighbors[2].y_dist) * neighbors[2].elevation))
    var eastSum = (((1 - neighbors[1].y_dist) * neighbors[1].elevation) + ((1-neighbors[3].y_dist) * neighbors[3].elevation))

    // Take each half and get weighted average for the E/W distance
    var weightedElevation = (westSum * (1-neighbors[0].x_dist)) + (eastSum * (1-neighbors[1].x_dist));
    
    var z = (weightedElevation * ELEVATION_MODIFIER) + ROUTE_HOVER;

    return { x : x, y : y, z : z};
}

// Returns the coordinates, elevation, and approximate distance from each surrounding grid point (for elevation weighting purposes)
function findNeighborsFromLatLon(latitude, longitude){
    var xSize = smoothedElevationGrid.points.length; // Latitude decreases within the larger N/S array
    var ySize = smoothedElevationGrid.points[0].length; // Longitude decreases within each E/W row

    var southLat, northLat, eastLon, westLon = null;
    var southVal, northVal, eastVal, westVal = null;
    var NWNeighbor, SWNeighbor, NENeighbor, SENeighbor = null;

    for(var i = 0; i < xSize; i++){
        if(smoothedElevationGrid.points[i][0].latitude < latitude){
            southLat = i;
            southVal = smoothedElevationGrid.points[i][0].latitude;
            northLat = i - 1;
            northVal = i - 1 >= 0 ? smoothedElevationGrid.points[i-1][0].latitude : latitude;
            break;
        }
    }

    for(var j = 0; j < ySize; j++){
        if(smoothedElevationGrid.points[0][j].longitude > longitude){
            eastLon = j;
            eastVal = smoothedElevationGrid.points[0][j].longitude;
            westLon = j - 1;
            westVal = j - 1 >= 0 ? smoothedElevationGrid.points[0][j - 1].longitude : longitude;
            break;
        }
    }

    // Create neighbor objects only if within larger grid
    if(northLat >= 0 && westLon >= 0){
        NWNeighbor = {
            y : northLat,
            x : westLon,
            y_dist : Math.abs(latitude - northVal) / (northVal - southVal),
            x_dist : Math.abs(longitude - westVal) / (eastVal - westVal),
            distance : pythagorean_theorem((latitude - northVal), (longitude - westVal)),
            elevation : smoothedElevationGrid.points[northLat][westLon].elevation
        };
    }
    if(northLat >= 0 && eastLon < ySize){
        NENeighbor = {
            y : northLat,
            x : eastLon,
            y_dist : Math.abs(latitude - northVal)  / (northVal - southVal),
            x_dist : Math.abs(longitude - eastVal) / (eastVal - westVal),
            distance : pythagorean_theorem((latitude - northVal), (longitude - eastVal)),
            elevation : smoothedElevationGrid.points[northLat][eastLon].elevation
        };
    }
    if(southLat < xSize && westLon >= 0){
        SWNeighbor = {
            y : southLat,
            x : westLon,
            y_dist : Math.abs(latitude - southVal) / (northVal - southVal),
            x_dist : Math.abs(longitude - westVal)  / (eastVal - westVal),
            distance : pythagorean_theorem((latitude - southVal), (longitude - westVal)),
            elevation : smoothedElevationGrid.points[southLat][westLon].elevation
        };
    }
    if(southLat < xSize && eastLon < ySize){
        SENeighbor = {
            y : southLat,
            x : eastLon,
            y_dist : Math.abs(latitude - southVal)  / (northVal - southVal),
            x_dist : Math.abs(longitude - eastVal) / (eastVal - westVal),
            distance : pythagorean_theorem((latitude - southVal), (longitude - eastVal)),
            elevation : smoothedElevationGrid.points[southLat][eastLon].elevation
        };
    }

    return [NWNeighbor, NENeighbor, SWNeighbor, SENeighbor];
}

function pythagorean_theorem(x, y) {
    return Math.sqrt(x * x + y * y);
}

function onWindowResize( event ) {
    SCREEN_HEIGHT = window.innerHeight;
    SCREEN_WIDTH  = window.innerWidth;
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

// Naive points -> vertex implementation that doesn't account for tris (useful if we end up using a point cloud visual)
function pointsToVertices(pointDataArray){
    var xSize = pointDataArray.points.length;
    var ySize = pointDataArray.points[0].length;

    var return_array = [];

    for(var x = 0; x < pointDataArray.points.length; x++){
        var row = pointDataArray.points[x];
        for(var y = 0; y < row.length; y++){
            return_array.push((y * -0.1), (x * 0.1), row[y].elevation * .0008 );
        }
    }
}

/*
 Convert the grid of points to triangle-based vertex data (with duplicate points for shared vertexes)
    Y = N/S <---> 
    X = E/W <--->

 It's worth a reminder here to future Shawn that while this may seem complex, it's likely only due to confusing variable names that you should improve on\
 Also the order the vertexes are created determines the direction of the normal.  Note the swapping of A|B|AB and A|AB|B creation statements for the Tris on opposing walls 
*/
function pointsToTriangles(pointDataArray){
    var ySize = pointDataArray.points.length;
    var xSize = pointDataArray.points[0].length;

    var return_point_array = [];
    var return_color_array = [];
    var return_scale_array = []

    for(var y = 0; y < pointDataArray.points.length - 1; y++){
        var points = pointDataArray.points;
        for(var x = 0; x < points[y].length - 1; x++){
            // Triangle 1 ◣
            return_point_array.push((x * GRID_X_OFFSET), (y * GRID_Y_OFFSET), points[y][x].elevation * ELEVATION_MODIFIER );  // a
            return_point_array.push(((x + 1) * GRID_X_OFFSET), ((y + 1) * GRID_Y_OFFSET), points[y+1][x+1].elevation * ELEVATION_MODIFIER ); // ab
            return_point_array.push(((x + 1) * GRID_X_OFFSET), (y * GRID_Y_OFFSET), points[y][x+1].elevation * ELEVATION_MODIFIER ); // b
            

            var color1 = getColorFromElevation(points[y][x].elevation); // a
            var color2 = getColorFromElevation(points[y][x+1].elevation); // b
            var color3 = getColorFromElevation(points[y+1][x+1].elevation); // ab

            return_color_array.push(color1.r, color1.g, color1.b); // a
            return_color_array.push(color3.r, color3.g, color3.b); // ab
            return_color_array.push(color2.r, color2.g, color2.b); // b
            

            return_scale_array.push(1, 1, 1);
            
            // Triangle 2 ◥
            return_point_array.push((x * GRID_X_OFFSET), (y * GRID_Y_OFFSET), points[y][x].elevation * ELEVATION_MODIFIER ); // a
            return_point_array.push((x * GRID_X_OFFSET), ((y + 1) * GRID_Y_OFFSET), points[y+1][x].elevation * ELEVATION_MODIFIER ); // b
            return_point_array.push(((x + 1) * GRID_X_OFFSET), ((y + 1) * GRID_Y_OFFSET), points[y+1][x+1].elevation * ELEVATION_MODIFIER ); //ab
            

            color1 = getColorFromElevation(points[y][x].elevation); // a
            color2 = getColorFromElevation(points[y+1][x+1].elevation); // ab
            color3 = getColorFromElevation(points[y+1][x].elevation); // b

            return_color_array.push(color1.r, color1.g, color1.b); // a
            return_color_array.push(color3.r, color3.g, color3.b); // b
            return_color_array.push(color2.r, color2.g, color2.b); // ab

            return_scale_array.push(1, 1, 1);
        }
    }

    // Separate loop to add edge tris (enclose the bottom)
    var x_max = (pointDataArray.points[0].length - 1);
    var y_max = (pointDataArray.points.length - 1);

    // East and West edges
    for(var y = 0; y < y_max; y++){
        //West Wall Triangle 1 ◣
        return_point_array.push(0, (y * GRID_Y_OFFSET), points[y][0].elevation * ELEVATION_MODIFIER );  // a
        return_point_array.push(0, (y * GRID_Y_OFFSET), ELEVATION_BASE ); // b
        return_point_array.push(0, ((y + 1) * GRID_Y_OFFSET), ELEVATION_BASE ); // ab

        //West Wall Triangle 2 ◥
        return_point_array.push(0, (y * GRID_Y_OFFSET), points[y][0].elevation * ELEVATION_MODIFIER ); // a
        return_point_array.push(0, ((y + 1) * GRID_Y_OFFSET), ELEVATION_BASE ); //ab
        return_point_array.push(0, ((y + 1) * GRID_Y_OFFSET), points[y+1][0].elevation * ELEVATION_MODIFIER ); // b

        //East Wall Triangle 1 ◣
        return_point_array.push(x_max * GRID_X_OFFSET, (y * GRID_Y_OFFSET), points[y][x_max].elevation * ELEVATION_MODIFIER );  // a
        return_point_array.push(x_max * GRID_X_OFFSET, ((y + 1) * GRID_Y_OFFSET), ELEVATION_BASE ); // ab
        return_point_array.push(x_max * GRID_X_OFFSET, (y * GRID_Y_OFFSET), ELEVATION_BASE ); // b

        //East Wall Triangle 2 ◥
        return_point_array.push(x_max * GRID_X_OFFSET, (y * GRID_Y_OFFSET), points[y][x_max].elevation * ELEVATION_MODIFIER ); // a
        return_point_array.push(x_max * GRID_X_OFFSET, ((y + 1) * GRID_Y_OFFSET), points[y+1][x_max].elevation * ELEVATION_MODIFIER ); // b
        return_point_array.push(x_max * GRID_X_OFFSET, ((y + 1) * GRID_Y_OFFSET), ELEVATION_BASE ); //ab

        // All the wall points have the same color, so speed it up
        for(var c = 0; c < 12; c++){
            return_color_array.push(wallColor.r, wallColor.g, wallColor.b);
        }
    }

    // North and South edges
    for(var x = 0; x < x_max; x++){
        //North Wall Triangle 1 ◣
        return_point_array.push(x * GRID_X_OFFSET, 0, points[0][x].elevation * ELEVATION_MODIFIER );  // a
        return_point_array.push((x + 1) * GRID_X_OFFSET, 0, ELEVATION_BASE ); // ab
        return_point_array.push(x * GRID_X_OFFSET, 0, ELEVATION_BASE ); // b

        //North Wall Triangle 2 ◥
        return_point_array.push(x * GRID_X_OFFSET, 0, points[0][x].elevation * ELEVATION_MODIFIER ); // a
        return_point_array.push((x+1) * GRID_X_OFFSET, 0, points[0][x+1].elevation * ELEVATION_MODIFIER ); // b
        return_point_array.push((x+1) * GRID_X_OFFSET, 0, ELEVATION_BASE ); //ab

        //South Wall Triangle 1 ◣
        return_point_array.push(x * GRID_X_OFFSET, y_max * GRID_Y_OFFSET, points[y_max][x].elevation * ELEVATION_MODIFIER );  // a
        return_point_array.push(x * GRID_X_OFFSET, y_max * GRID_Y_OFFSET, ELEVATION_BASE ); // b
        return_point_array.push((x + 1) * GRID_X_OFFSET, y_max * GRID_Y_OFFSET, ELEVATION_BASE ); // ab

        //South Wall Triangle 2 ◥
        return_point_array.push(x * GRID_X_OFFSET, y_max * GRID_Y_OFFSET, points[y_max][x].elevation * ELEVATION_MODIFIER ); // a
        return_point_array.push((x+1) * GRID_X_OFFSET, y_max * GRID_Y_OFFSET, ELEVATION_BASE ); //ab
        return_point_array.push((x+1) * GRID_X_OFFSET, y_max * GRID_Y_OFFSET, points[y_max][x+1].elevation * ELEVATION_MODIFIER ); // b

       // All the wall points have the same color, so speed it up
        for(var c = 0; c < 12; c++){
            return_color_array.push(wallColor.r, wallColor.g, wallColor.b);
        }
    }


    return { points: return_point_array, colors: return_color_array, scale: return_scale_array };
}

function getColorFromElevation(elevation){
    // Calculate ratio of elevation from total range (elev - minElev) / (maxElev - minElev)
    
    if(elevation > colorCutoff2){
        var ratio = (elevation - colorCutoff2) / (maxElevation - colorCutoff2);
        return new THREE.Color(lerpColor(colorScheme[2], colorScheme[3], ratio));
    }

    if(elevation > colorCutoff1){
        var ratio = (elevation - colorCutoff1) / (colorCutoff2 - colorCutoff1);
        return new THREE.Color(lerpColor(colorScheme[1], colorScheme[2], ratio));
    }

    var ratio = (elevation - minElevation) / (colorCutoff1 - minElevation);
    return new THREE.Color(lerpColor(colorScheme[0], colorScheme[1], ratio));;
}

function metersToFeet(meters){
    return meters * 3.28084;
}

function lerpColor(pFrom, pTo, pRatio) {
    const ar = (pFrom & 0xFF0000) >> 16,
          ag = (pFrom & 0x00FF00) >> 8,
          ab = (pFrom & 0x0000FF),

          br = (pTo & 0xFF0000) >> 16,
          bg = (pTo & 0x00FF00) >> 8,
          bb = (pTo & 0x0000FF),

          rr = ar + pRatio * (br - ar),
          rg = ag + pRatio * (bg - ag),
          rb = ab + pRatio * (bb - ab);

    return (rr << 16) + (rg << 8) + (rb | 0);
};


function cleanPointsData(arrayToClean){
    var elevationArray = structuredClone(arrayToClean);
    for(var y = 0; y < arrayToClean.points.length; y++){
        var points = arrayToClean.points;
        for(var x = 0; x < points[y].length; x++){
            elevationArray.points[y][x].elevation = interpolatePoint(y, x, points[y][x].elevation)
        }
    }
    smoothedElevationGrid = elevationArray;
    return elevationArray;
}

function interpolatePoint(index_y, index_x, elevation){
    const smoothingWeight = 1.0 / (SMOOTHING_FACTOR + 0.000001);

    const y_size = pointsData.points.length;
    const x_size = pointsData.points[0].length

    // Set value to average of neighbors E, W, N, and S
    var eastNeighbor  = index_y > 0            ? pointsData.points[index_y - 1][index_x].elevation : elevation;
    var westNeighbor  = index_y < (y_size - 1) ? pointsData.points[index_y + 1][index_x].elevation : elevation;
    var northNeighbor = index_x > 0            ? pointsData.points[index_y][index_x - 1].elevation : elevation;
    var southNeighbor = index_x < (x_size - 1) ? pointsData.points[index_y][index_x + 1].elevation : elevation;

    var NENeighbor    = index_y > 0  && index_x > 0                        ? pointsData.points[index_y - 1][index_x - 1].elevation : elevation;
    var NWNeighbor    = index_y < (y_size - 1)  && index_x > 0             ? pointsData.points[index_y + 1][index_x - 1].elevation : elevation;
    var SENeighbor    = index_y > 0  && index_x < (x_size - 1)             ? pointsData.points[index_y - 1][index_x + 1].elevation : elevation;
    var SWNeighbor    = index_y < (y_size - 1)  && index_x < (x_size - 1)  ? pointsData.points[index_y + 1][index_x + 1].elevation : elevation;

    return ( eastNeighbor + westNeighbor + northNeighbor + southNeighbor + NENeighbor + NWNeighbor + SENeighbor + SWNeighbor + ( elevation * smoothingWeight))  / (8.0 + smoothingWeight);
}

// Todo: Function to access cached points feed, only hitting Spot API if system clock has been at least 10 minutes since last access
// (Let's not risk accidentally getting our feed rate-limited/shut down)
// @param pollLimit : time in seconds between 
// function getLatestTrackingData(pollLimit)

// Todo: Function to actually grab data from feed (swap this method to add other GPS unit support)
// function getRemoteFeedData()

// Todo : Function to turn spot feed into generic points list (swap this to add other GPS unit support)
// function normalizeSpotFeed(){}

import * as THREE from 'three';
import { ConvexGeometry } from 'https://unpkg.com/three/examples/jsm/geometries/ConvexGeometry.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

// Swap these out for different uses
const pointsData = whitneyElevationData;
const spotFeedID = "";

const GRID_X_OFFSET = 0.1;
const GRID_Y_OFFSET = -0.1;
const ELEVATION_MODIFIER = 0.0008;

const SMOOTHING_FACTOR = 0.2;

const lowColor = 0x000000;
const highColor = 0xFFFFFF;

// Render Mountain

// param determines mountain data to render (ie '/peakTracker?location=whitney')
// This allows for testing of the code locally before we fly to Whitney

// Check location within polygon (to put info about points on the hike)

var scene = new THREE.Scene();
var viewport, renderer, camera, controls, particleDistance, centerPoint = {};

var cube;

var minElevation = pointsData.minElevation || 9000;   // taller than Everest, submit a PR if you discovered something taller
var maxElevation = pointsData.maxElevation || -11000; // Marianas Trench; see above


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
    //renderer.shadowMap.enabled = true;
    viewport.appendChild(renderer.domElement);
    window.addEventListener( 'resize', onWindowResize, false );
    
    //scene.fog = new THREE.Fog( 0x111111, 22000, 25000 );

    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    controls = new OrbitControls( camera, renderer.domElement );
    //camera.position.set(0, 10000, -20000 );
    scene.add(camera);

    createMountain();

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
    scene.add( directionalLight );

    animate();
}

function createMountain(){

    //const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { vertexColors: true } );
    const pointsMaterial = new THREE.PointsMaterial({size: 0.1, vertexColors: true});
    const wireMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
	    linewidth: 0.001
    });

    var vertices_array = [];
    var cleanArray = cleanPointsData(pointsData);
    vertices_array = pointsToTriangles(cleanArray);

    var pointGeometry = new THREE.BufferGeometry();

    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices_array.points, 3 ));
    pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute( vertices_array.colors, 3 ));

    var pointsMesh = new THREE.Points(pointGeometry, pointsMaterial);

    var mesh = new THREE.Mesh( pointGeometry, material );

    scene.add( mesh );

    camera.position.z = 5;
    controls.update();

    // var vertices_array = []
    // var mesh = new THREE.ConvexGeometry( vertices_array );
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

// Convert the grid of points to triangle-based vertex data (with duplicate points for shared vertexes)
    // Y = N/S
    // X = E/W
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

    //Separate loop to add edge tris (enclose the bottom)


    return { points: return_point_array, colors: return_color_array, scale: return_scale_array };
}

function getColorFromElevation(elevation){
    // Calculate ratio of elevation from total range (elev - minElev) / (maxElev - minElev)
    var ratio = (elevation - minElevation) / (maxElevation - minElevation);
    var color = new THREE.Color(lerpColor(lowColor, highColor, ratio));

    if(elevation * 3.28084 > 14000){
        return new THREE.Color(0xFF0000);
    }
    return color;
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
    for(var y = 0; y < arrayToClean.points.length - 1; y++){
        var points = arrayToClean.points;
        for(var x = 0; x < points[y].length - 1; x++){
            elevationArray.points[y][x].elevation = interpolatePoint(y, x, points[y][x].elevation)
        }
    }
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

import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

let DEBUG = false;

// Swap these out with variable names from your elevationData/ and routeInfo/ js files
const pointsData = whitneyElevationData;
const routeData = whitneyTrailData;
const landmarkData = whitneyTrailLandmarks;
const zoneData = whitneyZones;

const spotFeedID = "0YKNZixWQl9CToVotgl85nW4jSkyJSEid";

const GRID_X_OFFSET = 0.1;
const GRID_Z_OFFSET = 0.1;
const ELEVATION_MODIFIER = 0.0009;
const ELEVATION_BOOST = -4;
const ELEVATION_BASE = -2;
const ROUTE_HOVER = 0.01;
const LANDMARK_HOVER = .01;
const TRACK_HOVER = 0.03;
const MOST_RECENT_BOOST = 0.01;

const SMOOTHING_FACTOR = 0.15;

// Color gradient transition points (elevation in meters) (useful for creating treelines, etc)
const colorCutoff1 = 3200;
const colorCutoff2 = 3800;

// Make null to use the colorScheme instead
const textureAssetPath = "assets/whitneyTextureLowRes.png"

// Available color schemes
const readableColors = [0x004400, 0x334400, 0xDDDDBB, 0xFFFFFF];
const summerColors = [0x582a56, 0xb95263, 0xf89b59, 0xfafa6e];
const miamiHeat = [0x2B3D41, 0x34b18f, 0x872BFF, 0xdc58d4];
const timesNewRoman = [0x000000, 0x444444, 0xbbbbbb, 0xffffff];

// Choose colorscheme here
const wallColor = new THREE.Color(0x615c53);
const colorScheme = readableColors;

// --- End Constants ---

var scene = new THREE.Scene();
var viewport, renderer, camera, controls;

var minElevation = pointsData.minElevation || 9000;   // Mt. Everest, submit a PR if you discovered something taller
var maxElevation = pointsData.maxElevation || -11000; // Marianas Trench; see above
var minSafeLat, minSafeLon, maxSafeLat, maxSafeLon;

var smoothedElevationGrid;
var trackingPoints = []; //store tracking points to delete when pulling new data
var landmarks = []; // Store to rotate towards camera

// Object references for toggleability visibility
const landmarkAndOutlineParent = new THREE.Mesh();
const landmarkParent = new THREE.Mesh();
const outlineParent = new THREE.Mesh();
const trackersParent = new THREE.Mesh();
const trackersOutlineParent = new THREE.Mesh();
var mostRecentTracker;
const routeParent = new THREE.Mesh();
const zoneParent = new THREE.Mesh();
const mapParent = new THREE.Mesh();
var compass;

const vertexMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
const sideMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
const lineMaterial = new THREE.LineBasicMaterial({
    linewidth: 1.3, 
    color: 0xff0000,
    linejoin:  'round',
    linecap: 'round',
});
const zoneMaterial = new THREE.LineBasicMaterial({
    linewidth: 2, 
    color: 0x4400dd,
    linejoin:  'round',
    linecap: 'round',
});
const outlineMaterial = new THREE.MeshBasicMaterial( { 
    color: 0xffffff,
    side: THREE.BackSide
} );

const trackingHighlightMaterial = new THREE.MeshBasicMaterial({color: 0xdddd44});

// Hover checks
var raycaster, INTERSECTED;
var DEBUG_INTERSECTED, debug_cube;
var mouse = new THREE.Vector2();

// Click Checks
const mouseDelta = 6;
let startX;
let startY;

var infoPanel, trackerPanel;

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
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = 0;
    controls.minDistance = 1.0;
    controls.maxDistance = 7.0;
    controls.update();
    
    scene.add(camera);

    // initialize object to perform world/screen calculations
	raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse, camera );

    // Update boundary box for point plotting
    findSafeBoundsForPoints();

    createMountain();
    createRoute();
    createLandmarks();

    // Grab feed, delete old points, create new points
    getRemoteFeedData();

    // Add additional visuals
    createCompassRose();

	// when the mouse moves, call the given function
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //document.addEventListener( 'click', , false );

    document.addEventListener('mousedown', function (event) {
        startX = event.pageX;
        startY = event.pageY;
    });

    document.addEventListener('mouseup', function (event) {
        const diffX = Math.abs(event.pageX - startX);
        const diffY = Math.abs(event.pageY - startY);

        // Click! (Not drag)
        if (diffX < mouseDelta && diffY < mouseDelta) {
            onDocumentMouseClick(event);
        }
    });

    document.querySelectorAll('.switch-check').forEach((togg) => {togg.addEventListener('click', checkToggle)});
    document.querySelector('#layers-toggle').addEventListener('click', collapse);

    infoPanel = document.getElementById("info-panel");
    trackerPanel = document.getElementById("tracker-panel");

    animate();
}

function checkToggle(event){
    var parentObject;
    switch(event.target.value){
        case "landmarks":
            parentObject = landmarkAndOutlineParent;
            break;
        case "route":
            parentObject = routeParent;
            break;
        case "tracking":
            parentObject = trackersParent;
            break;
        case "compass":
            parentObject = compass;
            break;
        default:
            break;
    }

    parentObject.visible = event.target.checked;
}

function collapse(event){
    //console.log(event);
    event.target.classList.toggle("active");
    document.querySelector('#layers-toggle i').classList.toggle("rotated");
    document.querySelector('#legend').classList.toggle("open");
    var content = document.querySelector('#toggles');
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "200px";
    }
}

function createMountain(){

    // For topo surface
    var mtn_vertices_array = [];
    var cleanArray = cleanPointsData(pointsData);
    mtn_vertices_array = pointsToTriangles(cleanArray);

    var mountainGeometry = new THREE.BufferGeometry();

    mountainGeometry.setAttribute('position', new THREE.Float32BufferAttribute( mtn_vertices_array.points, 3 ));
    mountainGeometry.setAttribute('color', new THREE.Float32BufferAttribute( mtn_vertices_array.colors, 3 ));
    mountainGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(mtn_vertices_array.uvs, 2))

    var mountMaterial = vertexMaterial;
    if(textureAssetPath != null){
        var mountMaterial = getMapSatelliteMaterial(textureAssetPath);
    }

    mountainGeometry.name = "topo";

    var topoMesh = new THREE.Mesh( mountainGeometry, mountMaterial );
    recenterMap(topoMesh);
    mapParent.add(topoMesh);
    scene.add( mapParent );

    // Repeat for sidewalls mesh
    var side_vertices_array = [];
    var cleanArray = cleanPointsData(pointsData);
    side_vertices_array = sidePointsToTriangles(cleanArray);

    var sideGeometry = new THREE.BufferGeometry();

    sideGeometry.setAttribute('position', new THREE.Float32BufferAttribute( side_vertices_array.points, 3 ));
    sideGeometry.setAttribute('color', new THREE.Float32BufferAttribute( side_vertices_array.colors, 3 ));

    sideGeometry.name = "sides";

    var sideMesh = new THREE.Mesh( sideGeometry, sideMaterial );
    recenterMap(sideMesh);
    scene.add( sideMesh );

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
        var route = new THREE.Line(lineGeometry, lineMaterial);
        route.name = "RoutePiece-" + w;
        
        routeParent.add(route);
    }
    recenterMap(routeParent);
    routeParent.name = "Route";
    scene.add(routeParent);
}

function createLandmarks(){
    for(var i = 0; i < landmarkData.length; i++){
        if(landmarkData[i].type != null){
            createLandmarkPoint(landmarkData[i], i);
        }
    }

    landmarkAndOutlineParent.add(landmarkParent);
    landmarkAndOutlineParent.add(outlineParent);
    scene.add(landmarkAndOutlineParent);
}

function createLandmarkPoint(landmark, index){
    var location = findVertexLocationFromLatLon(landmark.lat, landmark.lon);
    const properties = getLandmarkProperties(landmark);
    const geometry = new THREE.CylinderGeometry( properties.size, properties.size, properties.size / 4, 16 );
    //geometry.name = "LM~" + index + "~" + landmark.type + "~" + landmark.tag;
    var materials = [  properties.sideMaterial, properties.material, properties.sideMaterial ];
    const marker = new THREE.Mesh( geometry, materials );
    const y_boost = landmark.hoverBoost ? landmark.hoverBoost : 0;
    marker.position.x = location.x;
    marker.position.y = location.y + LANDMARK_HOVER + y_boost;
    marker.position.z = location.z;
    recenterMap(marker);
    marker.name = "LM~" + index + "~" + landmark.type + "~" + landmark.tag;
    landmarkParent.add( marker );
    landmarks.push(marker);

    // Add outline mesh to render when hovered
    const OUTLINE_WIDTH = 0.01;
    const outline = new THREE.CylinderGeometry( properties.size + OUTLINE_WIDTH, properties.size + OUTLINE_WIDTH, (properties.size + OUTLINE_WIDTH) / 4, 16 );
    //outline.name = "O~LM~" + index + "~" + landmark.type + "~" + landmark.tag;
    const markerOutline = new THREE.Mesh( outline, outlineMaterial );
    markerOutline.position.x = location.x;
    markerOutline.position.y = location.y + LANDMARK_HOVER + y_boost;
    markerOutline.position.z = location.z;
    recenterMap(markerOutline);
    markerOutline.name = "O~LM~" + index + "~" + landmark.type + "~" + landmark.tag;
    markerOutline.visible = false;
    outlineParent.add(markerOutline);
    
}

function createCompassRose(){
    var compassGeometry = new THREE.PlaneGeometry(13, 13);
    compass = new THREE.Mesh(compassGeometry, getCompassMaterial(0.4));
    //recenterMap(compass);
    compass.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / -2);
    compass.position.y = -2;
    compass.visible = false;
    scene.add(compass);
}

function rotateLandmarksToFollowCamera(){
    for(var i = 0; i < landmarks.length; i++){
        landmarks[i].rotation.y = camera.rotation.z + (Math.PI / 2);
    }
}

function createTrackingPath(feed){

    //delete old tracking objects
    for(var j = 0; j < trackingPoints.length; j++){
        scene.remove(trackingPoints[j]);
    }
    for (var i = trackersOutlineParent.children.length - 1; i >= 0; i--) {
        scene.remove(trackersOutlineParent.children[i]);
    }
    trackingPoints = [];

    // Latest point gets special dot
    if(feed.length > 0){
        createTrackingPoint(feed[0].lat, feed[0].lon, feed[0].type, feed[0].timestamp, trackingHighlightMaterial, feed[0].altitude, true);
        // Update zone tracker
        var altitude = feed[0].altitude ? feed[0].altitude : 0;
        // TEST FROM SPRING HILL (REMOVE BEFORE TRIP)
        var tempLoc = offsetCoordinatesFromSpringHill(feed[0].lat, feed[0].lon);
        updateZone(tempLoc.lat, tempLoc.lon, Math.round(metersToFeet(altitude)));
    }
    // Older points fade to non-existence
    if(feed.length >= 2){
        for(var i = 1; i < feed.length; i++){
            createTrackingPoint(feed[i].lat, feed[i].lon, feed[i].type, feed[i].timestamp, getTrackingPointMaterial(i, feed.length), feed[i].altitude);
        }
    }

    scene.add(trackersParent);
    scene.add(trackersOutlineParent);
}

function createTrackingPoint(lat, lon, type, timestamp, material, altitude, isMostRecent = false){
    const geometry = new THREE.CylinderGeometry( .04, .04, 0.01, 4 );
    geometry.name = "Tracker~" + timestamp;
    const point = new THREE.Mesh( geometry, material );
    // TEST FROM SPRING HILL (REMOVE BEFORE TRIP)
    var tempLoc = offsetCoordinatesFromSpringHill(lat, lon)
    var loc = findVertexLocationFromLatLon(tempLoc.lat, tempLoc.lon, true);
    var boost = isMostRecent ? MOST_RECENT_BOOST : 0;
    point.position.x = loc.x;
    point.position.y = loc.y + TRACK_HOVER + boost;
    point.position.z = loc.z;
    recenterMap(point);

    var elevation = altitude ? altitude : loc.elev;
    var estimated = altitude == 0 ? "true" : "false";

    point.name="T~" + type + "~" + timestamp + "~" + lat + "~" + lon + "~" + elevation + "~" + estimated;

    if(isMostRecent){
        scene.add(point);
        mostRecentTracker = point;
    } else {
        trackersParent.add( point );
    }

    trackingPoints.push(point)

    // Add outline mesh to render when hovered
    const OUTLINE_WIDTH = 0.01;
    const outline = new THREE.CylinderGeometry( .04 + OUTLINE_WIDTH, .04 + OUTLINE_WIDTH, (.04 + OUTLINE_WIDTH) / 4, 4 );
    const pointOutline = new THREE.Mesh( outline, outlineMaterial );

    pointOutline.position.x = loc.x;
    pointOutline.position.y = loc.y + TRACK_HOVER + boost;
    pointOutline.position.z = loc.z;
    recenterMap(pointOutline);

    pointOutline.name="O~T~" + type + "~" + timestamp + "~" + lat + "~" + lon + "~" + elevation + "~" + estimated;

    pointOutline.visible = false;
    trackersOutlineParent.add(pointOutline);
}

// Convert coordinates of local starting point (35.755874, -86.869595)
// to Whitney trailhead (36.586942, -118.240147) for testing
function offsetCoordinatesFromSpringHill(lat, lon){
    var localTestStart = {lat: 35.755874, lon: -86.869595};
    var trailheadStart = {lat: 36.586942, lon: -118.240147};
    var offsetLat = localTestStart.lat - trailheadStart.lat;
    var offsetLon = localTestStart.lon - trailheadStart.lon;

    // I'm likely to forget to remove this before our trip, so as a failsafe, no coordinate offset after Aug 10
    var cutoffDate = new Date("08/10/2022");
    if(Date.now() >= cutoffDate){
        return {lat: lat, lon: lon};
    }

    return { lat: lat - offsetLat, lon: lon - offsetLon};
}

function updateZone(lat, lon, altitude){

    var zoneName = "Inyo National Forest";
    var zoneDetails = "Home for three days";
    var zoneElevation = altitude;

    for(var i = 0; i < zoneData.length; i++){
        // Draw zone lines (Testing only, enable material visibility for debugging)
        var vertices_array = [];
        for(var j = 0; j < zoneData[i].polygonPoints.length; j++){
            var location = findVertexLocationFromLatLon(zoneData[i].polygonPoints[j][0], zoneData[i].polygonPoints[j][1]);
            vertices_array.push(location.x, location.y, location.z);
        }
    
        var zoneGeometry = new THREE.BufferGeometry();
        zoneGeometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices_array, 3 ));
        var zoneColor = getZoneMaterial(zoneData[i].color);
        var zone = new THREE.Line(zoneGeometry, zoneColor);
        zone.name = "Zone~" + zoneData[i].name;
        
        zoneParent.add(zone);

        if( insidePoly([lat, lon], zoneData[i].polygonPoints)){
            console.log("Within zone " + zoneData[i].name );
            zoneName = zoneData[i].name;
            zoneDetails = zoneData[i].info;
            zoneElevation = (zoneData[i].elevation && zoneElevation <= 0) ? zoneData[i].elevation : zoneElevation;
        }
    }
    // Update tracking panels with zone info
    document.getElementById("zone-elevation").textContent = zoneElevation > 0 ? "Currently at " + zoneElevation + "ft" : "Currently at ";
    document.getElementById("zone-name").textContent = zoneName;
    //document.getElementById("zone-info").textContent = zoneDetails;
    
    zoneParent.position.x = 0;
    zoneParent.position.y = 0;
    zoneParent.position.z = 0;
    
    recenterMap(zoneParent);
    if(!DEBUG){
        zoneParent.visible = false;
    } else {
        zoneParent.visible = true;
    }
    scene.add(zoneParent);
}

function recenterMap(mesh){
    // Translate by half the map length and width to center over 0,0
    var zSize = smoothedElevationGrid.points.length * GRID_Z_OFFSET;
    var xSize = smoothedElevationGrid.points[0].length * GRID_X_OFFSET;
    mesh.translateX(xSize / -2.0);
    mesh.translateZ(zSize / -2.0);
} 

function findVertexLocationFromLatLon(latitude, longitude, returnElev = false){
    const safetyMargin = 0.000001;
    // If lat or lon is beyond map bounds, cap it (slightly within)
    if(latitude >= maxSafeLat){
        latitude = maxSafeLat - safetyMargin;
    } else if(latitude <= minSafeLat){
        latitude = minSafeLat + safetyMargin;
    }
    if(longitude >= maxSafeLon){
        longitude = maxSafeLon - safetyMargin;
    } else if(longitude <= minSafeLon){
        longitude = minSafeLon + safetyMargin;
    }

    var neighbors = findNeighborsFromLatLon(latitude, longitude);
    // Take four neighbors and compute grid position & elevation from distances and GRID_X_OFFSET / GRID_Z_OFFSET
    var x = (neighbors[0].x + neighbors[0].x_dist) * GRID_X_OFFSET ;
    var z = (neighbors[0].y + neighbors[0].z_dist) * GRID_Z_OFFSET ;

    // Average distances for the neighbors on each half  (where distance is already normalized to total 1)
    var westSum = (((1 - neighbors[0].z_dist) * neighbors[0].elevation) + ((1-neighbors[2].z_dist) * neighbors[2].elevation))
    var eastSum = (((1 - neighbors[1].z_dist) * neighbors[1].elevation) + ((1-neighbors[3].z_dist) * neighbors[3].elevation))

    // Take each half and get weighted average for the E/W distance
    var weightedElevation = (westSum * (1-neighbors[0].x_dist)) + (eastSum * (1-neighbors[1].x_dist));
    
    var y = (weightedElevation * ELEVATION_MODIFIER) + ROUTE_HOVER + ELEVATION_BOOST;

    if(returnElev){
        return { x : x, y : y, z : z, elev : Math.round(weightedElevation)};
    }

    return { x : x, y : y, z : z};
}

// Returns the coordinates, elevation, and approximate distance from each surrounding grid point (for elevation weighting purposes)
function findNeighborsFromLatLon(latitude, longitude){
    var xSize = smoothedElevationGrid.points.length; // Latitude decreases within the larger N/S array
    var zSize = smoothedElevationGrid.points[0].length; // Longitude decreases within each E/W row

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

    for(var j = 0; j < zSize; j++){
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
            z_dist : Math.abs(latitude - northVal) / (northVal - southVal),
            x_dist : Math.abs(longitude - westVal) / (eastVal - westVal),
            distance : pythagorean_theorem((latitude - northVal), (longitude - westVal)),
            elevation : smoothedElevationGrid.points[northLat][westLon].elevation
        };
    }
    if(northLat >= 0 && eastLon < zSize){
        NENeighbor = {
            y : northLat,
            x : eastLon,
            z_dist : Math.abs(latitude - northVal)  / (northVal - southVal),
            x_dist : Math.abs(longitude - eastVal) / (eastVal - westVal),
            distance : pythagorean_theorem((latitude - northVal), (longitude - eastVal)),
            elevation : smoothedElevationGrid.points[northLat][eastLon].elevation
        };
    }
    if(southLat < xSize && westLon >= 0){
        SWNeighbor = {
            y : southLat,
            x : westLon,
            z_dist : Math.abs(latitude - southVal) / (northVal - southVal),
            x_dist : Math.abs(longitude - westVal)  / (eastVal - westVal),
            distance : pythagorean_theorem((latitude - southVal), (longitude - westVal)),
            elevation : smoothedElevationGrid.points[southLat][westLon].elevation
        };
    }
    if(southLat < xSize && eastLon < zSize){
        SENeighbor = {
            y : southLat,
            x : eastLon,
            z_dist : Math.abs(latitude - southVal)  / (northVal - southVal),
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
    raycaster.setFromCamera( mouse, camera );
    controls.update();
    rotateLandmarksToFollowCamera();
    renderer.render(scene, camera);
}

/*
 Convert the grid of points to triangle-based vertex data (with duplicate points for shared vertexes)
    Z = N ---> S
    X = W ---> E

 Remember that the order the vertexes are created determines the direction of the normal.  Note the swapping of A|B|AB and A|AB|B creation statements for the Tris on opposing walls 
*/
function pointsToTriangles(pointDataArray){
    var zSize = pointDataArray.points.length;
    var xSize = pointDataArray.points[0].length;

    var return_point_array = [];
    var return_color_array = [];
    var return_uv_array = []

    for(var z = 0; z < pointDataArray.points.length - 1; z++){
        var points = pointDataArray.points;
        for(var x = 0; x < points[z].length - 1; x++){
            // Triangle 1 ◣
            return_point_array.push((x * GRID_X_OFFSET), (points[z][x].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, (z * GRID_Z_OFFSET)  );  // a
            return_point_array.push(((x + 1) * GRID_X_OFFSET), (points[z+1][x+1].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, ((z + 1) * GRID_Z_OFFSET) ); // ab
            return_point_array.push(((x + 1) * GRID_X_OFFSET), (points[z][x+1].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, (z * GRID_Z_OFFSET)  ); // b

            var color1 = getColorFromElevation(points[z][x].elevation); // a
            var color2 = getColorFromElevation(points[z][x+1].elevation); // b
            var color3 = getColorFromElevation(points[z+1][x+1].elevation); // ab

            return_color_array.push(color1.r, color1.g, color1.b); // a
            return_color_array.push(color3.r, color3.g, color3.b); // ab
            return_color_array.push(color2.r, color2.g, color2.b); // b

            return_uv_array.push(x / xSize, (zSize - z) / zSize);
            return_uv_array.push((x+1) / xSize, (zSize -(z+1)) / zSize);
            return_uv_array.push((x+1) / xSize, (zSize - z) / zSize);
            
            // Triangle 2 ◥
            return_point_array.push((x * GRID_X_OFFSET), (points[z][x].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, (z * GRID_Z_OFFSET)  ); // a
            return_point_array.push((x * GRID_X_OFFSET), (points[z+1][x].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, ((z + 1) * GRID_Z_OFFSET) ); // b
            return_point_array.push(((x + 1) * GRID_X_OFFSET), (points[z+1][x+1].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, ((z + 1) * GRID_Z_OFFSET) ); //ab
            
            color1 = getColorFromElevation(points[z][x].elevation); // a
            color2 = getColorFromElevation(points[z+1][x+1].elevation); // ab
            color3 = getColorFromElevation(points[z+1][x].elevation); // b

            return_color_array.push(color1.r, color1.g, color1.b); // a
            return_color_array.push(color3.r, color3.g, color3.b); // b
            return_color_array.push(color2.r, color2.g, color2.b); // ab

            return_uv_array.push(x / xSize, (zSize - z) / zSize);
            return_uv_array.push(x / xSize, (zSize - (z+1)) / zSize);
            return_uv_array.push((x+1) / xSize, (zSize - (z+1)) / zSize);
        }
    }

    return { points: return_point_array, colors: return_color_array, uvs: return_uv_array };
}

function sidePointsToTriangles(pointDataArray){
    var return_point_array = [];
    var return_color_array = [];

    var points = pointDataArray.points;

    // Separate loop to add edge tris (enclose the bottom)
    var x_max = (pointDataArray.points[0].length - 1);
    var z_max = (pointDataArray.points.length - 1);

    // East and West edges
    for(var z = 0; z < z_max; z++){
        //West Wall Triangle 1 ◣
        return_point_array.push(0, (points[z][0].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, (z * GRID_Z_OFFSET) );  // a
        return_point_array.push(0, ELEVATION_BASE, (z * GRID_Z_OFFSET) ); // b
        return_point_array.push(0, ELEVATION_BASE, ((z + 1) * GRID_Z_OFFSET) ); // ab

        //West Wall Triangle 2 ◥
        return_point_array.push(0, (points[z][0].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, (z * GRID_Z_OFFSET) ); // a
        return_point_array.push(0, ELEVATION_BASE, ((z + 1) * GRID_Z_OFFSET) ); //ab
        return_point_array.push(0, (points[z+1][0].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, ((z + 1) * GRID_Z_OFFSET) ); // b

        //East Wall Triangle 1 ◣
        return_point_array.push(x_max * GRID_X_OFFSET, (points[z][x_max].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, (z * GRID_Z_OFFSET));  // a
        return_point_array.push(x_max * GRID_X_OFFSET, ELEVATION_BASE, ((z + 1) * GRID_Z_OFFSET)  ); // ab
        return_point_array.push(x_max * GRID_X_OFFSET, ELEVATION_BASE, (z * GRID_Z_OFFSET)); // b

        //East Wall Triangle 2 ◥
        return_point_array.push(x_max * GRID_X_OFFSET, (points[z][x_max].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, (z * GRID_Z_OFFSET)); // a
        return_point_array.push(x_max * GRID_X_OFFSET, (points[z+1][x_max].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, ((z + 1) * GRID_Z_OFFSET)); // b
        return_point_array.push(x_max * GRID_X_OFFSET, ELEVATION_BASE, ((z + 1) * GRID_Z_OFFSET) ); //ab
        
        // All the wall points have the same color, so speed it up
        for(var c = 0; c < 12; c++){
            return_color_array.push(wallColor.r, wallColor.g, wallColor.b);
        }
    }

    // North and South edges
    for(var x = 0; x < x_max; x++){
        //South Wall Triangle 1 ◣
        return_point_array.push(x * GRID_X_OFFSET, (points[0][x].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, 0 );  // a
        return_point_array.push((x + 1) * GRID_X_OFFSET, ELEVATION_BASE, 0 ); // ab
        return_point_array.push(x * GRID_X_OFFSET, ELEVATION_BASE, 0 ); // b

        //South Wall Triangle 2 ◥
        return_point_array.push(x * GRID_X_OFFSET, (points[0][x].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, 0 ); // a
        return_point_array.push((x+1) * GRID_X_OFFSET, (points[0][x+1].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, 0 ); // b
        return_point_array.push((x+1) * GRID_X_OFFSET, ELEVATION_BASE, 0 ); //ab

        //North Wall Triangle 1 ◣
        return_point_array.push(x * GRID_X_OFFSET, (points[z_max][x].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, z_max * GRID_Z_OFFSET);  // a
        return_point_array.push(x * GRID_X_OFFSET, ELEVATION_BASE, z_max * GRID_Z_OFFSET ); // b
        return_point_array.push((x + 1) * GRID_X_OFFSET, ELEVATION_BASE, z_max * GRID_Z_OFFSET ); // ab

        //North Wall Triangle 2 ◥
        return_point_array.push(x * GRID_X_OFFSET, (points[z_max][x].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST, z_max * GRID_Z_OFFSET ); // a
        return_point_array.push((x+1) * GRID_X_OFFSET, ELEVATION_BASE, z_max * GRID_Z_OFFSET ); //ab
        return_point_array.push((x+1) * GRID_X_OFFSET, (points[z_max][x+1].elevation * ELEVATION_MODIFIER) + ELEVATION_BOOST , z_max * GRID_Z_OFFSET); // b

       // All the wall points have the same color, so speed it up
        for(var c = 0; c < 12; c++){
            return_color_array.push(wallColor.r, wallColor.g, wallColor.b);
        }
    }

    return { points: return_point_array, colors: return_color_array };
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

/* 
*  Determine safe mins/maxs to check neighbors in
*/
function findSafeBoundsForPoints(){
    // Because of the choice I made early on to abstract lat/lon out of the equation and solve everything in reverse from grid indices has bit me a tiny bit
    // There are two equally hacky solutions, but this one feels better for the final result (Don't allow any points to be plotted outside the map bounds)
    // We need a safe bounding box, which means finding the minimum edge value for each direction. (Since we converted from polar coordinates and that makes things wonky)

    // by all my thinking, latitude SHOULD be consistent across any given row, but unfortunately that's not the reuslts we got back from Google
    // I don't have a good explanation for why this varied while the Westernmost Longitude line is consistent as I'd expect.  Regardless, picking the smaller instance for safety
    var points = pointsData.points;
    
    var maxA = points.length - 1;
    var maxB = points[0].length - 1;

    minSafeLat = points[maxA][0].latitude;
    minSafeLon = points[maxA][0].longitude; //Westernmost Longitude is consistent so [0,0] would have worked too, I just picked for symmetry with the Latitude variance
    maxSafeLat = points[0][maxB].latitude;
    maxSafeLon = points[0][maxB].longitude;
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
    for(var z = 0; z < arrayToClean.points.length; z++){
        var points = arrayToClean.points;
        for(var x = 0; x < points[z].length; x++){
            elevationArray.points[z][x].elevation = interpolatePoint(z, x, points[z][x].elevation)
        }
    }
    smoothedElevationGrid = elevationArray;
    return elevationArray;
}

function interpolatePoint(index_z, index_x, elevation){
    const smoothingWeight = 1.0 / (SMOOTHING_FACTOR + 0.000001);

    const y_size = pointsData.points.length;
    const x_size = pointsData.points[0].length

    // Set value to average of neighbors E, W, N, and S
    var eastNeighbor  = index_z > 0            ? pointsData.points[index_z - 1][index_x].elevation : elevation;
    var westNeighbor  = index_z < (y_size - 1) ? pointsData.points[index_z + 1][index_x].elevation : elevation;
    var northNeighbor = index_x > 0            ? pointsData.points[index_z][index_x - 1].elevation : elevation;
    var southNeighbor = index_x < (x_size - 1) ? pointsData.points[index_z][index_x + 1].elevation : elevation;

    var NENeighbor    = index_z > 0             && index_x > 0             ? pointsData.points[index_z - 1][index_x - 1].elevation : elevation;
    var NWNeighbor    = index_z < (y_size - 1)  && index_x > 0             ? pointsData.points[index_z + 1][index_x - 1].elevation : elevation;
    var SENeighbor    = index_z > 0             && index_x < (x_size - 1)  ? pointsData.points[index_z - 1][index_x + 1].elevation : elevation;
    var SWNeighbor    = index_z < (y_size - 1)  && index_x < (x_size - 1)  ? pointsData.points[index_z + 1][index_x + 1].elevation : elevation;

    return ( eastNeighbor + westNeighbor + northNeighbor + southNeighbor + NENeighbor + NWNeighbor + SENeighbor + SWNeighbor + ( elevation * smoothingWeight))  / (8.0 + smoothingWeight);
}

function getMapSatelliteMaterial(){
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureAssetPath);

    const satMaterial = new THREE.MeshBasicMaterial({
        map: texture,
    });

    return satMaterial;
}

function getCompassMaterial(opac){
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("assets/compass.png");

    const compMat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: opac,
        map: texture,
    });

    return compMat;
}

function getTrackingPointMaterial(index, length){
    var opacity = 1.0 - ((index * 1.0) / length);
    var mat = new THREE.MeshBasicMaterial({
        transparent: true,
        color: 0x44dd44,
        opacity: opacity
    });
    return mat;
}

function getZoneMaterial(color){
    if (color == null) {
        return zoneMaterial;
    }

    var newMaterial = new THREE.LineBasicMaterial({
        linewidth: 2, 
        color: color,
        linejoin:  'round',
        linecap: 'round',
    });
    return newMaterial;
}

function getLandmarkProperties(landmark){
    const textureLoader = new THREE.TextureLoader();
    var texturePath;

    var iconSize = 0.06;

    switch(landmark.type){
        case "trailhead":
            texturePath = "assets/markers/hike.png";
            break;
        case "peak":
            texturePath = "assets/markers/mountain.png";
            break;
        case "junction":
            texturePath = "assets/markers/signs.png";
            break;
        case "switchbacks":
            texturePath = "assets/markers/switchback.png";
            break;
        case "camp":
            texturePath = "assets/markers/tent.png";
            break;
        case "treeline":
            texturePath = "assets/markers/trees.png";
            iconSize = 0.03;
            break;
        case "river ford":
            texturePath = "assets/markers/water.png";
            iconSize = 0.03;
            break;
        case "lake":
            texturePath = "assets/markers/water.png";
            break;
        default:
            texturePath = "/assets/markers/hike.png";
    }

    const texture = textureLoader.load(texturePath);
    const markerMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const sideMaterial = new THREE.MeshBasicMaterial({ color: 0x5b74f5 });
    return {
        material: markerMaterial,
        sideMaterial: sideMaterial,
        size: iconSize
    };
}



// Output in California time
function formatDate(timestamp){
    var date = new Date(timestamp * 1000);

    var timeString = date.toLocaleTimeString(
        'en-US',
        {
          timeZone: 'pst',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }
    );

    var dateString = date.toLocaleDateString(
        'en-US',
        {
          timeZone: 'pst',
          month: 'long',
          day: 'numeric'
        }
    );

    return  timeString + " (PST), " + dateString;
}

function hideInfoPanel(){
    infoPanel.classList.add("hidden");
}

function hideTrackerPanel(){
    trackerPanel.classList.add("hidden");
}

function showInfoPanel(data){
    hideTrackerPanel();
    document.getElementById("info-title").textContent = data.title;
    document.getElementById("info-summary").textContent = data.information;
    document.getElementById("info-elevation").textContent = data.elevation;
    infoPanel.classList.remove("hidden");

    //swap icon
    var icon = document.getElementById("info-icon");
    icon.removeAttribute('class');
    icon.classList.add('fa-solid');
    icon.className += ' ' + data.icon;
}

function showTrackerPanel(data){
    hideInfoPanel();

    var disclaimer = data.elevEstimated == "true" ?  "(elevation estimated from surrounding topography)" : null;

    document.getElementById("tracker-time").textContent = data.time;
    document.getElementById("tracker-location").textContent = data.location;
    document.getElementById("tracker-elevation").textContent = data.elevation;
    document.getElementById("tracker-type").textContent = humanReadableMessageType(data.type);
    document.getElementById("tracker-disclaimer").textContent = disclaimer;
    trackerPanel.classList.remove("hidden");

    //swap icon
    var icon = document.getElementById("tracker-icon");
    icon.removeAttribute('class');
    icon.classList.add('fa-solid');
    icon.className += ' ' + data.icon;

    // toggle type-specific color
    var header = document.getElementById("tracker-header");
    header.removeAttribute('class');
    header.classList.add('panel-header');
    header.classList.add(data.type);
}

function checkIntersect()
{
	// create an array containing all objects in the scene with which the ray intersects (Visible only)
    var arrayToCheck = []
    arrayToCheck = arrayToCheck.concat(landmarkAndOutlineParent.visible ? landmarkParent.children : []);
    arrayToCheck = arrayToCheck.concat(trackersParent.visible ? trackersParent.children : []);
    arrayToCheck.push(mostRecentTracker);

	var landmarkIntersects = [];
    try{
        landmarkIntersects = raycaster.intersectObjects( arrayToCheck, true );
    }catch(e){
        //probably fine
    }

	// if there is one (or more) intersections
	if ( landmarkIntersects.length > 0 )
	{
		// if the closest object intersected is not the currently stored intersection object
		if ( landmarkIntersects[0].object != INTERSECTED ) 
		{
            try{
                var outline = outlineParent.getObjectByName("O~" + INTERSECTED.name);
                outline.visible = false;
            } catch(e){};
            try{
                outline = trackersOutlineParent.getObjectByName("O~" + INTERSECTED.name);
                outline.visible = false;
            } catch(e){};

			INTERSECTED = landmarkIntersects[0].object;

            if(INTERSECTED.name.startsWith("LM~")){
                var outline = outlineParent.getObjectByName("O~" + INTERSECTED.name);
                outline.visible = true;
            } else if(INTERSECTED.name.startsWith("T~")){
                var outline = trackersOutlineParent.getObjectByName("O~" + INTERSECTED.name);
                outline.visible = true;
            }
		}
	} 
	else // there are no intersections
	{
        if(INTERSECTED ){
            try{
                var outline = outlineParent.getObjectByName("O~" + INTERSECTED.name);
                outline.visible = false;
            } catch(e){};
            try{
                outline = trackersOutlineParent.getObjectByName("O~" + INTERSECTED.name);
                outline.visible = false;
            } catch(e){};
        }
        
		INTERSECTED = null;
	}
}

// Testing purposes only
function checkDebugIntersect(){
    var intersectList = raycaster.intersectObjects( mapParent.children, true );
    if ( intersectList.length > 0 )
	{
        DEBUG_INTERSECTED = intersectList[0];
	} 
	else
	{
        DEBUG_INTERSECTED = null;
    }
}

// Check if coordinates are within a defined polygon
function insidePoly(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};


//  Function to actually grab data from feed
//  I'm hitting a custom Lambda function that handles feed caching so we aren't slamming Spot with too many requests
//  That being said - don't slam me with too many requests :)
function getRemoteFeedData(){
    const url = "https://wdwkhs4lxfbzzazoo6z4dgd6be0kwtpf.lambda-url.us-east-1.on.aws/?spotfeed=" + spotFeedID;
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.send();

    // Poll for new tracking points every 5 minutes
    // Technically Spot sends tracking points every 10 minutes, but because of latency, time acquiring signal, etc, this ends up more like intervals of 7-13 minutes
    // Since 10 minute polling would potentially leave 20 minute updates in half these cases, we're splitting the difference. (And hoping not to overwhelm Lambda)
    setTimeout(getRemoteFeedData, 300000)

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status==200){
            var feed = normalizeSpotFeed(JSON.parse(http.responseText));
            createTrackingPath(feed);
        }
    }
}

function normalizeSpotFeed(data){
    console.log("Source: " + data.source);
    var feed = [];
    var respMessages = data.feed.response.feedMessageResponse.messages.message; //Ew, Spot.  What on earth?
    for(var i = 0; i < respMessages.length; i++){
        respMessages[i]
        var trackingPoint = {
            type: mapMessageType(respMessages[i].messageType),
            lat: respMessages[i].latitude,
            lon: respMessages[i].longitude,
            timestamp: respMessages[i].unixTime,
            altitude: respMessages[i].altitude
        };
        feed.push(trackingPoint);
    }

    return feed;
}

function onDocumentMouseMove( event ){
	mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
    checkIntersect();
    checkDebugIntersect();
}

function onDocumentMouseClick( event ){
    // Use INTERSECT to grab information and update the panel if landmark
    if(INTERSECTED && INTERSECTED.name.startsWith("LM")){
        //console.log(INTERSECTED);
        var index = INTERSECTED.name.split("~")[1];
        showInfoPanel({
            title: landmarkData[index].tag,
            elevation: landmarkData[index].elev,
            information: landmarkData[index].info,
            icon: landmarkData[index].iconname
        });
    }

    if(INTERSECTED && INTERSECTED.name.startsWith("T")){
        // "T-" + type + "-" + timestamp + "-" + lat + "-" + lon + "-" + loc.elev;
        var fields = INTERSECTED.name.split("~");
        var dateString = formatDate(parseInt(fields[2]));

        showTrackerPanel({
            time: dateString,
            type: fields[1],
            elevation: "Elev: " + Math.round(metersToFeet(fields[5])) + " ft",
            elevEstimated: fields[6],
            location: "Lat/Lon: " + fields[3] + ", " + fields[4],
            icon: messageTypeIcon(fields[1])
        });
    }

    // No valid objects clicked on
    if(!INTERSECTED){
        hideInfoPanel();
        hideTrackerPanel();
    }

    // Debug only - can remove before release (or leave for fun)
    if(DEBUG && DEBUG_INTERSECTED){
        var point = DEBUG_INTERSECTED.point;
        // Hacky hacky hacky, but it'll do
        // Find x/y distance from corner points (where min/max lat/long are known)
        // Use that distance to figure out our _approximate_ GPS coordinates
        // not exact, but good enough for debugging
        const x_width = GRID_X_OFFSET * (pointsData.points[0].length - 1 );
        const z_width = GRID_Z_OFFSET * (pointsData.points.length - 1 );

        const zMin = 1 * (z_width / 2.0);
        const xMin = -1 * (x_width / 2.0);

        const x_ratio = (point.x - xMin) / x_width;
        const z_ratio = -1 * (point.z - zMin) / z_width;

        // Edge + ratio of the total range = position
        const lon = minSafeLon + (x_ratio * (maxSafeLon - minSafeLon));
        const lat = minSafeLat + (z_ratio * (maxSafeLat - minSafeLat));

        console.log("Testing Lat: " + lat + ", Lon: " + lon);
        updateZone(lat, lon, 0);
    }
}

// DEBUG
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 192) {
        DEBUG = true;
        console.log("debug mode enabled");
    }
};

// Map to our standardized event types
//   CHECK-IN
//   TRACK
//   MESSAGE
function mapMessageType(type){
    switch(type){
        case "OK":
            return "CHECK-IN";
        case "TRACK":
            return "TRACK";
        case "MESSAGE":
            return "MESSAGE";
        default:
            return "CHECK-IN";
    }
}

function humanReadableMessageType(type){
    switch(type){
        case "OK":
        case "CHECK-IN":
            return "Check-in";
        case "TRACK":
            return "Tracking Point";
        case "MESSAGE":
            return "Message";
        default:
            return "Tracking Point";
    }
}

// Map icon
function messageTypeIcon(type){
    switch(type){
        case "OK":
        case "CHECK-IN":
            return "fa-walkie-talkie";
        case "TRACK":
            return "fa-location-dot";
        case "MESSAGE":
            return "fa-mail";
        case "LATEST":
            return "fa-location-arrow";
        default:
            return "fa-check";
    }
}

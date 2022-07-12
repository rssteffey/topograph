// Swap these out for different uses
const pointsData = whitneyElevationData;
const spotFeedID = "";

// Render Mountain

// param determines mountain data to render (ie '/peakTracker?location=whitney')
// This allows for testing of the code locally before we fly to Whitney

// Check location within polygon (to put info about points on the hike)

var scene = new THREE.Scene();
var viewport, renderer, camera, controls, particleDistance, centerPoint = {};

var cube;



init();

function init(){
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    viewport = document.getElementById('viewport');

    renderer = new THREE.WebGLRenderer();
    //renderer = new THREE.WebGLRenderer({ antialias: 0, clearAlpha: 0, alpha:true });
    renderer.setSize(WIDTH, HEIGHT);
    //renderer.setClearColor( 0x000000, 0 ); // the default
    //renderer.shadowMap.enabled = true;
    viewport.appendChild(renderer.domElement);
    window.addEventListener( 'resize', onWindowResize, false );
    
    scene.fog = new THREE.Fog( 0x111111, 22000, 25000 );

    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    //camera.position.set(0, 10000, -20000 );
    scene.add(camera);

    //createGroundPlane();
    createMountain();
    animate();
}

function createMountain(){

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    //Interpolate duplicates to avoid rice paddies (The original data is a stepped topo source, so many sampled points come from the same elevation contours)
    cleanPointData(pointsData);

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

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function cleanPointData(pointsDataArray){
    //Iterate over full data array, converting into points for mesh

    //If point is identical elevation to either last evaluated point, or neighbor directly north
    // interpolatePoint()
}

function interpolatePoint(index_x, index_y){
    // Set value to average of neighbors E, W, N, and S

    // This post-cleanup may end up causing odd diagonal ridges on the final map
    // If that's the case, we can drop to a lower pointDensity and regenerate the initial map
    // (Shawn if you end up doing that - make sure to manually tweak the peak elevation to be precise)
}

// Todo: Function to access cached points feed, only hitting Spot API if system clock has been at least 10 minutes since last access
// (Let's not risk accidentally getting our feed rate-limited/shut down)
// @param pollLimit : time in seconds between 
// function getLatestTrackingData(pollLimit)

// Todo: Function to actually grab data from feed (swap this method to add other GPS unit support)
// function getRemoteFeedData()

// Todo : Function to turn spot feed into generic points list (swap this to add other GPS unit support)
// function normalizeSpotFeed(){}

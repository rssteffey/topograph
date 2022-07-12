// Render Mountain

// param determines mountain data to render (ie '/peakTracker?location=whitney')
// This allows for testing of the code locally before we fly to Whitney

// Check location within polygon (to put info about points on the hike)

var scene = new THREE.Scene();
var viewport, renderer, camera, controls, particleDistance, centerPoint = {};

var cube;

// Reading json from an external file is a pain, so it's a non-dynamic js file
const pointsData = whitneyElevationData;

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

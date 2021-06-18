import * as THREE from 'https://cdn.skypack.dev/three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

// renderer
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// camera position
camera.position.z = 5;


// add a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// add a space background
scene.background = new THREE.CubeTextureLoader()
    .setPath("textures/cubeMaps/")
    .load([
        'corona_bk.png',
        'corona_dn.png',
        'corona_ft.png',
        'corona_lf.png',
        'corona_rt.png',
        'corona_up.png'
    ]);

// add a sun
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );


function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
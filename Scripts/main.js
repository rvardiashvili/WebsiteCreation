import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

const container = document.getElementsByClassName("container");
const scene = new THREE.Scene();
//create a new camera with positions and angles
const center = new THREE.Group();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
center.add(camera);
scene.add(center);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#three')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 200;
camera.position.y = 0;
camera.position.x = 0;
camera.lookAt(0, 0, 0);



const mesh = new THREE.Mesh(
    new THREE.SphereGeometry( 100, 16, 8 ),
    new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } )
);
scene.add(mesh);

const mesh2 = new THREE.Mesh(
    new THREE.SphereGeometry( 50, 16, 8 ),
    new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } )
);
scene.add(mesh2);

const mesh3 = new THREE.Mesh(
    new THREE.SphereGeometry( 25, 16, 8 ),
    new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } )
);
scene.add(mesh3);


var lastScrollTop = container[0].scrollTop;
var limit = container[0].scrollHeight;
console.log(limit)

var currentSection = 0;

function scrollFunction(){
    var st = container[0].scrollTop;
    center.rotation.x = (st/limit) * 2 * Math.PI
    lastScrollTop = st;
    currentSection = Math.round(4*st/limit);
    console.log(currentSection);

}


container[0].onscroll = scrollFunction;

function animate(){
    requestAnimationFrame(animate);
    mesh2.rotation.y -= 0.002;
    mesh.rotation.z += 0.002;
    renderer.render(scene, camera);
}


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

animate();




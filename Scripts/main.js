import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

const container = document.getElementsByClassName("container");
const scene = new THREE.Scene();
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
var currentSection = 0;
var firstLoad = [true, true, true, true];
function scrollFunction(){
    var st = container[0].scrollTop;
    center.rotation.x = (st/limit) * 2 * Math.PI
    lastScrollTop = st;
    currentSection = Math.round(4*st/limit);
    console.log(currentSection);
    if(currentSection == 0 && firstLoad[0]){
        var ondone = function() {typeSingle(
            document.getElementById("intro-text"),
            "Transforming your vision into a stunning, responsive website.",
            15,
            false
        );}
        typeSingle(
            document.getElementById("intro-header"),
            "Web Developement Services",
            15,
            false,
            ondone
        )
        firstLoad[0] = false
    }
    if(currentSection == 1 && firstLoad[1]){
        var ondone = function() {TypeBulletPoint()};
        typeSingle(
            document.getElementById("service-header"),
            "My Services",
            15,
            false,
            ondone
        );
        firstLoad[1] = false;
    }
    if(currentSection == 2 && firstLoad[2]){
        var ondone = function(){typeSingle(
            document.getElementById("why-me"),
            "I blend creativity with technical expertise to deliver outstanding digital experiences. I am dedicated to ensuring your website stands out in the digital landscape.",
            15
        );}
        typeSingle(
            document.getElementById("why-me-header"),
            "Why Choose Me?",
            15,
            false,
            ondone
        );
        firstLoad[2] = false;
    }
    
}


scrollFunction();
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


import * as THREE from 'three';
import { Scene } from 'three';

const scene = new THREE.Scene();
const sphere = new THREE.SphereGeometry();
const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000));
const box = new THREE.BoxHelper(object, 0xffff00);

let renderer, camera;


function render() {

    renderer.render( scene, camera );

}
function init() {
    //camera 
    const lookUp = 10;
    const offset =  0.3;
    camera = new THREE.PerspectiveCamera(0, window.innerHeight / window.innerWidth, lookUp, offset)
    //light scene 
    const directionalLight1 = new THREE.DirectionalLight(0xffeeff, 0.8);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(- 1, 0.5, - 1);
    scene.add(directionalLight2);

    const ambientLight = new THREE.AmbientLight(0xffffee, 0.25);
    scene.add(ambientLight);

    //bound 
    

    //cubo
    let heightCubo = 20;
    let weightCubo = 40
    let colorMaterial = "#FFF8E1";
    const geometry = new THREE.BoxGeometry(heightCubo, weightCubo);
    const material =  new THREE.MeshBasicMaterial(colorMaterial);
    const cube = new THREE.Mesh( geometry, material );
    scene.add(cube, box)
}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

init();
onWindowResize();


renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById("contextMap");
import * as THREE from "three";

//---------------------------------------------------------//
//                     VARIABLES
//---------------------------------------------------------//


//Colors
const eggplant = 0x0c000a;
const magenta = 0xff00ff;
const cyan = 0x00ffff;
const white = 0xffffff;
const gray = 0x999999;

//Environment objects
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer({ antialias: true });

//3d object Objects
var sphereGeometry = new THREE.SphereGeometry(0, 10, 32);
var cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 64);
var grayMaterial = new THREE.MeshLambertMaterial({ color: gray });
var sphere = new THREE.Mesh(sphereGeometry, grayMaterial);
var cylinder = new THREE.Mesh(cylinderGeometry, grayMaterial);

//lights
var topLight = new THREE.DirectionalLight(cyan, 0.5);
var rightLight = new THREE.DirectionalLight(magenta, 0.5);
var backLight = new THREE.DirectionalLight(white, 1);
var frontLight = new THREE.DirectionalLight(white, 0.5);

//to animate tilt
var tiltFlag = true;

//---------------------------------------------------------//
//                      FUNCTIONS
//---------------------------------------------------------//

function rendererSetup() {
  renderer.setClearColor(eggplant);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function addSceneObjects() {
  scene.add(sphere);
  scene.add(cylinder);
  cylinder.rotation.x = 1.4;
}

const addSceneLights = () => {
  scene.add(topLight);
  scene.add(rightLight);
  scene.add(backLight);
  scene.add(frontLight);
  topLight.position.set(10, 25, 25);
  rightLight.position.set(25, 15, 25);
  backLight.position.set(-25, -25, -100);
  frontLight.position.set(0, 10, 250);
}

function setCameraPosition() {
  camera.position.z = 5;
}

function animate() {


  requestAnimationFrame(animate);

  //resize frame and objects dynamically
  resizeFrameDynamically();

  tiltAnimation();
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.05;


  renderer.render(scene, camera);

  function tiltAnimation() {

    if (tiltFlag == false) {
      cylinder.rotation.y += 0.1;
      cylinder.rotation.x += 0.001;
      sphere.position.x -= 0.02;
      sphere.position.y -= 0.01;
      sphere.position.z += 0.025;
      console.log("going left");
      if (sphere.position.x <= -5) tiltFlag = true;
    }
    console.log(sphere.position.x);
    if (tiltFlag == true) {
      cylinder.rotation.y += 0.1;
      cylinder.rotation.x -= 0.001;
      sphere.position.x += 0.02;
      sphere.position.y += 0.02;
      sphere.position.z -= 0.05;
      console.log("going right");
      if (sphere.position.x >= 5) tiltFlag = false;
      console.log(sphere.position.x);
    }
  }

  function resizeFrameDynamically() {
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.fov =
        Math.atan(window.innerHeight / 2 / camera.position.z) *
        2 *
        THREE.Math.RAD2DEG;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectMatrix();
    });
  }

}

export { addSceneLights, rendererSetup, addSceneObjects, animate, setCameraPosition };
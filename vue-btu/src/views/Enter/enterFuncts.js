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
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let renderer = new THREE.WebGLRenderer({ antialias: true });

//3d object Objects
// let sphereGeometry = new THREE.SphereGeometry(0, 10, 32);
// let sphere = new THREE.Mesh(sphereGeometry, grayMaterial);
let cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 64);
let grayMaterial = new THREE.MeshLambertMaterial({ color: gray });
let cylinder = new THREE.Mesh(cylinderGeometry, grayMaterial);

//lights
let topLight = new THREE.DirectionalLight(cyan, 0.5);
let rightLight = new THREE.DirectionalLight(magenta, 0.5);
let backLight = new THREE.DirectionalLight(white, 1);
let frontLight = new THREE.DirectionalLight(white, 0.5);

//animation letiables
let tiltFlag = true;
// let switchSign = 1;
// let random = 0;


//---------------------------------------------------------//
//                      FUNCTIONS
//---------------------------------------------------------//

function rendererSetup() {
  renderer.setClearColor(eggplant);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function addSceneObjects() {

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


  resizeFrameDynamically();
  tiltAnimation();



  renderer.render(scene, camera);

  function tiltAnimation() {
    // random = Math.random(1) * switchSign;

    xLogic();




    function xLogic() {

      if (tiltFlag == false) {
        cylinder.rotation.x -= 0.006;
        // cylinder.rotation.z -= 0.003 * random;


        console.log("going left " + cylinder.rotation.z);
        if (cylinder.rotation.x <= 1) {
          tiltFlag = true;
          // if (Math.random < 0.5);
          // switchSign = -1;
        }
      }

      if (tiltFlag == true) {
        cylinder.rotation.x += 0.006;
        // cylinder.rotation.z += 0.003 * random;
        console.log("going right " + cylinder.rotation.z);
        if (cylinder.rotation.x >= 2) {
          tiltFlag = false;
          // if (Math.random < 0.5)
          // switchSign = -1;
        }
      }

    }
  }


  //resize frame and objects dynamically
  function resizeFrameDynamically() {
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.fov =
        Math.atan(window.innerHeight / 2 / camera.position.z) *
        2 *
        THREE.Math.RAD2DEG;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  }

}

export { addSceneLights, rendererSetup, addSceneObjects, animate, setCameraPosition };
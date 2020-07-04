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

//animation LETiables
let tiltFlagX = true;
let tiltFlagZ = true;
// let switchSign = 1;
// let random = 0;

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let INTERSECTED;



//---------------------------------------------------------//
//                      FUNCTIONS
//---------------------------------------------------------//

function rendererSetup() {
  renderer.setClearColor(eggplant);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  window.addEventListener('click', onMouseClick, false);
  window.addEventListener('mouseover', onMouseOver, false);
  window.addEventListener('mouseout', onMouseOut, false);

}

function addSceneObjects() {

  scene.add(cylinder);
  cylinder.rotation.x = degToRad(60);
  cylinder.rotation.z = degToRad(30);

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

//degrees to Radians
function degToRad(deg) {
  return deg * 0.01745329252;
}


function onMouseOver(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;


  makeCursorHand();

  function makeCursorHand() {
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    let intersects = raycaster.intersectObjects(scene.children);

    // if there is an object in the raycaster
    if (intersects.length > 0) {
      $('html,body').css('cursor', 'pointer');
    } else {
      $('html,body').css('cursor', 'default');
    }

  }

}

function onMouseOut(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;


  makeCursorHand();

  function makeCursorHand() {
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    let intersects = raycaster.intersectObjects(scene.children);

    // if there is an object in the raycaster
    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {

        INTERSECTED = intersects[0].object;
        document.body.style.cursor = "pointer";
      }
    }

  }

}




function onMouseClick(event) {

  console.log("working or what?");

  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  rayCaster();

  function rayCaster() {
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    let intersects = raycaster.intersectObjects(scene.children);

    // if there is an object in the raycaster
    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {

        INTERSECTED = intersects[0].object;
        INTERSECTED.material.emissive.setHex(cyan);
      }
    } else {
      if (INTERSECTED) {

        INTERSECTED.material.emissive.setHex(eggplant);
      }

      INTERSECTED = null;
    }

  }
}

function animate() {


  requestAnimationFrame(animate);


  resizeFrameDynamically();
  tiltAnimation();


  renderer.render(scene, camera);






  function tiltAnimation() {
    // random = Math.random(1) * switchSign;

    xLogic();
    zLogic();

    function xLogic() {

      if (tiltFlagX == false) {
        cylinder.rotation.x -= degToRad(0.035);
        // cylinder.rotation.z -= 0.003 * random;


        // console.log("going up " + cylinder.rotation.z);
        if (cylinder.rotation.x <= 1) {
          tiltFlagX = true;
          // if (Math.random < 0.5);
          // switchSign = -1;
        }
      }

      if (tiltFlagX == true) {
        cylinder.rotation.x += degToRad(0.035);
        // cylinder.rotation.z += 0.003 * random;

        // console.log("going down " + cylinder.rotation.z);
        if (cylinder.rotation.x >= 1.5) {
          tiltFlagX = false;
          // if (Math.random < 0.5)
          // switchSign = -1;
        }
      }

    }
    function zLogic() {

      if (tiltFlagZ == false) {
        cylinder.rotation.z -= 0.006;

        // console.log("going left " + cylinder.rotation.z);
        if (cylinder.rotation.z <= 2.5) {
          tiltFlagZ = true;
        }
      }

      if (tiltFlagZ == true) {
        cylinder.rotation.z += 0.012;

        // console.log("going right " + cylinder.rotation.z);
        if (cylinder.rotation.z >= 3.5) {
          tiltFlagZ = false;

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
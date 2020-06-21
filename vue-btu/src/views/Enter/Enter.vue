<template>
  <div class="enter">
    <h1 style="text-align: center;">Site under development</h1>
    <!-- <router-link class="router-link" to="/home">Home</router-link> -->
  </div>
</template>

<style scoped lang="scss">
@import "./enter.scss";
</style>

<script>
import * as THREE from "three";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0x0c000a);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectMatrix();
});

var sphereGeometry = new THREE.SphereGeometry(0, 10, 32);
var cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 64);
var greenMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
var grayMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
var sphere = new THREE.Mesh(sphereGeometry, greenMaterial);
var cylinder = new THREE.Mesh(cylinderGeometry, grayMaterial);
scene.add(sphere);
scene.add(cylinder);

camera.position.z = 5;

const magenta = 0xff00ff;
const cyan = 0x00ffff;

var topLight = new THREE.DirectionalLight(cyan, 0.5);
topLight.position.set(10, 25, 25);
var rightLight = new THREE.DirectionalLight(magenta, 0.5);
rightLight.position.set(25, 15, 25);
var backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(-25, -25, -100);
var frontLight = new THREE.DirectionalLight(0xffffff, 0.5);
frontLight.position.set(0, 10, 250);
scene.add(topLight);
scene.add(rightLight);
scene.add(backLight);
scene.add(frontLight);

var flag = true;
//
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.05;
  cylinder.rotation.x += 0.01;

  if (flag == false) {
    sphere.position.x -= 0.02;
    sphere.position.y -= 0.01;
    sphere.position.z += 0.025;
    console.log("going left");
    if (sphere.position.x <= -5) flag = true;
  }
  console.log(sphere.position.x);
  if (flag == true) {
    sphere.position.x += 0.02;
    sphere.position.y += 0.02;
    sphere.position.z -= 0.05;
    console.log("going right");
    if (sphere.position.x >= 5) flag = false;
    console.log(sphere.position.x);
  }

  renderer.render(scene, camera);
}

animate();

export default {};
</script>

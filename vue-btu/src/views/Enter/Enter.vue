<template>
  <div class="enter">
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
renderer.setClearColor("black");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectMatrix();
});

var geometry = new THREE.SphereGeometry(0, 10, 32);
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;
var light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

var flag = true;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.02;

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

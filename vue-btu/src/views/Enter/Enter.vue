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

var geometry = new THREE.SphereGeometry(0, 32, 32);
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  var light = new THREE.PointLight(0xffffff, 1, 500);
  light.position.set(10, 0, 25);
  scene.add(light);

  renderer.render(scene, camera);
}

animate();

export default {};
</script>

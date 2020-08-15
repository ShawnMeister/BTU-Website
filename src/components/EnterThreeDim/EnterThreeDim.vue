<template>
  <div class="enter" id="enter">
    <div class="heyoWrapper" v-bind:style="{cursor: selectedCursor}">
      <h1>HEYO</h1>
    </div>

    <span>
      <!-- <router-link id="home" class="router-link" to="/home">Home</router-link> -->
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "./enterThreeDim.scss";
</style>

<script>
import * as enterFuncts from "./enterFuncts.js";

enterFuncts.rendererSetup();
enterFuncts.addSceneObjects();
enterFuncts.addSceneLights();
enterFuncts.setCameraPosition();
enterFuncts.animate();
const el = enterFuncts.cursorData.el;
const data = enterFuncts.cursorData.data;

export default {
  el,
  data
};
</script>

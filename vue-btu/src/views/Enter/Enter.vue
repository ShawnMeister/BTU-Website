<template>
  <div class="enter">
    <span>
      <router-link id="home" class="router-link" to="/home">Home</router-link>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "./enter.scss";
</style>

<script>
import * as enterFuncts from "./enterFuncts.js";

enterFuncts.rendererSetup();
enterFuncts.addSceneObjects();
enterFuncts.addSceneLights();
enterFuncts.setCameraPosition();
enterFuncts.animate();

export default {};
</script>

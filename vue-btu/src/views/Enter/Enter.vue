<template>
  <div class="enter">
    <span>
      <!-- <router-link id="home" class="router-link" to="/home">Home</router-link> -->
    </span>
    <EnterThreeDim />
  </div>
</template>

<style scoped lang="scss">
@import "./enter.scss";
</style>

<script>
import EnterThreeDim from "@/components/EnterThreeDim/EnterThreeDim.vue";

//Not sure if name should be Home or Enter
export default {
  name: "Enter",
  components: {
    EnterThreeDim
  }
};
</script>

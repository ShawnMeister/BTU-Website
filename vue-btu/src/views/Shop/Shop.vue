<template>
  <div class="shop">
    <!-- <HelloWorld msg="Hello World" lnk="<a href='https://www.google.com' > I am a google link </a>" /> -->

    <div class="headline">Break The Universe</div>

    <div id="merch-grid">
      <div v-for="n  in 99 " :key="n" class="shirt">
        <h3>asdf</h3>
        {{msg}}
        <img src="@/assets/btu-standard-shirt.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "./shop.css";
</style>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";

export default {
  data: function() {
    return { msg: "dude really?" };
  }
};
</script>

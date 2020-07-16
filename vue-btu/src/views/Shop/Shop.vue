<template>
  <div class="shop">
    <!-- <HelloWorld msg="Hello World" lnk="<a href='https://www.google.com' > I am a google link </a>" /> -->

    <div class="headline">Break The Universe</div>

    <!-- <div v-if="showShirtsFlag===false">
      <button v-on:click="showShirtsFlag=true;">CLICK ME TO SHOW SHIRTS</button>
    </div>
    <div v-if="showShirtsFlag===true">
      <button v-on:click="showShirtsFlag=false;">CLICK ME TO SHOW SHIRTS</button>
    </div>
    <div id="merch-grid" v-show="showShirtsFlag===true">
      <div v-for="n  in 3 " :key="n" class="shirt">
        <h3>asdf</h3>
        {{msg}}
        <img src="@/assets/btu-standard-shirt.png" alt />
      </div>
    </div>-->

    <div>
      <button v-on:click="showShirtsFlag = !showShirtsFlag">CLICK ME TO SHOW SHIRTS</button>
    </div>

    <div id="merch-grid" v-show="showShirtsFlag">
      <div v-for="n  in 3 " :key="n" class="shirt">
        <h3>Sexy Shirt</h3>
        <p>{{msg}}</p>
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
    return { msg: "dude really?", showShirtsFlag: false };
  }
};
</script>

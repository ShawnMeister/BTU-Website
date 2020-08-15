<template>
  <div class="home">
    <!-- <HelloWorld msg="Hello World" lnk="<a href='https://www.google.com' > I am a google link </a>" /> -->

    <router-link id="shop" class="router-link" to="/shop">Shop</router-link>
  </div>
</template>

<style scoped lang="scss">
@import "./home.scss";
</style>

<script>
// @ is an alias to /src
//this is how you import a component into a View
// import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";
// export default {
//   name: "Home",
//   components: {
//     HelloWorld
//   }
// };
</script>

<template>
  <div class="home">
    <HelloWorld msg="Hello World" lnk="<a href='https://www.google.com' > I am a google link </a>" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

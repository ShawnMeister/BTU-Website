<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|
      <router-link to="/shop">Shop</router-link>&nbsp;|
      <router-link to="/create">Create Post</router-link>&nbsp;|
      <router-link to="/posts">Posts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cantarell&family=Iceberg&display=swap");
//
///Colors
$btu-red: rgba(169.000005126, 104.00000140071, 137.00000703335, 1);
$btu-blue: rgba(120.00000044703, 179.00000452995, 211.0000026226, 1);
$btu-green: rgba(94.000001996756, 187.00000405312, 180.00000447035, 1);
$btu-medium: rgba(56.000000461936, 73.000003248453, 97.000001817942, 1);
$btu-black: rgba(19.00000076741, 15.000000055879, 38.00000153482, 1);
$btu-dry_ginger: rgba(117.00000062585, 70.000003427267, 76.000003069639, 1);
$btu-juicy_ginger: rgba(111.00000098348, 70.000003427267, 55.000000521541, 1);
$btu-pickled_ginger: rgba(233.0000013113, 190.0000038743, 152.00000613928, 1);
$btu-dry_red: rgba(103.00000146031, 63.000000044703, 89.000002294779, 1);
$btu-juicy_red: rgba(90.000002235174, 38.00000153482, 61.000000163913, 1);
$btu-dry_blue: rgba(54.000000581145, 97.000001817942, 126.00000008941, 1);
$btu-juicy_blue: rgba(44.000001177192, 74.000003188848, 103.00000146031, 1);
$btu-dry_green: rgba(48.000000938773, 105.0000013411, 110.00000104308, 1);
$btu-juicy_green: rgba(34.000001773238, 83.000002652407, 73.000003248453, 1);
$btu-dry_purple: rgba(74.000003188848, 79.000002890825, 117.00000062585, 1);
$btu-juicy_purple: rgba(27.000000290573, 29.000000171363, 69.000003486872, 1);
$btu-juicy_black: rgba(12.000000234693, 0, 10.000000353903, 1);
$btu-dry_black: rgba(62.000000104308, 58.000000342727, 63.000000044703, 1);
$btu-juicy_steel: rgba(45.000001117587, 42.000001296401, 61.000000163913, 1);
$btu-dry_steel: rgba(58.000000342727, 63.000000044703, 80.000002831221, 1);

body {
  background-color: $btu-dry_black !important;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $btu-green;

    .no-border {
      border-width: 0px !important;
    }

    .btn-primary {
      background-color: $btu-juicy_blue;
      color: $btu-green;
      border-color: $btu-dry-blue;
    }

    .btn-primary:hover {
      background-color: $btu-dry_blue;
    }

    th {
      background-color: $btu-juicy_green;
      color: $btu-blue;
    }
    //since delete button is part of the table, made this class
    //for the actual data
    .t-data {
      background-color: $btu-green !important;
      color: $btu-juicy_blue !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: Iceberg, Arial, sans-serif;
      text-shadow: -2px 2px 2px $btu-juicy_green;
    }

    h4 {
      color: $btu-blue;
    }

    #nav {
      padding: 30px;
      font-family: Cantarell, Arial, sans-serif;

      a {
        font-weight: bold;
        color: $btu-green;
        text-decoration: none;

        &.router-link-exact-active {
          color: $btu-red;
        }
      }
      a:hover {
        color: $btu-juicy_ginger;
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Login</h1>
    <br />Username:
    <input v-model="username" placeholder />
    <br />
    <br />Password:
    <input type="password" v-model="password" placeholder />
    <br />
    <br />
    <button v-on:click="submit" class="btn btn-primary font-weight-bold">
      Submit
    </button>
    <br />
    <br />
    The username is {{ username }}
  </div>
</template>

<script >
// import {Vue} from 'vue-property-decorator';
require('dotenv').config()

export default {
  data () {
    return {
      username: 'test',
      password: ''
    }
  },
  methods: {
    submit: function (event) {
      alert(this.username)
      alert(process.env.DB_PASS)
    }
  }
}
</script>

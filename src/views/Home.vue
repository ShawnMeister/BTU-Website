<template>
  <form @submit.prevent="addUser">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>Login</h1>
      <br />Username:
      <input v-model="user.username" placeholder />
      <br />
      <br />Password:
      <input type="password" v-model="user.password" placeholder />
      <br />
      <br />
      <button class="btn btn-primary font-weight-bold">
        Submit
      </button>
      <br />
      <br />
    </div>
  </form>
</template>

<script >
// import {Vue} from 'vue-property-decorator';

export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    addUser () {
      const uri = 'http://localhost:8081/users/authenticate'
      this.axios.post(uri, this.user).then(() => {
        this.$router.push({ name: 'users' })
      })
    }
  }
}
</script>

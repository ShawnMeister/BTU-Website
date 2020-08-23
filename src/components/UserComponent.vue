// IndexComponent.ts

<template>
  <div>
    <h1>Posts</h1>
    <div class="row">
      <div class="col-md-8 offset-md-3">
        <div class="row">
          <div class="col-md-9"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary"
              >Create User</router-link
            >
          </div>
        </div>
        <br />

        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <h4>Username</h4>
              </th>
              <th>
                <h4>Password</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="users.length == 0">
              <td class="t-data">Not</td>
              <td class="t-data">Even</td>
              <td class="t-data">Any Data</td>
              <td class="no-border"></td>
            </tr>
            <tr v-for="user in users" :key="user._id">
              <td class="t-data">{{ user.username }}</td>
              <td class="t-data">{{ user.password }}</td>

              <td class="no-border"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    const uri = 'http://localhost:8081/users'
    this.axios.get(uri).then((response) => {
      this.users = response.data
    })
  },
  methods: {

  }
}
</script>

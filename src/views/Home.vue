<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<h1>This is the home page.</h1>
		<br />
		<h3>Now login</h3>Username:
		<input v-model="username" placeholder="username" />
		<br />
		<br />Password:
		<input v-model="password" placeholder="password" />
		<br />
		<br />
		<button class="btn btn-primary font-weight-bold">Submit</button>
		<br />
		<br />

		The username is {{username}}
	</div>
</template>

<script lang="ts">
	import {Vue} from 'vue-property-decorator';


	export default class Home extends Vue {
		data() {
			return {
				username: '',
				password: '',
			}
		}
	}
</script>

// CreateComponent.vue

<template>
	<div>
		<h1>Create A Post</h1>
		<form @submit.prevent="addPost">
			<div class="row">
				<div class="col-md-6 offset-md-3 mt-2">
					<div class="form-group">
						<label>
							<h4>Title</h4>
						</label>
						<input type="text" class="form-control" v-model="post.title" />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 offset-md-3">
					<div class="form-group">
						<label>
							<h4>Body</h4>
						</label>
						<textarea class="form-control" v-model="post.body" rows="5"></textarea>
					</div>
				</div>
			</div>
			<br />
			<div class="form-group">
				<button class="btn btn-primary  font-weight-bold">Create</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				post: {},
			};
		},
		methods: {
			addPost() {
				let uri = "http://localhost:4000/posts/add";
				this.axios.post(uri, this.post).then(() => {
					this.$router.push({ name: "posts" });
				});
			},
		},
	};
</script>
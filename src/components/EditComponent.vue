// EditComponent.vue

<template>
	<div>
		<h1>Edit Post</h1>
		<form @submit.prevent="updatePost">
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
				<button class="btn btn-primary">Update</button>
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
		created() {
			let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
			this.axios.get(uri).then((response) => {
				this.post = response.data;
			});
		},
		methods: {
			updatePost() {
				let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
				this.axios.post(uri, this.post).then(() => {
					this.$router.push({ name: "posts" });
				});
			},
		},
	};
</script>
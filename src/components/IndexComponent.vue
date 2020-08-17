// IndexComponent.ts

<template>
	<div>
		<h1>Posts</h1>
		<div class="row">
			<div class="col-md-8 offset-md-3">
				<div class="row">
					<div class="col-md-9"></div>
					<div class="col-md-2">
						<router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
					</div>
				</div>
				<br />

				<table class="table table-hover">
					<thead>
						<tr>
							<th>
								<h4>Title</h4>
							</th>
							<th>
								<h4>Body</h4>
							</th>
							<th>
								<h4>Actions</h4>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-if="posts.length==0">
							<td class="t-data">Not</td>
							<td class="t-data">Even</td>
							<td class="t-data">Any Data</td>
							<td class="no-border"></td>
						</tr>
						<tr v-for="post in posts" :key="post._id">
							<td class="t-data">{{ post.title }}</td>
							<td class="t-data">{{ post.body }}</td>
							<td class="t-data">
								<router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link>
							</td>
							<td class="no-border">
								<button @click.prevent="deletePost(post._id)" class="btn btn-danger">Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				posts: [],
			};
		},
		created() {
			let uri = "http://localhost:4000/posts";
			this.axios.get(uri).then((response) => {
				this.posts = response.data;
			});
		},
		methods: {
			deletePost(id) {
				let uri = `http://localhost:4000/posts/delete/${id}`;
				this.axios.delete(uri).then((response) => {
					this.posts.splice(this.posts.indexOf(id), 1);
				});
			},
		},
	};
</script>
<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	const articles = [
		{
			title: 'Skeleton is Awesome',
			subtitle: 'Announcements',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.',
			author: 'Alex',
			imageSrc: imgSrc
		},
		{
			title: 'Skeleton is Awesome',
			subtitle: 'Announcements',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae',
			author: 'Alex',
			imageSrc: imgSrc
		},
		{
			title: 'Skeleton is Awesome',
			subtitle: 'Announcements',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae',
			author: 'Alex',
			imageSrc: imgSrc
		}
	];
</script>

<div class="container h-full items-center justify-center py-8">
	<div class="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 text-center">
		{#each articles as article}
			<ArticleCard {...article} />
		{/each}
	</div>
</div>

<style>
	@reference "../app.css";
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>

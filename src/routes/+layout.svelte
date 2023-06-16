<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
</script>

<svelte:head>
	<title>Svelte Auth</title>
</svelte:head>

<nav class="text-xl flex items-center justify-center flex-wrap bg-teal-500 p-6">
	<div class="flex items-center flex-shrink-0 text-white mr-6">
		{$page?.data?.user?.name ?? 'Svelte Auth'}
	</div>
	<div class="flex gap-4 text-white">
		{#if $page.data.user}
			<a href="/admin">Admin</a>
			<form
				class="logout"
				action="/logout"
				method="post"
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
			>
				<button type="submit">Log out</button>
			</form>
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		{/if}
	</div>
</nav>

<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		color: white;
	}
	:global(input, button) {
		border-radius: 1rem;
	}
</style>

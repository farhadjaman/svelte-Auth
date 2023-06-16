<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<h1 class="text-center text-4xl my-8">Login</h1>
<form
	action="?/login"
	class="w-96 grid gap-8 mx-auto p-8 bg-neutral-800/50 border border-neutral-700/20 rounded-2xl shadow-lg"
	method="post"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<label for="username" class="grid gap-2">Username</label>
	<input
		class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
		type="text"
		name="username"
		id="username"
		placeholder="Username"
		required
	/>
	<label class="grid gap-2" for="password">Password</label>
	<input
		class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
		type="password"
		name="password"
		id="password"
		placeholder="Password"
		required
	/>

	{#if form?.invalid}
		<p class="error">Username or password is invalid</p>
	{/if}

	{#if form && form.isAuth == false}
		<p class="error">You have entered the wrong credentials</p>
	{/if}
	<button
		class="text-white p-4 mt-4 rounded-2xl bg-teal-500 hover:bg-teal-500 font-semibold shadow-md transition-colors"
		type="submit">Login</button
	>
</form>

<style>
	.error {
		color: red;
	}
</style>

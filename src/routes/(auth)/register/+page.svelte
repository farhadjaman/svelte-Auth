<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<h1 class="text-center text-4xl my-8">Register</h1>

<form
	action="?/register"
	method="post"
	use:enhance
	class="w-96 grid gap-8 mx-auto p-8 bg-neutral-800/50 border border-neutral-700/20 rounded-2xl shadow-lg"
>
	<label for="username">Username</label>
	<input
		class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
		type="text"
		name="username"
		id="username"
		placeholder="Username"
		required
	/>
	<label for="password">Password</label>
	<input
		class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
		type="password"
		name="password"
		id="password"
		placeholder="Password"
		required
	/>
	<label for="password2">Repeat Password</label>
	<input
		class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
		type="password"
		name="password2"
		id="password2"
		placeholder="Repeat Password"
		required
	/>

	{#if form?.user}
		<p class="error">Username already taken</p>
	{/if}
	<button
		class="text-white p-4 mt-4 rounded-2xl bg-teal-500 hover:bg-teal-500 font-semibold shadow-md transition-colors"
		type="submit">Register</button
	>
</form>

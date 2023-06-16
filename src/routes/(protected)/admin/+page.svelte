<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1 class="text-center text-4xl my-8 text-gray-300">Admin Panel</h1>

{#if data.user && data.user.role == 'ADMIN'}
	<p class="text-center text-2xl my-8">Welcome, {data.user.name}!</p>
	<form method="post" action="/logout">
		<button type="submit">logout</button>
	</form>
{:else}
	<p class="text-center text-4xl my-8">You are not an admin!</p>
{/if}

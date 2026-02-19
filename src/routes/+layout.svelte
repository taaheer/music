<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';


	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<footer class="text-center bg-black p-1">
	<a href="/" class="text-yellow-300 flex items-center justify-center animate-bounce">𝄞</a>
	<p class="block text-sm text-center text-yellow-200">© 2026 Taaheer Labbe. All Rights Reserved.</p>
</footer>

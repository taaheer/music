<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';

	import { page } from '$app/state';
	import {MetaTags, deepMerge} from 'svelte-meta-tags'

	let {data, children} = $props();

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

</script>

<MetaTags {...metaTags}/>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<Footer></Footer>

<style>
    :global(body) {
        -webkit-font-smoothing: antialiased;
    }
</style>

<script lang="ts">
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:title" content="ducky 🦆" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ducky.wiki" />
    <meta property="og:description" content="designer ৹ community manager ৹ developer" />
    <meta name="theme-color" content="#ffff76" />

	<link rel="icon" href={favicon} />
	<title>ducky 🦆</title>
</svelte:head>

{@render children()}


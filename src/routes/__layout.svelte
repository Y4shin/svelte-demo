<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { onMount } from "svelte";
    import { darkmode } from "$lib/stores";
    import "$lib/app.css";
	import { browser, dev } from '$app/env'
	const date = '__DATE__'
	const enableSwDev = '__SW_DEV__'
    onMount(async () => {
        darkmode.subscribe(val => {
            darkMode = val;
        });
    });


	const enableManifest = (!dev && browser) || (dev && browser && enableSwDev === 'true')

    
    let darkMode: boolean;
    
    $: if (browser) document.body.classList.toggle("dark", darkMode);
    $: if (browser) document.body.classList.toggle("bg-p-bgr-drk", darkMode);
    $: if (browser) document.body.classList.toggle("bg-p-bgr", !darkMode);
</script>

<svelte:head>
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content={darkMode ? "#312e81": "#e0e7ff"}>
    <link rel="apple-touch-icon" href="dei.png">
</svelte:head>


<Navbar bind:darkMode/>
<slot/>
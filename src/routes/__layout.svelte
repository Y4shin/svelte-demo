<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { onMount } from "svelte";
    import { darkmode } from "$lib/stores";
    import "agnostic-svelte/css/common.min.css"
    import "$lib/app.css";
    import { browser } from '$app/env';
    onMount(async () => {
        darkmode.subscribe(val => {
            darkMode = val;
        });
    });

    
    let darkMode: boolean;
    
    $: if (browser) document.body.classList.toggle("dark", darkMode);
    $: if (browser) document.body.classList.toggle("bg-gray-600", darkMode);
    $: if (browser) document.body.classList.toggle("bg-gray-200", !darkMode);
</script>

<svelte:head>
    <meta name="theme-color" content={darkMode ? "#4b5563": "#e5e7eb"}>
    <link rel="apple-touch-icon" href="dei.png">
</svelte:head>


<Navbar bind:darkMode/>

<slot/>
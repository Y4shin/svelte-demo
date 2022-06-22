<script lang="ts">
  import { darkmode } from '$lib/stores';
  import { onMount } from 'svelte';
  
  let darkMode: boolean;
  let fastAnimation: boolean = false;

  onMount(async () => {
    darkmode.subscribe((val) => {
      darkMode = val;
    });
  });
</script>

<svelte:head>
  <title>DEI LernApp - Startseite</title>
</svelte:head>

<div class="p-4 m-4">
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
    <div class="col-span-1" />
    <div
      class="col-span-4 p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all {fastAnimation ? 'duration-300' : 'duration-500'}"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Willkommen in der DEI LernApp!
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Dies ist eine Demonstration der DEI LernApp 
      </p>
    </div>
    <div class="col-span-1" />
  </div>
</div>
<script lang="ts">
  import { darkmode } from '$lib/stores';
  import { onMount } from 'svelte';
  import Box from '$lib/components/box.svelte';
  
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
      class="col-span-4"
    >
      <Box>
        <h5>Willkommen in der DEI LernApp Demo</h5>
        <p>Diese Demo ist ein proof-of-concept Prototyp und stellt nicht die finale App dar.</p>
      </Box>
    </div>
    <div class="col-span-1" />
  </div>
</div>
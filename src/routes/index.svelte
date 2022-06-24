<script lang="ts">
  import { darkmode, routeUp } from '$lib/stores';
  import { onMount } from 'svelte';
  import Box from '$lib/components/box.svelte';
  
  let darkMode: boolean;
  let fastAnimation: boolean = false;

  routeUp.update((val) => "/")

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
        <h4>Willkommen in der DEI LernApp Demo</h4>
        <p>Bitte klicken sie oben auf "Kurse", um die verfuegbaren Kurse zu sehen.</p>
        <div id='h5p-container'></div>
      </Box>
    </div>
    <div class="col-span-1" />
  </div>
</div>
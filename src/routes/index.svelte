<script lang="ts">
  import { routeUp, uid } from '$lib/stores';
  import Box from '$lib/components/box.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    uid.subscribe((val) => {
      umfrageID = val;
    });
  });

  let inputText: string = '';

  let umfrageID: string;

  function updateUID() {
    if (inputText.length == 4) {
      uid.update((val) => inputText);
    } else {
      alert('Die UmfrageID ist nicht korrekt.');
    }
  }

  function resetUID() {
    uid.update((val) => "0000");
  }

  routeUp.update((val) => '/');
</script>

<svelte:head>
  <title>DEI LernApp - Startseite</title>
</svelte:head>

<div class="p-4 m-4">
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
    <div class="col-span-1" />
    <div class="col-span-4">
      <Box>
        <h4>Willkommen in der DEI LernApp Studie</h4>

        <p>Bitte klicken sie oben auf "Kurse", um die verfuegbaren Kurse zu sehen.</p>
      </Box>
      <div class="mt-8">
      <Box>

        {#if umfrageID === '0000'}
          <div class="grid grid-cols-1 md:grid-cols-3 items-center">
            <div class="col-span-2">
              <p>Bitte geben Sie ihre UmfrageID hier ein:</p>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                bind:value={inputText}
              />
            </div>
            <div class="col-span-1">
              <button
                on:click={updateUID}
                class="p-2 h-10 align-middle inline-block bg-p-acc-lgt dark:bg-p-acc-drk hover:bg-p-acc-lgt-hgl dark:hover:bg-p-acc-drk-hgl rounded-full transition-all duration-300 md:ml-4"
                >UmfrageID eingeben</button
              >
            </div>
          </div>
        {:else}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div class="col-span-2">
              <p>Bitte nach der Studie auf diesen button klicken um ihre UmfrageID zu entfernen</p>
            </div>
            <div class="col-span-1">
              <button
                on:click={resetUID}
                class="p-2 h-10 align-middle inline-block bg-p-acc-lgt dark:bg-p-acc-drk hover:bg-p-acc-lgt-hgl dark:hover:bg-p-acc-drk-hgl rounded-full transition-all duration-300 md:ml-4"
                >UmfrageID zurücksetzen</button
              >
            </div>
          </div>
        {/if}
      </Box>
    </div>
    </div>
    <div class="col-span-1" />
  </div>
</div>

<script lang="ts">
  import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
  import FaSun from 'svelte-icons/fa/FaSun.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import { darkmode } from '$lib/stores';

  onMount(async () => {
    darkmode.subscribe((val) => {
      darkMode = val;
    });
  });

  $page.routeId;

  let isOpen: boolean = false;
  export let darkMode: boolean;

  function toggleOpen() {
    isOpen = !isOpen;
  }

  function toggleDarkMode() {
    darkmode.update((dm) => !dm);
  }

  function darkModeSelect(light: string, dark: string): string {
    return darkMode ? dark : light;
  }
</script>

<nav
  class="flex items-center justify-between flex-wrap dark:bg-indigo-900 bg-indigo-300 p-3 navbar"
>
  <div class="flex items-center flex-shrink-0 dark:text-gray-200 text-gray-600 mr-6">
    <img src="dei.png" alt="DEI" class="dei-logo" />
    <span class="font-semibold text-xl tracking-tight">LernApp</span><span
      on:click={toggleDarkMode}
      class="inline-block text-sm px-1 py-1 mx-4 rounded dark:text-gray-200 dark:border-gray-200 dark:hover:border-white dark:hover:text-whitetext-gray-700 border-gray-700 hover:border-black hover:text-black dmicon"
      >{#if darkMode}<FaSun />{:else}<FaMoon />{/if}</span>
  </div>
  <div class="block lg:hidden">
    <button
      class="flex items-center px-3 py-2 rounded dark:text-gray-200 dark:border-gray-200 dark:bg-indigo-900 dark:hover:text-white dark:hover:border-white text-gray-600 border-gray-600 bg-indigo-300 hover:text-black hover:border-black"
      on:click={toggleOpen}
    >
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
      >
    </button>
  </div>

  <div
    class="w-full block flex-grow lg:flex lg:items-center lg:w-auto {isOpen
      ? ''
      : 'hidden'} lg:visible"
  >
    <div class="text-sm lg:flex-grow">
		<a
        href="/"
        class="block mt-4 lg:inline-block lg:mt-0 {$page.routeId === ''
          ? 'dark:hover:text-white text-indigo-400 hover:text-black'
          : 'dark:text-gray-200 dark:hover:text-white text-gray-600 hover:text-black'} mr-4"
      >
        Startseite
      </a>
      <a
        href="/courses"
        class="block mt-4 lg:inline-block lg:mt-0 {$page.routeId === 'courses'
          ? 'dark:hover:text-white text-gray-100 dark:text-gray-400 hover:text-black'
          : 'dark:text-gray-200 dark:hover:text-white text-gray-600 hover:text-black'} mr-4"
      >
        Kurse
      </a>
    </div>
  </div>
</nav>

<style>
  .dei-logo {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  /*.navbar{
		padding: 1rem;
	}*/

  .dmicon {
    vertical-align: middle;
    height: 2rem;
    width: 2rem;
  }

</style>

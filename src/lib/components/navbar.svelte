<script lang="ts">
  import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
  import FaSun from 'svelte-icons/fa/FaSun.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { darkmode, routeUp } from '$lib/stores';

  

  onMount(async () => {
    darkmode.subscribe((val) => {
      darkMode = val;
    });
    routeUp.subscribe((val) => {
      upRoute = val;
    })
  });

  let isOpen: boolean = false;
  let darkMode: boolean;
  let upRoute: string;

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
  class="flex sticky top-0 items-center justify-between flex-wrap font-semibold dark:text-t-reg-drk text-t-reg-lgt dark:bg-p-acc-drk bg-p-acc-lgt p-3 navbar transition-all duration-300"
>
  <div class="flex items-center flex-shrink-0 mr-6 transition-all duration-300">
    <!--<img src="/dei.png" alt="DEI" class="dei-logo" />-->
    <a class="h-10 dark:hover:bg-p-pri-drk-hgl hover:bg-p-pri-lgt-hgl dark:bg-p-pri-drk bg-p-pri-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 mr-4 rounded-full" href="{upRoute}">◀</a>
    <span class="text-xl tracking-tight">LernApp</span><span
      on:click={toggleDarkMode}
      class="inline-block text-sm px-1 py-1 mx-4 rounded dark:hover:text-t-reg-drk-hgl hover:text-t-reg-drk-hglgl dmicon transition-all duration-300"
      >{#if darkMode}<FaSun />{:else}<FaMoon />{/if}</span
    >
  </div>
  <div class="block lg:hidden">
    <button
      class="flex items-center px-3 py-2 rounded dark:hover:text-t-reg-drk-hgl hover:text-t-reg-drk-hglgl dark:bg-p-acc-drk bg-p-acc transition-all duration-300"
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
      : 'hidden'} lg:visible transition-all duration-300"
  >
    <div class="text-sm lg:flex-grow transition-all duration-300">
      <a
        href="/"
        class="block mt-4 lg:inline-block lg:mt-0 {$page.routeId === ''
          ? 'dark:text-t-reg-drk-hgl text-t-reg-drk-hgl'
          : 'dark:text-t-reg-drk dark:hover:text-t-reg-drk-hgl text-t-reg-lgt hover:text-t-reg-drk-hgl'} mr-4 transition-all duration-300"
      >
        Startseite
      </a>
      <a
        href="/courses"
        class="block mt-4 lg:inline-block lg:mt-0 {$page.routeId === 'courses'
          ? 'dark:text-t-reg-drk-hgl text-t-reg-drk-hgl'
          : 'dark:text-t-reg-drk dark:hover:text-t-reg-drk-hgl text-t-reg-lgt hover:text-t-reg-drk-hgl'} mr-4 transition-all duration-300"
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

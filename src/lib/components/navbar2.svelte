<script lang="ts">
  import Moon from 'svelte-icons/md/MdBrightness2.svelte';
  import Sun from 'svelte-icons/md/MdBrightness7.svelte';
  import Back from 'svelte-icons/md/MdChevronLeft.svelte';
  import Reload from 'svelte-icons/md/MdLoop.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { darkmode, routeUp, reloadTrigger, uid } from '$lib/stores';

  onMount(async () => {
    darkmode.subscribe((val) => {
      darkMode = val;
    });
    routeUp.subscribe((val) => {
      upRoute = val;
    });
    uid.subscribe((val) => {
      uidStr = val;
    })
  });

  let isOpen: boolean = false;
  let uidStr: string;
  export let darkMode: boolean;
  export let showRefresh: boolean = false;
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

  function triggerReload() {
    reloadTrigger.update((val) => !val);
  }
</script>

<nav
  class="w-screen grid grid-cols-3 sticky top-0 dark:text-t-reg-drk text-t-reg-lgt dark:bg-p-acc-drk bg-p-acc-lgt py-4 px-6 gap-y-4"
>
  <div class="col-span-1 row-span-1 place-self-start self-center">
    <a
      class="mr-2 w-10 h-10 align-middle inline-block dark:hover:text-t-reg-drk-hgl hover:text-t-reg-lgt-hgl transition-all duration-300"
      href={upRoute}><Back /></a
    >
    {#if showRefresh}
      <button
        class="ml-2 w-10 h-10 align-middle inline-block dark:hover:text-t-reg-drk-hgl hover:text-t-reg-lgt-hgl transition-all duration-300"
        on:click={triggerReload}
      >
        <Reload />
      </button>
    {/if}
  </div>
  <div class="col-span-1 row-span-1 place-self-center self-center">
    {#if uidStr !== "0000"}<p>UmfrageID: {uidStr}</p>{/if}
  </div>
  <div class="col-span-1 row-span-1 place-self-end self-center">
    <div class="hidden md:block px-2">
      <span
        on:click={toggleDarkMode}
        class="mr-2 w-10 h-10 align-middle inline-block dark:hover:text-t-reg-drk-hgl hover:text-t-reg-lgt-hgl transition-all duration-300"
        >{#if darkMode}<Sun />{:else}<Moon />{/if}</span
      >
      <a
        href="/"
        class="mx-2 align-middle {$page.routeId === ''
          ? 'dark:text-t-reg-drk-hgl text-t-reg-drk-hgl'
          : 'dark:text-t-reg-drk dark:hover:text-t-reg-drk-hgl text-t-reg-lgt hover:text-t-reg-drk-hgl'} transition-all duration-300"
        >Startseite</a
      >
      <a
        href={$page.routeId?.substring(0, 7) === 'courses' ? '#' : '/courses'}
        class="ml-2  align-middle {$page.routeId?.substring(0, 7) === 'courses'
          ? 'dark:text-t-reg-drk-hgl text-t-reg-drk-hgl'
          : 'dark:text-t-reg-drk dark:hover:text-t-reg-drk-hgl text-t-reg-lgt hover:text-t-reg-drk-hgl'} transition-all duration-300"
        >Kurse</a
      >
    </div>
    <div class="block md:hidden px-2">
      <span
        on:click={toggleDarkMode}
        class="mr-4 w-10 h-10 align-middle inline-block dark:hover:text-t-reg-drk-hgl hover:text-t-reg-lgt-hgl transition-all duration-300"
        >{#if darkMode}<Sun />{:else}<Moon />{/if}</span
      >
      <button
        class="ml-4 rounded dark:hover:text-t-reg-drk-hgl hover:text-t-reg-drk-hgl dark:bg-p-acc-drk transition-all duration-300"
        on:click={toggleOpen}
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
        >
      </button>
    </div>
  </div>
  <div class="{isOpen ? 'block' : 'hidden'} md:hidden col-span-3">
    <div class="grid grid-cols-1 place-items-end mx-2">
      <div>
        <a
          on:click={toggleOpen}
          href="/"
          class="align-middle {$page.routeId === ''
            ? 'dark:text-t-reg-drk-hgl text-t-reg-drk-hgl'
            : 'dark:text-t-reg-drk dark:hover:text-t-reg-drk-hgl text-t-reg-lgt hover:text-t-reg-drk-hgl'} transition-all duration-300"
          >Startseite</a
        >
      </div>
    </div>
    <div class="grid grid-cols-1 place-items-end m-2">
      <div>
        <a
          on:click={toggleOpen}
          href={$page.routeId?.substring(0, 7) === 'courses' ? '#' : '/courses'}
          class="align-middle {$page.routeId?.substring(0, 7) === 'courses'
            ? 'dark:text-t-reg-drk-hgl text-t-reg-drk-hgl'
            : 'dark:text-t-reg-drk dark:hover:text-t-reg-drk-hgl text-t-reg-lgt hover:text-t-reg-drk-hgl'} transition-all duration-300"
          >Kurse</a
        >
      </div>
    </div>
  </div>
</nav>

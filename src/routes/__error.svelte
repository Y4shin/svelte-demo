<script lang="ts" context="module">
    /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        status, msg: error.message
      }
    };
  }
</script>

<script lang="ts">
    import Box from '$lib/components/box.svelte';
    export let msg: string;
    export let status: number;
</script>

<div class="p-4 m-4">
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
      <div class="col-span-1" />
      <div
        class="col-span-4"
      >
        <Box >
          <h4 class="text-t-fal-lgt dark:text-t-fal-drk font-extrabold text-4xl mb-6">Fehler: {status}</h4>
          <p>{msg}</p>
        </Box>
      </div>
      <div class="col-span-1" />
    </div>
  </div>
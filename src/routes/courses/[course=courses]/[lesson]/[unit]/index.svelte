<script lang="ts">
  import { page } from '$app/stores';

  import Box from '$lib/components/box.svelte';
  import { courses } from '$lib/study';

  const course = courses.find((c) => c.route === $page.params.course);
  const lesson = course?.lessons.find((l) => l.route === $page.params.lesson);
  const unit = lesson?.units.find((u) => u.route === $page.params.unit);

</script>

<svelte:head>
  <title>DEI LernApp - Kurse</title>
</svelte:head>

<div class="p-4 m-4">
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 mb-8">
    <div class="col-span-1" />
    <div class="col-span-4">
      <Box>
        <h4
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300"
        >
          {unit?.title}
        </h4>
        {@html unit?.content}
      </Box>
    </div>
    <div class="col-span-1" />
  </div>
</div>

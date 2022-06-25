<script lang="ts">
  import { page } from '$app/stores';
  import { routeUp, reloadTrigger } from '$lib/stores';

  import Box from '$lib/components/box.svelte';
  import { courses, type Course, type CourseLesson, type LessonUnit } from '$lib/study';
  import H5PEmbed from '$lib/components/h5pembed.svelte';

  let width;
  let height;

  const course: Course = courses.find((c) => c.route === $page.params.course);
  const lesson: CourseLesson = course?.lessons.find((l) => l.route === $page.params.lesson);
  const unit: LessonUnit = lesson?.units.find((u) => u.route === $page.params.unit);

  routeUp.update((val) => `/courses/${course?.route}/${lesson?.route}`);
</script>

<!--<svelte:window bind:innerHeight={height} bind:innerWidth={width}/>-->

<svelte:head>
  <title>DEI LernApp - Kurse</title>
</svelte:head>

<div class="p-4 m-4">
  <div
    class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 place-items-stretch items-stretch mb-8"
  >
    <div class="col-span-1" />
    <div class="col-span-4" bind:offsetHeight={height} bind:offsetWidth={width}>
      <Box>
        <h4
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300"
        >
          {unit?.title}
        </h4>
            <H5PEmbed classes={[]} width={Math.ceil(width * 0.95)} height={Math.ceil(height * 0.95)} content={unit.content} />

      </Box>
    </div>
    <div class="col-span-1" />
  </div>
</div>

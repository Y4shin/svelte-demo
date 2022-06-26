<script lang="ts" context="module">
  import { courses } from '$lib/study';
  
  /** @type {import('./__types/[course]/[lesson]/[unit]').Load} */
  export async function load({params}) {
    

    const course: Course | undefined = courses.find((c) => c.route === params.course);
    const lesson: CourseLesson | undefined = course?.lessons.find((l) => l.route === params.lesson);
    const unit: LessonUnit | undefined = lesson?.units.find((u) => u.route === params.unit);

    if (course === undefined) {
      return {
        status: 404,
        error: `Kurs mit id "${params.course}" existiert nicht.`
      }
    } else if (lesson === undefined) {
      return {
        status: 404,
        error: `Lektion mit id ${params.lesson} existiert nicht in Kurs "${course?.name}".`
      }
    } else if (unit === undefined) {
      return {
        status: 404,
        error: `Lerneinheit mit id ${params.unit} existiert nicht in Lektion "${lesson?.title}" in Kurs "${course?.name}".`
      }
    } else {
      return {
        status: 200,
        props: {
          course, lesson, unit
        }
      }
    }
  }
</script>


<script lang="ts">
  import { page } from '$app/stores';
  import { routeUp, reloadTrigger } from '$lib/stores';

  import Box from '$lib/components/box.svelte';
  import type { Course, CourseLesson, LessonUnit } from '$lib/study';
  import H5PEmbed from '$lib/components/h5pembed.svelte';

  let width;
  let height;

  export let course: Course;
  export let lesson: CourseLesson;
  export let unit: LessonUnit;

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
    <div class="col-span-4 fit-content" bind:offsetHeight={height} bind:offsetWidth={width}>
      <Box>
        <h4
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300"
        >
          {unit?.title}
        </h4>
            <H5PEmbed classes={[]} width={Math.ceil(width * 0.90)} height={Math.ceil(height * 0.90)} content={unit.content} />

      </Box>
    </div>
    <div class="col-span-1" />
  </div>
</div>

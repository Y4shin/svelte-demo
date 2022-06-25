<script lang="ts">
    import { routeUp } from '$lib/stores';
    import { page } from '$app/stores';
    import Box from '$lib/components/box.svelte';
  import Next from 'svelte-icons/md/MdChevronRight.svelte';
    
    import { courses } from '$lib/study';

    const course = courses.find((c) => c.route === $page.params.course);
    const lesson = course?.lessons.find((l) => l.route === $page.params.lesson);

    routeUp.update((val) => `/courses/${course?.route}`);
  </script>
  
  <svelte:head>
    <title>DEI LernApp - Kurse</title>
  </svelte:head>
  
  <div class="p-4 m-4">
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 mb-8">
      <div class="col-span-1" />
      <div
        class="col-span-4"
      >
      <Box>
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300">
          {lesson?.title}
        </h4>
        <p class="font-normal text-gray-700 dark:text-gray-400 transition-all duration-300">
          Hier finden Sie die Aufgaben zu diesem Lernmodul.
        </p>
      </Box>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 items-stretch auto-rows-max">
      {#each lesson.units as unit}
      <div class="col-span-1 flex flex-col">
        <Box additionalClasses={['flex-1', 'flex', 'flex-col']}>
          <div class="flex-1 grid grid-cols-1 md:grid-cols-4 place-items-center">
            <div class="col-span-3">
              <h5 class="font-bold text-xl mb-2">{unit.title}</h5>
              {unit.description}
            </div>
              <div class="col-span-1 mt-6 md:mt-0">
                <a
                  href="/courses/{course?.route}/{lesson?.route}/{unit.route}"
                  class="w-10 h-10 align-middle inline-block bg-p-acc-lgt dark:bg-p-acc-drk hover:bg-p-acc-lgt-hgl dark:hover:bg-p-acc-drk-hgl rounded-full transition-all duration-300 md:ml-4"
                  >
                  <Next/>
              </a>
              </div>
          </div>
        </Box></div>
      {/each}
    </div>
      </div>
      <div class="col-span-1" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
      <div class="col-span-1" />
      <div class="col-span-4">
        <a href="/courses/study">
      </div>
      <div class="col-span-1" />
    </div>
  </div>
  
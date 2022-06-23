<script lang="ts">
    import { page } from '$app/stores';
    import Box from '$lib/components/box.svelte';
    
    import { courses } from '$lib/study';

    const course = courses.find((c) => c.route === $page.params.course);

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
          Willkommen im Kurs {course?.name}
        </h4>
        <p class="font-normal text-gray-700 dark:text-gray-400 transition-all duration-300">
          Hier finden Sie die Lernmodule dieses Kurses.
        </p>
      </Box>
      {#each course.lessons as lesson}
      <div class="my-4">
        <Box>
          <div class="grid grid-cols-1 md:grid-cols-4 place-items-center">
            <div class="col-span-3">
              <h5 class="text-xl mb-4">{lesson.title}</h5>
              <p>{lesson.description}</p>
            </div>
              <div class="col-span-1">
                <a
                  href="/courses/{course?.route}/{lesson.route}"
                  class="h-10 dark:hover:bg-p-acc-drk-hgl hover:bg-p-acc-lgt-hgl dark:bg-p-acc-drk bg-p-acc-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 rounded-full ml-4"
                  >
                  ▶
              </a>
              </div>
          </div>
        </Box></div>
      {/each}
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
  
<script lang="ts">
  import { darkmode, routeUp } from '$lib/stores';
  import { onMount } from 'svelte';
  import Next from 'svelte-icons/md/MdChevronRight.svelte';
  import Box from '$lib/components/box.svelte';
  import SingleChoiceQuestionComponent from '$lib/components/questions/singlechoice.svelte';
  import {
    AssistanceType,
    QuestionConfig,
    SingleChoiceQuestion,
    TextComponent,
    TextType,
    createEquation,
    createText
  } from '$lib/questions';

  import { courses } from '$lib/study';

  const question: SingleChoiceQuestion = new SingleChoiceQuestion(
    'Elementare Rechenmethoden 1',
    [
      createText([new TextComponent('Was ist das Ergebnis des folgenden Terms?', TextType.Text)]),
      createEquation('\\frac{2+2}{2}')
    ],
    [
      [createEquation('\\frac{4}{2}'), createText([new TextComponent('Detail1', TextType.Text)])],
      [createEquation('\\frac{6}{2}'), createText([new TextComponent('Detail2', TextType.Text)])],
      [createEquation('\\frac{8}{2}'), createText([new TextComponent('Detail3', TextType.Text)])],
      [createEquation('\\frac{10}{2}'), createText([new TextComponent('Detail4', TextType.Text)])]
    ],
    0,
    new QuestionConfig(false, false, AssistanceType.Solution)
  );

  let darkMode: boolean;

  onMount(async () => {
    darkmode.subscribe((val) => {
      darkMode = val;
    });
  });

  routeUp.update((val) => '/');
</script>

<svelte:head>
  <title>DEI LernApp - Kurse</title>
</svelte:head>

<div class="p-4 m-4">
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 mb-8">
    <div class="col-span-1" />
    <div class="col-span-4">
      <Box>
        <h4 class="mb-2 text-2xl font-bold tracking-tight transition-all duration-300">
          Dies ist die Kursübersicht!
        </h4>
        <p class="font-normal text-gray-700 dark:text-gray-400 transition-all duration-300">
          Hier finden Sie eine Übersicht über alle Kurse, die in der Lernapp verfügbar sind.
        </p>
      </Box>
    </div>
    <div class="col-span-1" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
    <div class="col-span-1" />
    <div class="col-span-4">
      {#each courses as course}
        <Box>
          <div class="grid grid-cols-1 md:grid-cols-4 place-items-center">
            <div class="col-span-3">
              <h5 class="text-xl mb-4">{course.name}</h5>
              <p>{course.description}</p>
            </div>
            <div class="col-span-1 mt-6 md:mt-0">
              <a
                href="/courses/{course.route}"
                class="w-10 h-10 align-middle inline-block bg-p-acc-lgt dark:bg-p-acc-drk hover:bg-p-acc-lgt-hgl dark:hover:bg-p-acc-drk-hgl rounded-full transition-all duration-300 md:ml-4"
              >
                <Next />
              </a>
            </div>
          </div>
        </Box>
      {/each}
    </div>
    <div class="col-span-1" />
  </div>
</div>

<script lang="ts">
  import { darkmode } from '$lib/stores';
  import { onMount } from 'svelte';
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

  const question: SingleChoiceQuestion = new SingleChoiceQuestion(
    'Elementare Rechenmethoden 1',
    [
      createText([new TextComponent('Was ist das Ergebnis des folgenden Terms?', TextType.Text)]),
      createEquation('\\frac{2+2}{2}')
    ],
    [
      createEquation('\\frac{4}{2}'),
      createEquation('\\frac{6}{2}'),
      createEquation('\\frac{8}{2}'),
      createEquation('\\frac{10}{2}')
    ],
    0,
    new QuestionConfig(true, true, AssistanceType.Solution)
  );

  let darkMode: boolean;

  onMount(async () => {
    darkmode.subscribe((val) => {
      darkMode = val;
    });
  });
</script>

<svelte:head>
  <title>DEI LernApp - Kurse</title>
</svelte:head>

<div class="p-4 m-4">
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 mb-8">
    <div class="col-span-1" />
    <div
      class="col-span-4 p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-500"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-500">
        Dies ist die Kursübersicht!
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 transition-all duration-500">
        Hier werden normalerweise alle Kurse angezeigt. Zurzeit wird ein Fragentyp demonstriert.
      </p>
    </div>
    <div class="col-span-1" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
    <div class="col-span-1" />
    <div class="col-span-4">
      <SingleChoiceQuestionComponent {question} />
    </div>
    <div class="col-span-1" />
  </div>
</div>

<script lang="ts">
  import { darkmode } from '$lib/stores';
  import { onMount } from 'svelte';
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
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-500">
        Dies ist die Kursübersicht!
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 transition-all duration-500">
        Hier werden normalerweise alle Kurse angezeigt. Zurzeit wird ein Fragentyp demonstriert.
      </p>
    </Box>
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

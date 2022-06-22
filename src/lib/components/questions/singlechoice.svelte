<script lang="ts">
  import { AssistanceType, QuestionConfig, type SingleChoiceQuestion, Text } from '$lib/questions';
  import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';
  import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte';
  import IoIosCheckmark from 'svelte-icons/io/IoIosCheckmark.svelte'
  import TextComp from '$lib/components/text.svelte';
  import Box from '$lib/components/box.svelte';
  import Katex from '$lib/components/katex.svelte';
  import { validate_component } from 'svelte/internal';
  import { onMount } from 'svelte';

  import Modal from '$lib/components/modal.svelte';

  let showModal: boolean = false;
  const handleToggleModal = () => {
    showModal = !showModal;
  };
  const questionBgColors = {
    regular: {
      light: 'white',
      dark: 'gray-800'
    },
    incorrect: {
      light: 'red-100',
      dark: 'red-800'
    },
    correct: {
      light: 'green-100',
      dark: 'green-800'
    }
  };

  function toggleBgCol() {
    if (bgcol === 'white') {
      bgcol = 'gray-200';
    } else {
      bgcol = 'white';
    }
  }

  let bgcol = 'white';
  let previewSolution: boolean = false;
  let showSolution: boolean = false;
  export let question: SingleChoiceQuestion;
  let answers: [Text, number][] = question.answers.map((val, ind) => [val, ind]);

  function submitQuestion() {
    showSolution = !showSolution;
  }

  function toggleSolutionPreview() {
    previewSolution = !previewSolution;
  }

  let currentChoice: number = 0;
</script>

<Box>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {question.title}
  </h5>
  {#each question.question as par}
    <p class="font-normal text-gray-700 dark:text-gray-400"><TextComp text={par} /></p>
  {/each}
  <div
    class="p-4 grid grid-cols-1 md:grid-cols-2 form-check font-normal text-gray-700 dark:text-gray-400"
  >
    {#each answers as answer}
      <div class="col-span-1 p-4">
        <label for={`answer-${answer[1]}`}>
          <Box>
            <div class="grid grid-cols-6 place-items-center">
              <div class="col-span-1 justify-center">
                <input
                  id={`answer-${answer[1]}`}
                  type="radio"
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-200 bg-gray-200 checked:bg-indigo-900 checked:border-indigo-900 dark:checked:bg-indigo-600 dark:checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  bind:group={currentChoice}
                  name="currentChoice"
                  value={answer[1]}
                />
              </div>
              <div class="col-span-5"><TextComp text={answer[0]} equationInline={true} /></div>
            </div>
          </Box>
        </label>
      </div>
    {/each}
  </div>
  <div class="p-4 grid grid-cols-1 md:grid-cols-3 font-normal text-gray-700 dark:text-gray-400 place-items-center">
    <div class="col-span-1 m-4">
      <button
        on:click={submitQuestion}
        class="dark:hover:bg-indigo-900 hover:bg-indigo-500 dark:bg-indigo-700 bg-indigo-300 text-gray-900 dark:text-white font-bold py-2 px-4 rounded-full h-10"
        >Absenden</button
      >
    </div>
    <div class="col-span-1 m-4">
      {#if question.config.assistance === AssistanceType.Solution}
        <button
          on:click={toggleSolutionPreview}
          class="dark:hover:bg-indigo-900 hover:bg-indigo-500 dark:bg-indigo-700 bg-indigo-300 text-gray-900 dark:text-white font-bold py-2 px-4 rounded-full h-10"
          >Lösung</button
        >
      {:else if question.config.assistance === AssistanceType.Hint}
        <button
          class="dark:hover:bg-indigo-900 hover:bg-indigo-500 dark:bg-indigo-700 bg-indigo-300 text-gray-900 dark:text-white font-bold py-2 px-4 rounded-full h-10"
          >Hinweis</button
        >
      {/if}
    </div>
    <div class="col-span-1 m-4">
      <button
        class="h-10 dark:hover:bg-indigo-900 hover:bg-indigo-500 dark:bg-indigo-700 bg-indigo-300 text-gray-900 dark:text-white font-bold py-2 px-4 rounded-full"
        >◀</button
      ><button
        class="h-10 dark:hover:bg-indigo-900 hover:bg-indigo-500 dark:bg-indigo-700 bg-indigo-300 text-gray-900 dark:text-white font-bold py-2 px-4 rounded-full ml-4"
        >▶</button
      >
    </div>
  </div>
</Box>
<Modal title="Preview Solution" open={previewSolution} on:close={() => toggleSolutionPreview()}>
  <svelte:fragment slot="body">
    
    <div
      class="p-4 grid grid-cols-1 md:grid-cols-2 form-check font-normal text-gray-700 dark:text-gray-400"
    >
      {#each answers as answer}
        <div class="col-span-1 p-4">
            
            <Box><div class="grid grid-cols-6 place-items-center">
                <div class="col-span-5"><TextComp text={answer[0]} equationInline={true} /></div>
                <div class="col-span-1 justify-center">{#if answer[1] === question.correctAnswer}<div class="text-lg text-emerald-600 dark:text-emerald-400 font-extrabold">✓</div>{:else}<div class="text-lg text-red-600 dark:text-red-400 font-extrabold">✘</div>{/if}</div>
              </div>
            </Box>
        </div>
      {/each}
    </div>
  </svelte:fragment>
</Modal>
<Modal title="Show Solution" open={showSolution} showCloseButton={false}>
  <svelte:fragment slot="body">
    <div
      class="p-4 grid grid-cols-1 md:grid-cols-2 form-check font-normal text-gray-700 dark:text-gray-400"
    >
      {#each answers as answer}
        <div class="col-span-1 p-4">
            
            <Box><div class="grid grid-cols-6 place-items-center">
                <div class="col-span-5"><TextComp text={answer[0]} equationInline={true} /></div>
                <div class="col-span-1 justify-center">{#if answer[1] === question.correctAnswer}<div class="text-lg text-emerald-600 dark:text-emerald-400 font-extrabold">✓</div>{:else if answer[1] === currentChoice}<div class="text-lg text-red-600 dark:text-red-400 font-extrabold">✘</div>{/if}</div>
              </div>
            </Box>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-1 place-items-end">
      <div>
        <button
          on:click={submitQuestion}
          class="dark:hover:bg-indigo-900 hover:bg-indigo-500 dark:bg-indigo-700 bg-indigo-300 text-gray-900 dark:text-white font-bold py-2 px-4 rounded-full ml-4 h-10"
          ><IoIosArrowForward /></button
        >
      </div>
    </div>
  </svelte:fragment>
</Modal>

<style>
  .icon {
    width: 64px;
    height: 64px;
  }
</style>
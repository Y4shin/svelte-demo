<script lang="ts">
  import type { SingleChoiceQuestion } from '$lib/questions';
  import Text from '$lib/components/text.svelte';
  import Box from '$lib/components/box.svelte';
  import { validate_component } from 'svelte/internal';

  export let question: SingleChoiceQuestion;
  let currentChoice: number = 0;
</script>

<Box>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {question.title}
  </h5>
  {#each question.question as par}
    <p class="font-normal text-gray-700 dark:text-gray-400"><Text text={par} /></p>
  {/each}
  <div
    class="p-4 grid grid-cols-1 md:grid-cols-2 form-check font-normal text-gray-700 dark:text-gray-400"
  >
    {#each question.answers.map((val, ind) => {
      return { val, ind };
    }) as answer}
      <div class="col-span-1 p-4">
        <label for={`answer-${answer.ind}`}>
        <Box>
          <div class="grid grid-cols-6 place-items-center">
            <div class="col-span-1 justify-center">
              <input
                id={`answer-${answer.ind}`}
                type="radio"
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-200 bg-gray-200 checked:bg-indigo-900 checked:border-indigo-900 dark:checked:bg-indigo-600 dark:checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                bind:group={currentChoice}
                name="currentChoice"
                value={answer.ind}
              />
            </div>
            <div class="col-span-5"><Text text={answer.val} equationInline={true} /></div>
          </div>
        </Box>
      </label>
      </div>
    {/each}
  </div>
  <Box><p class="font-normal text-gray-700 dark:text-gray-400" style="text-align: center;">Die aktuell ausgewaehlte Antwort ist: {currentChoice === question.correctAnswer ? "korrekt" : "falsch"}</p></Box>
</Box>

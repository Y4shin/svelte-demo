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
        <Box>
            <input
              class="form-check-input float-left align-center appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 bg-no-repeat cursor-pointer"
              type="radio"
              bind:group={currentChoice}
              name="currentChoice"
              value={answer.ind}
            />
          <div class="col-span-5 question"><Text text={answer.val} /></div>
    </Box>
      </div>
    {/each}
  </div>
</Box>

<style>
  .radio-t {
    justify-self:center;
    text-align: center;
    vertical-align: middle;
  }

  .question-box {
    text-align: center;
  }

  .question {
    vertical-align: middle;
  }
</style>

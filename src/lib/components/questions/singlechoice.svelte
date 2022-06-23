<script lang="ts">
  import { AssistanceType, QuestionConfig, type SingleChoiceQuestion, Text } from '$lib/questions';
  import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';
  import TextComp from '$lib/components/text.svelte';
  import Box from '$lib/components/box.svelte';
	import Body from "$lib/components/accordion/body.svelte";
	import Item from "$lib/components/accordion/item.svelte";

  import Modal from '$lib/components/modal.svelte';

  let showModal: boolean = false;
  const handleToggleModal = () => {
    showModal = !showModal;
  };

  let previewSolution: boolean = false;
  let showSolution: boolean = false;
  export let question: SingleChoiceQuestion;
  let answers: [[Text, Text?], number][] = question.answers.map((val, ind) => [val, ind]);

  function submitQuestion() {
    showSolution = !showSolution;
  }

  function toggleSolutionPreview() {
    previewSolution = !previewSolution;
  }

  let currentChoice: number = 0;
</script>

<Box>
  <h4 class="mb-2 text-2xl font-bold tracking-tight text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl">
    {question.title}
  </h4>
  {#each question.question as par}
    <p class="font-normal text-t-reg-lgt dark:text-t-reg-drk"><TextComp text={par} /></p>
  {/each}
  <div
    class="p-4 grid grid-cols-1 md:grid-cols-2 form-check font-normal text-t-reg-lgt dark:text-t-reg-drk"
  >
    {#each answers as answer}
      <div class="col-span-1 p-4">
        <label for={`answer-${answer[1]}`}>
          <Box bg="p-pri-lgt-hgl" bgDark="p-pri-drk-hgl">
            <div class="grid grid-cols-6 place-items-center">
              <div class="col-span-1 justify-center">
                <input
                  id={`answer-${answer[1]}`}
                  type="radio"
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-p-pri-lgt-bdr dark:border-p-pri-drk-bdr checked:bg-p-acc-lgt dark:checked:bg-p-acc-drk checked:border-p-acc-lgt-bdr dark:checked:border-p-acc-drk-bdr focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  bind:group={currentChoice}
                  name="currentChoice"
                  value={answer[1]}
                />
              </div>
              <div class="col-span-5"><TextComp text={answer[0][0]} equationInline={true} /></div>
            </div>
            {#if question.config.showDetails && answer[0][1] !== undefined}
            <div class="m-4">
            <Body>
              <Item id="0" title="Hinweis">
                <p><TextComp text={answer[0][1]}/></p>
              </Item>
            </Body>
          </div>
            {/if}
          </Box>
        </label>
      </div>
    {/each}
  </div>
  <div class="p-4 grid grid-cols-1 md:grid-cols-3 font-normal text-gray-700 dark:text-gray-400 place-items-center">
    <div class="col-span-1 m-4">
      <button
        on:click={submitQuestion}
        class="dark:hover:bg-p-acc-drk-hgl hover:bg-p-acc-lgt-hgl dark:bg-p-acc-drk bg-p-acc-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 rounded-full h-10"
        >Absenden</button
      >
    </div>
    <div class="col-span-1 m-4">
      {#if question.config.assistance === AssistanceType.Solution}
        <button
          on:click={toggleSolutionPreview}
          class="dark:hover:bg-p-acc-drk-hgl hover:bg-p-acc-lgt-hgl dark:bg-p-acc-drk bg-p-acc-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 rounded-full h-10"
          >Lösung</button
        >
      {:else if question.config.assistance === AssistanceType.Hint}
        <button
          class="dark:hover:bg-p-acc-drk-hgl hover:bg-p-acc-lgt-hgl dark:bg-p-acc-drk bg-p-acc-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 rounded-full h-10"
          >Hinweis</button
        >
      {/if}
    </div>
    <div class="col-span-1 m-4">
      <button
        class="h-10 dark:hover:bg-p-acc-drk-hgl hover:bg-p-acc-lgt-hgl dark:bg-p-acc-drk bg-p-acc-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 rounded-full"
        >◀</button
      ><button
        class="h-10 dark:hover:bg-p-acc-drk-hgl hover:bg-p-acc-lgt-hgl dark:bg-p-acc-drk bg-p-acc-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 rounded-full ml-4"
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
                <div class="col-span-5"><TextComp text={answer[0][0]} equationInline={true} /></div>
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
                <div class="col-span-5"><TextComp text={answer[0][0]} equationInline={true} /></div>
                <div class="col-span-1 justify-center">{#if answer[1] === question.correctAnswer}<div class="text-lg text-t-suc-lgt dark:text-t-suc-drk font-extrabold">✓</div>{:else if answer[1] === currentChoice}<div class="text-lg text-t-fal-lgt dark:text-t-fal-drk font-extrabold">✘</div>{/if}</div>
              </div>
            </Box>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-1 place-items-end">
      <div>
        <button
          on:click={submitQuestion}
          class="h-10 dark:hover:bg-p-acc-drk-hgl hover:bg-p-acc-lgt-hgl dark:bg-p-acc-drk bg-p-acc-lgt text-t-reg-lgt-hgl dark:text-t-reg-drk-hgl font-bold py-2 px-4 rounded-full ml-4 h-10"
          >▶</button
        >
      </div>
    </div>
  </svelte:fragment>
</Modal>
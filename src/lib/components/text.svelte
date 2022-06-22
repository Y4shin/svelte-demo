<script lang="ts">
    import { TextType, type Text } from "$lib/questions";
    import Katex from "$lib/components/katex.svelte";
    export let text: Text;
    export let equationInline: boolean = false;
</script>
{#if text.isEquation}
    <Katex math={text.equation} displayMode inline={equationInline}/>
{:else}
    {#each text.text as t}
        {#if t.type === TextType.Text}
            {t.text}
        {:else if t.type === TextType.LaTeX}
            <Katex math={t.text}/>
        {/if}
    {/each}
{/if}
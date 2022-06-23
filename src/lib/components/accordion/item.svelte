<script lang="ts">
    
    import { getContext } from 'svelte';

    import MdKeyboardArrowUp from 'svelte-icons/md/MdKeyboardArrowUp.svelte'
    
    import Box from '$lib/components/box.svelte';

    import { slide } from "svelte/transition";
    
    export let id;

    export let title;
    
    export let subTitle = "";

    let isHovered = false;

    let isFocused = false;

    const active = getContext("context");

    $: isCurrentActive = $active === id;

    const onClickHandler = () => {

        if (isCurrentActive) {
            
            $active = null;
        } 
        else {
            
            $active = id;
        }
    }
</script>


<Box padding={1}>
    <button 
    on:click={onClickHandler}
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    on:focus={() => isFocused = true}
    on:blur={() => isFocused = false}
    class="flex text-left w-full focus:outline-none items-center p-4">
        <div class="w-full">
            <div class="
                font-bold 
                text-sm 
                mb-1 
                transition 
                text-t-reg-lgt
                dark:text-t-reg-drk
                hovered:text-t-reg-lgt-hgl
                dark:hovered:text-t-reg-drk-hgl
            ">
                <span class="
                    border-b-2 
                    inline-block 
                    border-transparent
                    transition
                "
                class:border-opacity-50={isFocused}
                class:border-blue-300={isFocused}>
                    {title}  
                </span>    
            </div>
    
            {#if !!subTitle} 
                <div class="text-t-reg-lgt dark:text-t-reg-drk text-sm">
                    {subTitle}
                </div>
            {/if}
        </div>

        <div class="
            w-8
            transform 
            transition
            
            text-t-reg-lgt
            dark:text-t-reg-drk 
        "
        class:rotate-180={isCurrentActive}
        class:text-blue-400={isHovered || isFocused}>
            <MdKeyboardArrowUp/>
        </div>
    </button>

    {#if isCurrentActive}
        <div class="px-4 pb-4 mt-4"
        transition:slide>
            <slot/>
        </div>
    {/if}
</Box>
<!--</div>-->
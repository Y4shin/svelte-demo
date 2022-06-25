<script lang="ts">

    import { browser } from '$app/env';
    import { onMount } from 'svelte';
    import lazyload from 'vanilla-lazyload';

    import type { H5PContent } from "$lib/study";

    export let content: H5PContent;

    let ifrclass = "lazy hidden"

    let lazyloadInstance;
    if (browser) {
        lazyloadInstance = new lazyload();
    }

    

    const scr: string = "\<script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"\>\</script\>";
</script>

<iframe class="{ifrclass}" loading="lazy" src="{content.src}" frameborder="{content.frameborder}" allowfullscreen="{content.allowfullscreen === "allowfullscreen"}" allow="{content.allow}" title="{content.title}"></iframe>{@html scr}

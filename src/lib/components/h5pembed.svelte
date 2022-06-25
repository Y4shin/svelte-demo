<script lang="ts">
    import type { H5PContent } from "$lib/study";

    export let content: H5PContent;

    const scr: string = "\<script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"\>\</script\>";
</script>

<iframe src="{content.src}" frameborder="{content.frameborder}" allowfullscreen="{content.allowfullscreen === "allowfullscreen"}" allow="{content.allow}" title="{content.title}"></iframe>{@html scr}

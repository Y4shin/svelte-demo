<script lang="ts">
    //import { type H5PContent } from '$lib/study';

    //export let lesson: H5PContent;
    //const sc: string = "<script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script>";
</script>

<iframe src="{lesson.src}" width="{lesson.width}" height="{lesson.height}" frameborder="{lesson.frameborder}" allowfullscreen="{lesson.allowfullscreen}" allow="{lesson.allow}" title="{lesson.title}"></iframe>{@html sc}
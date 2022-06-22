<script lang="ts">
    export let bg: string = "white";
    export let bgDark: string = "gray-800";
    export let border: string = "gray-200";
    export let borderDark: string = "gray-700";
    export let text: string = "gray-700";
    export let textDark: string = "gray-400";
</script>

<div class="p-4 rounded-lg border border-{border} dark:border-{borderDark} shadow-md bg-{bg} dark:bg-{bgDark} text-{text} dark:text-{textDark} transition-all duration-500">
    <slot/>
</div>
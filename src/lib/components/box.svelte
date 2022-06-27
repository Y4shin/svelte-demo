<script lang="ts">


    export let bg: string = "p-pri-lgt";
    export let bgDark: string = "p-pri-drk";
    export let border: string = "p-pri-lgt-bdr";
    export let borderDark: string = "p-pri-drk-bdr";
    export let text: string = "t-reg-lgt";
    export let textDark: string = "t-reg-drk";
    export let padding: number = 4;
    export let additionalClasses: string[] = [];
</script>

<div class="p-{padding} rounded-lg border border-{border} dark:border-{borderDark} shadow-md bg-{bg} dark:bg-{bgDark} text-{text} dark:text-{textDark} {additionalClasses.join(' ')} transition-all duration-300">
    <slot/>
</div>
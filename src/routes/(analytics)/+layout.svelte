<script lang="ts">
    let { children } = $props();
</script>

<main
    class="h-screen flex flex-col items-center justify-center gap-5 text-center"
>
    {@render children()}
</main>

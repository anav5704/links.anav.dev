<script lang="ts">
    import "@fontsource/geist-sans";
    import "@fontsource/alice";

    import "../app.css";

    let { children } = $props();
</script>

<main
    class="w-11/12 md:w-3/4 lg:w-1/2 mx-auto space-y-5 py-20 text-base md:text-lg"
>
    {@render children()}
</main>

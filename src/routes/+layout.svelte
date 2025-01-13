<script lang="ts">
    import "@fontsource/geist-sans";
    import "@fontsource/alice";

	import '../app.css';

	let { children } = $props();
</script>

<main class="w-1/2 mx-auto space-y-5 py-20 text-lg">
    {@render children()}
</main>
<script lang="ts">
    import ModalProvider from "@/providers/ModalProvider.svelte";

    let { children } = $props();
</script>

<ModalProvider />

<main class="page">
    {@render children()}
</main>

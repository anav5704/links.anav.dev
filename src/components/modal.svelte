<script lang="ts">
    let { open = $bindable(), header, children } = $props();

    let dialog: HTMLDialogElement | null = $state(null);

    $effect(() => {
        if (open) dialog?.showModal();
    });
</script>

<dialog
    bind:this={dialog}
    class=" p-5 rounded-lg top-1/2 -translate-y-1/2"
    onclose={() => (open = false)}
    onclick={(e) => {
        if (e.target === dialog) dialog?.close();
    }}
>
    <h2 class="mb-5 pt-0">{header}</h2>
    {@render children()}
</dialog>

<script lang="ts">
    import Modal from "../../../components/modal.svelte";
    import type { Collection } from "@prisma/client";

    let current = $state<Collection | null>(null);
    let createModal = $state(false);
    let manageModal = $state(false);

    const { data } = $props();
</script>

<h2>All Collections</h2>

<button onclick={() => (createModal = true)} class="w-full"> Create</button>

<Modal bind:open={createModal} header="Create Collection">
    <form method="POST" action="?/create" class="flex flex-col gap-5 w-[400px]">
        <input name="title" type="text" required />
        <input name="index" type="number" required />
        <button type="submit">Create</button>
    </form>
</Modal>

{#each data.collections as collection}
    <div>
        <button
            class="w-full"
            onclick={() => {
                manageModal = true;
                current = collection;
            }}
        >
            {collection.title}
        </button>
    </div>
{/each}

<Modal bind:open={manageModal} header="Manage Collection">
    <form method="POST" action="?/update" class="flex flex-col gap-5 w-[400px]">
        <input hidden type="text" name="id" value={current?.id} />
        <input
            defaultValue={current?.title}
            name="title"
            type="text"
            required
        />
        <input
            defaultValue={current?.index}
            name="index"
            type="number"
            required
        />
        <div class="flex gap-5">
            <button type="submit" formaction="?/delete"> Delete </button>
            <button type="submit"> Update </button>
        </div>
    </form>
</Modal>

<style>
    input,
    button {
        @apply border border-zinc-200 rounded-lg p-3.5 w-full;
    }
</style>

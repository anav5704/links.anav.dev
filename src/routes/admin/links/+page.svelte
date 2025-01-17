<script lang="ts">
    import type { Link } from "@prisma/client";
    import Modal from "../../../components/modal.svelte";

    let current = $state<Link | null>(null);
    let createModal = $state(false);
    let manageModal = $state(false);

    const { data } = $props();
</script>

<h2>All Links</h2>

<button onclick={() => (createModal = true)} class="w-full"> Create</button>

<Modal bind:open={createModal} header="Create Link">
    <form method="POST" action="?/create" class="flex flex-col gap-5 w-[400px]">
        <select name="collectionId">
            {#each data.collections as { title, id }}
                <option value={id}>{title}</option>
            {/each}
        </select>
        <input placeholder="title" name="title" type="text" required />
        <input placeholder="slug" name="slug" type="text" required />
        <input placeholder="url" name="url" type="text" required />
        <input placeholder="index" name="index" type="number" required />
        <button type="submit">Create</button>
    </form>
</Modal>

{#each data.links as link}
    <div>
        <button
            class="w-full"
            onclick={() => {
                manageModal = true;
                current = link;
            }}
        >
            {link.title}
        </button>
    </div>
{/each}

<Modal bind:open={manageModal} header="Manage Link">
    <form method="POST" action="?/update" class="flex flex-col gap-5 w-[400px]">
        <input hidden type="text" name="id" value={current?.id} />
        <select name="collectionId" value={current?.collectionId}>
            {#each data.collections as { title, id }}
                <option value={id}>{title}</option>
            {/each}
        </select>
        <input
            defaultValue={current?.title}
            placeholder="title"
            name="title"
            type="text"
            required
        />
        <input
            defaultValue={current?.slug}
            placeholder="slug"
            name="slug"
            type="text"
            required
        />
        <input
            defaultValue={current?.url}
            placeholder="url"
            name="url"
            type="text"
            required
        />
        <input
            defaultValue={current?.index}
            placeholder="index"
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
    select,
    option,
    button {
        @apply border border-zinc-200 rounded-lg p-3.5 w-full;
    }

    select {
        @apply bg-white;
    }
</style>

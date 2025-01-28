<script lang="ts">
    import EditLink from "@/components/forms/EditLink.svelte";
    import AddLink from "@/components/forms/AddLink.svelte";
    import Search from "@/components/Search.svelte";
    import Modal from "@/components/Modal.svelte";
    import { dndzone } from "svelte-dnd-action";
    import type { Link } from "@prisma/client";
    import { flip } from "svelte/animate";

    const { data } = $props();

    let links = $state<Link[]>(data.links);
    let currentLink = $state<Link>();
    let addLink = $state(false);
    let editLink = $state(false);
    const duration = 150;

    const handleConsider = (e: CustomEvent<{ items: Link[] }>) => {
        links = e.detail.items;
    };

    const handleFinalize = async (e: CustomEvent<{ items: Link[] }>) => {
        links = e.detail.items;

        const data = new FormData();

        data.append(
            "links",
            JSON.stringify(
                links.map((link, index) => ({
                    ...link,
                    index: ++index,
                }))
            )
        );

        await fetch("?/reorderLink", {
            method: "POST",
            body: data,
        });
    };

    $effect(() => {
        links = data.links;
    });
</script>

<h1>Dashboard</h1>

<Modal header="Add Link" bind:open={addLink}>
    <AddLink handleClose={() => (addLink = false)} />
</Modal>

<Modal header="Edit Link" bind:open={editLink}>
    <EditLink link={currentLink} handleClose={() => (editLink = false)} />
</Modal>

<div class="flex flex-col md:flex-row gap-5">
    <Search />
    <button onclick={() => (addLink = true)}>Create Link</button>
</div>

<section
    use:dndzone={{
        items: links,
        dropTargetStyle: {},
        flipDurationMs: duration,
    }}
    onconsider={handleConsider}
    onfinalize={handleFinalize}
    class="space-y-5"
>
    {#each links as link (link.id)}
        <button
            animate:flip={{ duration }}
            class={`${link.hidden && "opacity-50"} w-full text-left`}
            onclick={() => {
                currentLink = link;
                editLink = true;
            }}
        >
            <p>{link.title}</p>
            <p class="faded">{link.subtitle}</p>
        </button>
    {/each}
</section>

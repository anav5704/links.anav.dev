<script lang="ts">
    import EditLink from "@/components/forms/EditLink.svelte";
    import AddLink from "@/components/forms/AddLink.svelte";
    import { modalStore } from "@/stores/modal.svelte.js";
    import Search from "@/components/Search.svelte";
    import Modal from "@/components/Modal.svelte";
    import { dndzone } from "svelte-dnd-action";
    import type { Link } from "@prisma/client";
    import { flip } from "svelte/animate";

    const { data } = $props();

    let links = $state<Link[]>(data.links);
    let currentLink = $state<Link>();
    export const duration = 150;

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

<svelte:head>
    <meta name="description" content="Anav Chand | Dashboard" />
    <title>Anav Chand | Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<Modal header="Add Link" bind:open={modalStore.addModal}>
    <AddLink />
</Modal>

<Modal header="Edit Link" bind:open={modalStore.editModal}>
    <EditLink link={currentLink} />
</Modal>

<div class="flex flex-col md:flex-row gap-5">
    <Search />
    <button onclick={() => (modalStore.addModal = true)}>Create Link</button>
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
            class="bg-white w-full text-left !cursor-pointer"
            onclick={() => {
                currentLink = link;
                modalStore.editModal = true;
            }}
        >
            <p>{link.title}</p>
            <p class="line-clamp-1 faded">
                {link.hidden ? link.url : link.subtitle}
            </p>
        </button>
    {/each}
</section>

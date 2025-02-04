<script lang="ts">
    import { modalStore } from "@/stores/modal.svelte";
    import { enhance } from "$app/forms";

    const { link } = $props();

    let isHidden = $state(link.hidden);
    let isLoading = $state(false);
    let url = $state(link.url);
</script>

<form
    action="?/updateLink"
    method="POST"
    use:enhance={() => {
        isLoading = true;
        return async ({ update }) => {
            update().finally(async () => {
                isLoading = false;
                modalStore.editModal = false;
            });
        };
    }}
>
    <input type="text" name="id" value={link?.id} hidden />

    <label>
        Title
        <input type="text" name="title" value={link?.title} />
    </label>

    {#if !isHidden}
        <label>
            Subtitle
            <input type="text" name="subtitle" value={link?.subtitle} />
        </label>
    {/if}

    <label>
        Slug
        <input type="text" name="slug" value={link?.slug} />
    </label>

    <label>
        URL
        <input type="text" name="url" bind:value={url} />
    </label>

    <label>
        Hidden
        <input bind:checked={isHidden} type="checkbox" name="hidden" hidden />
        <button
            onclick={() => (isHidden = !isHidden)}
            class="text-left"
            type="button"
        >
            {isHidden ? "Yes " : "No"}
        </button>
    </label>

    <di class="grid grid-cols-2 gap-5">
        <button
            onclick={() => (modalStore.editModal = false)}
            class="col-span-1"
        >
            Close
        </button>
        {#if url}
            <button class="col-span-1" type="submit">
                {isLoading ? "Loading..." : "Update"}
            </button>
        {:else}
            <button class="col-span-1" type="submit" formaction="?/deleteLink">
                {isLoading ? "Loading..." : "Delete"}
            </button>
        {/if}
    </di>
</form>

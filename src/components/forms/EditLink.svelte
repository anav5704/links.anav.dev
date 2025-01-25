<script lang="ts">
    const { link, handleClose } = $props();

    let url = $state(link.url);
</script>

<form action="?/updateLink" method="POST">
    <input type="text" name="id" value={link?.id} hidden />
    <label>
        Title
        <input type="text" name="title" value={link?.title} />
    </label>

    <label>
        Subtitle
        <input type="text" name="subtitle" value={link?.subtitle} />
    </label>

    <label>
        Slug
        <input type="text" name="slug" value={link?.slug} />
    </label>

    <label>
        URL
        <input type="text" name="url" bind:value={url} />
    </label>

    <di class="grid grid-cols-2 gap-5">
        <button class="col-span-1" onclick={handleClose}>Close</button>
        {#if url}
            <button class="col-span-1" type="submit"> Update </button>
        {:else}
            <button class="col-span-1" type="submit" formaction="?/deleteLink">
                Delete
            </button>
        {/if}
    </di>
</form>

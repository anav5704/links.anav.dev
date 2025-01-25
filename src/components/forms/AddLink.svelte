<script lang="ts">
    const { handleClose } = $props();
</script>

<form action="?/createLink" method="POST">
    <label>
        Title
        <input type="text" name="title" />
    </label>

    <label>
        Subtitle
        <input type="text" name="subtitle" />
    </label>

    <label>
        Slug
        <input type="text" name="slug" />
    </label>

    <label>
        URL
        <input type="text" name="url" />
    </label>

    <di class="grid grid-cols-2 gap-5">
        <button class="col-span-1" onclick={handleClose}>Close</button>
        <button class="col-span-1" type="submit">Create</button>
    </di>
</form>

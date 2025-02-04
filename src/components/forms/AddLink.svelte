<script lang="ts">
    import { modalStore } from "@/stores/modal.svelte";
    import { enhance } from "$app/forms";

    let isHidden = $state(false);
    let isLoading = $state(false);
</script>

<form
    action="?/createLink"
    method="POST"
    use:enhance={() => {
        isLoading = true;
        return async ({ update }) => {
            update().finally(async () => {
                isLoading = false;
                modalStore.addModal = false;
            });
        };
    }}
>
    {#if !isHidden}
        <label>
            Title
            <input type="text" name="title" />
        </label>

        <label>
            Subtitle
            <input type="text" name="subtitle" />
        </label>
    {/if}

    <label>
        Slug
        <input type="text" name="slug" />
    </label>

    <label>
        URL
        <input type="text" name="url" />
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

    <div class="grid grid-cols-2 gap-5">
        <button
            onclick={() => (modalStore.addModal = false)}
            class="col-span-1"
        >
            Close
        </button>
        <button class="col-span-1" type="submit">
            {isLoading ? "Loading..." : "Create"}
        </button>
    </div>
</form>

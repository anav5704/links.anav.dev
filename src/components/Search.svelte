<script lang="ts">
    import { getStores } from "$app/stores";
    import { goto } from "$app/navigation";
    const { page } = getStores();

    let query = $state($page.url.searchParams.get("search"));

    const handleSearch = () => {
        goto("?search=" + query, {
            keepFocus: true,
            noScroll: true,
        });
    };
</script>

<input
    placeholder="Search..."
    oninput={handleSearch}
    bind:value={query}
    type="search"
    class="grow"
/>

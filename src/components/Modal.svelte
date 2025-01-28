<script lang="ts">
    let { open = $bindable(), header, children } = $props();
</script>

{#if open}
    <div
        class="z-10 fixed flex items-center -top-5 left-0 w-screen h-screen bg-black/10 backdrop-blur-lg"
    >
        <div class="mx-auto bg-white p-5 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
            <h2 class="mb-5">{header}</h2>
            {@render children()}
        </div>
    </div>
{/if}

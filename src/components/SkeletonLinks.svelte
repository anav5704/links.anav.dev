<script lang="ts">
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="flex flex-col gap-5">
    {#each skeletons as Skeleton}
        <div class="p-2 bg-zinc-100 rounded-lg animate-pulse text-transparent">
            <p>Title</p>
            <p>Subtitle</p>
        </div>
    {/each}
</div>

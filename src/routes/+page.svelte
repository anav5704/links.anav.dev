<script lang="ts">
    const { data } = $props();
</script>

<svelte:head>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <meta name="description" content="Anav Chand | Links" />
    <title>Anav Chand | Links</title>
</svelte:head>

<img
    class="rounded-full h-[150px] w-[150px] md:w-[200px] md:h-[200px] aspect-square mx-auto"
    src="images/anav.jpg"
    alt="Anav Chand"
/>

<h1>Anav Chand</h1>

<p class="text-center">
    Hey, I am an aspiring DevOps engineer, self-taught web developer, first-year
    software engineering student, and award-winning peer mentor @
    <a class="underline" href="https://usp.ac.fj"> USP </a>.
</p>

{#await data.collections}
    <p>Loading....</p>
{:then collection}
    {#each collection as { title, links }}
        <h2>{title}</h2>
        <div
            class="border border-zinc-200 rounded-lg flex flex-col divide-y divide-zinc-200"
        >
            {#each links as { title, slug }}
                <a class="p-5" href={slug}>{title}</a>
            {/each}
        </div>
    {/each}
{/await}

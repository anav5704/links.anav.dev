<script lang="ts">
    import data from "../data/links.json";
</script>

<svelte:head>
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

{#each data as { title, href }}
    <a class="block px-4 py-2 border border-zinc-200 rounded-lg" {href}>
        {title}
    </a>
{/each}

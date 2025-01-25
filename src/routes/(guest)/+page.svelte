<script lang="ts">
    import SkeletonLinks from "@/components/SkeletonLinks.svelte";
    import GuestLink from "@/components/GuestLink.svelte";

    const { data } = $props();
</script>

<svelte:head>
    <meta name="description" content="Anav Chand | Links" />
    <title>Anav Chand | Links</title>
</svelte:head>

<enhanced:img
    class="rounded-full h-[150px] w-[150px] md:w-[200px] md:h-[200px] aspect-square mx-auto"
    src="/static/anav.jpg"
    alt="Anav Chand"
/>

<h1 class="text-center">Hi, I'm Anav Chand</h1>

<p class="text-center">
    I'm an aspiring DevOps engineer, self-taught web developer, first-year
    software engineering student, and award-winning peer mentor @
    <a class="underline" href="https://usp.ac.fj"> USP</a>.
</p>

{#await data.links}
    <SkeletonLinks />
{:then links}
    {#each links as link}
        <GuestLink {link} />
    {/each}
{/await}

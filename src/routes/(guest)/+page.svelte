<script lang="ts">
    import SkeletonLinks from "@/components/SkeletonLinks.svelte";
    import GuestLink from "@/components/GuestLink.svelte";

    const { data } = $props();
</script>

<svelte:head>
    <script
        defer
        data-domains="links.anav.dev"
        src="https://cloud.umami.is/script.js"
        data-website-id="9acc1f2c-6aff-4c39-af51-887c135e40d5"
    ></script>
    <meta name="description" content="Anav Chand | Links" />
    <title>Anav Chand | Links</title>
</svelte:head>

<enhanced:img
    class="rounded-full mx-auto"
    src="/static/anav.jpg"
    alt="Anav Chand"
    height="150px"
    width="150px"
/>

<h1 class="text-center">Hi, I'm Anav Chand</h1>

<p class="text-center">
    Aspiring DevOps engineer. Self-taught web developer. Second-year software
    engineering student. Award-winning peer mentor.
</p>

{#await data.links}
    <SkeletonLinks />
{:then links}
    {#each links as link}
        <GuestLink {link} />
    {/each}
{/await}

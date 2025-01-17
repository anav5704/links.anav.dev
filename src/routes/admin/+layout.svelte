<script lang="ts">
    let { children } = $props();

    const adminRoutes = [
        {
            label: "Links",
            href: "/admin/links",
        },
        {
            label: "Collections",
            href: "/admin/collections",
        },
        {
            label: "Analytics",
            href: "/admin/analytics",
        },
    ];
</script>

<nav class="mt-5 border border-zinc-200 rounded-lg p-3 text-base flex gap-10">
    {#each adminRoutes as { label, href }}
        <a {href}>{label}</a>
    {/each}
</nav>

{@render children()}

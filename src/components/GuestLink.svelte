<script lang="ts">
    const { link } = $props();
</script>

<a
    class="block px-4 py-2 border border-zinc-200 rounded-lg"
    data-umami-event={link.slug}
    href={link.slug}
>
    <p>{link.title}</p>
    <p class="faded">{link.subtitle}</p>
</a>

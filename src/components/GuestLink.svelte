<script lang="ts">
    const { link } = $props();
</script>

<a class="block" data-umami-event={link.slug} href={link.slug}>
    <p>{link.title}</p>
    <p class="faded">{link.subtitle}</p>
</a>

<script lang="ts">
    import { Check, Link, QrCode, Settings } from "@lucide/svelte";
    import { modalStore } from "@/stores/modal.svelte";
    import { linkStore } from "@/stores/link.svelte";
    import { PUBLIC_URL } from "$env/static/public";
    import QRCode from "qrcode";

    let { link } = $props();

    let isLinkCopied = $state(false);
    let isQRCopied = $state(false);

    const createLink = (slug: string) => {
        const url = new URL(PUBLIC_URL);
        url.pathname = slug;
        return url.href;
    };

    const copyLink = () => {
        navigator.clipboard.writeText(createLink(link.slug));

        isLinkCopied = true;
        setTimeout(() => {
            isLinkCopied = false;
        }, 1000);
    };

    const copyQRcode = async () => {
        const url = createLink(link.slug);
        const canvas = document.createElement("canvas");

        await QRCode.toCanvas(canvas, url, { width: 1000, margin: 1 });
        canvas.toBlob(async (blob) => {
            if (!blob) return alert("Failed to generate QR blob.");

            await navigator.clipboard.write([
                new ClipboardItem({ [blob.type]: blob }),
            ]);
        });

        isQRCopied = true;
        setTimeout(() => {
            isQRCopied = false;
        }, 1000);
    };

    const handleEdit = () => {
        linkStore.link = link;
        modalStore.editModal = true;
    };
</script>

<div class="col-span-1 md:col-span-2">
    <p>{link.title}</p>
    <p class="line-clamp-1 faded">
        {link.hidden ? link.url : link.subtitle}
    </p>
</div>

<div
    class="opacity-100 md:opacity-0 group-hover:opacity-100 transition col-span-1 flex items-center justify-end"
>
    <button class="link-action" onclick={copyLink}>
        {#if isLinkCopied}
            <Check size={20} />
        {:else}
            <Link size={20} />
        {/if}
    </button>

    <button class="link-action" onclick={copyQRcode}>
        {#if isQRCopied}
            <Check size={20} />
        {:else}
            <QrCode size={20} />
        {/if}
    </button>

    <button class="link-action" onclick={handleEdit}>
        <Settings size={20} />
    </button>
</div>

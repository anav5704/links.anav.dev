<script lang="ts">
    import EditLink from "@/components/forms/EditLink.svelte";
    import AddLink from "@/components/forms/AddLink.svelte";
    import { modalStore } from "@/stores/modal.svelte";
    import { linkStore } from "@/stores/link.svelte";
    import Modal from "@/components/Modal.svelte";
</script>

<Modal header="Add Link" bind:open={modalStore.addModal}>
    <AddLink />
</Modal>

<Modal header="Edit Link" bind:open={modalStore.editModal}>
    <EditLink link={linkStore.link} />
</Modal>

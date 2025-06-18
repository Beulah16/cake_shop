<script setup>

defineProps({
    open: Boolean
})

const emit = defineEmits(['close'])

</script>

<template>
    <Teleport to="body">
        <div class="modal" v-if="open" @click.self="emit('close')" >
            <div class="modal-content">
                <button @click="emit('close')">Close</button>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
}

.modal-content {
    width: 50%;
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1)
}
</style>
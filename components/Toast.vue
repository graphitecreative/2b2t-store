<template>
    <Teleport to="body">
        <div class="toast-container">
            <TransitionGroup name="toast-slide">
                <div v-for="toast in toasts" :key="toast.id" class="toast" role="alert" aria-live="assertive"
                    aria-atomic="true" :class="`toast--${toast.options.type}`">
                    <div class="toast__content">
                        <span class="toast__title" v-if="toast.title">
                            {{ toast.title }}
                        </span>
                        <span>{{ toast.message }}</span>
                    </div>

                    <Button @click="toastStore.removeToast(toast)" variant="clear" icon="close"></Button>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
</script>

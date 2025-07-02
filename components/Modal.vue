<template>
    <Overlay v-model="model" @show="onAfterEnter" @hide="onBeforeLeave" transition="fade" class="modal__container"
        tabindex="-1" role="dialog">
        <div class="modal" ref="modal" tabindex="0" :style="style">
            <Button class="modal__close" variant="clear" @click="closeModal" icon="close">
            </Button>

            <div class="modal__content">
                <slot />
            </div>
        </div>
    </Overlay>
</template>

<script setup lang="ts">
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

interface ModalProps {
    width?: string;
}

const props = defineProps<ModalProps>();
const model = defineModel<boolean>({ default: false });
const emit = defineEmits(["close", "hidden"]);

const modal = ref<HTMLElement | null>(null);

const style = computed(() => ({
    maxWidth: props.width,
}));

const { activate, deactivate } = useFocusTrap(modal, { initialFocus: false });

const onAfterEnter = async () => {
    document.body.style.overflow = "hidden";

    // Trap focus within modal
    activate();
};

const onBeforeLeave = async () => {
    document.body.style.overflow = "";

    deactivate();

    emit("hidden");
};

const closeModal = () => {
    model.value = false;

    nextTick(() => {
        document.body.style.overflow = "";
        deactivate();
        emit("close");
    });
};
</script>

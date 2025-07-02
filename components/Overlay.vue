<template>
    <Teleport v-if="isMounted" :to="target">
        <div class="overlay">
            <Transition name="fade">
                <div v-if="isActive" class="overlay__scrim" @click="isActive = false"></div>
            </Transition>

            <Transition name="fade" @after-enter="emit('show')" @after-leave="emit('hide')">
                <div v-if="isActive" class="overlay__content" v-bind="$attrs">
                    <slot></slot>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>

<script setup lang="ts">

// defineOptions({
//     inheritAttrs: false,
// });
//
// const emit = defineEmits(["show", "hide"]);
// const { target } = useTeleport();
// const isActive = defineModel();
//
// const isMounted = shallowRef(false);
// if (IN_BROWSER) {
//     onMounted(() => {
//         isMounted.value = true;
//     });
// }

</script>

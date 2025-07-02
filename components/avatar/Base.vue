<template>
    <div class="avatar" :style="styles">
        <slot v-bind="{ width, height }"></slot>
    </div>
</template>

<script setup lang="ts">
interface AvatarProps {
    width?: number;
    height?: number;
}

const props = withDefaults(defineProps<AvatarProps>(), {
    width: 30,
    height: 30,
});

const styles = computed(() => ({
    width: props.width + "px",
    height: props.height + "px",
}));
</script>

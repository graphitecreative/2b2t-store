<template>
    <span class="loader" :style="style"></span>
</template>

<script setup lang="ts">
interface LoaderProps {
    size?: number | string;
}

const props = defineProps<LoaderProps>();

const size = computed(() => {
    if (typeof props.size === "number") {
        return props.size;
    }

    if (typeof props.size === "string") {
        return parseInt(props.size.split("px")[0], 10);
    }

    return 24;
});

const style = computed(() => ({
    width: `${size.value}px`,
    height: `${size.value}px`,
    borderWidth: `${size.value / 12}px`,
}));
</script>

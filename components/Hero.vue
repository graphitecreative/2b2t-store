<template>
    <div class="hero">
        <div class="hero__background">
            <NuxtImg class="hero__image" :src="image" :alt="title" loading="lazy" />
        </div>
        <div class="hero__title">
            <h1>{{ title }}</h1>
            <div>{{ subtitle }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
}

defineProps<HeroProps>();
</script>

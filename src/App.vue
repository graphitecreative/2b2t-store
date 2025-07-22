<template>
    <div class="container">
        <Header />
        <RouterView />
    </div>

    <Footer />
 </template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { usePageStore } from './stores/page.ts';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const pageStore = usePageStore();

onMounted(() => {
    pageStore.initialise()
})

</script>

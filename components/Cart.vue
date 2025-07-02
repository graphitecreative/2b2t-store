<template>
    <div class="cart">
        <CartItem v-for="item in items" :key="item.id" :item="item" :loading="itemsLoading.has(item.id)"
            @remove="emit('remove', $event)" />

        <div v-if="items.length === 0" class="d-flex justify-center mx-auto">
            {{ $t("cart.empty") }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PackageInBasket } from "~/types";

interface CartProps {
    items: PackageInBasket[];
    itemsLoading: Set<number>;
}

defineProps<CartProps>();

const emit = defineEmits<{
    remove: [id: number];
}>();
</script>

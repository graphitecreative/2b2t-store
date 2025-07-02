<template>
    <div class="cart-item">
        <div class="cart-item__image">
            <img :src="item.image" alt="Package Image" />
        </div>

        <div class="cart-item__content">
            <p class="cart-item__name">{{ item.name }}</p>
            <p>{{ $n(item.in_basket.price, "currency") }}</p>
            <p class="cart-item__gift-user" v-if="item.in_basket.gift_username">
                <i18n-t keypath="cart.item.gift_to" tag="span">
                    <template #username>
                        <span>{{ item.in_basket.gift_username }}</span>
                    </template>
                </i18n-t>
            </p>
        </div>

        <div class="cart-item__actions">
            <span class="cart-item__quantity">
                {{
                    $t("cart.item.quantity", {
                        quantity: item.in_basket.quantity,
                    })
                }}
            </span>

            <Button class="cart-item__remove" size="sm" @click="emit('remove', item.id)" :loading="loading"
                variant="clear" icon="remove">
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PackageInBasket } from "~/types";

interface CartItemProps {
    item: PackageInBasket;
    loading: boolean;
}

defineProps<CartItemProps>();

const emit = defineEmits<{
    remove: [id: number];
}>();
</script>

<script setup>
import { useCart } from '@/composables/useCart.js'

const { addItemToCart } = useCart();

defineProps({
    cake: {
        type: Object,
        required: true
    }
});

</script>
<template>
    <div class="card">
            <div class="card-header">
                <h2 class="card-title">{{ cake.title }}</h2>
                <p>{{ cake.weight }}</p>
            </div>
            <div class="card-body">
                <img :src="cake.image" alt="">
            </div>
            <div class="card-footer">
                <div class="add-to-cart" @click="addItemToCart(cake)">
                    <p>Add to Cart</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>                      
                </div>
                <h2>${{ cake.price }}</h2>
            </div>
        </div>
</template>
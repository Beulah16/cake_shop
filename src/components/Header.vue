<script setup>
import { useCart } from '@/composables/useCart.js'

const { cartItemCount } = useCart();

const emit = defineEmits(['openModal'])
</script>


<template>
    <nav class="w-[80%] mx-auto flex justify-between items-center">
        <div class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-15 w-15">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>

        <div class="h-50 w-50 cursor-pointer">
            <img src="https://divacakes.com.ng/wp-content/uploads/2024/08/Diva-Cakes-New-Logo.pdf.png"
                alt="Diva Cakes Logo"/>
        </div>

        <div class="relative cursor-pointer" @click="$emit('openModal')">
            <div class="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-15 w-15">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>
            <div class="bg-red-500 h-11.5 w-11.5 rounded-full absolute -top-5 -right-5 text-white font-bold flex justify-center items-center ">{{ cartItemCount }}</div>
        </div>
    </nav>

    <nav class="bg-neutral-100 h-15 w-ful px-[20%] flex justify-between items-center">
        <a href="#" class="no-underline text-neutral-800 text-2xl font-medium">Cakes</a>
        <a href="#" class="no-underline text-neutral-800 text-2xl font-medium">Cupcakes</a>
        <a href="#" class="no-underline text-neutral-800 text-2xl font-medium">Bread</a>
        <a href="#" class="no-underline text-neutral-800 text-2xl font-medium">Bakery</a>
        <a href="#" class="no-underline text-neutral-800 text-2xl font-medium">Candies</a>
    </nav>
</template>

<style scoped>
/* .cart-wrapper {
    position: relative;
}

.cart-count {
    position: absolute;
    top: -20px;
    right: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    padding: 20px;
    height: 30px;
    border-radius: 50%;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: red;
} */
</style>
<script setup>
defineProps({
    itemCount: {
        type: Number,
        default: () => 0
    }
})
</script>


<template>
    <header>
        <nav class="top-nav">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <img src="https://divacakes.com.ng/wp-content/uploads/2024/08/Diva-Cakes-New-Logo.pdf.png"
                alt="Diva Cakes Logo" class="logo" />

            <div class="cart-wrapper" @click="$emit('openModal')">
                <div class="cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div class="cart-count">{{ itemCount }}</div>
            </div>
        </nav>

        <nav class="bottom-nav">
            <a href="#">Cakes</a>
            <a href="#">Cupcakes</a>
            <a href="#">Bread</a>
            <a href="#">Bakery</a>
            <a href="#">Candies</a>
        </nav>
    </header>
</template>

<style scoped>
.cart-wrapper {
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
}
</style>
<script setup>
import { computed } from 'vue'
import EmptyCart from '@/assets/empty-cart.svg'
import { useCart } from '@/composables/useCart.js'

const { cart, calculateItemTotalPrice, cartTotalPrice, increamentItemQnty, decreamentItemQnty, removeItemFromCart} = useCart()

const props = defineProps({
    open: Boolean,
})

const emit = defineEmits(['close'])

</script>

<template>
    <Teleport to="body">
        <div class="modal" v-if="open" @click.self="emit('close')">
            <div class="modal-content">
                <div class="cart">
                    <div class="cart-item-wrapper">
                        <template v-if="cart.length">
                            <div class="cart-item" v-for="item in cart" :key="item.id">
                                <div class="item-image">
                                    <img :src="item.image" alt="" class="dp">
                                </div>
                                <div class="item-title">{{ item.title }}</div>
                                <div class="item-qnty">
                                    <button type="button" class="decrement" @click="decreamentItemQnty(item)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                        </svg>
                                    </button>
                                    <div class="quantity">{{ item.quantity }}</div>
                                    <button type="button" class="increment" @click="increamentItemQnty(item)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="item-price">${{ item.price.toFixed(2) }}</div>
                                <div class="item-ttl-prc">${{ calculateItemTotalPrice(item) }}</div>
                                <button class="remove-item" @click="removeItemFromCart(item.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                            </div>
                        </template>
                        <div v-else class="empty-cart">
                            <img :src="EmptyCart" alt="">
                            <h3>Add items to your cart</h3>
                        </div>
                    </div>
                    <div class="cart-summary">
                        <div class="total">
                            <h3>Total</h3>
                        </div>
                        <div class="details">
                            <div class="sub-ttl-details">
                                <p calss="sub-total">Sub-Total</p>
                                <p class="total-price">${{ cartTotalPrice }}</p>
                            </div>
                            <div class="delivery-details">
                                <p>Delivery</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </div>
                        </div>
                        <select class="delivery-fee">
                            <option>Standard Delivery (Free)</option>
                        </select>
                        <button class="check-out-btn">Check Out</button>
                        <div class="payment-info">
                            <h3>We Accept</h3>
                            <div class="payment-opts">
                                <img class="logo"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                                    alt="">
                                <img class="logo"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                                    alt="">
                                <img class="logo"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png"
                                    alt="">
                                <img class="webMny-logo"
                                    src="https://1000logos.net/wp-content/uploads/2023/03/WebMoney-logo.png" alt="">
                            </div>
                        </div>
                        <p class="pnt-to-note">Got A discount code? add in the next step</p>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.increment,
.decrement,
.remove-item {
    cursor: pointer;
    border: none;
    background: none;
}

.empty-cart {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: auto;
}

.empty-cart img {
    width: 100%;

}

h3 {
    font-weight: 300;
}

.payment-opts {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 40px;
}

.webMny-logo {
    width: 70px;
}

.pnt-to-note {
    font-size: 10px;
    margin: 0 auto;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
}

.modal-content {
    width: 65%;
    height: 100%;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1)
}

.cart {
    width: 100%;
    display: grid;
    grid-template-columns: 5.5fr 2.5fr;
    gap: 1rem;
    font-size: 17px;
}

.cart-item-wrapper {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    margin-top: 30px;
    max-height: 90vh;
    overflow-y: auto;
}

.cart-summary {
    display: flex;
    flex-direction: column;
    grid-column: 2;
    gap: 1.5rem;
    height: fit-content;
    padding: 20px;
    margin-top: 30px;
    border: 1px solid rgba(0, 0, 0, 0.08);
}

.cart-item {
    display: flex;
    /* justify-content: space-between; */
    gap: 1.5rem;
    align-items: center;
    border: 1px solid rgb(235 235 235);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.item-image {
    height: 100px;
    width: 100px;
}

.dp {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.item-title {
    width: 150px;
}

.item-qnty {
    width: 90px;
    display: flex;
    align-items: center;
    gap: .5rem;

}

.size-2 {
    width: 20px;
    height: 20px;
}

.quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid rgb(139 139 139);
}

.item-price {
    width: 70px;


}

.item-ttl-prc {
    width: 80px;


}

.remove-item {
    width: 20px;
    text-align: center;
    margin-right: 20px;
}

.total {
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.sub-ttl-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.delivery-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.details {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}


.total-price {
    font-size: 13px;
}

select {
    border: none;
}

.check-out-btn {
    height: 50px;
    border: none;
    color: #fff;
    background-color: rgb(211, 5, 5);

}
</style>
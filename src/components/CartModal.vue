<script setup>
import { computed } from 'vue'


const props = defineProps({
    open: Boolean,
    cart: Array
})

const emit = defineEmits(['close'])

function calculateItemTotalPrice(item) {
    return (item.quantity * item.price).toFixed(2)
}

function calculateCartTotalPrice() {
    return props.cart.reduce((acc, item) => acc+= (item.quantity * item.price), 0).toFixed(2)
}

const cartTotalPrice = computed(calculateCartTotalPrice);

</script>

<template>
    <Teleport to="body">
        <div class="modal" v-if="open" @click.self="emit('close')">
            <div class="modal-content">
                <!-- <button @click="emit('close')">Close</button> -->
                <div class="cart">
                    <div class="cart-item-wrapper">
                        <div class="cart-item" v-for="item in cart" :key="item.id">
                            <div class="item-image">
                                <img :src="item.image" alt="" class="dp">
                            </div>
                            <div class="item-title">{{ item.title }}</div>
                            <div class="item-qnty">
                                <div class="decrement">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>
                                </div>
                                <div class="quantity">{{ item.quantity }}</div>
                                <div class="increment">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </div>
                            <div class="item-price">${{ item.price.toFixed(2) }}</div>
                            <div class="item-ttl-prc">${{ calculateItemTotalPrice(item) }}</div>
                            <div class="remove-item">X</div>
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

@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
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
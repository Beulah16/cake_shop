import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';


export function useCart() {
    const cart = useLocalStorage('cart', [])

    function addItemToCart(item) {
        if (item.id) {
            const itemFound = cart.value.find((cartItem) => cartItem.id === item.id)
            itemFound.quantity++;
            return;
        }

        item.id = uuidv4();
        item.quantity = 1;
        cart.value.push(item);
    }


    function calculateTotalItem() {
        return cart.value.reduce((acc, item) => acc += item.quantity, 0)
    }

    function calculateCartTotalPrice() {
        return cart.value.reduce((acc, item) => acc += (item.quantity * item.price), 0).toFixed(2)
    }

    const cartItemCount = computed(calculateTotalItem);
    const cartTotalPrice = computed(calculateCartTotalPrice);

    function increamentItemQnty(item) {
        item.quantity++
    }

    function decreamentItemQnty(item) {
        if (item.quantity === 0) return;
        item.quantity--
    }

    const calculateItemTotalPrice = (item) => (item.quantity * item.price).toFixed(2)

    const removeItemFromCart = (itemId) => {
        cart.value = cart.value.filter(item => item.id !== itemId)
    }

    return {
        cart,
        addItemToCart,
        cartItemCount,
        cartTotalPrice,
        increamentItemQnty,
        decreamentItemQnty,
        calculateItemTotalPrice,
        removeItemFromCart
    }
}
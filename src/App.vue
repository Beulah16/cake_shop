<script setup lang="ts">
import CartModal from '@/components/CartModal.vue';
import CakeListComponent from '@/components/CakeListComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import LayoutComponent from '@/components/LayoutComponent.vue';
import { v4 as uuidv4 } from 'uuid';
import { ref, computed } from 'vue'
import { cakes } from '@/cakes.json'

const isOpen = ref(false)

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

const cart = ref([])

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
  return cart.value.reduce((acc, value) => acc += value.quantity, 0)
}

function calculateTotalPrice() {
  return cart.value.reduce(
    (acc, value) => acc += (value.quantity * value.price), 
    0).toFixed(2)
}
const itemCount = computed(calculateTotalItem)
const totalPrice = computed(calculateTotalPrice)

</script>

<template>

  <LayoutComponent>
    <template #header>
      <HeaderComponent @open-Modal="openModal" :item-count="itemCount" />
    </template>

    <template #main>
      <CakeListComponent :cakes="cakes" @add-to-cart="addItemToCart" />
    </template>

  </LayoutComponent>

  <CartModal :open="isOpen" @close="closeModal" />
</template>

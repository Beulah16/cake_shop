<script setup>
import CartModal from '@/components/CartModal.vue';
import CakeCard from '@/components/CakeCard.vue';
import Header from '@/components/Header.vue';
import Layout from '@/components/Layout.vue';
import { cakes } from '@/cakes.json'
import { useModal } from '@/composables/useModal.js'

const { isOpen, openModal, closeModal } = useModal()

</script>

<template>

  <Layout>
    <template #header>
      <Header @open-Modal="openModal" />
    </template>

    <template #content>
      <CakeCard v-for="(cake, index) in cakes" :key="index" :cake="cake" />
    </template>

  </Layout>

  <CartModal :open="isOpen" @close="closeModal" />
</template>

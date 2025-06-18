<script setup>
import CakeCardComponent from './CakeCardComponent.vue';
defineProps({
  cakes: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['addToCart'])

function addToCart(item){
  emit('addToCart', item)
}

</script>
<template>
    <main>
        <CakeCardComponent v-for="(cake, index) in cakes" :key="index" :cake="cake" @add-to-cart="addToCart"/>
    </main>
</template>
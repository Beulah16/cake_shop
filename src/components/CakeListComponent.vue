<script setup>
import { reactive } from 'vue';
import CakeCardComponent from './CakeCardComponent.vue';

const cakes = [
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://t3.ftcdn.net/jpg/02/30/28/48/360_F_230284812_BWNoNU6T7gR0BUcUBaQQC4FCm4f1oooq.jpg",
    price: 34
  },
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/8/ZO/EK/AH/136766751/birthday-chocolate-cake-500x500-1--500x500.jpg",
    price: 40
  },
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://t3.ftcdn.net/jpg/06/14/35/44/360_F_614354408_T5LNFXAYmk3ePO3BC1YlR32L2BxwkCn9.jpg",
    price: 25.99
  },
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://t4.ftcdn.net/jpg/13/46/19/45/360_F_1346194558_ngo6EJbm32GmVIEsuYxdRrNSKwctVzbi.jpg",
    price: 45
  },
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://img.freepik.com/premium-photo/birthday-cake-white-background-high-resolution_1029679-26467.jpg",
    price: 34
  },
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://c.ndtvimg.com/2019-09/tvt2n58o_cake-decorating-_295x200_26_September_19.jpg",
    price: 34
  },
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://www.imagella.com/cdn/shop/files/3e63b22eb17f74f6c28d20842873bb3d_1cfd08ed-1ee2-4fe4-b063-0256b57155eb.jpg?v=1739858757&width=300",
    price: 34
  },
  {
    title: "Mud Cake White",
    weight: "1.9kg",
    image: "https://img.freepik.com/premium-photo/realistic-isolated-decorated-birthday-cake-transparent-background_762785-43153.jpg",
    price: 34
  }
];

</script>
<template>
    <main>
        <CakeCardComponent v-for="(cake, index) in cakes" :key="index" :cake="cake"/>
    </main>
</template>
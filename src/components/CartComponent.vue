<script setup>
const cakes = [
  {
    id: 1,
    title: "Black Forest",
    weight: "0.8kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/8/ZO/EK/AH/136766751/birthday-chocolate-cake-500x500-1--500x500.jpg",
    price: 31.95
  },
  {
    id: 2,
    title: "Strawberry Cheesecake",
    weight: "2kg",
    image: "https://c.ndtvimg.com/2019-09/tvt2n58o_cake-decorating-_295x200_26_September_19.jpg",
    price: 36
  },
  {
    id: 3,
    title: "Chocolate Pudding",
    weight: "2.7kg",
    image: "https://www.imagella.com/cdn/shop/files/3e63b22eb17f74f6c28d20842873bb3d_1cfd08ed-1ee2-4fe4-b063-0256b57155eb.jpg?v=1739858757&width=300",
    price: 40.50
  },
]
</script>

<template>
  <section class="cart">
    <div class="cart-header"></div>
    <div class="cart-body">
      <div class="item-details">
        <div class="detail-head">
          <p class="prod-details">Product Details</p>
          <p class="qty-details">Quantity</p>
          <p class="prc-details">Price</p>
          <p class="ttl-details">Total</p>
        </div>
        <div class="detail-body" v-for="(cake, index) in cakes" :key="cake.id">
          <div class="prod-info">
            <div class="prod-img"><img :src="cake.image" alt="" class="img"></div>
            <p>{{ cake.title }}</p>
          </div>
          <div class="prod-qty">
            <button>-</button>
            <div class="qty"></div>
            <button>+</button>
          </div>
          <div class="prod-prc">{{ cake.price }}</div>
          <div class="prod-total"></div>
        </div>
      </div>
      <div class="cart-total"></div>
    </div>
  </section>
</template>
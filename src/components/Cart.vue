<script setup>
import { ref, computed } from 'vue'
const cartItems = ref([
  {
    id: 1,
    title: "Black Forest",
    weight: "0.8kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/8/ZO/EK/AH/136766751/birthday-chocolate-cake-500x500-1--500x500.jpg",
    price: 31.95,
    quantity: 3,
  },
  {
    id: 2,
    title: "Strawberry Cheesecake",
    weight: "2kg",
    image: "https://c.ndtvimg.com/2019-09/tvt2n58o_cake-decorating-_295x200_26_September_19.jpg",
    price: 36,
    quantity: 2,

  },
  {
    id: 3,
    title: "Chocolate Pudding",
    weight: "2.7kg",
    image: "https://www.imagella.com/cdn/shop/files/3e63b22eb17f74f6c28d20842873bb3d_1cfd08ed-1ee2-4fe4-b063-0256b57155eb.jpg?v=1739858757&width=300",
    price: 40.50,
    quantity: 1,

  },
])

const products = [
  {
    title: "Chocolate Chip Cookies",
    weight: "1.50kg",
    image: "https://images.aws.nestle.recipes/resized/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie_448_448.jpg",
    price: 36.50,
  },
  {
    title: "Sparkling Apple Juice",
    weight: "0.7kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqwCNV_HfQ6nMTo81V1Ib14eHzrO6o-cCcQ&s",
    price: 40.75,
  },
  {
    title: "Mini Cheesecake Bites",
    weight: "0.9kg",
    image: "https://www.savingdessert.com/wp-content/uploads/2023/08/Mini-Cheesecake-Recipe-10.jpg",
    price: 99.99,
  },
  {
    title: "Birthday Banner",
    weight: "1.2kg",
    image: "https://www.balloonbuzz.com/cdn/shop/products/Untitleddesign_43.jpg?v=1634544048",
    price: 72.20,
  },
  {
    title: "Party Hats Pack (10pcs)",
    weight: "1.4kg",
    image: "https://i.ebayimg.com/images/g/9ucAAOSwptVoCoUM/s-l1200.jpg",
    price: 59.49,
  },
  {
    title: "Confetti Cannon",
    weight: "1.2kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRritHkovJbLgl4SH43OCPybgcOm7c1EHZAlw&s",
    price: 71.2,
  },
  {
    title: "Lemon Tart Slice",
    weight: "0.8kg",
    image: "https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/detail_Citrus_Tart_4-0011_2022.jpg",
    price: 30.80,
  },
  {
    title: "Gummy Bear Pack",
    weight: "0.9kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvTN0aQt2UNnNX5EXj72e0VXrzE3CkoUoSw&s",
    price: 27.95,
  },
  {
    title: "Caramel Popcorn Tub",
    weight: "1.7kg",
    image: "https://as1.ftcdn.net/jpg/02/68/89/36/1000_F_268893604_KnbdskDQfgEPc68vWdRQxM9M4ZqrBM2L.jpg",
    price: 64.75,
  },
  {
    title: "Vanilla Cupcake Box (6pcs)",
    weight: "1.6kg",
    image: "https://basketeer.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/06/16132233/Cup-3-2.jpg",
    price: 82.60,
  }
];

// const itemTotal = computed(() => {

// })

function addItem() {
  const randomIndex = Math.floor(Math.random() * products.length)
  const product = products[randomIndex]
  product.quantity = 1
  cartItems.value.push(product)
}

function itemTotal(index) {
  const product = cartItems.value[index]
  return (product.quantity * product.price)
}


</script>

<template>
  <section class="cart">
    <div class="cart-header"></div>
    <!-- <table>
      <thead>
        <th>Product Details</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </thead>
      <tbody>
        <tr v-for="(cake, index) in cartItems" :key="index">
          <td>
            <div class="prod-img"><img :src="cake.image" alt="" class="img"></div>
            <p>{{ cake.title }}</p>
          </td>
          <td>
            <div class="prod-qty">
            <button>-</button>
            <div class="qty"></div>
            <button>+</button>
          </div>
          </td>
          <td>{{ cake.price }}</td>
          <td></td>
        </tr>
      </tbody>
    </table> -->


    <div class="cart-body">
      <div class="item-details">
        <div class="detail-head">
          <p class="prod-details">Product Details</p>
          <p class="qty-details">Quantity</p>
          <p class="prc-details">Price</p>
          <p class="ttl-details">Total</p>
        </div>
        <div class="detail-body" v-for="(cake, index) in cartItems" :key="index">
          <div class="prod-info">
            <div class="prod-img"><img :src="cake.image" alt="" class="img"></div>
            <p>{{ cake.title }}</p>
          </div>
          <div class="prod-qty">
            <button>-</button>
            <p class="qty">{{ cake.quantity }}</p>
            <button>+</button>
          </div>
          <p class="prod-prc">{{ cake.price }}</p>
          <p class="prod-total">{{ itemTotal(index) }}</p>
          <div class="rmv-prod">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="rmv">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>
        </div>
      </div>
      <div class="cart-total"></div>
      <button @click="addItem" class="add-item">Add Item</button>
    </div>
  </section>
</template>
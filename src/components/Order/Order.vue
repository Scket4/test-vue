<template>
  <div class="mt-28 w-full p-11">
    <div class="w-8/12">
      <div class="flex justify-between items-end mb-7">
        <div class="flex items-baseline">
          <h1 class="mr-4 text-5xl">Ваша корзина</h1>
          <p class="text-gray-500">{{ fullQuantity }} товара</p>
        </div>
        <button
          class="border-none text-gray-500 underline"
          @click="clearBascket"
        >
          Очистить корзину
        </button>
      </div>
    </div>
    <div class="flex w-full justify-between">
      <div class="w-8/12" v-if="products.length">
        <Product
          v-for="product in products"
          :key="product.article"
          v-bind:product="product"
        ></Product>
        <HelpInstallation />
      </div>
      <p v-else>Товаров нет</p>
      <div class="w-3/12">
        <TotalPrice
          v-bind:quantity="fullQuantity"
          v-on:submitForm="submitForm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product/Product";
import TotalPrice from "./TotalPrice/TotalPrice";
import HelpInstallation from "./HelpInstallation/HelpInstallation";
import axios from "axios";
export default {
  name: "Order",
  components: {
    Product,
    TotalPrice,
    HelpInstallation,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    totalPrice() {
      return this.$store.state.totalPrice;
    },
    fullQuantity() {
      let quantity = 0;
      this.$store.state.products.forEach((product) => {
        quantity += product.quantity;
      });
      return quantity;
    },
  },
  mounted() {
    this.$store.commit("changeTotalPrice");
  },
  methods: {
    submitForm() {
      console.log("Отправили: ", JSON.stringify(this.products));
      axios.post("/someurl", JSON.stringify(this.products)).catch((err) => {
        console.error("Ошибка: неправильный адресс", err.message);
      });
    },
    clearBascket() {
      this.$store.commit("changeSelectedProducts");
      this.$store.commit("changeTotalPrice");
    },
  },
};
</script>

<style>
</style>
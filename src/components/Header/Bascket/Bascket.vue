<template>
  <div class="flex w-40 justify-between items-center">
    <img
      src="./../../../assets/bascket.png"
      alt="bascket"
      class="bg-cover h-7"
    />
    <div class="">
      <p>Ваша корзина</p>
      <p class="text-gray-500">{{ products.length }} товара</p>
      <p>{{ totalPrice }} ₽</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bascket",
  computed: {
    products() {
      return this.$store.state.products;
    },
    totalPrice() {
      return this.$store.state.totalPrice;
    },
  },
};
</script>

<style>
</style>
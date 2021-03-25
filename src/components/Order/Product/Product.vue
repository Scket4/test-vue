<template>
  <div class="w-full flex justify-between items-center p-5 border-b">
    <img src="../../../assets/G2H.png" alt="product-photo" />
    <div class="w-96">
      <p class="mb-2 font-bold cursor-pointer">{{ product.title }}</p>
      <p class="mb-2">{{ product.description }}</p>
      <p class="text-gray-500">Артикл: {{ product.article }}</p>
    </div>
    <div class="flex">
      <button
        class="m-px w-8 h-8 bg-gray-50 flex justify-center items-center"
        @click="subQuantity"
      >
        -
      </button>
      <div class="m-px w-8 h-8 bg-gray-50 flex justify-center items-center">
        {{ product.quantity }}
      </div>
      <button
        class="m-px w-8 h-8 bg-gray-50 flex justify-center items-center"
        @click="addQuantity"
      >
        +
      </button>
    </div>
    <p class="text-3xl font-bold w-36">
      {{ product.price * product.quantity }} ₽
    </p>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  methods: {
    addQuantity() {
      this.$store.commit("addQuantityProduct", this.product.article);
      this.$store.commit("changeTotalPrice");
    },
    subQuantity() {
      this.$store.commit("subQuantityProduct", this.product.article);
      this.$store.commit("changeTotalPrice");
    },
  },
};
</script>

<style>
</style>
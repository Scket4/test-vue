<template>
  <div
    class="pt-9 pb-9 pl-8 pr-8 flex flex-col justify-between items-start w-full bg-gray-50 h-auto"
  >
    <p class="text-2xl font-bold mb-8">Итого</p>
    <div class="mb-8 w-full">
      <div class="mb-7 flex justify-between w-full">
        <p>Сумма заказа</p>
        <p>{{ priceWithoutHelp }} ₽</p>
      </div>
      <div class="mb-7 flex justify-between w-full">
        <p>Количество</p>
        <p>{{ quantity }} шт</p>
      </div>
      <div class="flex justify-between w-full">
        <p>Установка</p>
        <p>{{ needHelp }}</p>
      </div>
    </div>
    <hr class="mb-3 h-px bg-gray-700 w-full" />
    <div class="flex w-full justify-between mb-8">
      <p>Стоимость товаров</p>
      <p>{{ totalPrice }} ₽</p>
    </div>
    <div class="flex flex-col w-full">
      <button
        class="w-full h-12 flex justify-center items-center rounded text-white bg-blue-600 mb-4"
        @click="$emit('submitForm')"
      >
        Оформить заказ
      </button>
      <button
        class="w-full h-12 flex justify-center items-center rounded border-blue-600 border text-blue-600"
      >
        Купить в 1 клик
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalPrice",
  props: {
    quantity: Number,
  },
  data() {
    return {
      priceHelp: 1000,
    };
  },
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice;
    },
    helpInstallation() {
      return this.$store.state.helpInstallation;
    },
    needHelp() {
      return this.helpInstallation ? "Да" : "Нет";
    },
    priceWithoutHelp() {
      return this.helpInstallation
        ? this.totalPrice - this.priceHelp
        : this.totalPrice;
    },
  },
};
</script>

<style>
</style>
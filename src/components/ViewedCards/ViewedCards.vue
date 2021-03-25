<template>
  <div class="mt-14 p-11">
    <div class="flex justify-between items-center w-full">
      <p class="text-4xl font-bold">Просмотренные товары</p>
      <div class="flex items-center">
        <button
          class="rounded-full w-12 h-12 bg-gray-300 mr-5"
          @click="prevPage"
        ></button>
        <div class="text-2xl">
          <strong>{{ page }}</strong>
          <span class="text-lg text-gray-600"> / {{ maxPages }} </span>
        </div>
        <button
          class="rounded-full w-12 h-12 bg-gray-300 ml-5"
          @click="nexPage"
        ></button>
      </div>
    </div>
    <div class="mt-14 w-full flex justify-between">
      <Card v-for="card in paginateCards" :key="card.id" v-bind:card="card" />
    </div>
  </div>
</template>

<script>
import viewedCards from "../../data";
import Card from "../ViewedCards/Card/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      page: 1,
      maxPages: 3,
    };
  },
  computed: {
    cards() {
      return viewedCards();
    },
    startIndex() {
      return (this.page - 1) * 4;
    },
    endIndex() {
      return (this.page - 1) * 4 + 4;
    },
    paginateCards() {
      return this.cards.slice(this.startIndex, this.endIndex);
    },
  },
  methods: {
    nexPage() {
      if (this.page + 1 > this.maxPages) {
        return;
      }
      this.page += 1;
    },
    prevPage() {
      if (this.page - 1 > 0) {
        this.page -= 1;
      }
    },
  },
};
</script>

<style>
</style>
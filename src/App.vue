<template>
  <Header />
  <Order />
  <ViewedCards />
</template>

<script>
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import ViewedCards from "./components/ViewedCards/ViewedCards";

export default {
  name: "App",
  components: {
    Header,
    Order,
    ViewedCards,
  },
};
</script>

<style></style>

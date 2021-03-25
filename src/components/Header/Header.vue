<template>
  <header
    class="flex justify-end items-center h-12 border-b-2 border-blue-600 p-10"
  >
    <bascket></bascket>
  </header>
</template>

<script>
import Bascket from "./Bascket/Bascket.vue";
export default {
  name: "Header",
  components: { Bascket },
};
</script>

<style>
</style>
<template>
  <div
    class="w-80 card bg-gray-100 p-6 flex flex-col justify-between items-center"
  >
    <div class="flex flex-col items-start w-full">
      <img
        src="../../../assets/BXC.png"
        alt="photo"
        class="w-3/4 self-center"
      />
      <p class="text-2xl font-bold mb-2">{{ card.title }}</p>
      <p>{{ card.description }}</p>
    </div>
    <div class="w-full">
      <p class="text-2xl">{{ card.price }}</p>
      <p class="text-sm text-gray-600">{{ card.euroPrice }}</p>
      <button
        class="w-full rounded bg-blue-700 text-white flex justify-center items-center h-12 mt-6"
      >
        Подробнее
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style scope lang="sass">
.card
  height: 500px
</style>
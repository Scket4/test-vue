<template>
  <div
    class="w-full h-28 bg-gray-50 p-7 mt-2 rounded flex justify-start items-center"
  >
    <input
      type="checkbox"
      name="installation"
      id="installation"
      class="h-5 w-5 border border-gray-800 bg-white rounded mr-6"
      v-model="installation"
      @change="changeInstallation"
    />
    <img src="../../../assets/help.png" alt="help" class="bg-white mr-6" />
    <div class="flex flex-col items-start">
      <p class="text-2xl font-bold">Установка</p>
      <p>
        Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      installation: false,
    };
  },
  methods: {
    changeInstallation() {
      this.$store.commit("changeInstallation", this.installation);
    },
  },
};
</script>

<style>
</style>
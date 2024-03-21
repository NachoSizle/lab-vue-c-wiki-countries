<script setup>
import CountryRow from '@/components/CountryRow.vue'
import { onMounted } from 'vue';
import { useCountriesStore } from '@/stores/countriesStore.js';
import { storeToRefs } from 'pinia';

const countriesStore = useCountriesStore();
const { countries } = storeToRefs(countriesStore);

onMounted(async () => {
  await countriesStore.fetchCountries();
});
</script>

<template>
  <section>
    <CountryRow v-for="country in countries" :key="country._id" v-bind="country" />
  </section>
</template>

<style scoped>
section {
  width: 100%;
  max-width: 370px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;

  border: 1px solid #e8e5e5;

  overflow-y: scroll;
}
</style>
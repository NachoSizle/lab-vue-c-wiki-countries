<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCountriesStore } from '@/stores/countriesStore.js';
import { storeToRefs } from 'pinia';

const countriesStore = useCountriesStore();
const { countrySelected } = storeToRefs(countriesStore);

const route = useRoute();

watch(() => route.params.alpha3Code, async (newAlpha3Code) => {
  countriesStore.setCountrySelected(newAlpha3Code);
});

onMounted(async () => {
  countriesStore.setCountrySelected(route.params.alpha3Code);
});
</script>

<template>
  <article v-if="countrySelected">
    <img :src="countrySelected.flag" alt="flag of country" />
    <h1>{{ countrySelected.name }}</h1>

    <section>
      <div class="capital-info">
        <h2>Capital</h2>
        <p>{{ countrySelected.capital }}</p>
      </div>

      <div class="area-info">
        <h2>Area</h2>
        <p>{{ countrySelected.area }} km2</p>
      </div>
      
      <div class="borders-info" v-if="countrySelected.borders.length">
        <h2>Borders</h2>
        <ul>
          <li v-for="border in countrySelected.borders" :key="border.alpha3Code">
            <RouterLink :to="`/${border.alpha3Code}`">{{ border.name }}</RouterLink>
          </li>
        </ul>
      </div>
      
    </section>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

article > * {
  width: 100%;
}

article img {
  width: 100%;
  max-width: 300px;
  height: auto;
}

article h1 {
  text-align: center;
}

article section div {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #e8e5e5;
}

article section div.borders-info ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { fetchAllCountries } from "@/api/countryApi";

export const useCountriesStore = defineStore('countries', () => {
  // State
  const countries = ref([])
  const countryCodeSelected = ref('')

  // Getter
  const countrySelected = computed(() => {
    return countries.value.find(country => country.alpha3Code === countryCodeSelected.value);
  })

  // Actions
  async function fetchCountries() {
    countries.value = await fetchAllCountries();
  }

  function setCountrySelected(alpha3Code) {
    countryCodeSelected.value = alpha3Code;
  }

  return {
    // State
    countries,
    countryCodeSelected,
    // Getter
    countrySelected,
    // Actions
    fetchCountries,
    setCountrySelected,
  }
});
<script setup>
import CountryList from '@/components/CountryList.vue'
</script>

<template>
  <main>
    <CountryList />
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 20px 100px;

  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
}

main > * {
  width: 50%;
}

@media screen and (max-width: 768px) {
  main {
    flex-direction: column-reverse;
    gap: 20px;
    margin: 12px;
  }

  main > * {
    width: 100%;
  }
}
</style>
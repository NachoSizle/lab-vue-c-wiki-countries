<script setup>
defineProps({
  _id: String,
  name: String,
  alpha2Code: String,
  alpha3Code: String,
  flag: String,
})
</script>

<template>
  <RouterLink :to="`/${alpha3Code}`">
    <img :src="flag" alt="flag of country" />
    <h4>{{ name }}</h4>
  </RouterLink>
</template>

<style scoped>
a {
  width: 100%;
  height: 100%;
  min-height: 120px;

  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: border-box;
  padding: 20px 0;
  overflow: hidden;

  border-bottom: 1px solid #e8e5e5;

  text-decoration: none;
  color: black;
}

h4 {
  padding: 0;
  margin: 0;
}
</style>
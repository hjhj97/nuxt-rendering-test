<template>
  <div>
    <h1>SSR</h1>
    <p>Rendered Time {{ data }}</p>
    <p>Hydration Time : {{ new Date().toLocaleString() }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/hello")
</script>

<style scoped>

</style>
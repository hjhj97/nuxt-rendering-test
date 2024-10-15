<template>
  <div>
    <h1>SWR - 5 sec</h1>
    <p>Rendered Time {{ data }}</p>
    <p>Hydration Time : {{ new Date().toUTCString() }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/hello")
</script>

<style scoped></style>
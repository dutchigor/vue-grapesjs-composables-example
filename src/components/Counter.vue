<script setup>
const { trait } = defineProps(['trait'])
</script>

<template>
  <span>
    <button @click="trait.value = trait.value - trait.step">-</button>
    {{ trait.value }}
    <button @click="trait.value = trait.value + trait.step">+</button>
  </span>
</template>
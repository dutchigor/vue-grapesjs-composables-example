<script setup>
import Counter from './Counter.vue'

const { traits } = defineProps(['traits'])
const components = { Counter }
</script>

<template>
  <div v-for="trait in traits">
    {{ trait.label }}:
    <component :is="components[trait.type]" :trait="trait" />
  </div>
</template>
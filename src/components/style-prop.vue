<script setup>
const props = defineProps(['style'])
</script>

<template>
  <div>
    <label for="pixels">{{ style.attributes.name }}</label>
    <input
      name="pixels"
      type="text"
      placeholder="auto"
      :value="style.attributes.value"
      @change="style.setValue($event.target.value)"
    />
  </div>
</template>
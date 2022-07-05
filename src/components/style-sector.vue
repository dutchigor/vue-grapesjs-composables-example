<script setup>
const { sector } = defineProps(['sector'])
</script>

<template>
  <h4>{{ sector.name }}</h4>
  <div v-for="prop in sector.properties">
    <label for="pixels">{{ prop.name }}</label>
    <div>
      <input name="pixels" placeholder="auto" v-model.lazy="prop.value" />
      <select v-model="prop.unit">
        <option value>None</option>
        <option v-for="unit in prop.units">{{ unit }}</option>
      </select>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['state'])

const updateSelected = (event) => { props.state.select(event.target.value) }
</script>

<template>
  <label for="state">State:</label>
  <select @change="updateSelected" :value="props.state.selected">
    <option value>- State -</option>
    <option v-for="option in props.state.all" :key="option.name">{{ option.name || 'No label' }}</option>
  </select>
</template>
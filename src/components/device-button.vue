<script setup>
const props = defineProps(['device', 'selected', 'select'])
// const { device, select } = props
</script>

<template>
  <button
    :class="{ device: true, selected: device.id === selected.id }"
    @click="select(device.id)"
  >{{ device.name }}</button>
</template>
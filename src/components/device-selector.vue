<script setup>
const { manager } = defineProps(['manager'])
</script>

<template>
  <div class="devices">
    <button
      v-for="device in manager.devices"
      :class="{ device: true, selected: device.id === manager.selected.id }"
      @click="manager.select(device.id)"
    >{{ device.name }}</button>
  </div>
</template>

<style>
.selected {
  background-color: white;
}
</style>
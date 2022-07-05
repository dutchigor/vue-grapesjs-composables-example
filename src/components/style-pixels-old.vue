<script setup>
const props = defineProps(['pixels', 'label'])

function setValue(e) {
  props.pixels.setValue(e.target.value)
}
</script>

<template>
  <div>
    <label for="pixels">{{ label }}</label>
    <input
      name="pixels"
      type="number"
      placeholder="auto"
      :value="props.pixels.attributes.value"
      @change="setValue"
    />
  </div>
</template>
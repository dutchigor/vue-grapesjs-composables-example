<script setup>
const props = defineProps(['styleName', 'rule', 'label'])
</script>

<template>
  <div>
    <label for="pixels">{{ label }}</label>
    <input
      name="pixels"
      type="text"
      placeholder="auto"
      :value="rule.style ? rule.style[styleName] : null"
      @change="rule.style[styleName] = $event.target.value"
    />
  </div>
</template>
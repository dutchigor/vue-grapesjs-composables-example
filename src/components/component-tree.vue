<script setup>
const props = defineProps(['models', 'select'])
</script>

<template>
  <ul class="tree">
    <li class="node" v-for="comp in models" @click.stop="select(comp._model)">
      <strong>{{ comp.tagName }}</strong>
      <span>&nbsp;- {{ comp.cid }} - {{ comp.name }}</span>
      <component-tree v-if="comp.components.length" :models="comp.components" :select="select" />
    </li>
  </ul>
</template>

<style scoped>
.node {
  cursor: pointer;
}
</style>
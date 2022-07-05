<script setup>
import { useBlocks } from 'vue-grapesjs-composables'
const { grapes } = defineProps(['grapes'])
const blocksMgr = useBlocks(grapes)
</script>

<template>
  <div class="block-list">
    <div
      v-for="block in blocksMgr.blocks"
      class="block"
      :key="block.getId()"
      @dragstart="blocksMgr.dragStart(block._model)"
      @dragend="blocksMgr.dragStop()"
      v-html="block.getLabel()"
      draggable="true"
    ></div>
  </div>
</template>

<style scoped>
.block-list {
  display: flex;
}
.block {
  user-select: none;
  min-width: 45px;
  padding: 1em;
  box-sizing: border-box;
  min-height: 90px;
  cursor: all-scroll;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin: 10px 2.5% 5px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 15%);
  transition: all 0.2s ease 0s;
  transition-property: color;
}
</style>
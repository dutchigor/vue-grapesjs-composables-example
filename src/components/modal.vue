<script setup>
const { modal } = defineProps(['modal'])
</script>

<template>
  <div class="overlay">
    <div class="modal">
      <h1 v-html="modal.title"></h1>
      <p v-html="modal.content"></p>
      <button @click="modal.close()">Close</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal {
  height: 200px;
  width: 500px;
  padding: 20px;
  background-color: whitesmoke;
  border: darkgray solid 1;
}
</style>
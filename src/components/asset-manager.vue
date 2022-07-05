<script setup>
const props = defineProps(['assetMgr'])
function select(asset) {
  props.assetMgr.modal.select(asset)
  props.assetMgr.modal.close()
}
</script>

<template>
  <div class="overlay">
    <div class="modal">
      <div class="images">
        <img
          class="image"
          v-for="asset in assetMgr.assets"
          :src="asset.src"
          :alt="asset.name"
          width="100"
          @click="select(asset)"
        />
      </div>
      <button @click="assetMgr.modal.close()">Close</button>
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

.image {
  margin: 0 1em;
}
</style>
<template>
  <div class="container">
    <div class="row-top dark">
      <div class="col-top">Title...</div>
      <DeviceSelector v-if="Object.keys(dm.devices).length" :manager="dm" />
      <div>selected: {{ dm.selected.name }}</div>
    </div>
    <div class="row-main">
      <div class="col-left dark">
        <div class="manager">
          <h3>Classes</h3>
          <CssState :state="state" />
          <CssClasses :component="selected.component" />
          <div>Editing rule: {{ styles.selected.selector }}</div>
        </div>
        <div class="manager">
          <h3>Styles</h3>
          <StylePixels label="Min height:" :rule="styles.selected.rule" styleName="min-height" />
          <StylePixels label="Width:" :rule="styles.selected.rule" styleName="width" />
          <StyleSector v-for="sector in styleProps.sectors" :sector="sector" />
        </div>
      </div>
      <div class="col-mid" ref="canvas"></div>
      <div class="col-right dark">
        <Traits :traits="selected.component.traits"></Traits>
        <ComponentTree
          v-if="layers.wrapper.components"
          :models="layers.wrapper.components"
          :select="layers.select"
        />
      </div>
    </div>
    <div class="row-bottom dark">
      <BlockList :grapes="grapes" />
    </div>
  </div>
  <AssetManager v-if="am.modal.isOpen" :assetMgr="am" />
  <Modal v-if="modal.open" :modal="modal" />
</template>

<script setup>
import "vue-grapesjs-composables/css/vue-grapes.css"

import { ref, inject } from 'vue'

import {
  useGrapes,
  useStorage,
  useStyles,
  useStyleProps,
  useState,
  useLayers,
  useSelectedComponent,
  useAssetManager,
  useModal,
  useDevices,
} from 'vue-grapesjs-composables'

import CssState from './components/css-state.vue'
import StylePixels from './components/style-pixels.vue'
import CssClasses from './components/css-classes.vue'
import ComponentTree from './components/component-tree.vue'
import BlockList from './components/block-list.vue'
import AssetManager from './components/asset-manager.vue'
import DeviceSelector from './components/device-selector.vue'
import StyleSector from './components/style-sector.vue'
import Modal from './components/modal.vue'
import Traits from './components/Traits.vue'

import config from './grapes.config'

const canvas = ref(null)

config.container = canvas

const grapes = useGrapes(config)

grapes.onInit(editor => window.editor = editor)

inject('grapes-js', grapes)

const store = useStorage(grapes)

const styles = useStyles(grapes)

const styleProps = useStyleProps(grapes)

const state = useState(grapes)

const layers = useLayers(grapes)

const selected = useSelectedComponent(grapes)

const modal = useModal(grapes)

const dm = useDevices(grapes)

const am = useAssetManager(grapes)

</script>

<style>
body {
  margin: 0;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.row-top {
  padding: 8px;
  color: white;
  flex-grow: 0;
  display: flex;
  justify-content: space-between;
}
.dark {
  background-color: slategrey;
}

.row-main {
  display: flex;
  flex-grow: 1;
}

.col-left,
.col-right {
  flex: 1 0 0;
}

.col-mid {
  flex: 3 0 0;
}

.row-bottom {
  flex-grow: 0;
}

.manager {
  border: 1px solid whitesmoke;
}
</style>

<template>
  <div id="canvas"></div>
</template>

<script setup>
import gjs from 'grapesjs'
import "vue-grapesjs-composables/css/vue-grapes.css"
import config from './grapes.config.js'

import { onMounted } from 'vue';

config.container = '#canvas'

onMounted(() => gjs.init(config))
</script>
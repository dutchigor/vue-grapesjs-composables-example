<script setup>
const props = defineProps(['component'])

function addClass(e) {
  props.component.addClass(e.target.newClass.value)
  e.target.newClass.value = ''
}

</script>

<template>
  <form @submit.prevent="addClass">
    <label for="newClass">Add class:</label>
    <input type="text" name="newClass" />
    <button>+</button>
  </form>
  <div>
    <div class="css-class" v-for="cls in component.classes">
      <input type="checkbox" v-model="cls.active" />
      {{ cls.getLabel() }}
      <span
        class="remove-class"
        @click="component.removeClass(cls.name)"
      >-</span>
    </div>
  </div>
</template>

<style scoped>
.css-class {
  display: inline-block;
  border: 1px solid whitesmoke;
  margin-right: 0.5em;
}

.remove-class {
  display: inline-block;
  text-align: center;
  width: 1em;
  background-color: whitesmoke;
  cursor: pointer;
}
</style>
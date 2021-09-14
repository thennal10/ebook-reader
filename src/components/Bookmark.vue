<template>
  <div @click="$emit('delete')">
  </div>
</template>

<script>
export default {
  name: 'Bookmark',

  methods: {

  }
}
</script>

<style scoped>
div {
  height: 30px;
  width: 30px;
  background-color: red;
  position: absolute;
  z-index: 1;
}
</style>
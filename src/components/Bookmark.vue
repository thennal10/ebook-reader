<template>
  <transition name="slide">
    <div @click="$emit('delete')">
    </div>
  </transition>
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
  border: 10px solid rgb(95, 170, 170);
  border-left: 0;
  border-right: 10px solid transparent;
  width: 25px;
  
  position: absolute;
  z-index: 1;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-30px);
}
</style>
<template direction="ltr">
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-file-input
        hide-input
        clearable
        prepend-icon="mdi-file-plus"
        accept=".epub"
        v-on:change="fileUpload">
      </v-file-input>
    </v-app-bar>

    <v-main>
      <Viewer v-if="file" :file="file"/>
    </v-main>
  </v-app>
</template>

<script>
import Viewer from './components/Viewer.vue'

export default {
  name: 'App',

  components: {
    Viewer
  },

  data: () => ({
    file: NaN
  }),

  methods: {
    fileUpload(file) {
      this.file = file
    }
  }
};
</script>

<style>
  #app {
    direction: ltr;
  }
</style>

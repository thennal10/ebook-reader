<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <Viewer/>
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
    //
  }),
};
</script>

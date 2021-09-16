<template>
  <v-app-bar
    app
    color="gray"
    flat
    hide-on-scroll
  >
    <v-file-input
      hide-input
      clearable
      prepend-icon="mdi-file-plus"
      accept=".epub"
      @change="$emit('upload', $event)">
    </v-file-input>
    <v-btn icon @click="$emit('back')">
      <v-icon>
        mdi-book-multiple
      </v-icon>
    </v-btn>
    <v-btn icon @click="$emit('bookmark')">
      <v-icon>
        mdi-bookmark-plus
      </v-icon>
    </v-btn>
    <v-btn icon @click="$emit('settings')">
      <v-icon>
        mdi-cog
      </v-icon>
    </v-btn>

  </v-app-bar>

</template>

<script>
export default {

}
</script>

<style>

</style>
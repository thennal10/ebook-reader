<template>
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
        @change="fileUpload">
      </v-file-input>
    </v-app-bar>

    <v-main>
      <Viewer v-if="currentBook" :book="currentBook"/>
      <Library v-else :books="books" @open-viewer="openViewer($event)"/>
    </v-main>
  </v-app>
</template>

<script>
import Viewer from './components/Viewer.vue'
import Library from './components/Library.vue'

export default {
  name: 'App',

  components: {
    Viewer,
    Library
  },

  data: () => ({
    books: [],
    currentBook: null
  }),

  methods: {
    fileUpload(file) {
      var reader = new FileReader()
      reader.onload = this.loadBook
      reader.readAsArrayBuffer(file)
    },

    loadBook(e) {
      var bookData = e.target.result;
      this.books.push(bookData)
    },

    openViewer(book) {
      this.currentBook = book
    }
  }
};
</script>

<style>
  #app {
    direction: ltr;
  }
</style>

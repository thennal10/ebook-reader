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
      <Library v-else 
        :books="books" 
        @open-viewer="openViewer($event)"
        @delete-book="deleteBook($event)"
        />
    </v-main>
  </v-app>
</template>

<script>
import Dexie from 'dexie'
import Viewer from './components/Viewer.vue'
import Library from './components/Library.vue'

var db = new Dexie("Books");
db.version(1).stores({
    books: "++id, file"
});


export default {
  name: 'App',

  components: {
    Viewer,
    Library
  },

  created: async function() {
    var table = await db.books.toArray()
    this.books = table.map(row => row.file)
  },

  data: () => ({
    books: [],
    currentBook: null
  }),

  methods: {
    fileUpload(file) {
      console.log(this.books)
      var reader = new FileReader()
      reader.onload = this.loadBook
      reader.readAsArrayBuffer(file)
    },

    loadBook(e) {
      var bookData = e.target.result;
      this.books.push(bookData)
      db.books.put({file: bookData})
    },

    openViewer(book) {
      this.currentBook = book
    },

    async deleteBook(index) {
      this.books.splice(index, 1)
      await db.books.delete(index + 1)
    }
  }
};
</script>

<style>
  #app {
    direction: ltr;
  }
</style>

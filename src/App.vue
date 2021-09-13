<template>
  <v-app>
    <AppBar 
      @upload="fileUpload"
      @back="currentBook = null"
    />
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
import AppBar from './components/AppBar.vue'
import Viewer from './components/Viewer.vue'
import Library from './components/Library.vue'

var db = new Dexie("Books");
db.version(1).stores({
    books: "++id, file"
});


export default {
  name: 'App',

  components: {
    AppBar,
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

    async deleteBook(book) {
      const keyArr = await db.books
        .where("file")
        .equals(book)
        .primaryKeys()
      this.books = this.books.filter(item => item != book)
      await db.books.delete(keyArr[0])
    }
  }
};
</script>

<style>
  #app {
    direction: ltr;
  }
</style>

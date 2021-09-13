<template>
  <v-app>
    <AppBar 
      @upload="fileUpload"
      @back="currentBook = null"
      @bookmark="setBookmark"
    />
    <v-main>
      <Viewer 
        v-if="currentBook" 
        :book="currentBook.file"
        :bookmarks="currentBook.bookmarks" 
        ref="viewer"
        />
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
    books: "++id, file, bookmarks"
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
    currentBook: null // {file: ArrayBuffer, bookmarks: Object}
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
      db.books.put({file: bookData, bookmarks: []})
    },

    // Set current book, get bookmarks from db and set that too
    async openViewer(book) {
      const file = book
      const key = await this.getBookKey(book)
      const dbBook = await db.books.get(key)
      this.currentBook = { file: file, bookmarks: dbBook.bookmarks}
    },

    async deleteBook(book) {
      this.books = this.books.filter(item => item != book)
      const key = await this.getBookKey(book)
      db.books.delete(key)
    },

    async setBookmark() {
      const newBookmark = this.$refs.viewer.newBookmark()
      this.currentBook.bookmarks.push(newBookmark)

      const key = await this.getBookKey(this.currentBook.file)
      db.books.update(key, {bookmarks: this.currentBook.bookmarks})
    },

    async getBookKey(book) {
      const keyArr = await db.books
        .where("file")
        .equals(book)
        .primaryKeys()
      return keyArr[0]
    }  
  }
};
</script>

<style>
  #app {
    direction: ltr;
  }
</style>

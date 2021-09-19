<template>
  <v-app>
    <AppBar
      :onViewer="Boolean(currentBook)"
      @upload="fileUpload"
      @back="currentBook = null"
      @bookmark="setBookmark"
      @settings="settingsDialog = true"
      @bookmarklist="bookmarkDialog = true"
      />
    <v-main>
      <Settings
        v-model="settingsDialog"
        :settings="settings"
        @change-theme="settings.theme = $event"
        @change-fontsize="settings.fontSize = $event"
        />
      <BookmarkList
        v-if="currentBook"
        v-model="bookmarkDialog"
        :bookmarks="currentBook.bookmarks"
        />
      <Viewer 
        v-if="currentBook" 
        :book="currentBook.file"
        :bookmarks="currentBook.bookmarks"
        :settings="settings"
        @delete-bookmark="deleteBookmark($event)"
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
import Settings from './components/Settings.vue'
import BookmarkList from './components/BookmarkList.vue'

var db = new Dexie("Books")
db.version(1).stores({
  books: "++id, file, bookmarks"
})

export default {
  name: 'App',

  components: {
    AppBar,
    Viewer,
    Library,
    Settings,
    BookmarkList
  },

  created: async function() {
    var table = await db.books.toArray()
    this.books = table.map(row => row.file)

    let settings = JSON.parse(window.localStorage.getItem('settings'))
    if (settings) {
      this.settings = settings
    }
    let currentBookIndex = window.sessionStorage.getItem('currentBookIndex')
    if (currentBookIndex != 'null') { // Because sessionStorage is dumb
      this.openViewer(this.books[currentBookIndex])
    }
  },

  data: () => ({
    books: [],
    currentBook: null, // {file: ArrayBuffer, bookmarks: Array[Object]}
    settingsDialog: false,
    bookmarkDialog: false,
    settings: { theme: 'light', fontSize: 100 }
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

    async deleteBookmark(bookmark) {
      this.currentBook.bookmarks = this.currentBook.bookmarks.filter(b => b != bookmark)
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
  },

  watch: {
    /* This fires every time a bookmark is added too which 
    is kind of unecessary but I can live with it.
    Saving the index because session storage and ArrayBuffers do not mix well*/
    currentBook: function(val) {
      var index = null;
      if (val) {
        index = this.books.indexOf(val.file)
      }
      window.sessionStorage.setItem('currentBookIndex', index)
    },

    'settings.theme': function() {
      this.$vuetify.theme.dark = this.settings.theme == 'dark'
    },

    settings: {
      handler: function (val) { 
        window.localStorage.setItem('settings', JSON.stringify(val)) 
      },
      deep: true
    }
  }
};
</script>

<style>
  #app {
    direction: ltr;
  }
</style>

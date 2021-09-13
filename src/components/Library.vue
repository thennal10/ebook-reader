<template>
  <v-container>
    <v-row>
      <v-col 
        v-for="(book, i) in books" 
        :key="i"
        cols="4"
        >
        <LibraryEntry 
          :book="book" 
          @open-viewer="$emit('open-viewer', book)"
          @delete="$emit('delete-book', i)"
          />
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ePub from 'epubjs';
import LibraryEntry from './LibraryEntry.vue'

export default {
  name: 'Library',

  props: {
    books: Array
  },

  components: {
    LibraryEntry
  },

  created: function() {
    this.populateMetadata(this.books)
  },

  methods: {
    populateMetadata(books) {
      for (var book of books) {
        var epub = ePub();
        epub.open(book, "binary")
        epub.ready.then(() => {
          epub.coverUrl().then((url) => {
            epub.loaded.metadata.then((metadata) => {
              book.title = metadata.title
              book.url = url
            })
          })
        })
      }
    }
  },

  watch: {
    // Computed properties can't have async functions inside them, so
    // I have to do this shit instead.
    books: function (books) {
      this.populateMetadata(books)
    }
  }
}
</script>

<style>

</style>
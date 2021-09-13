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
          :metadata="bookMetadata[i]"
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

  data: () => ({
    bookMetadata: []  
  }),

  components: {
    LibraryEntry
  },

  created: async function() {
    await this.populateMetadata(this.books)
  },

  methods: {
    async populateMetadata(books) {
      this.bookMetadata = []
      for (var book of books) {
        var epub = ePub()
        await epub.open(book, "binary")

        var cover = await epub.coverUrl()
        var metadata = await epub.loaded.metadata
        var title = metadata.title
        
        this.bookMetadata.push({cover: cover, title:title})
      }
    },
    cock() {
      console.log(this.bookMetadata)
    }
  },

  watch: {
    // Computed properties can't have async functions inside them, so
    // I have to do this shit instead.
    books: async function (books) {
      await this.populateMetadata(books)
    }
  }
}
</script>

<style>

</style>
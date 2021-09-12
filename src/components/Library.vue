<template>
  <v-container>
    <v-row>
      <v-col 
        v-for="(book, i) in books" 
        :key="i"
        cols="4"
        >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            @click="$emit('open-viewer', book)"
          >
            <v-img :src="book.url" aspect-ratio="0.625">
              <v-container fill-height fluid>
                <v-row align="center" justify="center">
                  <p v-if="!book.url" class="text-h4 pa-4">
                    {{book.title}}
                  </p>
                </v-row>
              </v-container>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ePub from 'epubjs';

export default {
  name: 'Library',

  props: {
    books: Array
  },

  data: () => ({
    //
  }),

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
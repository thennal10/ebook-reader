<template>
  <div>
    <Navigator :noNext="noNext" :noPrev="noPrev" @next="rendition.next()" @prev="rendition.prev()"/>
    <div id="viewer"></div>
    <Navigator :noNext="noNext" :noPrev="noPrev" @next="rendition.next()" @prev="rendition.prev()"/>
  </div>
</template>

<script>
import ePub from 'epubjs';
import Navigator from './Navigator.vue'

export default {
  name: 'Viewer',

  components: {
    Navigator
  },

  props: {
    book: ArrayBuffer,
    bookmarks: Array
  },

  data: () => ({
    rendition: NaN,
    noNext: false,
    noPrev: false
  }),

  mounted: function () {
    var epub = ePub();
    epub.open(this.book, "binary")

    this.rendition = epub.renderTo("viewer", {
      flow: "scrolled-doc",
      width: "100%",
      fullsize: true
    })

    let bookmark = this.bookmarks[this.bookmarks.length - 1]
    this.rendition.display(bookmark.start.cfi)
    
    // Disable buttons when there's no next/prev section
    this.rendition.on("rendered", this.buttonCheck)
  },

  methods: {
    // Checks if the forward/backward buttons should be disabled
    buttonCheck (section) {
      this.noNext = !(section.next())
      this.noPrev = !(section.prev())
    },

    newBookmark() {
      return this.rendition.currentLocation()
    }
  }
}
</script>

<style>

</style>
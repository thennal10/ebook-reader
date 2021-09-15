<template>
  <div>
    <Navigator :noNext="noNext" :noPrev="noPrev" @next="rendition.next()" @prev="rendition.prev()"/>
    <Bookmark 
      v-for="bookmarkObj in currentBookmarks" 
      :key="bookmarkObj.style.top" 
      :style="bookmarkObj.style" 
      @delete="deleteBookmark(bookmarkObj)"
      />
    <div id="viewer"></div>
    <Navigator :noNext="noNext" :noPrev="noPrev" @next="rendition.next()" @prev="rendition.prev()"/>
  </div>
</template>

<script>
import ePub from 'epubjs'
import Navigator from './Navigator.vue'
import Bookmark from './Bookmark.vue'

export default {
  name: 'Viewer',

  components: {
    Navigator,
    Bookmark
  },

  props: {
    book: ArrayBuffer,
    bookmarks: Array
  },

  data: () => ({
    rendition: null,
    iframeDoc: null,
    currentSectionIndex: 0,
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

    this.rendition.display(this.bookmarks[this.bookmarks.length - 1])
    this.rendition.on("rendered", this.onSectionChange)
  },

  methods: {
    onSectionChange (section) {
      // Check if forward/backward buttons should be disabled
      this.noNext = !(section.next())
      this.noPrev = !(section.prev())

      // Save iframe and section index
      this.iframeDoc = document.getElementsByTagName('iframe')[0].contentWindow.document
      this.currentSectionIndex = section.index
    },

    newBookmark() {
      let currentLoc = this.rendition.currentLocation()
      return currentLoc.start.cfi
    },

    deleteBookmark(bookmarkObj) {
      this.$emit('delete-bookmark', bookmarkObj.bookmark)
    }
  },

  computed: {
    currentBookmarks() {
      let currentBookmarks = []
      if (this.currentSectionIndex) { // Changes only after render is over
        for (const bookmark of this.bookmarks) {
          const cfi = new ePub.CFI(bookmark)
          if (cfi.spinePos == this.currentSectionIndex) {
            let range = cfi.toRange(this.iframeDoc)
            let rect = range.getBoundingClientRect()
            currentBookmarks.push({
              bookmark: bookmark, 
              style: {top: `${rect.top}px`}
            })
          }
        }
      }

      return currentBookmarks
    }
  }
}
</script>

<style>

</style>
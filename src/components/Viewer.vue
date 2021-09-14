<template>
  <div>
    <Navigator :noNext="noNext" :noPrev="noPrev" @next="rendition.next()" @prev="rendition.prev()"/>
    <Bookmark 
      v-for="bookmark in currentBookmarks" 
      :key="bookmark.style.top" 
      :style="bookmark.style" 
      @delete="deleteBookmark(bookmark)"
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
    currentBookmarks: [], // {bookmark, style}
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

      // Save iframe
      this.iframeDoc = document.getElementsByTagName('iframe')[0].contentWindow.document
      
      // Load bookmarks
      this.currentBookmarks = []
      for (const bookmark of this.bookmarks) {
        const cfi = new ePub.CFI(bookmark)
        if (cfi.spinePos == section.index) {
          this.loadBookmark(bookmark, cfi)
        }
      }
    },

    newBookmark() {
      let currentLoc = this.rendition.currentLocation().start.cfi
      this.loadBookmark(currentLoc, new ePub.CFI(currentLoc))
      return currentLoc
    },

    // Load bookmark into current bookmarks
    loadBookmark(bookmark, cfi) {
      let range = cfi.toRange(this.iframeDoc)
      let rect = range.getBoundingClientRect()
      this.currentBookmarks.push({
        bookmark: bookmark, 
        style: {top: `${rect.top}px`}
      })
    },

    deleteBookmark(bookmark) {
      this.currentBookmarks = this.currentBookmarks.filter(b => b != bookmark)
      this.$emit('delete-bookmark', bookmark.bookmark)
    }
    
  }
}
</script>

<style>

</style>
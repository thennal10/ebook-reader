<template>
  <div>
    <Navigator :noNext="noNext" :noPrev="noPrev" @next="rendition.next()" @prev="rendition.prev()"/>
    <Bookmark 
      v-for="(style, i) in bookmarkStyles" 
      :key="style.top" 
      :style="style" 
      @delete="deleteBookmark(i)"
      />
    <div id="viewer"></div>
    <Navigator :noNext="noNext" :noPrev="noPrev" @next="rendition.next()" @prev="rendition.prev()"/>
    <v-footer
      fixed
      padless
      class="px-2 caption text--disabled font-weight-bold"
    >
      <span @click="startTime = + new Date()">
        {{ timeSpent() }}m
      </span>
      <v-spacer/>
      <span v-if="rendition">
        {{ Math.round(rendition.location.start.percentage*10000)/100 }}%
      </span>
    </v-footer>
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
    bookmarks: Array,
    settings: Object
  },

  data: () => ({
    rendition: null,
    iframeDoc: null,
    currentSectionIndex: 0,
    startTime: 0,
    noNext: false,
    noPrev: false
  }),

  mounted: function () {
    var epub = ePub()
    epub.open(this.book, "binary")

    // Required for locations to function
    epub.ready.then(() => {
      epub.locations.generate(1)
    })

    this.rendition = epub.renderTo("viewer", {
      flow: "scrolled-doc",
      width: "100%",
      fullsize: true
    })

    this.rendition.themes.register('light', {p: {color: 'black'}, html: {background: 'white'}})
    this.rendition.themes.register('dark', {p: {color: 'white'}, html: {background: 'black'}})
    
    this.rendition.themes.select(this.settings.theme)
    this.rendition.themes.fontSize(`${this.settings.fontSize}%`)
    
    let bookLoc = window.localStorage.getItem('currentBookLocation')
    let latestBookmark = this.bookmarks.length ? this.bookmarks[this.bookmarks.length - 1].cfi: 0

    this.rendition.display(bookLoc != null ? bookLoc: latestBookmark)
    this.rendition.on("rendered", this.onSectionChange)

    let start = window.localStorage.getItem('currentStartTime')
    this.startTime = start ? start: + new Date()
  },

  methods: {
    timeSpent() {
      return Math.round((new Date() - this.startTime)/60000)
    },

    onSectionChange (section) {
      // Check if forward/backward buttons should be disabled
      this.noNext = !(section.next())
      this.noPrev = !(section.prev())

      // Save iframe and section index
      this.iframeDoc = document.getElementsByTagName('iframe')[0].contentWindow.document
      this.currentSectionIndex = section.index
    },

    newBookmark() {
      let currentLoc = this.rendition.currentLocation().start
      let time = this.timeSpent()
      this.startTime = + new Date()

      return {
        cfi: currentLoc.cfi, 
        location: currentLoc.location,
        percentage: currentLoc.percentage,
        time: time,
        timestamp: + new Date()
      }
    },

    deleteBookmark(index) {
      this.$emit('delete-bookmark', this.currentBookmarks[index])
    }
  },

  computed: {
    currentBookmarks() {
      return this.bookmarks.filter((bookmark) => {
        if (this.currentSectionIndex) { // Changes only after render is over
          const cfi = new ePub.CFI(bookmark.cfi)
          return cfi.spinePos == this.currentSectionIndex
        }
      })
    },

    bookmarkStyles() {
      return this.currentBookmarks.map((bookmark) => {
        const cfi = new ePub.CFI(bookmark.cfi)
        let range = cfi.toRange(this.iframeDoc)
        let rect = range.getBoundingClientRect()
        return {top: `${rect.top}px`}
      })
    }
  },

  watch: {
    'settings.theme': function() {
      this.rendition.themes.select(this.settings.theme)
    },

    'settings.fontSize': function() {
      this.rendition.themes.fontSize(`${this.settings.fontSize}%`)
    },

    'rendition.location.start.cfi': function(val) {
      window.localStorage.setItem('currentBookLocation', val)
      window.localStorage.setItem('currentStartTime', this.startTime)
    }
  }
}
</script>

<style>

</style>
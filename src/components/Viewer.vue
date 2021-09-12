<template>
  <div>
    <Navigator :noNext="noNext" :noPrev="noPrev"/>
    <div id="viewer"></div>
    <Navigator :noNext="noNext" :noPrev="noPrev"/>
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
    book: ArrayBuffer
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

    this.rendition.display()
    
    // Disable buttons when there's no next/prev section
    this.rendition.on("rendered", this.buttonCheck)
  },

  methods: {
    // Checks if the forward/backward buttons should be disabled
    buttonCheck (section) {
      this.noNext = !(section.next())
      this.noPrev = !(section.prev())
    },

    clickNext(e) {
      this.rendition.next()
      e.preventDefault()
    },
    clickPrev(e) {
      this.rendition.prev()
      e.preventDefault()
    }
  }
}
</script>

<style>

</style>
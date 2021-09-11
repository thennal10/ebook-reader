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
    file: File
  },

  data: () => ({
    rendition: NaN,
    noNext: false,
    noPrev: false
  }),

  mounted: function () {
    var reader = new FileReader()
    reader.onload = this.openBook
    reader.readAsArrayBuffer(this.file)
  },

  methods: {
    openBook(e){
      var book = ePub();
      var bookData = e.target.result;
      book.open(bookData, "binary")

      this.rendition = book.renderTo("viewer", {
        flow: "scrolled-doc",
        width: "100%",
        fullsize: true
      })

      this.rendition.display()
      
      // Disable buttons when there's no next/prev section
      this.rendition.on("rendered", this.buttonCheck)
    },

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
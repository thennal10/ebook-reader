<template>
  <div>
    <Navigator/>
    <div id="viewer"></div>
    <Navigator/>
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

  mounted: function () {
    var book = ePub("https://s3.amazonaws.com/epubjs/books/alice/OPS/package.opf")
    var rendition = book.renderTo("viewer", {
      flow: "scrolled-doc",
      width: "100%",
      fullsize: true
    })
    rendition.display()

    // Assign next and back buttons
    var next = this.$el.getElementsByClassName("next");
    for (const element of next) {
    element.addEventListener("click", function(e){
      rendition.next()
      e.preventDefault()
    }, false)
    }

    var prev = this.$el.getElementsByClassName("prev");
    for (const element of prev) {
    element.addEventListener("click", function(e){
      rendition.prev()
      e.preventDefault()
    }, false)
    }

    // Disable buttons when there's no next/prev section
    rendition.on("rendered", function (section) {
    let disable = arr => {
      for (const element of arr) {
        element.disabled = true
        element.classList.add("v-btn--disabled")
      }
    }
    let enable = arr => {
      for (const element of arr) {
        element.disabled = false
        element.classList.remove("v-btn--disabled")
      }
    }

    if (section.next()) { enable(next) }
    else { disable(next) }

    if (section.prev()) { enable(prev) }
    else { disable(prev) }
    })
  }
}
</script>

<style>

</style>
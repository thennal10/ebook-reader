<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    max-width="800"
  >
    <v-card>
      <v-card-title>
        Bookmarks
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="computedStats"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              @click="deleteBookmark(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    bookmarks: Array
  },

  data () {
    return {
      headers: [
        { text: 'Location %', value: 'percentage' },
        { text: 'Characters Read', value: 'charas' },
        { text: 'Time Taken (m)', value: 'time' },
        { text: 'Reading Speed (ch/h)', value: 'speed' },
        { text: 'Time Stamp', value: 'timestamp' },
        { text: 'Actions', value: 'actions' }
      ]
    }
  },

  methods: {
    deleteBookmark(bookmark) {
      let i = this.computedStats.indexOf(bookmark)
      this.$emit('delete-bookmark', this.bookmarks[this.bookmarks.length - i - 1])
    }
  },

  computed: {
    computedStats() {
      // Slice to create a copy since reverse mutates the original
      let nStats = this.bookmarks.slice().reverse()
      return nStats.map((stat, i) => {
        let prev = nStats[i+1] ? nStats[i+1] : { location: 0 }
        return {
          percentage: `${Math.round(stat.percentage*10000)/100}%`,
          charas: stat.location - prev.location,
          time: stat.time,
          speed: stat.time ? Math.round(((stat.location - prev.location)*60/stat.time)): '­­—',
          timestamp: new Date(stat.timestamp).toDateString()
        }
      })
    }
  }
}
</script>

<style>

</style>
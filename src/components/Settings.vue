<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    max-width="500"
  >
    <v-card>
      <v-card-title>
        Settings
      </v-card-title>
      <v-card-text>
        <v-select
          :value="settings.theme"
          @input="$emit('change-theme', $event)"
          :items="themes"
          label="Theme"
          hint="Viewer reload might be required"
          persistent-hint
          outlined
        ></v-select>
        <v-slider
          :value="settings.fontSize"
          @input="$emit('change-fontsize', $event)"
          label="Font Size"
          max="150"
          min="50"
        >
          <template v-slot:append>
            <p>            
              {{ `${settings.fontSize}%` }}
            </p>
          </template>
        </v-slider>
         <v-data-table
          :headers="headers"
          :items="computedStats"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    settings: Object,
    stats: Array
  },

  data () {
    return {
      themes: [
        {text: 'Light', value: 'light'},
        {text: 'Dark', value: 'dark'}
      ],
      headers: [
        { text: 'Location %', value: 'percentage' },
        { text: 'Characters Read', value: 'charas' },
        { text: 'Time Taken (m)', value: 'time' },
        { text: 'Reading Speed (ch/m)', value: 'speed' },
        { text: 'Time Stamp', value: 'timestamp' }
      ]
    }
  },

  computed: {
    computedStats() {
      let nStats = this.stats.filter(stat => stat.location != 0)
      nStats.reverse()
      return nStats.map((stat, i) => {
        let prev = nStats[i+1] ? nStats[i+1] : { location: 0 }
        return {
          percentage: `${Math.round(stat.percentage*10000)/100}%`,
          charas: stat.location - prev.location,
          time: Math.round(stat.time/60000),
          speed: Math.round(((stat.location - prev.location)/stat.time)*60000),
          timestamp: new Date(stat.timestamp).toDateString()
        }
      })
    }
  }
}
</script>

<style>

</style>
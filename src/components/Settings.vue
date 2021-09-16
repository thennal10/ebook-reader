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
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    settings: Object 
  },

  data () {
    return {
      themes: [
        {text: 'Light', value: 'light'},
        {text: 'Dark', value: 'dark'}
      ]
    }
  }
}
</script>

<style>

</style>
<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-img :src="metadata.cover" aspect-ratio="0.625">
        <v-container fill-height fluid>
          <v-icon 
            class="align-self-start"
            @click="overlay = !overlay"
            >
            mdi-close
          </v-icon>
          <v-row
            class="fill-height"
            align="center" 
            justify="center"      
            @click="$emit('open-viewer')"
            >
            <p v-if="!metadata.cover" class="text-h4 pa-4">
              {{metadata.title}}
            </p>
          </v-row>
          <v-overlay
            :absolute="true"
            :opacity="0.9"
            :value="overlay"
          >
            <v-container>
              <v-row justify="center" class="ma-2">
                <p class="text-h5"> 
                  <b>Delete</b> {{metadata.title}}?
                </p>
              </v-row>
              <v-spacer></v-spacer>
              <v-row justify="center" class="ma-2">
                <v-btn
                  color="green lighten-1"
                  large
                  @click="$emit('delete'); overlay = false"
                >
                  YES
                </v-btn>
              </v-row>
              <v-row justify="center">
                <v-btn
                  color="red lighten-1"
                  large
                  @click="overlay = false"
                >
                  NO
                </v-btn>
              </v-row>
            </v-container>

          </v-overlay>
        </v-container>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'LibraryEntry',

  props: {
    book: ArrayBuffer,
    metadata: Object
  },

  data: () => ({
    overlay: false
  })
}
</script>

<style>

</style>
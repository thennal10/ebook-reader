<template>
  <v-hover v-slot="{ hover }" v-if="metadata">
    <v-card
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-img :src="metadata.cover" aspect-ratio="0.625">
        <v-container fill-height fluid>
          <v-dialog
            v-model="dialog"
            max-width="600"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon 
                class="align-self-start "
                v-bind="attrs"
                v-on="on"
                >
                mdi-close
              </v-icon>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Delete "{{metadata.title}}"?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="red darken-1"
                  text
                  @click="dialog = false"
                >
                  No
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="$emit('delete'); dialog = false"
                >
                  Yes
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-row
            class="fill-height"
            align="center" 
            @click="$emit('open-viewer')"
            >
            <p v-if="!metadata.cover" class="text-sm-h4 text-h5 pa-4">
              {{metadata.title}}
            </p>
          </v-row>
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
    dialog: false
  })
}
</script>

<style>

</style>
<template>
  <v-container>
    <v-row justify="center">
      <v-btn 
        class="ma-2" text icon
        @click="clickPrev"
        :disabled="noPrev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn 
        class="ma-2" text icon
        @click="clickNext"
        :disabled="noNext"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Navigator',

    props: {
      noNext: Boolean,
      noPrev: Boolean
    },

    methods: {
      clickNext(e) {
        this.$parent.clickNext(e)
      },
      clickPrev(e) {
        this.$parent.clickPrev(e)
      }
    }
  }
</script>

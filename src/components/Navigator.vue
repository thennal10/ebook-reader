<template>
  <v-container>
    <v-row justify="center">
      <v-btn 
        class="ma-2" text icon
        @click.prevent="$emit('prev')"
        :disabled="noPrev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn 
        class="ma-2" text icon
        @click.prevent="$emit('next')"
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
    }
  }
</script>

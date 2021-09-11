<template>
  <v-container>
    <v-row justify="center">
      <v-btn 
        class="ma-2 prev" text icon
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn 
        class="ma-2 next" text icon
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Navigator'
  }
</script>

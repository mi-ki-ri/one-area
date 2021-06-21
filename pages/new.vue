<template>
  <b-container>
    <b-row>
      <b-col class="writeCol">
        <b-textarea class="area" v-model="inputtedTxt" />
      </b-col>
      <b-col class="writeCol">
        <div class="area" v-html="outputHTML" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import sanitizeHTML from 'sanitize-html'
import marked from 'marked'

export default {
  data() {
    return {
      inputtedTxt: '',
    }
  },
  computed: {
    outputHTML() {
      const sanitizedTxt = sanitizeHTML(this.inputtedTxt)
      const markedHTML = marked(sanitizedTxt)
      return markedHTML
    },
  },
}
</script>

<style scoped>
.writeCol {
  height: 100vh;
}

.area {
  height: 100vh;
}
</style>

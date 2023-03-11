<script setup>
import { defineProps } from "vue";

const { quizquestion, numofcorrectanswer } = defineProps([
  "quizquestion",
  "numofcorrectanswer",
]);
</script>

<template>
  <div class="results">
    <p>RESULT</p>
    <h2>{{ numofcorrectanswer }}/{{ quizquestion }}</h2>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 25px;
}
h1 {
  font-size: 80px;
}
</style>

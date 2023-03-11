<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);

const { question, currentquestionindex } = defineProps([
  "question",
  "currentquestionindex",
]);

const emitselectedoption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div
    v-for="opti in question.options"
    :key="opti.id"
    class="options-container"
    @click="emitselectedoption(opti.isCorrect)"
  >
    <div class="option">
      <p class="option-label">{{ opti.label }}</p>
      <div class="option-value">
        <p>{{ opti.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}
.question {
  margin-bottom: 20px;
  font-size: 40px;
}
.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}
.option-label {
  background-color: bisque;
  width: 50px;
  height: 60px;
  font-size: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.option-value {
  background-color: aqua;
  width: 50%;
  font-size: 30px;
  padding: 0px 20px;
}
</style>

<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizid = parseInt(route.params.id);

const thequiz = quizes.find((q) => q.id === quizid);

const currentquestionindex = ref(0);

const numofcorrect = ref(0);

const showResults = ref(false);

// const questioncount=(`${currentquestionindex.value} / ${thequiz.questions.length}`)

// watch(()=> currentquestionindex.value ,()=>{
//   questioncount=`${currentquestionindex.value} / ${thequiz.questions.length}`
// })

const itemlength = thequiz.questions.length;

const questioncount = computed(() => {
  return `${currentquestionindex.value} / ${itemlength}`;
});
const barpercentage = computed(() => {
  return `${(currentquestionindex.value / itemlength) * 100}%`;
});

const onselectedoption = (isCorrect) => {
  if (isCorrect) {
    numofcorrect.value++;
  }
  if (itemlength - 1=== currentquestionindex.value) {
    showResults.value = true;
  }

  currentquestionindex.value++;
}
</script>

<template>
  <div>
    <QuizHeader :questioncount="questioncount" :barpercentage="barpercentage" />
    <div>
      <Question
        v-if="!showResults"
        :question="thequiz.questions[currentquestionindex]"
        @selectOption="onselectedoption"
      />
      <Result 
      v-else
      :quizquestion="itemlength"
      :numofcorrectanswer="numofcorrect"
       />
    </div>
  </div>
</template>

<style scoped></style>

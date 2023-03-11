<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { quiz } = defineProps(["quiz"]);
const navitoquiz = () => {
  router.push(`/quiz/${quiz.id}`);
};

</script>
<template>
  <div class="card" @click="navitoquiz">
    <img :src="quiz.img" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 330px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(132, 132, 161, 0.652);
  margin: 0px 20px 35px 0px;
  cursor: pointer;
}
.card img {
  width: 100%;
  height: 190px;
  margin: 0px;
}
.card-text {
  padding: 0px 5px;
}
.card-text h2 {
  font-weight: bold;
}
</style>

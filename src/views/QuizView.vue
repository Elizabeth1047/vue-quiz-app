<script setup>
import myquizdata from "../data/quizes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";

const quizes = ref(myquizdata);
const search = ref("");

watch(search, () => {
  quizes.value = myquizdata.filter((quize) =>
    quize.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
}

header {
  margin: 30px 0px 10px 0px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: 2px solid grey;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  
}
@media screen and (max-width: 768px) {
  .options-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
header {
  justify-content: center;
}
}
</style>

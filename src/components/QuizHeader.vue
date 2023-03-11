<script setup>
import { defineProps } from 'vue';

const {questioncount,barpercentage}=defineProps(["questioncount","barpercentage"])
</script>


<template>
  <header>
    <h4>{{questioncount}}</h4>
    <div class="bar">
      <div class="completion" :style="{width: barpercentage}"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
}
header h4 {
  font-size: 30px;
}
.bar {
  width: 300px;
  height: 50px;
  border: 3px solid bisque;
}
.completion {
  width: 0%;
  height: 100%;
  background-color: bisque;
}
</style>

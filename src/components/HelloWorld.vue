<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1>test from Hello World</h1>
    <h1 class="classTitle">test test</h1>
  </div>
</template>

<style scoped>
h1.classTitle {
  color: red;
}
</style>

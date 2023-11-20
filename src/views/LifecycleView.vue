<script setup lang="ts">
import { onMounted, onUpdated, watch, ref } from "vue";
const firstNumber = ref(0);
const secondNumber = ref(100);

onMounted(() => console.log("on mounted"));
onUpdated(() => console.log("on update"));
watch(secondNumber, (newNumber, old) => {
  console.log("OLD :", old, "NEW :", newNumber);
});
</script>

<template>
  <div></div>
</template>

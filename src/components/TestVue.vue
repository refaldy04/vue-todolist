<script lang="ts">
interface IEmit {
  (e: "change-hobby", value: string): void;
}
</script>

<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits<IEmit>();

const changeHobby = (value: string) => {
  emit("change-hobby", value);
};
</script>

<template>
  <div>
    <button @click="changeHobby('Play Video Game')">Change Hobby</button>
  </div>
</template>

<style scoped></style>

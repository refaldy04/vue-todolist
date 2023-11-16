<script lang="ts">
interface IProps {
  title: string;
}

interface IEmit {
  (e: "delete-list", value: string): void;
}
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits<IEmit>();

const props = defineProps<IProps>();

const deleteList = (value: string) => {
  emit("delete-list", props.title);
};
</script>

<template>
  <div class="todolist-item">
    <span>{{ props.title }}</span>
    <button class="delete-btn" @click="deleteList(props.title)">Delete</button>
  </div>
</template>

<style>
.todolist-item {
  width: 100%;
  background-color: white;
  color: black;
  margin: 5px 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}

.delete-btn {
  background-color: rgb(240, 57, 57);
  color: white;
}
</style>

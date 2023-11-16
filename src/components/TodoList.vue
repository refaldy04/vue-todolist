<script lang="ts">
interface IProps {
  title: string;
}

interface IEmit {
  (e: "delete-list", value: string): void;
}
</script>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits<IEmit>();

const props = defineProps<IProps>();

const message = ref<string>("Delete");

const deleteList = (value: string) => {
  emit("delete-list", props.title);
};

const mouseover = () => {
  message.value = "Yakin?";
};

const mouseleave = () => {
  message.value = "Delete";
};
</script>

<template>
  <div class="todolist-item">
    <span>{{ props.title }}</span>
    <button
      class="delete-btn"
      @click="deleteList(props.title)"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
    >
      {{ message }}
    </button>
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
  gap: 10px;
}

.delete-btn {
  background-color: rgb(240, 57, 57);
  color: white;
}
</style>

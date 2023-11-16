<script setup lang="ts">
import { reactive, ref, type Ref } from "vue";

interface ITodolist {
  title: string;
}

const todolistForm = reactive({
  title: "",
});

const todoList: Ref<ITodolist[]> = ref([]);

const addList = (newList: string) => {
  todoList.value = [...todoList.value, { title: newList }];
  todolistForm.title = "";
};

const deleteList = (item: ITodolist) => {
  todoList.value = todoList.value.filter(
    (list: ITodolist) => list.title !== item.title
  );
};
</script>

<template>
  <div class="container">
    <div>
      <form @submit.prevent="addList(todolistForm.title)">
        <input
          type="text"
          placeholder="Tambah list baru"
          v-model="todolistForm.title"
        />
        <button type="submit">submit</button>
      </form>

      <ul>
        <li
          v-for="(item, index) in todoList"
          :key="index"
          class="todolist-item"
        >
          <span>{{ item.title }}</span>
          <button class="delete-btn" @click="deleteList(item)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  padding: 5px;
}

ul {
  margin: 0;
  padding: 0;
}
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

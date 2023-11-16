<script setup lang="ts">
import { reactive, ref, type Ref } from "vue";
import TodoList from "../components/TodoList.vue";

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

const recieveEmit = (value: string) => {
  todoList.value = todoList.value.filter(
    (list: ITodolist) => list.title !== value
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
        <li v-for="(item, index) in todoList" :key="index">
          <TodoList
            :title="item.title"
            @delete-list="(value) => recieveEmit(value)"
          />
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

li {
  list-style-type: none;
}
</style>

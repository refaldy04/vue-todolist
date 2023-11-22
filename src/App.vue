<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="wrapper">
      <!-- <h1>Test test</h1> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav style="display: flex; gap: 10px">
        <RouterLink to="/">Home test</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todolist">Todolist</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/crud">CRUD</RouterLink>
      </nav> -->
    </div>
    <hr />
    <RouterView />
  </div>
</template>

<style>
body {
  background-color: #00000f;
  color: white;
}

h1 {
  color: cyan;
}
</style>

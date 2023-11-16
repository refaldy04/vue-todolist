<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import TestVue from "@/components/TestVue.vue";
import { ref, type Ref } from "vue";

const hobby: Ref<string> = ref("Play Football");

const emitDiterima = (value: string) => {
  hobby.value = value;
};
</script>

<template>
  <main>
    <h1>{{ hobby }}</h1>
    <TestVue @change-hobby="(value) => emitDiterima(value)" />
    <TheWelcome title="test test 123" />
  </main>
</template>

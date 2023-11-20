<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import TestVue from "@/components/TestVue.vue";
import { ref, type Ref, provide, computed } from "vue";
import SlotVue from "@/components/SlotVue.vue";

const hobby: Ref<string> = ref("Play Football");

const emitDiterima = (value: string) => {
  hobby.value = value;
};

const angka = ref(0);
const addNumber = () => angka.value++;
const decreaseNumber = () => angka.value--;

provide("angka", angka);

const text = ref("test");
const reversedText = computed(() => {
  return text.value.split("").reverse().join("");
});
</script>

<template>
  <main>
    <!-- <h1>{{ hobby }}</h1>
    <TestVue @change-hobby="(value) => emitDiterima(value)" />
    <TheWelcome title="test test 123" /> -->

    <SlotVue>
      <template #body>
        <div>
          <p>body</p>
        </div>
      </template>
      <template #header>
        <div>
          <p>header</p>
        </div>
      </template>
    </SlotVue>
    <button @click="addNumber">Increase</button>
    <button @click="decreaseNumber">Decrease</button>
    <br />
    <input type="text" v-model="text" placeholder="type something .." />
    {{ reversedText }}
  </main>
</template>

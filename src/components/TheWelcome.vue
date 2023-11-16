<script lang="ts">
interface IProps {
  title: string;
}
</script>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps<IProps>();
const string = ref("Hello");
</script>

<template>
  <div>
    <h1>Hello</h1>
    <p>{{ props.title }}</p>
    <p>{{ string }}</p>
  </div>
</template>

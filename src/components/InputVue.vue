<script lang="ts">
interface IProps {
  type: string;
  placeholder: string;
  label: string;
  defaultValue: string;
}

interface IEmit {
  (e: "passing-value", value: string): void;
}
</script>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from "vue";

const { placeholder, label, defaultValue } = defineProps<IProps>();
const emit = defineEmits<IEmit>();
const inputValue = ref(defaultValue);

const handleInput = computed({
  get() {
    return inputValue.value;
  },
  set(value) {
    inputValue.value = value;
    emit("passing-value", inputValue.value);
  },
});
</script>

<template>
  <div>
    <label>{{ label }} {{ inputValue }}</label>
    <br />
    <input :type="type" :placeholder="placeholder" v-model="handleInput" />
  </div>
</template>

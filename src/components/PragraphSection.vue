<script setup lang="ts">
import { inject } from "vue";

const angka = inject("angka");
</script>

<template>
  <div>
    <h1>paragraph section {{ angka }}</h1>
  </div>
</template>

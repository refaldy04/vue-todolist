<script setup lang="ts">
import PragraphSection from "./PragraphSection.vue";
</script>

<template>
  <div>
    <h1>Hero</h1>

    <slot name="header"></slot>
    <slot name="body"></slot>

    <PragraphSection />
  </div>
</template>

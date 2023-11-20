<script setup lang="ts">
import InputVue from "@/components/InputVue.vue";
import { reactive } from "vue";

const formLogin = reactive({
  username: "",
  password: "",
});

const handleSubmit = () => {
  console.log(formLogin);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <InputVue
        type="text"
        placeholder="type username"
        label="Username"
        default-value=""
        @passing-value="(value) => (formLogin.username = value)"
      />
    </div>
    <div>
      <InputVue
        type="password"
        placeholder="type password"
        label="Password"
        default-value=""
        @passing-value="(value) => (formLogin.password = value)"
      />
    </div>
    <div><button type="submit">Submit</button></div>
  </form>
</template>

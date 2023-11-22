<script setup lang="ts">
import InputVue from "@/components/InputVue.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formLogin = reactive({
  username: "",
  password: "",
});

const handleSubmit = () => {
  localStorage.setItem("token", JSON.stringify(formLogin));
  router.push("/");
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-[90vh] gap-10">
    <h1 class="text-3xl">Login</h1>
    <form @submit.prevent="handleSubmit" class="max-w-screen-sm">
      <InputVue
        type="text"
        placeholder="type username"
        label="Username"
        default-value=""
        @passing-value="(value) => (formLogin.username = value)"
      />
      <InputVue
        type="password"
        placeholder="type password"
        label="Password"
        default-value=""
        @passing-value="(value) => (formLogin.password = value)"
      />

      <button
        type="submit"
        class="btn btn-accent text-xl font-semibold text-white mt-3"
      >
        Submit
      </button>
    </form>
  </div>
</template>

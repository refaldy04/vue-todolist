<script lang="ts">
interface IBiodata {
  address: string;
  fullname: string;
}
</script>

<script setup lang="ts">
import { ref, reactive, type Ref } from "vue";

const username: Ref<String> = ref("Refaldy");

const biodata: IBiodata = reactive({
  address: "Bandung",
  fullname: "Refaldy Bagas Anggana",
});

const formLogin = reactive({
  email: "",
  gender: "",
});

const changeCity = () => {
  biodata.address = "Semarang";
};

const changeName = () => {
  username.value = "Ronaldo";
};

const hanldleSubmit = () => {
  console.log(formLogin);
};
</script>

<template>
  <div class="about">
    <h1>{{ biodata.fullname }}</h1>
    <p>{{ username }}</p>
    <p>address : {{ biodata.address }}</p>
    <button @click="changeCity">Change City</button>
    <button @mouseover="changeName">Change Name</button>

    <form @submit.prevent="hanldleSubmit">
      <input v-model="formLogin.email" placeholder="email" />
      <select v-model="formLogin.gender">
        <option value="" disabled>Pilih Gender</option>
        <option value="Male">Pria</option>
        <option value="Female">Wanita</option>
      </select>
      <button type="submit">submit</button>
    </form>

    <div v-if="formLogin.gender === 'Male'">Gender Pria</div>
    <div v-else-if="formLogin.gender === 'Female'">Gender Wanita</div>
    <div v-else="formLogin.gender === 'Female'">Silahkan Pilih Gender</div>
  </div>
</template>

<style scope>
div.about {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

p {
  color: white;
}
</style>

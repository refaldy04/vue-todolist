<script setup lang="ts">
import axios from "axios";
import {
  state,
  actions,
  type IInventory,
} from "@/store/inventory/inventory.store";
import { onMounted, reactive, watch } from "vue";
import InputVue from "@/components/InputVue.vue";
import { useRoute } from "vue-router";
import router from "@/router";

const path = useRoute().path;
const { search } = useRoute().query;

const filter = reactive({
  search,
  limit: 1,
});

const inventoryForm = reactive({
  _id: "",
  name: "",
  brand: "",
  count: "",
});

const getInventory = async () => {
  try {
    actions.listInventoryPending();
    const { data } = await axios.get("https://crudapi.co.uk/api/v1/inventory", {
      headers: {
        Authorization:
          "Bearer 9lC5qqGJcv7KngUEoYgiDCfylFw7FuMyYI6m-X3Ahjv8f4wdLg",
      },
    });
    console.log(data);
    actions.listInventoryFulfiled(data.items);
  } catch (error) {
    actions.listInventoryError();
  }
};

watch(state.list.data, (newNumber, old) => {
  getInventory();
});

onMounted(() => getInventory());

const handleDelete = async (itemID: string) => {
  const { data } = await axios.delete(
    `https://crudapi.co.uk/api/v1/inventory/${itemID}`,
    {
      headers: {
        Authorization:
          "Bearer 9lC5qqGJcv7KngUEoYgiDCfylFw7FuMyYI6m-X3Ahjv8f4wdLg",
      },
    }
  );

  getInventory();
};

const handleSubmit = async () => {
  try {
    actions.listInventoryPending();
    const { data } = await axios.post(
      "https://crudapi.co.uk/api/v1/inventory",
      [inventoryForm],
      {
        headers: {
          Authorization:
            "Bearer 9lC5qqGJcv7KngUEoYgiDCfylFw7FuMyYI6m-X3Ahjv8f4wdLg",
        },
      }
    );
    getInventory();
  } catch (error) {
    console.log(error);
  }
};

const handleLogout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>

<template>
  <div>
    <div class="flex justify-between m-5">
      <h1 class="text-3xl font-semibold">CRUD</h1>
      <button
        @click="handleLogout"
        class="btn btn-error text-xl font-semibold text-white"
      >
        Logout
      </button>
    </div>

    <!-- <form :action="path" method="GET" class="border border-red-600">
      <input name="search" type="search" v-model="filter.search" class="m-0" />
      <button type="submit" class="btn btn-accent btn-xs m-0">Submit</button>
    </form> -->

    <div class="flex justify-between">
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>brand</th>
          <th>count</th>
          <th>option</th>
        </tr>
        <tr v-for="(item, index) in state.list.data" :key="index">
          <td>{{ item._uuid }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.brand }}</td>
          <td>{{ item.count }}</td>
          <td class="space-x-3">
            <RouterLink :to="{ name: 'crud edit', params: { id: item._uuid } }"
              ><button>Update</button></RouterLink
            >
            <button @click="handleDelete(item._uuid)" class="text-red-500">
              Delete
            </button>
          </td>
        </tr>
      </table>

      <form @submit.prevent="handleSubmit" class="form-control w-full px-5">
        <InputVue
          type="text"
          placeholder="input name"
          label="Name"
          default-value=""
          @passing-value="(value) => (inventoryForm.name = value)"
        />

        <InputVue
          type="text"
          placeholder="input brand"
          label="Brand"
          default-value=""
          @passing-value="(value) => (inventoryForm.brand = value)"
        />

        <InputVue
          type="text"
          placeholder="input count"
          label="Count"
          default-value=""
          @passing-value="(value) => (inventoryForm.count = value)"
        />

        <button
          type="submit"
          class="btn btn-accent text-xl font-semibold text-white mt-3"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  min-width: 60vw;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>

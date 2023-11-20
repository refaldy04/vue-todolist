<script setup lang="ts">
import axios from "axios";
import {
  state,
  actions,
  type IInventory,
} from "@/store/inventory/inventory.store";
import { onMounted, reactive, watch } from "vue";
import InputVue from "@/components/InputVue.vue";

const inventoryForm: IInventory = reactive({
  _id: "",
  id: "",
  name: "",
  brand: "",
  count: "",
});

const getInventory = async () => {
  try {
    actions.listInventoryPending();
    const { data } = await axios.get(
      "https://crudcrud.com/api/2ccb9507f80a4ca9b71bb8051c2473bb/inventory"
    );
    console.log(data);
    actions.listInventoryFulfiled(data);
  } catch (error) {
    actions.listInventoryError();
  }
};

watch(state.list.data, (newNumber, old) => {
  getInventory();
});

onMounted(() => getInventory());

const handleSubmit = async () => {
  try {
    actions.listInventoryPending();
    const { data } = await axios.post(
      "https://crudcrud.com/api/2ccb9507f80a4ca9b71bb8051c2473bb/inventory",
      inventoryForm
    );
    getInventory();
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <h1>CRUD</h1>

    <div class="container">
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>brand</th>
          <th>count</th>
          <th>option</th>
        </tr>
        <tr v-for="(item, index) in state.list.data" :key="index">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.brand }}</td>
          <td>{{ item.count }}</td>
          <td>
            <RouterLink :to="{ name: 'crud edit', params: { id: item._id } }"
              ><button>Update</button></RouterLink
            >
          </td>
        </tr>
      </table>

      <form @submit.prevent="handleSubmit">
        <div>
          <InputVue
            type="number"
            placeholder="input id"
            label="ID"
            default-value=""
            @passing-value="(value) => (inventoryForm.id = value)"
          />
        </div>
        <div>
          <InputVue
            type="text"
            placeholder="input name"
            label="Name"
            default-value=""
            @passing-value="(value) => (inventoryForm.name = value)"
          />
        </div>
        <div>
          <InputVue
            type="text"
            placeholder="input brand"
            label="Brand"
            default-value=""
            @passing-value="(value) => (inventoryForm.brand = value)"
          />
        </div>
        <div>
          <InputVue
            type="text"
            placeholder="input count"
            label="Count"
            default-value=""
            @passing-value="(value) => (inventoryForm.count = value)"
          />
        </div>
        <div><button type="submit">Create</button></div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

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

form {
  width: 100%;
  padding: 0 20px;
}

button {
  margin: 10px 0;
}
</style>

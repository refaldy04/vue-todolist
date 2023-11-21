<script setup lang="ts">
import axios from "axios";
import {
  state,
  actions,
  type IInventory,
} from "@/store/inventory/inventory.store";
import { onMounted, reactive, watch } from "vue";
import InputVue from "@/components/InputVue.vue";

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
          <td>{{ item._uuid }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.brand }}</td>
          <td>{{ item.count }}</td>
          <td>
            <RouterLink :to="{ name: 'crud edit', params: { id: item._uuid } }"
              ><button>Update</button></RouterLink
            >
            <button @click="handleDelete(item._uuid)">Delete</button>
          </td>
        </tr>
      </table>

      <form @submit.prevent="handleSubmit">
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

<script setup lang="ts">
import InputVue from "@/components/InputVue.vue";
import {
  actions,
  state,
  type IInventory,
} from "@/store/inventory/inventory.store";
import axios from "axios";
import { onMounted, reactive, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;
console.log(id);

const getInventory = async () => {
  try {
    actions.listInventoryPending();
    const { data } = await axios.get(
      `https://crudcrud.com/api/2ccb9507f80a4ca9b71bb8051c2473bb/inventory/${id}`
    );

    actions.detailInventoryFulfiled(data);
    inventoryForm.brand = data.brand;
    inventoryForm.name = data.name;
    inventoryForm.count = data.count;
    inventoryForm.id = data.id;
  } catch (error) {
    actions.listInventoryError();
  }
};

watch(state.list.data, (newNumber, old) => {
  getInventory();
});

onMounted(() => getInventory());

const inventoryForm = reactive({
  id: "",
  name: "",
  brand: "",
  count: "",
});
</script>

<template>
  <div>
    <h1>Update</h1>

    <form>
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
      <div><button type="submit">Update</button></div>
    </form>
  </div>
</template>

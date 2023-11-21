<script setup lang="ts">
import InputVue from "@/components/InputVue.vue";
import {
  actions,
  state,
  type IInventory,
} from "@/store/inventory/inventory.store";
import axios from "axios";
import { onMounted, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { id } = route.params;

const inventoryForm = reactive({
  name: "",
  brand: "",
  count: "",
});

const handleSubmit = async () => {
  const { data } = await axios.put(
    `https://crudapi.co.uk/api/v1/inventory/${id}`,
    inventoryForm,
    {
      headers: {
        Authorization:
          "Bearer 9lC5qqGJcv7KngUEoYgiDCfylFw7FuMyYI6m-X3Ahjv8f4wdLg",
      },
    }
  );

  console.log(data);
  router.push({
    name: "crud",
  });
};
</script>

<template>
  <div>
    <h1>Update</h1>

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
      <div><button type="submit">Update</button></div>
    </form>
  </div>
</template>

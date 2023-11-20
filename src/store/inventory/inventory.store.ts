import { reactive } from "vue";

export interface IInventory {
  _id: string;
  id: string;
  name: string;
  brand: string;
  count: string;
}

interface IState {
  list: {
    data: IInventory[];
    isLoading: boolean;
    isError: boolean;
  };
  detail: {
    data: IInventory;
  };
}

export const state = reactive<IState>({
  list: {
    data: [],
    isLoading: false,
    isError: false,
  },
  detail: {
    data: { _id: "", id: "", name: "", brand: "", count: "" },
  },
});

export const actions = {
  listInventoryPending: () => {
    state.list.isLoading = true;
  },
  listInventoryError: () => {
    state.list.isError = true;
  },
  listInventoryFulfiled: (data: IInventory[]) => {
    state.list.data = data;
    state.list.isLoading = false;
  },
  detailInventoryFulfiled: (data: IInventory) => {
    state.detail.data = data;
    state.list.isLoading = false;
  },
};

import { reactive } from "vue";

export interface IInventory {
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
}

export const state = reactive<IState>({
  list: {
    data: [],
    isLoading: false,
    isError: false,
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
  },
};

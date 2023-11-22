import { reactive } from "vue";

export interface IInventory {
  _uuid: string;
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
    data: {},
  },
});

export const actions = {
  listInventoryPending: () => {
    state.list.isLoading = true;
  },
  listInventoryError: () => {
    state.list.isError = true;
  },
  listInventoryFulfiled: (data: any) => {
    state.list.data = data;
    state.list.isLoading = false;
  },
  detailInventoryFulfiled: (data: any) => {
    state.detail.data = data;
    state.list.isLoading = false;
  },
};

import { defineStore } from "pinia";

export interface MyStoreState {
  data: Record<string, any>;
}

export const useFormStore = defineStore("formStore", {
  state: (): MyStoreState => ({
    data: {},
  }),
  actions: {
    setData(data: Record<string, any>) {
      this.data = data;
    },
    editData(key: string, value: any) {
      this.data[key] = value;
    },
  },
});

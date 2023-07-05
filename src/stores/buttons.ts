import { defineStore } from "pinia";

//create an enum for the different categories
export enum Category {
  WEB,
  VIDEOGAMES,
}

export const useCategoryStore = defineStore("category", {
  state: () => ({ category: Category.WEB }),
  actions: {
    setCategory(category: Category) {
      this.category = category;
    },
  },
});

import { defineStore } from "pinia";
import { CATEGORIES } from "@/models/categories.model";
//create an enum for the different categories

export const useCategoryStore = defineStore("category", {
  state: () => ({ category: CATEGORIES.WEB }),
  actions: {
    setCategory(category: CATEGORIES) {
      this.category = category;
    },
  },
});

export const useMobileMenuStore = defineStore("mobileMenu", {
  state: () => ({ mobileMenu: false }),
  actions: {
    setMobileMenu(state: boolean) {
      this.mobileMenu = state;
    },
    setChangeMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
  },
});

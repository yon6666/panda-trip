import { getHotSuggest, getCategory, getHouseList } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotData: [],
    categoryData: [],
    houseData: [],
    houseIndex: 1 , //房屋数据index默认值为1
  }),

  actions: {
    // 获取热门数据
    async fetchAllHotData() {
      const res = await getHotSuggest();
      this.hotData = res.data;
    },
    // 获取分类数据
    async fetchAllCategoryData() {
      const res = await getCategory();
      this.categoryData = res.data;
    },
    // 获取房屋数据
    async fetchAllHouse() {
      const res = await getHouseList(this.houseIndex);
      this.houseIndex++;
      this.houseData.push(...res.data)
    },
  },
});

export default useHomeStore;

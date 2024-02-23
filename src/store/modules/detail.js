import { defineStore } from "pinia";
import { getHouseDetail } from "@/service";

const useDetailStore = defineStore("detail", {
  state: () => ({
    houseDetailData: {},
  }),

  actions: {
    async fetchHouseDetail(houseID) {
      const res = await getHouseDetail(houseID)
      // console.log(res);
      this.houseDetailData = res.data
    }
  },
});

export default useDetailStore

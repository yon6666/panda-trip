import { defineStore } from "pinia"


const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore = defineStore('main', {
  state: () => ({
    startDate: startDate,
    endDate: endDate,
    showLoading: false, // 是否显示loading加载
  }),
  
  actions: {
    
  }

})

export default useMainStore
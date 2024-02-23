<template>
  <div class="content">
    <div class="list">
      <template v-for="item in houseData" :key="item.data.houseId">
        <house-item-v9 v-if="item.discoveryContentType === 9" :item="item.data"
          @click="houseDetailClick(item.data.houseId)" />
        <house-item-v3 v-else-if="item.discoveryContentType === 3" :item="item.data"
          @click="houseDetailClick(item.data.houseId)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import houseItemV3 from '@/components/home-house-item/house-item-v3.vue'
import houseItemV9 from '@/components/home-house-item/house-item-v9.vue'
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from "pinia"
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houseData } = storeToRefs(homeStore)
const router = useRouter()

const houseDetailClick = (houseID) => {
  // console.log("房屋详情:", houseID);
  router.push('/detail/'+ houseID)
}
</script>

<style lang="less" scoped>
.content {
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
}
</style>
<template>
  <div class="city-group">
    <van-index-bar highlight-color="#3cb490" :index-list="indexList">
      <!-- 热门 -->
      <van-index-anchor index="| 热门城市" />
      <div class="hot">
        <template v-for="city in groupData.hotCities" :key="city.id">
          <div class="hot-item" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>

      <!-- A-Z组别 -->
      <template v-for="item in groupData.cities" :key="item.id">
        <van-index-anchor class="title" :index="item.group" />
        <template v-for="city in item.cities" :key="city.id">
          <van-cell class="city-item" :title="city.cityName" @click="cityClick(city)" />
          <van-back-top />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { computed } from 'vue'
import { useRouter } from 'vue-router'
// 定义Props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const router = useRouter()
const cityStore =  useCityStore()


// 追加indexbar索引
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

// 监听点击城市
const cityClick = (city) => {
  cityStore.selectedCity = city
  // 路由跳转,返回上一级
  router.back()
}
</script>

<style lang="less" scoped>
.city-group {
  .hot {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1%;

    .hot-item {
      height: 28px;
      width: 60px;
      line-height: 28px;
      text-align: center;
      background-color: #c2e3d9;
      border-radius: 15px;
      margin: 8px 5px;
      font-size: 13px;
    }
  }
}
</style>
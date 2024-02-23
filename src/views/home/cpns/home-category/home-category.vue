<template>
  <div class="home-category">
    <template v-for="item in categoryData" :key="item.id">
      <div class="home-category-item">
        <img :src="item.pictureUrl" alt="">
        <div class="item-title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()

// 分类数据
const { categoryData } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>


.home-category {
  display: flex;
  overflow-x: auto;
  margin-top: 8px;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  .home-category-item {
    flex-shrink: 0;
    width: 70px;
    text-align: center;
    padding: 0 0 0 20px;

    img {
      height: 32px;
      width: 32px;
    }

    .item-title {
      font-size: 14px;
      margin-top: 4px;
    }

  }
}
</style>
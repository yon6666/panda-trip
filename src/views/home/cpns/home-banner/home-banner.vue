<template>
  <div class="banner">
      <van-swipe :autoplay="3000" lazy-render indicator-color="#FFFFFF">
        <van-swipe-item v-for="(item, index) in bannerData" :key="index">
          <img :src="item.image"
            alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script setup>
import bannerData from '@/assets/data/banner.js'

</script>

<style lang="less" scoped>
.banner {
    height: 128px;
    
    img {
      width: 100%;
    }
  }
</style>
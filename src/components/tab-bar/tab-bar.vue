<template>
  <div class="tab-bar">
    <van-tabbar
      route
      v-model="currentIndex"
      active-color="#3cb490"
      inactive-color="#000000"
      placeholder
    >
      <van-tabbar-item
        v-for="(item, index) in tabbarData"
        :key="index"
        :to="item.path"
      >
        <span>{{ item.text }}</span>
        <template #icon>
          <!-- <img v-if="currentIndex === index" :src="getAssetUrl(item.imageActive)">
          <img v-else :src="getAssetUrl(item.image)"> -->
          <van-icon v-if="currentIndex === index" :name="item.iconActive" />
          <van-icon v-else :name="item.icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js";
// import { getAssetUrl } from '@/utils/get_img.js'
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const currentIndex = ref(0);

const route = useRoute();
watch(route, (newRoute) => {
  const findIndex = tabbarData.findIndex((item) => item.path === newRoute.path);
  // console.log(findIndex);
  if (findIndex === -1) return;
  currentIndex.value = findIndex;
});
</script>

<style lang="less" scoped>
:deep(.van-tabbar-item) {
  height: 50px;
}

.tab-bar {
  img {
    height: 30px;
  }
}
</style>
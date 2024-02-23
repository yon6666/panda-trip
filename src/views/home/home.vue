<template>
  <div class="home" ref="homeRef">
    <!-- 导航头部 -->
    <nav-bar></nav-bar>

    <!-- 轮播图 -->
    <home-banner></home-banner>

    <!-- 定位 -->
    <home-search-box></home-search-box>

    <!-- 分类 -->
    <home-category></home-category>

    <!-- 搜索框 -->
    <div class="search" v-if="showSearchBox">
      <home-search-bar></home-search-bar>
    </div>

    <!-- 热门精选 -->
    <home-content></home-content>
  </div>
</template>

<script>
export default { name: "home" };
</script>
<script setup>
import NavBar from "@/views/home/cpns/nav-bar/nav-bar.vue";
import HomeBanner from "@/views/home/cpns/home-banner/home-banner.vue";
import HomeSearchBox from "@/views/home/cpns/home-searchbox/home-searchbox.vue";
import HomeCategory from "@/views/home/cpns/home-category/home-category.vue";
import HomeContent from "@/views/home/cpns/home-content/home-content.vue";
import HomeSearchBar from "@/views/home/cpns/home-searchbar/home-searchbar.vue";
import useHomeStore from "@/store/modules/home";
import useScroll from "@/hooks/useScroll";
import { ref, watch, computed, onActivated } from "vue";

// 发起网络请求
const homeStore = useHomeStore();
homeStore.fetchAllCategoryData();
homeStore.fetchAllHotData();
homeStore.fetchAllHouse();

const homeRef = ref();
const { isReachBottom, scrollTop } = useScroll(homeRef);
// watch监听
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchAllHouse().then(() => {
      // 等待数据请求完成
      isReachBottom.value = false;
    });
  }
});

// 搜索框显示的控制
const showSearchBox = computed(() => {
  return scrollTop.value >= 450;
});

// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef?.value.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
}
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  width: auto;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 99;
}
</style>
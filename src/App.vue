<template>
  <div class="app">
    <!-- name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component" />
      </keep-alive>
    </router-view>

    <!-- <tab-bar v-if="!route.meta.hideTabBar"></tab-bar> -->
    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>

    <!-- 加载提示 -->
    <loading></loading>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";

const route = useRoute();
</script>

<style scoped></style>
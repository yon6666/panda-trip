<template>
  <div class="loading" v-if="mainStore.showLoading" @click="loadingClick">
    <van-loading vertical color="#3cb490">
      <template #icon>
        <img class="logo" src="/favicon.ico" alt="">
      </template>
      <span class="title">加载中...</span> 
    </van-loading>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';

const mainStore = useMainStore(); 	// Main store.

const loadingClick = () => {
  mainStore.showLoading = false;
};

</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 999;
  // 蒙板颜色
  background-color: rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
  align-items: center;

  .title{
    display: flex;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 20px;
  }

  img {
    border-radius: 50px;
    width: 65px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

  }
}
</style>
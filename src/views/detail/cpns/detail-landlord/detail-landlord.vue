<template>
  <div class="landlord">
    <!-- 头部房东等级图片 -->
    <div class="bg">
      <img :src="landlordModule.topScroll" alt="" />
    </div>

    <!-- 房子信息 -->
    <div class="hotelInfo">
      <!-- 左侧logo -->
      <div class="logo">
        <img :src="landlordModule.hotelLogo" alt="" />
      </div>

      <!-- 房东信息 -->
      <div class="infos">
        <div class="name">{{ landlordModule.hotelName }}</div>

        <div class="nameInfo">
          <template
            v-for="(item, index) in landlordModule.hotelTags"
            :key="index"
          >
            <div class="tagText" :style="{ color: item.tagText.color }">
              {{ item.tagText.text }}
            </div>
          </template>
        </div>
      </div>

      <!-- 联系房东 -->
      <div class="button">
        <span>联系房东</span>
      </div>
    </div>

    <!-- 描述概况 -->
    <div class="summary">
      <template
        v-for="(item, index) in landlordModule.hotelSummary"
        :key="index"
      >
        <div class="item">
          <div class="title">{{ item.title }}</div>
          <div class="intro">{{ item.introduction }}</div>

          <div v-if="item.highLight">
            <div class="tip">
              <div>{{ firstPart(item.tip, item.highLight) }}</div>
              <div class="highLight">{{ item.highLight }}</div>
              <div>{{ lastPart(item.tip, item.highLight) }}</div>
            </div>
          </div>
          <div v-else>
            <div class="tip">{{ item.tip }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  landlordModule: {
    type: Object,
    default: () => ({}),
  },
});
const firstPart = (tip, highLight) => {
  const index = tip.indexOf(highLight);
  return tip.substring(0, index);
};

const lastPart = (tip, highLight) => {
  const index = tip.indexOf(highLight);
  return tip.substring(index + highLight.length, tip.length);
};
</script>

<style lang="less" scoped>
.landlord {
  .bg {
    img {
      width: 100%;
      border-radius: 6px;
    }
  }

  .hotelInfo {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 16px 0;

    .logo {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .infos {
      margin-left: 12px;
      margin-right: 16px;

      .name {
        overflow: hidden;
        font-size: 16px;
        color: #333;
        font-weight: 600;
      }

      .nameInfo {
        display: flex;
        align-items: center;
        margin-top: 5px;
        font-size: 12px;

        .tagText:not(:last-child)::after {
          content: " | ";
          display: inline-block;
          content: "|";
          height: 12px;
          margin: 0 4px;
          color: #9b9b9b;
        }
      }
    }

    .button {
      width: 72px;
      height: 24px;

      // 垂直水平居中
      line-height: 24px;
      text-align: center;
      background-image: var(--theme-linear-gradient);
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      border-radius: 4px;
    }
  }

  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0 20px 0;

    .item {
      flex: 1;
      flex-direction: column;

      .title {
        font-size: 10px;
        color: #999;
      }

      .intro {
        font-size: 18px;
        color: #333;
        font-weight: 600;
        margin: 4px 0 2px;
      }

      .tip {
        display: flex;
        align-content: center;
        font-size: 11px;
        color: #666;

        .highLight {
          margin: 0 3px;
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>
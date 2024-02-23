<template>
  <div class="house-v9">
    <div class="item-card">
      <div class="img-top">
        <img :src="item.image.url" alt="">
      </div>
      <div class="intro-bottom">
        <div class="summary">{{ item.summaryText }}</div>
        <div class="title">{{ item.houseName }}</div>
        <div class="pro-star">
          <div class="star">
            <van-rate allow-half :model-value="starValue" color="#fff" size="10px" :count="5" />
          </div>
          <div class="price">￥ {{ item.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const starValue = ref(Number(props.item.commentScore));
</script>

<style lang="less" scoped>
.house-v9 {
  // 每个item宽度占屏幕一半
  width: 50%;

  .item-card {
    // 信息在img上：子绝父相
    position: relative;
    margin: 5px;

    .img-top {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .intro-bottom {
      position: absolute;
      bottom: 0;
      padding: 10px;
      color: #fff;

      .summary {
        line-height: 12px;
        margin-bottom: 4px;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #fff;
      }

      .title {
        // 超过2行就省略号省略...
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #fff;
        line-height: 17px;
        margin-bottom: 6px;
      }

      .pro-star {
        display: flex;
        justify-content: space-between;

        .price {
          font-family: PingFangSC-Medium;
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
}
</style>
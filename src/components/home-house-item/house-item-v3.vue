<template>
  <div class="house-v3">
    <div class="item-card">
      <div class="img-top">
        <img :src="item.image.url" alt="">
      </div>
      <div class="intro-bottom">
        <div class="location">
          <van-icon name="location" color="#808080" />
          <span class="name">{{ item.location }}</span>
        </div>
        <div class="title">{{ item.houseName }}</div>
        <div class="info">{{ item.summaryText }} </div>
        <div class="price">
          <span class="finalPrice">￥{{ item.finalPrice }}</span>
          <span class="productPrice">￥{{ item.productPrice }}</span>
          <span class="sale">已减{{ item.productPrice - item.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-v3 {
  width: 50%;

  .item-card {
    margin: 5px;

    .img-top {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .intro-bottom {
      padding: 0 10px;

      .location {
        display: flex;
        align-items: center;
        margin: 8px 0 4px;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: #666;
        text-align: left;
        line-height: 12px;
      }

      .title {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333;
        text-align: justify;
        line-height: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .info {
        width: 100px;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #666;
        margin: 4px 0 8px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .price {
        display: flex;
        align-items: center;
        padding-bottom: 12px;

        .finalPrice {
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: var(--primary-color);
        }

        .productPrice {
          font-family: PingFangSC-Light;
          font-size: 10px;
          color: #999;
          text-decoration: line-through;
          margin-left: 8px;
        }

        .sale {
          display: flex;
          font-size: 10px;
          color: #fff;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          border-radius: 8px;
          font-size: 10px;
          color: #fff;
          align-items: center;
          height: 15px;
          padding: 0 6px;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="infos">
    <div class="name">{{ props.topInfos.houseName }}</div>

    <div class="tags">
      <template v-for="(item, index) in houseTags" :key="index">
        <span class="tag1" v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
        <span class="tag1" v-else>
          <img :src="item.tagPic" alt="">
        </span>
      </template>
    </div>

    <div class="comment expand">
      <div class="left">
        <!-- 评分 -->
        <div class="score">{{ commentBrief.overall }}分</div>
        <!-- 简评 -->
        <div class="title"> {{ commentBrief.scoreTitle }}</div>
        <!-- 推荐理由 -->
        <div class="brief">"{{ commentBrief.commentBrief }}"</div>
      </div>

      <div class="right">
        <!-- 评论数 -->
        <div class="more">{{ commentBrief.totalCount }}条评论 <van-icon name="arrow" /></div>
      </div>

    </div>

    <div class="location expand">
      <div class="left">
        <!-- 地址 -->
        <div class="address">{{ nearByPosition.address }}</div>
      </div>
      <div class="right">
        <!-- 周边 -->
        <div class="more">地图/周边 <van-icon name="arrow" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})
// console.log(props);

const houseTags = props.topInfos.houseTags
const commentBrief = props.topInfos.commentBrief
const nearByPosition = props.topInfos.nearByPosition


</script>

<style lang="less" scoped>
.infos {
  width: 100%;
  // padding: 12px 16px;
  background-color: #fff;

  .name {
    font-weight: 600;
    font-size: 16px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    margin-bottom: 8px;
    overflow: hidden;
    position: relative;
    padding: 12px 16px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
  }

  .tags {
    display: flex;
    flex-flow: row wrap;
    max-height: 18px;
    overflow: hidden;
    margin-bottom: 12px;
    padding: 0 16px;


    .tag1 {
      height: 14px;
      margin-right: 5px;
      margin-bottom: 3px;

      img {
        height: 18px;
      }
    }
  }

  .expand {
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 12px 0 0;
    // padding: 8px 12px 8px 0px;
    background-color: #f5f7fa;

    .left,
    .right {
      display: flex;

      .brief{
        margin-left: 15px;
      }

      .address {
        font-weight: 700;
      }

      .score {
        font-weight: 700;
      }

      .more {
        color: var(--primary-color);
      }
    }
  }
}
</style>
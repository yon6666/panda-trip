<template>
  <div class="comment">
    <div class="infos">
      <div class="score">
        <div class="overall">{{ commentModule.overall }}</div>
      </div>

      <div class="info">
        <div class="scoreTitle">{{ commentModule.scoreTitle }}</div>
        <div class="totalCount">{{ commentModule.totalCount }}条评论</div>
        <div class="star">
          <van-rate
            v-model="starValue"
            size="16px"
            color="#3cb490"
            readonly
            allow-half
          />
        </div>
      </div>

      <div class="tags">
        <template v-for="item in commentModule.subScoresFocus" :key="item.id">
          <div class="item">{{ scoreTitleStr(item.text, item.focusText) }}</div>
          <span class="count">{{ item.focusText }}</span>
        </template>
      </div>
    </div>

    <div class="commentTagVo">
      <template v-for="item in commentModule.commentTagVo" :key="item.id">
        <div
          class="item"
          :style="{ backgroundColor: item.backgroundColor, color: item.color }"
        >
          {{ item.text }}
        </div>
      </template>
    </div>

    <div class="usercontent">
      <div class="content">
        <div class="left">
          <div class="user">
            <!-- 头像 -->
            <div class="avatar">
              <img :src="commentModule.comment.userAvatars" alt="" />
            </div>
            <!-- 名称-日期 -->
            <div class="profile">
              <div class="name">{{ commentModule.comment.userName }}</div>
              <div class="date">{{ commentModule.comment.checkInDate }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 评论内容 -->
      <div class="text">
        {{ commentModule.comment.commentDetail }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  commentModule: {
    type: Object,
    default: () => ({}),
  },
});

const starValue = ref(props.commentModule.overall);

const scoreTitleStr = (item, number) => {
  const index = item.indexOf(number);
  // console.log(item, number, index);
  return item.substring(0, index);
};
</script>

<style lang="less" scoped>
.comment {
  padding: 10px 0;
  .infos {
    display: flex;

    .score {
      width: 65px;
      height: 100%;
      font-size: 48px;
      color: #333;
      font-weight: 600;

      .overall {
        font-size: 48px;
        position: relative;
        z-index: 1;
        align-content: center;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      margin-left: 18px;
      color: #333;
      font-size: 14px;
      font-weight: 500;

      .scoreTitle,
      .totalCount {
        margin-bottom: 5px;
      }
    }

    .tags {
      display: flex;
      flex: 1;
      // margin-left: 20px;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      overflow: hidden;
      font-size: 10px;
      justify-content: flex-end;

      .item {
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }

      .count {
        font-size: 12px;
        color: #333;
        font-weight: 600;
        line-height: 20px;
        margin-left: 5px;
      }
    }
  }

  .commentTagVo {
    margin: 10px 0;
    max-height: 32px;
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;

    .item {
      flex: 1;
      border-radius: 6px;
      font-size: 14px;
      padding: 8px 8px;
      margin: 0 4px 4px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }
  }

  .usercontent {
    .content {
      display: flex;
      justify-content: space-between;

      .left {
        .user {
          display: flex;

          .avatar {
            img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
            }
          }

          .profile {
            margin-left: 8px;

            .date {
              margin-top: 3px;
              font-size: 12px;
              color: #999;
            }

            .name {
              color: #333;
              font-weight: 600;
              margin-top: 3px;
            }
          }
        }
      }
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      line-height: 16px;
      color: #333;
    }
  }
}
</style>
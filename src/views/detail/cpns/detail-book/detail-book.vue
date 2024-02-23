<template>
  <div class="book">
    <!-- 入住规则 -->
    <div class="order">
      <template v-for="(item, index) in rulesModule.orderRules" :key="index">
        <div class="item">
          <div class="title">{{ item.title }}</div>
          <div
            class="if"
            v-if="item.icon !== null"
            :style="{ backgroundColor: item.color, color: '#fff' }"
          >
            {{ item.icon }}
          </div>
          <div>{{ item.introduction }}</div>
        </div>
      </template>
    </div>

    <!-- 取消规则 数据丢失-->
    <!-- <div class="cancel">
      <template v-for="(item) in props.rulesModule.cancelRules" :key="item.id">
        <div class="content">
          <div class="introduction">
            1
            {{ item.introduction }}
          </div>
          <div
            class="tip"
            :style="{ color: item.tipColor, backgroundColor: item.backColor }"
          >
            {{ item.tip }}
          </div>
        </div>
      </template>
    </div> -->

    <!-- 入住须知 -->
    <div class="checkIn">
      <div class="item">
        <div class="title">{{ rulesModule.checkInRules[0].title }}</div>
        <div class="content">
          <template
            v-for="(item, index) in rulesModule.checkInRules[0].items"
            :key="index"
          >
            <div class="content-item">
              <div class="icon">
                <div v-if="item.isDeleted">
                  <van-icon name="close" color="#ff6666" />
                </div>
                <div v-else><van-icon name="passed" color="#17d2bc" /></div>
              </div>
              <div class="text">
                {{ item.introduction }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- 额外须知 -->
    <div class="checkOther">
      <div class="item">
        <div
          class="title"
          v-if="rulesModule.checkinOtherInfo[0].title !== null"
        >
          {{ props.book.checkinOtherInfo.title }}
        </div>
        <div class="content">
          <template
            v-for="(item, index) in rulesModule.checkinOtherInfo[0].items"
            :key="index"
          >
            <div>{{ item.introduction }}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rulesModule: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;

  margin-top: 20px;
  font-size: 12px;
  line-height: 15px;

  .title {
    color: #666;
    width: 64px;
    height: 15px;
  }

  .content {
    color: #333;
  }
}

.book {
  .order {
    .if {
      margin-right: 4px;
      padding: 1px 4px;
      border-radius: 3px;
    }
  }

  .cancel {
    margin-top: 10px;
    display: flex;
    padding-left: 72px;
    flex-direction: column;
    .content {
      .introduction,
      .tip {
        display: flex;
        // align-content: center;
        // justify-content: center;
      }
    }
  }

  .checkIn {
    .content {
      display: grid;
      grid-template-columns: 100% 100%;

      .content-item {
        display: flex;
        margin-bottom: 5px;

        .icon {
          margin-right: 3px;
        }
      }
    }
  }

  .checkOther {
    .content {
      color: #666;
    }
  }
}
</style>
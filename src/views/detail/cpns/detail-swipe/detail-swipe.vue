<template>
  <div class="swipe">
    <van-swipe class="swipe-lsit" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="swipe-item">
          <img :src="item.url" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="index">
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              {{ nameReg(value[0].title) }}

              <!-- 局部计数 -->
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>

    <div class="promotion">特惠价格！</div>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 对数据进行转换，对数据进行分类曹祖
const swipeGroup = {}
// 生成key
// for(const item of props.swipeData) {
//   swipeGroup[item.enumPictureCategory] = []
// }

// // 生成value
// for(const item of props.swipeData) {
//   const valueArr = swipeGroup[item.enumPictureCategory]
//   valueArr.push(item)
//   console.log(valueArr);
// }

for (const item of props.swipeData) {
  let valueArr = swipeGroup[item.enumPictureCategory]
  if (!valueArr) {
    valueArr = []
    swipeGroup[item.enumPictureCategory] = valueArr
  }
  valueArr.push(item)
}

// 去除title中的【】和冒号
const nameReg = (name) => {
  return name.replace(/【|】|：/g, '')
}

// 获取item在分类组中的index
const getCategoryIndex = (item) => {
  const valueArr = swipeGroup[item.enumPictureCategory]
  // console.log(valueArr.findIndex(data => data === item));
  // console.log(item);
  return valueArr.findIndex(data => data === item) + 1
}

</script>

<style lang="less" scoped>
.swipe {
  .swipe-lsit {
    height: 250px;

    .swipe-item {
      img {
        width: 100%;
      }
    }

    .indicator {
      display: flex;
      position: absolute;
      justify-content: space-between;
      align-items: center;
      right: 16px;
      bottom: 20px;
      color: #fff;
      font-size: 12px;
      height: 16px;
      padding: 2px 5px;
      background-color: rgba(0, 0, 0, 0.8);
      // border-radius: 9px;
      span{
        justify-content: center;
        align-items: center;
      }

      .item {
        padding: 0 5px;
        margin-left: 5px;
        justify-content: center;
        align-items: center;

        &.active {
          background-color: #fff;
          color: #333;
          border-radius: 8px;
          justify-content: center;
          align-items: center;
          padding: 4px 2px;
        }
      }

      .item:last-child {
        margin-right: 5px;
      }
    }
  }

  .promotion {
    display: flex;
    width: 100%;
    height: 30px;
    background: #fff;
    color: #fff;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    background-size: 100% 100%;
    font-weight: 600;
    background-image: url(https://pic.tujia.com/upload/festatic/publicImages/big_promotion_bg.png);
  }
}
</style>
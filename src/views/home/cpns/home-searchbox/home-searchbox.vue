<template>
  <div class="search-box">
    <!-- 我的位置 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ selectedCity?.cityName }}</div>
      <div class="position" @click="positionClick">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/location.png" alt="">
      </div>
    </div>

    <!-- 日期选择 -->
    <div class="date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span>入住</span>
          <div class="time">{{ startDay }}</div>
        </div>
      </div>
      <div class="stay">共{{ stayDate }}晚</div>
      <div class="end">
        <div class="date">
          <span>离店</span>
          <div class="time">{{ endDay }}</div>
        </div>
      </div>
    </div>

    <!-- 日历 -->
    <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" color="#3cb490" />

    <!-- 价格/人数 -->
    <div class="price-counter">
      <div class="price">价格不限</div>
      <div class="people">人数不限</div>
    </div>

    <!-- 热门推荐 -->
    <div class="keyword">
      <span>关键字/位置/民宿名</span>
    </div>

    <!-- 热门推荐 -->
    <div class="hotSuggest">
      <template v-for="item in hotData" :key="item.id">
        <div class="hotItem">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索 -->
    <div class="searchBtn" @click="searchBtnClick">
      开始搜索
    </div>


  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import useCityStore from "@/store/modules/city";
import useHomeStore from '@/store/modules/home';
import useMainStore from '@/store/modules/main';
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { formatDate, getDiffDate } from "@/utils/format_date"
const router = useRouter();
const cityStore = useCityStore()
const homeStore = useHomeStore()
const mainStore = useMainStore()


// 点击获取城市位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取成功", res);
    // const latitude = res.coords.latitude; 
    // const longitude = res.coords.longitude;
  }, err => {
    console.log("获取失败", err);
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

// 城市切换
const cityClick = () => {
  router.push('./city');
}

// 当前城市
const { selectedCity } = storeToRefs(cityStore)

// 日期处理
const { startDate, endDate } = storeToRefs(mainStore)
const startDay = ref(formatDate(startDate.value))
const endDay = ref(formatDate(endDate.value))

watch(startDate,(newValue)=>{
  startDay.value=formatDate(startDate.value)
})
watch(endDate,(newValue)=>{
  endDay.value=formatDate(endDate.value)
})

const stayDate = ref(1)

// 日历
const showCalendar = ref(false);
const onConfirm = (value) => {
  // console.log(value);
  mainStore.startDate = value[0];
  mainStore.endDate = value[1];
  stayDate.value = getDiffDate(value[0], value[1]);
  // 隐藏日历
  showCalendar.value = false;
}

// 热门搜索建议
const { hotData } = storeToRefs(homeStore)

// 跳转至search页面
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      // 传递数据，响应式
      startDay: startDay.value,
      endDay: endDay.value,
      selectedCity: selectedCity.value.cityName
    }
  });
}
</script>

<style lang="less" scoped>
.search-box {
  .hotSuggest {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    margin-top: 10px;

    .hotItem {
      margin: 3px;
      padding: 4px 8px;
      font-size: 12px;
      background-color: #eeebeb;
      color: #3f4954;
      border-radius: 20px;
    }
  }

  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;

    .city {
      flex: 1;
      margin-left: 20px;
      font-size: 15px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }

    .position {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;

      .text {
        font-family: PingFangSC-Light;
        font-weight: 300;
        font-size: 12px;
        margin-right: 8px;
        color: #666;
      }

      img {
        width: 20px;
        margin-right: 20px;
      }
    }
  }

  .date-range {
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;

    span {
      text-align: left;
      line-height: 24px;
      font-family: PingFangSC-Regular;
      font-size: 10px;
      color: #999;
    }

    .time {
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 15px;
      color: #333;
    }

    .start {
      padding-left: 20px;
      justify-content: center;
      align-items: center;
    }

    .stay {
      justify-content: center;
      align-items: center;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #666;
    }

    .end {
      justify-content: center;
      align-items: center;
      min-width: 20%;
      padding-right: 20px;
    }
  }

  .price-counter {
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    line-height: 24px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999;
    border-bottom: 1px solid #eee;

    .price {
      justify-content: center;
      align-items: center;
      margin-left: 20px;
    }

    .people {
      justify-content: center;
      align-items: center;
      min-width: 20%;
      padding-right: 20px;
    }
  }

  .keyword {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    margin-top: 10px;
    height: 35px;
    border-bottom: 1px solid #eee;
  }

  .searchBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    font-size: 18px;
    color: #fff;
    border-radius: 20px;
    margin: 20px 20px;
    // 渐变色
    background-image: var(--theme-linear-gradient);
  }
}
</style>
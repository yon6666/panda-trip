<template>
  <div class="detail bar-hidden" ref="detailRef">
    <tab-control
      class="tabs"
      v-if="showTabControl"
      :titles="names"
      @tabItemClick="tabClick"
      ref="tabControlRef"
    />
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      clickable
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <div v-if="houseDetailData?.mainPart" v-memo="[houseDetailData?.mainPart]">
      <!-- 轮播图 -->
      <detail-swpie
        :swipeData="houseDetailData.mainPart.topModule.housePicture.housePics"
      />

      <!-- info -->
      <detail-info :topInfos="houseDetailData.mainPart.topModule" />

      <!-- 房屋设施  -->
      <detail-section
        name="设施"
        :ref="getSectionRef"
        :titleText="'房屋设施'"
        :moreText="'查看全屋设施'"
      >
        <detailFacility
          :houseFacility="
            houseDetailData.mainPart.dynamicModule.facilityModule.houseFacility
          "
        />
      </detail-section>

      <!-- 房东介绍  -->
      <detail-section
        name="房东"
        :ref="getSectionRef"
        :titleText="'房东介绍'"
        :moreText="'查看房东主页'"
      >
        <detailLandlord
          :landlordModule="
            houseDetailData.mainPart.dynamicModule.landlordModule
          "
        />
      </detail-section>

      <!-- 热门评论  -->
      <detail-section
        name="评论"
        :ref="getSectionRef"
        :titleText="'热门评论'"
        :moreText="`查看全部${houseDetailData.mainPart.dynamicModule.commentModule.totalCount}条评论`"
      >
        <detailComment
          :commentModule="houseDetailData.mainPart.dynamicModule.commentModule"
        />
      </detail-section>

      <!-- 预定须知  -->
      <detail-section name="须知" :ref="getSectionRef" :titleText="'预定须知'">
        <detailBook
          :rulesModule="houseDetailData.mainPart.dynamicModule.rulesModule"
        />
      </detail-section>

      <!-- 百度地图 -->
      <detail-section
        name="位置"
        :ref="getSectionRef"
        :titleText="'位置周边'"
        :moreText="'查看更多周边'"
      >
        <detailMap
          :positionModule="
            houseDetailData.mainPart.dynamicModule.positionModule
          "
        />
      </detail-section>

      <!-- 价格说明 -->
      <detail-section
        :titleText="houseDetailData.mainPart.introductionModule.title"
      >
        <detailIntro
          :introductionModule="houseDetailData.mainPart.introductionModule"
        />
      </detail-section>
    </div>

    <div class="footer">
      <div class="text">熊猫旅途, 祝您愉快</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import useDetailStore from "@/store/modules/detail";
import { storeToRefs } from "pinia";
import detailSwpie from "./cpns/detail-swipe/detail-swipe.vue";
import detailInfo from "./cpns/detail-info/detail-info.vue";
import detailSection from "./cpns/detail-section/detail-section.vue";
import detailFacility from "./cpns/detail-facility/detail-facility.vue";
import detailLandlord from "./cpns/detail-landlord/detail-landlord.vue";
import detailComment from "./cpns/detail-comment/detail-comment.vue";
import detailBook from "./cpns/detail-book/detail-book.vue";
import detailMap from "./cpns/detail-map/detail-map.vue";
import detailIntro from "./cpns/detail-intro/detail-intro.vue";
import TabControl from "@/components/tab-control/tab-control.vue";
import useScroll from "@/hooks/useScroll";

const route = useRoute();
// console.log(route);
const houseID = route.params.id;
// console.log(houseID);
const onClickLeft = () => history.back();

// getHouseDetail(houseID).then( res =>{
//   console.log(res);
// },err => {
//   console.log(err);
// }
// )

const detailStore = useDetailStore();
detailStore.fetchHouseDetail(houseID);
// 房屋详情数据
const { houseDetailData } = storeToRefs(detailStore);

// tabControl相关操作
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  // console.log(scrollTop.value);
  return scrollTop.value >= 300;
});

const sectionEls = ref({});
const names = computed(() => {
  return Object.keys(sectionEls.value);
});

const getSectionRef = (value) => {
  // console.log(value.$el);
  if (!value) return;
  const name = value.$el.getAttribute("name");
  // console.log(name);
  sectionEls.value[name] = value.$el;
  // sectionEls.push(value.$el);
};

// 判断用户是否是点击tabs
let isClick = false;
let currentDistance = -1;
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let distance = el.offsetTop;

  isClick = true;
  currentDistance = distance;
  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

// 页面滚动, 滚动时匹配对应的tabControll的index
const tabControlRef = ref();
watch(scrollTop, (newValue) => {
  if (newValue === currentDistance) {
    isClick = false;
  }
  if (isClick) return;

  // 1.获取所有的区域的offsetTops
  const els = Object.values(sectionEls.value);
  const values = els.map((el) => el.offsetTop);
  // console.log(els, values);

  // 2.根据newValue去匹配想要索引
  let index = values.length - 1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1;
      break;
    }
    1;
  }
  // console.log(index);
  tabControlRef.value?.setCurrentIndex(index);
});
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  .text {
    margin-top: 12px;
    font-size: 16px;
    color: #7688a7;
  }
}
</style>
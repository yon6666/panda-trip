<template>
  <div class="search-bar">
    <div class="date">
      <div class="strat">
        <span class="name">住</span>
        <span class="time">{{ startDay }}</span>
      </div>
      <div class="end">
        <span class="name">离</span>
        <span class="time">{{ endDay }}</span>
        <i> </i>
      </div>
    </div>
    <div class="search">
      <div class="keyword">关键字/位置/民宿名</div>
      <van-icon size="24px" color="#999" name="search"/>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';
import { storeToRefs } from 'pinia';
import { formatDate2 } from "@/utils/format_date"

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore)
const startDay = formatDate2(startDate.value)
const endDay = formatDate2(endDate.value)

</script>

<style lang="less" scoped>
.search-bar {
  border-radius: 6px;
  background: #f2f4f6;
  display: flex;
  height: 45px;

  .date {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;

    .strat,
    .end {
      margin-top: 4px;
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: row;

      .name {
        color: #999;
      }

      .time {
        margin: 0 3px;
        color: #000;
      }
    }
  }

  .search {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    font-size: 14px;
    color: #999;
  }
}
</style>
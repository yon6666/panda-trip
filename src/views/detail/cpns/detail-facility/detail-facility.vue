<template>
  <div class="facility">
    <template v-for="(itemIndex, index) in facilitySort" :key="index">
      <div class="item">
        <!-- 左侧title -->
        <div class="groupName">
          <img :src="houseFacilitys[itemIndex].icon" alt="">
          <div>{{ houseFacilitys[itemIndex].groupName }}</div>
        </div>

        <!-- 右侧详细,最多4个 -->
        <div class="nameList">
          <template v-for="(item, index2) in houseFacilitys[itemIndex].facilitys.slice(0, 4)" :key="index2">
            <div class="item2">
              <van-icon name="passed" color="#3cb490"/>
              <div class="name">{{ item.name }}</div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})

const facilitySort = props.houseFacility.facilitySort
const houseFacilitys = props.houseFacility.houseFacilitys

</script>

<style lang="less" scoped>
.facility {
  background-color: #f7f9fb;  color: #333;
  padding: 5px 16px 20px;
  border-radius: 6px;

  .item {
    display: flex;
    align-items: center;
    padding-top: 7px;
    // width: 90px;
    // background-color: green;
    justify-content: flex-start;

    .groupName {
      display: flex;
      width: 90px;
      flex-direction: column;
      align-items: center;
      white-space: nowrap;
      font-weight: 600;
      font-size: 11px;
      margin-top: 3px;
      align-items: center;

      img {
        width: 25px;
        height: 25px;
      }
    }

    .nameList {
      display: grid;
      grid-template-columns: 50% 50%;
      width: 100%;

      .item2 {
        display: flex;
        width: 110px;
        height: 14px;
        margin-top: 7px;

        .name {
          margin-left: 3px;
        }
      }
    }
  }
}
</style>
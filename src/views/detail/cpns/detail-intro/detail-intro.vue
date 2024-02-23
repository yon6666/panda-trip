<template>
  <div class="intro">
    <div class="content">
      {{ props.introductionModule.introduction }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  introductionModule: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.intro {
  padding: 0px 12px;
  border-top: 5px solid #f2f3f4;
  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>
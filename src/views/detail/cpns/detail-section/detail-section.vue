<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ titleText }}</h2>
    </div>
    <div class="content">
      <slot>默认内容</slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <span class="more">
        {{ moreText }}
        <van-icon name="arrow" />
      </span>

    </div>
  </div>
</template>

<script setup>
defineProps({
  titleText: {
    type: String,
    default: "默认标题props"
  },
  moreText: {
    type: String,
    default: ""
  }
})
</script>

<style lang="less" scoped>
.section {
  margin-top: 10px;
  padding: 0 16px;
  border-top: 10px solid #eee;

  .header {
    height: 52px;
    line-height: 52px;

    .title {
      color: #333;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .content {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 0 16px;
    color: var(--primary-color);
    font-weight: 600;
  }
}
</style>
<template>
  <div class="baidu" ref="mapRef">map</div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  positionModule: {
    type: Object,
    default: () => ({}),
  },
});

const mapRef = ref();

onMounted(() => {
  const map = new BMapGL.Map(mapRef.value); // 创建地图实例
  const point = new BMapGL.Point(
    props.positionModule.longitude,
    props.positionModule.latitude
  ); // 创建点坐标
  map.centerAndZoom(point, 15);
  const marker = new BMapGL.Marker(point); // 创建标注
  map.addOverlay(marker);
});
</script>

<style lang="less" scoped>
.baidu {
  height: 300px;
}
</style>
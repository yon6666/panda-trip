export const getAssetUrl = (image) => {
  // 相对路径，当前文件路径
  return new URL(`../assets/img/tabbar/${image}`, import.meta.url).href
}
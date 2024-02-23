import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";
import { throttle } from "underscore";

// 封装滚动到底部自动加载的函数
export default function useScroll(elRef) {
  // 默认监听window
  let el = window;

  // 初始默认为没有到底
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);

  const scrollListener = throttle(() => {
    // console.log("正在滚动");

    if (el === window) {
      // 文档距离窗口顶部的距离
      scrollTop.value = document.documentElement.scrollTop;
      // 页面总体长度
      scrollHeight.value = document.documentElement.scrollHeight;
      // 屏幕的长度
      clientHeight.value = document.documentElement.clientHeight;
    } else {
      // 元素距离窗口顶部的距离
      scrollTop.value = el.scrollTop;
      // 元素距离窗口顶部的距离总体长度
      scrollHeight.value = el.scrollHeight;
      // 元素的长度
      clientHeight.value = el.clientHeight;
      // console.log(scrollTop.value, scrollHeight.value, clientHeight.value);
    }
    if (clientHeight.value + scrollTop.value + 0.1 >= scrollHeight.value) {
      // homeStore.fetchAllHouse();
      console.log("加载更多");
      isReachBottom.value = true;
    }
  }, 500);

  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }
    el.addEventListener("scroll", scrollListener);
  });

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListener);
  });

  return { isReachBottom, scrollTop, scrollHeight, clientHeight };
}

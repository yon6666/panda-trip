// 此文件保存所有home页面的网络请求
import PTRequest from "@/service/request";

export function getHotSuggest() {
  // request的index导出的是一个对象
  return PTRequest.get({
    // 参数也是一个对象
    url: "/home/hotSuggests",
  });
}

export function getCategory() {
  // request的index导出的是一个对象
  return PTRequest.get({
    // 参数也是一个对象
    url: "/home/categories",
  });
}

export function getHouseList(houseIndex) {
  return PTRequest.get({
    url: "/home/houselist",
    params: {
        page: houseIndex
    },
  });
}

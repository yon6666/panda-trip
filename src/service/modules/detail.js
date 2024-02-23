import PTRequest from "@/service/request";

export function getHouseDetail(houseId) {
  return PTRequest.get({
    url: '/detail/infos',
    params: {
      houseId: houseId, // houseId值,可以省略为houseId
    },
  })
}
import PTRequest from "@/service/request";

export  function getAllCity() {
  return PTRequest.get({
    url: "/city/all",
  })
}

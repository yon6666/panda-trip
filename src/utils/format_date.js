import dayjs from "dayjs";

//统一时间格式 xx月xx日 
export function formatDate(date) {
  return dayjs(date).format("MM月DD日");
}

export function formatDate2(date) {
  return dayjs(date).format("MM.DD");
}

// 计算入住和离店的时间差（天数）
export function getDiffDate(start, end) {
  // console.log(start,end);
  return dayjs(end).diff(start, "day");
}

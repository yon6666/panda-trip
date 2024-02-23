import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/store/modules/main";

const mainStore = useMainStore();

class PTRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 请求拦截
    this.instance.interceptors.request.use(
      config => {
        // 发送请求之前做的事
        mainStore.showLoading = true;
        return config;
      },
      err => {
        // 请求失败做的事
        console.log(err);
        return err;
      }
    );

    this.instance.interceptors.response.use(
      res => {
        // 请求成功做的事
        mainStore.showLoading = false;
        return res;
      },
      err => {
        // 请求失败做的事
        mainStore.showLoading = false;
        console.log(err);
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new PTRequest(BASE_URL, TIMEOUT);

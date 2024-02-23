import { createRouter, createWebHashHistory } from "vue-router";
// 路由配置
const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path -> componen
  routes: [
    {
      path: "/",
      redirect: "/home", //重定向
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
      meta: {
        hideTabBar: true
      }
    }

  ],
});

export default router;

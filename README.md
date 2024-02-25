## 项目简介

熊猫旅途项目包含从首页浏览房子，房子详情，查看评价等功能(功能完善中)。

### 技术栈

- 前端框架：(Vue3 + vite)
- 状态管理：[pinia](https://pinia.vuejs.org/zh/)
- 组件库：[vant4](https://vant-contrib.gitee.io/vant/#/zh-CN/home)


## 运行程序

1. 安装依赖
# npm
npm i --registry=https://registry.npmmirror.com


2. 运行程序
npm run dev


# 工程结构解析

```
├── .husky                     # Git Hooks
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── assets                 # 静态资源
│   ├── components             # 全局组件
│   └── hooks                  # 全局函数
│   │    └── useScroll           # 初始化页面大小等
│   ├── router                 # 路由配置
│   └── service                # api接口相关
│   │    ├── modules             # 各模块相关接口
│   │    └── index               # axios实例配置
│   └── store                  # pinia状态管理
│   │    └── modules             # 各模块相关状态
│   ├── utils                  # 全局样式
│   └── views                  # 主包页面
│       ├── city                # 城市分类
│       ├── detail              # 房屋详情
│       ├── favor               # 收藏页
│       ├── home                # 首页
│       ├── order               # 订单页
│       └── message             # 信息页
│   ├── utils                  # 通用工具类
│   ├── App.vue                # 入口页面
│   └── main.ts                # Vue初始化入口文件
├── .editorconfig              # editorconfig 配置
├── .eslintrc.cjs              # eslint 配置
├── .prettierrc.json           # prettier 配置
├── .gitignore                 # git 忽略文件
├── index.html                 # H5 端首页
├── package.json               # package.json 依赖
└── vite.config.ts             # vite 配置
```

# 部分页面截取
## 首页
![Alt text](README_files/1.png)
![Alt text](README_files/8.jpg)

## 城市选择
![Alt text](README_files/4.jpg)
![Alt text](README_files/7.jpg)

## 房屋详情
![Alt text](README_files/2.jpg)
![Alt text](README_files/3.jpg)
 
## 加载页面
![Alt text](README_files/6.jpg)

## 热门评论
![Alt text](README_files/5.jpg)


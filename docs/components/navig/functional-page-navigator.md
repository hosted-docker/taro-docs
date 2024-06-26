---
title: FunctionalPageNavigator
sidebar_label: FunctionalPageNavigator
---

仅在插件中有效，用于跳转到插件功能页

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html)

## 类型

```tsx
ComponentType<FunctionalPageNavigatorProps>
```

## FunctionalPageNavigatorProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| version | `keyof Version` | `"release"` | 否 | 跳转到的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版）；线上版本必须设置为 release |
| name | `keyof Name` |  | 否 | 要跳转到的功能页 |
| args | `object` |  | 否 | 功能页参数，参数格式与具体功能页相关 |
| onSuccess | `CommonEventFunction` |  | 否 | 功能页返回，且操作成功时触发， detail 格式与具体功能页相关 |
| onFail | `CommonEventFunction` |  | 否 | 功能页返回，且操作失败时触发， detail 格式与具体功能页相关 |
| onCancel | `CommonEventFunction` |  | 否 | 因用户操作从功能页返回时触发 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| FunctionalPageNavigatorProps.version | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.name | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.args | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.onSuccess | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.onFail | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.onCancel | ✔️ |  |  |  |

### Version

version 的合法值

| 参数 | 说明 |
| --- | --- |
| develop | 开发版 |
| trial | 体验版 |
| release | 正式版 |

### Name

name 的合法值

| 参数 | 说明 |
| --- | --- |
| loginAndGetUserInfo | [用户信息功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/user-info.html) |
| requestPayment | [支付功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/request-payment.html) |
| chooseAddress | [收货地址功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/choose-address.html) |

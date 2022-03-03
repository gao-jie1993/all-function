import { navigateTo } from "../../utils/util.js"
const app = getApp()
const caseList = [
  {
    caseName: "抽奖",
    page: "/pages/luckyDraw/index"
  },
  {
    caseName: "动画",
    page: "/pages/luckyDraw/index"

  },
  {
    caseName: "调查问卷",
    page: "/pages/luckyDraw/index"
  },
]
Page({
  data: {
    caseList
  },
  onLoad() {},
  handleJumpPage(e) {
    console.log(e)
    const { page } = e.currentTarget.dataset.item;
    navigateTo(page)
    // wx.navigateTo({
    //   url: page
    // })
  },

})

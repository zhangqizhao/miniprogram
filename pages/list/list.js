// pages/list/list.js
const { baseUrl, changeBase64ToJson } = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    bankList: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 300
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: '办信用卡'
    // })
    let params = encodeURIComponent(JSON.stringify({
      bizParams: {
        mode: 1,
        id: '',
        belongBankNo: '',
        isDeleted: 0,
        isRecommended: 2,
        isSmart: 0
      }
    }));

    wx.request({
      method: 'GET',
      url: `${baseUrl.dev}/page-info/index?${params}`,
      success: (res) => {
        let newData = changeBase64ToJson(res.data)
        this.setData({
          list: newData.data.indexWebPageConfigs,
          bankList: newData.data.indexAllBanks
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
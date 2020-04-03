// pages/kind/kind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    protype:null,
    goodslist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  tosearch:function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  changetype:function (e) {
    var that = this
    console.log(e.detail.index)
    if (e.detail.index === 0) {
      e.detail.index = ''
    } else {
      e.detail.index = e.detail.index * 1 + 1
    }
    wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/goodstype?pro_type=' + e.detail.index,
      success (res) {
        // console.log(res.data.data)
        that.setData({
          goodslist: res.data.data
        })
      }
    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '玩命加载中'
    })
    var that = this
    const protype = protype || ''
    wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/goodstype?pro_type=' + protype,
      success(res) {
        wx.hideLoading()
        that.setData({
          goodslist: res.data.data
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

  }
})
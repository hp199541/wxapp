// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchlist:[],
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */

  searchdetail:function (e) {
    // console.log(e.detail)
    var that = this
    wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/searchitem?message=' + e.detail,
      success (res) {
        // console.log(res.data.data !== 0)
        if (res.data.data.length !== 0) {
          that.setData({
            searchlist: res.data.data,
            show:true
          })
        }else {
          that.setData({
            show: false
          })
        }
       
      }
    })
  },
  onLoad: function (options) {

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
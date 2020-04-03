// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    addresslist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },

  onClick(event) {
    const { name } = event.currentTarget.dataset;
    console.log(name)
    this.setData({
      radio: name
    });
    wx.reLaunch({
      url: '../car/car?addressid='+name,
    })
  },

  onLoad: function (options) {
    const user_id = user_id || 1
    var that = this
    wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/address?user_id='+ user_id,
      success(res) {
        console.log(res.data.data.function)
        that.setData({
          addresslist: res.data.data.function
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
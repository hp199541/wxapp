// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentGood:[],
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 事件处理函数
  onClickButton:function () {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  onChangenum(event) {
    console.log(event.detail);
  },

  addtocar:function () {
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    }).then(() => {
      console.log(2)
    })
  },
  onLoad: function (options) {
    var that = this;
    // console.log(options.id)
     wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/godetail?pro_id=' + options.id,
      success(res) {
        // console.log(res.data.data.function[0])
        that.setData({
          currentGood: res.data.data.function[0]
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
//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proid:'',
    goodsData:[],
    typeData:[],
    imgUrl: [
      "../../static/images/nav.jpg",
      "../../static/images/111.jpg",
      "../../static/images/114.jpg"
    ],
    listitem: [
      '', '', '', ''
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  tosearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  godetail:function(e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id
    })
  },
  Addtocar:function (e) {
    console.log(e)
    wx.reLaunch({
      url: '../car/car?pro_id=' + e.currentTarget.id
    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '玩命加载中'
    })
    var that = this
    wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/wxapi',
      success(res){
        // console.log(res.data.data.name)
        that.setData({
          typeData: res.data.data.name
        })
      }
    })
    wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/allgoods',
      success(res) {
        // console.log(res.data.data.data)
        wx.hideLoading()
        that.setData({
          goodsData: res.data.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this)
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
    // wx.showNavigationBarLoading() 
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
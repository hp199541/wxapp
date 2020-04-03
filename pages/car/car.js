// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: ['1'],
    addressid:'',
    show:true,
    addresslist: [], 
    carlist:[],
    checked:true,
    checkedAll:true,
    allprice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  chooseall(event) {
    console.log(event)
    this.setData({
      checkedAll: event.detail,
      checked: event.detail
    });
  },
  onChangenum: function (event) {
    console.log(event.detail);
  },
  chooseitem(event) {
    this.setData({
      checked: event.detail,
      checkedAll: event.detail
    });
  },
  onChange(event) {
    wx.navigateTo({
      url: '../address/address',
    })
  },

  onLoad: function (options) {
    var that = this
    // console.log('pro_id', options)
    const { addressid, pro_id } = options
    // const pro_id = options.currentTarget.id
    wx.request({
      url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/chooseaddress?address_id=' + addressid,
      success(res) {
        // console.log(res.data.data.function)
        that.setData({
          addresslist: res.data.data.function
        })
      }
    })
    if (addressid) {
      this.setData({
        show:false
      })
    }
 
    if (pro_id) {
      wx.request({
        url: 'http://mock.studyinghome.com/mock/5e82d100b7c2346b3c48c15f/mock/cartlist?pro_id=' + pro_id,
        success(res) {
          console.log(res.data.data[0])
          that.setData({
            carlist: res.data.data,
            allprice: res.data.data[0].pro_price * 100
          })
        }
      })
    }
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
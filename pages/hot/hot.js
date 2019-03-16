var common = require('../../lib/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],
    pages: 0,
    count: 10,
    hasMoreData: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.getDatas({
      'msg': '加载数据中',
      'code': 'in_theaters',
      'pages': this.data.pages,
      'count': this.data.count
    }, this.success);
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    common.getDatas({
      'msg': '正在刷新数据',
      'code': 'in_theaters',
      'pages': this.data.pages,
      'count': this.data.count
    }, this.success);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.hasMoreData) {
      this.data.pages += this.data.count;
      common.getDatas({
        'msg': '加载更多数据',
        'code': 'in_theaters',
        'pages': this.data.pages,
        'count': this.data.count
      }, this.success);
    } else {
      wx.showToast({
        title: '没有更多数据',
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 数据成功回调
   */
  success: function (res) {
    this.setData({
      // datas: that.data.datas.push.apply(that.data.datas, res.data.subjects)
      datas: this.data.datas.concat(res.data.subjects)
    });
    if (this.data.pages >= res.data.total - this.data.count) {
      this.setData({
        hasMoreData: false
      })
    }
  }




})
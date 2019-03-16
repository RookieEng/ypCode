// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],
    videoSrc:'',
    isVideo:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id,
      header: { "content-type": "application/xml" },
      success: this.success,
      fail: function () {
        wx.showToast({
          title: '加载数据失败',
          icon: none
        })
      },
      complete: function () {
        wx.hideLoading();
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
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
  /**
   * 数据成功回调
   */
  success: function (res) {
    this.setData({
      datas: res.data
    });
  },
  paly:function(e){
    var src = e.target.dataset.url.split(":");
    var vSrc = src[0] + 's:' + src[1];
    this.setData({
      videoSrc: e.target.dataset.url,
      isVideo: true
    });
  },
  palyAll: function (e) {
    var src = e.target.dataset.url.split(":");
    var vSrc = src[0] + 's:' + src[1];
    this.setData({
      videoSrc: e.target.dataset.url,
      isVideo: true
    });
  },
  videoEnd: function () {
    this.setData({
      isVideo: false
    });
  },
  videoError: function () {
    wx.showToast({
      title: '播放失败',
      icon: none
    })
  }
})
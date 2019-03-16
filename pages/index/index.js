var common = require('../../lib/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],
    pages: 0,
    count: 10,
    name: '沈腾',
    swiper:[],
    btnClick: true,
    indexDatas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    common.getDatas({
      'msg': '加载数据中',
      'code': 'coming_soon',
      'pages': 0,
      'count': 5
    }, this.success);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 数据成功回调
   */
  search: function(e) {
    var that = this;
    if (this.data.name == '') {
      that.setData({
        btnClick: true
      });
      return;
    }
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/search',
      header: {
        "content-type": "application/xml"
      },
      data: {
        tag: this.data.name
      },
      success: function(res) {
        that.setData({
          datas: res.data.subjects,
          btnClick: false
        });
      },
      fail: function() {
        wx.showToast({
          title: '加载数据失败',
          icon: none
        })
      },
      complete: function() {
        wx.hideLoading();
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })
  },
  getMoviesName: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  success: function (res) {
    this.setData({
      swiper: res.data.subjects
    })
  },
  jump: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id='+e.target.dataset.id
    })
  }




})
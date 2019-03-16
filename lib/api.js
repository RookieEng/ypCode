var getDatas = (obj,success) => {
  wx.showLoading({
    title: obj.msg,
  })
  wx.request({
    url: 'https://douban.uieee.com/v2/movie/' + obj.code,
    header: { "content-type": "application/xml" },
    data: { start: obj.pages, count: obj.count },
    success:success,
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
}





module.exports = {
  getDatas: getDatas
}

/**
 * index.js
*/
let times = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:3,
    mounth:"",
    timeStr:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    times = setInterval(_=>{
      const count = this.data.count
      if(count==1){
        this.handleOverEvent()
      }
      this.setData({
        count:count-1
      })
    },1000)
    this.getDate()
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
//  页面事件
  handleOverEvent(){
    clearInterval(times)

    // 判断小程序是否登录
    const loginInfo = wx.getStorageSync("loginInfo")
    if(loginInfo){ 
      wx.reLaunch({
        url: '/pages/index/index',
      });
    }else{
      wx.redirectTo({
        url: '/pages/login/index'
      })
    }
  },
  getDate(){
    const now = new Date()
    const mounth = now.getMonth()+1
    const day = now.getDate()
    const numTxtList = ["一","二","三","四","五","六","七","八","九","十","十一","十二"]
    this.setData({
      timeStr:`${mounth}/${day}`,
      mounth:numTxtList[mounth-1]
    })
  }
})
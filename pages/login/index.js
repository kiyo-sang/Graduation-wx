// pages/login/index.js
const app=getApp()
const { login } = require('../../utils/api')

// pages/regist/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // username: '',
        // id: '',
        userInfo: {},
    },

   
    //获取登录信息
    // getResult:(res)=>{
    //     if(res.data.status===0){
    //         this.setData(
    //             {userInfo:res.data.data}
    //         )
    //         wx.showToast({
    //             title: "登录成功",
    //             duration: 2000
    //             })
    //         wx.switchTab({
    //             url: '../../pages/index/index.wxml',
    //         })
    //         setTimeout(function () {
    //         wx.navigateBack({
    //             delta: 2
    //         })
    //         }, 1000)
    //     }else{
    //         wx.showToast({
    //             title: res.data.msg,
    //             icon: 'none',
    //             duration: 3000
    //             })
    //             setTimeout(function () {
    //             wx.navigateBack({
    //                 delta: 2
    //             })
    //             }, 1000)
    //     }
    // },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

     // 登录
     create_login:(e)=>{
        var that = this
        wx.request({
            url: app.globalData.req_url+'/user/login',
            // url: 'http://localhost:8080/user/login',
            method:"POST",
            data:e.detail.value,
            success:(res)=>{
                if(res.data.status===0){
                    that.setData(
                        {userInfo:res.data.data }
                    )
                    console.log(res.data)
                    wx.showToast({
                        title: "登录成功",
                        duration: 2000
                        })
                    wx.switchTab({
                        url: '../../pages/index/index',
                    })
                    setTimeout(function () {
                    wx.navigateBack({
                        delta: 2
                    })
                    }, 1000)
                }else{
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 3000
                        })
                        setTimeout(function () {
                        wx.navigateBack({
                            delta: 2
                        })
                        }, 1000)
                    }
            }
          })

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        


        // login(this.data.username,this.data.password).then((res) =>{
        //     console.log(res.data)
        //     this.setData(
        //       {userInfo:res.data}
        //   ) 
        // })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }


})
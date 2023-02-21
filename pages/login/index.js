// pages/login/index.js
const app=getApp()
const { login } = require('../../utils/api')

// pages/regist/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username:"13211112222", //符合手机号或者邮箱规则
        password:"aa112233", //以字母_开头 数字/字母 6-10位
        loginStatus:true
    },
    //输入事件
    setInputVal(e){
        const key = e.currentTarget.dataset.key
        const value = e.detail.value
        const obj={}
        obj[key]=value
        this.setData(obj)
    },
    //切换登录和注册状态
    handleSwitchStatus(){
        this.setData({
          loginStatus:!this.data.loginStatus
        })
    },

    //注册
    handleLR(){
        // 正则验证
        const phoneReg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/  //手机
        const emailReg=/^[0-9a-zA-Z_]+@[0-9a-zA-Z_]+(\.[0-9a-zA-Z_]+)+$/  //邮箱 xxx@xxx.c123.a.s.cn
        const passwordReg=/^[a-zA-Z_][0-9a-zA-Z_]{5,9}$/  //密码6-10位
        const u = this.data.username
        const p = this.data.password
        if(!phoneReg.test(u)&&!emailReg.test(u)){
          wx.showToast({
            title: '请输入符合规则的用户名',
            icon: 'none'
          });
          return
        }
        if(!passwordReg.test(p)){
          wx.showToast({
            title: '请输入符合规则的密码',
            icon: 'none'
          });
          return
        } 
        const params={
          userName:this.data.username,
          userPassword:this.data.password
        }
        if(this.data.loginStatus){
          this.loginFun(params)
        }else{
          this.registFun(params)
        }
      },

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
// pages/community/index.js
const { selectAll } = require('../../utils/api')

const citys = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州'],
  };
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        let typeList = {}

        selectAll().then(res => {
            typeList = this.expansion(res.data)
            console.log(typeList);
        })
    },

    expansion(data, typeList = {}, num = '') {
        data.forEach(item => {
            // if(num === '') {
            //     typeList[item.类型名称] = []
            // } else {
            //     typeList[num].push(item.类型名称)
            // }
            if(item.subMenuType && item.subMenuType.length !== 0) {
                if(typeList[num]) {
                    typeList[num][item.类型名称] = []
                } else {
                    typeList[item.类型名称] = []
                }
                
                this.expansion(item.subMenuType, typeList, item.类型名称)
            } else {
                typeList[num].push(item.类型名称)
            }
        });
        return typeList
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
// pages/add/index.js

const citys = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州'],
  };
Page({

    /**
     * 页面的初始数据
     */
    data: {
        recipe: {
            name: '',
            typeid: '不辣的菜',
            content: ''
        },
        isOpenPicker: false,
        columns: [
            {
              values: Object.keys(citys),
              className: 'column1',
            },
            {
              values: citys['浙江'],
              className: 'column2',
              defaultIndex: 2,
            },
          ],
    },

    onChangePicker(event) {
        const { picker, value, index } = event.detail;
        picker.setColumnValues(1, citys[value[0]]);
        console.log(value[1]);
    },

    onPickerConfirm(event) {
        const { picker, value, index } = event.detail;
        console.log(event);
        const obj={...this.data}
        obj.recipe.typeid=value
        this.setData(obj)
    },

    onPickerCancel() {
        this.setData({
            isOpenPicker: !this.data.isOpenPicker
        })
    },

    onChange(e) {
        // event.detail 为当前输入的值
        const key = e.currentTarget.dataset.key
        const value = e.detail
        const obj={...this.data}
        obj.recipe[key]=value
        this.setData(obj)
    },

    submit () {
        console.log(this.data.recipe, this.data.name1);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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
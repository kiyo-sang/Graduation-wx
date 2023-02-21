const App = getApp()
const baseUrl = App.globalData.req_url;

module.exports = {
    /**
     * 二次封装wx.request
     * url:请求的接口地址
     * method:请求方式 GET,POST....
     *  data:要传递的参数
     *isSubDomain:表示是否添加二级子域名 true代表添加, false代表不添加
     */
    request: (url, method, data, header={},) => {
        // console.log('这是我封装的ajax请求', baseUrl);
      	//这里使用ES6的写法拼接的字符串
        let _url = `${baseUrl}${url}`;
        return new Promise((resolve, reject) => {
			wx.showLoading({
				title: '正在加载',
			});
            wx.request({
                url: _url,
                data: {...data},
                method,
                header: {
                    ...header,
                //'content-type': 'application/x-www-form-urlencoded',
                'content-type': 'application/json;charset=UTF-8'
                },
                success: (res) => {
                    console.log('从接口获取到的数据', res);
					let { status } = res.data;
					if(status===0) {
						resolve(res.data);
					}else {
						wx.showToast({
							title: '数据请求错误',
                        })
                        reject(res)
                    }
                    setTimeout(_=>{
                        wx.hideLoading();
                    },500)
                },
				fail(err) {
                    wx.hideLoading();
                    console.log("err!!!!",err)
                    wx.showToast({
                        icon:"none",
                        title: '请求失败',
                    });
					reject(err)
				}
            });
			
        });
    },
    //GET请求，不需传参，直接URL调用，params:{city:'北京'}
//     getDataForParam:(url, params,doSuccess, doFail) {
//     wx.request({
//       url: baseUrl + url,
//       data: params,
//       header: {
//         "content-type": "application/json;charset=UTF-8"
//       },
//       method: 'GET',
//       success: function (res) {
//         doSuccess(res.data);
//       },
//       fail: function () {
//         doFail();
//       },
//     })
//   },
}


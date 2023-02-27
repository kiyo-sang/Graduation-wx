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
        let token = wx.getStorageSync("token") || '';
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
                'cookie':token,//读取cookie
                'content-type': 'application/json;charset=UTF-8'
                },
                success: (res) => {
                    console.log('从接口获取到的数据', res);
                    if(res.cookies.length > 0) {
                        let cookie = parse(/([^=;\s]+)=([^;]+);?/g, res.cookies[0].replace(/; httponly/g, "$&=true"));
                        wx.setStorageSync("token", 'JSESSIONID=' + cookie.JSESSIONID)
                    }
					let { status } = res.data;
					if(status===0) {
						resolve(res.data);
					} else {
                        if (status === 10) {
                            wx.redirectTo({
                                url: '/pages/login/index'
                              })
                        }
						wx.showToast({
                            title: res.data.msg,
                            icon: 'none'
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
}
function parse(reg, text) {
    if (!reg || !text) return {}
    const hash = {};
    let res = reg.exec(text);
    while (res !== null) {
        hash[res[1]] = res[2];
        res = reg.exec(text);
    }
    return hash;
}


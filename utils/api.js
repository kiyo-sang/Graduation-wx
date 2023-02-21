//引入封装的reuest请求
import{ request } from './request'
//基于业务封装的接口
module.exports={

    /* 轮播图 */
    EveryDayList: ()=>{
        return request('/EveryDay/list', 'GET', {});
    },
	// getBanner:()=>{
	// 	return request('','GET',{});
    // },
    
	/* 封装商品列表的方法 */
	// getGoodsList:()=>{
	// 	return request('要请求的路径','请求方式|GET|POST',{要携带的参数},是否添加子域名 |true|false);
	// },
	/* 添加商品收藏 */
	// addGoodsFav: (goodsId, token)=>{
	// 	return request('要请求的路径', 'POST', { goodsId:goodsId, token:token},true);
	// },
	/* 获取商品的分类 */
	// getGoodsCate:()=>{
	// 	return request('要请求的路径','GET',{},true);
    // },

    // login
    login: (username,password)=>{
        return request('/user/login/'+keyword, 'POST', {username:username, password:password});
    },
    
    // searchByType
    searchByType: (typeId)=>{
        return request('/menus/searchByType?menuTypeId='+typeId, 'GET', {});
    },

    searchByKeyword: (keyword)=>{
        return request('/menus/searchByKeyword/'+keyword, 'GET', {});
    }
}



const PROXY = 'ele/';

//获取首页滚动视图分类信息
const GET_HOME_KINDS = "shopping/v2/entries?latitude=31.96229&longitude=118.85465&templates[]=main_template";

//获取首页推荐
let GET_HOME_RECOMMEND = function(offset,limit){
	
	return "shopping/restaurants?latitude=31.96229&longitude=118.85465&offset=" + offset + "&limit=" + limit + "&extras[]=activities&terminal=h5";
	
}




export default {
	PROXY,
	GET_HOME_RECOMMEND,
	GET_HOME_KINDS
}



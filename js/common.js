/*
 * 20181015 guo
 * 公共js
 */

$(function(){
	
});
//格式化全部选项
function allType(str){
	if(str == "全部"){
		return ""
	}else{
		return str;
	}
}
//获取传值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
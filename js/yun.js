$(document).ready(function(){
	$(".category-head-list-right>li").click(function(){
		var _index=$(".category-head-list-right>li").index(this);
		console.log(_index);
		$(".category-head-list-right>li").removeClass("col")
		$(".category-head-list-right>li").eq(_index).addClass("col")
	})
	//列表2点击事件
	$(".category-head-list-right02>li").click(function(){
		var _index=$(".category-head-list-right02>li").index(this);
		console.log(_index);
		$(".category-head-list-right02>li").removeClass("col")
		$(".category-head-list-right02>li").eq(_index).addClass("col")
	})
	
})

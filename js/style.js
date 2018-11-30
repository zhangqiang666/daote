 $(document).ready(function(){
 	
//地址判断，自动匹配
var url='http://' + (location.host === "www.dianyitai.cn" ? "www.dianyitai.cn" : '1nau3jkekkbqsfxu.dianyitai.cn') + '/api/'
var imgurl='http://' + (location.host === "www.dianyitai.cn" ? "www.dianyitai.cn" : '1nau3jkekkbqsfxu.dianyitai.cn') + '/uploads/'


//测试地址
// 	var url="http://1nau3jkekkbqsfxu.dianyitai.cn/api/"
// 	var imgurl="http://1nau3jkekkbqsfxu.dianyitai.cn/uploads/"
//线上地址
// 	var url="http://www.dianyitai.cn/api/"
// 	var imgurl="http://www.dianyitai.cn/uploads/"
 	localStorage.setItem("url",url)
 	localStorage.setItem("imgurl",imgurl)
 	console.log(localStorage.getItem("url"));
 	  
 	/*$(".icon-header").hide();
 	$(".head-div").click(function(){
 		$(".icon-header").toggle();
 		 
 	})*/
 	  
 	/*$("#head ul li").hover(function(){
 		$(".border-home").hide()
 	    var _index=$("#head ul li").index(this)
 	      var _home=$(this).index(this)
 	      console.log(_index)
 		$(".border-home").eq(_index).show()
 	})*/
 	$(".foot-img img").hide();
 	$(".foot-two img").hover(function(){
 	 
 		$(".foot-img img").toggle();
 	})
 	            //登录后显示用户名
 	 	        var phonelogin=localStorage.getItem("phone")
 	 	        console.log(phonelogin)
 	 	        if(phonelogin==null){ 
  	            $('.active-a').empty();
	 	        var html="";
	 	         
	 	        html+='<span>登录</span>'
	 	        $('.active-a').html(html);
	 	        }else{
	 	        	 $('.active-a').empty();
	 	        var html="";
	 	         
	 	        html+='<span>'+phonelogin+'</span>'
	 	        $('.active-a').html(html);
	 	        }
  
//轮播图触摸事件
	 
//				var startX,endX;//声明触摸的两个变量
//				var offset = 30;//声明触摸距离的变量
//				$('.carousel-inner').on('touchstart',function (e) {
//					startX= e.originalEvent.touches[0].clientX;//当触摸开始时的x坐标；
//				});
//				$('.carousel-inner').on('touchmove',function (e) {
//					endX = e.originalEvent.touches[0].clientX;//当触摸离开时的x坐标；
//				});
//				$('.carousel-inner').on('touchend',function (e) {
//					//当触摸完成时进行的事件；
//					var distance = Math.abs(startX - endX);//不论正负，取值为正值；
//					if (distance > offset){
//					    if(startX > endX){
//					        $('#myCarousel').carousel('next');//当开始的坐标大于结束的坐标时，滑动到下一附图
//					    }else{
//					      	$('#myCarousel').carousel('prev');//当开始的坐标小于结束的坐标时，滑动到上一附图
// 
//					    }
//					        	
//					}
//				});	
				//底部手风琴选项卡
				$(function(){
    $(".coll_body").eq(3).show();
    $(".Collapsing").click(function(){
        $(this).toggleClass("current").siblings('.Collapsing').removeClass("current");//切换图标
        $(this).next(".coll_body").slideToggle(5).siblings(".coll_body").slideUp(5);
    });
});
				 
			 
				 //移动端底部邮箱
				 $('.email-input span').click(function(){
				 	var email=$('.email-input input').val();
				 	console.log(email);
				 	localStorage.setItem("email",email);
				 	$.ajax({
				 		url:url+"sendmail",
				 		type:"post",
				 		data:{
				 			email:email
				 		},
				 		dataType:"json",
				 		success:function(data){
				 			console.log(data)
				 			$('<div>').appendTo('body').addClass('alert alert-success').html('发送成功').show().delay(1500).fadeOut();
				 		}
				 	})
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 })
				
				//底部二维码
//				$('.mobile-erweima-img').empty();
//				var footerweima="";
//				footerweima+='<img src="images/bag/footerweima04.png">';
//				$('.mobile-erweima-img').html(footerweima)
				//neirong
				//底部样式替换
				 $('#foot').empty();
				 var  footmain="";
//				    footmain+='<div class="mobile-erweima-img">'+
//                		'<img src="images/bag/footerweima04.png">'+
//                	'</div>'+
//                	'<div class="wx-erweima"><strong>微信支付二维码</strong></div>'+
//                	'<div class="mobile-foot-title-one">'+
//                		'<span>All Rights Reserved.沪ICP备16030929号-3</span> <br/>'+
//                		'<span>Copyright©1691998-2017</span>'+
//                	'</div>'
                  footmain+='<div class="wx-erweima"><strong></strong></div>'+
                  	'<div class="mobile-foot-title-one">'+
                  		'<span>All Rights Reserved.沪ICP备16030929号-3</span> <br/>'+
                  		'<span>Copyright©1691998-2017</span>'+
                  	'</div>'
				    
				$('#foot').html(footmain)
				//头部样式替换
				$('#head').empty();
				   var head="";
				   head+='<div class="head-div"><a href="menu.html"><i class="iconfont icon-santiaogang" style="margin-left:2px;font-size:20px;"></i><br><span>菜单</span></a></div>'+
                 '<div class="mobile-head-title"><a href="index.html"> <strong> 点&nbsp;医&nbsp;台</strong><br><span class="dyt-fot">DOCTOR POOL</span></a></div>'+
               '<div class="mobile-head-right"><a href="mylist.html" class="mylist"> <i class="iconfont icon-wo" style="margin-right:14px;font-size:20px;"></i></i><br><span>个人中心</span></a></div>'
				   $('#head').html(head)
				 //头部修改个人中心文字
//				 $('.mylist span').empty();
//				 var html="";
//				 html+='个人中心'
//				 $('.mylist span').html(html)
//				 //头部修改个人中心图标样式
//				$('.mylist i').css("margin-right","14px")
				
				 //登录后跳转个人信息列表
				 function getCookie(c_name){
//判断document.cookie对象里面是否存有cookie
if (document.cookie.length>0){
c_start=document.cookie.indexOf(c_name + "=")
console.log(c_start)
	//如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
if (c_start!=-1){ 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
}
return "" 
}
getCookie("temp")
//		var mylist=getCookie("temp");
//		console.log(mylist)
//				 
//				 
//				 
//    // var mylist=localStorage.getItem("temp")
//     
//     if(mylist){ 
//     $('.mylist').attr("href","mylist.html")
//     }
//				 
				 
			//公共聊天窗口
			var baidu="";
			baidu+='<div class="baidu-info-box">'+
     	  '<a href="http://p.qiao.baidu.com/cps/chat?siteId=12421912&userId=26143907">'+
     	 	'<div><i class="iconfont icon-kefu"></i></div>'+
     	 	 '<div> <span>客服</span></div>'+
     	 '</a>'+
    '</div>'
			$('body').append(baidu)
				 
				 
		
				 
				
			});

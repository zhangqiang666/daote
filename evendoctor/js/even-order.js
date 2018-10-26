$(function(){
	  $('.order-list-logo').eq(0).css('background','RGBA(61, 158, 252, 1)');
		$('.order-list-lei').eq(0).css('color','RGBA(61, 158, 252, 1)');
	$('.order-list-box li').click(function(){
		$('.order-list-logo').css('background','white');
		$('.order-list-lei').css('color','RGBA(152, 152, 152, 1)');
		var _index=$(this).index()
		$('.order-list-logo').eq(_index).css('background','RGBA(61, 158, 252, 1)');
		$('.order-list-lei').eq(_index).css('color','RGBA(61, 158, 252, 1)');
		var money=$(this).attr('data-money')
		var type=$(this).attr('data-type')
		console.log(money)
		wxmoney(money,type)
		
		
	})
	
	function wxmoney(money,type){
//		$('.wx-money-number').empty();
//		var html="";
//		html+='<span>'+money+'</span>'
//		$('.wx-money-number').html(html);
		//微信支付
		$('.wx-btn-box').empty()
		var weixin="";
		weixin+='<div class="wx-btn-left"><span class="wx-money-i">￥</span><span class="wx-money-number">'+money+'</span></div>'+
     	 	'<div class="wx-btn-right" data-type='+type+' onclick="fun(this)">微信支付</div>'
		$('.wx-btn-box').html(weixin)
		
		
		
	}
	wxmoney($('.order-list-box li').eq(0).attr('data-money'),$('.order-list-box li').eq(0).attr('data-type'));
	
	
	
	
})

$(function(){
	var imgurl='http://www.dianyitai.cn';
	$.ajax({
		type:"post",
		url:"http://www.dianyitai.cn/home/Expertassignment/expertassignment",
		async:true,
		data:"",
		dataType:"json",
		success:function(data){
			console.log(data);
			 //banner图内容数据
			$('.home-head-bg').css("background-image",'url('+imgurl+data.data.banner[0].pic+')')
			$('.head-title-name').empty();
			var banner=""
			 banner+=data.data.banner[0].name;
			 $('.head-title-name').html(banner);
			 //外派手术案例
			 $('.personal-health-box').empty();
			 var anli="";
			 $.each(data.data.anli, function(key,list) {
			 	anli+='<img src='+imgurl+list.pic+' class="health-left-img">'+
                '<div class="health-right-box">'+
                	'<p class="health-right-title">'+list.title+'</p>'+
                		'<p class="health-right-centent">'+list.content+'</p>'+
                '</div>'
			 	
			 });
			 $('.personal-health-box').html(anli);
			 //专家外派手术流程
			 $('.liuchen01').empty();
			 var liuchen01="";
			 liuchen01+=data.data.liuc[0].title;
			 $('.liuchen01').html(liuchen01);
			 //
			 $('.liuchen02').empty();
			 var liuchen02="";
			 liuchen02+=data.data.liuc[1].title;
			 $('.liuchen02').html(liuchen02);
			 //
			 $('.liuchen03').empty();
			 var liuchen03="";
			 liuchen03+=data.data.liuc[2].title;
			 $('.liuchen03').html(liuchen03);
			 //
			 $('.liuchen04').empty();
			 var liuchen04="";
			 liuchen04+=data.data.liuc[3].title;
			 $('.liuchen04').html(liuchen04);
			 //
			 $('.liuchen05').empty();
			 var liuchen05="";
			 liuchen05+=data.data.liuc[4].title;
			 $('.liuchen05').html(liuchen05);
			 //
			 $('.liuchen06').empty();
			 var liuchen06="";
			 liuchen06+=data.data.liuc[5].title;
			 $('.liuchen06').html(liuchen06);
			 //
			 $('.liuchen07').empty();
			 var liuchen07="";
			 liuchen07+=data.data.liuc[6].title;
			 $('.liuchen07').html(liuchen07);
			 //
			 $('.liuchen08').empty();
			 var liuchen08="";
			 liuchen08+=data.data.liuc[7].title;
			 $('.liuchen08').html(liuchen08);
			 //
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
		}
	});
	
	
})

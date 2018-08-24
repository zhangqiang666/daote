$(function(){
	var imgurl='http://www.dianyitai.cn';
	$.ajax({
		type:"post",
		url:"http://www.dianyitai.cn/home/Medical/medical",
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
			 //为你提供一站式上海就医服务体检
			 $('.get-doctor-title').empty();
			 var title="";
			 title+=data.data.name[0].catname;
			 $('.get-doctor-title').html(title);
			 //neirongtitle
			  //专家外派手术流程标题
			 $('.liuchen01').empty();
			 var liuchen01="";
			 liuchen01+=data.data.yzs[0].title;
			 $('.liuchen01').html(liuchen01);
			 //
			 $('.liuchen02').empty();
			 var liuchen02="";
			 liuchen02+=data.data.yzs[1].title;
			 $('.liuchen02').html(liuchen02);
			 //
			 $('.liuchen03').empty();
			 var liuchen03="";
			 liuchen03+=data.data.yzs[2].title;
			 $('.liuchen03').html(liuchen03);
			 //
			 $('.liuchen04').empty();
			 var liuchen04="";
			 liuchen04+=data.data.yzs[3].title;
			 $('.liuchen04').html(liuchen04);
			 //
			 $('.liuchen05').empty();
			 var liuchen05="";
			 liuchen05+=data.data.yzs[4].title;
			 $('.liuchen05').html(liuchen05);
			 //
			 $('.liuchen06').empty();
			 var liuchen06="";
			 liuchen06+=data.data.yzs[5].title;
			 $('.liuchen06').html(liuchen06);
			 //
			 $('.liuchen07').empty();
			 var liuchen07="";
			 liuchen07+=data.data.yzs[6].title;
			 $('.liuchen07').html(liuchen07);
			 //
			 $('.liuchen08').empty();
			 var liuchen08="";
			 liuchen08+=data.data.yzs[7].title;
			 $('.liuchen08').html(liuchen08);
			 //contentneirong
			   //专家外派手术流程内容
			 $('.content01').empty();
			 var content01="";
			 content01+=data.data.yzs[0].content;
			 $('.content01').html(content01);
			 //
			 $('.content02').empty();
			 var content02="";
			 content02+=data.data.yzs[1].content;
			 $('.content02').html(content02);
			 //
			 $('.content03').empty();
			 var content03="";
			 content03+=data.data.yzs[2].content;
			 $('.content03').html(content03);
			 //
			 $('.content04').empty();
			 var content04="";
			 content04+=data.data.yzs[3].content;
			 $('.content04').html(content04);
			 //
			 $('.content05').empty();
			 var content05="";
			 content05+=data.data.yzs[4].content;
			 $('.content05').html(content05);
			 //
			 $('.content06').empty();
			 var content06="";
			 content06+=data.data.yzs[5].content;
			 $('.content06').html(content06);
			 //
			 $('.content07').empty();
			 var content07="";
			 content07+=data.data.yzs[6].content;
			 $('.content07').html(content07);
			 //
			 $('.content08').empty();
			 var content08="";
			 content08+=data.data.yzs[7].content;
			 $('.content08').html(content08);
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
		}
	});
})

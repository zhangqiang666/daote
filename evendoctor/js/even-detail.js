$(function(){
	
 
var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

        }

    }

    console.log(theRequest);
    //详情页内容
    
    $('.even-detail-box').empty()
    var html="";
    html+='<div><strong>【随身医疗队】</strong>：高级职称专家领衔，三级医师负责制，多名一生负责一位客户（多对一），回答你的图文问诊，节假日不休。接诊时间：08:00-22:00。</div>'+
             '<div><strong>【全覆盖医疗】</strong>：线上和线下并举（OAO），上海医生和当地医生联合，定期去你家里体检，'+
            ' 电话、视频等方式让24小时随时问诊。当地医院和上海医院均为你开通绿色通道，切都有专人为你办理挂号住院、等陪诊服务。</div>'
    $('.even-detail-box').html(html); 
    
    
    
    

})
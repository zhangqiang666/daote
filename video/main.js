  $.ajax({
  	headers:{
    'Authorization':localStorage.getItem("token"),
     },
  	url: apiurl+"doctor/video/uptoken", 
  	success: function(res){
    var token = res.uptoken;
    var domain = res.domain;
    localStorage.setItem("videourl",domain);
    console.log(domain)
    var config = {
      useCdnDomain: true,
      disableStatisticsReport: false,
      retryCount: 6,
      region: qiniu.region.z0
    };
    var putExtra = {
      fname: "",
      params: {},
      mimeType: ['video/mp4']
    };
    $(".nav-box")
      .find("a")
      .each(function(index) {
        $(this).on("click", function(e) {
          switch (e.target.name) {
            case "h5":
              uploadWithSDK(token, putExtra, config, domain);
              break;
            case "expand":
              uploadWithOthers(token, putExtra, config, domain);
              break;
            case "directForm":
              uploadWithForm(token, putExtra, config);
              break;
            default:
              "";
          }
        });
      });
    imageControl(domain);
    uploadWithSDK(token, putExtra, config, domain);
  }})

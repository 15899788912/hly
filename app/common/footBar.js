$(window).load(function(){
	//国际化
	var lan=localStorage.getItem("language");
	var i18nZh={
		"LOGO_URL":"<img src='@@IMGURL/zh/logo_foot.png'></img>",
		"LOGO_UPINFO":"快5秒的体育比分网",
		"LOGO_DNINFO":"下载客户端APP使用更多功能",
		"LOGO_DOWN":"下载"
	}
	var i18nZhTw={
		"LOGO_URL":"<img src='@@IMGURL/zh-TW/logo_foot.png'></img>",
		"LOGO_UPINFO":"快5秒的體育比分網",
		"LOGO_DNINFO":"下載客戶端APP使用更多功能",
		"LOGO_DOWN":"下載"
	}
	var i18n=lan=="zh"?i18nZh:i18nZhTw;
	//创建浮层
	var div=document.createElement("div");
	div.setAttribute("class","foot_bar");
	div.innerHTML='<div class="f_logo">'+i18n.LOGO_URL+'</div>'+
		'<div class="f_logo_info"><p class="up">&nbsp;-&nbsp;'+i18n.LOGO_UPINFO+'</p>'+
		'<p class="down">'+i18n.LOGO_DNINFO+'</p>'+
		'</div><a class="btn_dl" href="qrcode.html">'+i18n.LOGO_DOWN+'</a><div class="close_mask"></div>';
	var maskShow=sessionStorage.getItem("downMask");
	if(!maskShow){
		$(document.body).append(div);
	}
	$(".close_mask").on("click",function(event){
		$(div).hide();
		//sessionStorage.setItem("downMask",true);
	});
	//统计信息
	$(".btn_dl").on("click",function(event){
		download(event);
	});
	function download($event) {
      // 获取终端的相关信息
      var Terminal = {
        // 辨别移动终端类型
        platform : function(){
          var u = navigator.userAgent, app = navigator.appVersion;
          return {
            // android终端或者uc浏览器
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            // 是否为iPhone或者QQHD浏览器
            iPhone: u.indexOf('iPhone') > -1 ,
            // 是否iPad
            iPad: u.indexOf('iPad') > -1
          };
        }(),
        // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
        language : (navigator.browserLanguage || navigator.language).toLowerCase()
      };

      // 根据不同的终端，统计相应点击量
      if(Terminal.platform.android){
        _hmt.push(['_trackEvent', 'appWeb浮动层下载', 'flClick', 'Android']);
      }else if(Terminal.platform.iPhone){
        _hmt.push(['_trackEvent', 'appWeb浮动层下载', 'flClick', 'iPhone']);
      }
    }
});
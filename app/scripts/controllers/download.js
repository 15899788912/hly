(function($) {
	// 获取终端的相关信息
	var Terminal = {
		// 辨别移动终端类型
		platform: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				// android终端或者uc浏览器
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
				// 是否为iPhone或者QQHD浏览器
				iPhone: u.indexOf('iPhone') > -1,
				// 是否iPad
				iPad: u.indexOf('iPad') > -1,
				//是否为webview
				webview: u.indexOf('yibifen') > -1,
				//是否在微信端
				weixin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
			};
		}(),
		// 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	};
	//获取地址信息
	String.prototype.getQueryString = function(name) {
		var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)"),
			r;
		if (r = this.match(reg)) return unescape(r[2]);
		return null;
	};
	var host=window.location.hostname,isdebug=false; //开发:true,线上改为:false
	if(!/m.13322.com/gi.test(host)&&!isdebug){window.location.href='http://m.13322.com'}
	if(self!=top){top.location.href=self.location.href;} //防盗链

	var apkDownloadUrlPrefix = "http://m.13322.com/fileServer/apk/download/"; //android downloadUrl
	var iosDownloadUrlPrefix = "https://lnk0.com/YVxlog?os={OS}&idfa={IDFA}&clicktime={TS}&LBS={LBS}"; //ios downloadUrl
	var channel_url = "http://m.13322.com/fileServer/queryDownLoad";

	var channel = location.search.getQueryString("channel");
	// if(channel&&channel == '655fe45af737d3266d131438d9b09196'){
	// }
	var requestObj = {};
	//获取后台下载地址
	function ajaxFun() {
		$.ajax({
			type: "get",
			url: channel_url + "?channel=" + channel,
			success: function(data) {
				var obj = JSON.parse(data);
        alert(obj);
				requestObj = obj;
			},
			fail: function(err) {
				console.log(err);
			}
		});
	}
	ajaxFun();

	function timeDown() {
		if (channel == null || channel == '') {
			window.location.href = '#';
		} else {
			if (Terminal.platform.android) {
				window.location.href = requestObj["Android"] || apkDownloadUrlPrefix + channel;
				_hmt.push(['_trackEvent', 'download_tg', 'click_tg', 'Android']);
			} else if (Terminal.platform.iPhone) {
				window.location.href = requestObj["IOS"] || iosDownloadUrlPrefix;
				_hmt.push(['_trackEvent', 'download_tg', 'click_tg', 'IOS']);
			} else {
				window.location.href = apkDownloadUrlPrefix + channel;
			}
			// handHide();
			// timer();
			ajaxF("clickCnt");
			pyRegisterCvt();
		}
	}
	//判断是否在微信端
	if (Terminal.platform.weixin) {
		$("#d_wx_share").show();
		return;
	}

	// timer();
	if(!isNoAuto){setTimeout(timeDown, 800);}//0.8s自动下载

	// $("#mainShow").on('click', function() {
	// 	timeDown();
	// });

	// 点击下载按钮事件
	$(".dlBlock").on('click',function(){
		// if(channel == '655fe45af737d3266d131438d9b09196'){
		// 	pyRegisterCvt();
		// }
		timeDown();
	})


	function pyRegisterCvt(){
		var w=window,d=document,e=encodeURIComponent;
		var b=location.href,c=d.referrer,f,g=d.cookie,h=g.match(/(^|;)\s*ipycookie=([^;]*)/),i=g.match(/(^|;)\s*ipysession=([^;]*)/);
		if (w.parent!=w){f=b;b=c;c=f;};u='//stats.ipinyou.com/cvt?a='+e('fSs.ysh.gZaFpLhUWEFEtc8TAX_W8_')+'&c='+e(h?h[2]:'')+'&s='+e(i?i[2].match(/jump\%3D(\d+)/)[1]:'')+'&u='+e(b)+'&r='+e(c)+'&rd='+(new Date()).getTime()+'&e=';
		(new Image()).src=u;
	}

	function ajaxF(appType) {
		var img = new Image(1, 1);
		var url = {
			"242": 'http://183.61.172.88:8089',
			"prod": 'http://union.13322.com/traffic'
		};
		var phonetype = Terminal.platform.iPhone ? "2" : "1";
		img.src = url['prod'] + "/api/appRetention?appType=" + appType + "&channel=" + channel + "&type=" + phonetype;
	}
	ajaxF("intoCpc"); //默认
})(Zepto);

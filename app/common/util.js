window.mobileUtil = (function(win, doc) {
	var UA = navigator.userAgent,
        loca=win.location,
        HOST=loca.hostname,
        PATHNAME=loca.pathname,
        HASH=loca.hash,
		isAndroid = /android|adr/gi.test(UA),
		isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid, // 据说某些国产机的UA会同时包含 android iphone 字符
		isWp=/Windows Phone|SymbianOS|MeeGo/gi.test(UA),   //windows phone
        isbb=/PlayBook|BB10/gi.test(UA),   //blackberry 
        isMobile = isAndroid || isIos || isWp ||isbb,  // 粗略的判断
        defaultCountry='c-zh',  //默认为中文 c-zh: 中国大陆，c-zh-tw: 中国香港,c-th:泰国,c-vi:越南
        REMV = 100,hasInitRem = false,needREM = true;    //rem 属性

	return {
		isAndroid: isAndroid,
		isIos: isIos,
		isMobile: isMobile,

        isNewsApp: /NewsApp\/[\d\.]+/gi.test(UA),
		isWeixin: /MicroMessenger/gi.test(UA),
		isQQ: /QQ\/\d/gi.test(UA),
        isQQBrow:/MQQBrowser/gi.test(UA),
		isYixin: /YiXin/gi.test(UA),
		isWeibo: /Weibo/gi.test(UA),
		isTXWeibo: /T(?:X|encent)MicroBlog/gi.test(UA),
        isWebView:/yibifen/gi.test(UA),
        // isWindow:/Windows|windows/gi.test(UA),
        is66:/13366.vn/gi.test(HOST),

		tapEvent: isMobile ? 'tap' : 'click',
         // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
        language : (navigator.browserLanguage || navigator.language).toLowerCase(),
        country:localStorage.getItem('country')?localStorage.getItem('country'):defaultCountry,
        /*
         *rem 算法
         */
        calcREM:function(){
            var size = 640,
            fz = 100,
            baseDom = doc.getElementsByTagName("html")[0],
            calcSz = baseDom.getBoundingClientRect().width / size,
            fullSz = calcSz * fz;
            baseDom.style.fontSize = fullSz + "px";
            REMV = fullSz;
        },
        /*
         *初始化REM,window判断
         */
        init:function(){
            if (needREM) {
                if ( !! hasInitRem) {
                    return false;
                } else {
                    this.calcREM();
                    hasInitRem = true;
                }
            }
            //window跳转
            if(!this.isMobile){
                this.urlAnalysis();
            }
        },
        /**
         *URL路径解析
         */
        urlAnalysis:function(){
            //大陆PC互通地址匹配
            if(this.country=='c-zh'){
                this.zhAnalysis();
            }else if(this.country=='c-zh-tw'){//香港PC互通地址匹配
                this.interAnalysis('hk');
            }else if(this.country=='c-th'){//泰国PC互通地址匹配
                this.interAnalysis('gj');
            }else if(this.country=='c-vi'){//越南PC互通地址匹配,66环境公用一套
                this.interAnalysis('gj');
            }
        },
        /**
        *大陆PC互通地址匹配
        */
        zhAnalysis:function(){
            if(/live/gi.test(PATHNAME)){  //足球比分
                win.location.href='http://live.13322.com';
            }else if(/basket/gi.test(PATHNAME)){  //篮球比分
                win.location.href='http://live.13322.com/basket';
            }else if(/odds/gi.test(PATHNAME)){  //足球指数
                win.location.href='http://odds.13322.com';
            }else if(/data/gi.test(PATHNAME)){  //足球数据
                win.location.href='http://data.13322.com';
            }else if(/video/gi.test(PATHNAME)){  //足球视频
                win.location.href='http://tv.13322.com';
            }else if(/kj/gi.test(PATHNAME)){  //彩票开奖
                if(HASH=='#/1'){  //香港开奖
                    win.location.href='http://kj.13322.com/lhc_history.html';
                }else if(HASH=='#/15'){  //北京赛车
                    win.location.href='http://kj.13322.com/pk10_history_dtoday.html';
                }else{
                    win.location.href='http://kj.13322.com';
                }
            }else{
                win.location.href='http://www.13322.com';
            }
        },
        /**
        *国际PC互通地址匹配
        */
        interAnalysis:function(gjInfo){
            var hostName=gjInfo=='hk'?'hk.13322.com':HOST.split('m.')[1];
            var urlPrefix='http://'+hostName;
            if(/live/gi.test(PATHNAME)){  //足球比分
                win.location.href=urlPrefix+'/live';
            }else if(/basket/gi.test(PATHNAME)){  //篮球比分
                win.location.href=urlPrefix+'/basket';
            }else if(/odds/gi.test(PATHNAME)){  //足球指数
                win.location.href=urlPrefix+'/odds';
            }else if(/data/gi.test(PATHNAME)){  //足球数据
                win.location.href=urlPrefix+'/data';
            }else if(/video/gi.test(PATHNAME)){  //足球视频
                win.location.href=urlPrefix+'/video';
            }else{
                win.location.href=urlPrefix;
            }
        },
		/**
		 * 转href参数成键值对
		 * @param href {string} 指定的href，默认为当前页href
		 * @returns {object} 键值对
		 */
		getSearch: function(href) {
			href = href || win.location.search;
			var data = {},reg = new RegExp( "([^?|#=&]+)(=([^&]*))?", "g" );
			href && href.replace(reg,function( $0, $1, $2, $3 ){
				data[ $1 ] = $3;
			});
			return data;
		},
		/**
		 * 获取url参数
		 * @param name {string} 键
		 * @returns {string} 值
		 */
    	getQueryString:function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
	};
})(window, document);
// 默认设置页面REM,window判断
mobileUtil.init();

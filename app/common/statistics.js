/*
    ********** Tongji **********
    Project Home: http://m.13322.com/common/statistics.min.js
    Author: Tiger.liu
    Gtalk: liuh@13322.com
    Version: 0.1.1
*/
(function(win, doc){
 	var _hmt = _hmt || [],defaultCountry='c-zh',//c-zh: 中国大陆，c-zh-tw: 中国香港,c-th:泰国,c-vi:越南
 		_loCountry=localStorage.getItem('country');
 	var tongji = function () {
        this.init.apply(this, arguments);
    }
 	tongji.prototype={
 		gogUrl:'https://www.google-analytics.com/analytics.js',
 		country:_loCountry?_loCountry:defaultCountry,
 		  /*百度统计*/
 		baidu:function(code){
 			 var hm = doc.createElement("script");
			  hm.src = "//hm.baidu.com/hm.js?"+code;
			  var s = doc.getElementsByTagName("script")[0];
			  s.parentNode.insertBefore(hm, s);
 		},
 		/*google统计代码 越南版--UA-64263178-29，泰国版--UA-64263178-30*/
 		google:function(i,s,o,g,r,a,m){
 			i['GoogleAnalyticsObject']=r;
 			i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)
			},
			i[r].l=1*new Date();
			a=s.createElement(o),m=s.getElementsByTagName(o)[0];
			a.async=1;a.src=g;
			m.parentNode.insertBefore(a,m);
 		},
 		/*内部统计*/
 		interior:function(){
 			var hm_t = doc.createElement("script");
			hm_t.setAttribute('id', 'hmw3g9kd4kx8yqgo');
			hm_t.async=true;
			hm_t.defer=true;
			hm_t.src = "http://union.13322.com/traffic/scripts/traffic.js?v=5&vnp56ams";
			var s_t = doc.getElementsByTagName("script")[0]; 
			s_t.parentNode.insertBefore(hm_t, s_t);
 		},
 		/*国际通用*/
 		international:function(code){
 			var _=this;
 			//google统计
        	_.google(win,doc,'script',_.gogUrl,'ga');
            ga('create', code, 'auto');
			ga('send', 'pageview');
			_.interior();
 		},
 		/*初始化统计代码*/
 		init:function(){
 			var _=this;
 			if(_.country=='c-zh'){//大陆
				 _.baidu('345812d171023c73cbadf698c633b1a6'); //大陆百度统计
            }else if(_.country=='c-th'){//泰国
            	 _.baidu('fa6a1d9e4a769db4f933857f70924074'); //泰国百度统计
				_.international('UA-64263178-30');
            }else if(_.country=='c-vi'){//越南,66环境公用一套
            	 _.baidu('638718551b1e90f00d7173cf1dbc900a'); //越南百度统计
            	_.international('UA-64263178-29');
            }
 		}
 	}
 	new tongji();
 })(window,document);
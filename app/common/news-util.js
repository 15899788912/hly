/*
* 公用地址
* */
var isInternational=false;  //是否为国际版true:是,false:不是
var defaultLanguageKey = "zh";//zh: 简体中文，zh-TW: 繁体中文,en:英文,th:泰语,vi:越语
var defaultCountry="c-zh";//c-zh: 中国大陆，c-zh-tw: 中国香港,c-th:泰国,c-vi:越南

var header_title_zh =
{
  "news":"资讯",
}     //中文资讯类型
var header_title_zh_TW =
{
  "news":"資訊",
}     //繁体资讯类型

var header_title_en =
{
  "news":"Information",
}     //英语资讯类型

var header_title_th =
{
  "news":"ข้อมูล",
}     //泰国资讯类型

var header_title_vi =
{
  "news":"Thông Tin",
}     //越南资讯类型

/*
* 工具类
* */
window.mobileUtil = (function(win, doc) {
  var UA = navigator.userAgent,
    HOST=win.location.hostname,
    isAndroid = /android|adr/gi.test(UA),
    isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid, // 据说某些国产机的UA会同时包含 android iphone 字符
    isMobile = isAndroid || isIos;  // 粗略的判断
  var REMV = 100,hasInitRem = false,needREM = true;    //rem 属性

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
    isWindow:/Windows|windows/gi.test(UA),
    is66:/13366.vn/gi.test(HOST),
    isWv:UA.substring(UA.lastIndexOf(" ")+1,UA.lastIndexOf("/")),

    tapEvent: isMobile ? 'tap' : 'click',
    // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
    language : (navigator.browserLanguage || navigator.language).toLowerCase(),
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
    /**
     * 转href参数成键值对
     * @param href {string} 指定的href，默认为当前页href
     * @returns {object} 键值对
     */
    getSearch: function(href) {
      href = href || win.location.search;
      var data = {},reg = new RegExp( "([^?=&]+)(=([^&]*))?", "g" );
      href && href.replace(reg,function( $0, $1, $2, $3 ){
        data[ $1 ] = $3;
      });
      return data;
    }
  };
})(window, document);

/*
 * 获取语言函数
 * */
 var getLanguage=function(){
  /*大陆版使用start*/
  if(!isInternational){
    var setLang=mobileUtil.getSearch()['lan'];
    if(setLang){localStorage.setItem("language",setLang);}
  }
  /*大陆版使用end*/
  var language = localStorage.getItem("language");
  if (language == null) {
    language = defaultLanguageKey;
  }
  return language;
}


/*
 * 处理url函数
 * */

var urlUtil=function(){

  var country = localStorage.getItem("country");
  if (country == null) {
    country = defaultCountry;
  }

  var pcBaseUrl,new_url;

  var mobile_url_host=window.location.host;

  if(country == 'c-zh') {

    pcBaseUrl = mobile_url_host.replace("m","www");

  }else{

    pcBaseUrl = mobile_url_host.replace("m.","")+"/home";

  }


  var mobile_url=window.location.href;


  var pc_url_f=mobile_url.split("news")[1];

  var pc_url=pcBaseUrl+pc_url_f;

  new_url=mobile_url.split("news")[0]+"news.html";

  return {pc_url:pc_url,
          new_url:new_url
         };

}

/*
* 文档加载完执行
* */
$(window).load(function(){

  //mobile代表是否加头部导航
  var _search = window.location.hash;
  var reg = /.*mobile\s*\=\s*(\w*).*/g;
  var mobile= _search.replace(reg, "$1");

  var reg = /.*oms\s*\=\s*(\w*).*/g;
  var oms= _search.replace(reg, "$1");

  //var new_url=urlUtil().new_url;
  var pc_url=urlUtil().pc_url;

  if(mobile==1) {

    //显示头部
    $('#header').show();
    //$('.goback').attr('href',new_url);
    $('.goback').attr('onclick','javascript :window.history.back(); return false;');


    //导航栏标题国际化
    var language=getLanguage();
    var header_title;
    if(language=="zh-TW")
    {
      header_title=header_title_zh_TW;
    }else if(language=="en")
    {
      header_title=header_title_en;
    }else if(language=="th")
    {
      header_title=header_title_th;
    }else if(language=="vi")
    {
      header_title=header_title_vi;
    }else{
      header_title=header_title_zh;
    }
    $('#header_title').html(header_title.news);

  }

  //判断URL中是否含有 http:// 如果没有则自动为URL加上
  pc_url=pc_url.substr(0,7).toLowerCase() == "http://" ? pc_url : "http://" + pc_url;

  //判断终端类型
  if(mobileUtil.isWindow){

      if(oms!=1)
      {
        window.location.href=pc_url;
      }

    }

  //iphone显示下载
  // if(self!=top){top.location.href=self.location.href;} //防盗链
  // 根据不同的终端，跳转到不同的地址
  var theUrl = "http://m.13322.com";
  if(mobileUtil.isAndroid){
    // theUrl = 'http://m.13322.com/upgrade/android/ybf_full_v1.0.3_GF1001.apk';
  }else if(mobileUtil.isIos&&!mobileUtil.isWebView
    &&mobileUtil.isWv!="Mobile"&&self==top){
    $("#s_down").css("display",'block');
//		$('#contentBox').css("marginTop",'30px');
    theUrl = 'https://itunes.apple.com/cn/app/yi-bi-fen/id1044544499?mt=8';
  }
  //如果是微信浏览器
  $("#s_down").on("click",function(){
    if(mobileUtil.isWeixin) {
      $("#weixinMask").css("display",'block');
    } else {
      $("#weixinMask").css("display",'none');
      window.location.href = theUrl;
    }
  })
  $("#weixinMask").on("click",function(event){
    this.style.display="none";
  });

  //微信分享
  var wxData = {
    url : window.location.href,
    desc :'一比分，专业的足球比分直播平台',
    title :$(".news-article .title").html(),
    img_url : "http://oms.13322.com/images/icon.png"
  }
  if(!isInternational) {
    WxUtil.share("", wxData);
  }
});


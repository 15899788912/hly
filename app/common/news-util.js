/*
 * 公用地址
 * */
var isInternational=false;  //是否为国际版true:是,false:不是
var defaultLanguageKey = "zh";//zh: 简体中文，zh-TW: 繁体中文,en:英文,th:泰语,vi:越语
var defaultCountry="c-zh";//c-zh: 中国大陆，c-zh-tw: 中国香港,c-th:泰国,c-vi:越南
var com_num="http://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cysu2zve0"; //国内畅言获取评论数js
var com_num_init="http://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyslrkBTR";//国外畅言获取评论数js

var header_title_zh =
{
  "news":"资讯",
  "recommend":"相关推荐",
}     //中文资讯类型
var header_title_zh_TW =
{
  "news":"資訊",
  "recommend":"相關推薦",
}     //繁体资讯类型

var header_title_en =
{
  "news":"Information",
  "recommend":"You may also like",
}     //英语资讯类型

var header_title_th =
{
  "news":"ข้อมูล",
  "recommend":"ข้อมูลที่เกี่ยวข้อง",
}     //泰国资讯类型

var header_title_vi =
{
  "news":"Thông Tin",
  "recommend":"Tin liên quan",
}     //越南资讯类型

/*
 * 工具类
 * */
window.mobileUtil = (function(win, doc) {
  var UA = navigator.userAgent,
    HOST=win.location.hostname,
    isAndroid = /android|adr/gi.test(UA),
    isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid, // 据说某些国产机的UA会同时包含 android iphone 字符
    isWp=/Windows Phone|SymbianOS|MeeGo/gi.test(UA),   //windows phone
    isbb=/PlayBook|BB10/gi.test(UA),   //blackberry
    isMobile = isAndroid || isIos || isWp ||isbb,  // 粗略的判断
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

  var pcBaseUrl,new_url,recommend_url;

  var mobile_url_host=window.location.host;

  if(country == 'c-zh') {

    pcBaseUrl = mobile_url_host.replace("m","www");

  }else{

    pcBaseUrl = mobile_url_host.replace("m.","")+"/home";

  }


  var mobile_url=window.location.href;


  var pc_url_f=mobile_url.split("news")[1];

  var pc_url=pcBaseUrl+pc_url_f;

  new_url=mobile_url.split("news")[0];

  recommend_url=mobile_url.split("news")[0];

  return {pc_url:pc_url,
    new_url:new_url,
    recommend_url:recommend_url
  };

}

/*
 * 文档加载完执行
 * */
$(window).load(function(){

  var language=getLanguage();
  //导航栏标题国际化
  var header_title;
  var com_num_js;

  if(language=="zh-TW")
  {
    header_title=header_title_zh_TW;
    com_num_js=com_num_init;
  }else if(language=="en")
  {
    header_title=header_title_en;
    com_num_js=com_num_init;
  }else if(language=="th")
  {
    header_title=header_title_th;
    com_num_js=com_num_init;
  }else if(language=="vi")
  {
    header_title=header_title_vi;
    com_num_js=com_num_init;
  }else{
    header_title=header_title_zh;
    com_num_js=com_num;
  }

  //mobile代表是否加头部导航
  var _search = window.location.hash;
  var reg = /.*mobile\s*\=\s*(\w*).*/g;
  var mobile= _search.replace(reg, "$1");

  var reg = /.*oms\s*\=\s*(\w*).*/g;
  var oms= _search.replace(reg, "$1");

  var new_url=urlUtil().new_url;
  var pc_url=urlUtil().pc_url;

  if(mobile==1) {
    //显示头部
    $('#header').show();
    $('.goback').attr('href',new_url);
    $('#header_title').html(header_title.news);
  }
  //判断URL中是否含有 http:// 如果没有则自动为URL加上
  pc_url=pc_url.substr(0,7).toLowerCase() == "http://" ? pc_url : "http://" + pc_url;

  //判断是否是抓取的内容
  var url_href=window.location.href;
  var content=url_href.split("news")[1].split("/")[1];

  //判断终端类型
  if(!mobileUtil.isMobile){

    if(oms!=1)
    {
      if(content!='infomationhtml')
      {
        window.location.href=pc_url;
      }

    }

  }

  //iphone显示下载
  // if(self!=top){top.location.href=self.location.href;} //防盗链
  // 根据不同的终端，跳转到不同的地址
  var theUrl = "http://m.13322.com";
  if(mobileUtil.isAndroid&&!mobileUtil.isWebView
    &&mobileUtil.isWv!="Mobile"&&self==top){
    $("#s_down").css("display",'block');

    if(defaultCountry=='c-th')
    {
      theUrl = 'http://m.th.13322.com/fileServer/apk/download/ac29b9091b95bcea065fc30bb1d3f8b6.apk';
    }else if(defaultCountry=='c-vi')
    {
      theUrl= 'http://m.vn.13322.com/fileServer/apk/download/9bf99a4ee4d28a13c174939804a40638.apk';
    }else{
      theUrl = 'http://m.13322.com/fileServer/apk/download/b6c743d4aff66c48835a999730d4bfdc';
    }

  }else if(mobileUtil.isIos&&!mobileUtil.isWebView
    &&mobileUtil.isWv!="Mobile"&&self==top){
    $("#s_down").css("display",'block');
    if(defaultCountry=='c-th')
    {
      theUrl = 'https://lnk0.com/lg4M5g';
    }else if(defaultCountry=='c-vi')
    {
      theUrl= 'https://itunes.apple.com/vn/app/ty-so-nhat-truyen-thong-ty/id1120666881?mt=8';
    }else{
      theUrl = 'https://itunes.apple.com/cn/app/yi-bi-fen/id1044544499?mt=8';
    }

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
  //var wxData = {
  //  url : window.location.href,
  //  desc :'一比分，专业的足球比分直播平台',
  //  title :$(".news-article .title").html(),
  //  img_url : "http://oms.13322.com/images/icon.png"
  //}
  //if(!isInternational) {
  //  WxUtil.share("", wxData);
  //}

  //资讯推荐
  var recommend_url=urlUtil().recommend_url;
  var infoType =sessionStorage.getItem('newsInfoType') ;
  var infoId = sessionStorage.getItem('newsInfoId');
  //var headTitles=JSON.parse(sessionStorage.getItem("newsHeadTitles"));
  //if(infoType==null)
  //{
  //  infoType=headTitles[0].infoType;
  //}
  var historyIds = sessionStorage.getItem('newsHistoryIds'+infoType); ;

  $.ajax({
    async:true,
    cache:false,
    timeout:5000,
    type:"POST",
    url:recommend_url+"mlottery/core/info.findH5RecommendInfos.do",
    data:{lang:language,infoType:infoType,infoId:infoId,historyIds:historyIds},
    error:function(jqXHR, textStatus, errorThrown){
      if(textStatus=="timeout"){
        console.log("连接超时");
      }else{
        console.log(textStatus);
      }
    },
    success:function(data){
      var newsData = data.recommendInfos;
      var newsLi="<div class='relatedNews'><p class='related_title'>" +header_title.recommend + "</p><ul>";
      for(var i=0;i<newsData.length;i++){

        var myDate = new Date(newsData[i].lastModifyDate);
        if(defaultCountry=='c-zh'||defaultCountry=='c-zh-tw'){
          newsData[i].lastModifyDateTime=myDate.Format('MM-dd')+"  "+newsData[i].lastModifyTime;
        }else{
          newsData[i].lastModifyDateTime=newsData[i].lastModifyTime+"  "+myDate.Format('dd/MM');
        }


        if(newsData[i].picUrl==null)
        {

          newsLi += "<li><a href='"+newsData[i].infoUrl +"#mobile=1' id='"+newsData[i].infoId+"'><p class='re_newsInfo' style='width: 100%;'><span class='re_newsTitle'>"+newsData[i].title
            +"</span><span class='re_newsTime'>"+newsData[i].lastModifyDateTime +"</span></p></a></li>"
        }else{

          newsLi += "<li><a href='"+newsData[i].infoUrl +"#mobile=1' id='"+newsData[i].infoId+"'><p class='re_newsInfo'><span class='re_newsTitle'>"+newsData[i].title
            +"</span><span class='re_newsTime'>"+newsData[i].lastModifyDateTime +"</span></p><p class='re_newsImg'><img src='"+newsData[i].picUrl +"'/></p></a></li>"

        }

      }
      newsLi += "</ul></div>";
      $('.contentBody').after(newsLi);
      //链接点击事件
      $('.relatedNews ul li').on("click",function(){
        var index=$(this).index();
        var infoId=$(".relatedNews ul li").eq(index).find("a").attr("id");
        var infoType=sessionStorage.getItem("newsInfoType")
        var headTitles=JSON.parse(sessionStorage.getItem("newsHeadTitles"));

        if(infoType==null)
        {
          infoType=headTitles[0].infoType;
        }

        sessionStorage.setItem("newsInfoId",infoId);

        var newsHistoryIds=sessionStorage.getItem("newsHistoryIds"+infoType);

        var newsHistoryIdsArr = [];
        if (newsHistoryIds == null) {
          newsHistoryIdsArr.push(infoId);
          sessionStorage.setItem("newsHistoryIds"+infoType, infoId + ",");

        } else {
          newsHistoryIdsArr = newsHistoryIds.split(",");
          if (newsHistoryIdsArr.indexOf(infoId) == -1) {

            if (newsHistoryIdsArr.length < 30) {

              sessionStorage.setItem("newsHistoryIds"+infoType, newsHistoryIds + infoId + ",");

            } else {

              newsHistoryIds=newsHistoryIds.replace(newsHistoryIdsArr[0]+",","");
              sessionStorage.setItem("newsHistoryIds"+infoType, newsHistoryIds + infoId + ",");

            }
          }
        }
      })
      console.info(recommend_url+"mlottery/core/info.findH5RecommendInfos.do?lang="+language+"&infoType="+infoType+"&infoId="+infoId+"&historyIds="+historyIds);
    }
  });

  //资讯评论
  var sourceId="sourceId::"+infoId;
  var commentUrl=recommend_url+"comment/index.html?id="+infoId;
  $('.com-num').attr('href',commentUrl);
  $(".com-num").html('<span id =' + sourceId +' class = "cy_cmt_count" ></span>');
  loadJs("cy_cmt_num",com_num_js,callbackFunction);

});

// 时间格式化
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds()
    // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
      .substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
        : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};

/*
 * 动态加载脚本
 * */
function loadJs(sid,jsurl,callback){
  var nodeHead = document.getElementsByTagName('head')[0];
  var nodeScript = null;
  if(document.getElementById(sid) == null){
    nodeScript = document.createElement('script');
    nodeScript.setAttribute('type', 'text/javascript');
    nodeScript.setAttribute('src', jsurl);
    nodeScript.setAttribute('id',sid);
    if (callback != null) {
      nodeScript.onload = nodeScript.onreadystatechange = function(){
        if (nodeScript.ready) {
          return false;
        }
        if (!nodeScript.readyState || nodeScript.readyState == "loaded" || nodeScript.readyState == 'complete') {
          nodeScript.ready = true;
          callback();
        }
      };
    }
    nodeHead.appendChild(nodeScript);
  } else {
    if(callback != null){
      callback();
    }
  }
}

/*
 * 回调函数
 * */
function callbackFunction(){

//      console.info("加载成功");

}

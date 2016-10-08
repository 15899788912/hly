/**
 * Created by Milo.
 * Create Time: 2016-09-19
 */
var nativeShare = function (elementNode, config) {
    if (!document.getElementById(elementNode)) {
        return false;
    }

    var qApiSrc = {
        lower: "http://3gimg.qq.com/html5/js/qb.js",
        higher: "http://jsapi.qq.com/get?api=app.share"
    };
    var bLevel = {
        qq: {forbid: 0, lower: 1, higher: 2},
        uc: {forbid: 0, allow: 1}
    };
    var UA = navigator.appVersion;
    var isqqBrowser = (UA.split("MQQBrowser/").length > 1) ? bLevel.qq.higher : bLevel.qq.forbid;
    var isucBrowser = (UA.split("UCBrowser/").length > 1) ? bLevel.uc.allow : bLevel.uc.forbid;
    var version = {
        uc: "",
        qq: ""
    };
    var isWeixin = false;

    config = config || {};
    this.elementNode = elementNode;
    this.url = config.url || document.location.href || '';
    this.title = config.title || document.title || '';
    this.desc = config.desc || document.title || '';
    this.img = config.img || document.getElementsByTagName('img').length > 0 && document.getElementsByTagName('img')[0].src || '';
    this.img_title = config.img_title || document.title || '';
    this.from = config.from || window.location.host || '';
    this.ucAppList = {
        sinaWeibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
        weixin: ['kWeixin', 'WechatFriends', 1, '微信好友'],
        weixinFriend: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
        QQ: ['kQQ', 'QQ', '4', 'QQ好友'],
        QZone: ['kQZone', 'QZone', '3', 'QQ空间']
    };

    this.share = function (to_app) {
        var title = this.title, url = this.url, desc = this.desc, img = this.img, img_title = this.img_title, from = this.from;
        if (isucBrowser) {
            to_app = to_app == '' ? '' : (platform_os == 'iPhone' ? this.ucAppList[to_app][0] : this.ucAppList[to_app][1]);
            if (to_app == 'QZone') {
                B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url="+img+"&title="+title+"&description="+desc+"&url="+url+"&app_name="+from;
                k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(function () {
                    k && k.parentNode && k.parentNode.removeChild(k)
                }, 5E3);
            }
            if (typeof(ucweb) != "undefined") {
                ucweb.startRequest("shell.page_share", [title, title, url, to_app, "", "@" + from, ""])
            } else {
                if (typeof(ucbrowser) != "undefined") {
                    ucbrowser.web_share(title, title, url, to_app, "", "@" + from, '')
                } else {
                }
            }
        } else {
            if (isqqBrowser && !isWeixin) {
                to_app = to_app == '' ? '' : this.ucAppList[to_app][2];
                var ah = {
                    url: url,
                    title: title,
                    description: desc,
                    img_url: img,
                    img_title: img_title,
                    to_app: to_app,//微信好友1,腾讯微博2,QQ空间3,QQ好友4,生成二维码7,微信朋友圈8,啾啾分享9,复制网址10,分享到微博11,创意分享13
                    cus_txt: "请输入此时此刻想要分享的内容"
                };
                ah = to_app == '' ? '' : ah;
                if (typeof(browser) != "undefined") {
                    if (typeof(browser.app) != "undefined" && isqqBrowser == bLevel.qq.higher) {
                        browser.app.share(ah)
                    }
                } else {
                    if (typeof(window.qb) != "undefined" && isqqBrowser == bLevel.qq.lower) {
                        window.qb.share(ah)
                    } else {
                    }
                }
            } else {

            }
        }

        switch(to_app){
          case "facebook":
              window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)));
              break;
          case "twitter":
              window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)).concat(' ').concat(encodeURIComponent(location.href)));
              break;
          case "google":
              window.open('https://plus.google.com/up/?continue=https://plus.google.com/share?url='.concat(encodeURIComponent(document.title)).concat(' ').concat(encodeURIComponent(location.href)));
              break;

        }
    };

    this.html = function() {
        var position = document.getElementById(elementNode);
        var html =
            '<div class="list clearfix">'+
            '<span data-app="facebook" class="nativeShare facebook"><i></i><p>Facebook</p></span>'+
            '<span data-app="twitter" class="nativeShare twitter"><i></i><p>Twitter</p></span>'+
            '<span data-app="google" class="nativeShare google stButton"><i></i><p>Google+</p></span>'+
            '<span data-app="sinaWeibo" class="nativeShare weibo"><i></i><p>微博</p></span>'+
            '<span data-app="weixin" class="nativeShare weixin"><i></i><p>微信</p></span>'+
            '<span data-app="weixinFriend" class="nativeShare weixin_timeline"><i></i><p>朋友圈</p></span>'+
            '<span data-app="QQ" class="nativeShare qq"><i></i><p>QQ</p></span>'+
            '</div>';
            html += "<div class='cancel'><span>取消</span></div>";
        position.innerHTML = html;
    };

    this.isloadqqApi = function () {
        if (isqqBrowser) {
            var b = (version.qq < 5.4) ? qApiSrc.lower : qApiSrc.higher;
            var d = document.createElement("script");
            var a = document.getElementsByTagName("body")[0];
            d.setAttribute("src", b);
            a.appendChild(d)
        }
    };

    this.getPlantform = function () {
        ua = navigator.userAgent;
        if ((ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1)) {
            return "iPhone"
        }
        return "Android"
    };

    this.is_weixin = function () {
        var a = UA.toLowerCase();
        if (a.match(/MicroMessenger/i) == "micromessenger") {
            return true
        } else {
            return false
        }
    };

    this.getVersion = function (c) {
        var a = c.split("."), b = parseFloat(a[0] + "." + a[1]);
        return b
    };



    this.init = function () {
        platform_os = this.getPlantform();
        version.qq = isqqBrowser ? this.getVersion(UA.split("MQQBrowser/")[1]) : 0;
        version.uc = isucBrowser ? this.getVersion(UA.split("UCBrowser/")[1]) : 0;
        isWeixin = this.is_weixin();
        if ((isqqBrowser && version.qq < 5.4 && platform_os == "iPhone") || (isqqBrowser && version.qq < 5.3 && platform_os == "Android")) {
            isqqBrowser = bLevel.qq.forbid
        } else {
            if (isqqBrowser && version.qq < 5.4 && platform_os == "Android") {
                isqqBrowser = bLevel.qq.lower
            } else {
                if (isucBrowser && ((version.uc < 10.2 && platform_os == "iPhone") || (version.uc < 9.7 && platform_os == "Android"))) {
                    isucBrowser = bLevel.uc.forbid
                }
            }
        }
        this.isloadqqApi();
        document.getElementsByClassName('com-num')[0].style.display = 'none';
        if (isqqBrowser || isucBrowser) {
            this.html();
        } else {
            if(this.is_weixin()){
              // alert("the env is weixin");
            }else{
              this.html();
              document.getElementsByClassName('s-icon')[0].style.display = 'none';
                // document.write('目前分享仅支持手机UC浏览器和QQ浏览器');
            }

        }
    };

    this.init();

    var share = this;
    var items = document.getElementsByClassName('nativeShare');
    var share_icon = document.getElementsByClassName('s-icon')[0];
    var block_fixed = document.getElementsByClassName('block-fixed')[0];
    var block_share = document.getElementsByClassName('block-share')[0];
    var block_WeChat = document.getElementsByClassName("block-WeChat")[0];
    //click share_icon

    share_icon.addEventListener("click",function(e){

      if(isqqBrowser || isucBrowser){
        block_fixed.style.display = "block";
        block_share.style.display = "block";
        block_WeChat.style.display = "none";
        document.body.style.position = 'fixed';//禁止移动端页面滚动
        e.preventDefault();
        document.body.height = document.body.offsetHeight;
      }else{
        if(isWeixin){
          block_fixed.style.display = "none";
          block_share.style.display = "none";
          block_WeChat.style.display = "block";
          document.body.style.position = 'fixed';//禁止移动端页面滚动
          e.preventDefault();
        }else{


        }
      }
    });

    for (var i=0;i<items.length;i++) {
        items[i].onclick = function(){
            share.share(this.getAttribute('data-app'));
        }
    }



    return this;
};


//初始化信息
var config = {
    url:window.location.href,
    title:document.title,
    desc:document.title,
    img:'http://oms.13322.com/images/icon.png',
    img_title:document.title,
    from:'yibifen'
};
var share_obj = new nativeShare('nativeShare',config);
var cancel = document.getElementsByClassName('cancel')[0];
var block_fixed = document.getElementsByClassName('block-fixed')[0];
var block_share = document.getElementsByClassName('block-share')[0];
var block_WeChat = document.getElementsByClassName("block-WeChat")[0];


cancel.addEventListener("click",function(){
  block_share.style.display='none';
  block_fixed.style.display='none';
  document.body.style.position = 'static';//移除页面滚动禁止
});
block_fixed.addEventListener("click",function(){
  block_share.style.display='none';
  block_fixed.style.display='none';
  document.body.style.position = 'static';//移除页面滚动禁止
});

block_WeChat.addEventListener("click",function(){
    this.style.display = 'none';
    document.body.style.position = 'static';//移除页面滚动禁止
});

//判断国内外
if(defaultCountry === 'c-zh'){
  document.getElementsByClassName('facebook')[0].style.display = 'none';
  document.getElementsByClassName('twitter')[0].style.display = 'none';
  document.getElementsByClassName('google')[0].style.display = 'none';
}else{
  document.getElementsByClassName('weibo')[0].style.display = 'none';
  document.getElementsByClassName('weixin')[0].style.display = 'none';
  document.getElementsByClassName('weixin_timeline')[0].style.display = 'none';
  document.getElementsByClassName('qq')[0].style.display = 'none';
}



//微信分享
var wxData = {
 url : window.location.href,
 desc :'一比分，专业的足球比分直播平台',
 title :$(".news-article .title").html(),
 img_url : "http://oms.13322.com/images/icon.png"
}

WxUtil.share("", wxData);

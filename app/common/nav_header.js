/**
 * Created by Administrator on 2016/8/19.
 */

var backend ={
  dev : {
    // baseUrl : "http://m.13322.com/mlottery",
    //baseUrl :"http://192.168.31.18:8080/mlottery",
    logoutUrl : "/core/h5UserCenter.logout.do"
  },
}

/**
 * @desp 国际化...
 */
var header_i18n = {
  "zh" : {
    "nickName" :"用户昵称",
    "login":"登录",
    "reg" : "注册",
    "lan" : "选择语言",
    "download" : "下载APP",
    "pc" : "访问电脑版",
    "exit" : "退出账号",
    "nologin" :"该用户未登录",
    "excption" : "退出登录请求异常"
  },
  "zh-TW" : {
    "nickName" :"用戶昵稱" ,
    "login" :"登入" ,
    "reg" :"注册" ,
    "lan" :"選擇語言" ,
    "download" :"下載APP" ,
    "pc" :"訪問電腦版" ,
    "exit" :"退出帳號",
    "nologin" :"該用戶未登錄",
    "excption" : "登出請求异常"
  },
  "en" : {
    "nickName" :"nick name",
    "login":"Login",
    "reg" : "Register",
    "lan" : "Language",
    "download" : "Download APP",
    "pc" : "PC",
    "exit" : "Exit",
    "nologin" :" The user is not logged in",
    "excption" : "Exit login request exception"
  },
  "th" : {
    "nickName" :"ชื่อผู้ใช้",
    "login":"เข้าสู่ระบบ",
    "reg" : "ลงทะเบียน",
    "lan" : "เลือกภาษา",
    "download" : "ดาวน์โหลด App",
    "pc" : "ไปที่เว็บวันสกอร์",
    "exit" : "ออกจากบัญชี",
    "nologin" :"ผู้ใช้นี้ยังไม่ได้เข้าสู่ระบบ",
    "excption" : "ออกจากระบบล้มเหลว"
  },
  "vi" : {
    "nickName" :"Biệt danh người dùng",
    "login":"Đăng nhập",
    "reg" : "Đăng ký",
    "lan" : "Chọn ngôn ngữ",
    "download" : "Tải App",
    "pc" : "Phiên bản PC",
    "exit" : "Thoát",
    "nologin" :"Người dùng chưa đăng nhập",
    "excption" : "Yêu cầu thoát thất bại"
  }
}

/**
 * @下载
 * @type {*[]}
 */
var urlObj=[
  {
    "country":'c-zh',  //大陆
    "android":'http://m.13322.com/fileServer/apk/download/b6c743d4aff66c48835a999730d4bfdc',
    "ios":'https://itunes.apple.com/cn/app/yi-bi-fen/id1044544499?mt=8'
  },
  {
    "country":'c-zh-tw',  //香港
    "android":'http://m.13322.com/fileServer/apk/download/b6c743d4aff66c48835a999730d4bfdc',
    "ios":'https://itunes.apple.com/cn/app/yi-bi-fen/id1044544499?mt=8'
  },
  {
    "country":'c-vi',  //越南
    "android":'http://m.13322.com/fileServer/apk/download/9bf99a4ee4d28a13c174939804a40638',
    "ios":'https://itunes.apple.com/cn/app/ty-so-nhat-truyen-thong-ty/id1120666881?mt=8'
  },
  {
    "country":'c-th',  //泰国
    "android":'http://m.13322.com/fileServer/apk/download/ac29b9091b95bcea065fc30bb1d3f8b6',
    "ios":'https://itunes.apple.com/cn/app/wan-skxr-x-phkila-thi-fas/id1118896699?mt=8'
  },
  {
    "country":'c-vn66',   //越南66
    "android":'http://m.vn.13322.com/fileServer/apk/download/04b84431d8ea926ee3a7e57527310fb3',
    "ios":'https://lnk0.com/1M9kkk'
  }
];


window.nav_menus = (function(win,doc){
  // init variable  and store dom element.
  var dom_el = $(".nav-menus");
  var right = dom_el.find(".right");
  var title = dom_el.find(".nav_title");
  var left = dom_el.find(".left");
  var arrow = dom_el.find(".nav_arrow");
  var nav_status = false;
  var init_num = 0;
  var slide = dom_el.find("#logo-slide");
  var slide_menu = $(".slide-menu");
  //this is for offset().
  $(document).ready(function(){
    init_i18n();  //初始化账号国际化..
    initClass();

    //检测是否session有值.
    var user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null;
    if (user != null && user.user != null) {
      $("#user").removeClass("hide").addClass("show");
      $(".exit").removeClass("hide").addClass("show"); // 只有有账号登录才能显示退出登录...
       //$(document.body).attr("style","overflow:hidden");

      $("#nickName").html(user.user.nickName);
    } else {
      $("#no-user").removeClass("hide").addClass("show");
      $(".exit").removeClass("show").addClass("hide"); // 只有有账号登录才能显示退出登录...
      //$(document.body).attr("style","");
    }
    //点击其他区域关闭.
    $(".userInfo").on("click",function(e){
      $(document.body).removeClass("no-scroll");
      var target = e.target || e.srcElement;
      if (target.className != "menu-wrapper") {
        $(".slide-menu").removeClass("show").addClass("hide");
      }
    })
    // 退出
    $("#exit").on("click",function(e) {
      var lan = getLanguage() ;
      lan = lan ? lan : "zh";
      if (user != null && user.user != null) {
        var token = user.loginToken || "";
        var outurl = baseUrl + backend.dev.logoutUrl;

        $.ajax({
          url : outurl,
          method : "POST",
          header : {
          },
          data : {
            loginToken : token
          },
          timeout: 5000,
          beforeSend : function(){
            showLoading();
          },
          success : function(data) {
            hideLoading();

            if( data && data.result == 0) {
              $("#user").removeClass("show").addClass("hide");
              $("#nickName").html("");
              $("#no-user").removeClass("hide").addClass("show");
              $(".exit").removeClass("show").addClass("hide"); // 只有有账号登录之后才能显示退出登录...
              sessionStorage.setItem("user",null);
              user = null;
            } else {
              var msg = data.msg;
              var infos = msg ? msg : "";
              if (msg.result == 22) {
                infos = header_i18n[lan].nologin;
              }
              $("#nav-error").html(infos);
              showMask();
              window.setTimeout(hideMask,3000);
            }
          },
          fail : function(err) {
            hideLoading();
            $("#nav-error").html(header_i18n[lan].excption);
            showMask();
            window.setTimeout(hideMask,3000);
          },
          error : function(err) {
            hideLoading();
            $("#nav-error").html(header_i18n[lan].excption);
            showMask();
            window.setTimeout(hideMask,3000);
          }
        })
      }
    })

    //下载:
    $("#nav-d-app").on("click",function(e){
      downloadH5();
    })

    dom_el.on("click",function(e){
      var target = e.target || e.toElement;
      //展开,收缩菜单
      if (target.className === "right" || target.className.indexOf("nav_arrow") >=0) {
        if (!nav_status){  //展开
          dom_el.addClass("menus_box");
          left.removeClass("line").addClass("box");
          //left.attr("style","height:150px");
          //dom_el.attr("style","overflow:hidden;");
          arrow.removeClass("nav_down");
          addFloat(left,"a","fl");
          nav_status = true;
        } else {
          dom_el.removeClass("menus_box");
          left.removeClass("box").addClass("line");
          //left.attr("style","height:100px");
          //dom_el.attr("style","overflow:hidden;");
          arrow.addClass("nav_down");
          clearFloat(left,"a","fl");
          nav_status = false;
        }
      }
      //链接状态,不同页面要保存状态. change 选中的样式.
      if(target.nodeName ==="A" && target.className.indexOf("nav_nav") >= 0) {
        window.localStorage.setItem("nav_selected",target.id);
        activeClass(left,"a","active",target);
      }
      $('.video').trigger('pause');
      $('.video_player').hide();
    });

    slide.on("click",function(e){
      //展开..
      e.preventDefault();
      slide_menu.removeClass("hide").addClass("show");
      $(".menu-wrapper").addClass("slide-in");
      console.log($("div[ng-view]"));
      $(document.body).addClass("no-scroll");
    })
  })

  /**
   * @desp 初始化i18n..
   */
  function init_i18n() {
      var lan = getLanguage() ;
      lan = lan ? lan : "zh";
      init_i18n_html(lan);
  }

  /**
   * @desp 将i18n的值插入到dom里.
   */
  function init_i18n_html(type){
    $("#nav-d-login").html(header_i18n[type].login);
    $("#nav-d-reg").html(header_i18n[type].reg);
    $("#nav-d-nick").html(header_i18n[type].nickName);
    $("#nav-d-lan").html(header_i18n[type].lan);
    $("#nav-d-app").html(header_i18n[type].download);
    $("#nav-d-pc").html(header_i18n[type].pc);
    $("#exit").html(header_i18n[type].exit);
  }
  /**
   * @desp 获取当前语言,
   */
  function getLanguage() {
    ///*大陆版使用start,,,,,why?????????*/
    //if (!isInternational) {
    //  var setLang = mobileUtil.getSearch()['lan'];
    //  if (setLang) {
    //    localStorage.setItem("language", setLang);
    //  }
    //}
    /*大陆版使用end*/
    var language = localStorage.getItem("language");
    if (language == null) {
      language = defaultLanguageKey;
    }
    return language;
  }
  /**
   * @desp 展示信息
   */
  function showMask() {
    $(".nav-header-mask").removeClass("hide").addClass("show");
  }

  /**
   * @desp 隐藏信息
   */
  function hideMask() {
    $(".nav-header-mask").removeClass("show").addClass("hide");
  }

  /**
   * @desp 展示loading....
   */
  function showLoading(){
    $(".loading").removeClass("hide").addClass("show");
  }

  /**
   * @desp 隐藏loading..
   */
  function hideLoading(){
    $(".loading").removeClass("show").addClass("hide"); //隐藏加载..
  }

  /**
   * @desp//根据以前链接的状态，改变链接的样式.  根据当前location的path和a 列表进行比较，如果a 的href和path相等则active.
   */
  function initClass(){
    var path = (window.location.pathname || "");
    path = path.substr(0,path.length-1);            //去掉 类似/basket/的最后一个/
    var store_id = window.localStorage.getItem("nav_selected");
    var focusItem = 0;
    var t = "",dataUrl="";
    var scrollLeft = 0;

    // if 默认index.html， else 其他匹配激活.
    if (path === "" || path.indexOf("index.htm")>=0) {
      left.find("a").each(function(index,item){
        if (item.id === "nav3") {
          $(item).addClass("active");
        } else {
          $(item).removeClass("active");
        }
      });
    } else {                                                      // 因为nav5,nav1,nav2等还有其他内嵌子页面，在返回的时候需要特别处理下.
      left.find("a").each(function(index,item){
        dataUrl=$(item).data("url");
        console.log("dataUrl:",dataUrl);
        console.log(path == dataUrl);
        if (path==dataUrl) {
          $(item).addClass("active");
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
        } else {
          $(item).removeClass("active");
        }
        /**
        if(store_id === "nav5"  && item.id === "nav5") {          // 数据跳转返回的时候特殊处理.
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
          $(item).addClass("active");
        } else if(store_id === "nav1" && item.id === "nav1") {   // 数据跳转返回的时候特殊处理.
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
          $(item).addClass("active");
        } else if(store_id === "nav2" && item.id === "nav2") {   // 数据跳转返回的时候特殊处理.
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
          $(item).addClass("active");
        } else  if (item.href.indexOf(path)>=0) {
          $(item).addClass("active");
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
        } else {
          $(item).removeClass("active");
        }
         **/
      });
      // 滚动的计算.
      var viewWidth = left.width();
      var toLeft = scrollLeft -( viewWidth /2) ;
       left.animate({scrollLeft:toLeft}, 500,"linear")
    }

  }

  /**
   * @desp 获取某容器下的某元素的offsetLeft.
   */
  function getOffsetLeft(obj){
    var left = obj.offsetLeft;
    if (obj.offsetParent !== null) {
      left += getOffsetLeft(obj.offsetParent);
    }
    return left;
  }

  /**
   * @desp 给父容器下的子元素添加浮动.
   * @param parent
   */
  function addFloat(parent,subtag,className){
    parent.find(subtag).each(function(index,item){
      $(item).addClass(className);
    })
  }

  /**
   * @desp 给父容器下的子元素清除浮动
   */
  function clearFloat(parent,subtag,className){
    parent.find(subtag).each(function(index,item){
      $(item).removeClass(className);
    })
  }

  /**
   * @desp 选中的样式.
   */
  function activeClass(parent,subtag,className,target){
    parent.find(subtag).each(function(index,item){
      if ($(item).attr("id") === target.id) {
        $(item).addClass(className);
      } else {
        $(item).removeClass(className);
      }
    })
  }
  /**
   * h5官网下载事件start
   */
  function downloadH5(){
    //下载地址JSON数据
  	var urlObj=[
  		{
  			"country":'c-zh',  //大陆
  			"android":'http://m.13322.com/fileServer/apk/download/b6c743d4aff66c48835a999730d4bfdc',
  			"ios":'https://itunes.apple.com/cn/app/yi-bi-fen/id1044544499?mt=8'
  		},
  		{
  			"country":'c-zh-tw',  //香港
  			"android":'http://m.13322.com/fileServer/apk/download/b6c743d4aff66c48835a999730d4bfdc',
  			"ios":'https://itunes.apple.com/cn/app/yi-bi-fen/id1044544499?mt=8'
  		},
  		{
  			"country":'c-vi',  //越南
  			"android":'http://m.13322.com/fileServer/apk/download/9bf99a4ee4d28a13c174939804a40638',
  			"ios":'https://itunes.apple.com/cn/app/ty-so-nhat-truyen-thong-ty/id1120666881?mt=8'
  		},
  		{
  			"country":'c-th',  //泰国
  			"android":'http://m.13322.com/fileServer/apk/download/ac29b9091b95bcea065fc30bb1d3f8b6',
  			"ios":'https://itunes.apple.com/cn/app/wan-skxr-x-phkila-thi-fas/id1118896699?mt=8'
  		},
  		{
  			"country":'c-vn66',   //越南66
  			"android":'http://m.vn.13322.com/fileServer/apk/download/04b84431d8ea926ee3a7e57527310fb3',
  			"ios":'https://lnk0.com/1M9kkk'
  		}
  	];

    var country=window.localStorage.getItem("country");
    country = country ? country : defaultCountry;
    //循环取数据
    for (var i = 0; i < urlObj.length; i++) {
      //越南66环境
      if(mobileUtil.is66&&urlObj[i].country=='c-vn66'){
        // 根据不同的终端，跳转到不同的地址
        if(mobileUtil.isAndroid){
          window.location.href =urlObj[i].android;
        }else if(mobileUtil.isIos){
          window.location.href =urlObj[i].ios;
        }
        return;
      }else if(country==urlObj[i].country){
        if(country=='c-vi'&&mobileUtil.is66){
          return;
        }
        // 根据不同的终端，跳转到不同的地址
        if(mobileUtil.isAndroid){
          window.location.href =urlObj[i].android;
        }else if(mobileUtil.isIos){
          window.location.href =urlObj[i].ios;
        }
      }
    }
  }
  /**
   * h5官网下载事件End
   */

})(window,document);

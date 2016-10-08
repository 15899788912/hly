/**
 * Created by Administrator on 2016/9/23.
 */

var i18nConfig = ["$translateProvider", function ($translateProvider) {
  var i18n = {
    zh : {
      "login" : {
        "login_account" : "请输入手机号",
        "login_gw_account" : "请输入用户名",
        "login_login" : "登录",
        "login_reg" : "注册",
        "login_password" : "6-16 位字符，区分大小写",
        "login_tip_password" : "请输入密码",
        "login_find" : "忘记密码",
        "login_third" : "社交账号快速登录"
      },
      "reg" : {
        "reg_account" : "请输入手机号",
        "reg_gw_account" : "请输入用户名",
        "reg_sms" : "请输入验证码",
        "reg_password" : "请输入密码",
        "reg_getSMS" : "获取验证码",
        "reg_reg" : "注册",
        "reg_login" : "登录",
        "reg_sms_sent" : "短信已发",
        "reg_sms_err" : "短信发送失败"
      },
      "find" : {
        "find_find" : "找回密码",
        "find_account" : "请输入手机号",
        "find_code" : "请输入验证码",
        "find_fcode" : "获取验证码",
        "find_password" : "请输入密码",
        "find_submit" : "修改密码"
      }
    },
    zh_hans : {},
    en : {},
    th : {},
    vi : {}
  };
  $translateProvider.translations('zh', i18n.zh);
  $translateProvider.translations('zh-TW', i18n.zh_hans);
  $translateProvider.translations('en',i18n.en);
  $translateProvider.translations('th',i18n.th);
  $translateProvider.translations('vi',i18n.vi);

  $translateProvider.registerAvailableLanguageKeys(['zh', 'zh-TW','en','th','vi'], {
    'zh_CN': 'zh',
    'zh_TW': 'zh-TW',
    'zh_HK': 'zh-TW',
    'en_US':'en',
    'th':'th',
    'vi':'vi'
  });

  $translateProvider.useSanitizeValueStrategy(null);
  // try to find out preferred language by yourself
  //$translateProvider.determinePreferredLanguage();
  var language = window.localStorage.getItem("language");
  if (language == null) {
    language = defaultLanguageKey;
  }
  $translateProvider.preferredLanguage(language);
}];

/**
 * @路由配置
 * @type {*[]}
 */
var routerConfig =  ['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/",{
      templateUrl : "../../views/account/login_template.html",
      controller:"loginCon"
    })
    .otherwise({
      redirectTo: "/"
    });
}
];

/**
 * @http post Peiz
 */
var postConfig = ['$httpProvider',function($httpProvider){
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
}];

/**
 * @账号服务
 * @type {*[]}
 */
var accountFactory = ['$resource','$http','$timeout','$interval',function($resource,$http,$timeout,$interval){
  var accountFactory =  {
    //constant:
    //后台接口地址
    backendUrl :{
      //baseUrl : "http://192.168.10.242:8181/mlottery",
      baseUrl : "http://192.168.31.18:8080/mlottery",
      login : {
        url:"/core/h5UserCenter.login.do",
        params: {
          account : "",
          password : ""
        }
      },
      reg : {
        url : "/core/h5UserCenter.register.do",
        params : {

        }
      },
      smsCode : {
        url : "/core/h5UserCenter.sendSmsCode.do",
        //url : "/core/IOSUserCenter.sendSmsCode.do",
        params : {

        }
      },
      resetPassword : {
        url : "/core/h5UserCenter.resetPassword.do",
        params: {

        }
      },
      verifySms : {
        "url" : "/core/h5UserCenter.verifySmsCode.do",
        params:{}
      }
    },
    //登录类型.
    loginType : {
      web : "web",
      weixin : "weixin",
      qq : "qq",
      weibo : "weibo"
    },

    //登录....
    login : function($scope,type) {
      var loginObj = this.LoginFactory(type);
      console.log("loginObj",loginObj);
      loginObj.execute();
    },
    LoginFactory : function(type,scope){
      switch(type) {
        case this.loginType.web :
          return new this.webLogin(scope);
          break;
        case this.loginType.weixin :
          return new weixinLogin();
          break;
        case this.loginType.qq :
          return new qqLogin();
          break;
        case this.loginType.weibo :
          return new weiboLogin();
          break;
        default :
          return new webLogin();
      }
    },
    webLogin : function(scope){
      scope.disableLogin = true;
      scope.loading = true;
      scope.infos = [];
      console.log("login scople=",scope);

      var isChecked = true;
      if (isChecked) {
        var params = angular.copy(this.backendUrl.login.params);
        params.account = scope.account || "";
        params.password = scope.password || "";
        //params.deviceToken = "Msdf12341234asdf";
        //params.ip = "192.168.0.1";
        var httpService = this.genHttpService(this.backendUrl.login.url,params,"POST");
        httpService.then(webLoginSuccessFn,webLoginFailFn)
          .finally(function(){
            $timeout(function(){
              scope.maskShow = false;
              scope.disableLogin = false;
            },2000);
          }
        )
      } else {
        console.log("未验证通过", false);
      }
      //login success
      function webLoginSuccessFn(resp) {
        var data = resp.data || {msg:""};
        console.log("success",data);
        scope.loading = false;
        scope.maskShow = true;
        if (data.result == 0) {
          scope.infos.push("登录成功");
          sessionStorage.setItem("user",JSON.stringify(data.data));
          window.location.href = "/index.html#/"; //跳转到首页..
        } else {
          scope.infos.push("登录失败:"+data.msg);
        }
      }
      //login fail
      function webLoginFailFn(err) {
        console.log("err",err);
        var errorinfo = "";
        if (err.status == "404") {
          errorinfo = "请求不到数据";
        } else {
          errorinfo = "登录请求异常..."
        }
        scope.loginFail = true;
        scope.errorInfo = errorinfo;
        scope.infos.push(errorinfo);
        scope.loading = false;
        scope.maskShow = true;
      }
      //login complete
      function webLoginFinish(){
        console.log("finished");
      }
      //return execute;
    },
    weixinLogin : function (){
      var appid = "wx7819ec8fd6b8005a";
      var secretid = "d4624c36b6795d1d99dcf0547af5443d";
      var currentUrl = window.location.href;
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7819ec8fd6b8005a&redirect_uri="+currentUrl+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect "
    },
    qqLogin : function(){

    },
    weiboLogin : function(scope,type) {
      console.log(WB2);
      if (WB2) {
        WB2.anyWhere(function (W) {
          //W.widget.connectButton({
          //  id: "sianLogin"
          //});
          W.widget.connectButton({
            id: "sianLogin",
            type: "7,1",
            callback: {
              login: function (o) {
                console.log(o);
                self.location = '#/login';
              },
              logout: function () {

              }
            }
          });
        });
      } else {
        scope.infos.push("")
      }

    },
    autoLogin : function(params) {

    },
    showTips : function(msg){

    },
    hideTips : function() {

    },
    getService : function(url){
      var base = this.backendUrl.baseUrl;
      return $resource(base + url,{},{
        post : {method : "POST"}
      })
    },
    genHttpService : function(url,params,type){

      var httpurl = this.backendUrl.baseUrl + url;
      //return $http.post(httpurl,params);
      console.log("params:",params);
      console.log(JSON.stringify(params));
      return $http({
        method : type || "POST",
        url : httpurl,
        data : params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
  };

  return accountFactory;
}]

/**
 * @登录
 */
var loginCon = ['$scope',"accountFactory",function($scope,accountFactory){

  //third.getWeixinOpenId();
  $scope.loading = false;
  $scope.country =  defaultCountry || "c-th" ||  "c-zh";  // 国内手机，国外用户名..
  $scope.login = function(type){
    if (type === "web")
      accountFactory.webLogin($scope);
    if (type === "weixin")
      accountFactory.weixinLogin($scope,type);
    if (type === "weibo")
      accountFactory.weiboLogin($scope,type);
  }


  $scope.$on("$viewContentLoaded",function(){
    $scope.initWeibo();   //weibo need check the style in the html and ...
    $scope.initQQ();
  })

  $scope.initQQ = function(){
    //QC.Login({
    //    btnId: "",
    //    //用户需要确认的scope授权项，可选，默认all
    //    scope: "all",
    //    //按钮尺寸，可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S]，可选，默认B_S
    //    size: "B_M"
    //  }, function (reqData, opts) {//登录成功
    //
    //    QC.Login.getMe(function (openId, accessToken) {
    //      self.location = '/login.qqLogin.do?accessToken=' + accessToken + '&appid=' + 101308317;
    //    });
    //    //根据返回数据，更换按钮显示状态方法
    //    var dom = document.getElementById(opts['btnId']),
    //      _logoutTemplate = [
    //        //头像
    //        '<span><img src="{figureurl}" class="{size_key}"/></span>',
    //        //昵称
    //        '<span>{nickname}</span>',
    //        //退出
    //        '<span><a href="javascript:QC.Login.signOut();">退出</a></span>'
    //      ].join("");
    //    dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
    //      nickname: QC.String.escHTML(reqData.nickname), //做xss过滤
    //      figureurl: reqData.figureurl
    //    }));
    //  }, function (opts) {//注销成功
    //
    //  }
    //);
  }
  $scope.initWeibo = function(){
    //WB2.anyWhere(function (W) {
    //  //W.widget.connectButton({
    //  //  id: "sianLogin"
    //  //});
    //  W.widget.connectButton({
    //    id: "sianLogin",
    //    type: "7,1",
    //    callback: {
    //      login: function (o) {
    //        self.location = '/login.weiBoLogin.do';
    //      },
    //      logout: function () {
    //
    //      }
    //    }
    //  });
    //});
  }

  $scope.hideMask = function(e) {
    var tar = e.target || e.srcElement ;
    if (tar.tagName !== "UL") {
      $scope.maskShow = false;
    }
  }
}];

/**
 * @简单.
 */
function isEmpty(val) {
  var emptys = false;
  if (val == null || val == undefined || val== "undefined" || val == "null" || val == "") {
    emptys = true;
  }
  return emptys;
}
function isPassword(str) {
  str = isEmpty(str) ? "" : str;
  console.log(str);
  var regPassword = /[a-zA-Z\d]+$/;
  return regPassword.test(str);
}
function isNumber(str) {
  str = isEmpty(str) ? "" : str;
  var regNumber = /[\d]+$/;
  console.log(str,regNumber.test(str));
  return regNumber.test(str);
}

function getLanguage() {
  /*大陆版使用start*/
  if (!isInternational) {
    var setLang = mobileUtil.getSearch()['lan'];
    if (setLang) {
      localStorage.setItem("language", setLang);
    }
  }
  /*大陆版使用end*/
  var language = localStorage.getItem("language");
  if (language == null) {
    language = defaultLanguageKey;
  }
  return language;
}

/**
 * @desp module  account......
 */
angular
  .module("live1.account.login", [
    "ngRoute",
    "ngResource",
    "pascalprecht.translate"
  ])
  .config(routerConfig)
  .config(i18nConfig)
  .config(postConfig)
  .factory("accountFactory",accountFactory)
  .controller("loginCon",loginCon);


'use strict';

/**
 * @ngdoc overview
 * @name live1App
 * @description
 * # live1App
 */
/** 组件**/

/**
 * @公共头部导航国际化.
 */

var commonHeaderNav = ["$translateProvider", function ($translateProvider) {

  var i18n = {
    zh : {
      "nav_title": "一比分",
      "IMG_LOGO": "/images/zh/logo.png",
      "nav_basketball":"篮球比分",
      "nav_football":"足球比分",
      "nav_news" : "体育资讯",
      "nav_odds" : "足球指数",
      "nav_data" : "足球数据",
      "nav_video": "视频直播",
      "nav_kj":"彩票开奖",
      "nav_thcp": "泰国彩票"
    },
    en : {
      "nav_title":	"One Score",
      "IMG_LOGO":	"/images/en/logo.png",
      "nav_basketball":"Basketball Score",
      "nav_football":"Football Score",
      "nav_news" : "Sports Information",
      "nav_odds" : "Football Odds",
      "nav_data" : "Football Data",
      "nav_video": "Live Video",
      "nav_kj":"Lottery Draw",
      "nav_thcp":"lotto thai"
    },
    zh_hans: {
      "nav_title":"壹比分",
      "IMG_LOGO": "/images/zh-TW/logo.png",
      "nav_basketball":"籃球比分",
      "nav_football":"足球比分",
      "nav_news" : "體育資訊",
      "nav_odds" : "指數",
      "nav_data" : "足球數據",
      "nav_video": "視頻直播",
      "nav_kj":"彩票開獎",
      "nav_thcp":"泰國彩票"
    },
    th: {
      "nav_title":"วันสกอร์ ",
      "IMG_LOGO":"/images/th/logo.png",
      "nav_basketball":"สกอร์บาสเกตบอล",
      "nav_football":"สกอร์ฟุตบอล",
      "nav_news" : "ข่าวกีฬา",
      "nav_odds" : "ออดซฟุตบอล",
      "nav_data" : "ข้อมูลฟุตบอล",
      "nav_video": "วิดีโอถ่ายทอดสด",
      "nav_kj":"การออกผลล็อตเตอรี่",
      "nav_thcp":"lotto thai"
    },
    vi : {
      "nav_title":"Tỷ Số Nhất",
      "IMG_LOGO":"/images/vi/logo.png",
      "nav_basketball":"Tỷ số bống rổ",
      "nav_football":"Tỷ số bống đá",
      "nav_news" : "tin tức thể thao",
      "nav_odds" : "Chỉ số bóng đá",
      "nav_data" : "Dữ Liệu Bóng Đá",
      "nav_video": "trực tuyến",
      "nav_kj":"Xổ số",
      "nav_thcp":"lotto thai"
    }
  }

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
}]

/*首页*/
angular.module("live1.home", [
    "ngRoute",
    "ngResource",
    "pascalprecht.translate"
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/views/home_template.html",
                controller: "HomeController"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
]).config(commonHeaderNav);
/*足球比分*/
angular.module("live1.football", [
    "ngRoute",
    "ngResource",
    "ngCookies",
    "infinite-scroll",
    "pasvaz.bindonce",
    "pascalprecht.translate"
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/views/football_template.html",
                controller: "FootballController"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
]).config(commonHeaderNav).directive("liveNav",function(){
  return {
    restrict: 'E',
    templateUrl: "/views/nav.html",
    replace: true,
    controller : function() {

    },
    link : function(scope, element, attrs) {
      console.log("scope:",scope);
      var dom_el = $(element);
      var right = dom_el.find(".right");
      var left = dom_el.find(".left");
      var status = false;
      right.on("click",function(){
        if (!status){
          left.removeClass("line").addClass("box");
          left.attr("style","height:100px");
          dom_el.attr("style","height:100px;overflow:hidden;")
          status = true;
        } else {
          left.removeClass("box").addClass("line");
          left.attr("style","height:50px");
          dom_el.attr("style","height:50px;overflow:hidden;");
          status = false;
        }
      })

    }
  };
});
/*分数*/
angular.module("live1.score", [
    "ngRoute",
    "ngResource",
    "ngCookies",
    "infinite-scroll",
    "pasvaz.bindonce",
    "pascalprecht.translate"
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/views/score_template.html",
                controller: "ScoreController"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
]).config(commonHeaderNav);
/*篮球比分*/
angular.module("live1.basketball", [
    "ngRoute",
    "ngResource",
    "ngCookies",
    "infinite-scroll",
    "pasvaz.bindonce",
    "pascalprecht.translate"
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/views/basketball_template.html",
                controller: "BasketballController"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
]).config(commonHeaderNav).directive("liveNav",function(){
  return {
    restrict: 'E',
    templateUrl: "/views/nav.html",
    replace: true,
    controller : function() {

    },
    link : function(scope, element, attrs) {
      console.log("scope:",scope);
      var dom_el = $(element);
      var right = dom_el.find(".right");
      var left = dom_el.find(".left");
      var status = false;
      right.on("click",function(){
        if (!status){
          left.removeClass("line").addClass("box");
          left.attr("style","height:100px");
          dom_el.attr("style","height:100px;overflow:hidden;")
          status = true;
        } else {
          left.removeClass("box").addClass("line");
          left.attr("style","height:50px");
          dom_el.attr("style","height:50px;overflow:hidden;");
          status = false;
        }
      })

    }
  };
})
/*视频直播*/
angular.module("live1.livetv", [
    "ngRoute",
    "ngResource",
    "pascalprecht.translate"
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/views/livetv_template.html",
                controller: "LiveTVController"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
]).config(commonHeaderNav);
/*资讯*/
angular.module("live1.news", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/news_template.html",
        controller: "newsController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]).config(commonHeaderNav);
/*指数*/
angular.module("live1.exponent", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/exponent_template.html",
        controller: "ExponentController",
        controllerAs:'ec'
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]).config(commonHeaderNav);
/*2016法国欧洲杯小组赛*/
angular.module("live1.group", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/uefaeuro_template/group_match_template.html",
        controller: "groupController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]).config(commonHeaderNav);

/*2016法国欧洲杯1/8决赛*/
angular.module("live1.final", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/uefaeuro_template/final_match_template.html",
        controller: "finalController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]).config(commonHeaderNav);


/*资料库*/
angular.module("live1.data", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/data_template/data_template.html",
        controller: "dataController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]).config(commonHeaderNav);


/*资料库内容*/
angular.module("live1.integral", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/data_template/integral_template.html",
        controller: "integralController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]).config(commonHeaderNav);




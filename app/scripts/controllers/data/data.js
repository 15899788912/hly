/**
 * Created by john on 2016/6/2.
 */

var data = angular.module("live1.data");

data.config(["$translateProvider", function ($translateProvider) {
  var translationsEn = {
    "DATA_TITLE":	"Football Database",
    "DATA_HEAD":	"Football Data"
  }
  var translationsZH = {
    "DATA_TITLE":"【足球资料库】足球联赛_赛程_球队_球员数据库-一比分",
    "DATA_KEYWORDS":"足球资料库,足球数据库,足球联赛,足球赛程",
    "DATA_DESCRIPTION":"一比分足球资料库频道为您提供足球联赛、足球赛程、足球球队、足球球员等赛事数据库、包含欧洲五大联赛、欧冠、亚冠、中超等主要联赛的赛事、赛程积分、让球大小盘路、球队资料、球员资料等数据资料。",
    "DATA_HEAD":"足球数据"
  };
  var translationsZH_HANS = {
    "DATA_TITLE":"【足球資料庫】足球聯賽_賽程_球隊_球員數據庫-一比分",
    "DATA_KEYWORDS":"足球資料庫,足球數據庫,足球聯賽,足球賽程",
    "DATA_DESCRIPTION":"一比分足球資料庫頻道為您提供足球聯賽、足球賽程、足球球隊、足球球員等賽事數據庫、包含歐洲五大聯賽、歐冠、亞冠、中超等主要聯賽的賽事、賽程積分、讓球大小盤路、球隊資料、球員資料等數據資料。",
    "DATA_HEAD":"足球數據"
  };
  var translationsTH = {
    "DATA_TITLE":	"ฐานข้อมูลฟุตบอล",
    "DATA_HEAD":	"ข้อมูลฟุตบอล"
  }
  var translationsVI = {
    "DATA_TITLE":	 "Trung Tâm Dữ Liệu Bóng Đá",
    "DATA_HEAD":	"Dữ Liệu Bóng Đá"
  }

  $translateProvider.translations('zh', translationsZH);
  $translateProvider.translations('zh-TW', translationsZH_HANS);
  $translateProvider.translations('en',translationsEn);
  $translateProvider.translations('th',translationsTH);
  $translateProvider.translations('vi',translationsVI);

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
}]);


//资料库控制器
data.controller("dataController", [
  "$http",
  "$scope",
  "$translate",
  "listServiceFactory",
  function ($http, $scope, $translate,listServiceFactory)
  {
    //加载完执行该方法
    $scope.$on("$viewContentLoaded", function ($window) {
      listServiceFactory.loadListData($scope);
      $scope.setHeight();
    })

    //localStorage中获取对象
    $scope.getObjectFromLocalStorage = function (key) {
      return localStorage.getItem(key);
    }
    //localStorage中增加对象
    $scope.putObjectToLocalStorage = function (key, value) {
      localStorage.setItem(key, value);
    }
    //取语言版本方法
    $scope.getLanguage = function () {
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

    /*高度计算*/
    $scope.setHeight=function (){
        var heightVal=document.documentElement.clientHeight - $("header").height();
        //  $('.content').height(heightVal);
    }
  }
]);

//列表服务
data.factory("listService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footballLeagueData.qLibaryLeagues.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//列表服务工厂
data.factory("listServiceFactory", [
  "listService",
  function (listService) {
    var obj = {};
    obj.loadListData = function ($scope) {
      listService.get({lang:$scope.getLanguage()}, function (data) {
        $scope.mainInfo=data.leagueList;
      });
    };
    return obj;
  }
]);

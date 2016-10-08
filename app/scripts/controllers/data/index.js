 //足球资料库
var database =angular.module("live1.data");

 //足球比赛详细国际化
 database.config(["$translateProvider", function ($translateProvider) {
   var translationsZH = {
     "DATA_TITLE":"【足球资料库】足球联赛_赛程_球队_球员数据库-一比分",
     "DATA_KEYWORDS":"足球资料库,足球数据库,足球联赛,足球赛程",
     "DATA_DESCRIPTION":"一比分足球资料库频道为您提供足球联赛、足球赛程、足球球队、足球球员等赛事数据库、包含欧洲五大联赛、欧冠、亚冠、中超等主要联赛的赛事、赛程积分、让球大小盘路、球队资料、球员资料等数据资料。",
     "DATA_HEAD":"足球数据",
     "HEAD_NAV_HOT":"热门",
     "HEAD_NAV_EUROPE":"欧洲",
     "HEAD_NAV_AMERICA":"美洲",
     "HEAD_NAV_ASIA":"亚洲",
     "HEAD_NAV_AFRICA":"非洲",
     "HEAD_NAV_OCEANIA":"大洋洲",
     "HEAD_NAV_INTL":"国际",
     "HEAD_NAV_BEACH":"沙滩",
     "NO_DATA":"暂无赛事"
   }
   var translationsZH_HANS = {
     "DATA_TITLE":"【足球資料庫】足球聯賽_賽程_球隊_球員數據庫-一比分",
     "DATA_KEYWORDS":"足球資料庫,足球數據庫,足球聯賽,足球賽程",
     "DATA_DESCRIPTION":"一比分足球資料庫頻道為您提供足球聯賽、足球賽程、足球球隊、足球球員等賽事數據庫、包含歐洲五大聯賽、歐冠、亞冠、中超等主要聯賽的賽事、賽程積分、讓球大小盤路、球隊資料、球員資料等數據資料。",
     "DATA_HEAD":"足球數據",
     "HEAD_NAV_HOT":"熱門",
     "HEAD_NAV_EUROPE":"歐洲",
     "HEAD_NAV_AMERICA":"美洲",
     "HEAD_NAV_ASIA":"亞洲",
     "HEAD_NAV_AFRICA":"非洲",
     "HEAD_NAV_OCEANIA":"大洋洲",
     "HEAD_NAV_INTL":"國際",
     "HEAD_NAV_BEACH":"沙灘",
     "NO_DATA":"暫無賽事"
   }
   var translationsEn = {
     "DATA_TITLE":	"Football Database",
     "DATA_HEAD":	"Football Data",
     "HEAD_NAV_HOT":"Hot",
     "HEAD_NAV_EUROPE":"Europe",
     "HEAD_NAV_AMERICA":"America",
     "HEAD_NAV_ASIA":"Asia",
     "HEAD_NAV_AFRICA":"Africa",
     "HEAD_NAV_OCEANIA":"Oceania",
     "HEAD_NAV_INTL":"Intl.",
     "HEAD_NAV_BEACH":"Beach Soccer",
     "NO_DATA":"No Events"
   }
   var translationsTH = {
     "DATA_TITLE":	"ฐานข้อมูลฟุตบอล",
     "DATA_HEAD":	"ข้อมูลฟุตบอล",
     "HEAD_NAV_HOT":"การแข่งขันสุดฮอต",
     "HEAD_NAV_EUROPE":"ยุโรป",
     "HEAD_NAV_AMERICA":"อเมริกา",
     "HEAD_NAV_ASIA":"เอเชีย",
     "HEAD_NAV_AFRICA":"แอฟริกา",
     "HEAD_NAV_OCEANIA":"โอเชียเนีย",
     "HEAD_NAV_INTL":"นานาชาติ",
     "HEAD_NAV_BEACH":"ฟุตบอลชายหาด",
     "NO_DATA":"ไม่มีข้อมูลการแข่งขัน"
   }
   var translationsVI = {
     "DATA_TITLE":	 "Trung Tâm Dữ Liệu Bóng Đá",
     "DATA_HEAD":	"Dữ Liệu Bóng Đá",
     "HEAD_NAV_HOT":"Hot",
     "HEAD_NAV_EUROPE":"Châu Âu",
     "HEAD_NAV_AMERICA":"Châu Mỹ",
     "HEAD_NAV_ASIA":"Châu Á",
     "HEAD_NAV_AFRICA":"Châu Phi",
     "HEAD_NAV_OCEANIA":"Châu đại dương",
     "HEAD_NAV_INTL":"Thế giới",
     "HEAD_NAV_BEACH":"Bãi biển",
     "NO_DATA":"Không có giải đấu"
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


 //自定义指定首页标题渲染完毕
 database.directive('mainRepeatFinish',['$timeout', function ($timeout) {
   return {
     restrict: 'A',
     link: function(scope, element, attr) {
       if (scope.$last === true) {
         $timeout(function() {
           scope.$emit('ngMainRepeatFinish');
         });
       }
     }
   };
 }]);
 //足球比赛详细控制器
 database.controller("databaseController", [
   "$http",
   "$scope",
   "$timeout",
   "$filter",
   "$translate",
   "leagueHierarchyFactory",
   "listServiceFactory",
   "countryNextFactory",
   "beachServeFactory",
   function ($http, $scope,$timeout,$filter,$translate,leagueHierarchyFactory,listServiceFactory,countryNextFactory,beachServeFactory)
   {
     var interId,offsets;//nav类型
     //加载完执行该方法
     $scope.$on("$viewContentLoaded", function ($window) {

       $scope.removeObjectFromSessionStorage("ul_li_index");
       interId = $scope.getObjectFromSessionStorage("navId");
       offsets = $scope.getObjectFromSessionStorage("offset_number");
       if(!interId){
         interId=00;
       }

       $scope.showModel();

       $(".nav ul").scrollLeft(offsets-130);

      //  点击导航栏
      $(".header-nav .nav ul li").click(function(){
        var li_number=$(this).index();
        interId = $(this).attr("ng-data");
        $scope.putObjectToSessionStorage("navId",interId);
        $scope.showModel();
        $scope.removeObjectFromSessionStorage("ul_li_index");
        offsets=0;
        for(var i=0;i<li_number;i++){
          offsets += $(".nav ul li").eq(i).innerWidth();
        }
        $(".nav ul").scrollLeft(offsets-130);
        $scope.putObjectToSessionStorage("offset_number",offsets);
      });

       //创建子赛事内容
       $scope.clickNationalLogo = function(leagueData,index){
         $scope.li_index=index;
         $scope.nextloadingShow = true;
         countryNextFactory.loadNextData($scope,interId,leagueData,index);
       }

       //显示国家赛事下的子赛事模块
       $scope.clickShowNation = function(_index){
         var ul_li_index=$scope.getObjectFromSessionStorage("ul_li_index");
         var new_ul_li_index=_index+","+$scope.li_index;
         if(ul_li_index==new_ul_li_index)
         {
            $('.country-block>ul li').removeClass("active");
            $(".choose-show").hide();
            $scope.removeObjectFromSessionStorage("ul_li_index");
         }else {
           $('.country-block>ul li').removeClass("active");
           $('.country-block>ul').eq(_index).find("li").eq($scope.li_index).addClass("active");
           $(".choose-show").hide();
           $("#country_show"+_index).show();
          $scope.putObjectToSessionStorage("ul_li_index",_index+","+$scope.li_index);
         }
       }

       //头部点击返回
       $("#back").click(function(){
         navMap();
       });
       var navMap = function(){
         var navid = window.localStorage.getItem("nav_selected") || "";
         var href = "";
         switch(navid){
           case "nav1" :
             href = window.location.origin + "/live";
             break;
           case "nav2" :
             href = window.location.origin + "/basket";
             break;
           case "nav3" :
             href = window.location.origin + "/index.html";
             break;
           case "nav4" :
             href = window.location.origin + "/odds";
             break;
           case "nav5" :
             href = window.location.origin + "/data";
             break;
           case "nav6" :
             href = window.location.origin + "/video";
             break;
           case "nav7" :
             href = window.location.origin + "/kj";
             break;
           case "nav8" :
             href = window.location.origin + "/gjcp/thai.html";
             break;
           default :
             href = window.location.origin + "/index.html";
             break;
         }
         window.location.href = href;
       }
     });

     //下面是在热门 li 完成后执行的js
     $scope.$on('ngMainRepeatFinish', function (ngRepeatFinishedEvent) {
        if(mobileUtil.isQQBrow){
          $('.hot-block ul li').eq(12).css('margin-top','1px');
          $('.hot-block ul li').eq(13).css('margin-top','1px');
         }
     });

     //localStorage中获取对象
     $scope.getObjectFromLocalStorage = function (key) {
       return localStorage.getItem(key);
     }
     //localStorage中增加对象
     $scope.putObjectToLocalStorage = function (key, value) {
       localStorage.setItem(key, value);
     }

     $scope.putObjectToSessionStorage = function (key, value) {
       sessionStorage.setItem(key, value);
     }
     //sessionStorage中获取对象
     $scope.getObjectFromSessionStorage = function (key) {
       return sessionStorage.getItem(key)
     };
     //sessionStorage中删除对象
     $scope.removeObjectFromSessionStorage = function (key) {
       sessionStorage.removeItem(key);
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

    //  显示哪一块内容
     $scope.showModel=function(){
       if(interId==00){
         $('.hot').addClass("active").siblings().removeClass("active");
         $('.hot-block').show();
         $('.country-block').hide();
         $('.beach-block').hide();
         $scope.loadingShow = true;
         listServiceFactory.loadListData($scope);
       }else if (interId==110) {
         $('.beach').addClass("active").siblings().removeClass("active");
         $('.hot-block').hide();
         $('.country-block').hide();
         $('.beach-block').show();
         $scope.loadingShow = true;
         beachServeFactory.loadBeachData($scope,interId);
       }else{
         if(interId==54){$('.america').addClass("active").siblings().removeClass("active");}
         if(interId==56){$('.asia').addClass("active").siblings().removeClass("active");}
         if(interId==55){$('.africa').addClass("active").siblings().removeClass("active");}
         if(interId==97){$('.oceania').addClass("active").siblings().removeClass("active");}
         if(interId==52){$('.intl').addClass("active").siblings().removeClass("active");}
         if(interId==53){$('.europe').addClass("active").siblings().removeClass("active");}
         $('.hot-block').hide();
         $('.beach-block').hide();
         $('.country-block').show();
         $scope.loadingShow = true;
         leagueHierarchyFactory.loadInfoData($scope,interId);
       }
     }
   }
 ]);
 //热门赛事列表服务
 database.factory("listService", [
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

 //热门赛事列表服务工厂
 database.factory("listServiceFactory", [
   "listService",
   function (listService) {
     var obj = {};
     obj.loadListData = function ($scope) {
       listService.get({lang:$scope.getLanguage()}, function (data) {
         echo.init();  //初始化懒加载方法
         $scope.viewNum = 16;  //当前可视区域为16个

         $scope.mainInfo=data.leagueList;
         $scope.loadingShow = false;

       });
     };
     return obj;
   }
 ]);


 //获取五大洲国家服务
 database.factory("leagueHierarchy", [
   "$resource",
   function ($resource) {
     return $resource(baseUrl+"/core/footballLeagueData.findCountry.do", {}, {
       query: {
         method: "get",
         params: {},
         isArray: false
       }
     });
   }
 ]);
 //获取五大洲国家服务工厂
 database.factory("leagueHierarchyFactory", [
   "leagueHierarchy",
   function (leagueHierarchy) {
     var obj = {};
     obj.loadInfoData = function ($scope,interId) {
         leagueHierarchy.get({interId:interId,lang:$scope.getLanguage()}, function (data) {
           var smallArr=[],bigArr=[];
           echo.init();  //初始化懒加载方法
           $scope.viewNum =3;  //当前可视区域为3个ul
           if(data!=null){
             if(data.countryList){
               $scope.countryLists=data.countryList;
               if(data.countryList != null){
                 for(var i = 1;i<data.countryList.length+1;i++){
                   smallArr.push(data.countryList[i-1]);
                   if(i%4 == 0){
                     bigArr.push(smallArr);
                     smallArr = [];
                   }
                 }
                bigArr.push(smallArr);
                $scope.countryListss=bigArr;
               }
               $scope.loadingShow = false;
             }
           }
       });
     };
     return obj;
   }
 ]);


// 获取子赛事服务
database.factory("countryNextService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footballLeagueData.findLeagues.do", {}, {
      query: {
        method: "get",
        params: {},
        isArray: false
      }
    });
  }
]);
//获取子赛事服务工厂
database.factory("countryNextFactory", [
  "countryNextService",
  function (countryNextService) {
    var obj = {};
    obj.loadNextData = function ($scope,interId,couId,index) {
        countryNextService.get({interId:interId,couId:couId,lang:$scope.getLanguage()}, function (data) {
          echo.init();  //初始化懒加载方法
          $scope.viewNum = 15;  //当前可视区域为15个
          if(data!=null){
            if(data.leagueList){
              $scope.leagueLists=data.leagueList;
              $scope.nextloadingShow = false;
            }
          }
      });
    };
    return obj;
  }
]);

// 获取沙滩赛事服务
database.factory("beachServe", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footballLeagueData.findCountry.do", {}, {
      query: {
        method: "get",
        params: {},
        isArray: false
      }
    });
  }
]);
//获取沙滩赛事服务工厂
database.factory("beachServeFactory", [
  "beachServe",
  function (beachServe) {
    var obj = {};
    obj.loadBeachData = function ($scope,interId) {
        beachServe.get({interId:interId,lang:$scope.getLanguage()}, function (data) {
          echo.init();  //初始化懒加载方法
          $scope.viewNum = 16;  //当前可视区域为16个
          if(data!=null){
            if(data.countryList){
              $scope.beachLists=data.countryList;
              $scope.loadingShow = false;
            }
          }
      });
    };
    return obj;
  }
]);

 /**
  * 球队logo加载失败时，使用默认logo
  * @param obj
  */
 var logoLoadErr = function (obj,team) {
   var logoUrl = "@@IMGURL/live/404.png";
   if(team=='team'){
     obj.src = logoUrl;
   }else{
     obj.src = logoUrl;
   }
   obj.src = logoUrl;
   obj.onerror = null;
 };

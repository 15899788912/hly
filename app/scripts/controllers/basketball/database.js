/**
 * Created by milo on 2016/8/31.
 */
 //篮球资料库
var database =angular.module("basketball.database");


 //篮球比赛详细国际化
 database.config(["$translateProvider", function ($translateProvider) {
   var translationsZH = {
     "DATABASE_KEYWORDS":"篮球资料库,篮球数据库,NBA数据库,CBA数据库",
     "DATABASE_DESCRIPTION":"一比分篮球资料库为您提供各国篮球联赛、篮球赛程、篮球球队等赛事数据库、包含NBA，CBA，明星赛等主要联赛的赛事、赛程积分、让球大小盘路、球队资料、联盟排名等数据资料。",
     "HEAD_TITLE":"【篮球资料库】篮球联赛_赛程_球队-一比分",
     "HEAD_NAV_HOT":"热门",
     "HEAD_NAV_EUROPE":"欧洲",
     "HEAD_NAV_AMERICA":"美洲",
     "HEAD_NAV_ASIA":"亚洲",
     "HEAD_NAV_AFRICA":"非洲",
     "HEAD_NAV_INTL":"国际",
     "SPECIFICLEAGUE":"洲际赛事",
     "NATIONALLEAGUE":"国家赛事",
     "NO_DATA":"暂无赛事"
   }
   var translationsZH_HANS = {
     "DATABASE_KEYWORDS":"籃球資料庫,籃球數據庫,NBA數據庫,CBA數據庫",
     "DATABASE_DESCRIPTION":"一比分籃球資料庫為您提供各國籃球聯賽、籃球賽程、籃球球隊等賽事數據庫、包含NBA，CBA，明星賽等主要聯賽的賽事、賽事積分、讓球大小盤路、球隊資料、聯盟排名等數據資料。",
     "HEAD_TITLE":"【籃球資料庫】籃球聯賽_賽程_球隊-一比分",
     "HEAD_NAV_HOT":"熱門",
     "HEAD_NAV_EUROPE":"歐洲",
     "HEAD_NAV_AMERICA":"美洲",
     "HEAD_NAV_ASIA":"亞洲",
     "HEAD_NAV_AFRICA":"非洲",
     "HEAD_NAV_INTL":"國際",
     "SPECIFICLEAGUE":"洲際賽事",
     "NATIONALLEAGUE":"國家賽事",
     "NO_DATA":"暫無賽事"
   }
   var translationsEn = {
     "DATABASE_KEYWORDS":"Basketball Data Bank,Basketball Database,NBA Database, CBA Database",
     "DATABASE_DESCRIPTION":"One Score Basketball Database provides you with the national basketball leagues, basketball schedules, basketball teams and other match data, including matches, points, HDP O/U trend, team information, league ranking and other data information of the major leagues like NBA, CBA, and All-star.",
     "HEAD_TITLE":"【Basketball Database】Basketball League_Schedule_Team_One Score",
     "HEAD_NAV_HOT":"Hot",
     "HEAD_NAV_EUROPE":"Europe",
     "HEAD_NAV_AMERICA":"America",
     "HEAD_NAV_ASIA":"Asia",
     "HEAD_NAV_AFRICA":"Africa",
     "HEAD_NAV_INTL":"Intl.",
     "SPECIFICLEAGUE":"International Events",
     "NATIONALLEAGUE":"National Events",
     "NO_DATA":"No Events"
   }
   var translationsTH = {
     "DATABASE_KEYWORDS":"ฐานข้อมูลบาสเกตบอล,ฐานข้อมูลบาสเกตบอล,ฐานข้อมูลNBA,ฐานข้อมูลCBA",
     "DATABASE_DESCRIPTION":"ฐานข้อมูลเว็บไซต์วันสกอร์เสนอทุกลีกการแข่งขันกีฬาบาสเกตบอล、ตารางการแข่งขันบาสเกตบอล、ฐานข้อมูลทีมบาสเกตบอลการแข่งขันอื่น、รวมทั้งการแข่งขันออร์สตาร์NBA、CBA、การแข่งขันลีกหลัก、ตารางการสะสมคะแนนการแข่งขัน、กราฟอัตราการต่อรองบาสสูง/ต่ำ、ข้อมูลนักกีฬาบาสเกตบอล、การจัดอันดับสถิติข้อมูลการแข่งขัน ",
     "HEAD_TITLE":"【ฐานข้อมูลบาสเกตบอล】 ลีกบาสเกตบอล_ตารางการแข่งขัน_ทีม_วันสกอร์ ",
     "HEAD_NAV_HOT":"การแข่งขันสุดฮอต",
     "HEAD_NAV_EUROPE":"ยุโรป",
     "HEAD_NAV_AMERICA":"อเมริกา",
     "HEAD_NAV_ASIA":"เอเชีย",
     "HEAD_NAV_AFRICA":"แอฟริกา",
     "HEAD_NAV_INTL":"นานาชาติ",
     "SPECIFICLEAGUE":"การแข่งขันระหว่างทวีป",
     "NATIONALLEAGUE":"การแข่งขันในประเทศ",
     "NO_DATA":"ไม่มีข้อมูลการแข่งขัน"
   }
   var translationsVI = {
     "DATABASE_KEYWORDS":"Trung tâm thông tin bóng rổ, trung tâm số liệu bóng rổ, Trung tâm số liệu NBA, Trung tâm số liệu CBA",
     "DATABASE_DESCRIPTION":"Trung tâm thông tin bóng rổ Tỷ Số Nhất cung cấp số liệu các giải đấu quốc gia, lịch thi đấu bóng rổ, đội bóng, trận đấu vân vân, gồm diễn biến các giải chủ yếu NBA, CBA, All-Star, điểm thành tích lịch thi đấu, kèo chấp bóng kèo tài xỉu, thông tin đội bóng, xếp hạng liên minh vân vân.",
     "HEAD_TITLE":"【Kho dữ liệu bóng rổ】_Giải đấu_Lịch thi đấu_Đội bóng_Tỷ Số Nhất",
     "HEAD_NAV_HOT":"Hot",
     "HEAD_NAV_EUROPE":"Châu Âu",
     "HEAD_NAV_AMERICA":"Châu Mỹ",
     "HEAD_NAV_ASIA":"Châu Á",
     "HEAD_NAV_AFRICA":"Châu Phi",
     "HEAD_NAV_INTL":"Thế giới",
     "SPECIFICLEAGUE":"Giải châu lục",
     "NATIONALLEAGUE":"Giải quốc gia",
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

 //篮球比赛详细控制器
 database.controller("databaseController", [
   "$http",
   "$scope",
   "$timeout",
   "$filter",
   "$translate",
   "leagueHierarchyFactory",
   function ($http, $scope,$timeout,$filter,$translate,leagueHierarchyFactory)
   {
     var type;//nav类型
     //加载完执行该方法
     $scope.$on("$viewContentLoaded", function ($window) {

       type = $scope.getObjectFromSessionStorage("nav_type");

       $scope.loadingImg = true;

       (type == '' || type == null) ? type = "hot" : type = $scope.getObjectFromSessionStorage("nav_type") ;
       $("."+type).addClass("active").siblings().removeClass("active");

       leagueHierarchyFactory.loadInfoData($scope,type);

       //导航栏点击
       $(".header-nav .nav ul li").click(function(){
         type = $(this).attr("ng-data");
         $(this).addClass("active").siblings().removeClass("active");
         $scope.putObjectToSessionStorage("nav_type",type);//导航标记
         $scope.loadingImg = true;
         leagueHierarchyFactory.loadInfoData($scope,type);

       });

       //赛事类型
       $(".tab-nav ul li").click(function(){
         $(this).addClass("active").siblings().removeClass("active");
       });
       $scope.clickSpecific = function($event){
         $(".inter-block").show();
         $(".country-block").hide();
       }
       $scope.clickNational = function($event){
         $(".inter-block").hide();
         $(".country-block").show();
       }

       //选择国家
       $scope.clickNationalLogo = function(leagueData,twoIndex){
         $scope.twoIndex = twoIndex;
         $scope.leagueDatas = leagueData;

       }
       //显示国家赛事
       $scope.clickShowNation = function(oneIndex){

         $scope.nationalIndex = Math.ceil(oneIndex);
         var li_index =   oneIndex + ',' + $scope.twoIndex;

         var ul_li_index=$scope.getObjectFromSessionStorage("ul_li_index");

         if(ul_li_index == li_index){
            $('.country-block>ul li').removeClass("active");
            $(".choose-show").hide();
            $scope.removeObjectFromSessionStorage("ul_li_index");
         }else{
           $('.country-block>ul li').removeClass("active");
           $('.country-block>ul').eq(oneIndex).find("li").eq($scope.twoIndex).addClass("active");
           $(".choose-show").hide();
           $("#country_show"+oneIndex).show();
          $scope.putObjectToSessionStorage("ul_li_index",oneIndex+","+$scope.twoIndex);
         }

       }

       //跳转详情页面
       $scope.details = function(leagueId,matchType){
         window.location.href = "/basket/league.html?leagueId="+leagueId+"&matchType="+matchType;
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


   }
 ]);


 //获取赛事层级
 database.factory("leagueHierarchy", [
   "$resource",
   function ($resource) {
     return $resource(baseUrl+"/core/basketballData.findLeagueHierarchy.do", {}, {
       query: {
         method: "get",
         params: {},
         isArray: false
       }
     });
   }
 ]);

 //获取赛事层级工厂
 database.factory("leagueHierarchyFactory", [
   "leagueHierarchy",
   function (leagueHierarchy) {
     var obj = {};
     obj.loadInfoData = function ($scope,type) {
         leagueHierarchy.get({type:type,lang:$scope.getLanguage()}, function (data) {
           var smallArr=[],bigArr=[];//因界面需求，更改specificLeague数组
           echo.init();  //初始化懒加载方法
           $scope.viewNum = 20;  //当前可视区域为20个
           $scope.loadingImg = false;
           if(data!=null){
             $scope.leagueDatas = "";
             $scope.nationalLeaguess = "";
             $scope.nationalLeague = "";
             $scope.specificLeagues = "";
             $scope.info = data;

             if(data.specificLeague != null){
               $scope.specificLeagues = data.specificLeague;
             }else{
               $scope.specificLeagues = "";
             }
             if(data.nationalLeague != null){
               for(var i = 1;i<data.nationalLeague.length+1;i++){
                 smallArr.push(data.nationalLeague[i-1]);
                 if(i%4 == 0){
                   bigArr.push(smallArr);
                   smallArr = [];
                 }

               }
               bigArr.push(smallArr);

               $scope.nationalLeaguess = bigArr;
               $scope.nationalLeague = data.nationalLeague;
               $scope.nationalLength = 1;
               $(".tab-nav").show();
             }else{
               $scope.nationalLeagues = "";
               $scope.nationalLength = 0;
               $(".tab-nav").hide();
               if(data.specificLeague != null){
                 $(".inter-block").show();
                 $(".country-block").hide();
                 $(".tab-nav ul li:nth(0)").addClass("active").siblings().removeClass("active");
               }
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
   var logoUrl = "@@IMGURL/ba_teamLogo.png";
   if(team=='team'){
     obj.src = logoUrl;
   }else{
     obj.src = logoUrl;
   }
   obj.src = logoUrl;
   obj.onerror = null;
 };

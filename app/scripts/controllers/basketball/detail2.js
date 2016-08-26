/**
 * Created by john on 2016/7/14.
 */
//篮球比赛详细路由器
var detail =angular.module("basketball.detail", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../../views/basketball_template/detail_template.html",
        controller: "detailController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]);

//篮球比赛详细国际化
detail.config(["$translateProvider", function ($translateProvider) {
  var translationsZH = {
    "MATCHES_DETAILS":"比赛详情",
    "MATCHES_STATISTICS":"统计",
    "MATCHES_ANALYSIS":"分析",
    "MATCHES_ASIAN":"亚盘",
    "MATCHES_EUROPE":"欧赔",
    "MATCHES_BALL":"大小球",
    "BIG_BALL":"大球",
    "SMALL_BALL":"小球",
    "MATCHES_TIME":"时间",
    "MATCHES_DETAIL":"赛事",
    "HOME_TEAM":"主胜",
    "HOME_NAME":"主队",
    "MATCHES_SCORE":"比分",
    "AWAY_TEAM":"客胜",
    "AWAY_NAME":"客队",
    "MATCHES_COMPANIES":"公司",
    "MATCHES_HANDICAP":"盘口",
    "IMMEDIATELY_LIVE":"即时",
    "MATCHES_INITIAL":"初盘",
    "BUTTON_CLOSE": "关闭",
    "ATTENTION_SORRY": "抱歉!",
    "ATTENTION_SORRY_TEXT": "关注赛事不能超过{{maxAttentionMatchCount}}场!",
    "DATA_NODATA":"暂无数据",
    "COMPANY_CP":"初盘",
  }
  var translationsZH_HANS = {
    "MATCHES_DETAILS":"比賽詳情",
    "MATCHES_STATISTICS":"統計",
    "MATCHES_ANALYSIS":"分析",
    "MATCHES_ASIAN":"亞盤",
    "MATCHES_EUROPE":"歐賠",
    "MATCHES_BALL":"大小球",
    "BIG_BALL":"大球",
    "SMALL_BALL":"小球",
    "MATCHES_TIME":"時間",
    "MATCHES_DETAIL":"賽事",
    "HOME_TEAM":"主勝",
    "HOME_NAME":"主隊",
    "MATCHES_SCORE":"比分",
    "AWAY_NAME":"客隊",
    "MATCHES_COMPANIES":"公司",
    "MATCHES_HANDICAP":"盤口",
    "IMMEDIATELY_LIVE":"即時",
    "MATCHES_INITIAL":"初盤",
    "BUTTON_CLOSE": "關閉",
    "ATTENTION_SORRY": "抱歉!",
    "ATTENTION_SORRY_TEXT": "關注賽事不能超過{{maxAttentionMatchCount}}場!",
    "DATA_NODATA":"暫無數據",
    "COMPANY_CP":"初盤",
  }
  var translationsEn = {
    "MATCHES_DETAILS":"Matches Details",
    "MATCHES_STATISTICS":"Statistics",
    "MATCHES_ANALYSIS":"Analysis",
    "MATCHES_ASIAN":"HDP",
    "MATCHES_EUROPE":"1×2",
    "MATCHES_BALL":"O/U",
    "BIG_BALL":"Over",
    "SMALL_BALL":"Under",
    "MATCHES_TIME":"Time",
    "MATCHES_DETAIL":"Matches",
    "HOME_TEAM":"Home Team",
    "HOME_NAME":"Home Team",
    "MATCHES_SCORE":"Score",
    "AWAY_TEAM":"Away Team",
    "AWAY_NAME":"Away Team",
    "MATCHES_COMPANIES":"Companies",
    "MATCHES_HANDICAP":"Handicap",
    "IMMEDIATELY_LIVE":"Live",
    "MATCHES_INITIAL":"Initial",
    "BUTTON_CLOSE":	"Close",
    "ATTENTION_SORRY":	"Sorry!",
    "ATTENTION_SORRY_TEXT":	"Favourite cannot exceed {{maxAttentionMatchCount}} !",
    "DATA_NODATA":"No Data",
    "COMPANY_CP":"Initial",
  }
  var translationsTH = {
    "MATCHES_DETAILS":"รายละเอียดการแข่งขัน",
    "MATCHES_STATISTICS":"สถิติรวม",
    "MATCHES_ANALYSIS":"วิเคราะห์",
    "MATCHES_ASIAN":"เอเชียแฮนดิแคป",
    "MATCHES_EUROPE":"1x2 ออดซ",
    "MATCHES_BALL":"สูง/ต่ำ",
    "BIG_BALL":"สูง",
    "SMALL_BALL":"ต่ำ",
    "MATCHES_TIME":"เวลา",
    "MATCHES_DETAIL":"การแข่งขัน",
    "HOME_TEAM":"ทีมเหย้า",
    "HOME_NAME":"ทีมเหย้า",
    "MATCHES_SCORE":"คะแนน",
    "AWAY_TEAM":"ทีมเยือน",
    "AWAY_NAME":"ทีมเยือน",
    "MATCHES_COMPANIES":"บริษัท",
    "MATCHES_HANDICAP":"แฮนดิแคป",
    "IMMEDIATELY_LIVE":"ไลฟ(live)",
    "MATCHES_INITIAL":"เฟิสต์(First)",
    "BUTTON_CLOSE":	"ปิด",
    "ATTENTION_SORRY":	"ขออภัยค่ะ",
    "ATTENTION_SORRY_TEXT":	"เกมของฉันไม่ควรมากกว่า{{maxAttentionMatchCount}}เกม",
    "DATA_NODATA":"ไม่มีข้อมูล",
    "COMPANY_CP":"ก่อน",
  }
  var translationsVI = {
    "MATCHES_DETAILS":"Chi tiết trận đấu",
    "MATCHES_STATISTICS":"Thống kê",
    "MATCHES_ANALYSIS":"Phân tích",
    "MATCHES_ASIAN":"Kèo Á",
    "MATCHES_EUROPE":"Kèo Âu",
    "MATCHES_BALL":"Tài xỉu",
    "BIG_BALL":"Tài",
    "SMALL_BALL":"Xỉu",
    "MATCHES_TIME":"Thời gian",
    "MATCHES_DETAIL":"Giải đấu",
    "HOME_TEAM":"Chủ nhà",
    "HOME_NAME":"Chủ nhà",
    "MATCHES_SCORE":"Tỷ số",
    "AWAY_TEAM":"Đội khách",
    "AWAY_NAME":"Đội khách",
    "MATCHES_COMPANIES":"Công ty",
    "MATCHES_HANDICAP":"Kèo",
    "IMMEDIATELY_LIVE":"Live",
    "MATCHES_INITIAL":"Đầu tiên",
    "BUTTON_CLOSE":	"Đóng",
    "ATTENTION_SORRY":	"Xin lỗi!",
    "ATTENTION_SORRY_TEXT":	"Không thể đặt chú ý giải đấu quá {{maxAttentionMatchCount}}trận!",
    "DATA_NODATA":"không có dữ liệu",
    "COMPANY_CP":"Đầu",
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
detail.controller("detailController", [
  "$http",
  "$scope",
  "$timeout",
  "$filter",
  "$translate",
  "infoServiceFactory",
  "analysisServiceFactory",
  "oddServiceFactory",
  "oddDetailServiceFactory",
  function ($http, $scope,$timeout,$filter,$translate,infoServiceFactory,analysisServiceFactory,oddServiceFactory,oddDetailServiceFactory)
  {

    var thirdId;

    //加载完执行该方法
    $scope.$on("$viewContentLoaded", function ($window) {

      thirdId=mobileUtil.getSearch()['id'];

      $scope.maxAttentionMatchCount = maxAttentionMatchCount;

      var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();

      if(attentionThirdIdArr!=null) {
        if (attentionThirdIdArr.indexOf(thirdId) > -1) {
          $scope.attented = true;
        } else {
          $scope.attented = false;
        }
      }else{
          $scope.attented = false;
      }

      //高度计算
      var setHeight=function (){
        var heightVal=document.documentElement.clientHeight - $("header").height()-$(".banner").height()-$("nav").height();
        $('.container').height(heightVal);
        $('.asian_p_names').height(heightVal);
      }
      setHeight();

      //初始化比赛详情首页数据
      $scope.statistics=null;
      $scope.statistics_status=false;
      infoServiceFactory.loadInfoData($scope,thirdId);

      //导航栏点击
      var index = 0;
      $(".detailNav ul li").click(function(){
        index = $(".detailNav ul li").index(this);
        $(this).addClass("active").siblings().removeClass("active");

        if(index==0)//统计
        {

          $scope.statistics=null;
          $scope.statistics_status=false;

          infoServiceFactory.loadInfoData($scope,thirdId);
          $(".statistics_content").show();
          $(".analysis_content").hide();
          $(".odd_content").hide();
          $(".euro_content").hide();

        }else if(index==1)//分析
        {

          analysisServiceFactory.loadAnalysisData($scope,thirdId);
          $(".statistics_content").hide();
          $(".analysis_content").show();
          $(".odd_content").hide();
          $(".euro_content").hide();

        }else if(index==2)//亚盘
        {




          $scope.flag=true;

          var asianOddType='asiaLet';

          $scope.oddType=asianOddType;
          $scope.odd_datas=false;
          $scope.oddDatas=null;
          $scope.comInfoMatches=null;

          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").show();
          $(".euro_content").hide();

          $(".asian_p").show();
          $(".asian_p_detail").hide();
        }else if(index==3)//欧赔
        {

          var europeOddType='euro';
          $scope.oddType=europeOddType;

          $scope.euro_datas=false;
          $scope.euroOddDatas=null;
          $scope.comInfoMatches=null;

          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").hide();
          $(".euro_content").show();

          $(".asian_p").show();
          $(".asian_p_detail").hide();
        }else if(index==4)//大小球
        {


          $scope.flag=false;


          var ballOddType='asiaSize';
          $scope.oddType=ballOddType;

          $scope.odd_datas=false;
          $scope.oddDatas=null;
          $scope.comInfoMatches=null;

          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();

          $(".analysis_content").hide();
          $(".odd_content").show();
          $(".euro_content").hide();

          $(".asian_p").show();
          $(".asian_p_detail").hide();
        }

      });

      //盘口点击进入详细
      $scope.oddClick = function ($event) {

        var index = $(".odd_content ul li").index($event.currentTarget);

        var oddsId=$(".odd_content ul li").eq(index).find('a').html();

        $(".odd_content .asian_p").hide();
        $(".odd_content .asian_p_detail").show();

        $(".odd_content .asian_p_names span").eq(index-1).addClass("active").siblings().removeClass("active");

        oddDetailServiceFactory.loadOddDetailData($scope,$filter,$scope.oddType,oddsId,index-1);

      }


      //欧赔盘口点击进入详细
      $scope.euroOddClick = function ($event) {

        var index = $(".euro_content ul li").index($event.currentTarget);

        var oddsId=$(".euro_content ul li").eq(index).find('a').html();

        if(oddsId!='')
        {

          $(".euro_content .asian_p").hide();
          $(".euro_content .asian_p_detail").show();

          $(".euro_content .asian_p_names span").eq(index-2).addClass("active").siblings().removeClass("active");

          oddDetailServiceFactory.loadOddDetailData($scope,$filter,$scope.oddType,oddsId,index-2);
        }


      }


      //盘口详细点击返回列表
      $(".asian_p_names a").click(function(){

        $(".asian_p").show();
        $(".asian_p_detail").hide();

      });

      //盘口详细切换
      $scope.oddNamesClick = function ($event) {

        var index = $(".odd_content .asian_p_names span").index($event.currentTarget);

        $(".odd_content .asian_p_names span").eq(index).addClass("active").siblings().removeClass("active");

        var oddsId=$(".odd_content .asian_p_names span").eq(index).attr("id");

        oddDetailServiceFactory.loadOddDetailData($scope,$filter,$scope.oddType,oddsId,index);

      }

      //盘口详细切换
      $scope.euroOddNamesClick = function ($event) {

        var index = $(".euro_content .asian_p_names span").index($event.currentTarget);

        $(".euro_content .asian_p_names span").eq(index).addClass("active").siblings().removeClass("active");

        var oddsId=$(".euro_content .asian_p_names span").eq(index).attr("id");

        oddDetailServiceFactory.loadOddDetailData($scope,$filter,$scope.oddType,oddsId,index);

      }


      //头部点击返回
      $("#back").click(function(){
        //window.location.href="index.html";
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
      //刷新按钮
      $scope.refreshClick=function(){


        $scope.statistics_status=false;
        $scope.statistics=null;

        infoServiceFactory.loadInfoData($scope,thirdId);


        $scope.refreshOn = true;
        if ($scope.arefreshTimeout != null) {
          $timeout.cancel($scope.refreshTimeout);
        }
        $scope.refreshTimeout = $timeout(function () {
          $scope.refreshOn = false;
        }, 1000);


      }

      //头部点击收藏
      $scope.addToAttention=function(){

        var attention = $('#attention').attr("isclicked");
        var attentionThirdIds = $scope.getObjectFromLocalStorage("baAttentionThirdIds");
        var attentionMatchCount = $scope.getObjectFromLocalStorage("baAttentionMatchCount");
        var count = 0;
        if (attentionMatchCount != null) {
          count = parseInt(attentionMatchCount);
        }
        if (attention == "false" || attention == "") {
          var attentionThirdIdArr = [];
          if (attentionThirdIds == null) {
            attentionThirdIdArr.push(thirdId);
            $scope.putObjectToLocalStorage("baAttentionThirdIds", thirdId + ",");
            $scope.putObjectToLocalStorage("baAttentionMatchCount", ++count);
          } else {
            attentionThirdIdArr = attentionThirdIds.split(",");
            if (attentionThirdIdArr.indexOf(thirdId) == -1) {
              if (count < maxAttentionMatchCount) {
                $scope.putObjectToLocalStorage("baAttentionThirdIds", attentionThirdIds + thirdId + ",");
                $scope.putObjectToLocalStorage("baAttentionMatchCount", ++count);
              } else {
                $scope.maxAttentionMatchesCountWarn = true;
                if ($scope.attentionWarnTimeout != null) {
                  $timeout.cancel($scope.attentionWarnTimeout);
                }
                $scope.attentionWarnTimeout = $timeout(function () {
                  $scope.maxAttentionMatchesCountWarn = false;
                }, 3000);
                return;
              }
            }
          }
          $('#attention').attr('isClicked', true);
          $('#attention').removeClass('abolish').addClass('attention');

        } else {
          if (attentionThirdIds != null) {
            attentionThirdIds = attentionThirdIds.replace(thirdId + ",", "");
            $scope.putObjectToLocalStorage("baAttentionThirdIds", attentionThirdIds);
            $scope.putObjectToLocalStorage("baAttentionMatchCount", --count);
          }

          $('#attention').removeClass('attention').addClass('abolish');
          $('#attention').attr('isClicked', false);
        }

      }

    });

    //提示关闭
    $scope.attentionWarnCloseClick = function ($event) {
      $scope.maxAttentionMatchesCountWarn = false;
    }

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


    //分析球队最近比赛数据处理
    $scope.handleTeamRecet=function(teamRecent){

      for(var i=0;i<teamRecent.length;i++)
      {
        if(teamRecent[i].homeGround)
        {

          if(teamRecent[i].result==1)
          {
            teamRecent[i].homeCss='lose';
          }else
          {
            teamRecent[i].homeCss='win';
          }

            teamRecent[i].guestCss='';

        }else
        {
          if(teamRecent[i].result==1)
          {
            teamRecent[i].guestCss='lose';
          }else
          {
            teamRecent[i].guestCss='win';
          }
             teamRecent[i].homeCss='';
        }


      }

      return teamRecent;
    }

    //从cookie中获取关注比赛id数组
    $scope.getAttentionThirdIdArrFromCookie = function () {
      var attentionThirdIds = $scope.getObjectFromLocalStorage("baAttentionThirdIds");
      var attentionThirdIdArr = null;
      if (attentionThirdIds != null) {
        attentionThirdIdArr = attentionThirdIds.split(",");
      }
      return attentionThirdIdArr;
    }


    /*赔率计算升降*/
    $scope.oddSwitch=function(trend){

      var upClass;

      if(trend==1)
      {
        upClass='rise';
      }else if(trend==-1)
      {
        upClass='drop';
      }else
      {
        upClass='';
      }

      return upClass;
    }

  }
]);



//获取比赛头部信息服务
detail.factory("infoService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/basketballDetail.findScore.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//获取比赛头部信息服务工厂
detail.factory("infoServiceFactory", [
  "infoService",
  function (infoService) {
    var obj = {};
    obj.loadInfoData = function ($scope,thirdId) {

        infoService.get({thirdId:thirdId,lang:$scope.getLanguage()}, function (data) {

          if(data!=null){

            $scope.info=data;
            $scope.statistics=data.match.matchScore;

            $scope.ot1=false;
            $scope.ot2=false;
            $scope.ot3=false;

            if(data.match.matchScore!=null) {
              if (data.match.matchScore.addTime == 1) {
                $scope.ot1 = true;
                $scope.ot2 = false;
                $scope.ot3 = false;
              } else if (data.match.matchScore.addTime == 2) {
                $scope.ot1 = true;
                $scope.ot2 = true;
                $scope.ot3 = false;
              } else if (data.match.matchScore.addTime == 3) {
                $scope.ot1 = true;
                $scope.ot2 = true;
                $scope.ot3 = true;
              }
            }
        }
          $scope.statistics_status=true;
      });
    };
    return obj;
  }
]);



//分析服务
detail.factory("analysisService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/basketballDetail.findAnalysisDetail.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//分析服务工厂
detail.factory("analysisServiceFactory", [
  "analysisService",
  function (analysisService) {
    var obj = {};
    obj.loadAnalysisData = function ($scope,thirdId) {
          analysisService.get({thirdId:thirdId,lang:$scope.getLanguage()}, function (data) {
              if(data.homeRecent!=null){
                if(data.homeRecent.length!=0)
                {
                  $scope.homeRecents = $scope.handleTeamRecet(data.homeRecent);
                }

              }
              if(data.guestRecent!=null)
              {
                if(data.guestRecent.length!=0){
                $scope.guestRecents =  $scope.handleTeamRecet(data.guestRecent);
                }
              }


      });
    };
    return obj;
  }
]);


//赔率服务
detail.factory("oddService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/basketballDetail.findOdds.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//赔率服务工厂
detail.factory("oddServiceFactory", [
  "oddService",
  function (oddService) {
    var obj = {};
      obj.loadOddData = function ($scope,thirdId,oddType) {
        oddService.get({thirdId:thirdId,oddsType:oddType,lang:$scope.getLanguage()}, function (data) {

          if(data!=null){

            if(data.companyOdds.length>0)
            {

              var odd=data.companyOdds;

              for(var i=0;i<odd.length;i++) {

                odd[i].oddsData[0].rightClass = $scope.oddSwitch(odd[i].oddsData[0].rightOddsTrend);
                odd[i].oddsData[0].leftClass = $scope.oddSwitch(odd[i].oddsData[0].leftOddsTrend);
                odd[i].oddsData[0].handicapValueClass = $scope.oddSwitch(odd[i].oddsData[0].handicapValueTrend);

              }

              if(oddType == 'euro')
              {
                $scope.euroOddDatas=odd;
              }else{
                $scope.oddDatas=odd;
              }

            }

          }
          if(oddType == 'euro')
          {
            $scope.euro_datas=true;
          }else{
            $scope.odd_datas=true;
          }


      });
    };
    return obj;
  }
]);

//赔率详细服务
detail.factory("oddDetailService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/basketballDetail.findOddsDetail.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//赔率详细服务工厂
detail.factory("oddDetailServiceFactory", [
  "oddDetailService",
  function (oddDetailService) {
    var obj = {};
        obj.loadOddDetailData = function ($scope,$filter,oddType,oddsId,index) {
        oddDetailService.get({oddsType:oddType,oddsId:oddsId,lang:$scope.getLanguage()}, function (data) {

          if(data!=null){

            var comInfoMatches=data.oddsData;

            for(var i=0;i<comInfoMatches.length;i++)
            {

              comInfoMatches[i].rightClass=$scope.oddSwitch(comInfoMatches[i].rightOddsTrend);
              comInfoMatches[i].leftClass=$scope.oddSwitch(comInfoMatches[i].leftOddsTrend);
              comInfoMatches[i].handicapValueClass=$scope.oddSwitch(comInfoMatches[i].handicapValueTrend);

            }

            $scope.comInfoMatches=comInfoMatches;

            $('.euro_content div .asian_p_names').scrollTop(index*(45));


          }else{

            console.log("公司详情--服务器错误！");

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

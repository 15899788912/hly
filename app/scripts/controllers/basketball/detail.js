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
    "O_U":"盘口",
    "IMMEDIATELY_LIVE":"即时",
    "MATCHES_INITIAL":"初盘",
    "BUTTON_CLOSE": "关闭",
    "ATTENTION_SORRY": "抱歉!",
    "ATTENTION_SORRY_TEXT": "关注赛事不能超过{{maxAttentionMatchCount}}场!",
    "DATA_NODATA":"暂无数据",
    "COMPANY_CP":"初盘",
    "FINISHED":"完场",
    "UNDETERMINED":"待定",
    "INTERRUPTED":"中断",
    "CANCEL":"取消",
    "POSTPONED":"推迟",
    "HT":"中场",

    "SCORE_WIN":"胜",
    "SCORE_LOSE":"负",
    "MATCHES_WIN_N":"",
    "MATCHES_LOSE_N":"",
    "MATCHES_WIN":"胜",
    "MATCHES_LOSE":"负",
    "SCORE_RANK":"积分排名",
    "RANK_TEAM":"排名/球队",
    "GP": "已赛",
    "win_RATE":"胜率",
    "H_FIXTURES":"历史交锋",
    "VOER_UNDER":"大小",
    "SPERAD":"让分",
    "RECENT":"近期战绩",
    "OVER":"大",
    "UNDER":"小",
    "VOID":"走",
    "WIN":"赢",
    "LOSE":"输",
    "FUTURE":"未来比赛",
    "INTERVAL":"间隔",
    "DAY":"天",
    "HDP_TREND":"亚盘走势",
    "DISH_ROAD":"盘路",
    "WIN_DISH":"",
    "WIN_DISH_N":"次赢盘",
    "LOSE_DISH":"",
    "LOSE_DISH_N":"次输盘",
    "LET_DISH":"",
    "LET_DISH_N":"次走盘",
    "BIG_N_BALL":"",
    "BIG_N_BALL_N":"次大球",
    "SMALL_N_BALL":"",
    "SMALL_N_BALL_N":"次小球",
    "OVER_UNDER":"大小球",
    "RECENT_SIX":"最近6场",
    "RECENT_PER":"最近表现",
    "SCORE_AVG":"6场平均得分",
    "LOSE_AVG":"6场平均失分",
    "HOME_COURT":"主场",
    "GUEST_COURT":"客场",
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
    "O_U":"盤口",
    "IMMEDIATELY_LIVE":"即時",
    "MATCHES_INITIAL":"初盤",
    "BUTTON_CLOSE": "關閉",
    "ATTENTION_SORRY": "抱歉!",
    "ATTENTION_SORRY_TEXT": "關注賽事不能超過{{maxAttentionMatchCount}}場!",
    "DATA_NODATA":"暫無數據",
    "COMPANY_CP":"初盤",
    "FINISHED":"完場",
    "UNDETERMINED":"待定",
    "INTERRUPTED":"中斷",
    "CANCEL":"取消",
    "POSTPONED":"推遲",
    "HT":"中場",

    "SCORE_WIN":"勝",
    "SCORE_LOSE":"負",
    "MATCHES_WIN_N":"",
    "MATCHES_LOSE_N":"",
    "MATCHES_WIN":"勝",
    "MATCHES_LOSE":"負",
    "SCORE_RANK":"積分排名",
    "RANK_TEAM":"排名/球隊",
    "GP": "已賽",
    "win_RATE":"勝率",
    "H_FIXTURES":"曆史交鋒",
    "VOER_UNDER":"大小",
    "SPERAD":"讓分",
    "RECENT":"近期戰績",
    "OVER":"大",
    "UNDER":"小",
    "VOID":"走",
    "WIN":"贏",
    "LOSE":"輸",
    "FUTURE":"未來比賽",
    "INTERVAL":"間隔",
    "DAY":"天",
    "HDP_TREND":"亞盤走勢",
    "DISH_ROAD":"盤路",
    "WIN_DISH":"",
    "WIN_DISH_N":"次贏盤",
    "LOSE_DISH":"",
    "LOSE_DISH_N":"次輸盤",
    "LET_DISH":"",
    "LET_DISH_N":"次走盤",
    "BIG_N_BALL":"",
    "BIG_N_BALL_N":"次大球",
    "SMALL_N_BALL":"",
    "SMALL_N_BALL_N":"次小球",
    "OVER_UNDER":"大小球",
    "RECENT_SIX":"最近六場",
    "RECENT_PER":"最近表現",
    "SCORE_AVG":"六場平均得分",
    "LOSE_AVG":"六場平均失分",
    "HOME_COURT":"主場",
    "GUEST_COURT":"客場",
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
    "O_U":"Handicap",
    "IMMEDIATELY_LIVE":"Live",
    "MATCHES_INITIAL":"Initial",
    "BUTTON_CLOSE":	"Close",
    "ATTENTION_SORRY":	"Sorry!",
    "ATTENTION_SORRY_TEXT":	"Favourite cannot exceed {{maxAttentionMatchCount}} !",
    "DATA_NODATA":"No Data",
    "COMPANY_CP":"Initial",
    "FINISHED":"Finished",
    "UNDETERMINED":"Undetermined",
    "INTERRUPTED":"Interrupted",
    "CANCEL":"Cancel",
    "POSTPONED":"Postponed",
    "HT":"HT",


    "SCORE_WIN":"WIN",
    "SCORE_LOSE":"Lose",
    "MATCHES_WIN_N":"",
    "MATCHES_LOSE_N":"",
    "MATCHES_WIN":"WIN",
    "MATCHES_LOSE":"Lose",
    "SCORE_RANK":"Points Ranking",
    "RANK_TEAM":"Ranking/Team",
    "GP": "Finished",
    "win_RATE":"Win Rate",
    "H_FIXTURES":"Historical Fixtures",
    "VOER_UNDER":"Over/Under",
    "SPERAD":"Spread",
    "RECENT":"Recent Standings",
    "OVER":"Over",
    "UNDER":"Under",
    "VOID":"Void",
    "WIN":"Win",
    "LOSE":"Lose",
    "FUTURE":"Future Matches",
    "INTERVAL":"Interval",
    "DAY":"Day(s)",
    "HDP_TREND":"HDP Trend",
    "DISH_ROAD":"Trend",
    "WIN_DISH":"",
    "WIN_DISH_N":" Win Handicap",
    "LOSE_DISH":"",
    "LOSE_DISH_N":" Lose Handicap",
    "LET_DISH":"",
    "LET_DISH_N":" Void",
    "BIG_N_BALL":"",
    "BIG_N_BALL_N":" Over",
    "SMALL_N_BALL":"",
    "SMALL_N_BALL_N":" Under",
    "OVER_UNDER":"Over/Under",
    "RECENT_SIX":"Recent 6",
    "RECENT_PER":"Recent Performance",
    "SCORE_AVG":"Avg. scores in 6 matches",
    "LOSE_AVG":"Avg. lose scores in 6 matches",
    "HOME_COURT":"Home",
    "GUEST_COURT":"Away",

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
    "MATCHES_DETAIL":"ลีก",
    "HOME_TEAM":"ทีมเหย้า",
    "HOME_NAME":"ทีมเหย้า",
    "MATCHES_SCORE":"คะแนน",
    "AWAY_TEAM":"ทีมเยือน",
    "AWAY_NAME":"ทีมเยือน",
    "MATCHES_COMPANIES":"บริษัท",
    "MATCHES_HANDICAP":"แฮนดิแคป",
    "O_U":"O/U",
    "IMMEDIATELY_LIVE":"ไลฟ(live)",
    "MATCHES_INITIAL":"เฟิสต์(First)",
    "BUTTON_CLOSE":	"ปิด",
    "ATTENTION_SORRY":	"ขออภัยค่ะ",
    "ATTENTION_SORRY_TEXT":	"เกมของฉันไม่ควรมากกว่า{{maxAttentionMatchCount}}เกม",
    "DATA_NODATA":"ไม่มีข้อมูล",
    "COMPANY_CP":"ก่อน",
    "FINISHED":"Finished",
    "UNDETERMINED":"Undetermined",
    "INTERRUPTED":"Interrupted",
    "CANCEL":"Cancel",
    "POSTPONED":"Postponed",
    "HT":"HT",

    "SCORE_WIN":"ชนะ",
    "SCORE_LOSE":"แพ้",
    "MATCHES_WIN_N":"ชนะ",
    "MATCHES_LOSE_N":"แพ้",
    "MATCHES_WIN":"",
    "MATCHES_LOSE":"",
    "SCORE_RANK":"ตารางคะแนน",
    "RANK_TEAM":"อันดับ/ทีม",
    "GP": "เสร็จสิ้น",
    "win_RATE":"ชนะ",
    "H_FIXTURES":"ประวัติการพบกัน",
    "VOER_UNDER":"สูง/ต่ำ",
    "SPERAD":"แต้มต่อ",
    "RECENT":"ผลการแข่งขันล่าสุด",
    "OVER":"สูง",
    "UNDER":"ต่ำ",
    "VOID":"เสมอ",
    "WIN":"ชนะ",
    "LOSE":"แพ้",
    "FUTURE":"ตารางบอล",
    "INTERVAL":"เกมถัดไป",
    "DAY":"วัน",
    "HDP_TREND":"ราคาบอลHDP",
    "DISH_ROAD":"แต้มต่อ",
    "WIN_DISH":"ชนะในHDP ",
    "WIN_DISH_N":" ครั้ง",
    "LOSE_DISH":"แพ้ในHDP ",
    "LOSE_DISH_N":" ครั้ง",
    "LET_DISH":"เสมอในHDP ",
    "LET_DISH_N":" ครั้ง",
    "BIG_N_BALL":"สูง ",
    "BIG_N_BALL_N":" ครั้ง",
    "SMALL_N_BALL":"ต่ำ ",
    "SMALL_N_BALL_N":" ครั้ง",
    "OVER_UNDER":"สูง/ต่ำ",
    "RECENT_SIX":"สถิติ 6 เกมล่าสุด",
    "RECENT_PER":"สภาพทีมในเร็วๆนี้",
    "SCORE_AVG":"ได้คะแนนโดยเฉลี่ยใน 6 เกม",
    "LOSE_AVG":"เสียคะแนนโดยเฉลี่ยใน 6 เกม",
    "HOME_COURT":"เหย้า",
    "GUEST_COURT":"เยือน",
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
    "MATCHES_TIME":"Ngày",
    "MATCHES_DETAIL":"Giải đấu",
    "HOME_TEAM":"Chủ nhà",
    "HOME_NAME":"Chủ nhà",
    "MATCHES_SCORE":"Tỷ số",
    "AWAY_TEAM":"Đội khách",
    "AWAY_NAME":"Đội khách",
    "MATCHES_COMPANIES":"Công ty",
    "MATCHES_HANDICAP":"Kèo",
    "O_U":"Kèo",
    "IMMEDIATELY_LIVE":"Live",
    "MATCHES_INITIAL":"Đầu tiên",
    "BUTTON_CLOSE":	"Đóng",
    "ATTENTION_SORRY":	"Xin lỗi!",
    "ATTENTION_SORRY_TEXT":	"Không thể đặt chú ý giải đấu quá {{maxAttentionMatchCount}}trận!",
    "DATA_NODATA":"không có dữ liệu",
    "COMPANY_CP":"Đầu",
    "FINISHED":"Finished",
    "UNDETERMINED":"Undetermined",
    "INTERRUPTED":"Interrupted",
    "CANCEL":"Cancel",
    "POSTPONED":"Postponed",
    "HT":"HT",

    "SCORE_WIN":"Thắng",
    "SCORE_LOSE":"Bại",
    "MATCHES_WIN_N":"",
    "MATCHES_LOSE_N":"",
    "MATCHES_WIN":"Thắng",
    "MATCHES_LOSE":"Bại",
    "SCORE_RANK":"Xếp hạng",
    "RANK_TEAM":"Xếp hạng/Đội bóng",
    "GP": "Đã thi đấu",
    "win_RATE":"Tỷ lệ thắng",
    "H_FIXTURES":"Lịch sử đối đầu",
    "VOER_UNDER":"Tài xỉu",
    "SPERAD":"Kèo Á",
    "RECENT":"Thành tích gần đây",
    "OVER":"Tài",
    "UNDER":"Xỉu",
    "VOID":"Hòa kèo",
    "WIN":"Thắng",
    "LOSE":"Thua",
    "FUTURE":"Chưa thi đấu",
    "INTERVAL":"Khoảng cách",
    "DAY":"Ngày",
    "HDP_TREND":"Biểu đồ kèo Á",
    "DISH_ROAD":"Kèo",
    "WIN_DISH":"",
    "WIN_DISH_N":" lần thắng kèo",
    "LOSE_DISH":"",
    "LOSE_DISH_N":" lần thua kèo",
    "LET_DISH":"",
    "LET_DISH_N":" lần hòa kèo",
    "BIG_N_BALL":"",
    "BIG_N_BALL_N":" Tài",
    "SMALL_N_BALL":"",
    "SMALL_N_BALL_N":" xỉu",
    "OVER_UNDER":"Tài xỉu",
    "RECENT_SIX":"6 trận gần đây",
    "RECENT_PER":"Phong độ gần đây",
    "SCORE_AVG":"Điểm được bình quân 6 trận",
    "LOSE_AVG":"Điểm mất bình quân 6 trận",
    "HOME_COURT":"Sân nhà",
    "GUEST_COURT":"Sân khách",
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
  "analysisDetailServiceFactory",
  "oddServiceFactory",
  "oddDetailServiceFactory",
  "WebSocket",
  function ($http, $scope,$timeout,$filter,$translate,infoServiceFactory,analysisServiceFactory,analysisDetailServiceFactory,oddServiceFactory,oddDetailServiceFactory,WebSocket)
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
      $scope.loadingShow=true;

      $scope.initMatches();
      infoServiceFactory.loadInfoData($scope,thirdId);

      //导航栏点击
      var index = 0;
      $(".detailNav ul li").click(function(){
        index = $(".detailNav ul li").index(this);
        $(this).addClass("active").siblings().removeClass("active");

        if(index==0)//统计
        {

          $scope.statistics=null;
          $scope.loadingShow=true;

          infoServiceFactory.loadInfoData($scope,thirdId);
          $(".statistics_content").show();
          $(".analysis_content").hide();
          $(".odd_content").hide();
          $(".euro_content").hide();

        }else if(index==1)//分析
        {

          $scope.loadingShow=true;

          analysisServiceFactory.loadAnalysisData($scope,thirdId);

          analysisDetailServiceFactory.loadAnalysisDetailData($scope,thirdId);

          $(".statistics_content").hide();
          $(".analysis_content").show();
          $(".odd_content").hide();
          $(".euro_content").hide();

          //$scope.websocketClose();

        }else if(index==2)//亚盘
        {




          $scope.flag=true;

          $scope.asian_self=true;
          $scope.BIG_self=false;

          var asianOddType='asiaLet';

          $scope.oddType=asianOddType;
          $scope.loadingShow=true;
          $scope.oddDatas=null;
          $scope.comInfoMatches=null;

          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").show();
          $(".euro_content").hide();

          $(".asian_p").show();
          $(".asian_p_detail").hide();

          //$scope.websocketClose();

          var offsets=$(".detailNav ul li").width();
          $(".detailNav ul").scrollLeft(offsets);
        }else if(index==3)//欧赔
        {

          var europeOddType='euro';
          $scope.oddType=europeOddType;

          $scope.loadingShow=true;
          $scope.euroOddDatas=null;
          $scope.comInfoMatches=null;

          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").hide();
          $(".euro_content").show();

          $(".asian_p").show();
          $(".asian_p_detail").hide();

         // $scope.websocketClose();
          var offsets=2*($(".detailNav ul li").width());
          $(".detailNav ul").scrollLeft(offsets);
        }else if(index==4)//大小球
        {


          $scope.flag=false;

          $scope.asian_self=false;
          $scope.BIG_self=true;


          var ballOddType='asiaSize';
          $scope.oddType=ballOddType;

          $scope.loadingShow=true;
          $scope.oddDatas=null;
          $scope.comInfoMatches=null;

          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();

          $(".analysis_content").hide();
          $(".odd_content").show();
          $(".euro_content").hide();

          $(".asian_p").show();
          $(".asian_p_detail").hide();

         // $scope.websocketClose();
        }

      });

      //盘口点击进入详细
      $scope.oddClick = function ($event) {

        var index = $(".odd_content ul li").index($event.currentTarget);

        var oddsId=$(".odd_content ul li").eq(index).find('a').html();

        $(".odd_content .asian_p").hide();
        $(".odd_content .asian_p_detail").show();

        $(".odd_content .asian_p_names span").eq(index-1).addClass("active").siblings().removeClass("active");
        $scope.loadingShow=true;
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
          $scope.loadingShow=true;
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
        $scope.loadingShow=true;
        oddDetailServiceFactory.loadOddDetailData($scope,$filter,$scope.oddType,oddsId,index);

      }

      //盘口详细切换
      $scope.euroOddNamesClick = function ($event) {

        var index = $(".euro_content .asian_p_names span").index($event.currentTarget);

        $(".euro_content .asian_p_names span").eq(index).addClass("active").siblings().removeClass("active");

        var oddsId=$(".euro_content .asian_p_names span").eq(index).attr("id");
        $scope.loadingShow=true;
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


        $scope.loadingShow=true;
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


    //历史交锋数据处理
    $scope.handleBattleHistory=function(data){

      var battleHistorys=new Array();

      var length=6;
      if(data.length<6)
      {
        length=data.length;
      }


      for(var i=0;i<length;i++)
      {

        if(data[i].homeGround)
        {
          if(data[i].result==1)
          {
            data[i].homeCss='win';
          }else if(data[i].result==0)
          {
            data[i].homeCss='lose';
          }

          data[i].guestCss='';

        }else
        {
          if(data[i].result==1)
          {
            data[i].guestCss='win';
          }else if(data[i].result==0)
          {
            data[i].guestCss='lose';
          }

          data[i].homeCss='';
        }

        if($scope.getCountry()=='c-zh'||$scope.getCountry()=='c-zh-tw'){

          data[i].date=new Date('20'+data[i].date).Format('yy-MM-dd');
        }else{
          data[i].date=new Date('20'+data[i].date).Format('dd/MM/yy');
        }


        battleHistorys.push(data[i]);

      }

      return battleHistorys;
    }


    //大小输赢走数据处理
    //tot	Integer	大小球:1大，2小，0走
    //casLetGoal	String	让球盘路
    //let	Integer	让球:1赢，2输，0走
    $scope.handleBattle=function(data){

      for(var i=0;i<data.length;i++)
      {
        if(data[i].highLow=="1")
        {
          data[i].highLowText=$scope.matches['OVER'];

        }else if(data[i].highLow=="0")
        {
          data[i].highLowText= $scope.matches['UNDER'];
        }else if(data[i].highLow=="")
        {
          data[i].highLowText="-";
        }


        if(data[i].concede=="")
        {
          data[i].concede="-";
        }
        //else{
        //
        //  var scoreArray=data[i].score.split(":");
        //
        //  if(data[i].homeGround)
        //  {
        //
        //    var homeScore=parseFloat(scoreArray[1]);
        //    var guestScore=parseFloat(scoreArray[0]);
        //    var concede=parseFloat(data[i].concede);
        //    var score=homeScore+concede-guestScore;
        //
        //    if(score>0)
        //    {
        //      data[i].concede=data[i].concede+$scope.matches['WIN'];
        //    }else if(score<0)
        //    {
        //      data[i].concede=data[i].concede+$scope.matches['LOSE'];
        //    }else
        //    {
        //      data[i].concede=data[i].concede+$scope.matches['VOID'];
        //    }
        //
        //  }else
        //  {
        //
        //    var homeScore=parseFloat(scoreArray[0]);
        //    var guestScore=parseFloat(scoreArray[1]);
        //    var concede=parseFloat(data[i].concede);
        //    var score=homeScore+concede-guestScore;
        //
        //    if(score>0)
        //    {
        //      data[i].concede=data[i].concede+$scope.matches['LOSE'];
        //    }else if(score<0)
        //    {
        //      data[i].concede=data[i].concede+$scope.matches['WIN'];
        //    }else
        //    {
        //      data[i].concede=data[i].concede+$scope.matches['VOID'];
        //    }
        //
        //  }
        //
        //}


      }

      return data;
    }



    //统计胜负
    $scope.handleWinCount=function(data){

      var homeWinCount= 0,homeLoseCount= 0,winCount= 0,loseCount= 0,bigBigCount= 0,bigSmallCount=0;
      var result=new Object();

      for(var i=0;i<data.length;i++)
      {

        if(data[i].homeGround)
        {
          if(data[i].result==1)
          {
            winCount=winCount+1;
            homeWinCount=homeWinCount+1;

          }else if(data[i].result==0)
          {
            loseCount=loseCount+1;
            homeLoseCount=homeLoseCount+1;
          }

        }else
        {
          if(data[i].result==1)
          {
            winCount=winCount+1;

          }else if(data[i].result==0)
          {
            loseCount=loseCount+1;
          }

        }





        if(data[i].highLow=="1")
        {
          bigBigCount=bigBigCount+1;
        }else if(data[i].highLow=="0")
        {
          bigSmallCount=bigSmallCount+1;
        }


      }
      result.homeWinCount=homeWinCount;
      result.homeLoseCount=homeLoseCount;
      result.winCount=winCount;
      result.loseCount=loseCount;
      result.bigBigCount=bigBigCount;
      result.bigSmallCount=bigSmallCount;

      return result;

    }






    //初始化比赛状态翻译
    // 1:完场 finished
    // 2:待定 Undetermined
   // 3:中断 Interrupted
    //4:取消 Cancel
    //5:推迟 Postponed
    //6中场 HT
    $scope.initMatches = function() {
      $translate(['FINISHED','UNDETERMINED', 'INTERRUPTED','CANCEL','POSTPONED','HT','OVER','UNDER','VOID','WIN','LOSE']).then(
        function (translations) {
          $scope.matches = new Object();
          $scope.matches['FINISHED'] = translations.FINISHED;
          $scope.matches['UNDETERMINED'] = translations.UNDETERMINED;
          $scope.matches['INTERRUPTED'] = translations.INTERRUPTED;
          $scope.matches['CANCEL'] = translations.CANCEL;
          $scope.matches['POSTPONED'] = translations.POSTPONED;
          $scope.matches['HT'] = translations.HT;
          $scope.matches['OVER'] = translations.OVER;
          $scope.matches['UNDER'] = translations.UNDER;
          $scope.matches['VOID'] = translations.VOID;
          $scope.matches['WIN'] = translations.WIN;
          $scope.matches['LOSE'] = translations.LOSE;
        }
      );
    };


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

    // 取国家方法
    $scope.getCountry = function () {
        var country = $scope.getObjectFromLocalStorage("country");
        if (country == null) {
            country = defaultCountry;
        }
        return country;
    };

    $scope.websocketInit = function (thirdId) {
      if (window.WebSocket) {
        WebSocket.close();
        WebSocket.connect(websocketUrl,thirdId, $scope);
      }
    };

    $scope.websocketClose = function () {
      if (window.WebSocket) {
        WebSocket.close();
      }
    };

    //websocket刷新头部统计数据
    $scope.refreshData=function(data){

      var refreshData = angular.fromJson(data);

      if(refreshData.type==100)
      {
        //头部更新
        $scope.info.match.matchScore.guestScore=refreshData.data.guestScore;
        $scope.info.match.matchScore.homeScore=refreshData.data.homeScore;

        $scope.matchTimeStatus=true;


        if(refreshData.data.remainTime==null)
        {
          $scope.matchTimeStatus=false;
          refreshData.data.remainTime="";
        }

        if(refreshData.data.matchStatus==1)
        {
          $scope.matchStatus='1st'+" "+refreshData.data.remainTime;
        }else if(refreshData.data.matchStatus==2)
        {
          $scope.matchStatus='2nd'+" "+refreshData.data.remainTime;
        }else if(refreshData.data.matchStatus==3)
        {
          $scope.matchStatus='3rd'+" "+refreshData.data.remainTime;
        }else if(refreshData.data.matchStatus==4)
        {
          $scope.matchStatus='4th'+" "+refreshData.data.remainTime;
        }else if(refreshData.data.matchStatus==5)
        {
          $scope.matchStatus='OT1'+" "+refreshData.data.remainTime;
        }else if(refreshData.data.matchStatus==6)
        {
          $scope.matchStatus='OT2'+" "+refreshData.data.remainTime;
        }else if(refreshData.data.matchStatus==7)
        {
          $scope.matchStatus='OT3'+" "+refreshData.data.remainTime;
        }else if(refreshData.data.matchStatus==8)
        {
          $scope.matchStatus='OT4'+" "+refreshData.data.remainTime;
          //  -1:完场,-2:待定,-3:中断,-4:取消,-5:推迟,50中场
        }else if(refreshData.data.matchStatus==-1)
        {
          $scope.matchStatus=$scope.matches['FINISHED'];
          $scope.matchTimeStatus=false;
          $scope.websocketClose();
        }else if(refreshData.data.matchStatus==-2)
        {
          $scope.matchStatus=$scope.matches['UNDETERMINED'];
          $scope.matchTimeStatus=false;
        }else if(refreshData.data.matchStatus==-3)
        {
          $scope.matchStatus=$scope.matches['INTERRUPTED'];
          $scope.matchTimeStatus=false;
        }else if(refreshData.data.matchStatus==-4)
        {
          $scope.matchStatus=$scope.matches['CANCEL'];
          $scope.matchTimeStatus=false;
        }else if(refreshData.data.matchStatus==-5)
        {
          $scope.matchStatus=$scope.matches['POSTPONED'];
          $scope.matchTimeStatus=false;
        }else if(refreshData.data.matchStatus==50)
        {
          $scope.matchStatus=$scope.matches['HT'];
          $scope.matchTimeStatus=false;
        }else{
          $scope.matchStatus='';
        }


        //统计更新
        $scope.ot1=false;
        $scope.ot2=false;
        $scope.ot3=false;

        if (refreshData.data.addTime == 1) {
          $scope.ot1 = true;
          $scope.ot2 = false;
          $scope.ot3 = false;
        } else if (refreshData.data.addTime == 2) {
          $scope.ot1 = true;
          $scope.ot2 = true;
          $scope.ot3 = false;
        } else if (refreshData.data.addTime == 3) {
          $scope.ot1 = true;
          $scope.ot2 = true;
          $scope.ot3 = true;
        }

        $scope.statistics.home1=refreshData.data.home1;
        $scope.statistics.home2=refreshData.data.home2;
        $scope.statistics.home3=refreshData.data.home3;
        $scope.statistics.home4=refreshData.data.home4;
        $scope.statistics.homeOt1=refreshData.data.homeOt1;
        $scope.statistics.homeOt2=refreshData.data.homeOt2;
        $scope.statistics.homeOt3=refreshData.data.homeOt3;
        $scope.statistics.guest1=refreshData.data.guest1;
        $scope.statistics.guest2=refreshData.data.guest2;
        $scope.statistics.guest3=refreshData.data.guest3;
        $scope.statistics.guest4=refreshData.data.guest4;
        $scope.statistics.guestOt1=refreshData.data.guestOt1;
        $scope.statistics.guestOt2=refreshData.data.guestOt2;
        $scope.statistics.guestOt3=refreshData.data.guestOt3;


      }

    }

  }
]);



//websocket服务
var connection = null;
detail.factory('WebSocket', function () {
  return {
    connect: function (url,thirdId, $scope) {
      connection = Stomp.client(url);
      //var clientId = new String(new Date().getTime()) + Math.ceil(Math.random() * 1000);
      var headers = {
        'login': websocketLogin,
        'passcode': websocketPasscode
        //'client-id': clientId
      };
      connection.debug = function () {
        //
      };
      connection.heartbeat.outgoing = 10000;
      connection.heartbeat.incoming = 10000;
      var destination=bawebsocketDestinationLive+"."+thirdId;
      connection.connect(headers, function (frame) {

        console.info("connected to Stomp");

        this.subscribe(destination, function (message) {
          if (message.body) {
            $scope.$apply(function () {

              $scope.refreshData(message.body);

            });
          }
        });
      }, function (error) {
        console.info(error);
        console.info("Stomp error");
      });
    },
    state: function () {
      var state;
      try {
        state = connection.ws.readyState;
      } catch (e) {
        state = -1;
      }
      return state;
    },
    close: function () {
      try {
        if(connection != null){
          connection.disconnect(function () {
            console.info("disconnect from Stomp");
          });
          connection = null;
        }
      } catch (e) {
      }
    }
  }
});


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


            if($scope.info.match.matchStatus==1)
            {
              if($scope.statistics.home2==0)
              {
                $scope.statistics.home2="";
                $scope.statistics.home3="";
                $scope.statistics.home4="";
                $scope.statistics.guest2="";
                $scope.statistics.guest3="";
                $scope.statistics.guest4="";
              }
            }else if($scope.info.match.matchStatus==2){

              if($scope.statistics.home3==0)
              {
                $scope.statistics.home3="";
                $scope.statistics.guest3="";
                $scope.statistics.home4="";
                $scope.statistics.guest4="";
              }

            }else if($scope.info.match.matchStatus==50){  //中场

              if($scope.statistics.home3==0)
              {
                $scope.statistics.home3="";
                $scope.statistics.guest3="";
                $scope.statistics.home4="";
                $scope.statistics.guest4="";
              }

            }else if($scope.info.match.matchStatus==3){


              if($scope.statistics.home4==0)
              {
                $scope.statistics.home4="";
                $scope.statistics.guest4="";
              }

            }


            if($scope.getCountry()=='c-zh'||$scope.getCountry()=='c-zh-tw'){
              $scope.month_time=new Date(data.match.date).Format('MM-dd')+" "+data.match.time;
            }else{
              $scope.month_time=data.match.time+" "+new Date(data.match.date).Format('dd/MM');
            }

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


            // 0:未开赛,1:一节,2:二节,5:1'OT，以此类推
            //  -1:完场,-2:待定,-3:中断,-4:取消,-5:推迟,50中场
            //比赛进行中显示：节数和单节时间
            // 比赛结束显示：已完场第一 1st第二 2nd第三 3rd第四 4th加时 OT加时1  OT1加时2  OT2加时3  OT3
            //完场 Finished
            $scope.matchTimeStatus=true;

            if(data.match.matchScore.remainTime=="")
            {
              $scope.matchTimeStatus=false;
            }

            if(data.match.matchStatus==1)
            {
              $scope.matchStatus='1st'+" "+data.match.matchScore.remainTime;
            }else if(data.match.matchStatus==2)
            {
              $scope.matchStatus='2nd'+" "+data.match.matchScore.remainTime;
            }else if(data.match.matchStatus==3)
            {
              $scope.matchStatus='3rd'+" "+data.match.matchScore.remainTime;
            }else if(data.match.matchStatus==4)
            {
              $scope.matchStatus='4th'+" "+data.match.matchScore.remainTime;
            }else if(data.match.matchStatus==5)
            {
              $scope.matchStatus='OT1'+" "+data.match.matchScore.remainTime;
            }else if(data.match.matchStatus==6)
            {
              $scope.matchStatus='OT2'+" "+data.match.matchScore.remainTime;
            }else if(data.match.matchStatus==7)
            {
              $scope.matchStatus='OT3'+" "+data.match.matchScore.remainTime;
            }else if(data.match.matchStatus==8)
            {
              $scope.matchStatus='OT4'+" "+data.match.matchScore.remainTime;
              //  -1:完场,-2:待定,-3:中断,-4:取消,-5:推迟,50中场
            }else if(data.match.matchStatus==-1)
            {
              $scope.matchStatus=$scope.matches['FINISHED'];
              $scope.matchTimeStatus=false;
            }else if(data.match.matchStatus==-2)
            {
              $scope.matchStatus=$scope.matches['UNDETERMINED'];
              $scope.matchTimeStatus=false;
            }else if(data.match.matchStatus==-3)
            {
              $scope.matchStatus=$scope.matches['INTERRUPTED'];
              $scope.matchTimeStatus=false;
            }else if(data.match.matchStatus==-4)
            {
              $scope.matchStatus=$scope.matches['CANCEL'];
              $scope.matchTimeStatus=false;
            }else if(data.match.matchStatus==-5)
            {
              $scope.matchStatus=$scope.matches['POSTPONED'];
              $scope.matchTimeStatus=false;
            }else if(data.match.matchStatus==50)
            {
              $scope.matchStatus=$scope.matches['HT'];
              $scope.matchTimeStatus=false;
            }else{
              $scope.matchStatus='';
            }


          }
          $scope.loadingShow=false;


          //直播添加WebSocket代码
          if(data.match.matchStatus>0)  //0:未开赛,1:一节,2:二节,5:1'OT-1:完场,-2:待定,-3:中断,-4:取消,-5:推迟,50中场
          {
            $scope.websocketInit(thirdId);
          }

      });
    };
    return obj;
  }
]);




//分析服务
detail.factory("analysisService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/basketballDetail.findAnalysis.do", {}, {
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

        //积分排名
        $scope.guestData=data.guestData;
        $scope.homeData=data.homeData;
        if($scope.homeData!=null)
        {
        if($scope.homeData.scoreLoseSix=="")
        {
          $scope.homeData.scoreLoseSix==null;
        }
        if($scope.homeData.scoreWinSix=="")
        {
          $scope.homeData.scoreWinSix==null;
        }
        }
        if($scope.guestData!=null) {
          if ($scope.guestData.scoreLoseSix == "") {
            $scope.guestData.scoreLoseSix == null;
          }
          if ($scope.guestData.scoreWinSix == "") {
            $scope.guestData.scoreWinSix == null;
          }
        }

        if($scope.guestData!=null)
        {
          if($scope.guestData.matchWin=="")
          {
            $scope.guestData.matchWin=null;
          }
        }

        if($scope.homeData!=null)
        {
          if($scope.homeData.matchWin=="")
          {
            $scope.homeData.matchWin=null;
          }
        }



      });
    };
    return obj;
  }
]);



//分析详细服务
detail.factory("analysisDetailService", [
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

//分析详细服务工厂
detail.factory("analysisDetailServiceFactory", [
  "analysisDetailService",
  function (analysisDetailService) {
    var obj = {};
    obj.loadAnalysisDetailData = function ($scope,thirdId) {
      analysisDetailService.get({thirdId:thirdId,lang:$scope.getLanguage()}, function (data) {

        $scope.analysisHomeTeam=data.homeTeam;
        $scope.analysisGuestTeam=data.guestTeam;

        //历史交锋
        if(data.history!=null)
        {
          $scope.battleHistorys=$scope.handleBattleHistory(data.history);

          $scope.battleHistorys=$scope.handleBattle($scope.battleHistorys);

          $scope.battleHistorysCount=$scope.handleWinCount($scope.battleHistorys);


        }

        //近期战绩
        if(data.homeRecent!=null)
        {
          $scope.homeTeamRecents=$scope.handleBattleHistory(data.homeRecent);
          $scope.homeTeamRecents=$scope.handleBattle($scope.homeTeamRecents);

          $scope.homeTeamRecentsCount=$scope.handleWinCount($scope.homeTeamRecents);
        }

        if(data.guestRecent!=null)
        {
        $scope.guestTeamRecents=$scope.handleBattleHistory(data.guestRecent);
        $scope.guestTeamRecents=$scope.handleBattle($scope.guestTeamRecents);

        $scope.guestTeamRecentsCount=$scope.handleWinCount($scope.guestTeamRecents);
        }


        //未来比赛
        if(data.homeFuture!=null)
        {

          var homeFutureMatchs=data.homeFuture;
          var guestFutureMatchs=data.guestFuture;
          for(var i=0;i<homeFutureMatchs.length;i++)
          {
            if($scope.getCountry()=='c-zh'||$scope.getCountry()=='c-zh-tw'){

              homeFutureMatchs[i].date=new Date("20"+homeFutureMatchs[i].date).Format('yy-MM-dd');
            }else{
              homeFutureMatchs[i].date=new Date("20"+homeFutureMatchs[i].date).Format('dd/MM/yy');
            }
          }

          for(var i=0;i<guestFutureMatchs.length;i++)
          {
            if($scope.getCountry()=='c-zh'||$scope.getCountry()=='c-zh-tw'){

              guestFutureMatchs[i].date=new Date("20"+guestFutureMatchs[i].date).Format('yy-MM-dd');
            }else{
              guestFutureMatchs[i].date=new Date("20"+guestFutureMatchs[i].date).Format('dd/MM/yy');
            }
          }

          $scope.homeFutureMatchs=homeFutureMatchs;
          $scope.guestFutureMatchs=guestFutureMatchs;
        }
        $scope.loadingShow=false;
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

            $scope.loadingShow=false;



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

            var comInfoMatches=data.oddsData,rDate,myDate;

            for(var i=0;i<comInfoMatches.length;i++)
            {
              comInfoMatches[i].rightClass=$scope.oddSwitch(comInfoMatches[i].rightOddsTrend);
              comInfoMatches[i].leftClass=$scope.oddSwitch(comInfoMatches[i].leftOddsTrend);
              comInfoMatches[i].handicapValueClass=$scope.oddSwitch(comInfoMatches[i].handicapValueTrend);
              if(i!=comInfoMatches.length-1)
              {
                 rDate=comInfoMatches[i].updateTime.split(" ");
                 myDate=new Date("2016-"+rDate[0]);
                if($scope.getCountry()=='c-zh'||$scope.getCountry()=='c-zh-tw'){

                  comInfoMatches[i].updateTime=myDate.Format('MM-dd ')+rDate[1];
                }else{
                  comInfoMatches[i].updateTime=rDate[1]+myDate.Format(' dd/MM');
                }
              }
            }
            $scope.comInfoMatches=comInfoMatches;

            $('.euro_content div .asian_p_names').scrollTop(index*(45));


          }else{

            console.log("公司详情--服务器错误！");

          }
          $scope.loadingShow=false;
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
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

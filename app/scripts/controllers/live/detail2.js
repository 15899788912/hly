/**
 * Created by john on 2016/7/14.
 */
//足球比赛详细路由器
var detail =angular.module("live.detail", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../../views/live_template/detail_template.html",
        controller: "detailController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]);

//足球比赛详细国际化
detail.config(["$translateProvider", function ($translateProvider) {
  var translationsZH = {
    "MATCHES_DETAILS":"比赛详情",
    "MATCHES_LIVE":"直播",
    "MATCHES_STATISTICS":"统计",
    "MATCHES_ANALYSIS":"分析",
    "MATCHES_ASIAN":"亚盘",
    "MATCHES_EUROPE":"欧赔",
    "MATCHES_BALL":"大小球",
    "BIG_BALL":"大球",
    "SMALL_BALL":"小球",
    "ALLSHOTS":"射门",
    "FOUL":"犯规",
    "FREEHIT":"任意球",
    "LINEOUT":"界外球",
    "OFFSIDE":"越位",
    "TRAPPING":"扑救",
    "MATCHES_WIN":"胜",
    "MATCHES_DRAW":"平",
    "MATCHES_LOSE":"负",
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
    "CORNERS":"角球",
    "GOALS":"进球",
    "REDCARDS":"红牌",
    "YELLOWCARDS":"黄牌",
    "BUTTON_CLOSE": "关闭",
    "ATTENTION_SORRY": "抱歉!",
    "ATTENTION_SORRY_TEXT": "关注赛事不能超过{{maxAttentionMatchCount}}场!",
    "DATA_NODATA":"暂无数据",
    "HANDICAP_VALUE_0_0": "平手",
    "HANDICAP_VALUE_0_25": "平/半",
    "HANDICAP_VALUE_0_5": "半球",
    "HANDICAP_VALUE_0_75": "半/一",
    "HANDICAP_VALUE_1_0": "一球",
    "HANDICAP_VALUE_1_25": "一/球半",
    "HANDICAP_VALUE_1_5": "球半",
    "HANDICAP_VALUE_1_75": "球半/两",
    "HANDICAP_VALUE_2_0": "两球",
    "HANDICAP_VALUE_2_25": "两/两球半",
    "HANDICAP_VALUE_2_5": "两球半",
    "HANDICAP_VALUE_2_75": "两球半/三",
    "HANDICAP_VALUE_3_0": "三球",
    "HANDICAP_VALUE_3_25": "三/三球半",
    "HANDICAP_VALUE_3_5": "三球半",
    "HANDICAP_VALUE_3_75": "三球半/四",
    "HANDICAP_VALUE_4_0": "四球",
    "HANDICAP_VALUE_4_25": "四/四球半",
    "HANDICAP_VALUE_4_5": "四球半",
    "HANDICAP_VALUE_4_75": "四球半/五",
    "HANDICAP_VALUE_5_0": "五球",
    "HANDICAP_VALUE_5_25": "五/五球半",
    "HANDICAP_VALUE_5_5": "五球半",
    "HANDICAP_VALUE_5_75": "五球半/六",
    "HANDICAP_VALUE_6_0": "六球",
    "HANDICAP_VALUE_6_25": "六/六球半",
    "HANDICAP_VALUE_6_5": "六球半",
    "HANDICAP_VALUE_6_75": "六球半/七",
    "HANDICAP_VALUE_7_0": "七球",
    "HANDICAP_VALUE_7_25": "七/七球半",
    "HANDICAP_VALUE_7_5": "七球半",
    "HANDICAP_VALUE_7_75": "七球半/八",
    "HANDICAP_VALUE_8_0": "八球",
    "HANDICAP_VALUE_8_25": "八/八球半",
    "HANDICAP_VALUE_8_5": "八球半",
    "HANDICAP_VALUE_8_75": "八球半/九",
    "HANDICAP_VALUE_9_0": "九球",
    "HANDICAP_VALUE_9_25": "九/九球半",
    "HANDICAP_VALUE_9_5": "九球半",
    "HANDICAP_VALUE_9_75": "九球半/十",
    "COMPANY_CP":"初盘",
  }
  var translationsZH_HANS = {
    "MATCHES_DETAILS":"比賽詳情",
    "MATCHES_LIVE":"直播",
    "MATCHES_STATISTICS":"統計",
    "MATCHES_ANALYSIS":"分析",
    "MATCHES_ASIAN":"亞盤",
    "MATCHES_EUROPE":"歐賠",
    "MATCHES_BALL":"大小球",
    "BIG_BALL":"大球",
    "SMALL_BALL":"小球",
    "ALLSHOTS":"射門",
    "FOUL":"犯規",
    "FREEHIT":"任意球",
    "LINEOUT":"界外球",
    "OFFSIDE":"越位",
    "TRAPPING":"撲救",
    "MATCHES_WIN":"勝",
    "MATCHES_DRAW":"平",
    "MATCHES_LOSE":"負",
    "MATCHES_TIME":"時間",
    "MATCHES_DETAIL":"賽事",
    "HOME_TEAM":"主勝",
    "HOME_NAME":"主隊",
    "MATCHES_SCORE":"比分",
    "AWAY_TEAM":"客勝",
    "AWAY_NAME":"客隊",
    "MATCHES_COMPANIES":"公司",
    "MATCHES_HANDICAP":"盤口",
    "IMMEDIATELY_LIVE":"即時",
    "MATCHES_INITIAL":"初盤",
    "CORNERS":"角球",
    "GOALS":"進球",
    "REDCARDS":"紅牌",
    "YELLOWCARDS":"黃牌",
    "BUTTON_CLOSE": "關閉",
    "ATTENTION_SORRY": "抱歉!",
    "ATTENTION_SORRY_TEXT": "關注賽事不能超過{{maxAttentionMatchCount}}場!",
    "DATA_NODATA":"暫無數據",
    "HANDICAP_VALUE_0_0": "平手",
    "HANDICAP_VALUE_0_25": "平/半",
    "HANDICAP_VALUE_0_5": "半球",
    "HANDICAP_VALUE_0_75": "半/一",
    "HANDICAP_VALUE_1_0": "一球",
    "HANDICAP_VALUE_1_25": "一/球半",
    "HANDICAP_VALUE_1_5": "球半",
    "HANDICAP_VALUE_1_75": "球半/兩",
    "HANDICAP_VALUE_2_0": "兩球",
    "HANDICAP_VALUE_2_25": "兩/兩球半",
    "HANDICAP_VALUE_2_5": "兩球半",
    "HANDICAP_VALUE_2_75": "兩球半/三",
    "HANDICAP_VALUE_3_0": "三球",
    "HANDICAP_VALUE_3_25": "三/三球半",
    "HANDICAP_VALUE_3_5": "三球半",
    "HANDICAP_VALUE_3_75": "三球半/四",
    "HANDICAP_VALUE_4_0": "四球",
    "HANDICAP_VALUE_4_25": "四/四球半",
    "HANDICAP_VALUE_4_5": "四球半",
    "HANDICAP_VALUE_4_75": "四球半/五",
    "HANDICAP_VALUE_5_0": "五球",
    "HANDICAP_VALUE_5_25": "五/五球半",
    "HANDICAP_VALUE_5_5": "五球半",
    "HANDICAP_VALUE_5_75": "五球半/六",
    "HANDICAP_VALUE_6_0": "六球",
    "HANDICAP_VALUE_6_25": "六/六球半",
    "HANDICAP_VALUE_6_5": "六球半",
    "HANDICAP_VALUE_6_75": "六球半/七",
    "HANDICAP_VALUE_7_0": "七球",
    "HANDICAP_VALUE_7_25": "七/七球半",
    "HANDICAP_VALUE_7_5": "七球半",
    "HANDICAP_VALUE_7_75": "七球半/八",
    "HANDICAP_VALUE_8_0": "八球",
    "HANDICAP_VALUE_8_25": "八/八球半",
    "HANDICAP_VALUE_8_5": "八球半",
    "HANDICAP_VALUE_8_75": "八球半/九",
    "HANDICAP_VALUE_9_0": "九球",
    "HANDICAP_VALUE_9_25": "九/九球半",
    "HANDICAP_VALUE_9_5": "九球半",
    "HANDICAP_VALUE_9_75": "九球半/十",
    "COMPANY_CP":"初盤",
  }
  var translationsEn = {
    "MATCHES_DETAILS":"Matches Details",
    "MATCHES_LIVE":"Live",
    "MATCHES_STATISTICS":"Statistics",
    "MATCHES_ANALYSIS":"Analysis",
    "MATCHES_ASIAN":"HDP",
    "MATCHES_EUROPE":"1×2",
    "MATCHES_BALL":"O/U",
    "BIG_BALL":"Over",
    "SMALL_BALL":"Under",
    "ALLSHOTS":"Shoot",
    "FOUL":"Fouls",
    "FREEHIT":"Free Kick",
    "LINEOUT":"Throw-in",
    "OFFSIDE":"Offsides",
    "TRAPPING":"Save",
    "MATCHES_WIN":"WIN",
    "MATCHES_DRAW":"Draw",
    "MATCHES_LOSE":"Lose",
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
    "CORNERS":"Corners",
    "GOALS":"Goals",
    "REDCARDS":"Red Cards",
    "YELLOWCARDS":"Yellow Cards",
    "BUTTON_CLOSE":	"Close",
    "ATTENTION_SORRY":	"Sorry!",
    "ATTENTION_SORRY_TEXT":	"Favourite cannot exceed {{maxAttentionMatchCount}} !",
    "DATA_NODATA":"No Data",
    "HANDICAP_VALUE_0_0":   "0",
    "HANDICAP_VALUE_0_25":    "0.25",
    "HANDICAP_VALUE_0_5": "0.5",
    "HANDICAP_VALUE_0_75":    "0.75",
    "HANDICAP_VALUE_1_0": "1",
    "HANDICAP_VALUE_1_25":    "1.25",
    "HANDICAP_VALUE_1_5": "1.5",
    "HANDICAP_VALUE_1_75":    "1.75",
    "HANDICAP_VALUE_2_0": "2",
    "HANDICAP_VALUE_2_25":    "2.25",
    "HANDICAP_VALUE_2_5": "2.5",
    "HANDICAP_VALUE_2_75":    "2.75",
    "HANDICAP_VALUE_3_0": "3",
    "HANDICAP_VALUE_3_25":    "3.25",
    "HANDICAP_VALUE_3_5": "3.5",
    "HANDICAP_VALUE_3_75":    "3.75",
    "HANDICAP_VALUE_4_0": "4",
    "HANDICAP_VALUE_4_25":    "4.25",
    "HANDICAP_VALUE_4_5": "4.5",
    "HANDICAP_VALUE_4_75":    "4.75",
    "HANDICAP_VALUE_5_0": "5",
    "HANDICAP_VALUE_5_25":    "5.25",
    "HANDICAP_VALUE_5_5": "5.5",
    "HANDICAP_VALUE_5_75":    "5.75",
    "HANDICAP_VALUE_6_0": "6",
    "HANDICAP_VALUE_6_25":    "6.25",
    "HANDICAP_VALUE_6_5": "6.5",
    "HANDICAP_VALUE_6_75":    "6.75",
    "HANDICAP_VALUE_7_0": "7",
    "HANDICAP_VALUE_7_25":    "7.25",
    "HANDICAP_VALUE_7_5": "7.5",
    "HANDICAP_VALUE_7_75":    "7.75",
    "HANDICAP_VALUE_8_0": "8",
    "HANDICAP_VALUE_8_25":    "8.25",
    "HANDICAP_VALUE_8_5": "8.5",
    "HANDICAP_VALUE_8_75":    "8.75",
    "HANDICAP_VALUE_9_0": "9",
    "HANDICAP_VALUE_9_25":    "9.25",
    "HANDICAP_VALUE_9_5": "9.5",
    "HANDICAP_VALUE_9_75":    "9.75",
    "COMPANY_CP":"Initial",
  }
  var translationsTH = {
    "MATCHES_DETAILS":"รายละเอียดการแข่งขัน",
    "MATCHES_LIVE":"ถ่ายทอดสด",
    "MATCHES_STATISTICS":"สถิติรวม",
    "MATCHES_ANALYSIS":"วิเคราะห์",
    "MATCHES_ASIAN":"เอเชียแฮนดิแคป",
    "MATCHES_EUROPE":"1x2 ออดซ",
    "MATCHES_BALL":"สูง/ต่ำ",
    "BIG_BALL":"สูง",
    "SMALL_BALL":"ต่ำ",
    "ALLSHOTS":"ยิงประตู",
    "FOUL":"ฟาวล์",
    "FREEHIT":"เตะฟรี",
    "LINEOUT":"ลูกฟาวล์",
    "OFFSIDE":"การล้ำหน้า",
    "TRAPPING":"ซุปเปอร์เซฟ",
    "MATCHES_WIN":"ชนะ",
    "MATCHES_DRAW":"เสมอ",
    "MATCHES_LOSE":"แพ้",
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
    "CORNERS":"ลูกเตะมุม",
    "GOALS":"ได้ประตู",
    "REDCARDS":"ใบแดง",
    "YELLOWCARDS":"ใบเหลือง",
    "BUTTON_CLOSE":	"ปิด",
    "ATTENTION_SORRY":	"ขออภัยค่ะ",
    "ATTENTION_SORRY_TEXT":	"เกมของฉันไม่ควรมากกว่า{{maxAttentionMatchCount}}เกม",
    "DATA_NODATA":"ไม่มีข้อมูล",
    "HANDICAP_VALUE_0_0":   "0",
    "HANDICAP_VALUE_0_25":    "0.25",
    "HANDICAP_VALUE_0_5": "0.5",
    "HANDICAP_VALUE_0_75":    "0.75",
    "HANDICAP_VALUE_1_0": "1",
    "HANDICAP_VALUE_1_25":    "1.25",
    "HANDICAP_VALUE_1_5": "1.5",
    "HANDICAP_VALUE_1_75":    "1.75",
    "HANDICAP_VALUE_2_0": "2",
    "HANDICAP_VALUE_2_25":    "2.25",
    "HANDICAP_VALUE_2_5": "2.5",
    "HANDICAP_VALUE_2_75":    "2.75",
    "HANDICAP_VALUE_3_0": "3",
    "HANDICAP_VALUE_3_25":    "3.25",
    "HANDICAP_VALUE_3_5": "3.5",
    "HANDICAP_VALUE_3_75":    "3.75",
    "HANDICAP_VALUE_4_0": "4",
    "HANDICAP_VALUE_4_25":    "4.25",
    "HANDICAP_VALUE_4_5": "4.5",
    "HANDICAP_VALUE_4_75":    "4.75",
    "HANDICAP_VALUE_5_0": "5",
    "HANDICAP_VALUE_5_25":    "5.25",
    "HANDICAP_VALUE_5_5": "5.5",
    "HANDICAP_VALUE_5_75":    "5.75",
    "HANDICAP_VALUE_6_0": "6",
    "HANDICAP_VALUE_6_25":    "6.25",
    "HANDICAP_VALUE_6_5": "6.5",
    "HANDICAP_VALUE_6_75":    "6.75",
    "HANDICAP_VALUE_7_0": "7",
    "HANDICAP_VALUE_7_25":    "7.25",
    "HANDICAP_VALUE_7_5": "7.5",
    "HANDICAP_VALUE_7_75":    "7.75",
    "HANDICAP_VALUE_8_0": "8",
    "HANDICAP_VALUE_8_25":    "8.25",
    "HANDICAP_VALUE_8_5": "8.5",
    "HANDICAP_VALUE_8_75":    "8.75",
    "HANDICAP_VALUE_9_0": "9",
    "HANDICAP_VALUE_9_25":    "9.25",
    "HANDICAP_VALUE_9_5": "9.5",
    "HANDICAP_VALUE_9_75":    "9.75",
    "COMPANY_CP":"ก่อน",
  }
  var translationsVI = {
    "MATCHES_DETAILS":"Chi tiết trận đấu",
    "MATCHES_LIVE":"Trực tiếp",
    "MATCHES_STATISTICS":"Thống kê",
    "MATCHES_ANALYSIS":"Phân tích",
    "MATCHES_ASIAN":"Kèo Á",
    "MATCHES_EUROPE":"Kèo Âu",
    "MATCHES_BALL":"Tài xỉu",
    "BIG_BALL":"Tài",
    "SMALL_BALL":"Xỉu",
    "ALLSHOTS":"Sút cầu môn",
    "FOUL":"Phạm lỗi",
    "FREEHIT":"Đá phạt",
    "LINEOUT":"Ném biên",
    "OFFSIDE":"Việt vị",
    "TRAPPING":"Thủ môn cản phá",
    "MATCHES_WIN":"Thắng",
    "MATCHES_DRAW":"Hòa",
    "MATCHES_LOSE":"Bại",
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
    "CORNERS":"Phạt góc",
    "GOALS":"Bàn thắng",
    "REDCARDS":"Thẻ đỏ",
    "YELLOWCARDS":"Thẻ vàng",
    "BUTTON_CLOSE":	"Đóng",
    "ATTENTION_SORRY":	"Xin lỗi!",
    "ATTENTION_SORRY_TEXT":	"Không thể đặt chú ý giải đấu quá {{maxAttentionMatchCount}}trận!",
    "DATA_NODATA":"không có dữ liệu",
    "HANDICAP_VALUE_0_0":   "0",
    "HANDICAP_VALUE_0_25":    "0.25",
    "HANDICAP_VALUE_0_5": "0.5",
    "HANDICAP_VALUE_0_75":    "0.75",
    "HANDICAP_VALUE_1_0": "1",
    "HANDICAP_VALUE_1_25":    "1.25",
    "HANDICAP_VALUE_1_5": "1.5",
    "HANDICAP_VALUE_1_75":    "1.75",
    "HANDICAP_VALUE_2_0": "2",
    "HANDICAP_VALUE_2_25":    "2.25",
    "HANDICAP_VALUE_2_5": "2.5",
    "HANDICAP_VALUE_2_75":    "2.75",
    "HANDICAP_VALUE_3_0": "3",
    "HANDICAP_VALUE_3_25":    "3.25",
    "HANDICAP_VALUE_3_5": "3.5",
    "HANDICAP_VALUE_3_75":    "3.75",
    "HANDICAP_VALUE_4_0": "4",
    "HANDICAP_VALUE_4_25":    "4.25",
    "HANDICAP_VALUE_4_5": "4.5",
    "HANDICAP_VALUE_4_75":    "4.75",
    "HANDICAP_VALUE_5_0": "5",
    "HANDICAP_VALUE_5_25":    "5.25",
    "HANDICAP_VALUE_5_5": "5.5",
    "HANDICAP_VALUE_5_75":    "5.75",
    "HANDICAP_VALUE_6_0": "6",
    "HANDICAP_VALUE_6_25":    "6.25",
    "HANDICAP_VALUE_6_5": "6.5",
    "HANDICAP_VALUE_6_75":    "6.75",
    "HANDICAP_VALUE_7_0": "7",
    "HANDICAP_VALUE_7_25":    "7.25",
    "HANDICAP_VALUE_7_5": "7.5",
    "HANDICAP_VALUE_7_75":    "7.75",
    "HANDICAP_VALUE_8_0": "8",
    "HANDICAP_VALUE_8_25":    "8.25",
    "HANDICAP_VALUE_8_5": "8.5",
    "HANDICAP_VALUE_8_75":    "8.75",
    "HANDICAP_VALUE_9_0": "9",
    "HANDICAP_VALUE_9_25":    "9.25",
    "HANDICAP_VALUE_9_5": "9.5",
    "HANDICAP_VALUE_9_75":    "9.75",
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

//足球比赛详细控制器
detail.controller("detailController", [
  "$http",
  "$scope",
  "$timeout",
  "$filter",
  "$translate",
  "infoServiceFactory",
  "statisticalServiceFactory",
  "analysisServiceFactory",
  "oddServiceFactory",
  "oddDetailServiceFactory",
  function ($http, $scope,$timeout,$filter,$translate,infoServiceFactory,statisticalServiceFactory,analysisServiceFactory,oddServiceFactory,oddDetailServiceFactory)
  {

    //var thirdId='343814';
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
      }
      setHeight();

      //初始化比赛详情首页数据
      $scope.initMatchesEvent();
      $scope.live_status=false;
      infoServiceFactory.loadInfoData($scope,thirdId);


      //导航栏点击
      var index = 0;
      $(".detailNav ul li").click(function(){
        index = $(".detailNav ul li").index(this);
        $(this).addClass("active").siblings().removeClass("active");
        //$(".container .active").eq(index).show().siblings().hide();

        if(index==0)//直播
        {
          infoServiceFactory.loadInfoData($scope,thirdId);
          $(".live_content").show();
          $(".statistics_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").hide();

        }else if(index==1)//统计
        {

          //$scope.statistics_status=false;
          //$scope.homeStatis=null;

          if($scope.liveStatus=='1')
          {
            //$scope.homeStatis=$scope.statisticalData.homeStatis;
            //$scope.guestStatis=$scope.statisticalData.guestStatis;
            //
            //$scope.allShotsCSS=$scope.handleStatistical($scope.homeStatis.allShots,$scope.guestStatis.allShots);
            ////$scope.trappingCSS=$scope.handleStatistical($scope.homeStatis.trapping,$scope.guestStatis.trapping);
            //$scope.offSideCSS=$scope.handleStatistical($scope.homeStatis.offSide,$scope.guestStatis.offSide);
            //$scope.freeHitCSS=$scope.handleStatistical($scope.homeStatis.freeHit,$scope.guestStatis.freeHit);
            //$scope.foulCSS=$scope.handleStatistical($scope.homeStatis.foul,$scope.guestStatis.foul);
            //$scope.lineOutCSS=$scope.handleStatistical($scope.homeStatis.lineOut,$scope.guestStatis.lineOut);
            //
            //$scope.statistics_status=true;

          }else{
            $scope.statistics_status=false;
            $scope.homeStatis=null;
            statisticalServiceFactory.loadStatisticalData($scope,thirdId);
          }




          $(".live_content").hide();
          $(".statistics_content").show();
          $(".analysis_content").hide();
          $(".odd_content").hide();

        }else if(index==2)//分析
        {
          analysisServiceFactory.loadAnalysisData($scope,thirdId);

          $(".live_content").hide();
          $(".statistics_content").hide();
          $(".analysis_content").show();
          $(".odd_content").hide();

        }else if(index==3)//亚盘
        {

          $scope.flag=true;

          $scope.initHandicapValueMap();

          var asianOddType=1;

          $scope.oddType=asianOddType;

          $scope.odd_datas=false;

          $scope.oddDatas=null;
          $scope.comInfoMatches=null;

          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);

          $(".statistics_content").hide();
          $(".live_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").show();

          $(".asian_p").show();
          $(".asian_p_detail").hide();
        }else if(index==4)//欧赔
        {

          $scope.flag=true;

          var europeOddType=2;
          $scope.oddType=europeOddType;

          $scope.odd_datas=false;
          $scope.oddDatas=null;
          $scope.comInfoMatches=null;
          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();
          $(".live_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").show();

          $(".asian_p").show();
          $(".asian_p_detail").hide();
        }else if(index==5)//大小球
        {

          $scope.flag=false;

          var ballOddType=3;
          $scope.oddType=ballOddType;
          $scope.odd_datas=false;
          $scope.oddDatas=null;
          $scope.comInfoMatches=null;
          oddServiceFactory.loadOddData($scope,thirdId,$scope.oddType);
          $(".statistics_content").hide();
          $(".live_content").hide();
          $(".analysis_content").hide();
          $(".odd_content").show();

          $(".asian_p").show();
          $(".asian_p_detail").hide();
        }

      });

      //盘口点击进入详细
      $scope.oddClick = function ($event) {

        var index = $(".odd_content ul li").index($event.currentTarget);

        var companyId=$(".odd_content ul li").eq(index).find('a').html();

        $(".asian_p").hide();
        $(".asian_p_detail").show();

        $(".asian_p_names span").eq(index-1).addClass("active").siblings().removeClass("active");

        $scope.initHandicapValueMap();

        oddDetailServiceFactory.loadOddDetailData($scope,$filter,thirdId,$scope.oddType,companyId);

      }

      //盘口详细点击返回列表
      $(".asian_p_names a").click(function(){

        $(".asian_p").show();
        $(".asian_p_detail").hide();

      });

      //盘口详细切换
      $scope.oddNamesClick = function ($event) {

        var index = $(".asian_p_names span").index($event.currentTarget);

        $(".asian_p_names span").eq(index).addClass("active").siblings().removeClass("active");

        var companyId=$(".asian_p_names span").eq(index).attr("id");

        $scope.initHandicapValueMap();

        oddDetailServiceFactory.loadOddDetailData($scope,$filter,thirdId,$scope.oddType,companyId);

      }

      //头部点击返回
      $("#back").click(function(){
        //window.location.href="../index.html";
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
      $scope.refreshClick=function(type){

        if('live'==type)//直播刷新
        {
          $scope.live_status=false;
          $scope.timeLives=null;
          infoServiceFactory.loadInfoData($scope,thirdId);

        }else if('statistics'==type){  //统计刷新

          $scope.statistics_status=false;
          $scope.homeStatis=null;

          if($scope.liveStatus=='1')
          {
            infoServiceFactory.loadInfoData($scope,thirdId);

          }else{
            statisticalServiceFactory.loadStatisticalData($scope,thirdId);
          }


        }

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
        var attentionThirdIds = $scope.getObjectFromLocalStorage("attentionThirdIds");
        var attentionMatchCount = $scope.getObjectFromLocalStorage("attentionMatchCount");
        var count = 0;
        if (attentionMatchCount != null) {
          count = parseInt(attentionMatchCount);
        }
        if (attention == "false" || attention == "") {
          var attentionThirdIdArr = [];
          if (attentionThirdIds == null) {
            attentionThirdIdArr.push(thirdId);
            $scope.putObjectToLocalStorage("attentionThirdIds", thirdId + ",");
            $scope.putObjectToLocalStorage("attentionMatchCount", ++count);
          } else {
            attentionThirdIdArr = attentionThirdIds.split(",");
            if (attentionThirdIdArr.indexOf(thirdId) == -1) {
              if (count < maxAttentionMatchCount) {
                $scope.putObjectToLocalStorage("attentionThirdIds", attentionThirdIds + thirdId + ",");
                $scope.putObjectToLocalStorage("attentionMatchCount", ++count);
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
            $scope.putObjectToLocalStorage("attentionThirdIds", attentionThirdIds);
            $scope.putObjectToLocalStorage("attentionMatchCount", --count);
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

    //统计数据处理
    $scope.handleStatistical=function(home,guest){

      var total=home+guest;

      if(total==0)
      {
        return {"homeCss":'50%', // 小数点后两位百分比
                "gusetCss":'50%'
               }
      }else{

        var homeCss=Math.round(home / total * 10000) / 100.00 + "%";

        return {"homeCss":homeCss, // 小数点后两位百分比
                "gusetCss":(100-parseFloat(homeCss)+ "%")
             }
      }
    }

    //分析数据处理
    $scope.handleAnalysis=function(battleResult){

      var array=battleResult.split(";");

      return {"win":array[0],
              "draw":array[1],
              "lose":array[2]
             }
    }


    //分析球队最近比赛数据处理
    $scope.handleTeamRecet=function(teamRecent){

      for(var i=0;i<teamRecent.length;i++)
      {
        if(teamRecent[i].markTeam==1)
        {
          if(teamRecent[i].teamColor==0)
          {
            teamRecent[i].homeCss='lose';
          }else if(teamRecent[i].teamColor==1)
          {
            teamRecent[i].homeCss='draw';
          }else if(teamRecent[i].teamColor==3)
          {
            teamRecent[i].homeCss='win';
          }

          teamRecent[i].guestCss='';

        }else if(teamRecent[i].markTeam==2)
        {
          if(teamRecent[i].teamColor==0)
          {
            teamRecent[i].guestCss='lose';
          }else if(teamRecent[i].teamColor==1)
          {
            teamRecent[i].guestCss='draw';
          }else if(teamRecent[i].teamColor==3)
          {
            teamRecent[i].guestCss='win';
          }

          teamRecent[i].homeCss='';
        }

      }

      return teamRecent;
    }



    //初始化事件翻译
    $scope.initMatchesEvent = function() {
      $translate(['CORNERS', 'GOALS','REDCARDS','YELLOWCARDS']).then(
        function (translations) {
          $scope.matchesEvent = new Object();
          $scope.matchesEvent['CORNERS'] = translations.CORNERS;
          $scope.matchesEvent['GOALS'] = translations.GOALS;
          $scope.matchesEvent['REDCARDS'] = translations.REDCARDS;
          $scope.matchesEvent['YELLOWCARDS'] = translations.YELLOWCARDS;
        }
      );
    };

    //从cookie中获取关注比赛id数组
    $scope.getAttentionThirdIdArrFromCookie = function () {
      var attentionThirdIds = $scope.getObjectFromLocalStorage("attentionThirdIds");
      var attentionThirdIdArr = null;
      if (attentionThirdIds != null) {
        attentionThirdIdArr = attentionThirdIds.split(",");
      }
      return attentionThirdIdArr;
    }


    //赔率转换数据
    $scope.initHandicapValueMap = function () {
      var ret = $translate(['HANDICAP_VALUE_0_0', 'HANDICAP_VALUE_0_25', 'HANDICAP_VALUE_0_5', 'HANDICAP_VALUE_0_75',
        'HANDICAP_VALUE_1_0', 'HANDICAP_VALUE_1_25', 'HANDICAP_VALUE_1_5', 'HANDICAP_VALUE_1_75',
        'HANDICAP_VALUE_2_0', 'HANDICAP_VALUE_2_25', 'HANDICAP_VALUE_2_5', 'HANDICAP_VALUE_2_75',
        'HANDICAP_VALUE_3_0', 'HANDICAP_VALUE_3_25', 'HANDICAP_VALUE_3_5', 'HANDICAP_VALUE_3_75',
        'HANDICAP_VALUE_4_0', 'HANDICAP_VALUE_4_25', 'HANDICAP_VALUE_4_5', 'HANDICAP_VALUE_4_75',
        'HANDICAP_VALUE_5_0', 'HANDICAP_VALUE_5_25', 'HANDICAP_VALUE_5_5', 'HANDICAP_VALUE_5_75',
        'HANDICAP_VALUE_6_0', 'HANDICAP_VALUE_6_25', 'HANDICAP_VALUE_6_5', 'HANDICAP_VALUE_6_75',
        'HANDICAP_VALUE_7_0', 'HANDICAP_VALUE_7_25', 'HANDICAP_VALUE_7_5', 'HANDICAP_VALUE_7_75',
        'HANDICAP_VALUE_8_0', 'HANDICAP_VALUE_8_25', 'HANDICAP_VALUE_8_5', 'HANDICAP_VALUE_8_75',
        'HANDICAP_VALUE_9_0', 'HANDICAP_VALUE_9_25', 'HANDICAP_VALUE_9_5', 'HANDICAP_VALUE_9_75'
      ]).then(
        function (translations) {
          $scope.handicapValueMap = {};
          $scope.handicapValueMap["0"] = translations.HANDICAP_VALUE_0_0;
          $scope.handicapValueMap["0.0"] = translations.HANDICAP_VALUE_0_0;
          $scope.handicapValueMap["0.25"] = translations.HANDICAP_VALUE_0_25;
          $scope.handicapValueMap["0.5"] = translations.HANDICAP_VALUE_0_5;
          $scope.handicapValueMap["0.75"] = translations.HANDICAP_VALUE_0_75;

          $scope.handicapValueMap["1"] = translations.HANDICAP_VALUE_1_0;
          $scope.handicapValueMap["1.0"] = translations.HANDICAP_VALUE_1_0;
          $scope.handicapValueMap["1.25"] = translations.HANDICAP_VALUE_1_25;
          $scope.handicapValueMap["1.5"] = translations.HANDICAP_VALUE_1_5;
          $scope.handicapValueMap["1.75"] = translations.HANDICAP_VALUE_1_75;

          $scope.handicapValueMap["2"] = translations.HANDICAP_VALUE_2_0;
          $scope.handicapValueMap["2.0"] = translations.HANDICAP_VALUE_2_0;
          $scope.handicapValueMap["2.25"] = translations.HANDICAP_VALUE_2_25;
          $scope.handicapValueMap["2.5"] = translations.HANDICAP_VALUE_2_5;
          $scope.handicapValueMap["2.75"] = translations.HANDICAP_VALUE_2_75;

          $scope.handicapValueMap["3"] = translations.HANDICAP_VALUE_3_0;
          $scope.handicapValueMap["3.0"] = translations.HANDICAP_VALUE_3_0;
          $scope.handicapValueMap["3.25"] = translations.HANDICAP_VALUE_3_25;
          $scope.handicapValueMap["3.5"] = translations.HANDICAP_VALUE_3_5;
          $scope.handicapValueMap["3.75"] = translations.HANDICAP_VALUE_3_75;

          $scope.handicapValueMap["4"] = translations.HANDICAP_VALUE_4_0;
          $scope.handicapValueMap["4.0"] = translations.HANDICAP_VALUE_4_0;
          $scope.handicapValueMap["4.25"] = translations.HANDICAP_VALUE_4_25;
          $scope.handicapValueMap["4.5"] = translations.HANDICAP_VALUE_4_5;
          $scope.handicapValueMap["4.75"] = translations.HANDICAP_VALUE_4_75;

          $scope.handicapValueMap["5"] = translations.HANDICAP_VALUE_5_0;
          $scope.handicapValueMap["5.0"] = translations.HANDICAP_VALUE_5_0;
          $scope.handicapValueMap["5.25"] = translations.HANDICAP_VALUE_5_25;
          $scope.handicapValueMap["5.5"] = translations.HANDICAP_VALUE_5_5;
          $scope.handicapValueMap["5.75"] = translations.HANDICAP_VALUE_5_75;

          $scope.handicapValueMap["6"] = translations.HANDICAP_VALUE_6_0;
          $scope.handicapValueMap["6.0"] = translations.HANDICAP_VALUE_6_0;
          $scope.handicapValueMap["6.25"] = translations.HANDICAP_VALUE_6_25;
          $scope.handicapValueMap["6.5"] = translations.HANDICAP_VALUE_6_5;
          $scope.handicapValueMap["6.75"] = translations.HANDICAP_VALUE_6_75;

          $scope.handicapValueMap["7"] = translations.HANDICAP_VALUE_7_0;
          $scope.handicapValueMap["7.0"] = translations.HANDICAP_VALUE_7_0;
          $scope.handicapValueMap["7.25"] = translations.HANDICAP_VALUE_7_25;
          $scope.handicapValueMap["7.5"] = translations.HANDICAP_VALUE_7_5;
          $scope.handicapValueMap["7.75"] = translations.HANDICAP_VALUE_7_75;

          $scope.handicapValueMap["8"] = translations.HANDICAP_VALUE_8_0;
          $scope.handicapValueMap["8.0"] = translations.HANDICAP_VALUE_8_0;
          $scope.handicapValueMap["8.25"] = translations.HANDICAP_VALUE_8_25;
          $scope.handicapValueMap["8.5"] = translations.HANDICAP_VALUE_8_5;
          $scope.handicapValueMap["8.75"] = translations.HANDICAP_VALUE_8_75;

          $scope.handicapValueMap["9"] = translations.HANDICAP_VALUE_9_0;
          $scope.handicapValueMap["9.0"] = translations.HANDICAP_VALUE_9_0;
          $scope.handicapValueMap["9.25"] = translations.HANDICAP_VALUE_9_25;
          $scope.handicapValueMap["9.5"] = translations.HANDICAP_VALUE_9_5;
          $scope.handicapValueMap["9.75"] = translations.HANDICAP_VALUE_9_75;
        }
      );
    }



    //亚盘赔率首页数据处理
    $scope.convertAsiaOdds = function (odd) {

      if (odd == null) {
        return;
      }

      for(var i=0;i<odd.length;i++)
      {
        var mediumOddsVal_f= odd[i].details[0].hand;
        var mediumOddsVal_i= odd[i].details[1].hand;

        odd[i].details[0].hand=$scope.convertAsiaOddVal(mediumOddsVal_f.toString());
        odd[i].details[1].hand=$scope.convertAsiaOddVal(mediumOddsVal_i.toString());
      }

      return odd;

    }


    //大小球赔率首页数据处理
    $scope.convertSizeOdds = function (odd) {
      if (odd == null) {
        return;
      }

      for(var i=0;i<odd.length;i++)
      {
        var mediumOddsVal_f= odd[i].details[0].hand;
        var mediumOddsVal_i= odd[i].details[1].hand;

        odd[i].details[0].hand=$scope.convertSizeOddVal(mediumOddsVal_f.toString());
        odd[i].details[1].hand=$scope.convertSizeOddVal(mediumOddsVal_i.toString());
      }

      return odd;
    }




    /*赔率计算升降*/
    $scope.oddSwitch=function(oddObj){
      var upNum=0,upClass="";
      if(oddObj){
        upNum=oddObj.newOddNum-oddObj.oldOddNum>0?1:(oddObj.newOddNum-oddObj.oldOddNum<0?-1:0);
      }
      upClass=$scope.cssSwitch(upNum);
      return upClass;
    }

    $scope.cssSwitch=function(info){
      var classInfo;
      classInfo=info>0?"rise":(info<0?"drop":"");
      return classInfo;
    }



    //亚盘赔率转换
    $scope.convertAsiaOddVal = function (oddVal) {
      var handicapValueMap = $scope.handicapValueMap;
      if (null == oddVal) {
        return;
      }
      var mediumOdds = oddVal;
      if (null == mediumOdds) {
        return;
      }
      var mediumOddsVal = parseFloat(mediumOdds);
      var handicapValue = handicapValueMap[Math.abs(mediumOddsVal)];
      if (mediumOddsVal < 0) {
        handicapValue = "*" + handicapValue;
      }
      return handicapValue;
    }


    //大小球赔率转换
    $scope.convertSizeOddVal= function (oddVal) {
      if (oddVal == null) {
        return;
      }
      var mediumOdds = oddVal;
      if (null == mediumOdds) {
        return;
      }
      var mediumOddsVal = parseFloat(mediumOdds),handicapValue="";

      if (mediumOdds.lastIndexOf('.5') != -1) {
        if (mediumOdds.endWith('.0')) {
          handicapValue = mediumOdds.substring(0, mediumOdds.lastIndexOf(0));
        } else {
          handicapValue = mediumOdds;
        }
      } else if (mediumOdds.lastIndexOf('.0') != -1) {
        var val = mediumOdds.split(".")[0];
        handicapValue = val;
      } else if (mediumOdds.lastIndexOf('.25') != -1 || mediumOdds.lastIndexOf('.75') != -1) {
        var before = (mediumOddsVal - 0.25) + '';
        if (before.endWith(".0")) {
          before = before.substring(0, before.indexOf("."));
        }
        var last = (mediumOddsVal + 0.25) + '';
        if (last.endWith(".0")) {
          last = last.substring(0, last.indexOf("."));
        }
        handicapValue = before + "/" + last;
      }else{
        handicapValue = mediumOdds;
      }
      return handicapValue;
    }



    //直播首页数据处理
    $scope.handleIndexLive = function(data,liveStatus){

      //1025主队角球 1029主队进球 1032主队红牌 1034主队黄牌 2049客队角球 2053客队进球 2056客队红牌 2058客队黄牌
      //得分:主队进球1029-取消1030  客队进球2053+2054
      var indexInfo=new Object();

      var h_corner=0,h_yc=0,h_rc=0,h_score=0,h_qScore=0,g_corner=0,g_yc=0,g_rc=0,g_score=0,g_qScore=0;

      if(liveStatus=='1')
      {

        var matchLive=data.matchInfo.matchLive;

        for(var i=0;i<matchLive.length;i++)
        {
          if(matchLive[i].code.toString()=='1025')
          {
            h_corner=h_corner+1;
          }else if(matchLive[i].code.toString()=='1029')
          {
            h_score=h_score+1;

          }else if(matchLive[i].code.toString()=='1030')
          {
            h_qScore=h_qScore+1;
          }else if(matchLive[i].code.toString()=='1032')
          {
            h_yc=h_rc+1;
          }else if(matchLive[i].code.toString()=='1032')
          {
            h_rc=h_rc+1;
          }else if(matchLive[i].code.toString()=='1034')
          {
            h_yc=h_yc+1;
          }else if(matchLive[i].code.toString()=='2049')
          {
            g_corner=g_corner+1;
          }else if(matchLive[i].code.toString()=='2053')
          {
            g_score=g_score+1;
          }else if(matchLive[i].code.toString()=='2054')
          {
            g_qScore=g_qScore+1;
          }else if(matchLive[i].code.toString()=='2056')
          {
            g_rc=g_rc+1;
          }else if(matchLive[i].code.toString()=='2058')
          {
            g_yc=g_yc+1;
          }
        }

        indexInfo.home_corner=h_corner;
        indexInfo.home_yc=h_yc;
        indexInfo.home_rc=h_rc;
        indexInfo.home_score=h_score-h_qScore;


        indexInfo.guest_corner=g_corner;
        indexInfo.guest_yc=g_yc;
        indexInfo.guest_rc=g_rc;
        indexInfo.guest_score=g_score-g_qScore;


      }else{

        indexInfo.home_corner=data.homeTeamInfo.corner;
        indexInfo.home_yc=data.homeTeamInfo.yc;
        indexInfo.home_rc=data.homeTeamInfo.rc;
        indexInfo.home_score=data.homeTeamInfo.score;
        indexInfo.home_halfScore=data.homeTeamInfo.halfScore;

        indexInfo.guest_corner=data.guestTeamInfo.corner;
        indexInfo.guest_yc=data.guestTeamInfo.yc;
        indexInfo.guest_rc=data.guestTeamInfo.rc;
        indexInfo.guest_score=data.guestTeamInfo.score;
        indexInfo.guest_halfScore=data.guestTeamInfo.halfScore;
      }

      return indexInfo;
    }



    //直播时间轴数据处理
    $scope.handleMatchLive = function (matchLive,liveStatus) {

        var timeLives=new Array();
        //1025主队角球 1029主队进球 1032主队红牌 1034主队黄牌 2049客队角球 2053客队进球 2056客队红牌 2058客队黄牌

        var matchTimeLiveArray=['1025','1029','1032','1034','2049','2053','2056','2058'];

        if(liveStatus=='1')//直播中倒序
        {

          for(var i=matchLive.length-1;i>=0;i--)
          {
            if(matchTimeLiveArray.indexOf(matchLive[i].code.toString())>-1)
            {
              timeLives.push(matchLive[i]);
            }
          }

        }else{

          for(var i=0;i<matchLive.length;i++)
          {
            if(matchTimeLiveArray.indexOf(matchLive[i].code.toString())>-1)
            {
              timeLives.push(matchLive[i]);
            }
          }
        }

        var liveHeight=document.documentElement.clientHeight - $("header").height()-$(".banner").height()-$("nav").height();
        var indexHeight=liveHeight/6;
        var lineHeight;

        if(timeLives.length>6)
        {
          liveHeight=liveHeight+(timeLives.length-4)*indexHeight+$('.liveOver').height();
          lineHeight=liveHeight-indexHeight;
        }else{
          //if(liveStatus=='-1')
          //{
            lineHeight=liveHeight-indexHeight;
          //}else
          //{
          //  lineHeight=(timeLives.length+1)*indexHeight;
          //}

        }

        for(var i=0;i<timeLives.length;i++)
        {
          timeLives[i].time=parseInt(timeLives[i].time/1000/60);
          timeLives[i].bottom=(i+1)*indexHeight;
          var code=timeLives[i].code.toString();

          if(code=='1025'||code=='2049')
          {
            timeLives[i].msgText=$scope.matchesEvent['CORNERS'];
            timeLives[i].picUrl='/images/live/cornerKickIcon.png';
            if(code=='1025')
            {
              timeLives[i].isHome=1;
            }else{
              timeLives[i].isHome=0;
            }
          }
          if(code=='1029'||code=='2053')
          {
            timeLives[i].msgText=$scope.matchesEvent['GOALS'];
            timeLives[i].picUrl='/images/live/goal.png';
            if(code=='1029')
            {
              timeLives[i].isHome=1;
            }else{
              timeLives[i].isHome=0;
            }
          }
          if(code=='1032'||code=='2056')
          {
            timeLives[i].msgText=$scope.matchesEvent['REDCARDS'];
            timeLives[i].picUrl='/images/live/red.png';
            if(code=='1032')
            {
              timeLives[i].isHome=1;
            }else{
              timeLives[i].isHome=0;
            }
          }
          if(code=='1034'||code=='2058')
          {
            timeLives[i].msgText=$scope.matchesEvent['YELLOWCARDS'];
            timeLives[i].picUrl='/images/live/yellow.png';
            if(code=='1034')
            {
              timeLives[i].isHome=1;
            }else{
              timeLives[i].isHome=0;
            }
          }
        }

        return {"liveHeight":liveHeight, "lineHeight":lineHeight,"timeLives":timeLives};


      }

    //直播统计数据处理
    $scope.handleStatisticalLive = function(data){
      //射门: 1039 1040 1041   2063 2064 2065 shots
      //犯规: 1042 2066  foul
      //任意球: 1027 1028      2051 2052 freehit
      //界外球：1054 2078 line
      //越位：1043 2067 offside

      var homeStatis=new Object(),guestStatis=new Object();

      var h_allShots_o=0,h_allShots_t= 0,h_allShots_s= 0,h_foul=0,h_freeHit_o=0,h_freeHit_t=0,h_lineOut=0,h_offSide=0,
          g_allShots_o=0,g_allShots_t= 0,g_allShots_s= 0,g_foul=0,g_freeHit_o = 0,g_freeHit_t=0,g_lineOut=0,g_offSide=0;

        var matchLive=data.matchInfo.matchLive;

        for(var i=0;i<matchLive.length;i++)
        {

          if(matchLive[i].code.toString()=='1039')
          {
            h_allShots_o=h_allShots_o+1;
          }else if(matchLive[i].code.toString()=='1040')
          {
            h_allShots_t=h_allShots_t+1;

          }else if(matchLive[i].code.toString()=='1041')
          {
            h_allShots_s=h_allShots_s+1;
          }else if(matchLive[i].code.toString()=='1042')
          {
            h_foul=h_foul+1;
          }else if(matchLive[i].code.toString()=='1027')
          {
            h_freeHit_o=h_freeHit_o+1;
          }else if(matchLive[i].code.toString()=='1028')
          {
            h_freeHit_t=h_freeHit_t+1;
          }else if(matchLive[i].code.toString()=='1054')
          {
            h_lineOut=h_lineOut+1;
          }else if(matchLive[i].code.toString()=='1043')
          {
            h_offSide=h_offSide+1;
          }else if(matchLive[i].code.toString()=='2063')
        {
          g_allShots_o=g_allShots_o+1;
        }else if(matchLive[i].code.toString()=='2064')
        {
          g_allShots_t=g_allShots_t+1;

        }else if(matchLive[i].code.toString()=='2065')
        {
          g_allShots_s=g_allShots_s+1;
        }else if(matchLive[i].code.toString()=='2066')
        {
          g_foul=g_foul+1;
        }else if(matchLive[i].code.toString()=='2051')
        {
          g_freeHit_o=g_freeHit_o+1;
        }else if(matchLive[i].code.toString()=='2052')
        {
          g_freeHit_t=g_freeHit_t+1;
        }else if(matchLive[i].code.toString()=='2078')
        {
          g_lineOut=g_lineOut+1;
        }else if(matchLive[i].code.toString()=='2067')
        {
          g_offSide=g_offSide+1;
        }



        }



      homeStatis.allShots=h_allShots_o+h_allShots_s+h_allShots_t;
      homeStatis.foul=h_foul;
      homeStatis.freeHit=h_freeHit_t+h_freeHit_o;
      homeStatis.lineOut=h_lineOut;
      homeStatis.offSide=h_offSide;

      guestStatis.allShots=g_allShots_o+g_allShots_s+g_allShots_t;
      guestStatis.foul=g_foul;
      guestStatis.freeHit=g_freeHit_t+g_freeHit_o;
      guestStatis.lineOut=g_lineOut;
      guestStatis.offSide=g_offSide;


      return {"homeStatis":homeStatis, "guestStatis":guestStatis};


    }




  }
]);



//获取塞事直播信息服务
detail.factory("infoService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footBallMatch.queryIosMatchInfos.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//获取塞事直播信息服务工厂
detail.factory("infoServiceFactory", [
  "infoService",
  function (infoService) {
    var obj = {};
    obj.loadInfoData = function ($scope,thirdId) {

        infoService.get({thirdId:thirdId,lang:$scope.getLanguage()}, function (data) {

          var liveHeight,lineHeight,timeLives;

          var indexInfo=new Object();


          if(data.result==200){

            $scope.info=data;

            var liveStatus=data.liveStatus;

            if(liveStatus!='0')// '0':代表直播前，'1':代表直播中，'-1':直播结束
            {

                var objMatchTimeLive= new Object();

                if(liveStatus=='1')

                {
                  indexInfo=$scope.handleIndexLive(data,liveStatus);
                  objMatchTimeLive=$scope.handleMatchLive(data.matchInfo.matchLive,liveStatus);

                  $scope.statisticalData=$scope.handleStatisticalLive(data);

                  console.info("直播中......");

                  //统计数据
                  $scope.homeStatis=$scope.statisticalData.homeStatis;
                  $scope.guestStatis=$scope.statisticalData.guestStatis;

                  $scope.allShotsCSS=$scope.handleStatistical($scope.homeStatis.allShots,$scope.guestStatis.allShots);
                  //$scope.trappingCSS=$scope.handleStatistical($scope.homeStatis.trapping,$scope.guestStatis.trapping);
                  $scope.offSideCSS=$scope.handleStatistical($scope.homeStatis.offSide,$scope.guestStatis.offSide);
                  $scope.freeHitCSS=$scope.handleStatistical($scope.homeStatis.freeHit,$scope.guestStatis.freeHit);
                  $scope.foulCSS=$scope.handleStatistical($scope.homeStatis.foul,$scope.guestStatis.foul);
                  $scope.lineOutCSS=$scope.handleStatistical($scope.homeStatis.lineOut,$scope.guestStatis.lineOut);

                  $scope.statistics_status=true;

                  //直播添加WebSocket代码





                }else{

                  indexInfo=$scope.handleIndexLive(data,liveStatus);

                  objMatchTimeLive=$scope.handleMatchLive(data.matchInfo.matchTimeLive,liveStatus);



                  console.info("直播结束......");
                }

                liveHeight=objMatchTimeLive.liveHeight;
                lineHeight=objMatchTimeLive.lineHeight;
                timeLives=objMatchTimeLive.timeLives;

            }

          }
          $scope.liveStatus=liveStatus;
          $scope.indexInfo=indexInfo;
          $('.live_message').height(liveHeight);
          $('.live_timeLine').height(liveHeight);
          $('.line').height(lineHeight);
          $scope.timeLives=timeLives;
          $scope.live_status=true;
      });
    };
    return obj;
  }
]);


//统计服务
detail.factory("statisticalService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footBallMatch.findStatisticalDatas.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//统计服务工厂
detail.factory("statisticalServiceFactory", [
  "statisticalService",
  function (statisticalService) {
    var obj = {};
      obj.loadStatisticalData = function ($scope,thirdId) {
       statisticalService.get({thirdId:thirdId,lang:$scope.getLanguage()}, function (data) {

         if (data.result == 200)
           {
             $scope.homeStatis=data.homeStatis;
             $scope.guestStatis=data.guestStatis;

             $scope.allShotsCSS=$scope.handleStatistical($scope.homeStatis.allShots,$scope.guestStatis.allShots);
             $scope.trappingCSS=$scope.handleStatistical($scope.homeStatis.trapping,$scope.guestStatis.trapping);
             $scope.offSideCSS=$scope.handleStatistical($scope.homeStatis.offSide,$scope.guestStatis.offSide);
             $scope.freeHitCSS=$scope.handleStatistical($scope.homeStatis.freeHit,$scope.guestStatis.freeHit);
             $scope.foulCSS=$scope.handleStatistical($scope.homeStatis.foul,$scope.guestStatis.foul);
             $scope.lineOutCSS=$scope.handleStatistical($scope.homeStatis.lineOut,$scope.guestStatis.lineOut);

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
    return $resource(baseUrl+"/core/footBallMatch.matchAnalysis.do", {}, {
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

            if (data.result == 200) {

              $scope.homeBattles =$scope.handleTeamRecet(data.teamRecent.home.battles);

              $scope.guestBattles = $scope.handleTeamRecet(data.teamRecent.guest.battles);

              $scope.homeBattleResult=$scope.handleAnalysis(data.teamRecent.home.battleResult);

              $scope.guestBattleResult=$scope.handleAnalysis(data.teamRecent.guest.battleResult);

            }

      });
    };
    return obj;
  }
]);


//指数/博彩服务
detail.factory("oddService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footBallMatch.matchOdd.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//指数/博彩服务工厂
detail.factory("oddServiceFactory", [
  "oddService",
  function (oddService) {
    var obj = {};
      obj.loadOddData = function ($scope,thirdId,oddType) {
        oddService.get({thirdId:thirdId,oddType:oddType,lang:$scope.getLanguage()}, function (data) {

          if(data.result==200){

            if(data.listOdd.length>0)
            {
              var odd=data.listOdd;

              for(var i=0;i<odd.length;i++)
              {

                if(odd[i].details[1].homeOdd>odd[i].details[0].homeOdd)
                {
                     odd[i].details[1].homeCss='rise';
                }else if(odd[i].details[1].homeOdd<odd[i].details[0].homeOdd)
                {
                    odd[i].details[1].homeCss='drop';
                }else{
                    odd[i].details[1].homeCss='';
                }

                if(odd[i].details[1].guestOdd>odd[i].details[0].guestOdd)
                {
                  odd[i].details[1].guestCss='rise';
                }else if(odd[i].details[1].guestOdd<odd[i].details[0].guestOdd)
                {
                  odd[i].details[1].guestCss='drop';
                }else{
                  odd[i].details[1].guestCss='';
                }

                if(odd[i].details[1].hand>odd[i].details[0].hand)
                {
                  odd[i].details[1].handCss='rise';
                }else if(odd[i].details[1].hand<odd[i].details[0].hand)
                {
                  odd[i].details[1].handCss='drop';
                }else{
                  odd[i].details[1].handCss='';
                }

              }


              if(oddType==1)//亚盘需要转换格式
              {
                $scope.oddDatas=$scope.convertAsiaOdds(odd);
              }else if(oddType==3){     //大小球需要转换格式
                $scope.oddDatas=$scope.convertSizeOdds(odd);
              }else{
                $scope.oddDatas=odd;
              }


            }

          }

          $scope.odd_datas=true;

      });
    };
    return obj;
  }
]);

//指数/博彩详细服务
detail.factory("oddDetailService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footBallMatch.matchOddDetail.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//指数/博彩详细服务工厂
detail.factory("oddDetailServiceFactory", [
  "oddDetailService",
  function (oddDetailService) {
    var obj = {};
        obj.loadOddDetailData = function ($scope,$filter,thirdId,oddType,companyId) {
        oddDetailService.get({thirdId:thirdId,oddType:oddType,companyId:companyId,lang:$scope.getLanguage()}, function (data) {


          if(data.result==200){
            $scope.comInfoMatches = [];
            $scope.comInfoMatchesBak = [];
            var dataObj=data.details,obj={},detailList=[],date=null,isFirst=true,
              leftOddObj={},rightOddObj={},middObj={},oldHome=0,oldGuest=0,oldHand=0;
            for (var i = 0; i < dataObj.length; i++) {
              date=new Date(dataObj[i].date);
              detailList=dataObj[i].details;
              isFirst=i==0?true:false;
              for (var j = 0; j < detailList.length; j++) {
                if(j==0){
                  if(i==0){
                    oldHome=detailList[j].homeOdd;
                    oldGuest=detailList[j].guestOdd;
                    oldHand=detailList[j].hand;
                  }
                }else{
                  oldHome=detailList[j-1].homeOdd;
                  oldGuest=detailList[j-1].guestOdd;
                  oldHand=detailList[j-1].hand;
                }
                obj=detailList[j];
                leftOddObj["newOddNum"]=obj.homeOdd;
                leftOddObj["oldOddNum"]=oldHome;
                rightOddObj["newOddNum"]=obj.guestOdd;
                rightOddObj["oldOddNum"]=oldGuest;
                middObj["newOddNum"]=obj.hand;
                middObj["oldOddNum"]=oldHand;
                obj.middleClass=$scope.oddSwitch(middObj);
                obj.leftUpClass=$scope.oddSwitch(leftOddObj);
                obj.rightUpClass=$scope.oddSwitch(rightOddObj);
                if(oddType==1){
                  obj.handVal=$scope.convertAsiaOddVal(obj.hand.toString());
                }else if(oddType==3){
                  obj.handVal=$scope.convertSizeOddVal(obj.hand.toString());
                }else{
                  obj.handVal=obj.hand;
                }
                if(j==(detailList.length-1)){  //保存最后一个
                  oldHome=detailList[j].homeOdd;
                  oldGuest=detailList[j].guestOdd;
                  oldHand=detailList[j].hand;
                }

                obj.day = date.Format("MM-dd");
                obj.dayInfo=obj.day+" "+obj.time;
                $scope.comInfoMatchesBak.push(obj);
              }
              //过滤
              $scope.comInfoMatchesBak=$filter("orderBy")($scope.comInfoMatchesBak,'dayInfo',true);
              $scope.comInfoMatches=$scope.comInfoMatchesBak;
            }

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
  var logoUrl = "@@IMGURL/live/404.png";
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

String.prototype.startWith = function (str) {
  var reg = new RegExp("^" + str);
  return reg.test(this);
}
String.prototype.endWith = function (str) {
  var reg = new RegExp(str + "$");
  return reg.test(this);
}




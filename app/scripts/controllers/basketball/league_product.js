/**
 * Created by lvrui on 2016/8/31.
 * 9-3，逻辑需要整理下,
 * 比如阶段的index和stageId,一级阶段和二级阶段, 阶段列表里是否包含一级阶段和二级阶段.....
 * 3 个swiper tab, 初始化tab,切换数据，更新数据,按赛季更新，按阶段更新，左右滑动更新, 数据更新，需要整理.
 * 4-5 个tab 的变量维护 需要整理.
 * ...........
 *
 */

/**
 * @desp 赛程相关的后台接口.
 */
var backend = {
  schedule: "/core/basketballData.findSchedule.do",         //赛程
  rank: "/core/basketballData.findRanking.do",              //排名
  statistic: "/core/basketballData.findStatistic.do",        //统计.
  header: "/core/basketballData.findLeagueHeader.do",        //赛事头部，赛季..,
  let: "/core/basketballData.findAsiaLet.do",               //让分盘.
  size: "/core/basketballData.findAsiaSize.do"               //大小盘.
}

/**
 * 球队logo加载失败时，使用默认logo
 * @param obj
 */
var logoLoadErr = function (obj,team) {
  var deBsketLogoUrl = "@@IMGURL/ba_teamLogo.png";
  obj.src = deBsketLogoUrl;
  obj.onerror = null;
};
var errSrcDirective = [function() {
  return {
    scope: true,
    restrict : "EA",
    link: function(scope,element, attrs) {
      var loadImg = attrs["errSrc"] || "";
      var newImg = new Image();
      newImg.src = loadImg;
      if(newImg.complete) {
        attrs.$set("src", loadImg);
      } else {
        newImg.onload =function(){
          attrs.$set("src", loadImg);
        }
      }

      newImg.onerror = function() {
        attrs.$set("src", "@@IMGURL/ba_teamLogo.png");
        newImg.onerror = null;
      };
    }
  }

}]


/** i18n **/
var i18nConfig = ["$translateProvider", function ($translateProvider) {
  var i18n = {
    zh : {
      "DATABASE_KEYWORDS":"篮球资料库,篮球数据库,NBA数据库,CBA数据库",
      "DATABASE_DESCRIPTION":"一比分篮球资料库为您提供各国篮球联赛、篮球赛程、篮球球队等赛事数据库、包含NBA，CBA，明星赛等主要联赛的赛事、赛程积分、让球大小盘路、球队资料、联盟排名等数据资料。",
      league_eqop2: "",
      league_uneqop2:"",
      HEAD_TITLE : "【篮球资料库】篮球联赛_赛程_球队-一比分",
      DATA_NODATA : "暂无数据",
      league_score: "分",
      league_scorechang : "场",
      league_schedule:"赛程",
      league_rank:"排行",
      league_lets:"让分盘",
      league_sizes:"大小盘",
      league_stass:"统计",
      league_season:"赛季",
      league_confirm:"确认",
      league_cancel:"取消",
      league_stage:"阶段",
      league_rankIndex:"排名",
      league_rankName:"球队",
      league_rankMatch:"赛",
      leagues_rankWin:"胜",
      leagues_rankLose:"负",
      league_rankWinrate:"胜率",
      league_rankWincha:"胜差",
      league_last:"近况",
      league_all:"全部",
      league_home:"主场",
      league_guest:"客场",
      league_up:"上盘",
      league_down:"下盘",
      league_lose:"输",
      league_win:"赢",
      league_walk:"走",
      league_finish:"已赛",
      league_unfinish:"未赛",
      league_allmatchs:"总赛",
      league_big:"大",
      league_small:"小",
      league_stas:"联赛统计",
      league_most:"联赛之最",
      league_winlose:"胜负统计",
      league_homewin:"主胜",
      league_guestwin:"客胜",
      league_op:"欧赔统计",
      league_eqop:"赛果与欧赔一致",
      league_uneqop:"赛果与欧赔相反",
      league_letstas:"让分统计",
      league_zous:"走水",
      league_sizestas:"大小球统计",
      league_scorestas:"得分统计",
      league_scoreall:"总得分",
      league_scorefinish:"已赛场次",
      league_scoreavg:"场均得分",
      league_matchnum:"场次统计",
      league_allchang:"总场次",
      league_finished:"已完赛",
      league_unfinished:"未完赛",
      league_attackmost:"攻击能力最强者(得分)",
      league_attackleast:"攻击能力最弱者(得分)",
      league_defencemost:"防守能力最强者(得分)",
      league_defenceleast:"防守能力最弱者（得分)"
    },
    en : {
      "DATABASE_KEYWORDS":"Basketball Data Bank,Basketball Database,NBA Database, CBA Database",
      "DATABASE_DESCRIPTION":"One Score Basketball Database provides you with the national basketball leagues, basketball schedules, basketball teams and other match data, including matches, points, HDP O/U trend, team information, league ranking and other data information of the major leagues like NBA, CBA, and All-star.",
      league_eqop2: "",
      league_uneqop2:"",
      HEAD_TITLE : "【Basketball Database】Basketball League_Schedule_Team_One Score",
      DATA_NODATA:"No Data",
      league_score: "score",
      league_scorechang : "match",
      league_schedule:"Schedule",
      league_rank:"Ranking",
      league_lets:"HDP",
      league_sizes:"O/U",
      league_stass:"Statistics",
      league_season:"Season",
      league_confirm:"Confirm",
      league_cancel:"Cancel",
      league_stage:"Stage",
      league_rankIndex:"Ranking",
      league_rankName:"Team",
      league_rankMatch:"Match",
      leagues_rankWin:"Win",
      leagues_rankLose:"Lose",
      league_rankWinrate:"Win Rate",
      league_rankWincha:"Game Behind",
      league_last:"Recent Form",
      league_all:"All",
      league_home:"Home",
      league_guest:"Away",
      league_up:"Upper Handicap",
      league_down:"Lower Handicap",
      league_lose:"Lose",
      league_win:"Win",
      league_walk:"Void",
      league_finish:"Finished",
      league_unfinish:"Notstarted",
      league_allmatchs:"All Matches",
      league_big:"Over",
      league_small:"Under",
      league_stas:"League Statistics",
      league_most:"The Most of League",
      league_winlose:"Win/Lose Statistics",
      league_homewin:"Home Win",
      league_guestwin:"Away Win",
      league_op:"1x2 Statistics",
      league_eqop:"Results Consistent with 1x2",
      league_uneqop:"Results Opposite to 1x2",
      league_letstas:"HDP Statistics",
      league_zous:"Void",
      league_sizestas:"O/U Statistics",
      league_scorestas:"Points Statistics",
      league_scoreall:"Total Points",
      league_scorefinish:"Matches Played",
      league_scoreavg:"Points per Match",
      league_matchnum:"Matches Statistics",
      league_allchang:"Total Matches",
      league_finished:"Finished",
      league_unfinished:"Unfinished",
      league_attackmost:"Strongest Offense(points)",
      league_attackleast:"Weakest Offense(points)",
      league_defencemost:"Strongest Defense(points)",
      league_defenceleast:"Weakest Defense(points)"

    },

    zh_hans:{
      "DATABASE_KEYWORDS":"籃球資料庫,籃球數據庫,NBA數據庫,CBA數據庫",
      "DATABASE_DESCRIPTION":"一比分籃球資料庫為您提供各國籃球聯賽、籃球賽程、籃球球隊等賽事數據庫、包含NBA，CBA，明星賽等主要聯賽的賽事、賽事積分、讓球大小盤路、球隊資料、聯盟排名等數據資料。",

      league_eqop2: "",
      league_uneqop2:"",
      HEAD_TITLE : "【籃球資料庫】籃球聯賽_賽程_球隊-一比分",
      DATA_NODATA:"暫無數據",
      league_score: "分",
      league_scorechang : "場",
      league_schedule:"賽程",
      league_rank:"排行",
      league_lets:"讓分盤",
      league_sizes:"大小盤",
      league_stass:"統計",
      league_season:"賽季",
      league_confirm:"確認",
      league_cancel:"取消",
      league_stage:"階段",
      league_rankIndex:"排名",
      league_rankName:"球隊",
      league_rankMatch:"賽",
      leagues_rankWin:"勝",
      leagues_rankLose:"負",
      league_rankWinrate:"勝率",
      league_rankWincha:"勝差",
      league_last:"近况",
      league_all:"全部",
      league_home:"主場",
      league_guest:"客場",
      league_up:"上盤",
      league_down:"下盤",
      league_lose:"輸",
      league_win:"赢",
      league_walk:"走",
      league_finish:"已賽",
      league_unfinish:"未賽",
      league_allmatchs:"總赛",
      league_big:"大",
      league_small:"小",
      league_stas:"聯賽統計",
      league_most:"聯賽之最",
      league_winlose:"勝負統計",
      league_homewin:"主勝",
      league_guestwin:"客勝",
      league_op:"歐賠統計",
      league_eqop:"賽果與歐賠一致",
      league_uneqop:"賽果與歐賠相反",
      league_letstas:"讓分統計",
      league_zous:"走水",
      league_sizestas:"大小球統計",
      league_scorestas:"得分統計",
      league_scoreall:"總得分",
      league_scorefinish:"已賽場次",
      league_scoreavg:"場均得分",
      league_matchnum:"場次統計",
      league_allchang:"總場次",
      league_finished:"已完賽",
      league_unfinished:"未完賽",
      league_attackmost:"攻擊能力最强者(得分)",
      league_attackleast:"攻擊能力最弱者(得分)",
      league_defencemost:"防守能力最强者(得分)",
      league_defenceleast:"防守能力最弱者(得分)"
    },
    th:{

      "DATABASE_KEYWORDS":"ฐานข้อมูลบาสเกตบอล,ฐานข้อมูลบาสเกตบอล,ฐานข้อมูลNBA,ฐานข้อมูลCBA",
      "DATABASE_DESCRIPTION":"ฐานข้อมูลเว็บไซต์วันสกอร์เสนอทุกลีกการแข่งขันกีฬาบาสเกตบอล、ตารางการแข่งขันบาสเกตบอล、ฐานข้อมูลทีมบาสเกตบอลการแข่งขันอื่น、รวมทั้งการแข่งขันออร์สตาร์NBA、CBA、การแข่งขันลีกหลัก、ตารางการสะสมคะแนนการแข่งขัน、กราฟอัตราการต่อรองบาสสูง/ต่ำ、ข้อมูลนักกีฬาบาสเกตบอล、การจัดอันดับสถิติข้อมูลการแข่งขัน ",

      HEAD_TITLE : " 【ฐานข้อมูลบาสเกตบอล】 ลีกบาสเกตบอล_ตารางการแข่งขัน_ทีม_วันสกอร์ ",

      DATA_NODATA:"ไม่มีข้อมูล",
      league_score: "คะแนน",
      league_scorechang : "เกม",
      league_schedule:"ตารางการแข่งขัน",
      league_rank:"ตารางจัดอันดับ",
      league_lets:"แต้มต่อ",
      league_sizes:"สูง/ต่ำ",
      league_stass:"สถิติ",
      league_season:"ฤดูกาลแข่งขัน",
      league_confirm:"ยืนยัน",
      league_cancel:"ยกเลิก",
      league_stage:"ช่วงเวลา",
      league_rankIndex:"อันดับ",//
      league_rankName:"ทีม",    //
      league_rankMatch:"ทั้งหมด",
      leagues_rankWin:"ชนะ",
      leagues_rankLose:"แพ้",
      league_rankWinrate:"อัตราชนะ",//
      league_rankWincha:"ชนะ",   //
      league_last:"อัพเดท",
      league_all:"ทั้งหมด",
      league_home:"ทีมเหย้า",
      league_guest:"ทีมเยือน",
      league_up:"ทีมต่อ",
      league_down:"ทีมรอง",
      league_lose:"แพ้",
      league_win:"ชนะ",
      league_walk:"เสมอ",       //
      league_finish:"ทั้งหมด",   //
      league_unfinish:"ยังไม่เริ่ม",
      league_allmatchs:"การแข่งขันทั้งหมด",
      league_big:"สูง",
      league_small:"ต่ำ",
      league_stas:"สถิติลีก",
      league_most:"ที่สดของลีก",
      league_winlose:"สถิติการแพ้ชนะ",
      league_homewin:"ทีมเหย้าชนะ",
      league_guestwin:"ทีมเยือนชนะ",
      league_op:"สถิติราคาพูล",
      league_eqop:"ผลการแข่งขันกับการทายผล",
      league_eqop2 : "ของราคาพูลตรงกัน",
      league_uneqop:"ผลการแข่งขันกับการทายผล ",
      league_uneqop2 : "ของราคาพูลตรงข้ามกัน",
      league_letstas:"สถิติแต้มต่อ",
      league_zous:"เสมอ",
      league_sizestas:"สถิติแต้มสูง-ต่ำ",
      league_scorestas:"สถิติแต้มทีได้",
      league_scoreall:"แต้มรวม",
      league_scorefinish:"แข่งขันแล้ว",
      league_scoreavg:"คะแนนค่าเฉลี่ย",
      league_matchnum:"สถิติการลงแข่ง",
      league_allchang:"การลงแข่งสนามทั้งหมด",
      league_finished:"การแข่งขันสิ้นสุดลงแล้ว",
      league_unfinished:"การแข่งขันยังไม่สิ้นสุด",
      league_attackmost:"นักกีฬาที่บุกโจมตีได้เยอะที่สุด(ได้แต้ม)",
      league_attackleast:"นักกีฬาที่บุกโจมตีได้น้อยที่สุด(ได้แต้ม)",
      league_defencemost:"นักกีฬาที่ป้องกันได้เยอะที่สุด(ได้แต้ม)",
      league_defenceleast:"นักกีฬาที่ป้องกันได้น้อยที่สุด(ได้แต้ม)"
    },
    vi:{
      "DATABASE_KEYWORDS":"Trung tâm thông tin bóng rổ, trung tâm số liệu bóng rổ, Trung tâm số liệu NBA, Trung tâm số liệu CBA",
      "DATABASE_DESCRIPTION":"Trung tâm thông tin bóng rổ Tỷ Số Nhất cung cấp số liệu các giải đấu quốc gia, lịch thi đấu bóng rổ, đội bóng, trận đấu vân vân, gồm diễn biến các giải chủ yếu NBA, CBA, All-Star, điểm thành tích lịch thi đấu, kèo chấp bóng kèo tài xỉu, thông tin đội bóng, xếp hạng liên minh vân vân.",

      HEAD_TITLE : "【Kho dữ liệu bóng rổ】_Giải đấu_Lịch thi đấu_Đội bóng_Tỷ Số Nhất",
      league_eqop2: "",
      league_uneqop2:"",
      DATA_NODATA:"không có dữ liệu",
      league_score: "Điểm",
      league_scorechang : "Trận",
      league_schedule:"Lịc thi đấu",
      league_rank:"Xếp hạng",
      league_lets:"Kèo chấp",
      league_sizes:"Kèo tài xỉu",
      league_stass:"Thống kê",
      league_season:"Mùa giải",
      league_confirm:"Xác nhận",
      league_cancel:"Hủy",
      league_stage:"Giai đoạn",
      league_rankIndex:"Xếp hạng",
      league_rankName:"Đội bóng",
      league_rankMatch:"Trận",
      leagues_rankWin:"Thắng",
      leagues_rankLose:"Bại",
      league_rankWinrate:"Tỷ lệ thắng",
      league_rankWincha:"Cách biệt thắng",
      league_last:"Gần đây",
      league_all:"Tất cả",
      league_home:"Sân nhà",
      league_guest:"Sân khách",
      league_up:"Kèo trên",
      league_down:"Kèo dưới",
      league_lose:"Thua kèo",
      league_win:"Thắng kèo",
      league_walk:"Hòa kèo",
      league_finish:"Đã thi đấu",
      league_unfinish:"Chưa thi đấu",
      league_allmatchs:"Tổng số trận",
      league_big:"Tài",
      league_small:"Xỉu",
      league_stas:"Thống kê giải",
      league_most:"Hạng mục TOP",
      league_winlose:"Thống kê thắng thua",
      league_homewin:"Chủ nhà thắng",
      league_guestwin:"Đội khách thắng",
      league_op:"Thống kê kèo Âu",
      league_eqop:"Kết quả giống kèo Âu",
      league_uneqop:"Kết quả khác kèo Âu",
      league_letstas:"Thống kê kèo chấp",
      league_zous:"Hòa kèo",
      league_sizestas:"Thống kê tài xỉu",
      league_scorestas:"Thống kê điểm",
      league_scoreall:"Tổng điểm",
      league_scorefinish:"Lượt trận đã thi đấu",
      league_scoreavg:"Điểm bình quân",
      league_matchnum:"Thống kê số trận",
      league_allchang:"Tổng lượt trận",
      league_finished:"Đã kết thúc",
      league_unfinished:"Chưa kết thúc",
      league_attackmost:"Cầu thủ tấn công tốt nhất (điểm)",
      league_attackleast:"Cầu thủ tấn công yếu nhất (điểm)",
      league_defencemost:"Cầu thủ phòng thủ tốt nhất (điểm)",
      league_defenceleast:"Cầu thủ phòng thủ yếu nhất (điểm)"
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
/**
 * @desp league 赛程模块的config ..
 * @type {*[]}
 */
var routeConfig = ['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../../views/basketball_template/league_template.html",
      controller: "leagueController"
    })
    .otherwise({
      redirectTo: "/"
    });
}
];

/**
 * @desp league 赛程模块的service.
 */
var leagueService = ["$resource", function ($resource) {
  return {
    getHeader: function () {
      return this.getService(backend.header);
    },
    getScheduleService: function () {
      return this.getService(backend.schedule);
    },
    getRankService: function () {
      return this.getService(backend.rank);
    },
    getLetService: function () {
      return this.getService(backend.let);
    },
    getSizeService: function () {
      return this.getService(backend.size);
    },
    getStatisticService: function () {
      return this.getService(backend.statistic);
    },
    getService: function (uri) {
      return $resource(baseUrl + uri, {}, {
        query: {
          method: "get",
          params: {},
          isArray: false
        }
      });
    }
  }
}]
/**
 * 球队logo加载失败时，使用默认logo
 * @param obj
 */
var logoLoadErr = function (obj,team) {
  var deBsketLogoUrl = "@@IMGURL/ba_teamLogo.png";
  obj.src = deBsketLogoUrl;
  obj.onerror = null;
};

/**
 * @desp league 赛程模块的controller....
 * As-Is
 * 公有参数:
 *   lang      : 语言
 *   leagueId  : 赛事id
 *   season    : 赛季
 *   matchType : 赛事类型
 *        { matchType = 1 ,联赛}
 *        { matchType = 2 , 杯赛}
 *
 * 公有变量及控件, 共有三个swiper 组件:一个是头部的导航swiper tab. 一个是赛程的阶段swiper tab. 一个是排行的阶段swiper tab.
 *                     两个tab:一个让分盘的tab，一个是大小盘的tab, 一个是统计的tab
 *    swiperActiveIndex :
 *          1,swiper切换的时候更新数据;
 *          2,每个头部swiper tab 切换到某个tab之后，点击赛季确认之后，根据swiperActiveIndex 来更新相应的数据.
 *          3,每个头部swiper tab 切换到某个tab之后, 点击阶段确认之后, 根据swiperActiveIndex 来更新相应的数据.
 *    stageTab(赛程) :
 *          [firstStageId,secondStageId,stageActiveIndex]
 *          ***
 *            如果matchType==2, stageTab 不显示所有的secondStageId.
 *            如果matchType==1, stageTab 只显示, (1):没有二级stages数组的一级stage. (2):有二级stages数组的话,只显示二级stages数组, 一级stage不显示.
 *          ***
 *          1,stageTab 左右箭头切换的时候,更新数据
 *          2,stageTab 点击弹出阶段窗口的时候，确认更新数据
 *          3,stageTab 手动左右滑动的时候,更新数据.
 *    stageTab(排行) :
 *          [rankingType,firstStageId,stageActiveIndex]
 *
 * 排行tab:
 *    rankingType : 1单联赛排名 2分赛区排名 3杯赛排名
 *
 *  -- to-do
 *  所有查询开始和结束，显示loading......隐藏loading.........
 * @type {*[]}
 */
var leagueCon = ["$http", "$scope", "leagueService","$translate", function ($http, $scope, leagueService,$translate) {

  //获取传入的参数leagueId;
  $scope.leagueId = mobileUtil.getSearch()["leagueId"] || "";
  $scope.matchType = mobileUtil.getSearch()["matchType"] || "";

  //**初始化．
  $scope.$on("$viewContentLoaded", function () {
    $scope.initVar();
    var params = {lang: leagueOpt.getLanguage(), leagueId: $scope.leagueId, matchType: $scope.matchType};
    leagueOpt.getHeader(leagueService, $scope, params);
    leagueOpt.initLeagueData();
  })


  // 初始化变量:
  $scope.initVar = function(){
    // 初始化数据.
    $scope.header = {
      leagueLogoUrl : ""
    };
    $scope.schedule = {}; //赛程。
    $scope.stages = [];    //赛程阶段.
    $scope.matchDatas = []; // 赛程列表.
    $scope.season = "";     //赛季.
    $scope.isQueryed = [];  //查询过的index放入该数组.

    //比分盘..
    $scope.rank = {};

    // let_tab&seasonShow , stage_tab &stageShow 控制弹窗的显示和隐藏.
    $scope.let_tab = 0;
    $scope.stage_tab = 0;
    $scope.seasonShow = false;

    $scope.currentStage = {};   // 当前阶段
    $scope.stageShow = false;  //阶段弹窗
    $scope.stageId = 0;
  }
  $scope.back = function(){
    window.history.go(-1);
  }
  /**
   * @desp 让分盘的tab事件
   * @param type
   */
  $scope.showLet = function (type) {
    $scope.let_tab = type;
  }
  /**
   * @desp 大小盘的tab事件
   */
  $scope.showSize = function (type) {
    $scope.size_tab = type;
  }
  $scope.showStas = function (type) {
    $scope.stas_tab = type;
  }
  /**
   * @desp 赛程的选择赛季事件
   */
  $scope.showSeason = function () {
    //计算高度.
    leagueOpt.calHeight();
    $scope.seasonShow = true;
    $scope.selectedSeason = $scope.season;   //默认当前赛季为选中...
  }
  $scope.hideSeason = function(e){
    $scope.seasonShow = false;
    leagueOpt.delHeight();
    $("#league_content section").removeClass("inner-no-scroll");
    $(document.body).removeClass("no-scroll");
  }
  $scope.selectSeason = function (season) {
    $scope.selectedSeason = season;          //选择的赛季赋值.
  }
  /**
   * @desp 赛季选择确认，查询当前所处页面的数据,
   *        code需要优化. 例如统计的传入参数实际只有{lang,leagueId,season}
   */
  $scope.season_confirm = function () {
    $scope.isSeason = true;
    var params = {};
    params.lang = leagueOpt.getLanguage();
    params.leagueId = $scope.leagueId;
    params.season = $scope.selectedSeason;
    params.matchType = $scope.matchType;
    params.firstStageId = "";
    params.secondStageId = "";
    if (leagueOpt.pageSwiperActiveIndex == 0) {      //赛程页面.按赛季获取数据.
      leagueOpt.getDatas(11, $scope, params);
    }
    if (leagueOpt.tabActiveIndex === 1) {      //排行页面,按赛季获取数据.
      //params.firstStageId = leagueOpt.getStageIdByCondition(leagueOpt.rankTabIndex);
      leagueOpt.getDatas(13, $scope, params);
    }
    if (leagueOpt.tabActiveIndex === 2) {     //让分盘页面,按赛季获取数据.
      leagueOpt.getDatas(2,$scope,params);
    }
    if (leagueOpt.tabActiveIndex === 3) {     //大小盘页面,按赛季获取数据
      leagueOpt.getDatas(3,$scope,params);
    }
    if (leagueOpt.tabActiveIndex === 4) {     //统计页面,按赛季获取数据.
      leagueOpt.getDatas(4,$scope,params);
    }
    //更新头部赛季
    $scope.season = $scope.selectedSeason;   // 将选择的赛季赋值给头部显示的变量.
    $scope.seasonShow = false;

    leagueOpt.delHeight();
    $("#league_content section").removeClass("inner-no-scroll");
    $(document.body).removeClass("no-scroll");
  }

  // 打开阶段窗口
  /**
   * @desp
   * @param firstId   firstStageIndex  .searchCondition 数组的index. 当前二级阶段对应的在searchCondition的index.
   * @param secondId  二级阶段的stageId.
   *         stage_tab  选中tab 的index. 一级阶段的stageId.
   */
  $scope.openStage = function (firstId, secondId) {
    //leagueOpt.setHeight();
    //$(".swiper-slide-active section").addClass("no-scroll");
    //$(document.body).addClass("no-scroll");
    leagueOpt.calHeight();
    $scope.stageShow = true;
    //初始化弹窗默认的阶段.有二级阶段.
    $scope.stage_tab = $scope.getFirstStageId(firstId);
    //获取二级阶段的数组，根据一级阶段的stageId;
    //$scope.secondStages = $scope.schedule.searchCondition[firstId].stages;
    $scope.secondStages =  $scope.schedule.searchCondition ? $scope.schedule.searchCondition[firstId].stages : [];
    //没有二级阶段,matchType===2 没有二级,从上到下显示； matchtype ===1 的按层级显示.selectedSecondStage
    if ($scope.matchType == 2) {
      $scope.selectedStage = secondId;   //matchType ===2 的, 只显示一级菜单.
    }
    if ($scope.matchType == 1) {
      $scope.selectedStage = firstId;
    }
    $scope.firstIndex = firstId;
    $scope.selectedSecondStage = secondId;

  }
  $scope.getFirstStageId =function(index){
    return $scope.schedule.searchCondition ? $scope.schedule.searchCondition[index].stageId : 0;
  }

  //展开二级阶段
  $scope.showSecondStage = function (firstStageId) {
    $scope.secondStages = $scope.getSecondStagesByFirst(firstStageId);//$scope.schedule.searchCondition[firstId].stages;
    $scope.stage_tab = firstStageId;
  }
  //选择阶段,然后获取阶段的数据，如果二级阶段没有选择，默认最后一个二级阶段.
  $scope.selectSecondStage = function (se) {
    $scope.selectedSecondStage = se.stageId;
  }
  //确认阶段,确认完毕之后,stage 要滚动到选择的stage.
  $scope.confirm_stage = function (type, stageId) {
    if (type == 2 || type == "2") {
      $scope.confirm_bei(stageId);
    }
    if (type == 1 || type == "1") {
      $scope.confirm_lian(stageId);
    }
    leagueOpt.delHeight();
    $("#league_content section").removeClass("inner-no-scroll");
    $(document.body).removeClass("no-scroll");
  }

  $scope.confirm_lian = function (stageId) {
    //$scope.showLoadingImg();
    var params = {};
    params.lang = leagueOpt.getLanguage();
    params.leagueId = $scope.leagueId;
    params.season = $scope.season;
    //params.firstStageId = $scope.stage_tab ;
    params.firstStageId = stageId;
    params.secondStageId = $scope.checkSecondStage($scope.stage_tab,$scope.selectedSecondStage) ?  $scope.selectedSecondStage : "";   //
    params.matchType = $scope.matchType;
    leagueOpt.getDatas(10, $scope, params);
    $scope.stageShow = false;

  }

  $scope.confirm_bei = function (stageId) {
    //$scope.showLoadingImg();
    var params = {};
    params.lang = leagueOpt.getLanguage();
    params.leagueId = $scope.leagueId;
    params.season = $scope.season;
    params.firstStageId = stageId;
    params.matchType = $scope.matchType;
    leagueOpt.getDatas(10, $scope, params);
    $scope.stageShow = false;
  }
  //取消阶段
  $scope.cancel_stage = function () {
    $scope.stageShow = false;
    $scope.hideLoadingImg();
    leagueOpt.delHeight();
    $(document.body).removeClass("no-scroll");
  }

  //确保selectedSecondStage 是处于正确的stage_tab里，否则取默认的第一个.
  $scope.checkSecondStage = function(firstStageId,selectSecondStageId) {
    var checked = false;
    var searchCondition = $scope.schedule.searchCondition ? $scope.schedule.searchCondition : [];
    for (var i = 0; i < searchCondition.length; i++) {
      if (searchCondition[i].stageId == firstStageId) {
        var stages = searchCondition[i].stages ? searchCondition[i].stages : [];
        for (var j = 0; j < stages.length; j++) {
          if (selectSecondStageId == stages[j].stageId) {
            checked = true;
          }
        }
      }
    }
    return checked;
  }
  /**
   * @desp 根据一级stageId获取所在searchCondition的stage.
   */
  $scope.getSecondStagesByFirst  = function(firstStageId) {
    var stages = [];
    if ($scope.schedule.searchCondition) {
      for (var i = 0; i < $scope.schedule.searchCondition.length; i++) {
        if ($scope.schedule.searchCondition[i].stageId == firstStageId) {
          stages = $scope.schedule.searchCondition[i].stages;
          break;
        }
      }
    }
    return stages;
  }
  /**
   * @desp 根据一级stageId 获取所在searchCondtion的index
   */
  $scope.getFirstIndexByStageId  = function(firstStageId) {
    var index = 0;;
    if ($scope.schedule.searchCondition) {
      for (var i = 0; i < $scope.schedule.searchCondition.length; i++) {
        if ($scope.schedule.searchCondition[i].stageId == firstStageId) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  /** 加载图片**/
    //loading
  $scope.showLoadingImg = function () {
    $scope.loadingImg = true;
  };

  $scope.hideLoadingImg = function () {
    $scope.loadingImg = false;
  };


  $scope.hideMask = function(e,type) {
    var target = e.target || e.srcElement
    var className = $(target).attr("class");
    if (className.indexOf("mask") >= 0) {
      if (type == 1) {
        $scope.seasonShow = false;
        leagueOpt.delHeight();
      }
      if (type == 2) {
        $scope.stageShow = false;
        leagueOpt.delHeight();
      }
    }

  }
  /**
   * @ desp leagueOpt的模块
   * 1. requestParam.scheduleParams.timeZone需要赋值.
   */
  var leagueOpt = {
    tabsSwiper: null,  // 头部导航swiper tab
    stageTab: null,   // 赛程的阶段tab
    rankTab: null,   //排行的阶段tab .
    tabsSwiperInited: false,
    tabActiveIndex: 0, //头部导航swiper 当前index.
    rankTabIndex: 0,  //排行页面的swiper tab 当前index.
    // 重构
    pageSwiperActiveIndex : 0 , // 头部导航swiper 当前active的index, 初始化为第一个.
    stageSwiperActiveIndex : 0 , //赛程Page的阶段swiper 当前active的index, 初始化为获取赛程数据后的对应stages里的index.
    rankSwiperActiveIndex : 0,   //排行Page的阶段swiper 当前active的index,初始化为获取排行数据后的对应stages里的index.
    //页面查询类型.
    QueryType : {
      page : {   //赛程,排行,大小盘,让分盘,统计查询.
        schedule : 100,
        rank : 110,
        lets : 120,
        sizes : 130,
        stas : 140
      },
      schedule : {   //赛程初始化查询, 按赛季查询, stages初始化查询, stages弹窗查询match, stages 左右滑动查询matchs
        init : 200,
        season : 210,
        initStages : 220,
        openStagesMatchs : 230,
        slideStagesMatchs : 240
      },
      rank : {
        season : 310
      },
      lets : {
        season : 410
      },
      sizes : {
        season : 510,
      },
      stas : {
        season : 610
      }
    },
    stageSwiperQueryType : {
      init : 10,        //查询所有schedule{matchs,searchConditions....}
      openForm : 11,    //查询matchs.
      slide : 12,       //查询matchs
      season : 13,      //查询所有schedule{matchs,searchConditions....}
    },
    stageStages : [] ,  //赛程Page的stages数组.
    rankStages : [] ,   //排行Page的stages数组.

    //由第一次获取的数据保存起来的"全局"变量,供其他page使用.
    //pageParams : {
    //  //lang : this.getLanguage(),
    //  searchCondition : [],
    //  firstStageIndex : null,
    //  secondStageIndex : null,
    //  season : null,
    //  leagueId : $scope.leagueId,   //页面带入的参数
    //  matchType : $scope.matchType  //页面带入的参数.
    //},
    requestParams : {
      initParams : {          //初始化参数只有语言,比赛类型,比赛ID.
        //lang: this.getLanguage(),
        leagueId: $scope.leagueId,
        season: $scope.season,
        matchType: $scope.matchType,
        firstStageId: "",
        secondStageId: ""
      },
      scheduleParams : {
        //lang : this.getLanguage(),
        leagueId : $scope.leagueId,
        matchType : $scope.matchType,
        timeZone : "" ,  // need to update..
      }
    },

    //重构结束.
    initLeagueData2: function () {
      leagueOpt.attachTabEvent();
      var params = {lang: leagueOpt.getLanguage(), leagueId: $scope.leagueId};
      leagueOpt.getHeader(leagueService, $scope, params, 0)
    },
    // 初始化赛事头部,初始化赛程数据(比赛+阶段).
    initLeagueData: function () {
      leagueOpt.attachTabEvent();
      leagueOpt.initSwiper(0, false);
    },
    /**
     * @desp 从后台获取数据: 默认数据.
     */
    getDatas: function (activeIndex, $scope, params) {
      switch (activeIndex) {
        case leagueOpt.QueryType.page.schedule :
          this.getSchedule(leagueService, $scope, params);
          break;
        case 0 :
          this.getSchedule(leagueService, $scope, params);
          break;
        case 1 :
          this.getRank(leagueService, $scope, params);
          break;
        case 2 :
          this.getLet(leagueService, $scope, params);
          break;
        case 3 :
          this.getSize(leagueService, $scope, params);
          break;
        case 4 :
          this.getStatistic(leagueService, $scope, params);
          break;
        case 10 :         //按阶段弹窗查询赛程数据
          this.getMatchsByStage(leagueService, $scope, params);
          break;
        case 14 :         //阶段左右滑动查询数据.
          this.getMatchsByStageSlide(leagueService,$scope,params);
          break;
        case 11 :         //按赛季查询赛程数据
          this.getSchedule(leagueService, $scope, params);
          break;
        case 12 :        // 按阶段查询排行数据
          this.getRankByStage(leagueService, $scope, params);
          break;
        case 13 :        //按赛季查询排行数据
          this.getRankBySeason(leagueService, $scope, params);
          break;

      }
      window.document.body.scrollTop = 0;
    },

    //初始化排行的swiper tab.
    initRanktab: function (data) {
      var currentRankIndex = $scope.rank.firstStageIndex;
      leagueOpt.rankTab = new Swiper("#rank-tab", {
        speed: 300,
        resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        //shortSwipes: false,//进行快速短距离的拖动无法触发Swiper
        threshold: 20,//拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
        initialSlide: currentRankIndex,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onInit: function (swiper) {
          //console.log("rank tab onInit()初始化的activeIndex=", swiper.activeIndex);//提示Swiper的当前索引
        },
        onSlideChangeStart: function () {                 //阶段tab前后切换，match数据要跟着变.
          $scope.showLoadingImg();
          if (leagueOpt.rankTab != null) {
            var activeIndex = leagueOpt.rankTab.activeIndex || 0;     //如果macthType ==2 , activeIndex就是stages对应的index.
            leagueOpt.rankTabIndex = activeIndex;
            if (leagueOpt.tabActiveIndex === 1) {                     //只有处于排行页面的时候，才会触发change事件.
              leagueOpt.changeRankData(activeIndex, true);
            }
          }
          $scope.hideLoadingImg();
        },
        onSlideChangeEnd: function () {
          //$scope.hideLoadingImg();
        }
      });
    },
    //初始化赛程的swiper tab.....
    initStagetab: function () {
      schedule = $scope.schedule;
      var initActiveIndex = leagueOpt.getStageIndex(schedule);
      $scope.scheduleStageInited = false;
      leagueOpt.stageTab = new Swiper('#stage-tab1', {
        speed: 300,
        resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        //shortSwipes: false,//进行快速短距离的拖动无法触发Swiper
        threshold: 20,//拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
        initialSlide:initActiveIndex,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onInit: function (swiper) {
          //console.log(swiper.activeIndex);//提示Swiper的当前索引
          $scope.scheduleStageInited = true;
        },
        onSlideChangeStart: function () {                 //阶段tab前后切换，match数据要跟着变.
          if (leagueOpt.stageTab != null) {
            leagueOpt.stageSwiperActiveIndex = leagueOpt.stageTab.activeIndex || 0;     //如果macthType ==2 , activeIndex就是stages对应的index.
            if (leagueOpt.pageSwiperActiveIndex === 0 && $scope.isOpenForm != true && $scope.scheduleStageInited) {            //只有头部导航是 赛程tab的时候，即处于赛程的页面的时候，才会触发change.
              leagueOpt.changeStageData(leagueOpt.stageTab.activeIndex, leagueOpt.stageSwiperQueryType.slide);
            }
          }
        },
        onSlideChangeEnd: function () {
        }
      })
    },
    /**
     * 因为阶段stages[]数组里不是完全包含所有的阶段,所以对应stages的swiper的active index 需要重新计算.
     * 注意的是secondStageIndex = -1 的情况. 比如firstStageIndex = 0, secondStageIndex = -1, 就需要返回0.
     * 初始化的时候, 2,6.
     * @param schedule  ,firstStageIndex, secondStageIndex.
     * @returns {number}
     */
    getStageIndex: function (schedule) {
      //获取当前阶段.以便swiper处于当前状态.
      var tabIndex = 0;
      var matchType = schedule.matchType;

      var first = schedule.firstStageIndex || 0;
      var second = schedule.secondStageIndex || 0;
      //等于1要计算子阶段，有二级阶段的不把一级阶段加入index.只需要计算firstIndex之前的数组数据, < firstIndex 的计算所有的二级阶段, = firstIndex 计算secondIndex.
      if (matchType === 1) {
        //計算stageId
        var firstStageId = schedule.searchCondition[first].stageId;
        var secondStageId = "";
        if (schedule.searchCondition[first].hasSecondStage == 1) {
          secondStageId = schedule.searchCondition[first].stages[second].stageId;
        }
        loopStageId = secondStageId != "" ? secondStageId : firstStageId ; // 如果secondStageId 不為空，查secondStageId.

        for (var i = 0; i < $scope.stages.length; i++) {
          if (loopStageId == $scope.stages[i].stageId) {
            tabIndex = i;
            break;
          }
        }
        //for (var i = 0; i <= first; i++) {
        //  var secondLen = 0;
        //  if (schedule.searchCondition[i].hasSecondStage == 1) {    //有二级阶段的计算二级阶段.
        //    var secondStagesLen = schedule.searchCondition[i].stages ? schedule.searchCondition[i].stages.length : 0;
        //    if (i < first) {
        //      secondLen = secondStagesLen -1;   //長度減一.
        //    }
        //    if (i == first) {
        //      secondLen += second + 1;    // 因为这时second只是stages的index,
        //    }
        //    tabIndex += secondLen;
        //  } else {                    //无二级阶段的就是只有一级阶段, +1.
        //    tabIndex += (i==0 ? 0 : 1);
        //  }
        //}
      }
      //因为matchType ===2 的情况下只放入一级阶段,所以firstStageIndex就是swiper的index.
      if (matchType === 2) {
        tabIndex = first;
      }

      return tabIndex;
    },
    //赛程swiper 左右按钮切换数据的时候,
    stageSlideChangeData : function (index) {

    },
    //赛程数据切换查询,swiper左右滑动的时候.
    changeStageData: function (index,type) {
      if ($scope.matchType === 2) {
        this.changeBeiData(index,type);
      }
      if ($scope.matchType === 1) {
        this.changeLianData(index,type);
      }
    },
    //排行数据切换查询,swiper左右滑动的时候
    changeRankData: function (index, flag) {
      var params = {};
      params.lang = leagueOpt.getLanguage();
      params.leagueId = $scope.leagueId;
      params.season = $scope.season;
      params.firstStageId = leagueOpt.getStageIdByCondition(index);        //因为只有一级阶段，所有swiper的index等于一级阶段的index.
      params.matchType = $scope.matchType;
      leagueOpt.getDatas(12, $scope, params);
    },
    //matchType ===2,只有一级阶段.
    changeBeiData: function (index,type) {
      var params = {};
      params.lang = leagueOpt.getLanguage();
      params.leagueId = $scope.leagueId;
      params.season = $scope.season;
      params.firstStageId = $scope.stages[index].stageId; // matchType==2 ,滑动的activeIndex 对应的stages的Index.;
      params.secondStageId = "";
      params.matchType = $scope.matchType;

      if (type == leagueOpt.stageSwiperQueryType.openForm) {  //弹窗查询.
        leagueOpt.getDatas(10, $scope, params);
      }
      if (type == leagueOpt.stageSwiperQueryType.slide) {     //滚动查询.
        leagueOpt.getDatas(14,$scope,params);
      }
    },
    //matchType ===1, 可能有一级阶段,也可能没有一级阶段.
    changeLianData: function (index,type) {
      //matchType ==1 滑动
      //var currentStageId = $scope.stages[index].stageId || 0;
      var params = {};
      params.lang = leagueOpt.getLanguage();
      params.leagueId = $scope.leagueId;
      params.season = $scope.season;
      params.firstStageId = this.getFirstStageIdByStages($scope.stages[index].stageId);
      params.secondStageId = this.getSecondStageIdByStages($scope.stages[index].stageId);// matchType==1 ,滑动的activeIndex 对应的stages的Index.;
      params.matchType = $scope.matchType;

      if (type == leagueOpt.stageSwiperQueryType.openForm) {  //弹窗查询.
        leagueOpt.getDatas(10, $scope, params);
      }
      if (type == leagueOpt.stageSwiperQueryType.slide) {     //滚动查询.
        leagueOpt.getDatas(14,$scope,params);
      }
    },
    //对应matchType == 1的情况下,stages数组里的stageId可能是一级阶段也可能是二级阶段,需要转换.
    getFirstStageIdByStages : function(stageId) {
      var result = 0;
      var searchCondition = $scope.schedule.searchCondition ? $scope.schedule.searchCondition : [];
      for ( var i = 0; i < searchCondition.length; i++ ) {
        var firstStageId = searchCondition[i].stageId;
        //一级阶段. 如果相等即是结果.
        if ( firstStageId== stageId ) {
          result =  firstStageId;
          break;
        }
        if (searchCondition[i].hasSecondStage == 1) {
          var stages = searchCondition[i].stages ? searchCondition[i].stages : [];
          for ( var j = 0; j < stages.length ; j++ ) {
            if ( stages[j].stageId == stageId) {     //如果stageId == 二级阶段的stageId , 返回一级阶段的stageId.
              result = firstStageId;
              break;
            }
          } // 二级阶段Loop end.
        }
      }// 一级阶段loop end
      return result;
    },
    //对应matchType == 1的情况下, stages数组里的stageId可能是一级阶段也可能是二级阶段,需要转换.
    getSecondStageIdByStages : function (stageId) {
      var searchCondition = $scope.schedule.searchCondition ? $scope.schedule.searchCondition : [];
      for ( var i = 0; i < searchCondition.length; i++ ) {
        var firstStageId = searchCondition[i].stageId;
        //一级阶段. 如果相等,说明当前没有二级阶段, index = -1.
        if ( firstStageId== stageId ) {
          return -1;
        }
        if (searchCondition[i].hasSecondStage == 1) {
          var stages = searchCondition[i].stages ? searchCondition[i].stages : [];
          for ( var j = 0; j < stages.length ; j++ ) {
            var secondStageId = stages[j].stageId;
            if ( secondStageId == stageId) {     //如果stageId == 二级阶段的stageId , 返回一级阶段的stageId.
              return secondStageId;
            }
          } // 二级阶段Loop end.
        }
      }// 一级阶段loop end
    },
    getMatchDatas: function (params) {
      var scheduleService = leagueService.getScheduleService();
      scheduleService.get(params, function (data) {
        $scope.matchDatas = [];
        //整理赛事列表.
        if (data.matchData) {
          angular.forEach(data.matchData, function (item) {
            var matchData = {};
            matchData.dayStr = item.dayStr;
            matchData.list = item.datas;
            $scope.matchDatas.push(matchData);
          })
        }
        //計算matchContent的高度..
        window.setTimeout(leagueOpt.setHeight,0);
      });
    },
    //根据二级id获取一级id.
    getFirstIdBySecond: function (secondid) {
      var firstid = 0;
      var isReturn = false;
      var searchCondition = $scope.schedule.searchCondition;
      for (var i = 0; i < searchCondition.length; i++) {

        if (searchCondition[i].hasSecondStage == 1) {
          for (var j = 0; j < searchCondition[i].stages.length; j++) {
            if (searchCondition[i].stages[j].stageId == secondid) {
              firstid = searchCondition[i].stageId;
              isReturn = true;
              break;
            }
          }
        }
        if (isReturn) {
          break;
        }
      }
      return firstid;

    },
    //根据searchCondition获取到rank的stageId;
    getStageIdByCondition: function (rankTabIndex) {
      var stageId = 0;
      var conditions = $scope.rank.searchCondition;
      if (conditions && conditions.length > 0) {
        stageId = conditions[rankTabIndex].stageId;
      }
      return stageId;
    },
    /**
     * @desp 从后台获取头部信息. header:{leagueId,leagueName,leagueLogoUrl,season,bgUrl,matchType}
     */
    getHeader: function (leagueService, $scope, params, initialSlide) {
      var headerService = leagueService.getHeader();
      headerService.get(params, function (data) {
        $scope.header = {};
        $scope.header.bgUrl = data.bgUrl;
        $scope.header.leagueId = data.leagueId;
        $scope.header.leagueLogoUrl = data.leagueLogoUrl;
        $scope.header.leagueName = data.leagueName;
        $scope.header.matchType = data.matchType;
        $scope.header.season = data.season;
        $scope.season = data.season ? data.season[0] : "";
      })
    },
    /**
     * @desp 根据阶段，获取赛程数据.
     */
    /**
     * @desp 从后台获取赛程数据，篮球篮球无论联赛杯赛，一般都是分几个阶段，
     * 联赛一般分两个阶段：常规赛+季后赛
     * 杯赛一般分两个阶段：小组赛+淘汰赛（16强、8强、4强、半决赛、决赛）
     * @param initialSlide
     * @param loadFindLive
     */
    getSchedule: function (leagueService, $scope, params) {
      $scope.showLoadingImg();
      //test .
      $scope.matchFinished = false;
      var scheduleService = leagueService.getScheduleService();
      scheduleService.get(params, function (data) {
        $scope.schedule = data;
        $scope.matchDatas = [];
        //整理赛事的列表.
        if (data.matchData) {
          angular.forEach(data.matchData, function (item) {
            var matchData = {};
            matchData.dayStr = item.dayStr;
            matchData.list = item.datas;
            $scope.matchDatas.push(matchData);
          })
        }
        /**
         *整理阶段列表,如果MatchType == 2的话，只显示一级阶段, matchType ==1的话，显示一级(没有二级阶段的情况下)和只二级阶段.
         */
        $scope.stages = [];
        $scope.matchType = data.matchType;
        //firstID 错误le...
        var index = 0;
        //searchCondition类似二维数组, [{hasSecond:1,stages:[{name:a}]];
        angular.forEach(data.searchCondition, function (item,index) {
          var nitem = angular.copy(item);
          // 如果Matchtype 等于2的情况下,只放入一级阶段.
          if (data.matchType === 2) {
            nitem.firstID = 0;
            $scope.stages.push(nitem);
          }
          // 如果matchType等于1的情况下, 1.有二级阶段的, 只放入二级阶段. 2.没有二级阶段的,只放入一级阶段.
          if (data.matchType === 1) {
            if (item.hasSecondStage === 0) {
              nitem.firstID = index;
              $scope.stages.push(nitem);
            }
            if (item.hasSecondStage === 1) {
              angular.forEach(item.stages, function (ss) {
                var nitem = angular.copy(ss);
                nitem.firstID = index;
                $scope.stages.push(nitem);
              })
            }
          }
        })
        $scope.matchFinished = true;
        $scope.hideLoadingImg();
        //初始化赛程tab.
        window.setTimeout(leagueOpt.initStagetab, 0);
        window.setTimeout(leagueOpt.setHeight,0);
      },function(err){
        $scope.matchFinished = true;
        $scope.hideLoadingImg();
        $scope.iserror = true;
        $scope.errorMsg = "error";
      })
    },
    errFn : function(err) {
      $scope.matchFinished = true;
      $scope.hideLoadingImg();
      $scope.iserror = true;
      $scope.errorMsg = "error";
    },
    calHeight: function(){
      //不讓頁面滾動,
      var heightVal=document.documentElement.clientHeight - $("#league_header").height();
      var activeSection = $(".league_content_slide");
      var container = $("#league_content");
      var contentHeight = $(".league_content_slide .swiper-slide-active").height();
      $scope.preHeight = container.height();
      container.height(heightVal);
      activeSection.height(heightVal);
      $(document.body).addClass("no-scroll");
      container.addClass("inner-no-scroll");
      //activeSection.addClass("no-scroll");
      $(".swiper-slide-active section").addClass("no-scroll");
    },
    delHeight : function(){
      //rank_list.height(rank_listHeight);
      var activeSection = $(".league_content_slide");
      var container = $("#league_content");
      container.height($scope.preHeight);
      activeSection.height("auto");
      $(document.body).removeClass("no-scroll");
      container.removeClass("inner-no-scroll");
      //activeSection.removeClass("no-scroll");
      $(".swiper-slide-active section").removeClass("no-scroll");
    },
    /**
     * @desp 按阶段弹窗选择赛程数据.
     */
    getMatchsByStage: function (leagueService, $scope, params) {
      $scope.showLoadingImg();
      $scope.isOpenForm = true;
      var scheduleService = leagueService.getScheduleService();
      scheduleService.get(params, function (data) {
        $scope.schedule = data;
        $scope.matchDatas = [];
        //整理赛事列表.
        if (data.matchData) {
          angular.forEach(data.matchData, function (item) {
            var matchData = {};
            matchData.dayStr = item.dayStr;
            matchData.list = item.datas;
            $scope.matchDatas.push(matchData);
          })
        }
        //stage栏滚动到对应选择的stage,根据新的schedule数据，找到对应stages的Index.
        var slideIndex = leagueOpt.getStageIndex($scope.schedule);
        leagueOpt.stageTab.slideTo(slideIndex);

        $scope.isOpenForm = false;
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
      },leagueOpt.errFn);
    },
    /**
     * @desp 阶段swiper 左右滑动选择数据.
     * @param leagueService
     * @param $scope
     * @param params
     */
    getMatchsByStageSlide : function(leagueService, $scope, params) {
      $scope.showLoadingImg();
      var scheduleService = leagueService.getScheduleService();
      scheduleService.get(params, function (data) {
        $scope.schedule = data;
        $scope.matchDatas = [];
        //整理赛事列表.
        if (data.matchData) {
          angular.forEach(data.matchData, function (item) {
            var matchData = {};
            matchData.dayStr = item.dayStr;
            matchData.list = item.datas;
            $scope.matchDatas.push(matchData);
          })
        }
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
      },leagueOpt.errFn);
    },
    /**
     * @desp 初始化赛程schedule
     */
    /**
     * @desp 初始化排行数据,从后台获取排行数据
     * @param initialSlide
     * @param loadFindLive
     */
    getRank: function (leagueService, $scope, params) {
      $scope.showLoadingImg();
      var rankService = leagueService.getRankService();

      //var firstIndex = $scope.schedule.firstStageIndex || 0;
      //var firstStageId = $scope.schedule.searchCondition ? $scope.schedule.searchCondition[firstIndex].stageId : 0;
      //params.firstStageId = $scope.schedule.firstStageIndex;     //初始化的时候第一阶段id.
      //params.firstStageId = firstStageId;
      rankService.get(params, function (data) {
        $scope.rank = data;
        //初始化rank_tab.
        window.setTimeout(leagueOpt.initRanktab, 0);
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
        if ($scope.rank == null || $scope.rank.rankingObj == null ||$scope.rank.rankingObj.length == 0 ) {
          leagueOpt.setNullHeight();
        }
        $(".league_content_slide .ranking_content").removeAttr("style");// 沒有值..
      },leagueOpt.errFn)
    },
    /**
     * @desp 按阶段查询排行数据
     */
    getRankByStage: function (leagueService, $scope, params) {
      var rankService = leagueService.getRankService();
      rankService.get(params, function (data) {
        $scope.rank = data;
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
        if ($scope.rank == null || $scope.rank.rankingObj == null ||$scope.rank.rankingObj.length == 0 ) {
          leagueOpt.setNullHeight();
        }
        $(".league_content_slide .ranking_content").removeAttr("style");// 沒有值..
      },leagueOpt.errFn);
    },
    /**
     * @desp 按赛季查询排行数据
     */
    getRankBySeason: function (leagueService, $scope, params) {
      var rankService = leagueService.getRankService();
      rankService.get(params, function (data) {
        $scope.rank = data;
        window.setTimeout(leagueOpt.initRanktab, 0);
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
        if ($scope.rank == null || $scope.rank.rankingObj == null ||$scope.rank.rankingObj.length == 0 ) {
          leagueOpt.setNullHeight();
        }
        $(".league_content_slide .ranking_content").removeAttr("style");// 沒有值..
      },leagueOpt.errFn);
    },
    /**
     * @desp 从后台获取让分盘.
     * @param initialSlide
     * @param loadFindLive
     */
    getLet: function (leagueService, $scope, params) {
      $scope.showLoadingImg();
      var letService = leagueService.getLetService();
      letService.get(params, function (data) {
        $scope.lets = data;
        $scope.let_tab = $scope.let_tab || 0;
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
      },leagueOpt.errFn)
    },
    getSize: function (leagueService, $scope, params) {
      $scope.showLoadingImg();
      var sizeService = leagueService.getSizeService();
      sizeService.get(params, function (data) {
        $scope.sizes = data;
        $scope.size_tab = 0;
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
      },leagueOpt.errFn)
    },
    getStatistic: function (leagueService, $scope, params) {
      $scope.showLoadingImg();
      var staService = leagueService.getStatisticService();
      staService.get(params, function (data) {
        $scope.stas = data;
        $scope.stas_tab = $scope.stas_tab || 0;
        window.setTimeout(leagueOpt.genChart,0);
        $scope.hideLoadingImg();
        window.setTimeout(leagueOpt.setHeight,0);
      },leagueOpt.errFn)
    },
    genLengthChar : function(label,str,len) {
      var strLen = (str+"").length;
      var chaLen = len - strLen;
      for(var i = 0; i < chaLen; i++) {
        label =  label + "  ";
      }
      return label + ":"+str;
    },
    // this is just show, and need to check the code  after........
    translateChart : function(str) {

      $translate([str]).then(function(translations){
        return translations[str] ? translations[str] : "";
      });
    },
    genChart : function(){
      var stas = $scope.stas;
      //chart demo..
      // 第一个chart

      $translate(["league_finished","league_unfinished","league_allchang"]).then(function(translations){

        var total = stas.leagueStatistics ? stas.leagueStatistics.totalMatch  : 0;
        var finish = stas.leagueStatistics ? stas.leagueStatistics.finishedMatch : 0;
        var unfinish = stas.leagueStatistics ? stas.leagueStatistics.unfinishedMatch : 0;
        //对齐暂时用空格比对label长度..
        var len = (total+"").length ;
        var lfs = translations["league_finished"];
        var lns = translations["league_unfinished"];
        finishLabel = (finish+"").length <= len ?  leagueOpt.genLengthChar(lfs,finish,len) :lfs +":";
        unfinishLabel = (unfinish+"").length <= len ?  leagueOpt.genLengthChar(lns,unfinish,len) : lns +":";
        var ctx = $("#myChart");

        var pieChartData = {
          labels:[translations["league_allchang"]+":"+total,finishLabel,unfinishLabel],
          datasets: [
            {
              data: [total,finish,unfinish],
              backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
              hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
            }]
        }
        new Chart(ctx, {
          data: pieChartData,
          type: 'doughnut',
          options: {
            legend: {
              fullWidth:true,
              display: true,
              labels: {
                fontColor: 'rgb(255, 99, 132)'
              }
            },
            responsive: true
          }
        });

        //第二个chart
        var ctx2 = $("#myChart2");
        var eodd =stas.leagueStatistics ? stas.leagueStatistics.equalEuroOdd : 0 ;
        var uodd = stas.leagueStatistics ? stas.leagueStatistics.unequalEuroOdd : 0;
        var bardata = {
          labels: [eodd, uodd],
          datasets: [
            {
              label: "",
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)' ],
              borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)' ],
              borderWidth: 1,
              data: [eodd, uodd],
            }
          ]
        };
        new Chart(ctx2, {
          type: "bar",
          data: bardata,
          options: {
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        });

        //第三个chart.和第四个chart 用第一个chart的data.
        var ctx3 = $("#myChart3"), ctx4 = $("#myChart4");
        new Chart(ctx3,{
          data: pieChartData,
          type: 'doughnut',
          options: {
            responsive: true
          }
        });
        new Chart(ctx4,{
          data: pieChartData,
          type: 'doughnut',
          options: {
            responsive: true
          }
        });
        //第5个chart.
        var ctx5 = $("#myChart5");
        var bardata5 = {
          labels: [total,finish,unfinish],
          datasets: [
            {
              label: "",
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)' ],
              borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)' ],
              borderWidth: 1,
              data: [total,finish,unfinish],
            }
          ]
        };
        new Chart(ctx5,{
          type : "bar",
          data: bardata5,
          options: {
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        })
      })
    },
    initSwiper: function (initialSlide, loadSchedule) {
      leagueOpt.tabsSwiper = new Swiper('#league_content', {
        speed: 50,
        resistanceRatio: 0,   //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        //shortSwipes: false, //进行快速短距离的拖动无法触发Swiper
        threshold: 50,        //拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
        autoHeight: true,
        initialSlide: initialSlide,
        onInit: function (tabsSwiper) {
          leagueOpt.tabsSwiperInited = true;
          //leagueOpt.initTabsSwiper(tabsSwiper.activeIndex, loadFindLive);
          leagueOpt.initPageData(0, loadSchedule);
        },
        onSlideChangeStart: function () {
          //$scope.showLoadingImg();
          if (leagueOpt.tabsSwiper != null ) {
            leagueOpt.tabActiveIndex = leagueOpt.tabsSwiper.activeIndex;
            if (leagueOpt.tabActiveIndex == 0 || $scope.isQueryed.indexOf(leagueOpt.tabsSwiper.activeIndex) < 0 ) {   //是否未查询过...
              leagueOpt.initTabsSwiper(leagueOpt.tabsSwiper.activeIndex, true);
              $scope.isQueryed.push(leagueOpt.tabsSwiper.activeIndex);
            } else {
              $(".league_tabs .active").removeClass('active');
              $(".league_tabs a").eq(leagueOpt.tabsSwiper.activeIndex).addClass('active');
            }
          }
          window.document.body.scrollTop = 0;
          $("#league_content")[0].scrollTop = 0;
        },
        onSlideChangeEnd: function () {
          leagueOpt.tabsSwiper.updateContainerSize();
          window.setTimeout(leagueOpt.setHeight,0);
          window.document.body.scrollTop = 0;
          $("#league_content")[0].scrollTop = 0;
          leagueOpt.calSlideTab();
        }
      })
    },
    setHeight : function() {
      var activeIndex = leagueOpt.tabActiveIndex;
      var doms = null;
      $("#league_content").height("auto");
      var parentHeight = $(".league_content_slide").height();
      if (activeIndex == 0) {
        doms = $(".schedule_content .data_content_list");
      }
      if (activeIndex ==1) {
        doms = $(".ranking_content .data_content_list");

      }
      if (activeIndex ==2) {
        doms = $(".let_content .data_content_list");
      }
      if (activeIndex ==3) {
        doms = $(".size_content .data_content_list");
      }
      if (activeIndex ==4) {
        doms = $(".stas_content .data_content_list");
      }


      var ht = doms.height() < 380 ? 380 : doms.height();
      $("#league_content").height(ht);
      $("#league_content .league_content_slide").height(ht);
      //$(".swiper-slide-active .data_content_list").offset({top:$("#league_header").height() + 20});
      window.document.body.scrollTop = 0;
      window.document.documentElement.scrollTop = 0;
      //console.log("setHeight");
      //$(".swiper-slide-active .data_content_list")[0].style.top = 0;
      //$(".swiper-slide-active .data_content_list")[0].scrollTop = 0;
      //$(".swiper-slide-active .data_content_list").offset({top:0});

    },
    setNullHeight : function() {
      $("#league_content").height(document.documentElement.clientHeight - $("#league_header").height() - 20);
      $(".league_content_slide").height(document.documentElement.clientHeight - $("#league_header").height() - 20);
      $(".swiper-slide-active section").height(document.documentElement.clientHeight - $("#league_header").height() - 20);
    },
    // 初始化页面数据,默认第一个页面数据, 赛程的数据.
    /**
     *  注意的是,searchCondition 赛程的,和排行的可能会不一样.
     * @param activeIndex  激活的swiper index, 对应page. 赛程,排行,比分盘,大小盘,统计. 这里为0.
     * @param flag
     */
    initPageData : function(activeIndex,flag) {
      $(".league_tabs .active").removeClass('active');
      $(".league_tabs a").eq(activeIndex).addClass('active');
      var params = {       //scheduleParams :
        lang : leagueOpt.getLanguage(),
        leagueId : $scope.leagueId,
        matchType : $scope.matchType,
        timeZone : ""   // need to update..
      }
      leagueOpt.getDatas(activeIndex,$scope,params);
    },
    // change 页面数据, 根据swiper index 获取对应Page的数据.
    changePageData : function(activeIndex,flag) {
      $(".league_tabs .active").removeClass('active');
      $(".league_tabs a").eq(activeIndex).addClass('active');
      this.pageSwiperActiveIndex = activeIndex;

    },
    initTabsSwiper: function (activeIndex, loadFindLive) {
      $(".league_tabs .active").removeClass('active');
      $(".league_tabs a").eq(activeIndex).addClass('active');
      //this.tabActiveIndex = activeIndex;
      this.pageSwiperActiveIndex = activeIndex;
      var params = {
        lang: leagueOpt.getLanguage(),
        leagueId: $scope.leagueId,
        season: $scope.season,
        matchType: $scope.matchType,
        firstStageId: "",
        secondStageId: ""
      };
      //如果是排行的话，初始化排行的tab.
      //赛程不需要赛季参数,默认当前赛季. 排行需要赛季吗?
      leagueOpt.getDatas(activeIndex, $scope, params);
      this.putObjectToSessionStorage("baSwiperActiveIndex", activeIndex);
    },
    getClickedTabsSwiper: function () {
      var baSwiperActiveIndex = 0;
      var baSwiperActiveIndexStr = this.getObjectFromSessionStorage("baSwiperActiveIndex");
      if (baSwiperActiveIndexStr != null) {
        baSwiperActiveIndex = parseInt(baSwiperActiveIndexStr, 10);
      }
      return baSwiperActiveIndex;
    },
    attachTabEvent: function () {

      $(".league_tabs a").on('click', function (e) {
        e.preventDefault()
        $(".league_tabs .active").removeClass('active')
        $(this).addClass('active');

        var left = $(this).offset().left;
        var width = $(this).width();
        var screenWidth = window.screen.width;
        if ((left + width) > screenWidth) {
          $(".league_tabs").scrollLeft(left+width+10);
        }
        if (left < 0) {
          $(".league_tabs").scrollLeft(0);
        }
        leagueOpt.tabsSwiper.slideTo($(this).index())
      })

    },
    calSlideTab : function(){
      var index = leagueOpt.tabsSwiper.activeIndex;
      var currentObj = $(".league_tabs a")[index];
      var left = $(currentObj).offset().left;
      var width = $(currentObj).width();
      var screenWidth = window.screen.width;
      if ((left + width) > screenWidth) {
        $(".league_tabs").scrollLeft(left+width+10);
      }
      if (left < 0) {
        $(".league_tabs").scrollLeft(0);
      }
    },
    //deprecated.
    attachTabEvent2: function () {
      var translate = [];
      var simpleSwiper = {
        targetLen : $(".league_tabs .wraper_scroll")[0].clientWidth ,
        screenLen : window.screen.width,
        touchEvents:{
          start : "touchstart",
          move : "touchmove",
          end : "touchend"
        },
        touch : {
          startX : 0,
          startY : 0,
          currentX : 0,
          currentY : 0,
          diff : 0,
          lastDiff : 0,
          direction : "left",
          startTime : 0,
          endTime : 0
        },
        touchStart : function(e,obj) {
          e.preventDefault();
          var originEvent = null;
          if (e.originalEvent)
            originEvent = e.originalEvent;
          simpleSwiper.touch.startX = originEvent ? originEvent.touches[0].pageX : e.pageX;
          simpleSwiper.touch.startTime = Date.now();
        },
        touchMove : function(e,obj) {
          e.preventDefault();
          simpleSwiper.targetLen =  $(".league_tabs .wraper_scroll").width();

          var originEvent = null;
          if (e.originalEvent)
            originEvent = e.originalEvent;
          simpleSwiper.touch.currentX = originEvent ? originEvent.touches[0].pageX : e.pageX;
          simpleSwiper.touch.diff = simpleSwiper.touch.currentX - simpleSwiper.touch.startX;


          if (simpleSwiper.touch.diff > 0) {
            simpleSwiper.touch.direction = "right";
          } else {
            simpleSwiper.touch.direction = "left";
          }
          simpleSwiper.touch.endTime = Date.now();
          timeDiff = simpleSwiper.touch.endTime - simpleSwiper.touch.startTime ;
          if (simpleSwiper.targetLen > simpleSwiper.screenLen) {    //只有tab長度大於屏幕長度.
            this.setTranslate(simpleSwiper.touch.diff,obj);
          }
        },
        touchEnd : function(e,obj){
          var originEvent = null;
          if (e.originalEvent)
            originEvent = e.originalEvent;

          var tabWidth = $(".league_tabs .wraper_scroll").width();
          var screenWidth =  window.screen.width;
          simpleSwiper.touch.currentX = originEvent ? originEvent.changedTouches[0].pageX : e.pageX;
          simpleSwiper.touch.diff = simpleSwiper.touch.currentX - simpleSwiper.touch.startX;
          simpleSwiper.touch.lastDiff += simpleSwiper.touch.diff;
          if (simpleSwiper.touch.diff > 0) {   // 右滑
            simpleSwiper.touch.lastDiff = 0;
          } else {   //左滑.
            if (Math.abs(simpleSwiper.touch.lastDiff) + screenWidth > tabWidth)
              simpleSwiper.touch.lastDiff =  -(tabWidth - screenWidth);
          }

          simpleSwiper.touch.endTime = Date.now();
          timeDiff = simpleSwiper.touch.endTime - simpleSwiper.touch.startTime ;
          if (timeDiff < 300 || Math.abs(simpleSwiper.touch.diff) < 10) {
            $(".league_tabs .active").removeClass('active')
            $(obj).addClass('active');
            var left = $(obj).offset().left;
            var width = $(obj).width();
            var screenWidth = window.screen.width;
            if ((left + width) > screenWidth) {
              simpleSwiper.touch.lastDiff = -1 * width;
              this.updateTranslate(-1 * width);
            }
            leagueOpt.tabsSwiper.slideTo($(obj).index())
          }
        },
        setTranslate : function(str,obj) {
          var realScrollLen = 0;
          if (simpleSwiper.touch.direction == "right" ) {
            //右滑: obj.scrollLeft + obj.sWidth < pageX;
            var scrollLeft = $(obj).offset().left;
            var slideWidth = simpleSwiper.touch.current;
            realScrollLen = str + simpleSwiper.touch.lastDiff  > 0 ? 0 : str + simpleSwiper.touch.lastDiff ;
            translate.push("transition:all 300ms")
          } else {
            //左滑: width + diff < tabs長度.
            var tabWidth = $(".league_tabs .wraper_scroll").width();
            var screenWidth = window.screen.width ? window.screen.width : 0;
            var lastLeft = simpleSwiper.touch.lastDiff ;
            var thisScrollWidth = screenWidth + Math.abs(simpleSwiper.touch.diff) + Math.abs(lastLeft) ;
            if (thisScrollWidth> tabWidth ) {
              realScrollLen = -(tabWidth - screenWidth);
            } else {
              realScrollLen = str + simpleSwiper.touch.lastDiff;
            }
          }
          this.updateTranslate(realScrollLen);
        },
        updateTranslate : function(realScrollLen) {
          translate = ["transform:translate3d("+realScrollLen+"px,0px,0px)",
            "-webkit-transform:translate3d("+realScrollLen+"px,0px,0px)",
            "-moz-transform:translate3d("+realScrollLen+"px,0px,0px",
            "-ms-transform:translate3d("+realScrollLen+"px,0px,0px)",
            "-o-transform:translate3d("+realScrollLen+"px,0px,0px)",
            "transition:all 100ms"];

          $(".league_tabs .wraper_scroll").attr("style",translate.join(";"));
        }
      }

      /**
       $(".league_tabs a").on("touchstart mousedown",function(e){
        simpleSwiper.touchStart(e,this);
      })
       $(".league_tabs a").on("touchmove mousemove",function(e) {
        simpleSwiper.touchMove(e,this);
      })
       $(".league_tabs a").on("touchend mouseup",function(e){
        simpleSwiper.touchEnd(e,this);
      })
       **/
    },
    /**
     * @desp 初始化赛季选择事件.
     * @param key
     */
    attachLeague: function () {
      $(".league_top .right").on("touchstart mousedown", function (e) {

      })
    },

    /**
     * @desp 让分盘 tab切换事件
     * @param key
     */
    attachLetTab: function () {
      $(".let_bar li").on("touchstart mousedown", function (e) {
        $(".let_bar .active").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        if (index === 0) {
          $scope.let_tab = 0;
        }
        if (index === 1) {
          $scope.let_tab = 1;
        }
        if (index === 2) {
          $scope.let_tab = 2;
        }
      })
    },
    getObjectFromSessionStorage: function (key) {
      return sessionStorage.getItem(key)
    },
    putObjectToSessionStorage: function (key, value) {
      sessionStorage.setItem(key, value);
    },
    getLanguage: function () {
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
    },
    getParams: function (p) {
      return mobileUtil.getSearch()[p];
    }

  }

}]


/**
 * @desp league 赛程模块创建..
 */
angular.module("basketball.league", [
  "ngRoute",
  "ngResource",
  "pascalprecht.translate"
]).config(routeConfig)
  .config(i18nConfig)
  .controller("leagueController", leagueCon)
  .factory("leagueService", leagueService)
  .directive("errSrc",errSrcDirective);

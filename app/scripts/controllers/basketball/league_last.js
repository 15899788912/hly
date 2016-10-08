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


var errSrcDirective = [function() {
  return {
    link: function(scope, element, attrs) {
      element.bind("error", function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set("src", attrs.errSrc);
        }
      });
    }
  }
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
var leagueCon = ["$http", "$scope", "leagueService", function ($http, $scope, leagueService) {

  //获取传入的参数leagueId;
  $scope.leagueId = mobileUtil.getSearch()["leagueId"] || "";
  $scope.matchType = mobileUtil.getSearch()["matchType"] || "";

  //**初始化．
  $scope.$on("$viewContentLoaded", function () {
    $scope.initVar();
    leagueOpt.initLeagueData();
  })


  // 初始化变量:
  $scope.initVar = function(){
    // 初始化数据.
    $scope.header = {};
    $scope.schedule = {}; //赛程。
    $scope.stages = [];    //赛程阶段.
    $scope.matchDatas = []; // 赛程列表.
    $scope.season = "";     //赛季.

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
    $scope.seasonShow = true;
    $scope.selectedSeason = $scope.season;   //默认当前赛季为选中...
  }
  $scope.selectSeason = function (season) {
    $scope.selectedSeason = season;          //选择的赛季赋值.
  }
  /**
   * @desp 赛季选择确认，查询当前所处页面的数据,
   *        code需要优化. 例如统计的传入参数实际只有{lang,leagueId,season}
   */
  $scope.season_confirm = function () {

    var params = {};
    params.lang = leagueOpt.getLanguage();
    params.leagueId = $scope.leagueId;
    params.season = $scope.selectedSeason;
    params.matchType = $scope.matchType;
    params.firstStageId = "";
    params.secondStageId = "";
    if (leagueOpt.pageSwiperActiveIndex == 0) {      //赛程页面.按赛季获取数据.
      //leagueOpt.getDatas(11, $scope, params);
      leagueOpt.seasonQuery.searchScheduleBySeason();
    }
    if (leagueOpt.pageSwiperActiveIndex === 1) {      //排行页面,按赛季获取数据.
      params.firstStageId = leagueOpt.getStageIdByCondition(leagueOpt.rankTabIndex);
      leagueOpt.getDatas(13, $scope, params);
    }
    if (leagueOpt.pageSwiperActiveIndex === 2) {     //让分盘页面,按赛季获取数据.
      leagueOpt.getDatas(2,$scope,params);
    }
    if (leagueOpt.pageSwiperActiveIndex === 3) {     //大小盘页面,按赛季获取数据
      leagueOpt.getDatas(3,$scope,params);
    }
    if (leagueOpt.pageSwiperActiveIndex === 4) {     //统计页面,按赛季获取数据.
      leagueOpt.getDatas(4,$scope,params);
    }
    //更新头部赛季
    $scope.season = $scope.selectedSeason;   // 将选择的赛季赋值给头部显示的变量.
    $scope.seasonShow = false;
  }

  // 打开阶段窗口
  /**
   * @desp
   * @param firstId   firstStageIndex  .searchCondition 数组的index. 当前二级阶段对应的在searchCondition的index.
   * @param secondId  二级阶段的stageId.
   *         stage_tab  选中tab 的index. 一级阶段的stageId.
   */
  $scope.openStage = function (firstId, secondId) {
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
      $scope.confirm_lian();
    }

  }

  $scope.confirm_lian = function () {
    //$scope.showLoadingImg();
    var params = {};
    params.lang = leagueOpt.getLanguage();
    params.leagueId = $scope.leagueId;
    params.season = $scope.season;
    params.firstStageId = $scope.stage_tab;
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

  /**
   * @ desp leagueOpt的模块
   * 1. requestParam.scheduleParams.timeZone需要赋值.
   */
  var leagueOpt_pre = {
    tabsSwiper: null,  // 头部导航swiper tab
    stageTab: null,   // 赛程的阶段tab
    rankTab: null,   //排行的阶段tab .
    tabsSwiperInited: false,
    tabActiveIndex: 0, //头部导航swiper 当前index.
    rankTabIndex: 0,  //排行页面的swiper tab 当前index.
    // 重构
    pageSwiperActiveIndex : 0 , // 头部导航swiper 当前active的index, 初始化为第一个.
    scheduleStageActiveIndex : 0 , //赛程Page的阶段swiper 当前active的index, 初始化为获取赛程数据后的对应stages里的index.
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
      var params = {lang: leagueOpt.getLanguage(), leagueId: $scope.leagueId, matchType: $scope.matchType};
      leagueOpt.getHeader(leagueService, $scope, params, leagueOpt.pageSwiperActiveIndex);
      leagueOpt.initPageSwiper(0, false);
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
          //$scope.showLoadingImg();
          if (leagueOpt.rankTab != null) {
            var activeIndex = leagueOpt.rankTab.activeIndex || 0;     //如果macthType ==2 , activeIndex就是stages对应的index.
            leagueOpt.rankTabIndex = activeIndex;
            if (leagueOpt.tabActiveIndex === 1) {                     //只有处于排行页面的时候，才会触发change事件.
              leagueOpt.changeRankData(activeIndex, true);
            }
          }
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
        },
        onSlideChangeStart: function () {                 //阶段tab前后切换，match数据要跟着变.
          if (leagueOpt.stageTab != null) {
            leagueOpt.scheduleStageActiveIndex = leagueOpt.stageTab.activeIndex || 0;     //如果macthType ==2 , activeIndex就是stages对应的index.
            if (leagueOpt.pageSwiperActiveIndex === 0) {            //只有头部导航是 赛程tab的时候，即处于赛程的页面的时候，才会触发change.
              leagueOpt.changeStageData(leagueOpt.stageTab.activeIndex, leagueOpt.stageSwiperQueryType.slide);
            }
          }
        },
        onSlideChangeEnd: function () {
          //$scope.hideLoadingImg();
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
        for (var i = 0; i <= first; i++) {
          var secondLen = 0;
          if (schedule.searchCondition[i].hasSecondStage == 1) {    //有二级阶段的计算二级阶段.
            var secondStagesLen = schedule.searchCondition[i].stages ? schedule.searchCondition[i].stages.length : 0;
            if (i < first) {
              secondLen = secondStagesLen;
            }
            if (i == first) {
              secondLen += second + 1;    // 因为这时second只是stages的index,
            }

            tabIndex += secondLen;
          } else {                    //无二级阶段的就是只有一级阶段, +1.
            tabIndex += i;
          }
        }
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
        this.changeBeiData(index);
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
    changeBeiData: function (index) {
      var params = {};
      params.lang = leagueOpt.getLanguage();
      params.leagueId = $scope.leagueId;
      params.season = $scope.season;
      params.firstStageId = $scope.stages[index].stageId; // matchType==2 ,滑动的activeIndex 对应的stages的Index.;
      params.secondStageId = "";
      params.matchType = $scope.matchType;
      leagueOpt.getDatas(10, $scope, params);
    },
    //matchType ===1, 可能有一级阶段,也可能没有一级阶段.
    changeLianData: function (index,type) {
      //matchType ==1 滑动
      var currentStageId = $scope.stages[index].stageId || 0;
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
        $scope.header = data;
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
        //初始化赛程tab.
        window.setTimeout(leagueOpt.initStagetab, 0);
      })
    },
    /**
     * @desp 按阶段弹窗选择赛程数据.
     */
    getMatchsByStage: function (leagueService, $scope, params) {
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
      });
    },
    /**
     * @desp 阶段swiper 左右滑动选择数据.
     * @param leagueService
     * @param $scope
     * @param params
     */
    getMatchsByStageSlide : function(leagueService, $scope, params) {
      this.getMatchs(leagueService,$scope,params);
    },
    getMatchs : function(leagueService, $scope, params,type) {
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
        if (type == leagueOpt.stageSwiperQueryType.openForm) {
          //stage栏滚动到对应选择的stage,根据新的schedule数据，找到对应stages的Index.
          var slideIndex = leagueOpt.getStageIndex($scope.schedule);
          leagueOpt.stageTab.slideTo(slideIndex);
        }
      });
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
      var rankService = leagueService.getRankService();

      params.firstStageId = $scope.schedule.firstStageIndex;     //初始化的时候第一阶段id.
      rankService.get(params, function (data) {
        $scope.rank = data;
        //初始化rank_tab.
        window.setTimeout(leagueOpt.initRanktab, 0);
      })
    },
    /**
     * @desp 按阶段查询排行数据
     */
    getRankByStage: function (leagueService, $scope, params) {
      var rankService = leagueService.getRankService();
      rankService.get(params, function (data) {
        $scope.rank = data;
      });
    },
    /**
     * @desp 按赛季查询排行数据
     */
    getRankBySeason: function (leagueService, $scope, params) {
      var rankService = leagueService.getRankService();
      rankService.get(params, function (data) {
        $scope.rank = data;
      });
    },
    /**
     * @desp 从后台获取让分盘.
     * @param initialSlide
     * @param loadFindLive
     */
    getLet: function (leagueService, $scope, params) {
      var letService = leagueService.getLetService();
      letService.get(params, function (data) {
        $scope.lets = data;
        $scope.let_tab = $scope.let_tab || 0;
      })
    },
    getSize: function (leagueService, $scope, params) {
      var sizeService = leagueService.getSizeService();
      sizeService.get(params, function (data) {
        $scope.sizes = data;
        $scope.size_tab = 0;
      })
    },
    getStatistic: function (leagueService, $scope, params) {
      var staService = leagueService.getStatisticService();
      staService.get(params, function (data) {
        $scope.stas = data;
        $scope.stas_tab = $scope.stas_tab || 0;
        window.setTimeout(leagueOpt.genChart,0);
      })
    },
    // this is just show, and need to check the code  after........
    genChart : function(){
      var stas = $scope.stas;
      var total = stas.leagueStatistics ? stas.leagueStatistics.totalMatch  : 0;
      var finish = stas.leagueStatistics ? stas.leagueStatistics.finishedMatch : 0;
      var unfinish = stas.leagueStatistics ? stas.leagueStatistics.unfinishedMatch : 0;
      //chart demo..
      // 第一个chart
      var ctx = $("#myChart");
      var pieChartData = {
        labels:["总场次"+total,"已完赛"+finish,"未完赛"+ unfinish],
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
    },
    initSwiper: function (initialSlide, loadSchedule) {
      leagueOpt.tabsSwiper = new Swiper('#league_content', {
        speed: 300,
        resistanceRatio: 0,   //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        //shortSwipes: false, //进行快速短距离的拖动无法触发Swiper
        threshold: 50,        //拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
        initialSlide: initialSlide,
        onInit: function (tabsSwiper) {
          leagueOpt.tabsSwiperInited = true;
          //leagueOpt.initTabsSwiper(tabsSwiper.activeIndex, loadFindLive);
          leagueOpt.initPageData(0, loadSchedule);
        },
        onSlideChangeStart: function () {
          //$scope.showLoadingImg();
          if (leagueOpt.tabsSwiper != null) {
            leagueOpt.tabActiveIndex = leagueOpt.tabsSwiper.activeIndex;
            leagueOpt.initTabsSwiper(leagueOpt.tabsSwiper.activeIndex, true);
          }

        },
        onSlideChangeEnd: function () {
        }
      })
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
      $(".league_tabs a").on('touchstart mousedown', function (e) {
        e.preventDefault()
        $(".league_tabs .active").removeClass('active')
        $(this).addClass('active')
        leagueOpt.tabsSwiper.slideTo($(this).index())
        var index = $(this).index();
      })
    },
    attachTabEvent2: function () {
      $(".league_tabs a").on('touchstart mousedown', function (e) {
        e.preventDefault()
        $(".league_tabs .active").removeClass('active')
        $(this).addClass('active')
        leagueOpt.tabsSwiper.slideTo($(this).index())
      })
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



  var leagueOpt_pre2 = {
    tabsSwiper: null,  // 头部导航swiper tab
    stageTab: null,   // 赛程的阶段tab
    rankTab: null,   //排行的阶段tab .
    tabsSwiperInited: false,
    tabActiveIndex: 0, //头部导航swiper 当前index.
    rankTabIndex: 0,  //排行页面的swiper tab 当前index.
    // 重构
    pageSwiper : {},
    pageSwiperActiveIndex : 0 , // 头部导航swiper 当前active的index, 初始化为第一个.

    scheduleStageSwiper : {},
    scheduleStageActiveIndex : 0 , //赛程Page的阶段swiper 当前active的index, 初始化为获取赛程数据后的对应stages里的index.

    rankStageSwiper : {},
    rankStageActiveIndex : 0,   //排行Page的阶段swiper 当前active的index,初始化为获取排行数据后的对应stages里的index.
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
      leagueOpt.initPageHeader();
      leagueOpt.initPageSwiper(0, false);
      leagueOpt.attachTabEvent();
    },
    initPageHeader : function () {
      var params = {lang: leagueOpt.getLanguage(), leagueId: $scope.leagueId, matchType: $scope.matchType};
      leagueOpt.getHeader(leagueService, $scope, params);
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
        case "initSchedule":
              this.searchSchedule(leagueService,$scope,params);
              break;
        case "seasonSchedule" :
              this.searchSchedule(leagueService,$scope,params);
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
          //$scope.showLoadingImg();
          if (leagueOpt.rankTab != null) {
            var activeIndex = leagueOpt.rankTab.activeIndex || 0;     //如果macthType ==2 , activeIndex就是stages对应的index.
            leagueOpt.rankTabIndex = activeIndex;
            if (leagueOpt.tabActiveIndex === 1) {                     //只有处于排行页面的时候，才会触发change事件.
              leagueOpt.changeRankData(activeIndex, true);
            }
          }
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
        },
        onSlideChangeStart: function () {                 //阶段tab前后切换，match数据要跟着变.
          if (leagueOpt.stageTab != null) {
            leagueOpt.scheduleStageActiveIndex = leagueOpt.stageTab.activeIndex || 0;     //如果macthType ==2 , activeIndex就是stages对应的index.
            if (leagueOpt.pageSwiperActiveIndex === 0) {            //只有头部导航是 赛程tab的时候，即处于赛程的页面的时候，才会触发change.
              leagueOpt.changeStageData(leagueOpt.stageTab.activeIndex, leagueOpt.stageSwiperQueryType.slide);
            }
          }
        },
        onSlideChangeEnd: function () {
          //$scope.hideLoadingImg();
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
        for (var i = 0; i <= first; i++) {
          var secondLen = 0;
          if (schedule.searchCondition[i].hasSecondStage == 1) {    //有二级阶段的计算二级阶段.
            var secondStagesLen = schedule.searchCondition[i].stages ? schedule.searchCondition[i].stages.length : 0;
            if (i < first) {
              secondLen = secondStagesLen;
            }
            if (i == first) {
              secondLen += second + 1;    // 因为这时second只是stages的index,
            }

            tabIndex += secondLen;
          } else {                    //无二级阶段的就是只有一级阶段, +1.
            tabIndex += i;
          }
        }
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
        this.changeBeiData(index);
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
    changeBeiData: function (index) {
      var params = {};
      params.lang = leagueOpt.getLanguage();
      params.leagueId = $scope.leagueId;
      params.season = $scope.season;
      params.firstStageId = $scope.stages[index].stageId; // matchType==2 ,滑动的activeIndex 对应的stages的Index.;
      params.secondStageId = "";
      params.matchType = $scope.matchType;
      leagueOpt.getDatas(10, $scope, params);
    },
    //matchType ===1, 可能有一级阶段,也可能没有一级阶段.
    changeLianData: function (index,type) {
      //matchType ==1 滑动
      var currentStageId = $scope.stages[index].stageId || 0;
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
    getHeader: function (leagueService, $scope, params) {
      var headerService = leagueService.getHeader();
      headerService.get(params, function (data) {
        $scope.header = data;
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
        //初始化赛程tab.
        window.setTimeout(leagueOpt.initStagetab, 0);
      })
    },
    /**
     * @desp 按阶段弹窗选择赛程数据.
     */
    getMatchsByStage: function (leagueService, $scope, params) {
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
      });
    },
    /**
     * @desp 阶段swiper 左右滑动选择数据.
     * @param leagueService
     * @param $scope
     * @param params
     */
    getMatchsByStageSlide : function(leagueService, $scope, params) {
      this.getMatchs(leagueService,$scope,params);
    },
    getMatchs : function(leagueService, $scope, params,type) {
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
        if (type == leagueOpt.stageSwiperQueryType.openForm) {
          //stage栏滚动到对应选择的stage,根据新的schedule数据，找到对应stages的Index.
          var slideIndex = leagueOpt.getStageIndex($scope.schedule);
          leagueOpt.stageTab.slideTo(slideIndex);
        }
      });
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
      var rankService = leagueService.getRankService();

      params.firstStageId = $scope.schedule.firstStageIndex;     //初始化的时候第一阶段id.
      rankService.get(params, function (data) {
        $scope.rank = data;
        //初始化rank_tab.
        window.setTimeout(leagueOpt.initRanktab, 0);
      })
    },
    /**
     * @desp 按阶段查询排行数据
     */
    getRankByStage: function (leagueService, $scope, params) {
      var rankService = leagueService.getRankService();
      rankService.get(params, function (data) {
        $scope.rank = data;
      });
    },
    /**
     * @desp 按赛季查询排行数据
     */
    getRankBySeason: function (leagueService, $scope, params) {
      var rankService = leagueService.getRankService();
      rankService.get(params, function (data) {
        $scope.rank = data;
      });
    },
    /**
     * @desp 从后台获取让分盘.
     * @param initialSlide
     * @param loadFindLive
     */
    getLet: function (leagueService, $scope, params) {
      var letService = leagueService.getLetService();
      letService.get(params, function (data) {
        $scope.lets = data;
        $scope.let_tab = $scope.let_tab || 0;
      })
    },
    getSize: function (leagueService, $scope, params) {
      var sizeService = leagueService.getSizeService();
      sizeService.get(params, function (data) {
        $scope.sizes = data;
        $scope.size_tab = 0;
      })
    },
    getStatistic: function (leagueService, $scope, params) {
      var staService = leagueService.getStatisticService();
      staService.get(params, function (data) {
        $scope.stas = data;
        $scope.stas_tab = $scope.stas_tab || 0;
        window.setTimeout(leagueOpt.genChart,0);
      })
    },
    // this is just show, and need to check the code  after........
    genChart : function(){
      var stas = $scope.stas;
      var total = stas.leagueStatistics ? stas.leagueStatistics.totalMatch  : 0;
      var finish = stas.leagueStatistics ? stas.leagueStatistics.finishedMatch : 0;
      var unfinish = stas.leagueStatistics ? stas.leagueStatistics.unfinishedMatch : 0;
      //chart demo..
      // 第一个chart
      var ctx = $("#myChart");
      var pieChartData = {
        labels:["总场次"+total,"已完赛"+finish,"未完赛"+ unfinish],
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
    },
    // 初始化pageSwiper, initialSlide = 0;

    pageSwiperConfig :{
      dom : "#league_content",
      initialSlide : 0,
      initFn : function (tabsSwiper) {
        leagueOpt.initPageSwiperData();
      },
      changeStartFn : function () {
        if (leagueOpt.pageSwiper != null) {
          leagueOpt.pageSwiperActiveIndex = leagueOpt.pageSwiper.activeIndex;
          leagueOpt.changePageSwiperData(leagueOpt.pageSwiper.activeIndex, true);
        }

      },
      changeEndFn : null
    },
    /**
     *  初始化页面导航的swiper, 赋值给pageSwiper,当前index等于pageSwiperActiveIndex.
     * @param initialSlide
     * @param loadSchedule
     */
    initPageSwiper: function (initialSlide, loadSchedule) {
      leagueOpt.pageSwiperConfig.initialSlide = initialSlide;
      leagueOpt.initSwiper("pageSwiper",leagueOpt.pageSwiperActiveIndex,leagueOpt.pageSwiperConfig);
    },
    initPageSwiperData : function() {
      var initScheduleParam = {       //scheduleParams :
        lang : leagueOpt.getLanguage(),
        leagueId : $scope.leagueId,
        matchType : $scope.matchType,
        timeZone : ""   // need to update..
      }
      leagueOpt.getDatas("initSchedule",$scope,initScheduleParam);
    },
    changePageSwiperData : function(index,flag) {
      $(".league_tabs .active").removeClass('active');
      $(".league_tabs a").eq(index).addClass('active');
      //this.tabActiveIndex = activeIndex;
      this.pageSwiperActiveIndex = index;
      var params = {
        lang: leagueOpt.getLanguage(),
        leagueId: $scope.leagueId,
        season: $scope.season,
        matchType: $scope.matchType,
        //firstStageId: "",
        //secondStageId: ""
      };
      //如果是排行的话，初始化排行的tab.
      //赛程不需要赛季参数,默认当前赛季. 排行需要赛季吗?
      leagueOpt.getDatas(index, $scope, params);
      this.putObjectToSessionStorage("baSwiperActiveIndex", index);
    },
    //获取赛程数据
    searchSchedule : function(leagueService,$scope,params) {
      var scheduleService = leagueService.getScheduleService();
      scheduleService.get(params, function (data) {
        $scope.schedule = data;
        $scope.matchDatas = [];
        //整理赛事的列表.
        leagueOpt.setupMatchs(data);
        /**
         *整理阶段列表,如果MatchType == 2的话，只显示一级阶段, matchType ==1的话，显示一级(没有二级阶段的情况下)和只二级阶段.
         */
        leagueOpt.setupStages(data);
        //初始化赛程tab.
        leagueOpt.initScheduleStageSwiper()
      })
    },

    setupMatchs : function(data) {
      if (data.matchData) {
        angular.forEach(data.matchData, function (item) {
          var matchData = {};
          matchData.dayStr = item.dayStr;
          matchData.list = item.datas;
          $scope.matchDatas.push(matchData);
        })
      }
    },
    setupStages : function(data) {
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
    },


    /** stages swiper Tab
     * @desp 赛程阶段的swiper . 切换,滑动，更新matchs或滑动到相应的stage.
     *
     * **/
    scheduleStageSwiperConfig :{
      dom : "#stage-tab1",
      initialSlide : 0,
      initFn : function (tabsSwiper) {
        leagueOpt.initPageSwiperData();
      },
      changeStartFn : function () {
        if (leagueOpt.pageSwiper != null) {
          leagueOpt.pageSwiperActiveIndex = leagueOpt.pageSwiper.activeIndex;
          leagueOpt.changePageSwiperData(leagueOpt.pageSwiper.activeIndex, true);
        }

      },
      changeEndFn : null
    },
    initScheduleStageSwiper : function(initialSlide,loadMatchs){
      var initActiveIndex = leagueOpt.getStageIndex($scope.schedule);
      leagueOpt.scheduleStageSwiperConfig.initialSlide = initActiveIndex;
      window.setTimeout(leagueOpt.initScheduleStageSwiperNoParam,0);
    },

    initScheduleStageSwiperNoParam : function(){
      leagueOpt.initSwiper(leagueOpt.scheduleStageSwiperConfig.dom,leagueOpt.scheduleStageSwiperConfig.initialSlide,leagueOpt.scheduleStageSwiperConfig);
    },

    // to-do 参数精简...
    initSwiper : function(globalName,globalActiveIndex,pageSwiperConfig) {
      leagueOpt[globalName] = new Swiper(pageSwiperConfig.dom,{
        speed: 300,
        resistanceRatio: 0,   //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        //shortSwipes: false, //进行快速短距离的拖动无法触发Swiper
        threshold: 50,        //拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
        initialSlide:globalActiveIndex,
        onInit: pageSwiperConfig.initFn,
        onSlideChangeStart: pageSwiperConfig.changeStartFn,
        onSlideChangeEnd: pageSwiperConfig.changeEndFn
      });
    },

    seasonQuery : {
      //按赛季查询.
      searchScheduleBySeason : function(){
        var seasonScheduleParam = {       //scheduleParams :
          lang : leagueOpt.getLanguage(),
          leagueId : $scope.leagueId,
          matchType : $scope.matchType,
          season : $scope.season,
          timeZone : ""   // need to update..
        }
        leagueOpt.getDatas("seasonSchedule",$scope,seasonScheduleParam);
      },
      searchRankBySeason : function(leagueService,$scope,params) {
        leagueOpt.searchSchedule(leagueService,$scope,params);
      },
      searchLetsBySeason : function() {

      },
      searchSizesBySeason : function() {

      },
      searchStasBySeason : function () {

      }
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
      $(".league_tabs a").on('touchstart mousedown', function (e) {
        e.preventDefault()
        $(".league_tabs .active").removeClass('active')
        $(this).addClass('active')
        console.log(leagueOpt.pageSwiper);
        leagueOpt.pageSwiper.slideTo($(this).index())
        var index = $(this).index();
      })
    },
    attachTabEvent2: function () {
      $(".league_tabs a").on('touchstart mousedown', function (e) {
        e.preventDefault()
        $(".league_tabs .active").removeClass('active')
        $(this).addClass('active')
        leagueOpt.tabsSwiper.slideTo($(this).index())
      })
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


  var leagueOpt = {
    // pageSwiper,scheduleSwiper,rankSwiper 三个swiper.
    swiperName : {
      "pageSwiper" : "pageSwiper",
      "scheduleSwiper" : "scheduleSwiper",
      "rankSwiper" : "rankSwiper"
    },
    pageSwiper : null,
    pageSwiperActiveIndex : 0,
    pageSwiperConfig : null,

    scheduleSwiper : null,
    scheduleSwiperActiveIndex : 0,
    scheduleSwiperConfig : null,

    rankSwiper : null,
    rankSwiperActiveIndex : 0,

    swiperConfig : {
      dom :"",
      initialSlide : 0,
      initFn : null,
      changeStartFn : null,
      changeEndFn : null,
    },

    /**
     * 1.初始化头部信息
     * 2.初始化头部swiper
     * 3.初始化头部<a>事件.
     */
    initLeagueData : function() {
      leagueOpt.initHeader();
      leagueOpt.initPageSwiper();
      leagueOpt.initHeaderNavEvent();
    },
    initHeader : function() {
      leagueData.searchHeader();
    },
    initPageSwiper : function() {
      var pageSwiperConfig = angular.copy(leagueOpt.swiperConfig);
      pageSwiperConfig.dom = "";
      pageSwiperConfig.initialSlide = 0;
      pageSwiperConfig.initFn = function(){
        leagueData.searchScheduleInit();
      };
      pageSwiperConfig.changeStartFn = function() {

      }

      leagueOpt.initSwiper(leagueOpt.swiperName.pageSwiper,pageSwiperConfig);
    },
    initScheduleStageSwiper : function() {
      var scheduleStageSwiperConfig = angular.copy(leagueOpt.swiperConfig);
      scheduleStageSwiperConfig.dom = "";
      scheduleStageSwiperConfig.initialSlide = 0;
      scheduleStageSwiperConfig.initFn = null;
      scheduleStageSwiperConfig.changeStartFn = function(){

      }
      leagueOpt.initSwiper(leagueOpt.swiperName.scheduleSwiper,scheduleStageSwiperConfig);
    },
    initHeaderNavEvent : function() {

    },

    initSwiper : function(globalName,config) {
      leagueOpt[globalName] = new Swiper('#league_content', {
        speed: 300,
        resistanceRatio: 0,   //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        //shortSwipes: false, //进行快速短距离的拖动无法触发Swiper
        threshold: 50,        //拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
        initialSlide: config.initialSlide,
        onInit: config.initFn,
        onSlideChangeStart: config.changeStartFn,
        onSlideChangeEnd: function () {
        }
      })
    },

    initStageSwiper : function() {
      var globalName = leagueOpt.swiperName.scheduleSwiper;
      var config = "";//
    }
  }

  var leagueUtil = {
    getLanguage : function() {
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
  }
  var leagueData = {
    params: {
      headerParams : {lang: leagueUtil.getLanguage(), leagueId: $scope.leagueId, matchType: $scope.matchType},
      scheduleParams : {
        lang :leagueUtil.getLanguage,
        leagueId : $scope.leagueId,
        matchType:$scope.matchType,
        season:"",
        firstStageId:"",
        secondStageId:"",
        timeZone:""
      }
    },
    //查询头部信息..
    searchHeader: function () {
      var headerParams = leagueData.params.headerParams || {} ;
      var headerService = leagueService.getHeader();
      headerService.get(headerParams, function (data) {
        $scope.header = data;
        $scope.season = data.season ? data.season[0] : "";
      })
    },

    //初始查询赛程信息.
    searchScheduleInit : function() {
        var initParam = angular.copy(leagueData.params.scheduleParams);
        leagueData.searchSchedule(initParam);
    },
    //根据赛季查询赛程信息.
    searchScheduleBySeason : function() {
      leagueData.seasonQueryOpt.searchScheduleBySeason();
    },

    //查询赛程,初始化matchs,初始化stages,初始化stagetab.
    searchSchedule : function(params) {
      var scheduleService = leagueService.getScheduleService();
      scheduleService.get(params,function(data){
        $scope.schedule = data;
        $scope.matchDatas = [];
        leagueData.setupOpt.setupMatchs(data);
        leagueData.setupOpt.setupStages(data);
      })
    },
    seasonQueryOpt : {
      //根据赛季查询赛程.
      searchScheduleBySeason : function() {
        var seasonParam = angular.copy(leagueData.params.scheduleParams);
        seasonParam.season = $scope.season;
        leagueData.searchSchedule(seasonParam);
      },
      searchRankBySeason : function() {

      },
      searchLetsBySeason : function() {

      },
      searchSizesBySeason : function() {

      },
      searchStasBySeason : function() {

      }
    },
    setupOpt : {
      setupMatchs : function(data) {
        if (data.matchData) {
          angular.forEach(data.matchData, function (item) {
            var matchData = {};
            matchData.dayStr = item.dayStr;
            matchData.list = item.datas;
            $scope.matchDatas.push(matchData);
          })
        }
      },
      setupStages : function(data) {
        $scope.stages = [];
        $scope.matchType = data.matchType;
        //firstID 错误le...
        var index = 0;
        angular.forEach(data.searchCondition, function (item,index) {
          var nitem = angular.copy(item);
          if (data.matchType === 2) {         //只放入一级菜单...
            nitem.firstID = 0;
            $scope.stages.push(nitem);
          }
          if (data.matchType === 1) {          //放入无二级的一级菜单，和有二级的除了一级的所有二级菜单.
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
      }
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
  .controller("leagueController", leagueCon)
  .factory("leagueService", leagueService)
  .directive("errSrc",errSrcDirective);

var integral = angular.module("live1.integral");

integral.config(["$translateProvider", function ($translateProvider) {

  var translationsEn = {
    "DATA_TITLE":"Football Database",
    "DATA_INTEGRAL":"Standings",
    "DATA_SCHEDULE":"Schedule",
    "DATA_MATCHCOUNT":"Match",
    "DATA_WINCOUNT":"Win",
    "DATA_TIECOUNT":"Draw",
    "DATA_DEFEATCOUNT":"Lose",
    "DATA_GAINANDLOSS":"Gain/Lose",
    "DATA_ENDWIN":"Net Win",
    "DATA_SCORE":"Points",
    "DATA_LEAGUEROUNDS":"League Round ",
    "DATA_LEAGUEROUNDS_NO":"",
    "DATA_CHOICEROUND":"Select Round ",
    "DATA_ROUNDS":"Round ",
    "DATA_ROUNDS_NO":"",
    "DATA_NODATA":"No Data",
    "RANK_TEAM":"Ranking/Team"
  }
  var translationsZH = {
    "DATA_TITLE":"【足球资料库】足球联赛_赛程_球队_球员数据库-一比分",
    "DATA_KEYWORDS":"足球资料库,足球数据库,足球联赛,足球赛程",
    "DATA_DESCRIPTION":"一比分足球资料库频道为您提供足球联赛、足球赛程、足球球队、足球球员等赛事数据库、包含欧洲五大联赛、欧冠、亚冠、中超等主要联赛的赛事、赛程积分、让球大小盘路、球队资料、球员资料等数据资料。",
    "DATA_INTEGRAL":"积分榜",
    "DATA_SCHEDULE":"赛程",
    "DATA_MATCHCOUNT":"赛",
    "DATA_WINCOUNT":"胜",
    "DATA_TIECOUNT":"平",
    "DATA_DEFEATCOUNT":"负",
    "DATA_GAINANDLOSS":"得失",
    "DATA_ENDWIN":"净胜",
    "DATA_SCORE":"分",
    "DATA_LEAGUEROUNDS":"联赛第",
    "DATA_LEAGUEROUNDS_NO":"轮",
    "DATA_CHOICEROUND":"选择轮次",
    "DATA_ROUNDS":"第",
    "DATA_ROUNDS_NO":"轮",
    "DATA_NODATA":"暂无数据",
    "RANK_TEAM":"排名/球队"

  };
  var translationsZH_HANS = {
    "DATA_TITLE":"【足球資料庫】足球聯賽_賽程_球隊_球員數據庫-一比分",
    "DATA_KEYWORDS":"足球資料庫,足球數據庫,足球聯賽,足球賽程",
    "DATA_DESCRIPTION":"一比分足球资料库频道为您提供足球联赛、足球赛程、足球球队、足球球员等赛事数据库、包含欧洲五大联赛、欧冠、亚冠、中超等主要联赛的赛事、赛程积分、让球大小盘路、球队资料、球员资料等数据资料。",
    "DATA_INTEGRAL":"積分榜",
    "DATA_SCHEDULE":"賽程",
    "DATA_MATCHCOUNT":"賽",
    "DATA_WINCOUNT":"勝",
    "DATA_TIECOUNT":"平",
    "DATA_DEFEATCOUNT":"負",
    "DATA_GAINANDLOSS":"得失",
    "DATA_ENDWIN":"淨勝",
    "DATA_SCORE":"分",
    "DATA_LEAGUEROUNDS":"聯賽第",
    "DATA_LEAGUEROUNDS_NO":"輪",
    "DATA_CHOICEROUND":"選擇輪次",
    "DATA_ROUNDS":"第",
    "DATA_ROUNDS_NO":"輪",
    "DATA_NODATA":"暫無數據",
    "RANK_TEAM":"排名/球隊"

  };
  var translationsTH = {
    "DATA_TITLE":"ฐานข้อมูลฟุตบอล",
    "DATA_INTEGRAL":"ตารางคะแนน",
    "DATA_SCHEDULE":"ตารางบอล",
    "DATA_MATCHCOUNT":"รวมแข่ง",
    "DATA_WINCOUNT":"ชนะ",
    "DATA_TIECOUNT":"เสมอ",
    "DATA_DEFEATCOUNT":"แพ",
    "DATA_GAINANDLOSS":"ได้/พลาด",
    "DATA_ENDWIN":"สุทธ",
    "DATA_SCORE":"แต้ม",
    "DATA_LEAGUEROUNDS":"เกมรอบที่",
    "DATA_LEAGUEROUNDS_NO":"ในลีก",
    "DATA_CHOICEROUND":"เลือกรอบ",
    "DATA_ROUNDS":"รอบที",
    "DATA_ROUNDS_NO":"",
    "DATA_NODATA":"ไม่มีข้อมูล",
    "RANK_TEAM":"อันดับ/ทีม"
  }
  var translationsVI = {
    "DATA_TITLE":"Trung Tâm Dữ Liệu Bóng Đá",
    "DATA_INTEGRAL":"Bảng Xếp Hạng",
    "DATA_SCHEDULE":"Lịch Thi Đấu",
    "DATA_MATCHCOUNT":"Trận",
    "DATA_WINCOUNT":"Thắng ",
    "DATA_TIECOUNT":"Hòa",
    "DATA_DEFEATCOUNT":"Bại",
    "DATA_GAINANDLOSS":"Bàn Thắng/Bại",
    "DATA_ENDWIN":"Hiệu Số",
    "DATA_SCORE":"Điểm",
    "DATA_LEAGUEROUNDS":"Vòng ",
    "DATA_LEAGUEROUNDS_NO":" Của Giải Đấu",
    "DATA_CHOICEROUND":"Mời Chọn Vòng Đấu",
    "DATA_ROUNDS":"Vòng Thứ ",
    "DATA_ROUNDS_NO":"",
    "DATA_NODATA":"không có dữ liệu",
    "RANK_TEAM":"Xếp hạng/Đội bóng"
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


//*****************资料库控制器**************
integral.controller("integralController", [
  "$http",
  "$scope",
  "$translate",
  "langueScoreServiceFactory",
  "scheduleServiceFactory",
  "choiceLeagueTimeServiceFactory",
  "choiceScheduleServiceFactory",
  function ($http, $scope, $translate,langueScoreServiceFactory,scheduleServiceFactory,choiceLeagueTimeServiceFactory,choiceScheduleServiceFactory)
  {
    var leagueId,type,integralTime;

    $scope.$on("$viewContentLoaded", function ($window) {

      // loading图片
      $scope.loadingShow=true;

      leagueId =mobileUtil.getSearch()['lid'];
      type =mobileUtil.getSearch()['type'];
      $scope.leagueId=leagueId;
      $scope.type=type;
      $scope.navId=$scope.getObjectFromSessionStorage('navId');
      if($scope.navId==null){
        $scope.navId='00';
      }

      // 积分榜控制
      $scope.langueScores=null;
      langueScoreServiceFactory.langueScoreData($scope,leagueId,type);

      // 计算高度
      $scope.setHeight();

      $scope.time_click=function(){
        $(".integral-time >span:last").css('background','url(../images/data/select2.png) no-repeat right bottom');
        $(".choiceTips").slideDown("fast");
        $(".timeMask").css('display','block');
      }
      $(".timeMask").on("click",function(){
        $(".choiceTips").slideUp("fast");
        $(".integral-time >span:last").css('background','url(../images/data/select.png) no-repeat right bottom');
        $(this).css('display','none');
      })
      // 左右滑动切换积分榜和赛程
      var integralSwiper = new Swiper('.swiper-container', {
        loop: false,
        onTransitionStart: function() {
          $('.tabBtn p').eq(integralSwiper.activeIndex)
          .addClass('active').siblings().removeClass('active');
        },
        onSlideChangeStart: function(swiper){
          $(".swiper-slide").scrollTop(0);
        },
        onSlideNextStart: function(swiper){
          $('.selectBtn').fadeIn().css('display','flex');
        },
        onSlidePrevStart: function(swiper){
          $('.selectBtn').fadeOut();
        }
      });

      // 点击切换积分榜和赛程
      $scope.changeSlide=function($event){
        var index=$(".tabBtn p").index($event.currentTarget);
        $(".swiper-slide").scrollTop(0);
        $(".tabBtn p").eq(index).addClass('active').siblings().removeClass('active');
        integralSwiper.slideTo(index, 600, false);
        if(index==0){
          $('.selectBtn').fadeOut();
        }else{
          $('.selectBtn').fadeIn().css('display','flex');
        }
      }
      // 点击按钮显示弹出层
      $scope.alertRound=function(){
        $('.mask').show();
        $('.choiceRound').show();
        $('body').addClass('body');
        $(".choiceRound ul").scrollTop($(".choiceRound ul li").height()*$scope.defaultRoundIndex);
      }
      $scope.handleTime=function(_time) {
        var rDate,myDate;
        for (var i = 0; i < _time.length; i++)
        {
          var info_list=_time[i].list;
          for(var j = 0;j<info_list.length;j++){
            if($scope.getCountry()=='c-zh'||$scope.getCountry()=='c-zh-tw'){
              info_list[j].endTime = info_list[j].rDate;
            }
            else
            {
               rDate=info_list[j].rDate.split(" ");
               myDate=new Date(rDate[0]);
              info_list[j].endTime = rDate[1]+" "+myDate.Format('dd/MM/yyyy');
            }
          }
        }
        return info_list;
      }
      // 点击遮罩层隐藏弹出层
      $('.mask').on("click",function(){
        $('.choiceRound').hide();
        $(this).hide();
        $('body').removeClass('body');
      })
    })
    // 赛程控制
    $scope.defaultSchedule=function(){
      var defaultTime=$scope.getObjectFromSessionStorage("dataDefaultTime");
      $scope.schedules=null;
      scheduleServiceFactory.scheduleData($scope,leagueId,defaultTime,type);
    }
    //sessionStorage中获取对象
    $scope.getObjectFromSessionStorage = function (key) {
      return sessionStorage.getItem(key)
    };
    //sessionStorage中增加对象
    $scope.putObjectToSessionStorage = function (key, value) {
      sessionStorage.setItem(key, value);
    }
    //sessionStorage中删除对象
    $scope.removeObjectFromSessionStorage = function (key) {
      sessionStorage.removeItem(key);
    }
    //localStorage中获取对象
    $scope.getObjectFromLocalStorage = function (key) {
      return localStorage.getItem(key);
    }
    //localStorage中增加对象
    $scope.putObjectToLocalStorage = function (key, value) {
      localStorage.setItem(key, value);
    }
    //localStorage中删除对象
    $scope.removeObjectFromLocalStorage = function (key) {
      localStorage.removeItem(key);
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
    // 取国家方法
    $scope.getCountry = function () {
        var country = $scope.getObjectFromLocalStorage("country");
        if (country == null) {
            country = defaultCountry;
        }
        return country;
    };
    //高度计算
    $scope.setHeight=function (){
      var heightVal=document.documentElement.clientHeight - $("header").height();
      var scheduleHeight=document.documentElement.clientHeight - $("header").height()-$(".selectBtn").height();
      $('.swiper-container').height(heightVal);
      $('.swiper-slide').height(heightVal);
      $('#schedule').height(scheduleHeight);
    }

    // 选择赛季时间
    $scope.choiceTime=function($event){

      $scope.loadingShow=true;

      var index=$(".choiceTips span").index($event.currentTarget);
      $('.choiceTips_time').eq(index).addClass('on').siblings().removeClass('on');
      integralTime= $(".choiceTips_time").eq(index).html();
      $(".timeMask").css("display","none");
      $(".defaultTime").html(integralTime);
      $(".integral-time>span:last").css('background','url(../images/data/select.png) no-repeat right bottom');
      $(".choiceTips").slideUp("fast");
      $scope.langueScores=null;
      $scope.schedules=null;
      choiceLeagueTimeServiceFactory.choiceLeagueTimeData($scope,leagueId,integralTime,type);
      $scope.putObjectToSessionStorage("dataDefaultTime",integralTime);
      scheduleServiceFactory.scheduleData($scope,leagueId,integralTime,type);
    }
    // 选择轮次
    $scope.choiceRound=function($event){
      var index=$(".choiceRound ul li").index($event.currentTarget);
      $scope.defaultRoundIndex=index;
      $('.choiceRound ul li').eq(index).addClass('choiced').siblings().removeClass('choiced');
      var roundNum=  $('.choiceRound ul li').eq(index).find('span').html();
      $scope.defaultRound=roundNum;
      $('.mask').hide();
      $('.choiceRound').hide();
      $('body').removeClass('body');
      integralTime= $(".defaultTime").html();
      $('.nextBtn img').css('opacity',1);
      $('.preBtn img').css('opacity',1);
      if(index==$scope.minIndexRound){$('.preBtn img').css('opacity',0.4);}
      if(index==$scope.maxIndexRound){$('.nextBtn img').css('opacity',0.4);}

      $scope.loadingShow=true;
      choiceScheduleServiceFactory.choiceScheduleData($scope,leagueId,integralTime,roundNum,type);
    }
    // 左-减轮次

    $scope.subtractRound = function(){

      var nowRandNum=$('.randNum').find('i').html();
      integralTime= $(".defaultTime").html();
      var indexRound;
      $('.choiced').prev().addClass('choiced').siblings().removeClass('choiced');
      $scope.defaultRoundIndex--;
      for(var i=0;i<$scope.roundDatas.length;i++)
      {
        if($scope.roundDatas[i].round==nowRandNum)
        {
          indexRound=i;
        }
      }
      if(indexRound>$scope.minIndexRound)
      {
        $scope.loadingShow=true;
        indexRound--;
        nowRandNum=$scope.roundDatas[indexRound].round;
        choiceScheduleServiceFactory.choiceScheduleData($scope,leagueId,integralTime,nowRandNum,type);
        $('.nextBtn img').css('opacity',1);
        $scope.defaultRound=nowRandNum;
        if(indexRound==$scope.minIndexRound)
        {
          $('.preBtn img').css('opacity',0.4);
        }
      }
    }
    // 右-加轮次
    $scope.addRound = function(){

      var nowRandNum=$('.randNum').find('i').html();
      integralTime= $(".defaultTime").html();
      var indexRound;
      $('.choiced').next().addClass('choiced').siblings().removeClass('choiced');
      $scope.defaultRoundIndex++;
      for(var i=0;i<$scope.roundDatas.length;i++)
      {
        if($scope.roundDatas[i].round==nowRandNum)
        {
          indexRound=i;
        }
      }
      if(indexRound<$scope.maxIndexRound){
        $scope.loadingShow=true;
        indexRound++;
        nowRandNum=$scope.roundDatas[indexRound].round;
        choiceScheduleServiceFactory.choiceScheduleData($scope,leagueId,integralTime,nowRandNum,type);
        $('.preBtn img').css('opacity',1);
        $scope.defaultRound=nowRandNum;
        if(indexRound==$scope.maxIndexRound)
        {
          $('.nextBtn img').css('opacity',0.5);
        }
      }
    }
  }
]);
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
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

//*****************资料库服务**************
// 默认赛季-积分榜服务
integral.factory("langueScoreService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footballLeagueData.qLeagueDate.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);
// 默认赛季-积分榜服务工厂
integral.factory("langueScoreServiceFactory", [
  "langueScoreService",
  function (langueScoreService) {
    var obj = {};
    obj.langueScoreData = function ($scope,leagueId,type) {
      langueScoreService.get({lang:$scope.getLanguage(),leagueId:leagueId,type:type}, function (data) {

        if(data.code==200)
        {
          $scope.leagueTimess=data.leagueTimes;// 联赛时间

          if(data.leagueTimes.leagueDate!=null){
            $scope.defaultTime=data.leagueTimes.leagueDate[0].date;
            var defaultTime=data.leagueTimes.leagueDate[0].date;
          }
          $scope.putObjectToSessionStorage("dataDefaultTime",defaultTime);

          if(data.langueScore.length!=0){
            if(data.langueScore.length>0){
              $scope.langueScores=data.langueScore;// 默认积分榜
            }
            else{
              $scope.langueScores=null;
            }
          }
          // 赛程控制
          $scope.defaultSchedule();
          $scope.loadingShow=false;
        }
      });
    };
    return obj;
  }
]);
//选择赛季时间服务
integral.factory("choiceLeagueTimeService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footballLeagueData.qLeagueScore.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);
//选择赛季时间服务工厂
integral.factory("choiceLeagueTimeServiceFactory", [
  "choiceLeagueTimeService",
  function (choiceLeagueTimeService) {
    var obj = {};
    obj.choiceLeagueTimeData = function ($scope,leagueId,leagueDate,type) {
        choiceLeagueTimeService.get({lang:$scope.getLanguage(),leagueId:leagueId,leagueDate:leagueDate,type:type}, function (data) {

          if(data.code==200){

            if(data.leaTeamList.length>0)
            {
                $scope.langueScores=data.leaTeamList;// 联赛时间
            }
            //$scope.loadingShow=false;
          }
      });
    };
    return obj;
  }
]);

// 默认赛程服务
integral.factory("scheduleService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footballLeagueData.qLeagueRound.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

// 默认赛程服务工厂
integral.factory("scheduleServiceFactory", [
  "scheduleService",
  function (scheduleService) {
    var obj = {};
    obj.scheduleData = function ($scope,leagueId,leagueDate,type) {
        scheduleService.get({lang:$scope.getLanguage(),leagueId:leagueId,leagueDate:leagueDate,type:type}, function (data) {
          if(data.code==200)
          {
            if(data.race!=null){
                $scope.schedules=data.race;
                $scope.handleTime(data.race);
            }
            if(data.data.length!=0){
              $scope.roundDatas=data.data;
              if($scope.roundDatas!=null)
              {
                var tempRoundDatas=[];
                for(var i=0;i<$scope.roundDatas.length;i++)
                {
                  if($scope.roundDatas[i].current==true)
                  {
                    $scope.defaultRoundIndex=i;
                    $scope.defaultRound=$scope.roundDatas[i].round;
                  }
                  if($scope.roundDatas[i].round!=null){
                    tempRoundDatas.push($scope.roundDatas[i]);
                  }
                }
                $scope.roundDatas = tempRoundDatas;
                $scope.minIndexRound=0;
                $scope.maxIndexRound=$scope.roundDatas.length-1;
                if($scope.defaultRound==$scope.roundDatas[$scope.minIndexRound].round)

                {
                  $('.preBtn img').css('opacity',0.4);
                }
                if($scope.defaultRound==$scope.roundDatas[$scope.maxIndexRound].round)
                {
                  $('.nextBtn img').css('opacity',0.4);
                }
              }
            }

            if(data.race==null)
            {
              $scope.schedules=null;
            }else {
              if(data.race[0].list.length==0)
              {
                $scope.schedules=null;
              }
            }
          }
          $scope.loadingShow=false;
        });
      };
    return obj;
  }
]);

// 切换赛程服务
integral.factory("choiceScheduleService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl+"/core/footballLeagueData.qLeagueRace.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);
// 切换赛程服务工厂
integral.factory("choiceScheduleServiceFactory", [
  "choiceScheduleService",
  function (choiceScheduleService) {
    var obj = {};
    obj.choiceScheduleData = function ($scope,leagueId,leagueDate,leagueRound,type) {
        choiceScheduleService.get({lang:$scope.getLanguage(),leagueId:leagueId,leagueDate:leagueDate,leagueRound:leagueRound,type:type}, function (data) {
          if(data.code==200){
            if(data.race.length>0){
              $scope.schedules=data.race;
              $scope.handleTime(data.race);
              if(data.race.length==1)
              {
                if(data.race[0].list.length==0)
                {
                  $scope.schedules=null;
                }
              }
            }

          }else {
              $scope.schedules=null;
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
  var logoUrl = "@@IMGURL/live/404.png";
  if(team=='team'){
    obj.src = logoUrl;
  }else{
    obj.src = logoUrl;
  }
  obj.src = logoUrl;
  obj.onerror = null;
};

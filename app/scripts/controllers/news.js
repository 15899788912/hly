/**
 * Created by john on 2016/3/31.
 */

var news = angular.module("live1.news");

news.config(["$translateProvider", function ($translateProvider) {
  var translationsEn = {
    "TITLE":	"One Score Information",
    "SPORTS_NEWS":	"Sports Information",
    "RECOMMEND":	"Recommend",
    "ONLOADING":	"Loading hard...",
    "DATA_NODATA":"No Data",
  }
  var translationsZH = {
    "TITLE": "一比分-足球比分直播平台，快5秒的足球比分网",
    "NEWS_KEYWORDS":"足球比分，比分直播，比分网，一比分",
    "NEWS_DESCRIPTION":"一比分，专业的足球比分直播平台，快5秒的足球比分网，比分直播与比赛快速同步、牛B滚球指数，打造最权威、最专业的资讯数据，尽享足球精彩乐趣。",
    "SPORTS_NEWS": "体育资讯",
    "RECOMMEND": "推荐",
    "ONLOADING": "拼命加载中...",
    "DATA_NODATA":"暂无数据",

  };
  var translationsZH_HANS = {
    "TITLE": "一比分-足球比分直播平台，快5秒的足球比分網",
    "NEWS_KEYWORDS":"足球比分，比分直播，比分網，一比分",
    "NEWS_DESCRIPTION":"一比分，專業的足球比分直播平台，快5秒的足球比分網，比分直播與比賽快速同步、牛B滾球指數，打造最權威、最專業的資訊數據，盡享足球精彩樂趣。",
    "SPORTS_NEWS": "體育資訊",
    "RECOMMEND": "推薦",
    "ONLOADING": "拼命加載中...",
    "DATA_NODATA":"暫無數據",

  };
  var translationsTH = {
    "TITLE":	"ข่าววันสกอร์",
    "SPORTS_NEWS":	"ข่าวกีฬา",
    "RECOMMEND":	"แนะนำ",
    "ONLOADING":	"กำลังโหลด...",
    "DATA_NODATA":"ไม่มีข้อมูล",
}
  var translationsVI = {
    "TITLE":	 "Tin tức Tỷ Số Nhất",
    "SPORTS_NEWS":	"tin tức thể thao",
    "RECOMMEND":"Đề nghị",
    "ONLOADING":	"Đang cố cập nhật nhanh...",
    "DATA_NODATA":"không có dữ liệu",
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


//首页服务
news.factory("indexService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl + "/core/info.findNewH5IndexInfo.do", {}, {
        query: {
        method: "post",
        params: {},
        isArray: false
        }
    });
  }
]);

//首页服务工厂
news.factory("indexServiceFactory", [
  "indexService",
  function (indexService) {
    var obj = {};
    obj.loadIndexData = function ($scope,boolean) {

      var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
        indexService.get({lang: $scope.getLanguage(),timeZone:timezone}, function (data) {

          echo.init();  //初始化懒加载方法
          $scope.viewNum =6;  //当前可视区域为6个
          $scope.handleLoadIndexData(data,boolean);//处理首页数据

          $scope.infoShow=false;
      });
    };
    return obj;
  }
]);

//列表服务
news.factory("listService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl + "/core/info.findNewH5LstInfo.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//列表服务工厂
news.factory("listServiceFactory", [
  "listService",
  function (listService) {
    var obj = {};
    obj.loadListData = function ($scope,pageIndex,infoType) {

        var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
        listService.get({lang: $scope.getLanguage(),currentPage:pageIndex,infoType:infoType,timeZone:timezone}, function (data) {

          echo.init();  //初始化懒加载方法
          $scope.viewNum =6;  //当前可视区域为6个

          $scope.handleLoadListData(data);//处理列表数据

          $scope.infoShow=false;

      });

    };
    return obj;
  }
]);

//列表服务下拉分页工厂
news.factory('listPageServiceFactory',['$http','$q',function($http,$q){
  return{
    query:function($scope,lang,pageIndex,infoType){
      var defer=$q.defer();  //声明延后执行

      var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
      $http.get(baseUrl + "/core/info.findIosLstInfo.do",{params:{lang: lang,currentPage:pageIndex,infoType:infoType,timeZone:timezone}}).
        success(function(data,status,headers,config){
          defer.resolve(data);  //声明执行成功
        }).
        error(function(data,status,headers,config){
          defer.reject();      //声明执行失败
        });

      return defer.promise; //返回承诺，返回获取数据的API
    }
  }
}]);

//自定义指定首页广告图片渲染完毕
news.directive('adsImageRepeatFinish',['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function() {
          scope.$emit('ngadsImageRepeatFinished');
        });
      }
    }
  };
}]);

//自定义指定首页标题渲染完毕
news.directive('headTitleRepeatFinish',['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function() {
          scope.$emit('ngheadTitleRepeatFinished');
        });
      }
    }
  };
}]);

//自定义指定资讯列表渲染完毕
news.directive('infoRepeatFinish',['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function() {
          scope.$emit('nginfoRepeatFinished');
        });
      }
    }
  };
}]);

//资讯控制器
news.controller("newsController", [
  "$http",
  "$scope",
  "$document",
  '$window',
  '$timeout',
  '$interval',
  "indexServiceFactory",
  "listServiceFactory",
  "listPageServiceFactory",

  function ($http, $scope, $document, $window, $timeout, $interval, indexServiceFactory,listServiceFactory,listPageServiceFactory)
  {

    var ifIndex;

    //加载完执行该方法
    $scope.$on("$viewContentLoaded", function ($window) {

      $scope.infoShow=true;

      var infoType=$scope.getObjectFromSessionStorage("newsInfoType");

      $scope.infoType=infoType;

      ifIndex=$scope.getObjectFromSessionStorage("newsIfIndex");

      var timestamp=$scope.getObjectFromSessionStorage("newsTimestamp");

      if(timestamp==null||timestamp=="")
      {
        timestamp="-28800";
      }

      if(ifIndex=="false")
      {
        ifIndex=false;
      }else{
        ifIndex=true;
      }


      if(infoType==5)
      {
        $scope.infoTypeStutas=false;
      }else if(infoType==13)
      {
        $scope.infoTypeStutas=false;
      }else
      {
        $scope.infoTypeStutas=true;
      }


      $scope.initData(timestamp,infoType,ifIndex);



    })

    //下面是在image table render完成后执行的js
    $scope.$on('ngadsImageRepeatFinished', function (ngRepeatFinishedEvent) {
      //首页轮播图
      $(function(){
        //var mySwiper1 = new Swiper('#header',{
        //  freeMode : true,
        //  slidesPerView : 'auto',
        //});
        var mySwiper = new Swiper('#banner',{
          autoplay:5000,
          visibilityFullFit : true,
          loop:true,
          pagination : '.pagination',
        });
      });

    });

    //下面是在title table render完成后执行的js
    $scope.$on('ngheadTitleRepeatFinished', function (ngRepeatFinishedEvent) {

      var index=$scope.getObjectFromSessionStorage("newsIndex");

      if(index==null||index=="")
      {
        index=0;
      }

      $(".newsNav ul li").eq(index).addClass("active").siblings().removeClass("active");

      var offsets=0;

      for(var i=0;i<index;i++){
        offsets += $(".newsNav ul li").eq(i).innerWidth();
      }

      offsets=offsets-$(".newsNav ul li").width();
      $(".newsNav").scrollLeft(offsets);


    });


    //导航栏点击事件
    $scope.liClick = function ($event) {

      $scope.infoShow=true;

      $scope.infos=null;

      var index = $(".newsNav ul li").index($event.currentTarget);

      $(".newsNav ul li").eq(index).addClass("active").siblings().removeClass("active");
      //每次进入的时候，滚动到顶部.
      $(document).scrollTop(0);

      var infoType=$(".newsNav ul li a").eq(index).attr("id");

      var timestamp=new Date().getTime();

      $scope.putObjectToSessionStorage("newsTimestamp",timestamp);

      $scope.infoType=infoType;

      $scope.putObjectToSessionStorage("newsInfoType",infoType);

      $scope.putObjectToSessionStorage("newsIndex",index);

      var headTitles=JSON.parse(sessionStorage.getItem("newsHeadTitles"));

      if(infoType==headTitles[0].infoType)
      {
        ifIndex=true;
      }else
      {
        ifIndex=false;
      }

      $scope.putObjectToSessionStorage("newsIfIndex",ifIndex);


      if(infoType==5)
      {
        $scope.infoTypeStutas=false;
      }else if(infoType==13)
      {
        $scope.infoTypeStutas=false;
      }else
      {
        $scope.infoTypeStutas=true;
      }

      $scope.initData(timestamp,infoType,ifIndex);



    }

    //加载首页或列表初始数据
    $scope.initData = function (timestamp,infoType,boolean) {

      if (boolean) {//首页数据
        $scope.loadIndexData(boolean);
      } else{//列表数据
        $scope.loadListData(infoType);
        $scope.loadListPage(timestamp,infoType);
      }

    }
    //加载首页数据
    $scope.loadIndexData = function (boolean) {

      indexServiceFactory.loadIndexData($scope,boolean);

    }
    //加载列表数据
    $scope.loadListData = function (infoType) {

      var pageIndex=1;

      listServiceFactory.loadListData($scope,pageIndex,infoType);

    }

    //下拉分页
    $scope.loadListPage=function(timestamp,infoType){

      $scope.loadingShow = false;
      //初始页码
      var pageIndex=2;
      //滚动事件判断
      var isScrolling = false;
      //下面是在info table render完成后执行的js
      $scope.$on('nginfoRepeatFinished', function (ngRepeatFinishedEvent) {

        if ($scope.infos.length >= 8) {
          $scope.loadingShow = true;
        }

        //屏幕触动，下拉加载更多
        $(window).scroll(function () {

          if ($(document).scrollTop() >= $(document).height() - $(window).height() - 100) {

            //判断是否正在滚动加载
            if (isScrolling) return;
            //将状态改为正在滚动，防止同时触发多次滚动事件
            isScrolling = true;

            var isnull = false;

            var i=$scope.getObjectFromSessionStorage("newsTimestamp");

            var lang=$scope.getLanguage();

            setTimeout(function () {

              if (!isnull&& i==timestamp) {
                var promise = listPageServiceFactory.query($scope,lang,pageIndex, infoType);  //同步调用，获取承诺接口

                promise.then(function (data) {

                  if (data.infos.length == 0) {
                    isnull = true;
                    $scope.loadingShow=false;
                    console.log('loading data is null');
                  } else {
                    //列表数据
                    var items = $scope.handleInfos(data.infos);
                    for (var i = 0; i < items.length; i++) {
                      $scope.infos.push(items[i]);
                    }
                    console.log('loading data success pageindex:' + pageIndex);
                    isScrolling = false;
                    pageIndex++;
                  }


                }, function (data) {
                });

              }

            }, 1000);

          }

        });


      });

    }


    //处理首页数据
    $scope.handleLoadIndexData = function (data,boolean) {

      //if(boolean)
      //{
        var headTitles=data.infoIndex.headTitles;//导航栏
        $scope.headTitles =headTitles;
        $scope.putObjectToSessionStorage("newsHeadTitles",JSON.stringify(headTitles));
      //}
      $scope.adsShow=true;//图片轮播是否显示
      $scope.ads = data.infoIndex.ads;//图片轮播
      $scope.infos = $scope.handleInfos(data.infoIndex.infos);  //首页数据

      //是否有下拉效果
      $scope.loadingShow = false;



    }
    //处理列表数据
    $scope.handleLoadListData=function(data){
      var headTitles=JSON.parse($scope.getObjectFromSessionStorage("newsHeadTitles"));
      $scope.headTitles =headTitles;
      $scope.infos =  $scope.handleInfos(data.infos);    //列表数据

      if( $scope.infos.length==0)
      {
        $scope.infos=null;
      }

      $scope.adsShow=false;//图片轮播是否显示
    }

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

    //处理资讯返回时间
    $scope.handleInfos=function(infos) {
      for (var i = 0; i < infos.length; i++)
      {
        // infos[i].lastModifyDate=infos[i].lastModifyDate.substring(5,infos[i].lastModifyDate.length);
        var myDate = new Date(infos[i].lastModifyDate);
        if($scope.getCountry()=='c-zh'||$scope.getCountry()=='c-zh-tw'){
            infos[i].lastModifyDateTime=myDate.Format('MM-dd')+"  "+infos[i].lastModifyTime;
        }else{
          infos[i].lastModifyDateTime=infos[i].lastModifyTime+"  "+myDate.Format('dd/MM');
        }
      }

      return infos;
    }

    //资讯点击事件
    $scope.infoClick= function ($event) {

      var index = $(".new_bd ul li").index($event.currentTarget);
      var infoId=$(".new_bd ul li").eq(index).find("a").attr("id");

      var infoType=$scope.infoType;
      var headTitles=JSON.parse(sessionStorage.getItem("newsHeadTitles"));

      if(infoType==null)
      {
        infoType=headTitles[0].infoType;
      }

      $scope.putObjectToSessionStorage("newsInfoId",infoId);

      var newsHistoryIds=$scope.getObjectFromSessionStorage("newsHistoryIds"+infoType);

      var newsHistoryIdsArr = [];
      if (newsHistoryIds == null) {
        newsHistoryIdsArr.push(infoId);
        $scope.putObjectToSessionStorage("newsHistoryIds"+infoType, infoId + ",");

      } else {
        newsHistoryIdsArr = newsHistoryIds.split(",");
        if (newsHistoryIdsArr.indexOf(infoId) == -1) {

          if (newsHistoryIdsArr.length < 30) {

            $scope.putObjectToSessionStorage("newsHistoryIds"+infoType, newsHistoryIds + infoId + ",");

          } else {

            newsHistoryIds=newsHistoryIds.replace(newsHistoryIdsArr[0]+",","");
            $scope.putObjectToSessionStorage("newsHistoryIds"+infoType, newsHistoryIds + infoId + ",");

          }
        }
      }

    }

    //视频点击事件
    $scope.videoPlayerClick = function ($event) {
      var videourl = $event.currentTarget.attributes.videourl.value;
      $(".video").attr("src",videourl);
      $('.video_player').show();
      $('.video').trigger('play');
    }
    //视频取消事件
    $scope.videoCancelClick = function () {
      $('.video').trigger('pause');
      $('.video_player').hide();
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
      var language = $scope.getObjectFromLocalStorage("language");
      var country=$scope.getObjectFromLocalStorage("country");
      country=country?country:defaultCountry; //国家信息
      if(country == 'c-zh'||country == 'c-zh-tw'){ //中国大陆、中国香港
        if (language == null||language=="th"||language=="vi"||language=="en") {
          language = defaultLanguageKey;
        }
      }else{
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

  }
]);

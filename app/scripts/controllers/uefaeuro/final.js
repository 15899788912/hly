/**
 * Created by john on 2016/6/2.
 */

var final = angular.module("live1.final");

/*语言选择*/
final.config(["$translateProvider", function ($translateProvider) {

  //var translationsEn = {
  //}
  //
  //var translationsZH_HANS = {
  //}

  var translationsZH = {
    "TITLE": "2016法国欧洲杯",
    "NO_DAY": "第",
    "DAY":"天",
    "NO_FIELD":"第",
    "FIELD":"场",
    "RECOMMEND":"推荐",
    "EIGHT_FINALS":"1/8决赛",
    "FOUR_FINALS":"1/4决赛",
    "HALF_FINALS":"半决赛",
    "FINALS":"决赛",
    "OPEN":"展开",
    "CLOSE":"收起",
    "WIN_ODDS":"夺冠赔率",
    "RANKING":"名次",
    "RANK":"排名",
    "TEAM":"球队",
    "ODDS":"赔率",
    "OLD_RANK":"上届排名",
    "FOOTER_CLIENT_DOWN": "客户端下载",
    "FOOTER_PC_VISIT": "访问电脑版",
  }

  var translationsTH　= {
    "TITLE": "ฝรั่งเศส ยุโร2016",
    "NO_DAY": "วันที่",
    "DAY":"",
    "NO_FIELD":"ฟิลด์ที่ ",
    "FIELD":"",
    "RECOMMEND":"แนะนำ",
    "EIGHT_FINALS":"รอบชิงชนะเลิศ(8ทีม)",
    "FOUR_FINALS":"รอบชิงชนะเลิศ(4ทีม)",
    "HALF_FINALS":"รอบรองชนะเลิศ",
    "FINALS":"รอบชิงชนะเลิศ",
    "OPEN":"เปิด",
    "CLOSE":"เก็บ",
    "WIN_ODDS":"อัตราต่อรองชิงแชมป์",
    "RANKING":"อันดับ",
    "RANK":"อันดับ",
    "TEAM":"ทีม",
    "ODDS":"อัตราต่อรอง",
    "OLD_RANK":"อันดับก่อนหน้านี้",
    "FOOTER_CLIENT_DOWN": "ดาวน์โหลดAPP",
    "FOOTER_PC_VISIT": "เวอร์ชั่น PC",
  }

  var translationsVI = {
    "TITLE": "2016 Cúp châu Âu Pháp",
    "NO_DAY": "ngày",
    "DAY":"",
    "NO_FIELD":"trận thứ ",
    "FIELD":"",
    "RECOMMEND":"sự giới thiệu",
    "EIGHT_FINALS":"Vòng 1/8",
    "FOUR_FINALS":"Tứ Kết",
    "HALF_FINALS":"Bán Kết",
    "FINALS":"Chung Kết",
    "OPEN":"Mở",
    "CLOSE":"Đóng",
    "WIN_ODDS":"biểu tỷ lệ thắng thứ 1",
    "RANKING":"xếp hạng",
    "RANK":"xếp hạng",
    "TEAM":"đội bóng",
    "ODDS":"tỷ lệ",
    "OLD_RANK":"xếp hạng vòng trước",
    "FOOTER_CLIENT_DOWN":"Download APP",
    "FOOTER_PC_VISIT": "truy cập phiên bản máy tính",
  }

  $translateProvider.translations('zh', translationsZH);
  //$translateProvider.translations('zh-TW', translationsZH_HANS);
  //$translateProvider.translations('en',translationsEn);
  $translateProvider.translations('th',translationsTH);
  $translateProvider.translations('vi',translationsVI);
  $translateProvider.registerAvailableLanguageKeys(['zh', 'zh-TW','en','th','vi'], {
    'zh_CN': 'zh',
    //'zh_TW': 'zh-TW',
    //'zh_HK': 'zh-TW',
    //'en_US': 'en',
    'th' : 'th',
    'vi' : 'vi'
  });

  $translateProvider.useSanitizeValueStrategy(null);
  // try to find out preferred language by yourself
  //$translateProvider.determinePreferredLanguage();
  /*大陆版使用start*/
  if(!isInternational){
    var setLang=mobileUtil.getSearch()['lan'];
    if(setLang){localStorage.setItem("language",setLang);}
  }
  /*大陆版使用end*/
  var language = window.localStorage.getItem("language");
  if (language == null) {
    language = defaultLanguageKey;
  }

  $translateProvider.preferredLanguage(language);

}]);

//欧洲杯控制器
final.controller("finalController", [
  "$http",
  "$scope",
  "$translate",
  "groupServiceFactory",
  "updLikeServiceFactory",
  "matchInfoServiceFactory",
  "oddAndIntegralServiceFactory",
  function ($http, $scope, $translate,groupServiceFactory,updLikeServiceFactory,matchInfoServiceFactory,oddAndIntegralServiceFactory) {

    $scope.$watch("$viewContentLoaded", function () {

      //是否是安卓显示下载
      var invalid=GetQueryString("download");
      var android=GetQueryString("android"); //资讯是否需要嵌套

      if(invalid==1)
      {
        $scope.invalid=true;
      }

      if(android==1)
      {
        $scope.android=true;
      }




      $scope.language = $scope.getLanguage();

      $scope.initTimeCountry();//初始化时区、国家

      $scope.loadGroupData();

      $scope.loadDayData();

      var field=sessionStorage.getItem("field");

      if(field==null)
      {
        var field="";
      }

      $scope.loadMatchInfoData(field,true);

      $scope.LoadOddAndIntegralData();

    });

    //初始化天数
    $scope.loadDayData = function () {

      var uefaeuroStartTime="2016/06/10 12:00:00";//欧洲杯开赛时间  东八区北京时间

      var offset= 8 ;//固定按东八区北京时间计算天数

      var nowTime=calcTime(offset);

      var day=DateDiff(uefaeuroStartTime,nowTime);

      $scope.day_ten=hex(day).ten;

      $scope.day_one=hex(day).one;

    };


    $scope.loadGroupData = function() {

      groupServiceFactory.loadGroupData($scope);

    }

    $scope.loadMatchInfoData = function(field,boolean){
      matchInfoServiceFactory.loadMatchInfoData($scope,field,boolean);
    }

    $scope.LoadOddAndIntegralData = function() {
      oddAndIntegralServiceFactory.loadOddAndIntegralData($scope);
    }


    var updLike_Click_invalid=true;//点赞一次后失效参数

    //点赞按钮
    $scope.updLike_Click=function(like){

      if(updLike_Click_invalid)
      {
        var homeAdd,guestAdd;

        var thirdId=$("#thirdId").text();

        if(thirdId!="")
        {

          if(like=="homeLike")
          {
            homeAdd=1;
            guestAdd=0;

            $scope.updLikes_home=$scope.updLikes_home+1;

          }else if(like=="guestLike")
          {
            guestAdd=1;
            homeAdd=0;

            $scope.updLikes_guest=$scope.updLikes_guest+1;

          }else{
            guestAdd=0;
            homeAdd=0;
          }

          updLike_Click_invalid=false;

          updLikeServiceFactory.loadUpdLikeData($scope,thirdId,homeAdd,guestAdd);
        }

      }

    };



    //处理语言
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


    $scope.initTimeCountry=function(){
      //时区
      var timezone = localStorage.getItem("timezone");
      if (timezone == null) {
        /*var date=new Date();
         var tz=-(date.getTimezoneOffset()/60);*/
        timezone = defaultTimeZoneKey;
        // localStorage.setItem("timezone",defaultTimeZoneKey);
      }
      $scope.timezone= timezone;
      //国家
      var country = localStorage.getItem("country");
      if (country == null) {
        country = defaultCountry;
      }
      $scope.country =country;
    }

    //处理点赞结果
    $scope.handupdLikeData=function(data){


      if(data.result=="200")//点赞成功
      {
        GetPercent(data.homeLike,data.guestLike);
      }

    }

    //处理场次数据
    $scope.handleLoadMatchInfoData=function(data,field,boolean){

      $scope.news=data.infos;

      $scope.matchList=data.matchList;

      if(data.matchList!=null)
      {
        if(data.matchList.matchTime!=null)
        {
        var matchTime=data.matchList.matchTime;
        $scope.matchTime=matchTime.substr(5,matchTime.length);
        }else{
          $scope.matchTime=null;
        }
      }else{

        $scope.matchTime=null;
      }

      if(data.matchList!=null)
      {
        if(data.matchList.remark!=null)
        {
          $scope.remark=data.matchList.remark;;
        }else{
          $scope.remark=null;
        }
      }else{

        $scope.remark=null;
      }

      $scope.updLikes=data.updLikes;

      //处理点赞百分比
      if(data.updLikes!=null)
      {
        $scope.updLikes_home=data.updLikes.home;
        $scope.updLikes_guest=data.updLikes.guest;
        GetPercent(data.updLikes.home,data.updLikes.guest);
      }else{
        $scope.updLikes_home=0;
        $scope.updLikes_guest=0;
        $("#redline").width("50%");
        $("#whiteline").width("51%");
      }

      //$scope.field=data.field;
      // 默认选择的场次
      if(field=="")
      {
        var offsets=((parseInt(data.currentField))/($(".list ").width()/$(".list a").width()))*$(".list ").width()-$(".list a").width();

        $(".tab-scroll").scrollLeft(offsets);

        $(".list a").eq(data.currentField-1).addClass("active").siblings().removeClass("active");

        //默认比分
        if(data.matchList.status==0)
        {
          $scope.homeScore="";
          $scope.guestScore="";
        }else{
          $scope.homeScore=data.matchList.homeScore;
          $scope.guestScore=data.matchList.guestScore;
        }


      }else{

        if(boolean)
        {
          var offsets=(parseInt(field)/($(".list ").width()/$(".list a").width()))*$(".list ").width()-$(".list a").width();

          $(".tab-scroll").scrollLeft(offsets);
        }

        $(".list a").eq(field-1).addClass("active").siblings().removeClass("active");

        //没开赛的比分不显示出来
        if(data.result==200)
        {
          if(data.matchList==null)
          {
            $scope.homeScore="";
            $scope.guestScore="";
          }else if(data.matchList.status==0)
          {
            $scope.homeScore="";
            $scope.guestScore="";
          }else{
            $scope.homeScore=data.matchList.homeScore;
            $scope.guestScore=data.matchList.guestScore;
          }

        }else{
          $scope.homeScore="";
          $scope.guestScore="";
        }


      }


    }


    //处理赔率与积分数据
    $scope.handleLoadOddAndIntegralData=function(data){

      $scope.oddLists=data.oddList;

      $scope.eighth= $scope.Trick(data.finalList["8/1"]);

      $scope.fourth= $scope.Trick(data.finalList["4/1"]);

      $scope.second= $scope.Trick(data.finalList["2/1"]);

      $scope.final = $scope.Trick(data.finalList["final"]);


    }

    //处理淘汰数据
    $scope.Trick = function(finalList) {

      if(finalList == null) {
        return null;
      }

      for(var i = 0 ; i < finalList.length; i++) {

        if(finalList[i].failFlag==1)
        {
          finalList[i].homeTeamStatus=false;
          finalList[i].guestTeamStatus=true;
        }else if(finalList[i].failFlag==2)
        {
          finalList[i].homeTeamStatus=true;
          finalList[i].guestTeamStatus=false;
        }else{
          finalList[i].homeTeamStatus=true;
          finalList[i].guestTeamStatus=true;
        }

      }
      return finalList;
    }



    //点击场次按钮
    $scope.list_a_Click = function ($event) {

      //点赞可以再点
      updLike_Click_invalid=true;

      var  listIndex= $(".list a").index($event.currentTarget);

      $scope.loadMatchInfoData(listIndex+1,false);

      sessionStorage.setItem("field",listIndex+1);

    };


    //点击左边按钮
    $scope.tab_left_Click = function ($event) {

      var widths= $(".tab-scroll").scrollLeft();
      var offsets=$(".list a").width()*4;
      $(".tab-scroll").scrollLeft(widths-offsets);

    };


    //点击右边按钮
    $scope.tab_right_Click = function ($event) {

      var widths= $(".tab-scroll").scrollLeft();
      var offsets=$(".list a").width()*4;
      $(".tab-scroll").scrollLeft(widths+offsets);

    };

    $('html').css({'fontSize':'inherit'});



    //点击展开收起
    $('#panelEighth').hide(); //1/8决赛隐藏

    $('.panelFourth').hide(); //1/4决赛隐藏

    $("#drop_close_eighth").hide();
    $("#drop_close_fourth").hide();

    $("#drop_control_eighth").click(function () {

      $("#panelEighth").slideToggle("slow");

      if($("#drop_close_eighth").is(":hidden")){
        $("#drop_open_eighth").hide();
        $("#drop_close_eighth").show();    //如果元素为隐藏,则将它显现

      }else{
        $("#drop_open_eighth").show();
        $("#drop_close_eighth").hide();     //如果元素为显现,则将其隐藏
      }

    });

    $("#drop_control_fourth").click(function () {

      $(".panelFourth").slideToggle("slow");

      if($("#drop_close_fourth").is(":hidden")){
        $("#drop_open_fourth").hide();
        $("#drop_close_fourth").show();    //如果元素为隐藏,则将它显现

      }else{
        $("#drop_open_fourth").show();
        $("#drop_close_fourth").hide();     //如果元素为显现,则将其隐藏
      }

    });




  }]);


//国际化服务
final.factory("groupServiceFactory",
  function () {

    var obj = {};

    var pic_vi = {"btnUrl" : "../images/uefaeuro/vi/btn.png","bgUrl" : "../images/uefaeuro/vi/logo.png", "operation" : "#/"};

    var pic_th = {"btnUrl" : "../images/uefaeuro/th/btn.png","bgUrl" : "../images/uefaeuro/th/logo.png", "operation" : "#/"};

    //var pic_en = {"btnUrl" : "../images/uefaeuro/en/btn.png","bgUrl" : "../images/uefaeuro/en/logo.png", "operation" : "#/"};

    var pic_zh = {"btnUrl" : "../images/uefaeuro/zh/btn.png","bgUrl" : "../images/uefaeuro/zh/logo.png", "operation" : "#/"};

    //var pic_zh_TW = {"btnUrl" : "../images/uefaeuro/zh_TW/btn.png","bgUrl" : "../images/uefaeuro/zh_TW/logo.png", "operation" : "#/"};


    obj.loadGroupData = function ($scope) {

      if($scope.language == 'zh') {
        $scope.headbg = pic_zh;
      } else if($scope.language == 'zh-TW') {
        //$scope.headbg = pic_zh_TW;
      } else if($scope.language == 'vi') {
        $scope.headbg = pic_vi;
      } else if($scope.language == 'th') {
        $scope.headbg = pic_th;
      } else if ($scope.language == 'en') {
        //$scope.headbg = pic_en;
      }


    }
    return obj;
  }
);

//点赞服务
final.factory("updLikeService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl + "/core/footBallMatch.updLike.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//点赞服务工厂
final.factory("updLikeServiceFactory", [
  "updLikeService",
  function (updLikeService) {

    var obj = {};

    obj.loadUpdLikeData = function ($scope,thirdId,homeAdd,guestAdd) {

      updLikeService.get({thirdId: thirdId,homeAdd:homeAdd,guestAdd:guestAdd}, function (data) {

        $scope.handupdLikeData(data);//处理点赞结果数据

      });

    };
    return obj;
  }
]);



//场次服务
final.factory("matchInfoService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl + "/core/operation.findEuropeanNewMatchInfo.do", {}, {
    //return $resource(baseUrl +"/core/operation.findEuropeanMatchInfo.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//场次服务工厂
final.factory("matchInfoServiceFactory", [
  "matchInfoService",
  function (matchInfoService) {

    var obj = {};

    obj.loadMatchInfoData = function ($scope,field,boolean) {

      var timezone = window.localStorage.getItem("timezone") || $scope.timezone;

      matchInfoService.get({lang: $scope.getLanguage(),field:field,timeZone:timezone,flag:1}, function (data) {

        $scope.handleLoadMatchInfoData(data,field,boolean);//处理场次数据

      });

    };
    return obj;
  }
]);




//决赛与赔率服务
final.factory("oddAndIntegralService", [
  "$resource",
  function ($resource) {
    return $resource(baseUrl + "/core/operation.findEuropeanAfterFinal.do", {}, {
    //return $resource(baseUrl +"/core/operation.findEuropeanAfterFinal.do", {}, {
      query: {
        method: "post",
        params: {},
        isArray: false
      }
    });
  }
]);

//决赛与赔率服务工厂
final.factory("oddAndIntegralServiceFactory", [
  "oddAndIntegralService",
  function (oddAndIntegralService) {

    var obj = {};

    obj.loadOddAndIntegralData = function ($scope) {

      oddAndIntegralService.get({lang: $scope.getLanguage()}, function (data) {

        $scope.handleLoadOddAndIntegralData(data);//处理积分与赔率数据

      });

    };
    return obj;
  }
]);



//计算天数差的函数
function  DateDiff(sDate1,  sDate2){    //sDate1和sDate2是2006-12-18格式
  var  oDate1,  oDate2,  iDays;

  oDate1  =  new  Date(sDate1);
  oDate2  =  new  Date(sDate2);

  iDays  =  parseInt( (oDate2  -  oDate1) /  1000  /  60  /  60  /24) ;  //把相差的毫秒数转换为天数

  if((oDate2-oDate1)<=0)
  {
    iDays= 0 ;
  }else
  {
    iDays=iDays+1;
  }
  return  iDays;
}

//固定按东八区的北京时间产生当前时间
function calcTime(offset) {
  var d = new Date();
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = new Date(utc + (3600000*offset));
  return  nd.getFullYear()+'/'+(nd.getMonth()+1)+'/'+nd.getDate()+" "+ nd.getHours()+":"
    + nd.getMinutes()
    +":"  +nd.getSeconds();

}


//获取数字的个位和十位
function hex(num){
  var len = num.toString().length;
  if (len < 2) {
    num = "0" + num;
  }
  var a = num.toString().substr(1, 1);  //个位
  var b = num.toString().substr(0, 1); //十位数
  return {"ten": b, "one": a};
}

//获取点赞数字的百分比
function GetPercent(num1, num2) {

  var total=num1+num2;
  var num1 = parseFloat(num1);
  total = parseFloat(total);
  if (isNaN(num1) || isNaN(total)) {
    return "-";
  }

  var redline=total <= 0 ? "0%" : (Math.round(num1 / total * 10000) / 100.00 + "%");
  var whiteline=total <= 0 ? "0%" : (Math.round(num1 / total * 10000) / 100.00+1 + "%");

  $("#redline").width(redline);
  $("#whiteline").width(whiteline);
}

//采用正则表达式获取地址栏参数
function GetQueryString(name)
{
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}




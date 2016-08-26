/**
 * Created by lenovoa on 2015/12/9.
 */
'use strict';
var livetv = angular.module("live1.livetv");

livetv.directive("stickyFloat", [
    '$window',
    '$timeout',
    function ($window, $timeout) {
        return {
            link: function (scope, elem, attrs) {
                $window = angular.element($window);
                var handler = function () {
                    var options = {'duration': 0};
                    var obj = angular.element(elem);
                    var $obj = $(obj);
                    var parentPaddingTop = parseInt($obj.parent().css('padding-top'));
                    var startOffset = $obj.parent().offset().top;
                    var opts = $.extend({
                        startOffset: startOffset,
                        offsetY: parentPaddingTop,
                        duration: 0,
                        lockBottom: true
                    }, options);
                    $obj.css({position: 'absolute'});
                    var bottomPos;
                    if (opts.lockBottom) {
                        bottomPos = $obj.parent().height() - $obj.height() + parentPaddingTop;
                        if (bottomPos < 0) {
                            bottomPos = 0;
                        }
                    }
                    $obj.stop();
                    var pastStartOffset = $(document).scrollTop() > (opts.startOffset - 50);
                    var objFartherThanTopPos = $obj.offset().top > startOffset;
                    var objBiggerThanWindow = $obj.outerHeight() < $($window).height();

                    if ((pastStartOffset || objFartherThanTopPos) && objBiggerThanWindow) {
                        var newpos = ($(document).scrollTop() - startOffset + opts.offsetY + 50 + 'px');
                        if (newpos > bottomPos) {
                            newpos = bottomPos;
                        }
                        if ($(document).scrollTop() < (opts.startOffset - 50)) {
                            newpos = parentPaddingTop;
                        }
                        $obj.animate({top: newpos}, opts.duration);
                    }
                };
                $window.on('scroll', handler);
                scope.$on('$destroy', function () {
                    return $window.off('scroll', handler);
                });
                return $timeout((function () {
                    return handler();
                }), 0);
            }
        };
    }
]);

//i18n
livetv.config(['$translateProvider', function ($translateProvider) {
    var translationsEN = {
      "HEAD_TITLE":	"One Score Touchscreen Version",
      "LIVETV_TITLE":	"Live Video",
      "SUNDAY":	"Sunday",
      "MONDAY":	"Monday",
      "TUESDAY":	"Tuesday",
      "WEDNESDAY":	"Wednesday",
      "THURSDAY":	"Thursday",
      "FRIDAY":	"Friday",
      "SATURDAY":	"Saturday",
      "ERROR_DAY":	"System error, unable to read date!",
      "MATCH_ROUND":	"Round {{round}}",
      "TV_LIVING":	"On Live",
      "TV_LIVE":	"Live Video",
      "BUTTON_CANCEL":	"Cancel",
      "PLEASE_CHOOSE_LIVE_CHANNEL":	"Please select live channel",
      "ONLOADING":	"Loading hard...",
      "NO_DATA":	"Update more matches later",
      "NO_LIVE_CHANNEL":	"No live channel"
    }
    var translationsZH = {
        "HEAD_TITLE": "足球直播吧_足球视频直播平台-一比分",
        "LIVETV_KEYWORDS": "足球直播,直播吧",
        "LIVETV_DESCRIPTION": "一比分足球视频直播频道，提供足球直播，英超直播等国内外重大足球赛事的现场直播，最全的足球直播平台，我们努力做最好的足球直播吧。",
        "LIVETV_TITLE": "视频直播",
        "SUNDAY": "周日",
        "MONDAY": "周一",
        "TUESDAY": "周二",
        "WEDNESDAY": "周三",
        "THURSDAY": "周四",
        "FRIDAY": "周五",
        "SATURDAY": "周六",
        "ERROR_DAY": "系统错误，无法读取日期!",
        "MATCH_ROUND": "第{{round}}轮",
        "TV_LIVING": "视频直播中",
        "TV_LIVE": "视频直播",
        "BUTTON_CANCEL": "取消",
        "PLEASE_CHOOSE_LIVE_CHANNEL": "请选择直播频道",
        "ONLOADING": "拼命加载中...",
        "NO_DATA": "稍后更新更多比赛",
        "NO_LIVE_CHANNEL": "暂无直播频道"
    };
    var translationsZH_HANS = {
        "HEAD_TITLE": "足球直播吧_足球視頻直播平台-一比分",
        "LIVETV_KEYWORDS": "足球直播,直播吧",
        "LIVETV_DESCRIPTION": "一比分足球視頻直播頻道，提供足球直播，英超直播等國內外重大足球賽事的現場直播，最全的足球直播平台，我們努力做最好的足球直播吧。",
        "LIVETV_TITLE": "視頻直播",
        "SUNDAY": "週日",
        "MONDAY": "週一",
        "TUESDAY": "週二",
        "WEDNESDAY": "週三",
        "THURSDAY": "週四",
        "FRIDAY": "週五",
        "SATURDAY": "週六",
        "ERROR_DAY": "系統錯誤，無法讀取日期!",
        "MATCH_ROUND": "第{{round}}輪",
        "TV_LIVING": "視頻直播中",
        "TV_LIVE": "視頻直播",
        "BUTTON_CANCEL": "取消",
        "PLEASE_CHOOSE_LIVE_CHANNEL": "請選擇直播頻道",
        "ONLOADING": "拼命加載中...",
        "NO_DATA": "稍後更新更多比賽",
        "NO_LIVE_CHANNEL": "暫無直播頻道"
    };

    var translationsVI = {
      "HEAD_TITLE":	 "Tỷ Số Nhất bản màn hình cảm ứng",
      "LIVETV_TITLE":	"trực tuyến",
      "SUNDAY":	  "Chủ nhật",
      "MONDAY":	  "Thứ hai",
      "TUESDAY":	  "Thứ ba",
      "WEDNESDAY":	  "Thứ tư",
      "THURSDAY":	  "Thứ năm",
      "FRIDAY":	  "Thứ sáu",
      "SATURDAY":	  "Thứ bảy",
      "ERROR_DAY":	"Lỗi hệ thống, không có thể đọc ngày !",
      "MATCH_ROUND":	"vòng thứ {{round}}",
      "TV_LIVING":"	LIVE",
      "TV_LIVE":	"trực tuyến",
      "BUTTON_CANCEL":	"Hủy",
      "PLEASE_CHOOSE_LIVE_CHANNEL":"	Vui lòng chọn kênh ",
      "ONLOADING":"	Đang cố cập nhật...",
      "NO_DATA":	"Sẽ làm mới càng nhiều trận đấu",
      "NO_LIVE_CHANNEL":	"Tạm không có kênh trực tuyến"
    }
    var translationsTH = {
      "HEAD_TITLE":"วันสกอร์รุ่นหน้าจอสัมผัส ",
      "LIVETV_TITLE":"วิดีโอถ่ายทอดสด",
      "SUNDAY":"วันอาทิตย์",
      "MONDAY":"วันจันทร์",
      "TUESDAY":"วันอังคาร",
      "WEDNESDAY":"วันพุธ",
      "THURSDAY":"วันพฤหัสบดี",
      "FRIDAY":"วันศุกร์",
      "SATURDAY":"วันเสาร์",
      "ERROR_DAY":"เกิดข้อผิดพลาดในระบบ ไม่สามารถอ่านวันที่ได้",
      "MATCH_ROUND":"รอบที่{{round}}",
      "TV_LIVING":"วิดีโอกำลังถ่ายทอด",
      "TV_LIVE":"วิดีโอถ่ายทอดสด",
      "BUTTON_CANCEL":"ยกเลิก",
      "PLEASE_CHOOSE_LIVE_CHANNEL":"โปรดเลือกช่องถ่ายทอดสด",
      "ONLOADING":"กำลังโหลด...",
      "NO_DATA":"อัพเดทเกมเพิ่มใหม่เลื่อยๆ",
      "NO_LIVE_CHANNEL":"ยังไม่มีช่องถ่ายทอดสด"
    }
    $translateProvider.translations('zh', translationsZH);
    $translateProvider.translations('zh-TW', translationsZH_HANS);
    $translateProvider.translations('en',translationsEN);
  $translateProvider.translations('th',translationsTH);
  $translateProvider.translations('vi',translationsVI)
    $translateProvider.registerAvailableLanguageKeys(['zh', 'zh-TW','en','th','vi'], {
        'zh_CN': 'zh',
        'zh_TW': 'zh-TW',
        'zh_HK': 'zh-TW',
        'en_US' : 'en',
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

livetv.factory("LiveService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/matchVideo.findVideoInfo.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);

livetv.factory("LiveServiceFactory", [
    "LiveService",
    function (LiveService) {
        var obj = {};
        obj.loadLiveMatchData = function ($scope) {

            var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            LiveService.get({lang: $scope.getLanguage(),timeZone:timezone}, function (data) {
                $scope.isLoading = true;
                $scope.showLoadingImg = true;
                $scope.liveChannelMap = {};//所以赛事的直播频道map
                $scope.matchVideo = data.matchVideo;
                $scope.loadLiveMatchData(0);

                if ($scope.liveMatchDataes != null) {
                    for (var i = 1; i <= $scope.liveMatchDataes.length; i++) {
                        $scope.dateScroll('day-bg' + i);
                    }
                }
            }, function (error) {
                //错误，访问异常
            });
        };
        return obj;
    }
]);

livetv.factory("TranslateFactory", [
    "$translate",
    function ($translate) {
        var obj = {
            translate: function (key) {
                if (key) {
                    return $translate.instant(key);
                }
                return key;
            }
        };
        return obj;
    }
]);

livetv.controller("LiveTVController", [
    "$scope",
    "$translate",
    "$timeout",
    "$interval",
    "$window",
    "LiveServiceFactory",
    "TranslateFactory",
    function ($scope, $translate, $timeout, $interval, $window, LiveServiceFactory, TranslateFactory) {

        $scope.$on("$viewContentLoaded", function () {
            LiveServiceFactory.loadLiveMatchData($scope, $timeout);
            $interval(function () {
                $scope.reloadLiveMatchData();
            }, liveTVRefreshPeriod);
            angular.element($window).on('scroll', $scope.scrollHandler);
            $window.document.body.scrollTop = 0;
        });

        $scope.$on('$destroy', function () {
            return $window.off('scroll', $scope.scrollHandler);
        });

        $scope.dateScroll = function (id) {
            $timeout(function () {
                var h = $('#' + id).offset().top;
                $(window).scroll(function () {
                    if ($(window).scrollTop() + 50 > h) {
                        $('#' + id + '>.day_ct').addClass('pos-f');
                    }
                    else {
                        $('#' + id + '>.day_ct').removeClass('pos-f');
                    }
                });
            }, 0);
        };

        //加载直播数据
        $scope.loadLiveMatchData = function (scrollCount) {
            $scope.actualCount = 0;
            var total = 0;
            $scope.liveMatchDataes = [];
            var liveMatchData = null;
            var myDate = null;
            var endLoop = false;
            for (var date in $scope.matchVideo) {
                if (!endLoop) {
                    liveMatchData = {};
                    myDate = new Date(date);
                    liveMatchData.day = myDate.Format("MM月dd日");
                    liveMatchData.week = $scope.getWeek(myDate);
                    liveMatchData.liveMatches = [];
                    var liveMatch = null;
                    var timeStr = null;
                    for (var j in $scope.matchVideo[date]) {
                        liveMatch = $scope.matchVideo[date][j];
                        liveMatch.hometeamLogo = teamLogoUrl.replace("{teamId}", liveMatch.hmId);//主队logo图片地址
                        liveMatch.guestteamLogo = teamLogoUrl.replace("{teamId}", liveMatch.awId);//客队logo图片地址
                        timeStr = liveMatch.matchDate + " " + liveMatch.matchTime;
                        liveMatch.living = (liveMatch.statusOrigin == 1 || liveMatch.statusOrigin == 2 || liveMatch.statusOrigin == 3);//是否直播
                        liveMatch.defaultTeamLogo = defaultTeamLogoUrl;
                        $scope.liveChannelMap[liveMatch.matchId] = liveMatch.channel;
                        liveMatchData.liveMatches.push(liveMatch);
                        $scope.actualCount++;
                        if ($scope.actualCount >= liveMatchPageSize * (scrollCount + 1)) { //已达到当前最大展现场次时，退出循环
                            endLoop = true;//设置退出循环标志
                            break;
                        }
                    }
                    $scope.liveMatchDataes.push(liveMatchData);
                }
                total += $scope.matchVideo[date].length;
            }
            $scope.total = total;
            if (scrollCount == 0) {
                $scope.isLoading = false;
                $scope.showLoadingImg = false;
                if ($scope.liveMatchDataes.length == 0) {
                    $scope.showNoData = true;
                }
            }
        };

        //实现下拉加载更多效果
        var scrollCount = 0;
        var isScrolling = false;
        $scope.scrollHandler = function () {
            if ($scope.$$phase) {
                $scope.eval($scope.scroll());
            } else {
                $scope.$apply($scope.scroll());
            }
        };

        $scope.scroll = function () {
            var element = angular.element($("body"));
            if ($(document).scrollTop() >= $(document).height() - $($window).height() - 100) {
                //判断是否正在滚动加载
                if ($scope.isLoading || isScrolling) {
                    return;
                }
                //将状态改为正在滚动，防止同时触发多次滚动事件
                isScrolling = true;
                if ($scope.total > 0 && $scope.total > (scrollCount + 1) * liveMatchPageSize) {
                    $scope.showNoData = false;
                    $scope.showLoadingImg = true;
                } else {
                    $scope.showNoData = true;
                    $scope.showLoadingImg = false;
                    return;
                }
                $timeout(function () {
                    if ($scope.total > 0 && $scope.total > (scrollCount + 1) * liveMatchPageSize) {
                        scrollCount++;
                        $scope.loadLiveMatchData(scrollCount);
                    }
                    //将状态改为false，使新的滚动事件可以被触发
                    isScrolling = false;
                    $scope.showLoadingImg = false;
                    $scope.showNoData = false;
                }, 1000);
            }
        };

        var scrollTop = 0;
        //点击视频直播
        $scope.liveTVClick = function ($event) {
            scrollTop = $(document).scrollTop();
            var matchId = $event.currentTarget.attributes.matchId.value;
            var liveChannels = $scope.liveChannelMap[matchId];
            $scope.liveChannels = [];
            if (liveChannels != null) {
                var liveChannel = null;
                for (var i in liveChannels) {
                    liveChannel = liveChannels[i];
                    if ($scope.isValidLiveChannel(liveChannel)) {
                        $scope.liveChannels.push(liveChannel);
                    }
                }
            }
            angular.element($("#sort_mask")).addClass("show");
            angular.element($("#sort_mask2")).addClass("show");
            angular.element($("body")).addClass("of-h");
            angular.element($("html")).addClass("of-h");
            //$scope.disableTouchMove();
        };

        /**
         * 是否合法的直播频道
         * @param liveChannel
         * @returns {boolean}
         */
        $scope.isValidLiveChannel = function (liveChannel) {
            var flag = false;
            if (liveChannel != null) {
                if (liveChannel.name != null && liveChannel.name != '' &&
                    liveChannel.url != null && liveChannel.url != '' &&
                    /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/.test(liveChannel.url)) {
                    flag = true;
                }
            }
            return flag;
        };

        //打开视频直播页面
        $scope.openTVLive = function ($event) {
            var url = $event.currentTarget.attributes.url.value;
            $window.open(url);
        };

        //取消视频直播
        $scope.liveCancelClick = function ($event) {
            angular.element($("#sort_mask")).removeClass("show");
            angular.element($("#sort_mask2")).addClass("show");
            angular.element($("body")).removeClass("of-h");
            angular.element($("html")).removeClass("of-h");
            //$scope.enableTouchMove();
            $window.document.body.scrollTop = scrollTop;
        };

        //开启onTouchMove事件
        $scope.enableTouchMove = function() {
            document.ontouchmove=function(){
                return false;
            }
        };

        //禁止onTouchMove事件
        $scope.disableTouchMove = function() {
            document.ontouchmove=function(){
                return true;
            }
        };

        //刷新
        $scope.refreshClick = function () {
            $scope.reloadLiveMatchData();
        };

        $scope.reloadLiveMatchData = function () {
            //scrollCount = 0;
            //isScrolling = false;
            //$scope.showNoData = false;
            //$scope.showLoadingImg = false;
            //$window.document.body.scrollTop = 0;
            //LiveServiceFactory.loadLiveMatchData($scope, $timeout);
            window.location.reload();
        };

        //获取指定日期对应为周几
        $scope.getWeek = function (date) {
            var myxingqi = date.getDay();
            var text = "";
            switch (myxingqi) {
                case 0:
                    text = TranslateFactory.translate('SUNDAY');
                    break;
                case 1:
                    text = TranslateFactory.translate('MONDAY');
                    break;
                case 2:
                    text = TranslateFactory.translate('TUESDAY');
                    break;
                case 3:
                    text = TranslateFactory.translate('WEDNESDAY');
                    break;
                case 4:
                    text = TranslateFactory.translate('THURSDAY');
                    break;
                case 5:
                    text = TranslateFactory.translate('FRIDAY');
                    break;
                case 6:
                    text = TranslateFactory.translate('SATURDAY');
                    break;
                default:
                    text = TranslateFactory.translate('ERROR_DAY');
            }
            return text;
        };

        //localStorage相关操作方法

        //根据key从localStorage中获取对象
        $scope.getObjectFromLocalStorage = function (key) {
            return localStorage.getItem(key);
        };

        $scope.putObjectToLocalStorage = function (key, value) {
            localStorage.setItem(key, value);
        };

        $scope.removeObjectFromLocalStorage = function (key) {
            localStorage.removeItem(key);
        };

        $scope.getLanguage = function () {
            var language = $scope.getObjectFromLocalStorage("language");
            if (language == null) {
                language = defaultLanguageKey;
            }
            return language;
        };
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

/**
 * 球队logo加载失败时，使用默认logo
 * @param obj
 */
var logoLoadErr = function (obj) {
    obj.src = defaultTeamLogoUrl;
    obj.onerror = null;
};

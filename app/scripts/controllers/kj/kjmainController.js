/**
 * Created by john on 2015/9/24.
 */

var baseNext = 'nextAndNewLotteryResults.';

var lotterTimeKeys = {
    '1': 'lhcTime',
    '2': 'cqsscTime',
    //'3': 'jxsscTime',
    '4': 'xjsscTime',
    '5': 'ynsscTime',
    '6': 'qxcTime',
    '7': 'd11x5Time',
    '8': 'dkl10Time',
    //'9': 'hb11x5Time',
    '10': 'ahk3Time',
    '11': 'hnkl10Time',
    //'12': 'kl8Time',
    //'13': 'jlk3Time',
    //'14': 'ln11x5Time',
    '15': 'pk10Time',
    '16': 'jsk3Time',
    //'17': 'sslTime',
    '18': 'gxk3Time',
    '19': 'xyncTime',
    '20': 'js11x5Time',
    //'21': 'jx11x5Time',
    '22': 'sd11x5Time',
    '23': 'tjsscTime'
};
//暂时不需要显示的筛选彩种
//{'id': 'sslfil', 'name': 'CONSTANT_HAPPY'},
//{'id': 'lk8', 'name': 'BEIJING_HAPPY_EI'},
//{'id': 'hb115', 'name': 'HUBEI_ElevenChooseFive'},
//{'id': 'ln115', 'name': 'LIAONING_ElevenChooseFive'},
//{'id': 'jx115', 'name': 'JIANGXI_ElevenChooseFive'},
//{'id': 'jlk3fil', 'name': 'JILIN_HAPPY_THREE'},


var defaultList = [];

var undefault = [
    // {'id': 'jxssc', 'name': 'JIANGXI_CONSTANTCOLOR'},
    {'id': 'xjssc', 'name': 'XIJIANG_CONSTANTCOLOR'},
    {'id': 'cqsscfil', 'name': 'CHONGQING_CONSTANTCOLOR'},
    {'id': 'ynsscfile', 'name': 'YUNNAN_CONSTANTCOLOR'},
    {'id': 'bjscfil', 'name': 'BEIJING_CAR_RACING'},
    {'id': 'jsk3fil', 'name': 'JIANGSHU_FASTTHREE'},
    {'id': 'ahk3fil', 'name': 'ANHUI_FASTTHREE'},
    {'id': 'luckyfil', 'name': 'CHONGQING_LUCKY_FARM'},
    {'id': 'gd115', 'name': 'GUANGDONG_ElevenChooseFive'},
    {'id': 'js115', 'name': 'JIANGSHU_ElevenChooseFive'},
    {id: 'lhcfil', 'name': 'HONGKONG_LOTTERY'},
    {'id': 'qxcfil', 'name': 'SEVEN_COLOR'},
    {'id': 'sd115', 'name': 'SHANDONG_ElevenChooseFive'},
    {'id': 'kl10', 'name': 'GUANGDONG_HAPPY_TEN'},
    {'id': 'tjssc', 'name': 'TIANJIN_CONSTANTCOLOR'},
    {'id': 'hn10', 'name': 'HUNAN_HAPPY_TEN'},
    {'id': 'gxk3', 'name': 'GUANGXI_FASTTHREE'}];

var countDown = {};


kjMain.controller("KjMainController", [
    "$scope",
    "$interval", "$translate",
    "LastLotteryService",
    "DetailLotteryService",
    function ($scope, $interval, $translate, LastLotteryService, DetailLotteryService) {

        //try {
        //    localStorage.setItem('test', 'test');
        //} catch (e) {
        //    alert("您处于无痕浏览，无法为您保存");
        //}

        //var db = openDatabase("myDb", "1.0", "it's to save demo data!", 1024 * 1024);
        //if(!db) {
        //    alert(0)
        //}else{
        //    console.info(db)
        //}
        //return db;


        //入口函数
        $scope.$watch("$viewContentLoaded", function ($window) {
            $scope.initI18n();

        });

        $scope.initI18n = function () {
            $translate(['RAT', 'CATTLE', 'TIGER', 'RABBIT', 'DRAGON', 'SNAKE', 'HORSE', 'MONKEY', 'SHEEP', 'CHICKEN', 'DOG', 'PIG']).then(
                function (translations) {
                    $scope.twelveZodiac = new Object();
                    $scope.twelveZodiac['鼠'] = translations.RAT;
                    $scope.twelveZodiac['牛'] = translations.CATTLE;
                    $scope.twelveZodiac['虎'] = translations.TIGER;
                    $scope.twelveZodiac['兔'] = translations.RABBIT;
                    $scope.twelveZodiac['龙'] = translations.DRAGON;
                    $scope.twelveZodiac['蛇'] = translations.SNAKE;
                    $scope.twelveZodiac['马'] = translations.HORSE;
                    $scope.twelveZodiac['猴'] = translations.MONKEY;
                    $scope.twelveZodiac['羊'] = translations.SHEEP;
                    $scope.twelveZodiac['鸡'] = translations.CHICKEN;
                    $scope.twelveZodiac['狗'] = translations.DOG;
                    $scope.twelveZodiac['猪'] = translations.PIG;
                    $scope.twelveZodiac[''] = "";
                }
            );

        };

        $scope.showMain = new Object();

        if (localStorage.defaultList) {
            $scope.defaultList = JSON.parse(localStorage.defaultList);
        } else {
            $scope.defaultList = [];
        }
        //如果定没有,显示所有
        if ($scope.defaultList.length == 0) {
            for (var i = 0; i < undefault.length; i++) {
                $scope.showMain[undefault[i].id] = true;
            }
            //提示:用户没有定制彩种 显示
            $('#choice').show();
        } else {
            for (var i = 0; i < $scope.defaultList.length; i++) {
                $scope.showMain[$scope.defaultList[i].id] = true;
            }
            //提示:用户没有定制彩种 隐藏
            $('#choice').hide();
        }


        if (localStorage.undefault) {
            $scope.undefault = JSON.parse(localStorage.undefault);
        } else {
            $scope.undefault = undefault;
        }

        //是否显示正在加载中
        $scope.showLoading = true;
        //是否显示 六合彩和七星彩倒计时
        $scope.showLHCing = false;
        $scope.showQXCing = false;
        //是否显示 六合彩和七星彩开奖中
        $scope.showLHCingOpen = false;
        $scope.showQXCingOpen = false;


        //入口函数
      var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
      var lang = window.localStorage.getItem("language") || $scope.language;
        LastLotteryService.get({lang:lang,timeZone:timezone}, function (data) {

            var list = data.numLotteryResults;
            var serverTime = data.serverTime;

            for (var i = 0; i < list.length; i++) {
                if (list[i] == null) {
                    continue;
                }
                var name = list[i].name;
                var detail = new Object();
                detail['nextIssue'] = list[i].nextIssue;
                detail['nextTime'] = list[i].nextTime;
                detail['idNum'] = Number(name);
                detail['serverTime'] = serverTime;
                detail['downKey'] = lotterTimeKeys[name];
                detail['opening'] = false;

                $scope.updateLotter(list[i], detail);

            }

            //是否显示正在加载中
            $scope.showLoading = false;
        });

        $scope.updateLotter = function (lastLotter, detail) {

            //console.info(countDown)

            var name = String(detail['idNum']);
            var numbers = lastLotter.numbers;

            if (name === "1") {
                $scope.lhc = lastLotter;
                $scope.lhc.lhcMap = $scope.lhcLotteryTrick(numbers, lastLotter.zodiac);
            } else if (name === "2") {
                $scope.cqssc = lastLotter;
                $scope.cqssc.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "3") {
                $scope.jxssc = lastLotter;
                $scope.jxssc.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "4") {
                $scope.xjssc = lastLotter;
                $scope.xjssc.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "5") {
                $scope.ynssc = lastLotter;
                $scope.ynssc.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "6") {
                $scope.qxc = lastLotter;
                $scope.qxc.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "7") {
                $scope.d11x5 = lastLotter;
                $scope.d11x5.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "8") {
                $scope.dkl10 = lastLotter;
                $scope.dkl10.kl10Map = $scope.kl10LotteryTrick(numbers);
            } else if (name === "9") {
                $scope.hb11x5 = lastLotter;
                $scope.hb11x5.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "10") {
                $scope.ahk3 = lastLotter;
                $scope.ahk3.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "11") {
                $scope.hnkl10 = lastLotter;
                $scope.hnkl10.kl10Map = $scope.kl10LotteryTrick(numbers);
            } else if (name === "12") {
                $scope.kl8 = lastLotter;
                $scope.kl8.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "13") {
                $scope.jlk3 = lastLotter;
                $scope.jlk3.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "14") {
                $scope.ln11x5 = lastLotter;
                $scope.ln11x5.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "15") {
                $scope.pk10 = lastLotter;
                $scope.pk10.oneMap = $scope.numLotteryOneTrick(numbers);
            } else if (name === "16") {
                $scope.jsk3 = lastLotter;
                $scope.jsk3.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "17") {
                $scope.ssl = lastLotter;
                $scope.ssl.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "18") {
                $scope.gxk3 = lastLotter;
                $scope.gxk3.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "19") {
                $scope.xync = lastLotter;
                $scope.xync.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "20") {
                $scope.js11x5 = lastLotter;
                $scope.js11x5.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "21") {
                $scope.jx11x5 = lastLotter;
                $scope.jx11x5.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "22") {
                $scope.sd11x5 = lastLotter;
                $scope.sd11x5.numsMap = $scope.numLotteryTrick(numbers);
            } else if (name === "23") {
                $scope.tjssc = lastLotter;
                $scope.tjssc.numsMap = $scope.numLotteryTrick(numbers);
            }

            if (detail['downKey']) {
                $scope.initTimer(detail);
            }

        };


        //六合彩拓展算法
        $scope.lhcLotteryTrick = function (numbers, zodiac) {
            var lhcMap = {};
            var arrayNumbers = numbers.replace("#", ",").split(",");
            var zodiacNumbers = zodiac.replace("#", ",").split(",");
            for (var i = 0; i < 7; i++) {
                lhcMap['n' + i] = new Object();

                //六合彩单个开出'-'填充
                if (i < arrayNumbers.length) {
                    lhcMap['n' + i].code = pad(arrayNumbers[i], 2);
                    //zodiacNumbers[i]
                    lhcMap['n' + i].zodiac = $scope.twelveZodiac[zodiacNumbers[i]];
                    lhcMap['n' + i].color = getCodeColors(arrayNumbers[i]);
                } else {
                    lhcMap["n" + i].code = "-";
                    lhcMap['n' + i].zodiac = "";
                    lhcMap['n' + i].color = "blue";
                }

            }
            return lhcMap;
        }
        //根据彩票号码获取波色
        var getCodeColors = function (code) {

            var redColors = [1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46];
            var isRed = getColor(redColors, code);
            if (isRed) {
                return "red";
            }

            var blueColors = [3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48];
            var isBlue = getColor(blueColors, code);
            if (isBlue) {
                return "blue";
            }

            var greenColors = [5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49];
            var isGreen = getColor(greenColors, code);

            if (isGreen) {
                return "green";
            }
        }
        //处理开奖号码波色
        var getColor = function (colors, code) {

            for (var i in colors) {
                if (code == colors[i]) {
                    return true;
                }
            }
            return false;
        }

        //给数字字符串补零
        var pad = function (num, size) {
            if (num >= Math.pow(10, size)) { //如果num本身位数不小于size位
                return num.toString();
            } else {
                var _str = Array(size + 1).join('0') + num;
                return _str.slice(_str.length - size);
            }
        }

        //开奖号码不处理拓展算法
        $scope.numLotteryTrick = function (numbers) {

            var numsMap = {};

            var arrayNumbers = numbers.split(",");
            for (var i in arrayNumbers) {
                numsMap['n' + i] = arrayNumbers[i];
            }
            return numsMap;

        }

        //开奖号码控制一位拓展算法
        $scope.numLotteryOneTrick = function (numbers) {

            var oneMap = {};

            var arrayNumbers = numbers.split(",");
            for (var i in arrayNumbers) {
                oneMap['n' + i] = pad(arrayNumbers[i], 1);
            }
            return oneMap;

        }

        //开奖号码控制两位拓展算法
        $scope.numLotteryTwoTrick = function (numbers) {

            var twoMap = {};

            var arrayNumbers = numbers.split(",");
            for (var i in arrayNumbers) {
                twoMap['n' + i] = pad(arrayNumbers[i], 2);
            }
            return twoMap;

        }

        //快乐十分开奖号码拓展算法
        $scope.kl10LotteryTrick = function (numbers) {
            var kl10Map = {};
            var arrayNumbers = numbers.split(",");
            for (var i in arrayNumbers) {
                kl10Map['n' + i] = new Object();
                kl10Map['n' + i].code = arrayNumbers[i];
                if (arrayNumbers[i] === "19" || arrayNumbers[i] === "20") {
                    kl10Map['n' + i].color = "red";
                } else {
                    kl10Map['n' + i].color = "blue_l";
                }
            }
            return kl10Map;
        }


        //初始化计时器
        /**
         *
         * @param detail 封装字段
         * @param lotterId 倒计时key
         */
        $scope.initTimer = function (detail) {

            //清除倒计时
            clearIntervalId(countDown[detail['downKey']]);
            //clearIntervalId(sessionStorage[detail['downKey']]);


            //算出服务器上时间差
            var remainTime = GetDateDiff(detail['nextTime'], detail['serverTime']);

            var endTime = remainTime + new Date().getTime();
            $scope.newdown(remainTime, endTime, detail);
            if (!!remainTime) {
                //sessionStorage[detail['downKey']]
                countDown[detail['downKey']] = setInterval(
                    function () {
                        $scope.newdown(remainTime, endTime, detail);
                        $scope.$apply();
                    },
                    1000);
            }
        };

        $scope.newdown = function (remainTime, endTime, detail) {
            remainTime = endTime - new Date().getTime();
            if (remainTime <= 1000) {
                //开奖中
                //clearIntervalId(sessionStorage[detail['downKey']]);
                clearIntervalId(countDown[detail['downKey']]);

                if (detail['idNum'] == 1) {//六合彩

                    $scope.showLHCing = true;
                    $scope.showLHCingOpen = true;

                    if (!detail['opening']) {
                        $scope.lhc.lhcMap = $scope.lhcLotteryTrick('', '');
                    }

                    $scope.lhc['issue'] = detail['nextIssue'];
                }

                if (detail['idNum'] == 6) {//七星彩
                    $scope.showQXCing = true;
                    $scope.showQXCingOpen = true;
                    $scope.qxc['issue'] = detail['nextIssue'];
                    $scope.qxc.numsMap = $scope.numLotteryTrick('-,-,-,-,-,-,-');
                }


                var url = baseNext + getUrl(detail['idNum']) + '.do';
                //请求
                $scope.timedownUp(url, detail);

            } else {
                $scope[detail['downKey']] = $scope.fillDjs(remainTime);

                //六合彩是否显示倒计时
                if (detail['idNum'] == 1) {
                    if ($scope[detail['downKey']].hour < 8) {
                        $scope.showLHCing = true;
                    } else {
                        $scope.showLHCing = false;
                    }
                }

                //七星彩,是否显示倒计时
                if (detail['idNum'] == 6) {
                    if ($scope[detail['downKey']].hour < 8) {
                        $scope.showQXCing = true;
                    } else {
                        $scope.showQXCing = false;
                    }
                }
            }

        };

        //倒计时结束
        $scope.timedownUp = function (url, detail) {

            if (detail['opening'] && detail['idNum'] == 1) {
                return;
            }
            clearInterval(countDown[detail['downKey'] + 'open']);
            //每隔2秒去后台请求开奖结果
            //localStorage[detail['downKey']]
            countDown[detail['downKey'] + 'open'] = setInterval(function () {
                $scope.openKJ(url, detail);
            }, 2000);
        };

        $scope.openKJ = function (url, detail) {

          var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
          var lang = window.localStorage.getItem("language") || $scope.language;
            DetailLotteryService.get({url: url, issue: detail['nextIssue'],lang:lang,timeZone:timezone}, function (data) {
                var newLottery = data.newLotteryResult;
                var nextLottery = data.nextLotteryResult;

                if (newLottery && newLottery.length>0) {

                    //隐藏七星彩开奖
                    if (detail['idNum'] == 6) {
                        $scope.showQXCingOpen = false;
                    }

                    if (detail['idNum'] == 1) {
                        detail['opening'] = true;
                        //如果是香港彩,并且所有数据请求完
                        var arrayNumbers = newLottery[0].numbers.replace("#", ",").split(",");

                        if (arrayNumbers.length == 7) {
                            detail['opening'] = false;
                            //clearInterval(localStorage[detail['downKey']]);//销毁drawCodeId定时器
                            clearInterval(countDown[detail['downKey'] + 'open']);

                            $scope.showLHCingOpen = false;
                        }
                    } else {
                        //clearInterval(localStorage[detail['downKey']]);//销毁drawCodeId定时器
                        clearInterval(countDown[detail['downKey'] + 'open']);//销毁drawCodeId定时器
                    }


                    $scope.nextLotteryResult = nextLottery;
                    detail['nextTime'] = nextLottery.drawtime;
                    detail['nextIssue'] = nextLottery.issue;
                    detail['serverTime'] = data.serverTime;
                    newLottery[0].nextIssue = nextLottery.issue;
                    $scope.updateLotter(newLottery[0], detail);
                } else {
                    if (detail['idNum'] == 1) {
                        $scope.lhc.lhcMap = $scope.lhcLotteryTrick('', '');
                    }
                }
            });
        }


        /*
         * 填充倒计时
         * */
        $scope.fillDjs = function (remainTime) {

            var obj = timer(remainTime);

            return obj;
        };

        /*
         * 倒计时 返回时间对象
         * @param time毫秒数
         * */
        function timer(time) {
            time = time < 0 ? 0 : time;
            var hh = parseInt(time / 1000 / 60 / 60, 10);//计算剩余的小时数
            hh = !!hh ? hh : 0;
            hh = hh < 0 ? 0 : hh;
            hh = hh < 10 ? "0" + hh : "" + hh;
            var mm = parseInt(time / 1000 / 60 % 60, 10);//计算剩余的分钟数
            mm = !!mm ? mm : 0;
            mm = mm < 0 ? 0 : mm;
            mm = mm < 10 ? "0" + mm : "" + mm;
            var ss = parseInt(time / 1000 % 60, 10);//计算剩余的秒数
            ss = !!ss ? ss : 0;
            ss = ss < 0 ? 0 : ss;
            ss = ss < 10 ? "0" + ss : "" + ss;
            return {"hour": hh, "min": mm, "sec": ss};
        }

        /*
         * 获取日期间隔毫秒 时间参数格式yyyy-MM-dd HH:mm:ss
         */
        function GetDateDiff(endTimeStr, beginTime) {
            var dateEnd = new Date(endTimeStr.replace(/-/g, "/"));
            var timezone = window.localStorage.getItem("timezone");
            if (timezone == null) {
              timezone = defaultTimeZoneKey;
            }
            var dateDiff = dateEnd.getTime() - calcTime(new Date(parseInt(beginTime)),timezone);
            return dateDiff;
        }

      /*
       *当地时间转换成其它时区
       * */
      function calcTime(date, timezone) {
        var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*timezone));
        return nd.getTime();
      }


      /*
       * 清除倒计时id
       */
        function clearIntervalId(ids) {
            if (typeof(ids) != 'undefined') {
                window.clearInterval(ids);
            }
        }
    }
]);

//返回最新结果
function getUrl(lotteryName) {
    var drawCodeUrl;
    if (lotteryName == 1) { //香港开奖
        drawCodeUrl = "findLhcNextAndNewResults";
    } else if (lotteryName == 2) {//重庆时时彩
        drawCodeUrl = "findCQSSCNextAndNewResults";
    } else if (lotteryName == 3) {//江西时时彩
        drawCodeUrl = "findJXSSCNextAndNewResults";
    } else if (lotteryName == 4) {//新疆时时彩
        drawCodeUrl = "findXJSSCNextAndNewResults";
    } else if (lotteryName == 5) {//云南时时彩
        drawCodeUrl = "findYNSSCNextAndNewResults";
    } else if (lotteryName == 6) {//七星彩
        drawCodeUrl = "findQXCNextAndNewResults";
    } else if (lotteryName == 7) {//广东11选5
        drawCodeUrl = "findD11X5NextAndNewResults";
    } else if (lotteryName == 8) {//广东快乐10分
        drawCodeUrl = "findDKL10NextAndNewResults";
    } else if (lotteryName == 9) {//湖北11选5
        drawCodeUrl = "findHB11NextAndNewResults";
    } else if (lotteryName == 10) {//安徽快三
        drawCodeUrl = "findAHK3NextAndNewResults";
    } else if (lotteryName == 11) {//湖南快乐10分
        drawCodeUrl = "findHNKL10NextAndNewResults";
    } else if (lotteryName == 12) {//北京快乐8
        drawCodeUrl = "findKL8NextAndNewResults";
    } else if (lotteryName == 13) {//吉林快三
        drawCodeUrl = "findJLK3NextAndNewResults";
    } else if (lotteryName == 14) {//辽宁11选5
        drawCodeUrl = "findLN11X5NextAndNewResults";
    } else if (lotteryName == 15) {//北京赛车
        drawCodeUrl = "findPK10NextAndNewResults";
    } else if (lotteryName == 16) {//江苏快三
        drawCodeUrl = "findJSK3NextAndNewResults";
    } else if (lotteryName == 17) {//时时乐
        drawCodeUrl = "findSSLNextAndNewResults";
    } else if (lotteryName == 18) {//广西快三
        drawCodeUrl = "findGXK3NextAndNewResults";
    } else if (lotteryName == 19) {//幸运农场
        drawCodeUrl = "findCQKL10NextAndNewResults";
    } else if (lotteryName == 20) {//江苏11选5
        drawCodeUrl = "findJS11X5NextAndNewResults";
    } else if (lotteryName == 21) {//江西11选5
        drawCodeUrl = "findJX11X5NextAndNewResults";
    } else if (lotteryName == 22) {//山东11选5
        drawCodeUrl = "findSD11X5NextAndNewResults";
    } else if (lotteryName == 23) {//天津时时彩
        drawCodeUrl = "findTJSSCNextAndNewResults";
    }

    return drawCodeUrl;
}

/**
 * Created by hhly105 on 2015/9/28.
 */

kjdetail.controller("kjDetailController", ['$scope', '$routeParams','$translate', 'DetailLotteryService',
    function ($scope, $routeParams,$translate,DetailLotteryService) {

        //初始化显示正在加载中
        $scope.showLoading=true;

        //下拉加载更多初始化参数
        var isScrolling = false;
        //下拉加载更多参数
        var everyPageNum=20;

        var Equal;  //和
        var Big;    //大
        var Small;  //小
        var Single; //单
        var Double; //双
        var Loong;  //龙
        var Tiger;  //虎
        var Red;    //红
        var Blue;   //蓝
        var Green;  //绿
        var Poultry //家禽
        var Beast   //野兽


        //国际化
        $scope.$watch("$viewContentLoaded", function () {

            Equal=$scope.getTrick("Equal");
            Big=$scope.getTrick("Big");
            Small=$scope.getTrick("Small");
            Single=$scope.getTrick("Single");
            Double=$scope.getTrick("Double");
            Loong=$scope.getTrick("Loong");
            Tiger=$scope.getTrick("Tiger");
            Red=$scope.getTrick("Red");
            Blue=$scope.getTrick("Blue");
            Green=$scope.getTrick("Green");
            Poultry=$scope.getTrick("Poultry");
            Beast=$scope.getTrick("Beast");

            //生肖国际化
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
                    $scope.twelveZodiac['-'] = "-"
                }
                );
             });
        //国际化所有拓展字段
        $translate(['EQUALS','BIG','SMALL','SINGLE','DOUBLE','DRAGON','TIGER','RED','BLUE','GREEN','POULTRY','BEAST']).then(
            function (translations) {
                $scope.getTrick = function (Code) {
                    var text = "";
                    switch (Code) {
                        case "Equal":
                            text = translations.EQUALS;
                            break;
                        case "Big":
                            text = translations.BIG;
                            break;
                        case "Small":
                            text = translations.SMALL;
                            break;
                        case "Single":
                            text = translations.SINGLE;
                            break;
                        case "Double":
                            text = translations.DOUBLE;
                            break;
                        case "Loong":
                            text = translations.DRAGON;
                            break;
                        case "Tiger":
                            text = translations.TIGER;
                            break;
                        case "Red":
                            text = translations.RED;
                            break;
                        case "Blue":
                            text = translations.BLUE;
                            break;
                        case "Green":
                            text = translations.GREEN;
                            break;
                        case "Poultry":
                            text = translations.POULTRY;
                            break;
                        case "Beast":
                            text = translations.BEAST;
                            break;
                    }
                    return text;
                }
            }
        );

        var url;

        //初始化所有隐藏
        initHid($scope);

        //接收参数
        var id = $routeParams['kjId'];

        //根据ID 显示对应模板
        findUrlById(id, $scope);

        url ="detailedLotteryResults."+ url + '.do';


      var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
        DetailLotteryService.get({url: url,timeZone:timezone}, function (data) {

                var historyLotteryResults=data.historyLotteryResults;

                if (id == 1) { //香港开奖
                    for(var i in historyLotteryResults)
                    {
                        historyLotteryResults[i].time = historyLotteryResults[i].time.replace(/\-/g,"/");
                        historyLotteryResults[i]= $scope.lhcLotteryTrick(historyLotteryResults[i]);
                    }
                } else if (id == 2 || id ==3 || id == 4 || id == 5 || id == 23) {//时时彩
                    for (var i in historyLotteryResults)
                    {
                        historyLotteryResults[i].time = historyLotteryResults[i].time.replace(/\-/g,"/");
                        historyLotteryResults[i] = $scope.sscLotteryTrick(historyLotteryResults[i]);
                    }
                } else if (id == 7 || id == 9 || id == 14 || id == 20 || id == 21 || id == 22) {//十一选五
                    for (var i in historyLotteryResults)
                    {
                        historyLotteryResults[i].time = historyLotteryResults[i].time.replace(/\-/g,"/");
                        historyLotteryResults[i] = $scope.elevenPickFiveLotteryTrick(historyLotteryResults[i]);
                    }
                } else if (id == 8 || id == 11 || id == 19) {//快乐十分  19幸运农场
                    for (var i in historyLotteryResults)
                    {
                        historyLotteryResults[i].time = historyLotteryResults[i].time.replace(/\-/g,"/");
                        historyLotteryResults[i] = $scope.kl10LotteryTrick(historyLotteryResults[i]);
                    }
                } else if (id == 15) {//北京赛车
                    for (var i in historyLotteryResults)
                    {
                        historyLotteryResults[i].time = historyLotteryResults[i].time.replace(/\-/g,"/");
                        historyLotteryResults[i] = $scope.pk10LotteryTrick(historyLotteryResults[i]);
                    }
                }else if(id==10 ||id==16||id==13||id==18){//快3
                    for (var i in historyLotteryResults)
                    {
                        historyLotteryResults[i].time = historyLotteryResults[i].time.replace(/\-/g,"/");
                        historyLotteryResults[i] = $scope.fastThreeLotteryTrick(historyLotteryResults[i]);
                    }
                }else if(id == 6) {//七星彩
                    for (var i in historyLotteryResults)
                    {
                        historyLotteryResults[i].time = historyLotteryResults[i].time.replace(/\-/g,"/");
                        historyLotteryResults[i] = $scope.sevenLotteryTrick(historyLotteryResults[i]);
                    }
                }//缺12:快乐八 17:时时乐

            $scope.chooseLotteryResult=historyLotteryResults[0];

            //选中详情
            $scope.issueClick = function ($event) {

                $(".tab_title li").eq(0).addClass("active").siblings().removeClass("active");
                $(".tab_content .de_div").eq(0).show().siblings().hide();

                //下拉效果点击切换到第一个tab时隐藏
                $scope.index=false;

                var issue=$event.currentTarget.getAttribute("issue");
                for(var i in historyLotteryResults)
                {
                    if(issue==historyLotteryResults[i].issue)
                    {
                        $scope.chooseLotteryResult=historyLotteryResults[i];
                        return;
                    }

                }

            }

            //加载完成
            $scope.showLoading=false;


            //初始化使他只显示20条记录效果
            $scope.isShow = true;
            $scope.historyLotteryResults = [];
            $scope.pageNum = 1;
            $scope.temNum = 20;
            $scope.temp=historyLotteryResults;

            //执行每次加载20条记录函数
            $scope.append20results();


            //以下逻辑实现置顶效果
            // 获取置顶对象
            var obj = document.getElementsByClassName('scroll')[0];
            var scrollTop = null;

            // 置顶对象点击事件
            obj.onclick = function() {
                var timer = setInterval(function() {
                    window.scrollBy(0, -100);
                    if (scrollTop == 0)
                        clearInterval(timer);
                }, 2);
            }

            // 窗口滚动检测
            window.onscroll = function() {
                scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                obj.style.display = (scrollTop >= 300) ? "block" : "none";
            }

        });

        //每次加载20条记录函数
        $scope.append20results = function () {

            var total = $scope.pageNum * everyPageNum;

            if (total >=  $scope.temp.length) {

                total =  $scope.temp.length;
            }
            for (var i = ($scope.pageNum - 1) * 20; i < total; i++) {

                $scope.historyLotteryResults.push($scope.isShows( $scope.temp[i], false));
            }

            $scope.temNum = $scope.temNum + everyPageNum;
            $scope.pageNum = $scope.pageNum + 1;

        }
        //每次加载20条记录显示函数
        $scope.isShows = function (data, show) {
            //显示第一条
            var data = data;
            if (show) {
                data.isf = true;
                data.display = 'block';
            } else {
                data.isf = false;
                data.display = 'none';
            }
            return data;
        };

        //时时彩拓展算法
        $scope.sscLotteryTrick = function(historyLottery) {
            if(historyLottery == null) {
                return null;
            }
            var numsMap = new Object();
            var arrayNumbers = historyLottery.numbers.split(",");
            var sum = 0;
            for (var i = 0; i < arrayNumbers.length; i++) {
                numsMap['n' + i] = arrayNumbers[i];
                sum += parseInt(arrayNumbers[i], 10);
            }
            var firstNum = parseInt(arrayNumbers[0]);
            var fiveNum = parseInt(arrayNumbers[4]);

            var time = historyLottery.time;
            var date = new Date(time);

            historyLottery.day = date.Format("yyyy-MM-dd");
            historyLottery.hourMin = date.Format("hh:mm");
            historyLottery.sum = sum;
            historyLottery.numsMap = numsMap;
            historyLottery.sumBigOrSmall = sum > 22 ? Big : Small ;
            historyLottery.sumSingleOrDouble = (sum % 2 == 0 ? Double : Single);
            historyLottery.loongTiger = firstNum > fiveNum ? Loong : (firstNum == fiveNum ? Equal : Tiger);
            return historyLottery;
        }

        //七星彩拓展算法
        $scope.sevenLotteryTrick = function(historyLottery) {
            if(historyLottery == null) {
                return null;
            }
            var time = historyLottery.time;
            var date = new Date(time);
            historyLottery.day = date.Format("yyyy-MM-dd");
            historyLottery.week = $scope.getWeek(date);

            var arrayNumbers = historyLottery.numbers.split(",");
            var numsMap = new Object();
            var tempNum;
            for(var i = 0 ; i < arrayNumbers.length; i++) {
                numsMap['n' + i] = new Object();
                tempNum = parseInt(arrayNumbers[i], 10);
                numsMap['n' + i].bigOrSmall = (tempNum >= 5 ? Big : Small);
                numsMap['n' + i].singleOrDouble = (tempNum % 2 ==0 ? Double : Single);
                numsMap['n' + i].code = arrayNumbers[i];
            }
            historyLottery.numsMap = numsMap;
            return historyLottery;
        }

        //快乐十分拓展算法
        $scope.kl10LotteryTrick = function (historyLottery) {

            if (historyLottery == null) {
                return;
            }
            var numsMap = new Object();

            var sum=0;

            var arrayNumbers = historyLottery.numbers.split(",");

            for (var i = 0; i < arrayNumbers.length; i++) {
                numsMap['n' + i] = new Object();
                numsMap['n' + i].code = pad(arrayNumbers[i],2);
                if (arrayNumbers[i] === "19" || arrayNumbers[i] === "20") {
                    numsMap['n' + i].color = "red";
                } else {
                    numsMap['n' + i].color = "blue_l";
                }
                sum += parseInt(arrayNumbers[i], 10);
            }

            var firstNum = parseInt(arrayNumbers[0]);
            var TwoNum = parseInt(arrayNumbers[1]);
            var ThreeNum = parseInt(arrayNumbers[2]);
            var FourNum = parseInt(arrayNumbers[3]);
            var FiveNum = parseInt(arrayNumbers[4]);
            var SixNum = parseInt(arrayNumbers[5]);
            var SevenNum = parseInt(arrayNumbers[6]);
            var EightNum = parseInt(arrayNumbers[7]);


            var time = historyLottery.time;
            var date = new Date(time);

            var sumStr = new String(sum);
            var mantissa = parseInt(sumStr.charAt(sumStr.length - 1), 10);//总分数的个位数

            historyLottery.day = date.Format("yyyy-MM-dd");
            historyLottery.hourMin = date.Format("hh:mm");
            historyLottery.sum = sum;
            historyLottery.numsMap = numsMap;
            historyLottery.SumBigOrSmall = sum > 84 ? Big : (sum == 84 ? Equal : Small );
            historyLottery.SumSingleOrDouble = (sum % 2 == 0 ? Double : Single);
            historyLottery.sumMantissa = ( mantissa >= 5 ? Big : Small);


            historyLottery.ToploongTiger = firstNum > EightNum ? Loong : (firstNum == EightNum ? Equal :Tiger);
            historyLottery.AsialoongTiger = TwoNum > SevenNum  ? Loong : (TwoNum == SevenNum ? Equal : Tiger);
            historyLottery.ThreeloongTiger = ThreeNum > SixNum ? Loong: (ThreeNum == SixNum ? Equal : Tiger);
            historyLottery.FourloongTiger = FourNum > FiveNum  ? Loong : (FourNum == FiveNum ? Equal : Tiger);

            return historyLottery;

        }


        //快3拓展算法
        $scope.fastThreeLotteryTrick = function (historyLottery) {
            if (historyLottery == null) {
                return;
            }
            var numsMap = new Object();
            var arrayNumbers = historyLottery.numbers.split(",");
            var sum = 0;
            for (var i = 0; i < arrayNumbers.length; i++) {
                numsMap['n' + i] = arrayNumbers[i];
                sum += parseInt(arrayNumbers[i], 10);
            }

            var time = historyLottery.time;
            var date = new Date(time);

            historyLottery.day = date.Format("yyyy-MM-dd");
            historyLottery.hourMin = date.Format("hh:mm");
            historyLottery.sum = sum;
            historyLottery.numsMap = numsMap;
            historyLottery.sumBigOrSmall = (sum >= 11 ? Big : Small);
            historyLottery.sumSingleOrDouble = (sum % 2 == 0 ? Double : Single);
            return historyLottery;
        }

        //北京赛车拓展算法
        $scope.pk10LotteryTrick = function (historyLottery) {

            if (historyLottery == null) {
                return;
            }
            var numsMap = new Object();

            var arrayNumbers = historyLottery.numbers.split(",");

            for (var i = 0; i < arrayNumbers.length; i++) {
                numsMap['n' + i] = pad(arrayNumbers[i], 1);
            }

            var firstNum = parseInt(arrayNumbers[0]);
            var TwoNum = parseInt(arrayNumbers[1]);
            var ThreeNum = parseInt(arrayNumbers[2]);
            var FourNum = parseInt(arrayNumbers[3]);
            var FiveNum = parseInt(arrayNumbers[4]);
            var SixNum = parseInt(arrayNumbers[5]);
            var SevenNum = parseInt(arrayNumbers[6]);
            var EightNum = parseInt(arrayNumbers[7]);
            var NineNum = parseInt(arrayNumbers[8]);
            var TenNum = parseInt(arrayNumbers[9]);

            var TopAsiaSum=firstNum+TwoNum;

            var time = historyLottery.time;
            var date = new Date(time);

            historyLottery.day = date.Format("yyyy-MM-dd");
            historyLottery.hourMin = date.Format("hh:mm");
            historyLottery.TopAsiaSum = TopAsiaSum;
            historyLottery.numsMap = numsMap;
            historyLottery.TopAsiaSumBigOrSmall = TopAsiaSum > 11 ? Big : (TopAsiaSum == 11 ? Equal : Small );
            historyLottery.TopAsiaSumSingleOrDouble = (TopAsiaSum % 2 == 0 ? Double : Single);
            historyLottery.ToploongTiger = firstNum > TenNum ? Loong : (firstNum == TenNum ? Equal : Tiger);
            historyLottery.AsialoongTiger = TwoNum > NineNum ? Loong : (TwoNum == NineNum ? Equal : Tiger);
            historyLottery.ThreeloongTiger = ThreeNum > EightNum ? Loong: (ThreeNum == EightNum ? Equal : Tiger);
            historyLottery.FourloongTiger = FourNum > SevenNum ? Loong : (FourNum == SevenNum ? Equal : Tiger);
            historyLottery.FiveloongTiger = FiveNum > SixNum ? Loong : (FiveNum == SixNum ? Equal : Tiger);

            return historyLottery;

        }

        //十一选五拓展算法
        $scope.elevenPickFiveLotteryTrick = function (historyLottery) {
            if (historyLottery == null) {
                return;
            }
            var numsMap = new Object();
            var arrayNumbers = historyLottery.numbers.split(",");
            var sum = 0;
            for (var i = 0; i < arrayNumbers.length; i++) {
                numsMap['n' + i] = pad(arrayNumbers[i], 2);
                sum += parseInt(arrayNumbers[i], 10);
            }
            var firstNum = parseInt(arrayNumbers[0]);
            var fiveNum = parseInt(arrayNumbers[4]);

            var sumStr = new String(sum);
            var mantissa = parseInt(sumStr.charAt(sumStr.length - 1), 10);//总分数的个位数

            var time = historyLottery.time;
            var date = new Date(time);

            historyLottery.day = date.Format("yyyy-MM-dd");
            historyLottery.hourMin = date.Format("hh:mm");
            historyLottery.sum = sum;
            historyLottery.numsMap = numsMap;
            historyLottery.sumBigOrSmall = sum > 30 ? Big : (sum == 30 ? Equal : Small );
            historyLottery.sumSingleOrDouble = (sum % 2 == 0 ? Double : Single);
            historyLottery.loongTiger = firstNum > fiveNum ? Loong : (firstNum == fiveNum ? Equal : Tiger);
            historyLottery.sumMantissa = ( mantissa >= 5 ? Big : Small);
            return historyLottery;
        }


        //六合彩拓展算法
        $scope.lhcLotteryTrick = function (historyLottery) {

            if (historyLottery == null) {
                return;
            }
            var lhcMap = {};

            var sum = 0;

            var arrayNumbers = historyLottery.numbers.replace("#", ",").split(",");

            if(historyLottery.zodiac!=null)
            {
                var zodiacNumbers = historyLottery.zodiac.replace("#", ",").split(",");
            }

            for (var i = 0; i < 7; i++) {

                lhcMap['n' + i] = new Object();
                //六合彩单个开出'?'填充
                if (i < arrayNumbers.length) {

                    lhcMap['n' + i].code = pad(arrayNumbers[i], 2);

                    if(historyLottery.zodiac!=null)
                    {
                        //国际化
                        lhcMap['n' + i].zodiac = $scope.twelveZodiac[zodiacNumbers[i]];
                    }
                    lhcMap['n' + i].color = getCodeColors(arrayNumbers[i]);

                } else {
                    lhcMap["n" + i].code = "-";
                    lhcMap['n' + i].zodiac = "-";
                    lhcMap['n' + i].color = "blue";

                }

                sum += parseInt(arrayNumbers[i], 10);
            }

            var time = historyLottery.time;
            var date = new Date(time);

            historyLottery.day = date.Format("yyyy-MM-dd");
            historyLottery.week = $scope.getWeek(date);

            historyLottery.lhcMap = lhcMap;

            var specialCode=lhcMap.n6.code;

            historyLottery.specialCode=specialCode;
            historyLottery.specialCodeZodiac=lhcMap.n6.zodiac;
            if(zodiacNumbers.length==7)
            {
                historyLottery.specialCodePoultry=getPoultry(zodiacNumbers[6]);
                historyLottery.specialCodeSingle=(parseInt(specialCode) == 49?Equal:parseInt(specialCode) % 2 == 0 ? Double : Single);
                historyLottery.specialCodeSize=(parseInt(specialCode) == 49?Equal :parseInt(specialCode) >=25  ? Big : Small );
                historyLottery.specialCodeColor=getSpecialCodeColor(lhcMap.n6.color);
                historyLottery.sum = sum;
                historyLottery.sumBigOrSmall = sum >174 ? Big : (sum == 174 ? Equal : Small );
                historyLottery.sumSingleOrDouble = (sum % 2 == 0 ? Double : Single);
            }else
            {
                historyLottery.specialCodePoultry="-";
                historyLottery.specialCodeSingle="-";
                historyLottery.specialCodeSize="-";
                historyLottery.specialCodeColor="-";
                historyLottery.sum = "-";
                historyLottery.sumBigOrSmall ="-";
                historyLottery.sumSingleOrDouble = "-";
            }

            return historyLottery;

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

        //获取特码家禽或野兽
        var getPoultry = function (numbers) {

            if(numbers=="牛"||numbers=="马"||numbers=="羊"||numbers=="鸡"||numbers=="狗"||numbers=="猪")
            {
                return Poultry;
            }
            else if(numbers=="鼠"||numbers=="虎"||numbers=="兔"||numbers=="龙"||numbers=="蛇"||numbers=="猴")
            {
                return Beast;
            }
            else
            {
                return "-";
            }
        }

        //获取特码颜色
        var getSpecialCodeColor = function (color) {

           if(color=="red"){
                return Red;
           }else if(color=="blue"){
                return Blue;
           }else if(color=="green"){
                return Green;
            }else{
               return "-";
            }
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


        //国际化获取指定日期对应为星期几
        $translate(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'ERROR_DAY']).then(
            function (translations) {
                $scope.getWeek = function (date) {
                    var week = date.getDay();
                    var text = "";
                    switch (week) {
                        case 0:
                            text = translations.SUNDAY;
                            break;
                        case 1:
                            text = translations.MONDAY;
                            break;
                        case 2:
                            text = translations.TUESDAY;
                            break;
                        case 3:
                            text = translations.WEDNESDAY;
                            break;
                        case 4:
                            text = translations.THURSDAY;
                            break;
                        case 5:
                            text = translations.FRIDAY;
                            break;
                        case 6:
                            text = translations.SATURDAY;
                            break;
                        default:
                            text = translations.ERROR_DAY;
                    }
                    return text;
                }
            }
        );


        //初始化所有隐藏
        function initHid($scope) {
            $scope.LHC = false;
            $scope.D11X5 = false;
            $scope.K3 = false;
            $scope.CQKL10 = false;
            $scope.SSC = false;
            $scope.SSL = false;
            $scope.KL8 = false;
            $scope.PK10 = false;
            $scope.QXC = false;
            $scope.KL10 = false;
        }

        //根据id拼成url
        function findUrlById(lotteryName, $scope) {
            if (lotteryName == 1) { //香港开奖

                url = "findLhcDetailedResults";
                $scope.title="HONGKONG_LOTTERY";
                $scope.LHC = true;

            } else if (lotteryName == 2) {//重庆时时彩
                url = "findCQSSCDetailedResults";
                $scope.title="CHONGQING_CONSTANTCOLOR";
                $scope.SSC = true;

            } else if (lotteryName == 3) {//江西时时彩

                url = "findJXSSCDetailedResults";
                $scope.title="JIANGXI_CONSTANTCOLOR";
                $scope.SSC = true;

            } else if (lotteryName == 4) {//新疆时时彩
                url = "findXJSSCDetailedResults";
                $scope.title="XIJIANG_CONSTANTCOLOR";
                $scope.SSC = true;
            } else if (lotteryName == 5) {//云南时时彩
                url = "findYNSSCDetailedResults";
                $scope.title="YUNNAN_CONSTANTCOLOR";
                $scope.SSC = true;
            } else if (lotteryName == 6) {//七星彩
                url = "findQXCDetailedResults";
                $scope.title="SEVEN_COLOR";
                $scope.QXC = true;
            } else if (lotteryName == 7) {//广东11选5
                url = "findD11X5DetailedResults";
                drawCodeUrl = "findD11X5NextAndNewResults";
                $scope.title="GUANGDONG_ElevenChooseFive";
                $scope.D11X5 = true;
            } else if (lotteryName == 8) {//广东快乐10分
                url = "findDKL10DetailedResults";
                $scope.title="GUANGDONG_HAPPY_TEN";
                $scope.KL10 = true;
            } else if (lotteryName == 9) {//湖北11选5
                url = "findHB11X5DetailedResults";
                $scope.title="HUBEI_ElevenChooseFive";
                $scope.D11X5 = true;
            } else if (lotteryName == 10) {//安徽快3
                url = "findAHK3DetailedResults";
                $scope.title="ANHUI_FASTTHREE";
                $scope.K3 = true;
            } else if (lotteryName == 11) {//湖南快乐10分
                url = "findHNKL10DetailedResults";
                $scope.title="HUNAN_HAPPY_TEN";
                $scope.KL10 = true;
            } else if (lotteryName == 12) {//北京快乐8
                url = "findKL8DetailedResults";
                $scope.title="BEIJING_HAPPY_EI";
                $scope.KL8 = true;
            } else if (lotteryName == 13) {//吉林快3
                url = "findJLK3DetailedResults";
                $scope.title="JILIN_HAPPY_THREE";
                $scope.K3 = true;
            } else if (lotteryName == 14) {//辽宁11选5
                url = "findLN11X5DetailedResults";
                $scope.title="LIAONING_ElevenChooseFive";
                $scope.D11X5 = true;
            } else if (lotteryName == 15) {//北京赛车
                url = "findPK10DetailedResults";
                $scope.title="BEIJING_CAR_RACING";
                $scope.PK10 = true;
            } else if (lotteryName == 16) {//江苏快3
                url = "findJSK3DetailedResults";
                $scope.title="JIANGSHU_FASTTHREE";
                $scope.K3 = true;
            } else if (lotteryName == 17) {//时时乐
                url = "findSSLDetailedResults";
                $scope.title="CONSTANT_HAPPY";
                $scope.SSL = true;
            } else if (lotteryName == 18) {//广西快3
                url = "findGXK3DetailedResults";
                $scope.title="GUANGXI_FASTTHREE";
                $scope.K3 = true;
            } else if (lotteryName == 19) {//幸运农场
                url = "findCQKL10DetailedResults";
                $scope.title="CHONGQING_LUCKY_FARM";
                $scope.XYNC = true;
            } else if (lotteryName == 20) {//江苏11选5
                url = "findJS11X5DetailedResults";
                $scope.title="JIANGSHU_ElevenChooseFive";
                $scope.D11X5 = true;
            } else if (lotteryName == 21) {//江西11选5
                url = "findJX11X5DetailedResults";
                $scope.title="JIANGXI_ElevenChooseFive";
                $scope.D11X5 = true;
            } else if (lotteryName == 22) {//山东11选5
                url = "findSD11X5DetailedResults";
                $scope.title="SHANDONG_ElevenChooseFive";
                $scope.D11X5 = true;
            } else if (lotteryName == 23) {//天津时时彩
                url = "findTJSSCDetailedResults";
                $scope.title="TIANJIN_CONSTANTCOLOR";
                $scope.SSC = true;
            }
        }

        //开奖详情/历史开奖tab切换函数
        $(function(){

            var index = 0;
            $(".tab_title li").click(function(){  //mousemove 点击或移动

                index = $(".tab_title li").index(this);

                $(this).addClass("active").siblings().removeClass("active");
                $(".tab_content .de_div").eq(index).show().siblings().hide();

                //下拉效果在第二个tab时显示出来
                $scope.index=(index==1);
                $scope.$apply();

            });

        });

      //屏幕触动，下拉加载更多
      $(window).scroll(function () {
        if ($(document).scrollTop() >= $(document).height() - $(window).height() - 100) {
          //判断是否正在滚动加载
          if (isScrolling) return;
          //将状态改为正在滚动，防止同时触发多次滚动事件
          isScrolling = true;
          $scope.isShow = false;
          $scope.$apply();
          setTimeout(function () {
            $('#note2').hide();
            $scope.append20results();

            if ($scope.temNum >=  $scope.temp.length) {
              $scope.isShow = true;
              $scope.$apply();
              return;
            }
            $scope.isShow = true;
            $scope.$apply();
            //将状态改为false，使新的滚动事件可以被触发
            isScrolling = false;
          }, 1500);
        }
      });

    }
])

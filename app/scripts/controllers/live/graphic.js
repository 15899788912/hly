(function($) {
    var lang =  mobileUtil.getQueryString('lang') || 'zh' ,//默认中国
        url = baseUrl,
        thirdId = mobileUtil.getQueryString('thirdId'),
        homeScore = mobileUtil.getQueryString('homeScore'),
        guestScore = mobileUtil.getQueryString('guestScore');
        // console.log('thirdId:'+thirdId);
        // console.log('lang:'+lang);
    var config = {
        socket_url: websocketUrl,
        socket_port: 8080,
        username: websocketLogin,
        password: websocketPasscode,
        distination: {
            basketball: websocketDestinationLive+'.'+thirdId+'.'+lang
        }
    }

    queryMatchInfos();


    //获取赛事直播信息（包括直播前、直播中、直播结束）
    function queryMatchInfos() {
        var urlInfo = url + '/core/footBallMatch.queryMatchInfos.do';
        $.ajax({
            type: 'POST',
            url: urlInfo,
            data: {
                lang: lang,
                thirdId: thirdId
            },
            beforeSend: function() {

            }, //loading
            timeout: 5000,
            success: function(data) {
                // console.log(JSON.stringify(data));
                if (data.result === '200') {
                    queryMatchInfo.writeMatchInfos(data);
                }
                queryMatchInfo.getInfoTime();

            },
            error: function(xhr, errorType, error) {
                queryMatchInfo.getInfoTime();
            },
            complete: function() {

                } //隐藏loading
        });
    };

    var queryMatchInfo = {
        //定时器
        getInfoTime: function() {
            var liveStatus = sessionStorage.getItem('liveStatus');
            var startTime = sessionStorage.getItem('startTime');
            var nowTime = new Date();
            var beginTime = new Date(startTime);
            var difference = (beginTime.getTime() - nowTime.getTime()) / 1000; //时间差 单位秒
            var getInfoTimer; //定时器

            if (difference <= 0) {
                difference = 0;
            }
            // console.log('difference:'+difference);
            if (liveStatus === '0') {
                if (difference < 600) { //小于10min 每30s请求一次
                  clearTimeout(getInfoTimer);
                    getInfoTimer = setTimeout(function() {
                        queryMatchInfos();
                    }, 30000);
                } else { //大于10min 每5min请求一次
                  clearTimeout(getInfoTimer);
                    getInfoTimer = setTimeout(function() {
                        queryMatchInfos();
                    }, 300000);
                }
            } else {
                clearTimeout(getInfoTimer);
            }
        },

        writeMatchInfos: function(data) {
            sessionStorage.setItem('liveStatus', data.liveStatus);
            if (data.liveStatus === '-1') { //直播结束
                clearTimeout(queryMatchInfo.getInfoTimer);
                queryMatchInfo.liveAfter(data);
            }
            if (data.liveStatus === '0') { //直播前
              clearTimeout(queryMatchInfo.getInfoTimer);
                queryMatchInfo.liveBefore(data);
            }
            if (data.liveStatus === '1') { //直播中
                clearTimeout(queryMatchInfo.getInfoTimer);
                queryMatchInfo.living(data);
            }
        },
        //直播前
        liveBefore: function(data) {
            sessionStorage.setItem('startTime', data.matchInfo.startTime);
            $("#trailer").show();
            $("#trailer .middle .head2").html(data.matchType1);
            $("#trailer .middle .vstime").html(data.matchInfo.startTime);
            $("#team-z").hide();
            $("#team-v").hide();
            queryMatchInfo.initInfo(data);
        },
        //直播中
        living: function(data) {
            socketObj.init();
            queryMatchInfo.initInfo(data);

            if(data.matchInfo.matchLive[0].state == 0){
                $("#trailer").show();
                $("#team-z").hide();
                $("#team-v").hide();
                $("#trailer .middle .head2").html(data.matchType1);
                $("#trailer .middle .vstime").html('即将开赛...');
            }else{
              $("#trailer").hide();
              $("#team-z").show();
              $("#team-v").show();
            }



            //比赛时间
            var dataArray = data.matchInfo.matchLive[0];
            var scHomeScore = 0,
                scGuestScore = 0;
            if (data != null && data != "null") {
              if(homeScore != null || guestScore != null){
                  scHomeScore = homeScore;
                  scGuestScore = guestScore;
              }else{
                queryMatchInfo.getScore(data);
                scHomeScore = sessionStorage.getItem('homeScore');
                scGuestScore = sessionStorage.getItem('guestScore');
              }

                //全场比分
                var sc = scHomeScore + "-" + scGuestScore;
                //设置面板比分
                $('#home_score_pause_panel').html(scHomeScore); //暂停比分
                $('#guest_score_pause_panel').html(scGuestScore); //暂停比分
                $('#home_score_half_panel').html(scHomeScore); //中场比分
                $('#guest_score_half_panel').html(scGuestScore); //中场比分
                $("#z-socre").html(scHomeScore);
                $("#v-socre").html(scGuestScore);

                var status = dataArray.state; //获取状态

                //显示半场比分
                if (status != 0 && status != -10 && status != -11 && status != -12 && status != -14 && status != 1 && status != 2) {
                    $('#show_half').show();
                } else {
                    $('#show_half').hide();
                }
                if (status == 0 || status == -10 || status == -11 || status == -12 || status == -14) {
                    $('#all_score').html("-");
                } else {
                    $('#all_score').html(sc);
                }
                // $('#half_score').html(half_sc);

                // $('#half_score_event').html(all_half_sc);
                // $('#score_event').html(all_sc);
                //获取比分进行到的时间点
                var min = parseInt((dataArray.time)/ 60000)+1 ;
                //判断状态
                if (status == 2) { //如果为中场休息的时候
                    var zcxx = $('#zcxx_status').val();
                    if (zcxx == 0) {
                        $('#zcxx_status').val('1');
                        //animation.gamehalf();
                        setTimeout(function() {
                            animation.gamehalf();
                        }, 500);
                    }
                } else {
                    $('#zcxx_status').val('0');
                    $(".game-half").fadeOut("fast");
                }

                //禁用竞猜上半场数据
                if (status == 2 || status == 3 || status == 4 || status == 5 || status == -1) {
                    $('ul[_questionId=2]').removeClass().addClass('guessing-list active');
                    $('ul[_questionId=3]').removeClass().addClass('guessing-list active');
                }

                //禁用竞猜全场数据
                if (status == -1) {
                    $('ul[_questionId=0]').removeClass().addClass('guessing-list active');
                    $('ul[_questionId=1]').removeClass().addClass('guessing-list active');
                }

                if (status == 0) { //未开则默认为0
                    $('#match_min').html('');
                    $('.palytime').hide();
                    $("#vsSpan").hide();
                    $('#match_curr_time').html('');
                    min = 0;
                } else if (status == -1) {
                    $('#match_min').html($('#match_over_all').val());
                    $('.palytime').hide();
                    $("#vsSpan").show();
                    //如果已完场，则清除所有事件
                    animation.out_all_event();
                    setTimeout(function(){
                      animation.over();
                    },500);
                } else {
                    if (min != null && min != 'null') {
                        $('.palytime').show();
                        $("#vsSpan").hide();
                        if (status == 1) { //上半场
                            var lackUp = parseInt(min) - 45;
                            if (lackUp > 0) {
                                $('#match_min').html("45+" + lackUp + "'");
                                $('#match_curr_time').html("45+" + lackUp + "'");
                            } else {
                                $('#match_min').html(min + "'");
                                $('#match_curr_time').html(min + "'");
                            }
                        } else if (status == 3) { //下半场
                            var lackDown = parseInt(min) - 90;
                            if (lackDown > 0) {
                                $('#match_min').html("90+" + lackDown + "'");
                                $('#match_curr_time').html("90+" + lackDown + "'");
                            } else {
                                $('#match_min').html(min + "'");
                                $('#match_curr_time').html(min + "'");
                            }
                        } else if (status == 2) { //中场
                            $('.palytime').hide();
                            $("#vsSpan").hide();
                            var lackMid = parseInt(min) - 45;
                            if (lackMid > 0) {
                                $('#match_min').html("45+" + lackMid + "'");
                                $('#match_curr_time').html("45+" + lackMid + "'");
                            } else {
                                $('#match_min').html(min + "'");
                                $('#match_curr_time').html(min + "'");
                            }
                        } else {
                            $('#match_min').html(min + "'");
                            $('#match_curr_time').html(min + "'");
                        }
                    }
                }

                if (status == 3 || status == 4 || status == 5 || status == -1) {
                    $('#down_data_count').show();
                    $('#up_data_count').show();
                } else {
                    $('#down_data_count').hide();
                    $('#up_data_count').hide();
                }

                if (min != null && min != 'null') {
                    var rate = Math.floor((parseInt(min) * 60) / 54);
                    if ((status == 1 || status == 2) && rate > 50) {
                        rate = 50;
                    } else if (rate > 100) {
                        rate = 110;
                    } else {
                        rate = rate;
                    }
                    $('#progress_bar').css('width', rate + '%');
                }
            }
        },
        //直播后
        liveAfter: function(data) {
            animation.over();
            queryMatchInfo.initInfo(data);
            var scHomeScore = 0,
                scGuestScore = 0;

              if(homeScore != null || guestScore != null){
                  scHomeScore = homeScore;
                  scGuestScore = guestScore;
              }else{
                queryMatchInfo.getScore(data);
                scHomeScore = sessionStorage.getItem('homeScore');
                scGuestScore = sessionStorage.getItem('guestScore');
              }
                $("#z-socre").html(scHomeScore);
                $("#v-socre").html(scGuestScore);
                $("#vsSpan").show();

        },
        //初始化基本信息
        initInfo: function(data) {
            $("#trailer .left .picbox img").attr("src", data.homeTeamInfo.url);
            $("#trailer .left .t-name").html(data.homeTeamInfo.name);

            $("#trailer .right .picbox img").attr("src", data.guestTeamInfo.url);
            $("#trailer .right .t-name").html(data.guestTeamInfo.name);
            var dataHomeTeamInfo = {
                    url: data.homeTeamInfo.url,
                    name: data.homeTeamInfo.name
                },
                dataGuestTeamInfo = {
                    url: data.guestTeamInfo.url,
                    name: data.guestTeamInfo.name
                };
            sessionStorage.setItem('homeTeamInfo', JSON.stringify(dataHomeTeamInfo));
            sessionStorage.setItem('guestTeamInfo', JSON.stringify(dataGuestTeamInfo));

            $(".h-t p").html(data.homeTeamInfo.name);
            $(".v-t p").html(data.guestTeamInfo.name);
            $(".rule-h p").html(data.homeTeamInfo.name);
            $(".rule-v p").html(data.guestTeamInfo.name);
            $("#z-name").html(data.homeTeamInfo.name);
            $("#v-name").html(data.guestTeamInfo.name);
            //图片404默认处理
            $("#trailer .left .picbox img").error(function(){
              $(this).attr('src','/images/live/vs_logo1.png');
            });
            $("#trailer .right .picbox img").error(function(){
              $(this).attr('src','/images/live/vs_logo2.png');
            });


        },
        //获取比分
        getScore:function(data){
          var matchLive = data.matchInfo.matchLive;
          for(var i in matchLive){
            if(matchLive[i].homeScore != null && matchLive[i].guestScore != null){
              sessionStorage.setItem('homeScore',matchLive[i].homeScore);
              sessionStorage.setItem('guestScore',matchLive[i].guestScore);
              break;
            }else{
              sessionStorage.setItem('homeScore',0);
              sessionStorage.setItem('guestScore',0);
            }
          }
        }
    };


    //初始化socket
    var socketObj = {
        init: function() {
            var connection = Stomp.client(config.socket_url);
            var headers = {
                'login': config.username,
                'passcode': config.password
                    //'client-id': clientId
            };
            connection.heartbeat.outgoing = 10000;
            connection.heartbeat.incoming = 10000;
            connection.connect(headers, function(frame) {
                this.subscribe(config.distination.basketball, function(message) {
                    // console.log("body:" + message.body);
                    var data = JSON.parse(message.body);
                    match.refresh_animation(data.data);
                    match.refresh_score(data); //实时加载比分、状态和赛事时间
                });
            });
        },
        message: function(e) {},
        open: function() {},
        close: function() {},
        error: function() {}
    };


    /*
     * 赛事数据直播
     */
    var cancels = [1030, 1046, 1047, 1048, 1049, 1050, 2054, 2070, 2071, 2072, 2073, 2074];
    var choseEvent = [0, 1, 20, 10, 11, 14, 15, 4, 18, 19, 2049, 2055, 2056, 2058, 2079, 2053, 1025, 1029, 1032, 1034, 1055, 1031, 1045, 2069];
    homeAttackCount = 999; //主队进攻
    guestAttackCount = 999; //客队进攻
    homeDanAttackCount = 999; //主队危险进攻
    guestDanAttackCount = 999; //客队危险进攻
    homeBall = 999; //主队球权
    guestBall = 999; //客队球权

    var match = {
        init: function() {

            $('#zcxx_status').val('0');
            $('#bsxx_status').val('0');
            // $('a[tabId=2]').css({
            //     color: 'yellow'
            // }); //设置足球比分选中
            match.init_online(); //初始化直播数据
            match.init_last_anmiation();


        },
        //初始化最后一次动画直播
        init_last_anmiation: function() {
            var am = $('#last_event').html();
            if (am != null && am != "") {
                am = eval("(" + am + ")");
                if (am.code == 1029 || am.code == 2053) { //进球
                    match.load_first_goal(am);
                } else if (am.code == 1028) { //任意球
                    animation.fkz();
                } else if (am.code == 2052) { //任意球
                    animation.fkk();
                } else if (am.code == 1027) { //危险任意球
                    animation.dfkz();
                } else if (am.code == 2051) { //危险任意球
                    animation.dfkk();
                } else {
                    match.refresh_animation(am);
                }
            }
        },
        //首次加载进球动画
        load_first_goal: function(obj) {
            var score = obj.playInfo;
            var home_score = score.split(':')[0];
            var guest_score = score.split(':')[1];
            $('#load_first_goal h3').html(common.format_date(obj.time));
            $('#home_score_first_panel').html(home_score);
            $('#guest_score_first_panel').html(guest_score);
            if (obj.code == 1029) { //主队进球
                animation.goalz();
            }
            if (obj.code == 2053) { //客队进球
                animation.goalk();
            }
            animation.loadfirstgoal();
            setTimeout(function() {
                $(".load_first_goal").fadeOut("slow");
            }, 2000);
        },

        //初始化文字直播数据
        init_online: function() {
            //初始化获取所有事件图标
            $.each($('.matches tbody tr'), function(i, o) {
                var code = $(o).find('td[_flag=showImg]').attr('_code');
                var time = $(o).find('td[_flag=showImg]').attr('_time');
                var enNum = $(o).find('td[_flag=showImg]').attr('_num');
                var reEnNum = $(o).find('td[_flag=showImg]').attr('_renum');
                var state = $(o).find('td[_flag=showImg]').attr('_state');
                var td = match.show_img(code, time, enNum, reEnNum, state);
                $(o).find('td[_flag=showImg]').html(td);
            });
            //格式化所有时间
            $.each($('.ml-td4'), function(i, o) {
                var state = $(o).attr('_state');
                var time = $(o).html();
                var tm = common.format_time(time);
                var dt = common.format_time_add(tm, state);
                $(o).html(dt);
            });
            match.set_middle_data();
            match.format_corner(-1);
        },
        set_middle_data: function() {
            //设置比赛开始、加时开始、点球开始、全场结束的显示
            $.each($('tr[_flag=m_start]'), function(i, o) {
                if ($('tr[_flag=m_start]').length > 1) {
                    $(o).remove();
                }
            });
            $.each($('tr[_flag=m_half_end]'), function(i, o) {
                if ($('tr[_flag=m_half_end]').length > 1) {
                    $(o).remove();
                }
            });
            $.each($('tr[_flag=m_time_start]'), function(i, o) {
                if ($('tr[_flag=m_time_start]').length > 1) {
                    $(o).remove();
                }
            });
            $.each($('tr[_flag=m_kick_start]'), function(i, o) {
                if ($('tr[_flag=m_kick_start]').length > 1) {
                    $(o).remove();
                }
            });
            $.each($('tr[_flag=m_over]'), function(i, o) {
                if ($('tr[_flag=m_over]').length > 1) {
                    $(o).remove();
                }
            });
        },
        //格式化角球
        //计算角球数量
        format_corner: function(code) {
            //格式化角球
            var num = 0;
            if (code != -1) {
                num = match.compute_corner(code);
            } else {
                num = $('#cornerNumber').val();
            }
            match.format_all_corner(num);
            match.format_total_corner(num);

        },
        //格式化所有统计中的角球
        format_all_corner: function(num) {
            var cna = parseInt(num);
            $.each($('#language_online tr'), function(i, o) {
                var code = $(o).find('td[_flag=showImg]').attr('_code');
                if (code == 1025 || code == 2049) {
                    if (code == 1025) {
                        //$(o).find('.ml-td2').html('第'+cna+"个角球");
                        $('#corner_num').html(cna);
                        $(o).find('.ml-td2').html($('#match_corner_num').html());
                        cna--
                    }
                    if (code == 2049) {

                        $('#corner_num').html(cna);
                        $(o).find('.ml-td6').html($('#match_corner_num').html());

                        //$(o).find('.ml-td6').html('第'+cna+"个角球");
                        cna--
                    }
                }
            });
        },
        //格式化角球统计中的角球
        format_total_corner: function(num) {
            var cn = parseInt(num);
            $.each($('#corner_online tr'), function(i, o) {
                var code = $(o).find('td[_flag=showImg]').attr('_code'); //获取编码
                if (code == 1025 || code == 2049) {
                    if (code == 1025) {
                        //$(o).find('.ml-td2').html('第'+cn+"个角球");
                        $('#corner_num').html(cn);
                        $(o).find('.ml-td2').html($('#match_corner_num').html());
                        cn--
                    }
                    if (code == 2049) {
                        //$(o).find('.ml-td6').html('第'+cn+"个角球");
                        $('#corner_num').html(cn);
                        $(o).find('.ml-td6').html($('#match_corner_num').html());
                        cn--
                    }
                }
            });
        },
        // //初始化数据统计
        // init_data_count: function() {
        //     var codes = $('#codes').val();
        //     if (codes != '') {
        //         codes = codes.substr(1, codes.length - 1);
        //         var cs = codes.split(',');
        //         for (var i = 0; i < cs.length; i++) {
        //             var code = cs[i].split('-');
        //             technology.tech_count(code[0], code[1]);
        //         };
        //     }
        // },

        init_bushi: function() {
            //初始化中场补时和终场补时事件
            $.each($('#home_div i[_flag=101]'), function(i, o) {
                var code = $(o).attr('_code');
                if (code == 1025 || code == 2049) { //角球
                    $(o).removeClass().addClass('corner-icon').addClass('ot' + i);
                }
                if (code == 1029 || code == 2053) { //进球
                    $(o).removeClass().addClass('goal-icon').addClass('ot' + i);
                }
                if (code == 1031 || code == 2055) { //点球
                    $(o).removeClass().addClass('penalty-icon').addClass('ot' + i);
                }
                if (code == 1032 || code == 2056) { //红牌
                    $(o).removeClass().addClass('red-card').addClass('ot' + i);
                }
                if (code == 1034 || code == 2058) { //黄牌
                    $(o).removeClass().addClass('yellow-card').addClass('ot' + i);
                }
            });
            $.each($('#guest_div i[_flag=101]'), function(i, o) {
                var code = $(o).attr('_code');
                if (code == 1025 || code == 2049) { //角球
                    $(o).removeClass().addClass('corner-icon').addClass('ot' + i);
                }
                if (code == 1029 || code == 2053) { //进球
                    $(o).removeClass().addClass('goal-icon').addClass('ot' + i);
                }
                if (code == 1031 || code == 2055) { //点球
                    $(o).removeClass().addClass('penalty-icon').addClass('ot' + i);
                }
                if (code == 1032 || code == 2056) { //红牌
                    $(o).removeClass().addClass('red-card').addClass('ot' + i);
                }
                if (code == 1034 || code == 2058) { //黄牌
                    $(o).removeClass().addClass('yellow-card').addClass('ot' + i);
                }
            });
            $.each($('#home_div i[_flag=50]'), function(i, o) {
                var code = $(o).attr('_code');
                if (code == 1025 || code == 2049) { //角球
                    $(o).removeClass().addClass('corner-icon').addClass('ot' + i);
                }
                if (code == 1029 || code == 2053) { //进球
                    $(o).removeClass().addClass('goal-icon').addClass('ot' + i);
                }
                if (code == 1031 || code == 2055) { //点球
                    $(o).removeClass().addClass('penalty-icon').addClass('ot' + i);
                }
                if (code == 1032 || code == 2056) { //红牌
                    $(o).removeClass().addClass('red-card').addClass('ot' + i);
                }
                if (code == 1034 || code == 2058) { //黄牌
                    $(o).removeClass().addClass('yellow-card').addClass('ot' + i);
                }
            });
            $.each($('#guest_div i[_flag=50]'), function(i, o) {
                var code = $(o).attr('_code');
                if (code == 1025 || code == 2049) { //角球
                    $(o).removeClass().addClass('corner-icon').addClass('ot' + i);
                }
                if (code == 1029 || code == 2053) { //进球
                    $(o).removeClass().addClass('goal-icon').addClass('ot' + i);
                }
                if (code == 1031 || code == 2055) { //点球
                    $(o).removeClass().addClass('penalty-icon').addClass('ot' + i);
                }
                if (code == 1032 || code == 2056) { //红牌
                    $(o).removeClass().addClass('red-card').addClass('ot' + i);
                }
                if (code == 1034 || code == 2058) { //黄牌
                    $(o).removeClass().addClass('yellow-card').addClass('ot' + i);
                }
            });
        },
        //计算角球数量
        compute_corner: function(code) {
            var c_num = parseInt($('#cornerNumber').val());
            if (code == 1025 || code == 2049) {
                c_num++
            }
            if (code == 1050 || code == 2074) {
                c_num--
            }
            $('#cornerNumber').val(c_num);
            return c_num;
        },


        //比分数据的加载
        refresh_score: function(data) {
            if (data != null && data != "null") {
                var dataArray = data.data;
                //全场比分
                var ssHomeScore = sessionStorage.getItem('homeScore');
                var ssGuestScore = sessionStorage.getItem('guestScore');
                var scHomeScore = dataArray.homeScore,
                    scGuestScore = dataArray.guestScore;

                if (scHomeScore != null && scGuestScore != null) {
                  scHomeScore = dataArray.homeScore;
                  sessionStorage.setItem('homeScore',scHomeScore);
                  scGuestScore = dataArray.guestScore;
                  sessionStorage.setItem('guestScore',scGuestScore);
                }else{
                  scHomeScore = ssHomeScore;
                  scGuestScore = ssGuestScore;
                }


                var sc = scHomeScore + "-" + scGuestScore; //全场比分

                // var half_sc = dataArray[2] + "-" + dataArray[3]; //半场比分

                // var all_sc = dataArray[0] + ":" + dataArray[1];
                // var all_half_sc = dataArray[2] + ":" + dataArray[3];

                //设置面板比分
                  $('#home_score_pause_panel').html(scHomeScore); //暂停比分
                $('#guest_score_pause_panel').html(scGuestScore); //暂停比分
                $('#home_score_half_panel').html(scHomeScore); //中场比分
                $('#guest_score_half_panel').html(scGuestScore); //中场比分

                $("#z-socre").html(scHomeScore);
                $("#v-socre").html(scGuestScore);

                var status = dataArray.state; //获取状态
                //显示半场比分
                if (status != 0 && status != -10 && status != -11 && status != -12 && status != -14 && status != 1 && status != 2) {
                    $('#show_half').show();
                } else {
                    $('#show_half').hide();
                }
                if (status == 0 || status == -10 || status == -11 || status == -12 || status == -14) {
                    $('#all_score').html("-");
                } else {
                    $('#all_score').html(sc);
                }
                // $('#half_score').html(half_sc);

                // $('#half_score_event').html(all_half_sc);
                // $('#score_event').html(all_sc);
                //获取比分进行到的时间点
                var min = parseInt((dataArray.time)/60000)+1;

                //判断状态
                if (status == 2) { //如果为中场休息的时候
                    var zcxx = $('#zcxx_status').val();
                    if (zcxx == 0) {
                        $('#zcxx_status').val('1');
                        //animation.gamehalf();
                        setTimeout(function() {
                            animation.gamehalf();
                        }, 500);
                    }
                } else {
                    $('#zcxx_status').val('0');
                    $(".game-half").fadeOut("fast");
                }

                //禁用竞猜上半场数据
                if (status == 2 || status == 3 || status == 4 || status == 5 || status == -1) {
                    $('ul[_questionId=2]').removeClass().addClass('guessing-list active');
                    $('ul[_questionId=3]').removeClass().addClass('guessing-list active');
                }

                //禁用竞猜全场数据
                if (status == -1) {
                    $('ul[_questionId=0]').removeClass().addClass('guessing-list active');
                    $('ul[_questionId=1]').removeClass().addClass('guessing-list active');
                }

                if (status == 0) { //未开则默认为0
                    $('#match_min').html('');
                    $('.palytime').hide();
                    $("#vsSpan").hide();
                    $('#match_curr_time').html('');
                    min = 0;
                } else if (status == -1) {
                    $('#match_min').html($('#match_over_all').val());
                    $('.palytime').hide();
                    $("#vsSpan").show();
                    //如果已完场，则清除所有事件
                    animation.out_all_event();
                    setTimeout(function(){
                      animation.over();
                    },500);
                } else {
                    if (min != null && min != 'null') {
                        $('.palytime').show();
                        $("#vsSpan").hide();
                        if (status == 1) { //上半场
                            var lackUp = parseInt(min) - 45;
                            if (lackUp > 0) {
                                $('#match_min').html("45+" + lackUp + "'");
                                $('#match_curr_time').html("45+" + lackUp + "'");
                            } else {
                                $('#match_min').html(min + "'");
                                $('#match_curr_time').html(min + "'");
                            }
                        } else if (status == 3) { //下半场
                            var lackDown = parseInt(min) - 90;
                            if (lackDown > 0) {
                                $('#match_min').html("90+" + lackDown + "'");
                                $('#match_curr_time').html("90+" + lackDown + "'");
                            } else {
                                $('#match_min').html(min + "'");
                                $('#match_curr_time').html(min + "'");
                            }

                        } else if (status == 2) { //中场
                            $('.palytime').hide();
                            $("#vsSpan").hide();
                            var lackMid = parseInt(min) - 45;
                            if (lackMid > 0) {
                                $('#match_min').html("45+" + lackMid + "'");
                                $('#match_curr_time').html("45+" + lackMid + "'");
                            } else {
                                $('#match_min').html(min + "'");
                                $('#match_curr_time').html(min + "'");
                            }
                        } else {
                            $('#match_min').html(min + "'");
                            $('#zcxx_status').val('0');
                            $(".game-half").fadeOut("fast");
                        }

                        //禁用竞猜上半场数据
                        if (status == 2 || status == 3 || status == 4 || status == 5 || status == -1) {
                            $('ul[_questionId=2]').removeClass().addClass('guessing-list active');
                            $('ul[_questionId=3]').removeClass().addClass('guessing-list active');
                        }

                        //禁用竞猜全场数据
                        if (status == -1) {
                            $('ul[_questionId=0]').removeClass().addClass('guessing-list active');
                            $('ul[_questionId=1]').removeClass().addClass('guessing-list active');
                        }

                        if (status == 0) { //未开则默认为0
                            $('#match_min').html('');
                            $('.palytime').hide();
                            $("#vsSpan").hide();
                            $('#match_curr_time').html('');
                            min = 0;
                        } else if (status == -1) {
                            $('#match_min').html($('#match_over_all').val());
                            $('.palytime').hide();
                            $("#vsSpan").show();
                            //如果已完场，则清除所有事件
                            animation.out_all_event();
                            setTimeout(function(){
                              animation.over();
                            },500);
                        } else {
                            if (min != null && min != 'null') {
                                $('.palytime').show();
                                $("#vsSpan").hide();
                                if (status == 1) { //上半场
                                    var lackUp = parseInt(min) - 45;
                                    if (lackUp > 0) {
                                        $('#match_min').html("45+" + lackUp + "'");
                                        $('#match_curr_time').html("45+" + lackUp + "'");
                                    } else {
                                        $('#match_min').html(min + "'");
                                        $('#match_curr_time').html(min + "'");
                                    }
                                } else if (status == 3) { //下半场
                                    var lackDown = parseInt(min) - 90;
                                    if (lackDown > 0) {
                                        $('#match_min').html("90+" + lackDown + "'");
                                        $('#match_curr_time').html("90+" + lackDown + "'");
                                    } else {
                                        $('#match_min').html(min + "'");
                                        $('#match_curr_time').html(min + "'");
                                    }
                                } else if (status == 2) { //中场
                                    $('.palytime').hide();
                                    $("#vsSpan").hide();
                                    var lackMid = parseInt(min) - 45;
                                    if (lackMid > 0) {
                                        $('#match_min').html("45+" + lackMid + "'");
                                        $('#match_curr_time').html("45+" + lackMid + "'");
                                    } else {
                                        $('#match_min').html(min + "'");
                                        $('#match_curr_time').html(min + "'");
                                    }
                                } else {
                                    $('#match_min').html(min + "'");
                                    $('#match_curr_time').html(min + "'");
                                }
                            }
                        }

                        if (status == 3 || status == 4 || status == 5 || status == -1) {
                            $('#down_data_count').show();
                            $('#up_data_count').show();
                        } else {
                            $('#down_data_count').hide();
                            $('#up_data_count').hide();
                        }

                        if (min != null && min != 'null') {
                            var rate = Math.floor((parseInt(min) * 60) / 54);
                            if ((status == 1 || status == 2) && rate > 50) {
                                rate = 50;
                            } else if (rate > 100) {
                                rate = 110;
                            } else {
                                rate = rate;
                            }
                            $('#progress_bar').css('width', rate + '%');
                        }
                    }

                }
            }
        },

        //获取直播图标(实况数据)
        show_img: function(code, time, num, renum, state) {
            var td = "";
            var _dt = common.fomatFloat((time / 1000) / 54, 1);
            if (state == 1) { //如果是上半场或者中场，则最长只能在45分钟
                if (_dt > 50) {
                    _dt = 50;
                }
            } else {
                if (_dt > 100) {
                    _dt = 101;
                }
            }
            var tt = common.format_time(time);
            //var rs = common.format_time_add(tt, state);
            if (code == 1055) { //换人(替补)
                td = "<i name=\"zicon\" class=\"sub-icon\" title=\"" + $('#progress_substitution').val() + "\" _num=\"" + num + "\" _renum=\"" + renum + "\" _code=\"" + code + "\" style=\"left:" + _dt + "%\" _flag=\"" + _dt + "\" _time=\"" + time + "\" _date=\"" + tt + "\"></i>";
            }
            if (code == 1029) { //进球
                td = "<i name=\"zicon\" class=\"goal-icon\" title=\"" + $('#progress_goal').val() + "\" _num=\"" + num + "\" _renum=\"" + renum + "\" _code=\"" + code + "\" style=\"left:" + _dt + "%\" _flag=\"" + _dt + "\" _time=\"" + time + "\" _date=\"" + tt + "\"></i>";
            }
            if (code == 1025) { //角球
                td = "<i name=\"zicon\" class=\"corner-icon\" title=\"" + $('#progress_corner').val() + "\" _num=\"" + num + "\" _renum=\"" + renum + "\" _code=\"" + code + "\" style=\"left:" + _dt + "%\" _flag=\"" + _dt + "\" _time=\"" + time + "\" _date=\"" + tt + "\"></i>";
            }
            if (code == 1032) { //红牌
                td = "<i name=\"zicon\" class=\"red-card\" title=\"" + $('#progress_red').val() + "\" _num=\"" + num + "\" _renum=\"" + renum + "\" _code=\"" + code + "\" style=\"left:" + _dt + "%\" _flag=\"" + _dt + "\" _time=\"" + time + "\"\" _date=\"" + tt + "\"></i>";
            }
            if (code == 1034) { //黄牌
                td = "<i name=\"zicon\" class=\"yellow-card\" title=\"" + $('#progresgresgress_yellow').val() + "\" _num=\"" + num + "\" _renum=\"" + renum + "\" _code=\"" + code + "\" style=\"left:" + _dt + "%\" _flag=\"" + _dt + "\" _time=\"" + time + "\" _date=\"" + tt + "\"></i>";
            }
            if (code == 1031) {
                // me = \"" + time + "\" _date=\"" + tt + "\"></i>";
            }
            if (code == 1031) {
                // me = \"" + time + "\" _date=\"" + tt + "\"></i>";
            }
            if (code == 1031) { //点球(罚球)
            } else {
                $('#zcxx_status').val('0');
                $(".game-half").fadeOut("fast");
            }

            //禁用竞猜上半场数据
            if (status == 2 || status == 3 || status == 4 || status == 5 || status == -1) {
                $('ul[_questionId=2]').removeClass().addClass('guessing-list active');
                $('ul[_questionId=3]').removeClass().addClass('guessing-list active');
            }

            //禁用竞猜全场数据
            if (status == -1) {
                $('ul[_questionId=0]').removeClass().addClass('guessing-list active');
                $('ul[_questionId=1]').removeClass().addClass('guessing-list active');
            }

            if (status == 0) { //未开则默认为0
                $('#match_min').html('');
                $('.palytime').hide();
                $("#vsSpan").hide();
                $('#match_curr_time').html('');
                min = 0;
            } else if (status == -1) {
                $('#match_min').html($('#match_over_all').val());
                $('.palytime').hide();
                $("#vsSpan").show();
                //如果已完场，则清除所有事件
                animation.out_all_event();
                setTimeout(function(){
                  animation.over();
                },500);
            } else {
                if (min != null && min != 'null') {
                    $('.palytime').show();
                    $("#vsSpan").hide();
                    if (status == 1) { //上半场
                        var lackUp = parseInt(min) - 45;
                        if (lackUp > 0) {
                            $('#match_min').html("45+" + lackUp + "'");
                            $('#match_curr_time').html("45+" + lackUp + "'");
                        } else {
                            $('#match_min').html(min + "'");
                            $('#match_curr_time').html(min + "'");
                        }
                    } else if (status == 3) { //下半场
                        var lackDown = parseInt(min) - 90;
                        if (lackDown > 0) {
                            $('#match_min').html("90+" + lackDown + "'");
                            $('#match_curr_time').html("90+" + lackDown + "'");
                        } else {
                            $('#match_min').html(min + "'");
                            $('#match_curr_time').html(min + "'");
                        }
                    } else if (status == 2) { //中场
                        $('.palytime').hide();
                        $("#vsSpan").hide();
                        var lackMid = parseInt(min) - 45;
                        if (lackMid > 0) {
                            $('#match_min').html("45+" + lackMid + "'");
                            $('#match_curr_time').html("45+" + lackMid + "'");
                        } else {
                            $('#match_min').html(min + "'");
                            $('#match_curr_time').html(min + "'");
                        }
                    } else {
                        $('#match_min').html(min + "'");
                        $('#match_curr_time').html(min + "'");
                    }
                }
            }

            if (status == 3 || status == 4 || status == 5 || status == -1) {
                $('#down_data_count').show();
                $('#up_data_count').show();
            } else {
                $('#down_data_count').hide();
                $('#up_data_count').hide();
            }

            if (min != null && min != 'null') {
                var rate = Math.floor((parseInt(min) * 60) / 54);
                if ((status == 1 || status == 2) && rate > 50) {
                    rate = 50;
                } else if (rate > 100) {
                    rate = 110;
                } else {
                    rate = rate;
                }
                $('#progress_bar').css('width', rate + '%');
            }

            setTimeout(function() {
                match.refresh_score()
            }, 1000);

        },

        getProgressDesc: function(code) {
            var desc;
            if (code == 1025 || code == 2049) {
                //desc = "角球";
                desc = $('#progress_corner').val();
            }
            if (code == 1029 || code == 2053) {
                //desc = "进球";
                desc = $('#progress_goal').val();
            }
            if (code == 1031 || code == 2055) {
                //desc = "点球";
                desc = $('#progress_penalty').val();
            }
            if (code == 1032 || code == 2056) {
                //desc = "红牌";
                desc = $('#progress_red').val();
            }
            if (code == 1034 || code == 2058) {
                //desc = "黄牌";
                desc = $('#progress_yellow').val();
            }
            if (code == 1045 || code == 2069) {
                //desc = "红黄牌";
                desc = $('#progress_yellow_red').val();
            }
            return desc;
        },
        //实时加载动画消息
        refresh_animation: function(obj) {
            var code = obj.code,state = obj.state;
            if(state != 0){
              $("#trailer").hide();
              $("#team-z").show();
              $("#team-v").show();
            }

            if(code == 10){//比赛开始
              animation.start();
            }
            if (code == 1024) { //主队进攻
                animation.atz();
            }
            if (code == 2048) { //客队进攻
                animation.atk();
            }
            if (code == 1026) { //主队危险进攻
                animation.danAtz();
            }
            if (code == 2050) { //客队危险进攻
                animation.danAtk();
            }
            if (code == 1028) { //主队任意球
                setTimeout(function() {
                    animation.fkz()
                }, 2000);
                //animation.fkz();
            }
            if (code == 2052) { //客队任意球
                setTimeout(function() {
                    animation.fkk()
                }, 2000);
                //animation.fkk();
            }
            if (code == 1027) { //主队危险任意球
                setTimeout(function() {
                    animation.dfkz()
                }, 4000);
                //animation.dfkz();
            }
            if (code == 2051) { //客队危险任意球
                setTimeout(function() {
                    animation.dfkk()
                }, 4000);
                //animation.dfkk();
            }
            if (code == 1054) { //主队丢界外球
                animation.obz();
            }
            if (code == 2078) { //客队丢界外球
                animation.obk();
            }
            if (code == 1025) { //主队角球
                animation.cornerz();
            }
            if (code == 2049) { //客队角球
                animation.cornerk();
            }
            if (code == 1050) { //主队角球取消
                animation.ccz();
            }
            if (code == 2074) { //客队角球取消
                animation.cck();
            }
            if (code == 1053) { //主队球门球
                animation.kickz();
            }

            if (code == 2077) { //客队球门球
                animation.kickk();
            }
            if (code == 1029) { //主队进球
                animation.goalz();
                match.show_score_home_panel(obj);
                //setTimeout(function(){match.show_score_home_panel(obj);},5000);
            }
            if (code == 2053) { //客队进球
                animation.goalk();
                match.show_score_guest_panel(obj);
                //setTimeout(function(){$('#goal-score').hide()},5000);
            }
            if (code == 1030) { //主队进球取消
                animation.cgoalz();
            }
            if (code == 2054) { //客队进球取消
                animation.cgoalk();
            }
            if (code == 1031) { //主队点球
                animation.penaltyz();
            }
            if (code == 2055) { //客队点球
                animation.penaltyk();
            }
            if (code == 1049) { //主队点球取消
                animation.penaltycz();
            }
            if (code == 2073) { //客队点球取消
                animation.penaltyck();
            }
            if (code == 1059) { //主队重罚点球
                animation.penaltyaz();
            }
            if (code == 2083) { //客队重罚点球
                animation.penaltyak();
            }
            if (code == 1060) { //主队罚丢点球
                animation.penaltylz();
            }
            if (code == 2084) { //客队罚丢点球
                animation.penaltylk();
            }
            if (code == 1042) { //主队犯规
                animation.foulz();
            }
            if (code == 2066) { //客队犯规
                animation.foulk();
            }
            if (code == 1055) { //主队换人
                //animation.subz();
                match.show_home_sub(obj);
            }
            if (code == 2079) { //客队换人
                //animation.subk();
                match.show_guest_sub(obj);
            }
            if (code == 1039) { //主队射正球门
                animation.shootinz();
            }
            if (code == 2063) { //客队射正球门
                animation.shootink();
            }
            if (code == 1040) { //主队射偏球门
                animation.shootoutz();
            }
            if (code == 2064) { //客队射偏球门
                animation.shootoutk();
            }
            if (code == 1041) { //主队射中门框
                animation.zshootoutz();
            }
            if (code == 2065) { //客队射中门框
                animation.zshootoutk();
            }
            if (code == 1043) { //主队越位
                animation.offsidez();
            }
            if (code == 2067) { //客队越位
                animation.offsidek();
            }
            if (code == 1034 || code == 628) { //主队黄牌
                animation.yellowcardz();
            }
            if (code == 2058 || code == 629) { //客队黄牌
                animation.yellowcardk();
            }
            if (code == 1032 || code == 607 || code == 609) { //主队红牌
                animation.redcardz();
            }
            if (code == 2056 || code == 608 || code == 610) { //客队红牌
                animation.redcardk();
            }
            if (code == 1045) { //主队红黄牌
                animation.yellowredcardz();
            }
            if (code == 2069) { //客队红黄牌
                animation.yellowredcardk();
            }
            if (code == 1046) { //取消主队红黄牌
                animation.cycardz();
            }
            if (code == 2070) { //取消客队红黄牌
                animation.cycardk();
            }
            if (code == 1048) { //主队取消黄牌
                animation.yellowcardcz();
            }
            if (code == 2072) { //客队取消黄牌
                animation.yellowcardcz();
            }
            if (code == 1047) { //主队取消红牌
                animation.redcardcz();
            }
            if (code == 2071) { //客队取消红牌
                animation.redcardck();
            }
            if (code == 0) { //开始比赛
                animation.start();
            }
            if (code == 149) { //比赛暂停
                animation.pause();
            }
            if (code == 1) { //半场结束
                //animation.gamehalf();
                //如果是不是上半场，则禁用竞猜
                if (status != 1) {
                    $('ul[_questionId=2]').removeClass().addClass('guessing-list active');
                    $('ul[_questionId=3]').removeClass().addClass('guessing-list active');
                }
            }
            if (code == 2) { //下半场开始
                animation.start();
            }

            if (code == 20) { //全场结束
                animation.over();
            }
            if (code == 132 || code == 302 || code == 303 || code == 304 || code == 305 || code == 306 || code == 308 || code == 309 || code == 310 || code == 311 || code == 313 || code == 315 || code == 317 || code == 339 || code == 417 || code == 1 || code == 3) { //比赛中止

                animation.gamestop();
                if(state == -1){
                  //如果已完场，则清除所有事件
                  animation.out_all_event();
                  setTimeout(function(){
                    animation.over();
                  },500);
                }
            }
            if (code == 260) { //伤停补时
                var ad = obj.playInfo;
                if (ad != null && ad != '' && ad != 0) {
                    $('#stbs_time').html(obj.playInfo + "'");
                }
                animation.stbs();
            }
        },
        //展示球场主队进球比分面板
        show_score_home_panel: function(obj) {
          var score = obj;
          var home_score = score.homeScore;
          var guest_score = score.guestScore;
            $('#goal-score h3').html(common.format_date(obj.time));
            $('#old_home_score').html($('#new_home_score').html());
            $('#old_guest_score').html(guest_score);
            $('#new_home_score').html(home_score);
            animation.scorez();
            setTimeout(function() {
                $(".goal-score").fadeOut("slow");
            }, 2000);
        },
        //展示球场客队进球比分面板
        show_score_guest_panel: function(obj) {
            var score = obj;
            var home_score = score.homeScore;
            var guest_score = score.guestScore;
            $('#goal-score h3').html(common.format_date(obj.time));
            $('#old_home_score').html(home_score);
            $('#old_guest_score').html($('#new_guest_score').html());
            $('#new_guest_score').html(guest_score);
            animation.scorek();
            setTimeout(function() {
                $(".goal-score").fadeOut("slow");
            }, 2000);
        },
        //主队换人
        show_home_sub: function(obj) {
            var sub = obj.playInfo;
            var homeSub = sub.split(':')[0];
            var homeSubFor = sub.split(':')[1];
            $('#home_sub').html(homeSub);
            $('#home_sub_for').html(homeSubFor);
            animation.subz();
        },
        //客队换人
        show_guest_sub: function(obj) {
            var sub = obj.playInfo;
            var guestSub = sub.split(':')[0];
            var guestSubFor = sub.split(':')[1];
            $('#guest_sub').html(guestSub);
            $('#guest_sub_for').html(guestSubFor);
            animation.subk();
        }
    };
    /*
     * 公共方法
     */
    var common = {
        //格式化时间
        format_time: function(time) {
            var dt = Math.ceil((time / 1000) / 60);
            return dt;
        },
        //格式化时间，设置补时为+
        //time为格式化的时间
        format_time_add: function(time, status) {
            var result;
            if (status == 1) { //上半场
                var lackUp = parseInt(time) - 45;
                if (lackUp > 0) {
                    result = "45+" + lackUp + "'";
                } else {
                    result = time + "'";
                }
            } else if (status == 3) { //下半场
                var lackDown = parseInt(time) - 90;
                if (lackDown > 0) {
                    result = "90+" + lackDown + "'";
                } else {
                    result = time + "'";
                }
            } else if (status == 2) { //中场
                var lackMid = parseInt(time) - 45;
                if (lackMid > 0) {
                    result = "45+" + lackMid + "'";
                } else {
                    result = time + "'";
                }
            } else {
                result = time + "'";
            }
            return result;
        },
        //格式化比例，保留小数点
        fomatFloat: function(src, pos) {
            return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
        },
        //格式化时间，确定时分
        format_date: function(time) {
            var min = 0;
            var second = 0;
            var total_second = parseFloat(time) / 1000; //总秒数
            if (total_second >= 60) {
                min = parseInt(parseFloat(total_second) / 60);
                second = parseInt(total_second - (min * 60));
            } else {
                second = parseInt(total_second);
            }
            if (parseInt(min) < 10) {
                min = "0" + min;
            }
            if (parseInt(second) < 10) {
                second = "0" + second;
            }
            var dt = min + ":" + second;
            return dt;
        },
        format_str: function(str) {
            if (str != null) {
                str = str.replace(/\r|\n/ig, "");
                return str;
            } else {
                return null;
            }
        },
        //根据状态区分上下半场
        diff: function(state) {
            var status = "";
            if (state == 1) {
                status = 1;
            }
            if (state == 3 || state == 4) {
                status = 3;
            }
            return status;
        },
        contains: function(lists, ele) {
            for (var i = 0; i < lists.length; i++) {
                if (lists[i] == ele) {
                    return true;
                }
            }
        }
    };
    /*
     * 点赞及竞猜
     */
    var guess = {
        init_like: function() {
            //初始化点赞
            var like1 = parseInt($("#likeCount1").html());
            var like2 = parseInt($("#likeCount2").html());
            $("#whiteline").animate({
                width: 0,
                left: "500px"
            }, 500, function() {
                $("#vsicon").filter(function(index) {
                    $("#likeCount1").html(like1);
                    $("#likeCount2").html(like2);
                    var newLeft = parseInt(like1) / (parseInt(like1) + parseInt(like2)) * 1000 - 13 + "px";
                    $("#vsicon").animate({
                        left: newLeft
                    }, 500);
                    $("#redline").animate({
                        width: newLeft
                    }, 500);
                });
            });

            //点赞点击事件
            var like3 = $("#likeCount1").html();
            var b = 1;
            $('body').on("click", '.heart', function() {
                if (b == 1) {
                    var like3 = $(this).attr("id");
                    if (like3 === 'like1') {
                        $("#likeCount1").html(like1 + 1);
                        like1++;
                        $(this).addClass("heartAnimation").attr("rel", "unlike");
                        var newLeft = like1 / (like1 + like2) * 1000 - 13 + "px";
                        $("#vsicon").animate({
                            left: newLeft
                        }, 500);
                        $("#redline").animate({
                            width: newLeft
                        }, 500);
                    }
                    var like4 = $(this).attr("id");
                    if (like4 === 'like2') {
                        $("#likeCount2").html(like2 + 1);
                        like2++;
                        $(this).addClass("heartAnimation").attr("rel", "unlike");
                        var newLeft = like1 / (like1 + like2) * 1000 - 13 + "px";
                        $("#vsicon").animate({
                            left: newLeft
                        }, 500);
                        $("#redline").animate({
                            width: newLeft
                        }, 500);
                    } else {}
                    b = 0;
                    guess.like();
                }
            });
        },
        //点赞
        like: function() {
            var matchId = $('#matchId').val();
            var home_like = $('#likeCount1').html();
            var guest_like = $('#likeCount2').html();
            $.ajax({
                type: "POST",
                url: liveBase + "scoreOnline.ajaxlikeTeam.do",
                dataType: "json",
                cache: false,
                data: {
                    "lang": lang,
                    "matchId": matchId,
                    "homeNum": home_like,
                    "guestNum": guest_like
                },
                async: true,
                success: function(data) {

                },
                error: function() {

                }
            });
        },
        //竞猜
        guessGame: function() {
            $.each($('#guess_choice dd ul > li'), function(i, o) {
                $(o).bind('click', function() {
                    if ($(this).parent('ul').attr('class') == 'guessing-list') {
                        $(this).parent('ul').addClass('active');
                        //当前对象的数量+1
                        var num = $(this).find('i[class=sp-ndy]').html();
                        num = parseInt(num) + 1;
                        $(this).find('i[class=sp-ndy]').html(num);
                        //获取赛事编号和问题编号
                        var matchId = $('#matchId').val();
                        var questionId = $(this).parent('ul').attr('_questionId');
                        var answerFlag = $(this).find('i[class=sp-ndy]').attr('_answer'); //获取答案编号
                        var answer = num; //数量

                        guess.guess_total($(o));

                        $.ajax({
                            type: "POST",
                            url: liveBase + "scoreOnline.ajaxGuessTeam.do",
                            dataType: "json",
                            cache: false,
                            data: {
                                "lang": lang,
                                "matchId": matchId,
                                "answerFlag": answerFlag,
                                "answer": answer,
                                "questionId": questionId
                            },
                            async: true,
                            success: function(data) {
                                //console.log(data);
                            },
                            error: function() {
                                //console.log('提交出问题啦!');
                            }
                        });
                    }
                });
            });
        },
        //点击事件竞猜数据的计算
        guess_total: function(obj) {
            var total = guess.guess_compute($(obj).parent());
            guess.guess_data($(obj).parent(), total);
        },
        guess_compute: function(obj) {
            var total = 0;
            $.each($(obj).children('li'), function(i, o) {
                var num = $(o).find('i[class=sp-ndy]').html();
                total = parseInt(total) + parseInt(num);
            });
            return total;
        },
        guess_data: function(obj, total) {
            $.each($(obj).children('li'), function(i, o) {
                var num = $(o).find('i[class=sp-ndy]').html();
                var percent;
                if (total != 0) {
                    percent = (parseInt(num) / parseInt(total)) * 100;
                    percent = percent.toFixed(1);
                } else {
                    percent = 0.0;
                }
                $(o).find('div[class=support]').css('width', percent + '%');
                $(o).find('em[_per=percent]').html(percent + "%");
            });
        }
    };

    /*
     * 技术数据统计
     */
    var technology = {
        //技术统计实现 code:事件编号   status：赛事状态  0:上半场   1：下半场
        tech_count: function(code, state) {

            if (state != 5) { //点球数据不需要统计
                var status = common.diff(state);

                if (code == 1029 || code == 2053) { //进球
                    technology.goal(code, status);
                }
                if (code == 1025 || code == 2049) { //角球
                    technology.corner(code, status);
                }
                if (code == 1024 || code == 2048) { //进攻
                    technology.attack(code);
                }
                if (code == 1026 || code == 2050) { //危险进攻
                    technology.dangetAttack(code);
                }
                if (code == 1039 || code == 2063) { //射正球门
                    technology.shotOn(code);
                }
                if (code == 1040 || code == 2064) { //射偏球门
                    technology.shotOff(code);
                }
                if (code == 1041 || code == 2065) { //射中门框
                    technology.shotOnDoor(code);
                }
                if (code == 1028 || code == 2052) { //任意球
                    technology.freeKick(code);
                }
                if (code == 1027 || code == 2051) { //危险任意球
                    technology.danFreeKick(code);
                }
                if (code == 1053 || code == 2077) { //球门球
                    technology.goalKick(code);
                }
                if (code == 1043 || code == 2067) { //越位次数
                    technology.offsideCount(code);
                }
                if (code == 1042 || code == 2066) { //犯规
                    technology.foul(code);
                }
                if (code == 1031 || code == 2055) { //点球
                    technology.foulKick(code, status);
                }
                if (code == 1032 || code == 2056 || code == 607 || code == 608 || code == 609 || code == 610) { //红牌
                    technology.redCard(code, status);
                }
                if (code == 1045 || code == 2069) { //红黄牌
                    technology.redYellow(code, status);
                }
                if (code == 1034 || code == 2058 || code == 628 || code == 629) { //黄牌
                    technology.yellowCard(code, status);
                }
                if (code == 1030 || code == 2054) { //取消进球
                    technology.cancel_goal(code, status);
                }
                if (code == 1046 || code == 2070) { //取消红黄牌
                    technology.cancel_red_yellow(code, status);
                }
                if (code == 1047 || code == 2071) { //取消红牌
                    technology.cancel_red_card(code, status);
                }
                if (code == 1048 || code == 2072) { //取消黄牌
                    technology.cancel_yellow_card(code, status);
                }
                if (code == 1049 || code == 2073) { //取消点球
                    technology.cancel_foul_kick(code, status);
                }
                if (code == 1050 || code == 2074) { //取消角球
                    technology.cancel_carner(code, status);
                }
            }
        },

        goal: function(code, status) { //进球
            var homeCount = $('#ho_goal_num').html();
            var guestCount = $('#gu_goal_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_goal_num').html();
            var guestUpCount = $('#gu_up_goal_num').html();
            var homeDownCount = $('#ho_down_goal_num').html();
            var guestDownCount = $('#gu_down_goal_num').html();
            if (code == 1029) { //表主队进球
                homeCount = parseInt(homeCount) + 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) + 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) + 1;
                }
            }
            if (code == 2053) { //表客队进球
                guestCount = parseInt(guestCount) + 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) + 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) + 1;
                }
            }
            $('#ho_goal_num').html(homeCount);
            $('#gu_goal_num').html(guestCount);

            $('#ho_up_goal_num').html(homeUpCount);
            $('#gu_up_goal_num').html(guestUpCount);
            $('#ho_down_goal_num').html(homeDownCount);
            $('#gu_down_goal_num').html(guestDownCount);
        },
        corner: function(code, status) { //角球
            var homeCount = $('#ho_corner_num').html();
            var guestCount = $('#gu_corner_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_corner_num').html();
            var guestUpCount = $('#gu_up_corner_num').html();
            var homeDownCount = $('#ho_down_corner_num').html();
            var guestDownCount = $('#gu_down_corner_num').html();

            if (code == 1025) { //表主队角球
                homeCount = parseInt(homeCount) + 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) + 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) + 1;
                }
            }
            if (code == 2049) { //表客队角球
                guestCount = parseInt(guestCount) + 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) + 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) + 1;
                }
            }
            $('#ho_corner_num').html(homeCount);
            $('#gu_corner_num').html(guestCount);

            $('#ho_up_corner_num').html(homeUpCount);
            $('#gu_up_corner_num').html(guestUpCount);
            $('#ho_down_corner_num').html(homeDownCount);
            $('#gu_down_corner_num').html(guestDownCount);
        },
        attack: function(code) { //进攻
            if (code == 1024) { //表主队进攻
                if (homeAttackCount == 999) {
                    homeAttackCount = 0;
                }
                if (guestAttackCount == 999) {
                    guestAttackCount = 0;
                }
                homeAttackCount = parseInt(homeAttackCount) + 1;
            }
            if (code == 2048) { //表客队进攻
                if (homeAttackCount == 999) {
                    homeAttackCount = 0;
                }
                if (guestAttackCount == 999) {
                    guestAttackCount = 0;
                }
                guestAttackCount = parseInt(guestAttackCount) + 1;
            }
            $('#attack1').html(homeAttackCount);
            $('#attack2').html(guestAttackCount);
        },
        dangetAttack: function(code) { //危险进攻
            if (code == 1026) {
                if (homeDanAttackCount == 999) {
                    homeDanAttackCount = 0;
                }
                if (guestDanAttackCount == 999) {
                    guestDanAttackCount = 0;
                }
                homeDanAttackCount = parseInt(homeDanAttackCount) + 1;
            }
            if (code == 2050) {
                if (homeDanAttackCount == 999) {
                    homeDanAttackCount = 0;
                }
                if (guestDanAttackCount == 999) {
                    guestDanAttackCount = 0;
                }
                guestDanAttackCount = parseInt(guestDanAttackCount) + 1;
            }
            $('#danger1').html(homeDanAttackCount);
            $('#danger2').html(guestDanAttackCount);
        },
        shotOn: function(code) { //射正球门
            var homeCount = $('#ho_shot_on_num').html();
            var guestCount = $('#gu_shot_on_num').html();

            var homeShotCount = $('#ho_shot_num').html();
            var guestShotCount = $('#gu_shot_num').html();

            if (code == 1039) {
                homeCount = parseInt(homeCount) + 1;
                homeShotCount = parseInt(homeShotCount) + 1;
            }
            if (code == 2063) {
                guestCount = parseInt(guestCount) + 1;
                guestShotCount = parseInt(guestShotCount) + 1;
            }
            $('#ho_shot_on_num').html(homeCount);
            $('#gu_shot_on_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_shot_on_percent').css('width', homePercent);
            $('#gu_shot_on_percent').css('width', guestPercent);

            $('#ho_shot_num').html(homeShotCount);
            $('#gu_shot_num').html(guestShotCount);
            var homeShotPercent = Math.floor(parseInt(homeShotCount) * 100 / (parseInt(homeShotCount) + parseInt(guestShotCount))) + "%";
            var guestShotPercent = Math.floor(parseInt(guestShotCount) * 100 / (parseInt(homeShotCount) + parseInt(guestShotCount))) + "%";
            $('#ho_shot_percent').css('width', homeShotPercent);
            $('#gu_shot_percent').css('width', guestShotPercent);
        },
        shotOff: function(code) { //射偏球门
            var homeCount = $('#ho_shot_num').html();
            var guestCount = $('#gu_shot_num').html();
            if (code == 1040) {
                homeCount = parseInt(homeCount) + 1;
            }
            if (code == 2064) {
                guestCount = parseInt(guestCount) + 1;
            }
            $('#ho_shot_num').html(homeCount);
            $('#gu_shot_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_shot_percent').css('width', homePercent);
            $('#gu_shot_percent').css('width', guestPercent);
        },
        shotOnDoor: function(code) { //射中门框
            var homeCount = $('#ho_shot_num').html();
            var guestCount = $('#gu_shot_num').html();
            if (code == 1041) {
                homeCount = parseInt(homeCount) + 1;
            }
            if (code == 2065) {
                guestCount = parseInt(guestCount) + 1;
            }
            $('#ho_shot_num').html(homeCount);
            $('#gu_shot_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_shot_percent').css('width', homePercent);
            $('#gu_shot_percent').css('width', guestPercent);
        },
        freeKick: function(code) { //任意球
            var homeCount = $('#ho_free_num').html();
            var guestCount = $('#gu_free_num').html();
            if (code == 1028) {
                homeCount = parseInt(homeCount) + 1;
            }
            if (code == 2052) {
                guestCount = parseInt(guestCount) + 1;
            }
            $('#ho_free_num').html(homeCount);
            $('#gu_free_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_free_percent').css('width', homePercent);
            $('#gu_free_percent').css('width', guestPercent);
        },
        danFreeKick: function(code) { //危险任意球
            var homeCount = $('#ho_dangerous_free_num').html();
            var guestCount = $('#gu_dangerous_free_num').html();
            if (code == 1027) {
                homeCount = parseInt(homeCount) + 1;
            }
            if (code == 2051) {
                guestCount = parseInt(guestCount) + 1;
            }
            $('#ho_dangerous_free_num').html(homeCount);
            $('#gu_dangerous_free_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_dangerous_free_percent').css('width', homePercent);
            $('#gu_dangerous_free_percent').css('width', guestPercent);
        },
        goalKick: function(code) { //球门球
            var homeCount = $('#ho_goal_kick_num').html();
            var guestCount = $('#gu_goal_kick_num').html();
            if (code == 1053) {
                homeCount = parseInt(homeCount) + 1;
            }
            if (code == 2077) {
                guestCount = parseInt(guestCount) + 1;
            }
            $('#ho_goal_kick_num').html(homeCount);
            $('#gu_goal_kick_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_goal_kick_percent').css('width', homePercent);
            $('#gu_goal_kick_percent').css('width', guestPercent);
        },
        offsideCount: function(code) { //越位次数
            var homeCount = $('#ho_offside_num').html();
            var guestCount = $('#gu_offside_num').html();
            if (code == 1043) {
                homeCount = parseInt(homeCount) + 1;
            }
            if (code == 2067) {
                guestCount = parseInt(guestCount) + 1;
            }
            $('#ho_offside_num').html(homeCount);
            $('#gu_offside_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_offside_percent').css('width', homePercent);
            $('#gu_offside_percent').css('width', guestPercent);
        },
        foul: function(code) { //犯规
            var homeCount = $('#ho_fouls_num').html();
            var guestCount = $('#gu_fouls_num').html();
            if (code == 1042) {
                homeCount = parseInt(homeCount) + 1;
            }
            if (code == 2066) {
                guestCount = parseInt(guestCount) + 1;
            }
            $('#ho_fouls_num').html(homeCount);
            $('#gu_fouls_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_fouls_percent').css('width', homePercent);
            $('#gu_fouls_percent').css('width', guestPercent);
        },
        foulKick: function(code, status) { //点球
            var homeAllCount = $('#ho_penalty_all_num').html();
            var guestAllCount = $('#gu_penalty_all_num').html();
            var homeCount = $('#ho_penalty_num').html();
            var guestCount = $('#gu_penalty_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_penalty_num').html();
            var guestUpCount = $('#gu_up_penalty_num').html();
            var homeDownCount = $('#ho_down_penalty_num').html();
            var guestDownCount = $('#gu_down_penalty_num').html();
            if (code == 1031) {
                homeAllCount = parseInt(homeAllCount) + 1;
                homeCount = parseInt(homeCount) + 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) + 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) + 1;
                }
            }
            if (code == 2055) {
                guestAllCount = parseInt(guestAllCount) + 1;
                guestCount = parseInt(guestCount) + 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) + 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) + 1;
                }
            }
            $('#ho_penalty_all_num').html(homeAllCount);
            $('#gu_penalty_all_num').html(guestAllCount);
            $('#ho_penalty_num').html(homeCount);
            $('#gu_penalty_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            $('#ho_penalty_percent').css('width', homePercent);
            $('#gu_penalty_percent').css('width', guestPercent);

            $('#ho_up_penalty_num').html(homeUpCount);
            $('#gu_up_penalty_num').html(guestUpCount);
            $('#ho_down_penalty_num').html(homeDownCount);
            $('#gu_down_penalty_num').html(guestDownCount);
        },
        redCard: function(code, status) { //红牌
            var homeCount = $('#ho_red_num').html();
            var guestCount = $('#gu_red_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_red_num').html();
            var guestUpCount = $('#gu_up_red_num').html();
            var homeDownCount = $('#ho_down_red_num').html();
            var guestDownCount = $('#gu_down_red_num').html();

            if (code == 1032 || code == 607 || code == 609) {
                homeCount = parseInt(homeCount) + 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) + 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) + 1;
                }
            }
            if (code == 2056 || code == 608 || code == 610) {
                guestCount = parseInt(guestCount) + 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) + 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCountt) + 1;
                }
            }
            $('#ho_red_num').html(homeCount);
            $('#gu_red_num').html(guestCount);

            $('#ho_up_red_num').html(homeUpCount);
            $('#gu_up_red_num').html(guestUpCount);
            $('#ho_down_red_num').html(homeDownCount);
            $('#gu_down_red_num').html(guestDownCount);
        },
        redYellow: function(code, status) { //红黄牌
            //黄牌
            var homeYellowCount = $('#ho_yellow_num').html();
            var guestYellowCount = $('#gu_yellow_num').html();
            //上下半场
            var homeYellowUpCount = $('#ho_up_yellow_num').html();
            var guestYellowUpCount = $('#gu_up_yellow_num').html();
            var homeYellowDownCount = $('#ho_down_yellow_num').html();
            var guestYellowDownCount = $('#gu_down_yellow_num').html();
            //红牌
            var homeRedCount = $('#ho_red_num').html();
            var guestRedCount = $('#gu_red_num').html();
            //上下半场
            var homeRedUpCount = $('#ho_up_red_num').html();
            var guestRedUpCount = $('#gu_up_red_num').html();
            var homeRedDownCount = $('#ho_down_red_num').html();
            var guestRedDownCount = $('#gu_down_red_num').html();

            if (code == 1045) {
                homeYellowCount = parseInt(homeYellowCount) + 1;
                homeRedCount = parseInt(homeRedCount) + 1;
                if (status == 1) { //上半场
                    homeYellowUpCount = parseInt(homeYellowUpCount) + 1;
                    homeRedUpCount = parseInt(homeRedUpCount) + 1;
                }
                if (status == 3) { //下半场
                    homeYellowDownCount = parseInt(homeYellowDownCount) + 1;
                    homeRedDownCount = parseInt(homeRedDownCount) + 1;
                }
            }
            if (code == 2069) {
                guestYellowCount = parseInt(guestYellowCount) + 1;
                guestRedCount = parseInt(guestRedCount) + 1;
                if (status == 1) { //上半场
                    guestYellowUpCount = parseInt(guestYellowUpCount) + 1;
                    guestRedUpCount = parseInt(guestRedUpCount) + 1;
                }
                if (status == 3) { //下半场
                    guestYellowDownCount = parseInt(guestYellowDownCount) + 1;
                    guestRedDownCount = parseInt(guestRedDownCount) + 1;
                }
            }

            $('#ho_yellow_num').html(homeYellowCount);
            $('#gu_yellow_num').html(guestYellowCount);
            $('#ho_up_yellow_num').html(homeYellowUpCount);
            $('#gu_up_yellow_num').html(guestYellowUpCount);
            $('#ho_down_yellow_num').html(homeYellowDownCount);
            $('#gu_down_yellow_num').html(guestYellowDownCount);
            $('#ho_red_num').html(homeRedCount);
            $('#gu_red_num').html(guestRedCount);
            $('#ho_up_red_num').html(homeRedUpCount);
            $('#gu_up_red_num').html(guestRedUpCount);
            $('#ho_down_red_num').html(homeRedDownCount);
            $('#gu_down_red_num').html(guestRedDownCount);
        },
        yellowCard: function(code, status) { //黄牌
            var homeCount = $('#ho_yellow_num').html();
            var guestCount = $('#gu_yellow_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_yellow_num').html();
            var guestUpCount = $('#gu_up_yellow_num').html();
            var homeDownCount = $('#ho_down_yellow_num').html();
            var guestDownCount = $('#gu_down_yellow_num').html();
            if (code == 1034 || code == 628) {
                homeCount = parseInt(homeCount) + 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) + 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) + 1;
                }
            }
            if (code == 2058 || code == 629) {
                guestCount = parseInt(guestCount) + 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) + 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) + 1;
                }
            }
            $('#ho_yellow_num').html(homeCount);
            $('#gu_yellow_num').html(guestCount);

            $('#ho_up_yellow_num').html(homeUpCount);
            $('#gu_up_yellow_num').html(guestUpCount);
            $('#ho_down_yellow_num').html(homeDownCount);
            $('#gu_down_yellow_num').html(guestDownCount);
        },
        cancel_goal: function(code, status) { //取消进球
            var homeCount = $('#ho_goal_num').html();
            var guestCount = $('#gu_goal_num').html();

            //上下半场
            var homeUpCount = $('#ho_up_goal_num').html();
            var guestUpCount = $('#gu_up_goal_num').html();
            var homeDownCount = $('#ho_down_goal_num').html();
            var guestDownCount = $('#gu_down_goal_num').html();
            if (code == 1030) {
                homeCount = parseInt(homeCount) - 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) - 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) - 1;
                }
            }
            if (code == 2054) {
                guestCount = parseInt(guestCount) - 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) - 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) - 1;
                }
            }
            if (parseInt(homeCount) < 0) {
                homeCount = 0;
            }
            if (parseInt(guestCount) < 0) {
                guestCount = 0;
            }
            if (parseInt(homeUpCount) < 0) {
                homeUpCount = 0;
            }
            if (parseInt(guestUpCount) < 0) {
                guestUpCount = 0;
            }
            if (parseInt(homeDownCount) < 0) {
                homeDownCount = 0;
            }
            if (parseInt(guestDownCount) < 0) {
                guestDownCount = 0;
            }
            $('#ho_goal_num').html(homeCount);
            $('#gu_goal_num').html(guestCount);

            $('#ho_up_goal_num').html(homeUpCount);
            $('#gu_up_goal_num').html(guestUpCount);
            $('#ho_down_goal_num').html(homeDownCount);
            $('#gu_down_goal_num').html(guestDownCount);
        },
        cancel_red_yellow: function(code) { //取消红黄牌
            //黄牌
            var homeYellowCount = $('#ho_yellow_num').html();
            var guestYellowCount = $('#gu_yellow_num').html();
            //上下半场
            var homeYellowUpCount = $('#ho_up_yellow_num').html();
            var guestYellowUpCount = $('#gu_up_yellow_num').html();
            var homeYellowDownCount = $('#ho_down_yellow_num').html();
            var guestYellowDownCount = $('#gu_down_yellow_num').html();
            //红牌
            var homeRedCount = $('#ho_red_num').html();
            var guestRedCount = $('#gu_red_num').html();
            //上下半场
            var homeRedUpCount = $('#ho_up_red_num').html();
            var guestRedUpCount = $('#gu_up_red_num').html();
            var homeRedDownCount = $('#ho_down_red_num').html();
            var guestRedDownCount = $('#gu_down_red_num').html();

            if (code == 1046) {
                homeYellowCount = parseInt(homeYellowCount) - 1;
                homeRedCount = parseInt(homeRedCount) - 1;
                if (status == 1) { //上半场
                    homeYellowUpCount = parseInt(homeYellowUpCount) - 1;
                    homeRedUpCount = parseInt(homeRedUpCount) - 1;
                }
                if (status == 3) { //下半场
                    homeYellowDownCount = parseInt(homeYellowDownCount) - 1;
                    homeRedDownCount = parseInt(homeRedDownCount) - 1;
                }
            }
            if (code == 2070) {
                guestYellowCount = parseInt(guestYellowCount) - 1;
                guestRedCount = parseInt(guestRedCount) - 1;
                if (status == 1) { //上半场
                    guestYellowUpCount = parseInt(guestYellowUpCount) - 1;
                    guestRedUpCount = parseInt(guestRedUpCount) - 1;
                }
                if (status == 3) { //下半场
                    guestYellowDownCount = parseInt(guestYellowDownCount) - 1;
                    guestRedDownCount = parseInt(guestRedDownCount) - 1;
                }
            }

            if (parseInt(homeYellowCount) < 0) {
                homeYellowCount = 0;
            }
            if (parseInt(guestYellowCount) < 0) {
                guestYellowCount = 0;
            }
            if (parseInt(homeYellowUpCount) < 0) {
                homeYellowUpCount = 0;
            }
            if (parseInt(guestYellowUpCount) < 0) {
                guestYellowUpCount = 0;
            }
            if (parseInt(homeYellowDownCount) < 0) {
                homeYellowDownCount = 0;
            }
            if (parseInt(guestYellowDownCount) < 0) {
                guestYellowDownCount = 0;
            }
            if (parseInt(homeRedCount) < 0) {
                homeRedCount = 0;
            }
            if (parseInt(guestRedCount) < 0) {
                guestRedCount = 0;
            }
            if (parseInt(homeRedUpCount) < 0) {
                homeRedUpCount = 0;
            }
            if (parseInt(guestRedUpCount) < 0) {
                guestRedUpCount = 0;
            }
            if (parseInt(homeRedDownCount) < 0) {
                homeRedDownCount = 0;
            }
            if (parseInt(guestRedDownCount) < 0) {
                guestRedDownCount = 0;
            }

            $('#ho_yellow_num').html(homeYellowCount);
            $('#gu_yellow_num').html(guestYellowCount);
            $('#ho_up_yellow_num').html(homeYellowUpCount);
            $('#gu_up_yellow_num').html(guestYellowUpCount);
            $('#ho_down_yellow_num').html(homeYellowDownCount);
            $('#gu_down_yellow_num').html(guestYellowDownCount);
            $('#ho_red_num').html(homeRedCount);
            $('#gu_red_num').html(guestRedCount);
            $('#ho_up_red_num').html(homeRedUpCount);
            $('#gu_up_red_num').html(guestRedUpCount);
            $('#ho_down_red_num').html(homeRedDownCount);
            $('#gu_down_red_num').html(guestRedDownCount);
        },
        cancel_red_card: function(code, status) { //取消红牌
            var homeCount = $('#ho_red_num').html();
            var guestCount = $('#gu_red_num').html();

            //上下半场
            var homeUpCount = $('#ho_up_red_num').html();
            var guestUpCount = $('#gu_up_red_num').html();
            var homeDownCount = $('#ho_down_red_num').html();
            var guestDownCount = $('#gu_down_red_num').html();
            if (code == 1047) {
                homeCount = parseInt(homeCount) - 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) - 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) - 1;
                }
            }
            if (code == 2071) {
                guestCount = parseInt(guestCount) - 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) - 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) - 1;
                }
            }
            if (parseInt(homeCount) < 0) {
                homeCount = 0;
            }
            if (parseInt(guestCount) < 0) {
                guestCount = 0;
            }
            if (parseInt(homeUpCount) < 0) {
                homeUpCount = 0;
            }
            if (parseInt(guestUpCount) < 0) {
                guestUpCount = 0;
            }
            if (parseInt(homeDownCount) < 0) {
                homeDownCount = 0;
            }
            if (parseInt(guestDownCount) < 0) {
                guestDownCount = 0;
            }
            $('#ho_red_num').html(homeCount);
            $('#gu_red_num').html(guestCount);

            $('#ho_up_red_num').html(homeUpCount);
            $('#gu_up_red_num').html(guestUpCount);
            $('#ho_down_red_num').html(homeDownCount);
            $('#gu_down_red_num').html(guestDownCount);
        },
        cancel_yellow_card: function(code, status) { //取消黄牌
            var homeCount = $('#ho_yellow_num').html();
            var guestCount = $('#gu_yellow_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_yellow_num').html();
            var guestUpCount = $('#gu_up_yellow_num').html();
            var homeDownCount = $('#ho_down_yellow_num').html();
            var guestDownCount = $('#gu_down_yellow_num').html();
            if (code == 1048) {
                homeCount = parseInt(homeCount) - 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) - 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) - 1;
                }
            }
            if (code == 2072) {
                guestCount = parseInt(guestCount) - 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) - 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) - 1;
                }
            }
            if (parseInt(homeCount) < 0) {
                homeCount = 0;
            }
            if (parseInt(guestCount) < 0) {
                guestCount = 0;
            }
            if (parseInt(homeUpCount) < 0) {
                homeUpCount = 0;
            }
            if (parseInt(guestUpCount) < 0) {
                guestUpCount = 0;
            }
            if (parseInt(homeDownCount) < 0) {
                homeDownCount = 0;
            }
            if (parseInt(guestDownCount) < 0) {
                guestDownCount = 0;
            }
            $('#ho_yellow_num').html(homeCount);
            $('#gu_yellow_num').html(guestCount);

            $('#ho_up_yellow_num').html(homeUpCount);
            $('#gu_up_yellow_num').html(guestUpCount);
            $('#ho_down_yellow_num').html(homeDownCount);
            $('#gu_down_yellow_num').html(guestDownCount);
        },
        cancel_foul_kick: function(code, status) { //取消点球
            var homeAllCount = $('#ho_penalty_all_num').html();
            var guestAllCount = $('#gu_penalty_all_num').html();
            var homeCount = $('#ho_penalty_num').html();
            var guestCount = $('#gu_penalty_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_penalty_num').html();
            var guestUpCount = $('#gu_up_penalty_num').html();
            var homeDownCount = $('#ho_down_penalty_num').html();
            var guestDownCount = $('#gu_down_penalty_num').html();
            if (code == 1049) {
                homeAllCount = parseInt(homeAllCount) - 1;
                homeCount = parseInt(homeCount) - 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) - 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) - 1;
                }
            }
            if (code == 2073) {
                guestAllCount = parseInt(guestAllCount) - 1;
                guestCount = parseInt(guestCount) - 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) - 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) - 1;
                }
            }
            if (parseInt(homeCount) < 0) {
                homeAllCount = 0;
                homeCount = 0;
            }
            if (parseInt(guestCount) < 0) {
                guestAllCount = 0;
                guestCount = 0;
            }
            if (parseInt(homeUpCount) < 0) {
                homeUpCount = 0;
            }
            if (parseInt(guestUpCount) < 0) {
                guestUpCount = 0;
            }
            if (parseInt(homeDownCount) < 0) {
                homeDownCount = 0;
            }
            if (parseInt(guestDownCount) < 0) {
                guestDownCount = 0;
            }
            $('#ho_penalty_all_num').html(homeAllCount);
            $('#gu_penalty_all_num').html(guestAllCount);
            $('#ho_penalty_num').html(homeCount);
            $('#gu_penalty_num').html(guestCount);
            var homePercent = Math.floor(parseInt(homeCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            var guestPercent = Math.floor(parseInt(guestCount) * 100 / (parseInt(homeCount) + parseInt(guestCount))) + "%";
            if (parseInt(homeCount) == parseInt(guestCount)) {
                homePercent = '50%';
                guestPercent = '50%';
            }
            $('#ho_penalty_percent').css('width', homePercent);
            $('#gu_penalty_percent').css('width', guestPercent);

            $('#ho_up_penalty_num').html(homeUpCount);
            $('#gu_up_penalty_num').html(guestUpCount);
            $('#ho_down_penalty_num').html(homeDownCount);
            $('#gu_down_penalty_num').html(guestDownCount);
        },
        cancel_carner: function(code, status) { //取消角球
            var homeCount = $('#ho_corner_num').html();
            var guestCount = $('#gu_corner_num').html();
            //上下半场
            var homeUpCount = $('#ho_up_corner_num').html();
            var guestUpCount = $('#gu_up_corner_num').html();
            var homeDownCount = $('#ho_down_corner_num').html();
            var guestDownCount = $('#gu_down_corner_num').html();
            if (code == 1050) {
                homeCount = parseInt(homeCount) - 1;
                if (status == 1) { //上半场
                    homeUpCount = parseInt(homeUpCount) - 1;
                }
                if (status == 3) { //下半场
                    homeDownCount = parseInt(homeDownCount) - 1;
                }
            }
            if (code == 2074) {
                guestCount = parseInt(guestCount) - 1;
                if (status == 1) { //上半场
                    guestUpCount = parseInt(guestUpCount) - 1;
                }
                if (status == 3) { //下半场
                    guestDownCount = parseInt(guestDownCount) - 1;
                }
            }
            if (parseInt(homeCount) < 0) {
                homeCount = 0;
            }
            if (parseInt(guestCount) < 0) {
                guestCount = 0;
            }
            if (parseInt(homeUpCount) < 0) {
                homeUpCount = 0;
            }
            if (parseInt(guestUpCount) < 0) {
                guestUpCount = 0;
            }
            if (parseInt(homeDownCount) < 0) {
                homeDownCount = 0;
            }
            if (parseInt(guestDownCount) < 0) {
                guestDownCount = 0;
            }
            $('#ho_corner_num').html(homeCount);
            $('#gu_corner_num').html(guestCount);

            $('#ho_up_corner_num').html(homeUpCount);
            $('#gu_up_corner_num').html(guestUpCount);
            $('#ho_down_corner_num').html(homeDownCount);
            $('#gu_down_corner_num').html(guestDownCount);
        }
    }
    match.init();

})(jQuery);

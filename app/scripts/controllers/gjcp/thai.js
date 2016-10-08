(function($) {
    var windowUrl = window.location.href; //获取url
    var _search = window.location.hash; //获取url后面的锚点
    if (_search != "") {
        var reg = /.*num\s*\=\s*(\w*).*/g; //在APP的webView里面设定url后面的锚点为#num=1,头部就隐藏。
        var type = _search.replace(reg, "$1");
        if (type == 1) { //如果在webView里面重新设定iframe标签的高度。iframe高度= window高度-header高度- nav高度 - （list高度）*2因为刚好margin值 = list的高度
            $('header').hide();
            $(".nav-menus").hide(); // 公共导航头隐藏.
            $("nav").css({
                top: 0
            });
            $(".wrapper").css({
                top: 0
            });
            $(".lottery_list").css({
                top: 0
            });
            var winHeight = $(window).height();
            var navH = $('nav').height();
            var listH = $('.lottery_list').height();
            var iframeH = winHeight - navH - listH - listH;
            $('.wrapper').height(iframeH);
        }
    } else {
        var winHeight = $(window).height();
        var headerH = $('header').height();
        var navH = $('nav').height();
        var listH = $('.lottery_list').height();
        var iframeH = winHeight - headerH - navH - listH - listH;
        $('.wrapper').height(iframeH);
    }

    var myframeUrl = 'http://codemobiles.com/lotto/getlottoweb.php?date=2016-09-16';
    document.getElementById('myframe').src = myframeUrl; //进入用JS改变iframe标签的url
    $('.open_hide').click(function() { //点击打开浮层,当点击打开的时候让wrapper的scrollTop值为０，
        $('.wrapper').scrollTop(0);
        $('.hide').show();
        $('.last_span').click(function() { //点击取消按钮关闭浮层
            $('.hide').hide();
        });
        $('.hide').click(function() { //点击其他地方关闭浮层
            $(this).hide();
        });
    });
    $('.res').click(function() { //点击刷新按钮，让iframe的src再次重新刷一次
        document.getElementById('myframe').src = document.getElementById('myframe').src;
        $('.wrapper').scrollTop(0);
    });
    $('.my_audio').click(function() { //点击播放电台音频
        if ($('.audio_music')[0].paused) { //如果是暂停状态点击就是播放同时更换播放状态的图标
            $('.audio_music')[0].play();
            $(this).children('span:first-child').removeClass('audio_span');
            $(this).children('span:first-child').addClass('music');
        } else {
            $('.audio_music')[0].pause();
            $(this).children('span:first-child').removeClass('music');
            $(this).children('span:first-child').addClass('audio_span');
        }
    });
    var DateUrl = {
        "0": ["งวด 01 ต.ค. 59", "2016-10-01"],
        "1": ["งวด 16 ก.ย. 59", "2016-09-16"],
        "2": ["งวด 01 ก.ย. 59", "2016-09-01"],
        "3": ["งวด 16 ส.ค. 59", "2016-08-16"],
        "4": ["งวด 01 ส.ค. 59", "2016-08-01"],
        "5": ["งวด 16 ก.ค. 59", "2016-07-16"],
        "6": ["งวด 01 ก.ค. 59", "2016-07-01"],
        "7": ["งวด 16 มิ.ย.59", "2016-06-16"],
        "8": ["งวด 01 มิ.ย.59", "2016-06-01"],
        "9": ["งวด 16 พ.ค. 59", "2016-05-16"],
        "10": ["งวด 02 พ.ค. 59", "2016-05-02"]
    }
    var mydate = ""; //定义同一个空的变量
    for (var j in DateUrl) { //for  in 循环遍历，
        var date = DateUrl[j][0]; //获取第J个的第0个元素也就是 งวด 01 ส.ค.59
        var url = DateUrl[j][1]; //获取第J个的第1个元素也就是2016-09-01
        mydate += '<li data-url="http://codemobiles.com/lotto/getlottoweb.php?date=' + url + '"><span>' + date + '</span></li>' //拼接字符串，自定义data-url属性将url变量存在元素的属性中
    };
    $('.my_ul').append(mydate); //将变量插入到ul中
    $('.my_ul li').on('click', 'span',
    function(e) { //将点击事件委托给span
        var url = $(this).parent().attr("data-url"); //获取span的父元素Li的data-url属性
        setTimeout(function() { //设置一个定时器，当点击的时候改变iframe标签的url，同时延迟0.25S刷新iframe标签的src
            document.getElementById('myframe').src = url;
        },
        250);
        $('.hide').css({
            display: "none"
        }); //点击选中当前彩票期数，同时关闭浮层
        $(this).parent().siblings().find('span').css('color', '#333333'); //先让所有span元素的字体颜色改为#333333；
        $(this).css('color', '#ff0000'); //再让当前点击的span元素的字体颜色改为#ff0000;
        var spanVal = $(this).parent().find('span').html(); //获取当前点击的span元素的html
        $('.list_font').html(spanVal); //当前点击元素的html赋值给class名为list_font的标签
    });
    var b = 'http://codemobiles.com/lotto/getlottoweb.php?date='; //定义一个变量为url
    var c = DateUrl[0][1]; //获取DateUrl对象下面的第一个数组的第一个变量
    var mydate = new Date(); //定义一个Date
    str = (mydate.getMonth() + 1); //获取当前月份
    str1 = mydate.getDate(); //获取当前是多少号
    if (str == 10 && str1 >= 1 && str1 < 16) { //如果月份是8，日期是>=1并且<16的话换url地址同时上面的innerHTML也换
        var url = $('#myframe').attr('src'); //获取获取iframe标签的src属性
        $("#myframe").attr('src', b + c); //改变iframe标签的url
        $('.list_font').html(DateUrl[0][0]); //获取class名为list_font的元素，改变他的html值
        $('.my_ul').children('li').eq(1).children('span').css({
            color: '#333333'
        }); //if语句成立的话，同时先改变之前被选中的第二个li下面的span的字体颜色，
        $('.my_ul').children('li').eq(0).children('span').css({
            color: '#ff0000'
        }); //同时也改变八月一号一期彩票的字体颜色
    };
})(jQuery);

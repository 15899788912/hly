/**
 * 动画循环事件
 */
var cycle = {
    zdjiaoqiu: function() { //主队角球
        $(".corner-z .text").animate({
            right: '.1rem'
        }, 800);
        $(".corner-z .corner-e").animate({
            height: "2.7rem",
            opacity: "1"
        }, 1200);
        $(".corner-z .corner-e").animate({
            height: ".22rem",
            opacity: "0.4"
        }, 10, cycle.zdjiaoqiu);
    },
    kdjiaoqiu: function() { //客队角球
        $(".corner-k .text").animate({
            left: '.1rem'
        }, 800);
        $(".corner-k .corner-e").animate({
            height: "2.7rem",
            opacity: "1"
        }, 1200);
        $(".corner-k .corner-e").animate({
            height: ".22rem",
            opacity: "0.4"
        }, 10, cycle.kdjiaoqiu);
    },
    zdqxjq: function() { //主队取消角球
        $(".c-corner-z .text").animate({
            right: '.1rem'
        }, 800);
        $(".c-corner-z .corner-e").animate({
            height: "2.7rem"
        }, 1200);
        $(".c-corner-z .corner-e").animate({
            height: "0rem"
        }, 10, cycle.zdqxjq);
    },
    kdqxjq: function() { //客队取消角球
        $(".c-corner-k .text").animate({
            left: '.1rem'
        }, 800);
        $(".c-corner-k .corner-e").animate({
            height: "2.7rem"
        }, 1200);
        $(".c-corner-k .corner-e").animate({
            height: "0rem"
        }, 10, cycle.kdqxjq);
    },
    zdjg: function() { //主队进攻
        $(".attack-z .text").animate({
            right: '3rem'
        }, 800);
        $(".attack-z .attack-bg").animate({
            width: "4rem"
        }, 1200);
        $(".attack-z .attack-bg").animate({
            width: "3.7rem"
        }, 10, cycle.zdjg);
    },
    kdjg: function() { //客队进攻
        $(".attack-k .text").animate({
            left: '3rem'
        }, 800);
        $(".attack-k .attack-bg").animate({
            width: "4rem"
        }, 1200);
        $(".attack-k .attack-bg").animate({
            width: "3.7rem"
        }, 10, cycle.kdjg);
    },
    zdwxjg: function() { //主队危险进攻
        $(".d-attack-z .text").animate({
            right: "1.3rem"
        }, 800);
        $(".d-attack-z .attack-bg").animate({
            width: "5.5rem",
            opacity: "1"
        }, 1200);
        $(".d-attack-z .attack-bg").animate({
            width: "5rem",
            opacity: "0.4"
        }, 10, cycle.zdwxjg);
    },
    kdwxjg: function() { //客队危险进攻
        $(".d-attack-k .text").animate({
            left: '1.3rem'
        }, 800);
        $(".d-attack-k .attack-bg").animate({
            width: "5.5rem",
            opacity: "1"
        }, 1200);
        $(".d-attack-k .attack-bg").animate({
            width: "5rem",
            opacity: "0.4"
        }, 10, cycle.kdwxjg);
    },
    zdqmq: function() { //主队球门球
        $(".kick-z .text").animate({
            left: '.4rem'
        }, 800);
        $(".kick-z .kick-z-bg").animate({
            width: "1rem",
            opacity: "1"
        }, 1000);
        $(".kick-z .kick-z-bg").animate({
            width: ".24rem",
            opacity: "0.4"
        }, 10, cycle.zdqmq);
    },
    kdqmq: function() { //客队球门球
        $(".kick-k .text").animate({
            right: '.4rem'
        }, 800);
        $(".kick-k .kick-k-bg").animate({
            width: "1rem",
            opacity: "1"
        }, 1000);
        $(".kick-k .kick-k-bg").animate({
            width: ".24rem",
            opacity: "0.4"
        }, 10, cycle.kdqmq);
    },
    zdjwq: function() { //主队界外球
        $(".outball-z .text").animate({
            right: '2.2rem'
        }, 800);
        $(".outball-z .outball-z-bg").animate({
            height: "1rem",
            opacity: "1"
        }, 1000);
        $(".outball-z .outball-z-bg").animate({
            height: ".23rem",
            opacity: "0.4"
        }, 10, cycle.zdjwq);
    },
    kdjwq: function() { //客队界外球
        $(".outball-k .text").animate({
            left: '2.2rem'
        }, 800);
        $(".outball-k .outball-k-bg").animate({
            height: "1rem",
            opacity: "1"
        }, 1000);
        $(".outball-k .outball-k-bg").animate({
            height: ".23rem",
            opacity: "0.4"
        }, 10, cycle.kdjwq);
    },
    zdryq: function() { //主队任意球
        $(".freekick-z .text").animate({
            right: '3.7rem'
        }, 800);
        $(".freekick-z .fk-amt").animate({
            opacity: "1"
        }, 500);
        $(".freekick-z .freekick-bg").animate({
            width: "1.22rem",
            opacity: "1"
        }, 1000);
        $(".freekick-z .freekick-bg").animate({
            width: ".23rem",
            opacity: "0.4"
        }, 10);
        $(".freekick-z .fk-amt").animate({
            opacity: "0.6"
        }, 500, cycle.zdryq);
    },
    kdryq: function() { //客队任意球
        $(".freekick-k .text").animate({
            left: '3.7rem'
        }, 800);
        $(".freekick-k .fk-amt").animate({
            opacity: "1"
        }, 500);
        $(".freekick-k .freekick-bg").animate({
            width: "1.22rem",
            opacity: "1"
        }, 1000);
        $(".freekick-k .freekick-bg").animate({
            width: ".23rem",
            opacity: "0.4"
        }, 10);
        $(".freekick-k .fk-amt").animate({
            opacity: "0.6"
        }, 500, cycle.kdryq);
    },
    zdwxryq: function() { //主队危险任意球
        $(".d-freekick-z .text").animate({
            right: '1.6rem'
        }, 800);
        $(".d-freekick-z .fk-amt").animate({
            opacity: "1"
        }, 500);
        $(".d-freekick-z .freekick-bg").animate({
            width: "1.22rem",
            opacity: "1"
        }, 1000);
        $(".d-freekick-z .freekick-bg").animate({
            width: ".23rem",
            opacity: "0.4"
        }, 10);
        $(".d-freekick-z .fk-amt").animate({
            opacity: "0.6"
        }, 500, cycle.zdwxryq);
    },
    kdwxryq: function() { //客队危险任意球
        $(".d-freekick-k .text").animate({
            left: '1.6rem'
        }, 800);
        $(".d-freekick-k .fk-amt").animate({
            opacity: "1"
        }, 500);
        $(".d-freekick-k .freekick-bg").animate({
            width: "1.22rem",
            opacity: "1"
        }, 1000);
        $(".d-freekick-k .freekick-bg").animate({
            width: ".23rem",
            opacity: "0.4"
        }, 10);
        $(".d-freekick-k .fk-amt").animate({
            opacity: "0.6"
        }, 500, cycle.kdwxryq);
    },
    zdyw: function() { //主队越位
        $(".offside-z .yellow-line").animate({
            opacity: "1"
        }, 1200);
        $(".offside-z .text").animate({
            right: "1.5rem"
        }, 800);
        $(".offside-z .yellow-line").animate({
            opacity: "0.4"
        }, 10, cycle.zdyw);
    },
    kdyw: function() { //客队越位
        $(".offside-k .yellow-line").animate({
            opacity: "1"
        }, 1200);
        $(".offside-k .text").animate({
            left: "1.5rem"
        }, 800);
        $(".offside-k .yellow-line").animate({
            opacity: "0.4"
        }, 10, cycle.kdyw);
    }
};
/**
 * 动画直播
 */


var animation = {
    //比赛开始
    start: function() {
        $(".gamestart").fadeIn("slow");
        $(".gamestart .startbox").animate({
            opacity: '1',
            bottom: '50%',
        }, 800);
        $(".gamestart").animate({
            opacity: '1',
            bottom: '50%',
        }, 2000);
        $(".gamestart").fadeOut("slow");
    },
    //主队进球
    goalz: function() {
        animation.out_all_event();
        //$("#corner-k").fadeOut("slow");
        //$(".goal-k").fadeOut("slow");
        $(".goal-z").fadeIn("slow");
        $(".goal-z").animate({
            right: '.5rem',
            opacity: '1',
        }, 800);
    },
    //客队进球
    goalk: function() {
        animation.out_all_event();
        $(".goal-k").fadeIn("slow");
        $(".goal-k").animate({
            left: '.5rem',
            opacity: '1',
        }, 800);
    },
    //主队进球取消
    cgoalz: function() {
        animation.out_all_event();
        $(".c-goal-z").fadeIn("slow");
        $(".c-goal-z").animate({
            right: '.5rem',
            opacity: '1',
        }, 800);
    },
    //客队进球取消
    cgoalk: function() {
        animation.out_all_event();
        $(".c-goal-k").fadeIn("slow");
        $(".c-goal-k").animate({
            left: '.5rem',
            opacity: '1',
        }, 800);
    },
    //主队点球
    penaltyz: function() {
        animation.out_all_event();
        $(".penalty-z").fadeIn("slow");
        $(".penalty-z").animate({
            right: '.5rem',
            opacity: '1',
        }, 800);
    },
    //客队点球
    penaltyk: function() {
        animation.out_all_event();
        $(".penalty-k").fadeIn("slow");
        $(".penalty-k").animate({
            left: '.5rem',
            opacity: '1',
        }, 800);
    },
    //主队重罚点球
    penaltyaz: function() {
        animation.out_all_event();
        $(".a-penalty-z").fadeIn("slow");
        $(".a-penalty-z").animate({
            right: '.5rem',
            opacity: '1',
        }, 800);
    },
    //客队重罚点球
    penaltyak: function() {
        animation.out_all_event();
        $(".a-penalty-k").fadeIn("slow");
        $(".a-penalty-k").animate({
            left: '.5rem',
            opacity: '1',
        }, 800);
    },
    //主队罚失点球
    penaltylz: function() {
        animation.out_all_event();
        $(".l-penalty-z").fadeIn("slow");
        $(".l-penalty-z").animate({
            right: '.5rem',
            opacity: '1',
        }, 800);
    },
    //客队罚失点球
    penaltylk: function() {
        animation.out_all_event();
        $(".l-penalty-k").fadeIn("slow");
        $(".l-penalty-k").animate({
            left: '.5rem',
            opacity: '1',
        }, 800);
    },
    //主队取消点球
    penaltycz: function() {
        animation.out_all_event();
        $(".c-penalty-z").fadeIn("slow");
        $(".c-penalty-z").animate({
            right: '.5rem',
            opacity: '1',
        }, 800);
    },
    //客队取消点球
    penaltyck: function() {
        animation.out_all_event();
        $(".c-penalty-k").fadeIn("slow");
        $(".c-penalty-k").animate({
            left: '.5rem',
            opacity: '1',
        }, 800);
    },

    //主队角球
    cornerz: function() {
        animation.out_all_event();
        $(".corner-z").fadeIn("slow");
        cycle.zdjiaoqiu();
        /*$(".corner-z .text").animate({right:'.1rem'},800);
        $(".corner-z .corner-e").animate({height:"2.7rem",opacity:"1"},1200);
        $(".corner-z .corner-e").animate({height:".22rem",opacity:"0.4"},10,cc);*/
    },
    //客队角球
    cornerk: function() {
        animation.out_all_event();
        $(".corner-k").fadeIn("slow");
        cycle.kdjiaoqiu();
        /*$(".corner-k .text").animate({left:'.1rem'},800);
        $(".corner-k .corner-e").animate({height:"2.7rem",opacity:"1"},1200);
        $(".corner-k .corner-e").animate({height:".22rem",opacity:"0.4"},10,animation.cornerk);*/
    },

    //主队取消角球
    ccz: function() {
        animation.out_all_event();
        $(".c-corner-z").fadeIn("slow");
        cycle.zdqxjq();
        /*$(".c-corner-z .text").animate({right:'.1rem'},800);
        $(".c-corner-z .corner-e").animate({height:"2.7rem"},1200);
        $(".c-corner-z .corner-e").animate({height:"0rem"},10,animation.ccz);*/
    },
    //客队取消角球
    cck: function() {
        animation.out_all_event();
        $(".c-corner-k").fadeIn("slow");
        cycle.kdqxjq();
        /*$(".c-corner-k .text").animate({left:'.1rem'},800);
        $(".c-corner-k .corner-e").animate({height:"2.7rem"},1200);
        $(".c-corner-k .corner-e").animate({height:"0rem"},10,animation.cck);*/
    },

    //主队进攻
    atz: function() {
        animation.out_all_event();
        $(".attack-z").fadeIn();
        cycle.zdjg();
        /*$(".attack-z .text").animate({right:'3rem'},800);
        $(".attack-z .attack-bg").animate({width:"3.8rem"},1200);
        $(".attack-z .attack-bg").animate({width:"3.5rem"},10,animation.atz);*/
    },
    //客队进攻
    atk: function() {
        animation.out_all_event();
        $(".attack-k").fadeIn("slow");
        cycle.kdjg();
        /*$(".attack-k .text").animate({left:'3rem'},800);
        $(".attack-k .attack-bg").animate({width:"3.8rem"},1200);
        $(".attack-k .attack-bg").animate({width:"3.5rem"},10,animation.atk);*/
    },

    //主队危险进攻
    danAtz: function() {
        animation.out_all_event();
        $(".d-attack-z").fadeIn("slow");
        cycle.zdwxjg();
        /*$(".d-attack-z .text").animate({right:"1.3rem"},800);
        $(".d-attack-z .attack-bg").animate({width:"5.5rem", opacity:"1"},1200);
        $(".d-attack-z .attack-bg").animate({width:"5rem",opacity:"0.4"},10,animation.danAtz);*/
    },
    //客队危险进攻
    danAtk: function() {
        animation.out_all_event();
        $(".d-attack-k").fadeIn("slow");
        cycle.kdwxjg();
        /*$(".d-attack-k .text").animate({left:'1.3rem'},800);
        $(".d-attack-k .attack-bg").animate({width:"5.5rem",opacity:"1"},1200);
        $(".d-attack-k .attack-bg").animate({width:"5rem",opacity:"0.4"},10,animation.danAtk);*/
    },
    //主队球门球
    kickz: function() {
        animation.out_all_event();
        $(".kick-z").fadeIn("slow");
        cycle.zdqmq();
        /*$(".kick-z .text").animate({left:'.4rem'},800);
        $(".kick-z .kick-z-bg").animate({width:"1rem",opacity:"1"},1000);
        $(".kick-z .kick-z-bg").animate({width:".24rem",opacity:"0.4"},10,animation.kickz);*/
    },
    //客队球门球
    kickk: function() {
        animation.out_all_event();
        $(".kick-k").fadeIn("slow");
        cycle.kdqmq();
        /*$(".kick-k .text").animate({right:'.4rem'},800);
        $(".kick-k .kick-k-bg").animate({width:"1rem",opacity:"1"},1000);
        $(".kick-k .kick-k-bg").animate({width:".24rem",opacity:"0.4"},10,animation.kickk);*/
    },

    //主队掷界外球
    obz: function() {
        animation.out_all_event();
        $(".outball-z").fadeIn("slow");
        cycle.zdjwq();
        /*$(".outball-z .text").animate({right:'2.2rem'},800);
        $(".outball-z .outball-z-bg").animate({height:"1rem",opacity:"1"},1000);
        $(".outball-z .outball-z-bg").animate({height:".23rem",opacity:"0.4"},10,animation.obz);*/
    },

    //客队掷界外球
    obk: function() {
        animation.out_all_event();
        $(".outball-k").fadeIn("slow");
        cycle.kdjwq();
        /*$(".outball-k .text").animate({left:'2.2rem'},800);
        $(".outball-k .outball-k-bg").animate({height:"1rem",opacity:"1"},1000);
        $(".outball-k .outball-k-bg").animate({height:".23rem",opacity:"0.4"},10,animation.obk);*/
    },

    //主队任意球
    fkz: function() {
        animation.out_all_event();
        $(".freekick-z").fadeIn("slow");
        cycle.zdryq();
        /*$(".freekick-z .text").animate({right:'3.5rem'},800);
        $(".freekick-z .fk-amt").animate({opacity:"1"},500);
        $(".freekick-z .freekick-bg").animate({width:"1.22rem",opacity:"1"},1000);
        $(".freekick-z .freekick-bg").animate({width:".23rem",opacity:"0.4"},10);
        $(".freekick-z .fk-amt").animate({opacity:"0.6"},500,animation.fkz);*/
    },

    //客队任意球
    fkk: function() {
        animation.out_all_event();
        $(".freekick-k").fadeIn("slow");
        cycle.kdryq();
        /*$(".freekick-k .text").animate({left:'3.5rem'},800);
        $(".freekick-k .fk-amt").animate({opacity:"1"},500);
        $(".freekick-k .freekick-bg").animate({width:"1.22rem",opacity:"1"},1000);
        $(".freekick-k .freekick-bg").animate({width:".23rem",opacity:"0.4"},10);
        $(".freekick-k .fk-amt").animate({opacity:"0.6"},500,animation.fkk);*/
    },

    //主队危险任意球
    dfkz: function() {
        animation.out_all_event();
        $(".d-freekick-z").fadeIn("slow");
        cycle.zdwxryq();
        /*$(".d-freekick-z .text").animate({right:'1.6rem'},800);
        $(".d-freekick-z .fk-amt").animate({opacity:"1"},500);
        $(".d-freekick-z .freekick-bg").animate({width:"1.22rem",opacity:"1"},1000);
        $(".d-freekick-z .freekick-bg").animate({width:".23rem",opacity:"0.4"},10);
        $(".d-freekick-z .fk-amt").animate({opacity:"0.6"},500,animation.dfkz);*/
    },

    //客队危险任意球
    dfkk: function() {
        animation.out_all_event();
        $(".d-freekick-k").fadeIn("slow");
        cycle.kdwxryq();
        /*$(".d-freekick-k .text").animate({left:'1.6rem'},800);
        $(".d-freekick-k .fk-amt").animate({opacity:"1"},500);
        $(".d-freekick-k .freekick-bg").animate({width:"1.22rem",opacity:"1"},1000);
        $(".d-freekick-k .freekick-bg").animate({width:".23rem",opacity:"0.4"},10);
        $(".d-freekick-k .fk-amt").animate({opacity:"0.6"},500,animation.dfkk);*/
    },
    //主队犯规
    foulz: function() {
        animation.out_all_event();
        $(".foul-z").fadeIn("slow");
        $(".foul-z").animate({
            left: '1.25rem'
        }, 800);
    },

    //客队犯规
    foulk: function() {
        animation.out_all_event();
        $(".foul-k").fadeIn("slow");
        $(".foul-k").animate({
            right: '1.25rem'
        }, 800);
    },

    //主队红牌
    redcardz: function() {
        animation.out_all_event();
        $(".redcard-z").fadeIn("slow");
        $(".redcard-z").animate({
            left: '1.25rem'
        }, 800);
    },

    //客队红牌
    redcardk: function() {
        animation.out_all_event();
        $(".redcard-k").fadeIn("slow");
        $(".redcard-k").animate({
            right: '1.25rem'
        }, 800);
    },

    //主队红牌取消
    redcardcz: function() {
        animation.out_all_event();
        $(".c-redcard-z").fadeIn("slow");
        $(".c-redcard-z").animate({
            left: '1.25rem'
        }, 800);
    },

    //客队红牌取消
    redcardck: function() {
        animation.out_all_event();
        $(".c-redcard-k").fadeIn("slow");
        $(".c-redcard-k").animate({
            right: '1.25rem'
        }, 800);
    },

    //主队黄牌
    yellowcardz: function() {
        animation.out_all_event();
        $(".yellowcard-z").fadeIn("slow");
        $(".yellowcard-z").animate({
            left: '1.25rem'
        }, 800);
    },
    //客队黄牌
    yellowcardk: function() {
        animation.out_all_event();
        $(".yellowcard-k").fadeIn("slow");
        $(".yellowcard-k").animate({
            right: '1.25rem'
        }, 800);
    },

    //主队黄牌取消
    yellowcardcz: function() {
        animation.out_all_event();
        $(".c-yellowcard-z").fadeIn("slow");
        $(".c-yellowcard-z").animate({
            left: '1.25rem'
        }, 800);
    },

    //客队黄牌取消
    yellowcardcz: function() {
        animation.out_all_event();
        $(".c-yellowcard-k").fadeIn("slow");
        $(".c-yellowcard-k").animate({
            right: '1.25rem'
        }, 800);
    },

    //主队两黄变一红
    yellowredcardz: function() {
        animation.out_all_event();
        $(".yellow-red-z").fadeIn("slow");
        $(".yellow-red-z").animate({
            left: '1.25rem'
        }, 800);
    },
    //客队两黄变一红
    yellowredcardk: function() {
        animation.out_all_event();
        $(".yellow-red-k").fadeIn("slow");
        $(".yellow-red-k").animate({
            right: '1.25rem'
        }, 800);
    },

    //主队射门
    shootz: function() {
        animation.out_all_event();
        $(".shoot-z").fadeIn("slow");
        $(".shoot-z").animate({
            right: '1.1rem'
        }, 800);
    },
    //客队射门
    shootk: function() {
        animation.out_all_event();
        $(".shoot-k").fadeIn("slow");
        $(".shoot-k").animate({
            left: '1.1rem'
        }, 800);
    },

    //主队射正球门
    shootinz: function() {
        animation.out_all_event();
        $(".shootin-z").fadeIn("slow");
        $(".shootin-z").animate({
            right: '1rem'
        }, 800);
    },
    //客队射正球门
    shootink: function() {
        animation.out_all_event();
        $(".shootin-k").fadeIn("slow");
        $(".shootin-k").animate({
            left: '1rem'
        }, 800);
    },
    //主队射偏球门
    shootoutz: function() {
        animation.out_all_event();
        $(".shootout-z").fadeIn("slow");
        $(".shootout-z").animate({
            right: '1rem'
        }, 800);
    },
    //客队射偏球门
    shootoutk: function() {
        animation.out_all_event();
        $(".shootout-k").fadeIn("slow");
        $(".shootout-k").animate({
            left: '1rem'
        }, 800);
    },
    //主队射中门框
    zshootoutz: function() {
        animation.out_all_event();
        $(".shootdoor-z").fadeIn("slow");
        $(".shootdoor-z").animate({
            right: '1rem'
        }, 800);
    },
    //客队射中门框
    zshootoutk: function() {
        animation.out_all_event();
        $(".shootdoor-k").fadeIn("slow");
        $(".shootdoor-k").animate({
            left: '1rem'
        }, 800);
    },

    //主队换人
    subz: function() {
        animation.out_all_event();
        $(".sub-z").fadeIn("slow");
        $(".sub-z").animate({
            left: '1.1rem'
        }, 800);
    },
    //客队换人
    subk: function() {
        animation.out_all_event();
        $(".sub-k").fadeIn("slow");
        $(".sub-k").animate({
            right: '1.1rem'
        }, 800);
    },
    //主队越位
    offsidez: function() {
        animation.out_all_event();
        $(".offside-z").fadeIn("slow");
        cycle.zdyw();
        /*$(".offside-z .yellow-line").animate({opacity:"1"},1200);
        $(".offside-z .text").animate({right:"1.5rem"},800);
        $(".offside-z .yellow-line").animate({opacity:"0.4"},10,animation.offsidez);*/
    },
    //取消客队两黄变一红
    cycardk: function() {
        animation.out_all_event();
        $(".cycardk").fadeIn("slow");
        $(".cycardk").animate({
            right: '1.25rem'
        }, 800);
    },
    //取消主队两黄变一红
    cycardz: function() {
        animation.out_all_event();
        $(".cycardz").fadeIn("slow");
        $(".cycardz").animate({
            left: '1.25rem'
        }, 800);
    },
    //客队越位
    offsidek: function() {
        animation.out_all_event();
        $(".offside-k").fadeIn("slow");
        cycle.kdyw();
        /*$(".offside-k .yellow-line").animate({opacity:"1"},1200);
        $(".offside-k .text").animate({left:"1.5rem"},800);
        $(".offside-k .yellow-line").animate({opacity:"0.4"},10,animation.offsidek);*/
    },
    //比赛暂停
    pause: function() {
        animation.out_all_event();
        $(".game-pause").fadeIn("slow");
    },
    //中场休息
    gamehalf: function() {
        animation.out_all_event();
        $(".game-half").fadeIn("slow");
    },
    //主队进球比分变化
    scorez: function() {
        //animation.out_all_event();
        $(".goal-score").fadeIn("slow");
        $(".goal-score .score-h").animate({
            top: "0%",
            marginTop: "-.48rem"
        }, 1000);
        $(".goal-score .score-h-n").animate({
            top: "50%",
            marginTop: "-.24rem"
        }, 1000);
    },
    //客队进球比分变化
    scorek: function() {
        //animation.out_all_event();
        $(".goal-score").fadeIn("slow");
        $(".goal-score .score-v").animate({
            top: "0%",
            marginTop: "-.48rem"
        }, 1000);
        $(".goal-score .score-v-n").animate({
            top: "50%",
            marginTop: "-.24rem"
        }, 1000);
    },
    //比赛结束
    over: function() {
        animation.out_all_event();
        $(".gameover").fadeIn("slow");
        $(".gameover .overbox").animate({
            opacity: '1',
            bottom: '50%',
        }, 800);
        $(".gameover").animate({
            opacity: '1',
            bottom: '50%',
        }, 2000);
        //$(".gameover").fadeOut("slow");
    },
    //比赛中止
    gamestop: function() {
        animation.out_all_event();
        $(".gamestop").fadeIn("slow");
        $(".gamestop .stopbox").animate({
            opacity: '1',
            bottom: '50%',
        }, 800);
        //$(".gamestop").animate({opacity:'1', bottom:'50%',},2000);
        //$(".gamestop").fadeOut("slow");
    },
    //伤停补时
    stbs: function() {
        animation.out_all_event();
        $(".game-stbs").fadeIn("slow");
        $(".game-stbs .stbsbox").animate({
            opacity: '1',
            bottom: '50%',
        }, 800);
    },
    //首次加载进球动画
    loadfirstgoal: function() {
        //animation.out_all_event();
        $(".load_first_goal").fadeIn("slow");
    },
    //淡出所有的事件
    out_all_event: function() {
        $(".goal-z").fadeOut("fast");
        $(".goal-k").fadeOut("fast");
        $(".c-goal-z").fadeOut("fast");
        $(".c-goal-k").fadeOut("fast");
        $(".penalty-z").fadeOut("fast");
        $(".penalty-k").fadeOut("fast");
        $(".a-penalty-z").fadeOut("fast");
        $(".a-penalty-k").fadeOut("fast");
        $(".l-penalty-z").fadeOut("fast");
        $(".l-penalty-k").fadeOut("fast");
        $(".c-penalty-z").fadeOut("fast");
        $(".c-penalty-k").fadeOut("fast");
        $(".corner-z").fadeOut("fast");
        $(".corner-k").fadeOut("fast");
        $(".c-corner-z").fadeOut("fast");
        $(".c-corner-k").fadeOut("fast");
        $(".attack-z").fadeOut("fast");
        $(".attack-k").fadeOut("fast");
        $(".d-attack-z").fadeOut("fast");
        $(".d-attack-k").fadeOut("fast");
        $(".kick-z").fadeOut("fast");
        $(".kick-k").fadeOut("fast");
        $(".outball-z").fadeOut("fast");
        $(".outball-k").fadeOut("fast");
        $(".freekick-z").fadeOut("fast");
        $(".freekick-k").fadeOut("fast");
        $(".d-freekick-z").fadeOut("fast");
        $(".d-freekick-k").fadeOut("fast");
        $(".foul-z").fadeOut("fast");
        $(".foul-k").fadeOut("fast");
        $(".redcard-z").fadeOut("fast");
        $(".redcard-k").fadeOut("fast");
        $(".c-redcard-z").fadeOut("fast");
        $(".c-redcard-k").fadeOut("fast");
        $(".yellowcard-z").fadeOut("fast");
        $(".yellowcard-k").fadeOut("fast");
        $(".c-yellowcard-z").fadeOut("fast");
        $(".c-yellowcard-k").fadeOut("fast");
        $(".yellow-red-z").fadeOut("fast");
        $(".yellow-red-k").fadeOut("fast");
        $(".shoot-z").fadeOut("fast");
        $(".shoot-k").fadeOut("fast");
        $(".shootin-z").fadeOut("fast");
        $(".shootin-k").fadeOut("fast");
        $(".shootout-z").fadeOut("fast");
        $(".shootout-k").fadeOut("fast");
        $(".shootdoor-z").fadeOut("fast");
        $(".shootdoor-k").fadeOut("fast");
        $(".sub-z").fadeOut("fast");
        $(".sub-k").fadeOut("fast");
        $(".offside-z").fadeOut("fast");
        $(".offside-k").fadeOut("fast");
        $(".game-pause").fadeOut("fast");
        $(".game-half").fadeOut("fast");
        $(".goal-score").fadeOut("fast");
        $(".gamestop").fadeOut("fast");
        $(".cycardz").fadeOut("fast");
        $(".cycardk").fadeOut("fast");
        $(".game-stbs").fadeOut("fast");
    }
};

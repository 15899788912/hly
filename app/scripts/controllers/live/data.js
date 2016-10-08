//语种繁体
var languageZH_HANS = {
  "vsSpan":"完",
  "gamestart":"比賽開始",
  "gameover":"全場結束",
  "gamestop":"比賽終止",
  "game_stbs":"傷停補時",
  "goal":"進球",
  "c_goal":"進球取消",
  "penalty":"點球",
  "a_penalty":"重罰點球",
  "l_penalty":"罰失點球",
  "c_penalty":"取消點球",
  "corner":"角球",
  "c_corner":"取消角球",
  "attack":"進攻",
  "d_attack":"危險進攻",
  "kick":"球門球",
  "outball":"擲界外球",
  "freekick":"任意球",
  "d_freekick":"危險任意球",
  "foul":"犯規",
  "redcard":"紅牌",
  "c_redcard":"紅牌取消",
  "yellowcard":"黃牌",
  "c_yellowcard":"黃牌取消",
  "yellow_red":"兩黃變一紅",
  "shoot":"射門",
  "shootin":"射正門球",
  "shootout":"射偏門球",
  "shootdoor":"射中門框",
  "sub":"換人",
  "offside":"越位",
  "game_pause":"比賽暫停",
  "name_z":"主隊",
  "name_k":"客隊",
  "game_half":"中場休息"
}


var lang =  mobileUtil.getQueryString('lang') || 'zh',
    isFlag = lang == 'zh-TW' ? true : false;
    console.log('lang:'+lang);
    console.log(isFlag);
if(isFlag){
  $("#vsSpan .p").html(languageZH_HANS.vsSpan);
  $("#gamestart h3").html(languageZH_HANS.gamestart);
  $("#gameover h3").html(languageZH_HANS.gameover);
  $("#gamestop h3").html(languageZH_HANS.gamestop);
  $("#game-stbs h3").text(languageZH_HANS.game_stbs);
  $(".goal").html(languageZH_HANS.goal);
  $(".c-goal").html(languageZH_HANS.c_goal);
  $(".penalty").html(languageZH_HANS.penalty);
  $(".a-penalty").html(languageZH_HANS.a_penalty);
  $(".l-penalty").html(languageZH_HANS.l_penalty);
  $(".c-penalty").html(languageZH_HANS.c_penalty);
  $(".corner").html(languageZH_HANS.corner);
  $(".c-corner").html(languageZH_HANS.c_corner);
  $(".attack").html(languageZH_HANS.attack);
  $(".d-attack").html(languageZH_HANS.d_attack);
  $(".kick").html(languageZH_HANS.kick);
  $(".outball").html(languageZH_HANS.outball);
  $(".freekick").html(languageZH_HANS.freekick);
  $(".d-freekick").html(languageZH_HANS.d_freekick);
  $(".foul").html(languageZH_HANS.foul);
  $(".redcard").html(languageZH_HANS.redcard);
  $(".c-redcard").html(languageZH_HANS.c_redcard)
  $(".yellowcard").html(languageZH_HANS.yellowcard);
  $(".c-yellowcard").html(languageZH_HANS.c_yellowcard);
  $(".yellow-red").html(languageZH_HANS.yellow_red);
  $(".shoot").html(languageZH_HANS.shoot);
  $(".shootin").html(languageZH_HANS.shootin);
  $(".shootout").html(languageZH_HANS.shootout);
  $(".shootdoor").html(languageZH_HANS.shootdoor);
  $(".subP").html(languageZH_HANS.sub);
  $(".offside").html(languageZH_HANS.offside);
  $("#game-pause h3").html(languageZH_HANS.game_pause);
  $("#game-half h3").html(languageZH_HANS.game_half);
  $(".name-z").html(languageZH_HANS.name_z);
  $(".name-k").html(languageZH_HANS.name_k);

}

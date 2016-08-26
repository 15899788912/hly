// // JavaScript Document
// // 比赛开始
// $(function start() {
//     $(".gamestart").fadeIn("slow");
//     $(".gamestart .startbox").animate({
//         opacity: '1',
//         bottom: '50%',
//     }, 800);
//     $(".gamestart").animate({
//         opacity: '1',
//         bottom: '50%',
//     }, 2000);
//     $(".gamestart").fadeOut("slow");
// });
//
//
// //主队进球
// $(function goalz() {
//     $(".goal-z").fadeIn("slow");
//     $(".goal-z").animate({
//         right: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //客队进球
// $(function goalk() {
//     $(".goal-k").fadeIn("slow");
//     $(".goal-k").animate({
//         left: '.5rem',
//         opacity: '1',
//     }, 800);
// });
//
// //主队进球取消
// $(function goalz() {
//     $(".c-goal-z").fadeIn("slow");
//     $(".c-goal-z").animate({
//         right: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //客队进球取消
// $(function goalk() {
//     $(".c-goal-k").fadeIn("slow");
//     $(".c-goal-k").animate({
//         left: '.5rem',
//         opacity: '1',
//     }, 800);
// });
//
// //主队点球
// $(function penaltyz() {
//     $(".penalty-z").fadeIn("slow");
//     $(".penalty-z").animate({
//         right: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //客队点球
// $(function penaltyk() {
//     $(".penalty-k").fadeIn("slow");
//     $(".penalty-k").animate({
//         left: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //主队重罚点球
// $(function penaltyaz() {
//     $(".a-penalty-z").fadeIn("slow");
//     $(".a-penalty-z").animate({
//         right: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //客队重罚点球
// $(function penaltyak() {
//     $(".a-penalty-k").fadeIn("slow");
//     $(".a-penalty-k").animate({
//         left: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //主队罚失点球
// $(function penaltylz() {
//     $(".l-penalty-z").fadeIn("slow");
//     $(".l-penalty-z").animate({
//         right: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //客队罚失点球
// $(function penaltylk() {
//     $(".l-penalty-k").fadeIn("slow");
//     $(".l-penalty-k").animate({
//         left: '.5rem',
//         opacity: '1',
//     }, 800);
// });
//
// //主队取消点球
// $(function penaltycz() {
//     $(".c-penalty-z").fadeIn("slow");
//     $(".c-penalty-z").animate({
//         right: '.5rem',
//         opacity: '1',
//     }, 800);
// });
// //客队取消点球
// $(function penaltyck() {
//     $(".c-penalty-k").fadeIn("slow");
//     $(".c-penalty-k").animate({
//         left: '.5rem',
//         opacity: '1',
//     }, 800);
// });
//
// //主队角球
// $(function cornerz() {
//         $(".corner-z").fadeIn("slow");
//         $(".corner-z .text").animate({
//             right: '.1rem'
//         }, 800);
//         $(".corner-z .corner-e").animate({
//             height: "2.7rem",
//             opacity: "1"
//         }, 1200);
//         $(".corner-z .corner-e").animate({
//             height: ".22rem",
//             opacity: "0.4"
//         }, 10, cornerz);
//     })
// //客队角球
// $(function cornerk() {
//     $(".corner-k").fadeIn("slow");
//     $(".corner-k .text").animate({
//         left: '.1rem'
//     }, 800);
//     $(".corner-k .corner-e").animate({
//         height: "2.7rem",
//         opacity: "1"
//     }, 1200);
//     $(".corner-k .corner-e").animate({
//         height: ".22rem",
//         opacity: "0.4"
//     }, 10, cornerk);
// })

// //主队取消角球
// $(function ccz() {
//         $(".c-corner-z").fadeIn("slow");
//         $(".c-corner-z .text").animate({
//             right: '.1rem'
//         }, 800);
//         $(".c-corner-z .corner-e").animate({
//             height: "2.7rem"
//         }, 1200);
//         $(".c-corner-z .corner-e").animate({
//             height: "0rem"
//         }, 10, ccz);
//     })
// //客队取消角球
// $(function cck() {
//         $(".c-corner-k").fadeIn("slow");
//         $(".c-corner-k .text").animate({
//             left: '.1rem'
//         }, 800);
//         $(".c-corner-k .corner-e").animate({
//             height: "2.7rem"
//         }, 1200);
//         $(".c-corner-k .corner-e").animate({
//             height: "0rem"
//         }, 10, cck);
//     })
//
// //主队进攻
// $(function atz() {
//         $(".attack-z").fadeIn();
//         $(".attack-z .text").animate({
//             right: '3rem'
//         }, 800);
//         $(".attack-z .attack-bg").animate({
//             width: "4rem"
//         }, 1200);
//         $(".attack-z .attack-bg").animate({
//             width: "3.7rem"
//         }, 10, atz);
//     })
//     //客队进攻
// $(function atk() {
//     $(".attack-k").fadeIn("slow");
//     $(".attack-k .text").animate({
//         left: '3rem'
//     }, 800);
//     $(".attack-k .attack-bg").animate({
//         width: "4rem"
//     }, 1200);
//     $(".attack-k .attack-bg").animate({
//         width: "3.7rem"
//     }, 10, atk);
// })
//
// //主队危险进攻
// $(function atz() {
//         $(".d-attack-z").fadeIn("slow");
//         $(".d-attack-z .text").animate({
//             right: "1.3rem"
//         }, 800);
//         $(".d-attack-z .attack-bg").animate({
//             width: "5.5rem",
//             opacity: "1"
//         }, 1200);
//         $(".d-attack-z .attack-bg").animate({
//             width: "5rem",
//             opacity: "0.4"
//         }, 10, atz);
//     })
// //客队危险进攻
// $(function atk() {
//         $(".d-attack-k").fadeIn("slow");
//         $(".d-attack-k .text").animate({
//             left: '1.3rem'
//         }, 800);
//         $(".d-attack-k .attack-bg").animate({
//             width: "5.5rem",
//             opacity: "1"
//         }, 1200);
//         $(".d-attack-k .attack-bg").animate({
//             width: "5rem",
//             opacity: "0.4"
//         }, 10, atk);
//     })
//
// //主队球门球
// $(function kickz() {
//         $(".kick-z").fadeIn("slow");
//         $(".kick-z .text").animate({
//             left: '.4rem'
//         }, 800);
//         $(".kick-z .kick-z-bg").animate({
//             width: "1rem",
//             opacity: "1"
//         }, 1000);
//         $(".kick-z .kick-z-bg").animate({
//             width: ".24rem",
//             opacity: "0.4"
//         }, 10, kickz);
//     })
//     //客队球门球
// $(function kickk() {
//     $(".kick-k").fadeIn("slow");
//     $(".kick-k .text").animate({
//         right: '.4rem'
//     }, 800);
//     $(".kick-k .kick-k-bg").animate({
//         width: "1rem",
//         opacity: "1"
//     }, 1000);
//     $(".kick-k .kick-k-bg").animate({
//         width: ".24rem",
//         opacity: "0.4"
//     }, 10, kickk);
// })
//
// //主队掷界外球
// $(function obz() {
//     $(".outball-z").fadeIn("slow");
//     $(".outball-z .text").animate({
//         right: '2.2rem'
//     }, 800);
//     $(".outball-z .outball-z-bg").animate({
//         height: "1rem",
//         opacity: "1"
//     }, 1000);
//     $(".outball-z .outball-z-bg").animate({
//         height: ".23rem",
//         opacity: "0.4"
//     }, 10, obz);
// })
//
// //客队掷界外球
// $(function obk() {
//         $(".outball-k").fadeIn("slow");
//         $(".outball-k .text").animate({
//             left: '2.2rem'
//         }, 800);
//         $(".outball-k .outball-k-bg").animate({
//             height: "1rem",
//             opacity: "1"
//         }, 1000);
//         $(".outball-k .outball-k-bg").animate({
//             height: ".23rem",
//             opacity: "0.4"
//         }, 10, obk);
//     })
//
// //主队任意球
// $(function fkz() {
//         $(".freekick-z").fadeIn("slow");
//         $(".freekick-z .text").animate({
//             right: '3.7rem'
//         }, 800);
//         $(".freekick-z .fk-amt").animate({
//             opacity: "1"
//         }, 500);
//         $(".freekick-z .freekick-bg").animate({
//             width: "1.22rem",
//             opacity: "1"
//         }, 1000);
//         $(".freekick-z .freekick-bg").animate({
//             width: ".23rem",
//             opacity: "0.4"
//         }, 10);
//         $(".freekick-z .fk-amt").animate({
//             opacity: "0.6"
//         }, 500, fkz);
//     })
//
// //客队任意球
// $(function fkk() {
//     $(".freekick-k").fadeIn("slow");
//     $(".freekick-k .text").animate({
//         left: '3.7rem'
//     }, 800);
//     $(".freekick-k .fk-amt").animate({
//         opacity: "1"
//     }, 500);
//     $(".freekick-k .freekick-bg").animate({
//         width: "1.22rem",
//         opacity: "1"
//     }, 1000);
//     $(".freekick-k .freekick-bg").animate({
//         width: ".23rem",
//         opacity: "0.4"
//     }, 10);
//     $(".freekick-k .fk-amt").animate({
//         opacity: "0.6"
//     }, 500, fkk);
// })
//
// //主队任意球
// $(function dfkz() {
//     $(".d-freekick-z").fadeIn("slow");
//     $(".d-freekick-z .text").animate({
//         right: '1.6rem'
//     }, 800);
//     $(".d-freekick-z .fk-amt").animate({
//         opacity: "1"
//     }, 500);
//     $(".d-freekick-z .freekick-bg").animate({
//         width: "1.22rem",
//         opacity: "1"
//     }, 1000);
//     $(".d-freekick-z .freekick-bg").animate({
//         width: ".23rem",
//         opacity: "0.4"
//     }, 10);
//     $(".d-freekick-z .fk-amt").animate({
//         opacity: "0.6"
//     }, 500, dfkz);
// })
//
// //客队任意球
// $(function dfkk() {
//     $(".d-freekick-k").fadeIn("slow");
//     $(".d-freekick-k .text").animate({
//         left: '1.6rem'
//     }, 800);
//     $(".d-freekick-k .fk-amt").animate({
//         opacity: "1"
//     }, 500);
//     $(".d-freekick-k .freekick-bg").animate({
//         width: "1.22rem",
//         opacity: "1"
//     }, 1000);
//     $(".d-freekick-k .freekick-bg").animate({
//         width: ".23rem",
//         opacity: "0.4"
//     }, 10);
//     $(".d-freekick-k .fk-amt").animate({
//         opacity: "0.6"
//     }, 500, dfkk);
// })
//
// //主队犯规
// $(function foulz() {
//     $(".foul-z").fadeIn("slow");
//     $(".foul-z").animate({
//         left: '1.25rem'
//     }, 800);
// })
//
// //客队犯规
// $(function foulk() {
//     $(".foul-k").fadeIn("slow");
//     $(".foul-k").animate({
//         right: '1.25rem'
//     }, 800);
// })
//
// //主队红牌
// $(function redcardz() {
//     $(".redcard-z").fadeIn("slow");
//     $(".redcard-z").animate({
//         left: '1.25rem'
//     }, 800);
// })
//
// //客队红牌
// $(function redcardk() {
//     $(".redcard-k").fadeIn("slow");
//     $(".redcard-k").animate({
//         right: '1.25rem'
//     }, 800);
// })
//
// //主队红牌取消
// $(function redcardcz() {
//     $(".c-redcard-z").fadeIn("slow");
//     $(".c-redcard-z").animate({
//         left: '1.25rem'
//     }, 800);
// })
//
// //客队红牌取消
// $(function redcardck() {
//     $(".c-redcard-k").fadeIn("slow");
//     $(".c-redcard-k").animate({
//         right: '1.25rem'
//     }, 800);
// })
//
// //主队黄牌
// $(function yellowcardz() {
//         $(".yellowcard-z").fadeIn("slow");
//         $(".yellowcard-z").animate({
//             left: '1.25rem'
//         }, 800);
//     })
//     //客队黄牌
// $(function yellowcardk() {
//     $(".yellowcard-k").fadeIn("slow");
//     $(".yellowcard-k").animate({
//         right: '1.25rem'
//     }, 800);
// })
//
// //主队黄牌取消
// $(function yellowcardcz() {
//     $(".c-yellowcard-z").fadeIn("slow");
//     $(".c-yellowcard-z").animate({
//         left: '1.25rem'
//     }, 800);
// })
//
// //客队黄牌取消
// $(function yellowcardcz() {
//     $(".c-yellowcard-k").fadeIn("slow");
//     $(".c-yellowcard-k").animate({
//         right: '1.25rem'
//     }, 800);
// })
//
// //主队两黄变一红
// $(function yellowcardz() {
//         $(".yellow-red-z").fadeIn("slow");
//         $(".yellow-red-z").animate({
//             left: '1.25rem'
//         }, 800);
//     })
//     //客队两黄变一红
// $(function yellowcardk() {
//     $(".yellow-red-k").fadeIn("slow");
//     $(".yellow-red-k").animate({
//         right: '1.25rem'
//     }, 800);
// })
//
// //主队射门
// $(function shootz() {
//         $(".shoot-z").fadeIn("slow");
//         $(".shoot-z").animate({
//             right: '1.1rem'
//         }, 800);
//     })
//     //客队射门
// $(function shootk() {
//     $(".shoot-k").fadeIn("slow");
//     $(".shoot-k").animate({
//         left: '1.1rem'
//     }, 800);
// })
//
// //主队射正球门
// $(function shootinz() {
//         $(".shootin-z").fadeIn("slow");
//         $(".shootin-z").animate({
//             right: '1rem'
//         }, 800);
//     })
//     //客队射正球门
// $(function shootink() {
//         $(".shootin-k").fadeIn("slow");
//         $(".shootin-k").animate({
//             left: '1rem'
//         }, 800);
//     })
//     //主队射偏球门
// $(function shootoutz() {
//         $(".shootout-z").fadeIn("slow");
//         $(".shootout-z").animate({
//             right: '1rem'
//         }, 800);
//     })
//     //客队射偏球门
// $(function shootoutk() {
//         $(".shootout-k").fadeIn("slow");
//         $(".shootout-k").animate({
//             left: '1rem'
//         }, 800);
//     })
//     //主队射中门框
// $(function shootoutz() {
//         $(".shootdoor-z").fadeIn("slow");
//         $(".shootdoor-z").animate({
//             right: '1rem'
//         }, 800);
//     })
// //客队射是门框
// $(function shootoutk() {
//         $(".shootdoor-k").fadeIn("slow");
//         $(".shootdoor-k").animate({
//             left: '1rem'
//         }, 800);
//     })
//
// //主队换人
// $(function subz() {
//         $(".sub-z").fadeIn("slow");
//         $(".sub-z").animate({
//             left: '1.1rem'
//         }, 800);
//     })
//     //客队换人
// $(function subk() {
//         $(".sub-k").fadeIn("slow");
//         $(".sub-k").animate({
//             right: '1.1rem'
//         }, 800);
//     })
//     //主队换人
// $(function offsidez() {
//         $(".offside-z").fadeIn("slow");
//         $(".offside-z .yellow-line").animate({
//             opacity: "1"
//         }, 1200);
//         $(".offside-z .text").animate({
//             right: "1.5rem"
//         }, 800);
//         $(".offside-z .yellow-line").animate({
//             opacity: "0.4"
//         }, 10, offsidez);
//     })
// //客队换人
// $(function offsidek() {
//         $(".offside-k").fadeIn("slow");
//         $(".offside-k .yellow-line").animate({
//             opacity: "1"
//         }, 1200);
//         $(".offside-k .text").animate({
//             left: "1.5rem"
//         }, 800);
//         $(".offside-k .yellow-line").animate({
//             opacity: "0.4"
//         }, 10, offsidek);
//
//     })
//
// //比赛暂停
// $(function pause() {
//     $(".game-pause").fadeIn("slow");
// })
//
// //主队进球比分变化
// $(function scorez() {
//         $(".goal-score").fadeIn("slow");
//         $(".goal-score .score-h").animate({
//             top: "0%",
//             marginTop: "-.48rem"
//         }, 1000);
//         $(".goal-score .score-h-n").animate({
//             top: "50%",
//             marginTop: "-.24rem"
//         }, 1000);
//     })
    //     //客队进球比分变化
    // $(function scorek() {
    //     $(".goal-score").fadeIn("slow");
    //     $(".goal-score .score-v").animate({
    //         top: "0%",
    //         marginTop: "-.48rem"
    //     }, 1000);
    //     $(".goal-score .score-v-n").animate({
    //         top: "50%",
    //         marginTop: "-.24rem"
    //     }, 1000);
    // })
    // //主队危险任意球
// $(function zdwxryq(){
//   $(".d-freekick-z").fadeIn("slow");
//   $(".d-freekick-z .text").animate({
//       right: '1.6rem'
//   }, 800);
//   $(".d-freekick-z .fk-amt").animate({
//       opacity: "1"
//   }, 500);
//   $(".d-freekick-z .freekick-bg").animate({
//       width: "1.22rem",
//       opacity: "1"
//   }, 1000);
//   $(".d-freekick-z .freekick-bg").animate({
//       width: ".23rem",
//       opacity: "0.4"
//   }, 10);
//   $(".d-freekick-z .fk-amt").animate({
//       opacity: "0.6"
//   }, 500);
// })

// // 客队危险任意球
// $(function kdwxryq(){
//   $('.d-freekick-k').fadeIn('slow');
//   $(".d-freekick-k .text").animate({
//       left: '1.6rem'
//   }, 800);
//   $(".d-freekick-k .fk-amt").animate({
//       opacity: "1"
//   }, 500);
//   $(".d-freekick-k .freekick-bg").animate({
//       width: "1.22rem",
//       opacity: "1"
//   }, 1000);
//   $(".d-freekick-k .freekick-bg").animate({
//       width: ".23rem",
//       opacity: "0.4"
//   }, 10);
//   $(".d-freekick-k .fk-amt").animate({
//       opacity: "0.6"
//   }, 500);
// })

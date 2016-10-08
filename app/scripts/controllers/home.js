/**
 * Created by lenovoa on 2015/10/9.
 */
'use strict';

var home = angular.module("live1.home");

home.config(["$translateProvider", function ($translateProvider) {
    var translationsEn = {
        "HEAD_TITLE":	"One Score Touchscreen Version ",
        "LOGO_TITLE":	"One Score",
        "FOOTBALL_TITLE":	"Football  Score",
        "BASKETBALL_TITLE":	"Basketball Score",
        "LIVETV_TITLE":	"Football Video",
        "FOOTBALL_EXPONENT":	"Football Odds",
        "FOOTBALL_DATA":	"Football Data",
        "SPORTS_NEWS":	"Sports Information",
        "LOTTERY_TITLE":	"Lottery Draw",
        "LOTTERY_RESULTS":	"Results",
        "HONGKONG_LOTTERY":	"HK Lottery Draw",
        "UEFAEURO_TITLE":"Uefa Euro 2016",
        "HOT_MATCHES":	"Hot Matches",
        "GAMEGUESS_TITLE":"E-Sports",
        "THLOTTERY_TITLE":"lotto thai",
        "MATCHES_LIVING":	"{{total}} matches in play",
        "NUMLOTTERY_ISSUE":	"Phase {{issue}} lottery draw",
        "BEIJING_CAR_RACING":	"Beijing Car Racing",
        "BEIJING_CAR_RACING_ISSUE":	"Phase {{issue}} lottery draw",
        "FOOTER_PC_VERSION":	"PC",
        "FOOTER_CLIENT_DOWN":	"Download client-side",
        "FOOTER_TEXT":	"(Good Function, Good Experience )",
        "FOOTER_COPYRIGHT":	"All rights reserved: Shenzhen Huahai Leying Network Technology Co.Ltd        ICP Record: Guangdong ICP Reg.No.15041803",
        "BUTTON_SUBMIT":	"Confirm",
        "BUTTON_CANCEL":	"Cancel",
        "COUNTRY_SWITCHING":"Country/Region",
        "COUNTRY_ZH":"中国大陆",
        "COUNTRY_ZH_TW":"中國香港",
        "COUNTRY_TH":"ประเทศไทย",
        "COUNTRY_VI":"Việt Nam",
        "LANGUAGE_SWITCHING":	"Switch Language",
        "LANGUAGE_EN" : "English",
        "LANGUAGE_ZH":	"简体中文",
        "LANGUAGE_ZH_TW":	"繁体中文",
        "LANGUAGE_TH" : "ไทย",
        "LANGUAGE_VI" :　"Tiếng Việt",
        "IMG_LOGO":	"images/en/logo.png",
        "IMG_ADVERT_01":	"images/en/advert01.jpg",
        /*"IMG_ADVERT_02":	"images/en/advert02.jpg",
        "IMG_ADVERT_03":	"images/en/advert03.jpg",
        "IMG_ADVERT_04":	"images/en/advert04.jpg",*/
        "HANDICAP_VALUE_0_0":	"0",
        "HANDICAP_VALUE_0_25":	"0.25",
        "HANDICAP_VALUE_0_5":	"0.5",
        "HANDICAP_VALUE_0_75":	"0.75",
        "HANDICAP_VALUE_1_0":	"1",
        "HANDICAP_VALUE_1_25":	"1.25",
        "HANDICAP_VALUE_1_5":	"1.5",
        "HANDICAP_VALUE_1_75":	"1.75",
        "HANDICAP_VALUE_2_0":	"2",
        "HANDICAP_VALUE_2_25":	"2.25",
        "HANDICAP_VALUE_2_5":	"2.5",
        "HANDICAP_VALUE_2_75":	"2.75",
        "HANDICAP_VALUE_3_0":	"3",
        "HANDICAP_VALUE_3_25":	"3.25",
        "HANDICAP_VALUE_3_5":	"3.5",
        "HANDICAP_VALUE_3_75":	"3.75",
        "HANDICAP_VALUE_4_0":	"4",
        "HANDICAP_VALUE_4_25":	"4.25",
        "HANDICAP_VALUE_4_5":	"4.5",
        "HANDICAP_VALUE_4_75":	"4.75",
        "HANDICAP_VALUE_5_0":	"5",
        "HANDICAP_VALUE_5_25":	"5.25",
        "HANDICAP_VALUE_5_5":	"5.5",
        "HANDICAP_VALUE_5_75":	"5.75",
        "HANDICAP_VALUE_6_0":	"6",
        "HANDICAP_VALUE_6_25":	"6.25",
        "HANDICAP_VALUE_6_5":	"6.5",
        "HANDICAP_VALUE_6_75":	"6.75",
        "HANDICAP_VALUE_7_0":	"7",
        "HANDICAP_VALUE_7_25":	"7.25",
        "HANDICAP_VALUE_7_5":	"7.5",
        "HANDICAP_VALUE_7_75":	"7.75",
        "HANDICAP_VALUE_8_0":	"8",
        "HANDICAP_VALUE_8_25":	"8.25",
        "HANDICAP_VALUE_8_5":	"8.5",
        "HANDICAP_VALUE_8_75":	"8.75",
        "HANDICAP_VALUE_9_0":	"9",
        "HANDICAP_VALUE_9_25":	"9.25",
        "HANDICAP_VALUE_9_5":	"9.5",
        "HANDICAP_VALUE_9_75":	"9.75",
        "STATE_NOTSTART" :	"Pre-play",
        "STATE_FIRSTHALF" :	"1st Half",
        "STATE_MIDFIELD" :	"HT",
        "STATE_LASTHALF" :	"2nd Half",
        "STATE_OVERTIME" :	"Overtime",
        "STATE_PENALTY" :	"Penalty Kick",
        "STATE_FINISH" :	"FT",
        "STATE_CANCEL" :	"Cancel",
        "STATE_UNDETERMINED" :	"Undetermined",
        "STATE_CUT" :	"Abandoned",
        "STATE_INTERRUPT" :	"Interrupted",
        "STATE_DELAY" :	"Postponed",
        "DRAGON":	"Dragon",
        "TIGER":	"Tiger",
        "RAT":	"Rat",
        "CATTLE":	"Cow",
        "RABBIT":	"Rabbit",
        "SNAKE":	"Snake",
        "HORSE":	"Horse",
        "MONKEY":	"Monkey",
        "SHEEP":	"Sheep",
        "CHICKEN":	"Chook",
        "DOG":	"Dog",
        "PIG":	"Pig",
        "ODDS_SEAL":	"Entertained"
    }
    var translationsZH = {
        "HEAD_TITLE": "一比分触屏版",
        "HOME_KEYWORDS":"足球比分，比分直播，比分网，一比分",
        "HOME_DESCRIPTION":"一比分，专业的足球比分直播平台，快5秒的足球比分网，比分直播与比赛快速同步、牛B滚球指数，打造最权威、最专业的资讯数据，尽享足球精彩乐趣。",
        "LOGO_TITLE": "一比分",
        "FOOTBALL_TITLE": "足球比分",
        "BASKETBALL_TITLE": "篮球比分",
        "LIVETV_TITLE": "足球视频",
        "FOOTBALL_EXPONENT":"足球指数",
        "FOOTBALL_DATA":"足球数据",
        "SPORTS_NEWS": "体育资讯",
        "UEFAEURO_TITLE":"欧洲杯2016",
        "LOTTERY_TITLE": "彩票开奖",
        "LOTTERY_RESULTS": "开奖结果",
        "HONGKONG_LOTTERY": "香港开奖",
        "GAMEGUESS_TITLE":"游戏竞猜",
        "THLOTTERY_TITLE":"泰国彩票",
        "HOT_MATCHES": "热门赛事",
        "MATCHES_LIVING": "{{total}}场正在进行",
        "NUMLOTTERY_ISSUE": "第{{issue}}期开奖",
        "BEIJING_CAR_RACING": "北京赛车",
        "BEIJING_CAR_RACING_ISSUE": "第{{issue}}期开奖",
        "FOOTER_PC_VERSION": "电脑版",
        "FOOTER_CLIENT_DOWN": "APP下载",
        "FOOTER_TEXT": "（功能全，体验好）",
        "FOOTER_COPYRIGHT": "一比分(13322.com)版权所有  ©粤ICP备15041803号",
        "BUTTON_SUBMIT": "确定",
        "BUTTON_CANCEL": "取消",
        "COUNTRY_SWITCHING":"国家/地区",
        "COUNTRY_ZH":"中国大陆",
        "COUNTRY_ZH_TW":"中國香港",
        "COUNTRY_TH":"ประเทศไทย",
        "COUNTRY_VI":"Việt Nam",
        "LANGUAGE_SWITCHING": "语言切换",
        "LANGUAGE_EN" : "English",
        "LANGUAGE_ZH": "简体中文",
        "LANGUAGE_ZH_TW": "繁體中文",
        "LANGUAGE_TH" : "ไทย",
        "LANGUAGE_VI" :　"Tiếng Việt",
        "IMG_LOGO": "images/zh/logo.png",
        // "IMG_ADVERT_01": "images/zh/advert01.jpg",
        "IMG_ADVERT_02": "images/zh/advert02.jpg",
        "IMG_ADVERT_03": "images/zh/advert03.jpg",
        "IMG_ADVERT_04": "images/zh/advert04.jpg",
        "HANDICAP_VALUE_0_0": "平手",
        "HANDICAP_VALUE_0_25": "平/半",
        "HANDICAP_VALUE_0_5": "半球",
        "HANDICAP_VALUE_0_75": "半/一",
        "HANDICAP_VALUE_1_0": "一球",
        "HANDICAP_VALUE_1_25": "一/球半",
        "HANDICAP_VALUE_1_5": "球半",
        "HANDICAP_VALUE_1_75": "球半/两",
        "HANDICAP_VALUE_2_0": "两球",
        "HANDICAP_VALUE_2_25": "两/两球半",
        "HANDICAP_VALUE_2_5": "两球半",
        "HANDICAP_VALUE_2_75": "两球半/三",
        "HANDICAP_VALUE_3_0": "三球",
        "HANDICAP_VALUE_3_25": "三/三球半",
        "HANDICAP_VALUE_3_5": "三球半",
        "HANDICAP_VALUE_3_75": "三球半/四",
        "HANDICAP_VALUE_4_0": "四球",
        "HANDICAP_VALUE_4_25": "四/四球半",
        "HANDICAP_VALUE_4_5": "四球半",
        "HANDICAP_VALUE_4_75": "四球半/五",
        "HANDICAP_VALUE_5_0": "五球",
        "HANDICAP_VALUE_5_25": "五/五球半",
        "HANDICAP_VALUE_5_5": "五球半",
        "HANDICAP_VALUE_5_75": "五球半/六",
        "HANDICAP_VALUE_6_0": "六球",
        "HANDICAP_VALUE_6_25": "六/六球半",
        "HANDICAP_VALUE_6_5": "六球半",
        "HANDICAP_VALUE_6_75": "六球半/七",
        "HANDICAP_VALUE_7_0": "七球",
        "HANDICAP_VALUE_7_25": "七/七球半",
        "HANDICAP_VALUE_7_5": "七球半",
        "HANDICAP_VALUE_7_75": "七球半/八",
        "HANDICAP_VALUE_8_0": "八球",
        "HANDICAP_VALUE_8_25": "八/八球半",
        "HANDICAP_VALUE_8_5": "八球半",
        "HANDICAP_VALUE_8_75": "八球半/九",
        "HANDICAP_VALUE_9_0": "九球",
        "HANDICAP_VALUE_9_25": "九/九球半",
        "HANDICAP_VALUE_9_5": "九球半",
        "HANDICAP_VALUE_9_75": "九球半/十",
        "STATE_NOTSTART" : "未开",
        "STATE_FIRSTHALF" : "上半场",
        "STATE_MIDFIELD" : "中场",
        "STATE_LASTHALF" : "下半场",
        "STATE_OVERTIME" : "加时",
        "STATE_PENALTY" : "点球",
        "STATE_FINISH" : "完场",
        "STATE_CANCEL" : "取消",
        "STATE_UNDETERMINED" : "待定",
        "STATE_CUT" : "腰斩",
        "STATE_INTERRUPT" : "中断",
        "STATE_DELAY" : "推迟",
        "DRAGON":"龙",
        "TIGER":"虎",
        "RAT":"鼠",
        "CATTLE":"牛",
        "RABBIT":"兔",
        "SNAKE":"蛇",
        "HORSE":"马",
        "MONKEY":"猴",
        "SHEEP":"羊",
        "CHICKEN":"鸡",
        "DOG":"狗",
        "PIG":"猪",
        "ODDS_SEAL": "封"

    };
    var translationsZH_HANS = {
        "HEAD_TITLE": "壹比分觸屏版",
        "HOME_KEYWORDS":"足球比分，比分直播，比分網，一比分",
        "HOME_DESCRIPTION":"一比分，專業的足球比分直播平台，快5秒的足球比分網，比分直播與比賽快速同步、牛B滾球指數，打造最權威、最專業的資訊數據，盡享足球精彩樂趣。",
        "LOGO_TITLE": "壹比分",
        "FOOTBALL_TITLE": "足球比分",
        "BASKETBALL_TITLE": "籃球比分",
        "LIVETV_TITLE": "足球視頻",
        "FOOTBALL_EXPONENT":"足球指數",
        "FOOTBALL_DATA":"足球數據",
        "SPORTS_NEWS": "體育資訊",
        "UEFAEURO_TITLE":"歐洲杯2016",
        "LOTTERY_TITLE": "彩票開獎",
        "LOTTERY_RESULTS": "開獎結果",
        "HONGKONG_LOTTERY": "香港開獎",
        "HOT_MATCHES": "熱門賽事",
        "GAMEGUESS_TITLE":"遊戲競猜",
        "THLOTTERY_TITLE":"泰國彩票",
        "MATCHES_LIVING": "{{total}}場正在進行",
        "NUMLOTTERY_ISSUE": "第{{issue}}期開獎",
        "BEIJING_CAR_RACING": "北京賽車",
        "BEIJING_CAR_RACING_ISSUE": "第{{issue}}期開獎",
        "FOOTER_PC_VERSION": "電腦版",
        "FOOTER_CLIENT_DOWN": "APP下載",
        "FOOTER_TEXT": "（功能全，體驗好）",
        "FOOTER_COPYRIGHT": "壹比分(13322.com)版權所有  ©粵ICP備15041803號",
        "BUTTON_SUBMIT": "確定",
        "BUTTON_CANCEL": "取消",
        "COUNTRY_SWITCHING":"國家/地區",
        "COUNTRY_ZH":"中国大陆",
        "COUNTRY_ZH_TW":"中國香港",
        "COUNTRY_TH":"ประเทศไทย",
        "COUNTRY_VI":"Việt Nam",
        "LANGUAGE_SWITCHING": "語言切換",
        "LANGUAGE_EN" : "English",
        "LANGUAGE_ZH": "简体中文",
        "LANGUAGE_ZH_TW": "繁體中文",
        "LANGUAGE_TH" : "ไทย",
        "LANGUAGE_VI" :　"Tiếng Việt",
        "IMG_LOGO": "images/zh-TW/logo.png",
        // "IMG_ADVERT_01": "images/zh-TW/advert01.jpg",
        "IMG_ADVERT_02": "images/zh-TW/advert02.jpg",
        "IMG_ADVERT_03": "images/zh-TW/advert03.jpg",
        "IMG_ADVERT_04": "images/zh-TW/advert04.jpg",
        "HANDICAP_VALUE_0_0": "平手",
        "HANDICAP_VALUE_0_25": "平/半",
        "HANDICAP_VALUE_0_5": "半球",
        "HANDICAP_VALUE_0_75": "半/一",
        "HANDICAP_VALUE_1_0": "一球",
        "HANDICAP_VALUE_1_25": "一/球半",
        "HANDICAP_VALUE_1_5": "球半",
        "HANDICAP_VALUE_1_75": "球半/兩",
        "HANDICAP_VALUE_2_0": "兩球",
        "HANDICAP_VALUE_2_25": "兩/兩球半",
        "HANDICAP_VALUE_2_5": "兩球半",
        "HANDICAP_VALUE_2_75": "兩球半/三",
        "HANDICAP_VALUE_3_0": "三球",
        "HANDICAP_VALUE_3_25": "三/三球半",
        "HANDICAP_VALUE_3_5": "三球半",
        "HANDICAP_VALUE_3_75": "三球半/四",
        "HANDICAP_VALUE_4_0": "四球",
        "HANDICAP_VALUE_4_25": "四/四球半",
        "HANDICAP_VALUE_4_5": "四球半",
        "HANDICAP_VALUE_4_75": "四球半/五",
        "HANDICAP_VALUE_5_0": "五球",
        "HANDICAP_VALUE_5_25": "五/五球半",
        "HANDICAP_VALUE_5_5": "五球半",
        "HANDICAP_VALUE_5_75": "五球半/六",
        "HANDICAP_VALUE_6_0": "六球",
        "HANDICAP_VALUE_6_25": "六/六球半",
        "HANDICAP_VALUE_6_5": "六球半",
        "HANDICAP_VALUE_6_75": "六球半/七",
        "HANDICAP_VALUE_7_0": "七球",
        "HANDICAP_VALUE_7_25": "七/七球半",
        "HANDICAP_VALUE_7_5": "七球半",
        "HANDICAP_VALUE_7_75": "七球半/八",
        "HANDICAP_VALUE_8_0": "八球",
        "HANDICAP_VALUE_8_25": "八/八球半",
        "HANDICAP_VALUE_8_5": "八球半",
        "HANDICAP_VALUE_8_75": "八球半/九",
        "HANDICAP_VALUE_9_0": "九球",
        "HANDICAP_VALUE_9_25": "九/九球半",
        "HANDICAP_VALUE_9_5": "九球半",
        "HANDICAP_VALUE_9_75": "九球半/十",
        "STATE_NOTSTART" : "未開",
        "STATE_FIRSTHALF" : "上半場",
        "STATE_MIDFIELD" : "中場",
        "STATE_LASTHALF" : "下半場",
        "STATE_OVERTIME" : "加時",
        "STATE_PENALTY" : "點球",
        "STATE_FINISH" : "完場",
        "STATE_CANCEL" : "取消",
        "STATE_UNDETERMINED" : "待定",
        "STATE_CUT" : "腰斬",
        "STATE_INTERRUPT" : "中斷",
        "STATE_DELAY" : "推遲",
        "DRAGON":"龍",
        "TIGER":"虎",
        "RAT":"鼠",
        "CATTLE":"牛",
        "RABBIT":"兔",
        "SNAKE":"蛇",
        "HORSE":"馬",
        "MONKEY":"猴",
        "SHEEP":"羊",
        "CHICKEN":"雞",
        "DOG":"狗",
        "PIG":"豬",
        "ODDS_SEAL": "封"

    }
    var translationsTH　= {
      HEAD_TITLE:"วันสกอร์รุ่นหน้าจอสัมผัส ",
      "LOGO_TITLE":"วันสกอร์",
      "FOOTBALL_TITLE":"สกอร์ฟุตบอล",
      "BASKETBALL_TITLE":"สกอร์บาสเกตบอล",
      "LIVETV_TITLE":"วิดีโอฟุตบอล",
      "FOOTBALL_EXPONENT":"ออดซฟุตบอล",
      "FOOTBALL_DATA":"ข้อมูลฟุตบอล",
      "SPORTS_NEWS":	"ข่าวกีฬา",
      "LOTTERY_TITLE":"การออกผลล็อตเตอรี่",
      "UEFAEURO_TITLE":"Uefa Euro 2016",
      "LOTTERY_RESULTS":"ผลล็อตเตอรี่",
      "HONGKONG_LOTTERY":"ล็อตเตอรี่ฮ่องกง",
      "HOT_MATCHES":"เกมนิยม",
      "GAMEGUESS_TITLE":"E-Sports",
      "THLOTTERY_TITLE":"lotto thai",
      "MATCHES_LIVING":"{{total}}เกมกำลังแข่งอยู่",
      "NUMLOTTERY_ISSUE":"ออกผลล็อตเตอรี่งวดที่{{issue}}",
      "BEIJING_CAR_RACING":"การแข่งรถปักกิ่ง",
      "BEIJING_CAR_RACING_ISSUE":"ออกผลล็อตเตอรี่งวดที่{{issue}}",
      "FOOTER_PC_VERSION":"เวอร์ชั่นคอมพิวเตอร์",
      "FOOTER_CLIENT_DOWN":"ดาวน์โหลด APP",
      "FOOTER_TEXT":"ฟังก์ชันสมบูรณ์ สัมผัสดี",
      "FOOTER_COPYRIGHT":"วันสกอร์(13322.com)ลิขสิทธิ์  ©粤ICP备15041803号",
      "BUTTON_SUBMIT":"ยืนยัน",
      "BUTTON_CANCEL":"ยกเลิก",
      "COUNTRY_SWITCHING":"ประเทศ/ภูมิภาค",
      "COUNTRY_ZH":"中国大陆",
      "COUNTRY_ZH_TW":"中國香港",
      "COUNTRY_TH":"ประเทศไทย",
      "COUNTRY_VI":"Việt Nam",
      "LANGUAGE_SWITCHING":"สลับภาษา ",
      "LANGUAGE_EN" : "English",
      "LANGUAGE_ZH":"简体中文",
      "LANGUAGE_ZH_TW":"繁體中文",
      "LANGUAGE_TH" : "ไทย",
      "LANGUAGE_VI" :　"Tiếng Việt",
      "IMG_LOGO":"images/th/logo.png",
      "IMG_ADVERT_01":"images/th/advert01.jpg",
      /*"IMG_ADVERT_02":"images/th/advert02.jpg",
      "IMG_ADVERT_03":"images/th/advert03.jpg",
      "IMG_ADVERT_04":"images/th/advert04.jpg",*/
      "HANDICAP_VALUE_0_0":"0",
      "HANDICAP_VALUE_0_25":"0/0.5",
      "HANDICAP_VALUE_0_5":"0.5",
      "HANDICAP_VALUE_0_75":"0.5/1",
      "HANDICAP_VALUE_1_0":"1",
      "HANDICAP_VALUE_1_25":"1/1.5",
      "HANDICAP_VALUE_1_5":"1.5",
      "HANDICAP_VALUE_1_75":"1.5/2",
      "HANDICAP_VALUE_2_0":"2",
      "HANDICAP_VALUE_2_25":"2/2.5",
      "HANDICAP_VALUE_2_5":"2.5",
      "HANDICAP_VALUE_2_75":"2.5/3",
      "HANDICAP_VALUE_3_0":"3",
      "HANDICAP_VALUE_3_25":"3/3.5",
      "HANDICAP_VALUE_3_5":"3.5",
      "HANDICAP_VALUE_3_75":"3.5/4",
      "HANDICAP_VALUE_4_0":"4",
      "HANDICAP_VALUE_4_25":"4/4.5",
      "HANDICAP_VALUE_4_5":"4.5",
      "HANDICAP_VALUE_4_75":"4.5/5",
      "HANDICAP_VALUE_5_0":"5",
      "HANDICAP_VALUE_5_25":"5/5.5",
      "HANDICAP_VALUE_5_5":"5.5",
      "HANDICAP_VALUE_5_75":"5.5/6",
      "HANDICAP_VALUE_6_0":"6",
      "HANDICAP_VALUE_6_25":"6/6.5",
      "HANDICAP_VALUE_6_5":"6.5",
      "HANDICAP_VALUE_6_75":"6.5/7",
      "HANDICAP_VALUE_7_0":"7",
      "HANDICAP_VALUE_7_25":"7/7.5",
      "HANDICAP_VALUE_7_5":"7.5",
      "HANDICAP_VALUE_7_75":"7.5/8",
      "HANDICAP_VALUE_8_0":"8",
      "HANDICAP_VALUE_8_25":"8/8.5",
      "HANDICAP_VALUE_8_5":"8.5",
      "HANDICAP_VALUE_8_75":"8.5/9",
      "HANDICAP_VALUE_9_0":"9",
      "HANDICAP_VALUE_9_25":"9/9.5",
      "HANDICAP_VALUE_9_5":"9.5",
      "HANDICAP_VALUE_9_75":"9.5/10",
      "STATE_NOTSTART" :"ยังไม่เริ่ม",
      "STATE_FIRSTHALF" :"ครื่งแรก",
      "STATE_MIDFIELD" :"H-T",
      "STATE_LASTHALF" :"ครื่งหลัง",
      "STATE_OVERTIME" :"ต่อเวลา",
      "STATE_PENALTY" :"ยิงจุดโทษ",
      "STATE_FINISH" :"จบ",
      "STATE_CANCEL" :"ยกเลิก",
      "STATE_UNDETERMINED" :"รอแจ้ง",
      "STATE_CUT" :"Abandoned",
      "STATE_INTERRUPT" :"หยุดชะงัก",
      "STATE_DELAY" :"ชะลอ",
      "DRAGON":"มะโรง",
      "TIGER":"ขาล",
      "RAT":"ชวด",
      "CATTLE":"ฉลู",
      "RABBIT":"เถาะ",
      "SNAKE":"มะเส็ง",
      "HORSE":"มะเมีย",
      "MONKEY":"วอก",
      "SHEEP":"มะแม",
      "CHICKEN":"ระกา",
      "DOG":"จอ",
      "PIG":"กุน",
      "ODDS_SEAL":"ปิด"
    }
    var translationsVI = {
      "HEAD_TITLE":"Tỷ Số Nhất bản màn hình cảm ứng",
      "LOGO_TITLE":"Tỷ Số Nhất",
      "FOOTBALL_TITLE":"Tỷ số bóng đá",
      "BASKETBALL_TITLE":"Tỷ số bóng rổ",
      "LIVETV_TITLE":"Video bóng đá ",
      "FOOTBALL_EXPONENT":"Chỉ số bóng đá",
      "FOOTBALL_DATA":"dữ liệu bóng đá ",
      "SPORTS_NEWS":	"tin tức thể thao",
      "LOTTERY_TITLE":"Xổ số",
      "UEFAEURO_TITLE":"Uefa Euro 2016",
      "LOTTERY_RESULTS":"Kết quả xổ số",
      "HONGKONG_LOTTERY":"HK xổ số",
      "HOT_MATCHES":"Giải đấu hot",
      "GAMEGUESS_TITLE":"E-Sports",
      "THLOTTERY_TITLE":"lotto thai",
      "MATCHES_LIVING":"{{total}} đang thi đấu",
      "NUMLOTTERY_ISSUE":"Đang giải thưởng xổ số kỳ{{issue}}",
      "BEIJING_CAR_RACING":"Đua xe Bắc Kinh",
      "BEIJING_CAR_RACING_ISSUE":"Đang giải thưởng kỳ{{issue}}",
      "FOOTER_PC_VERSION":"Bản máy tính",
      "FOOTER_CLIENT_DOWN":"Download APP",
      "FOOTER_TEXT":"Công năng đầy đủ, cẩm nhận tốt",
      "FOOTER_COPYRIGHT":"Bản quyền Tỷ Số Nhất(13322.com)thuộc © Quảng Đông ICP số 15.041.803",
      "BUTTON_SUBMIT":"OK",
      "BUTTON_CANCEL":"Hủy",
      "COUNTRY_SWITCHING":"Nước",
      "COUNTRY_ZH":"中国大陆",
      "COUNTRY_ZH_TW":"中國香港",
      "COUNTRY_TH":"ประเทศไทย",
      "COUNTRY_VI":"Việt Nam",
      "LANGUAGE_SWITCHING":"Ngôn ngữ ",
      "LANGUAGE_EN" : "English",
      "LANGUAGE_ZH": "简体中文",
      "LANGUAGE_ZH_TW": "繁體中文",
      "LANGUAGE_TH" : "ไทย",
      "LANGUAGE_VI" :　"Tiếng Việt",
      "IMG_LOGO":"images/vi/logo.png",
      "IMG_ADVERT_01":"images/vi/advert01.jpg",
      /*"IMG_ADVERT_02":"images/vi/advert02.png",
      "IMG_ADVERT_03":"images/vi/advert03.png",
      "IMG_ADVERT_04":"images/vi/ advert04.png",*/
      "HANDICAP_VALUE_0_0":"0",
      "HANDICAP_VALUE_0_25":"0.25",
      "HANDICAP_VALUE_0_5":"0.5",
      "HANDICAP_VALUE_0_75":"0.75",
      "HANDICAP_VALUE_1_0":"1",
      "HANDICAP_VALUE_1_25":"1.25",
      "HANDICAP_VALUE_1_5":"1.5",
      "HANDICAP_VALUE_1_75":"1.75",
      "HANDICAP_VALUE_2_0":"2",
      "HANDICAP_VALUE_2_25":"2.25",
      "HANDICAP_VALUE_2_5":"2.5",
      "HANDICAP_VALUE_2_75":"2.75",
      "HANDICAP_VALUE_3_0":"3",
      "HANDICAP_VALUE_3_25":"3.25",
      "HANDICAP_VALUE_3_5":"3.5",
      "HANDICAP_VALUE_3_75":"3.75",
      "HANDICAP_VALUE_4_0":"4",
      "HANDICAP_VALUE_4_25":"4.25",
      "HANDICAP_VALUE_4_5":"4.5",
      "HANDICAP_VALUE_4_75":"4.75",
      "HANDICAP_VALUE_5_0":"5",
      "HANDICAP_VALUE_5_25":"5.25",
      "HANDICAP_VALUE_5_5":"5.5",
      "HANDICAP_VALUE_5_75":"5.75",
      "HANDICAP_VALUE_6_0":"6",
      "HANDICAP_VALUE_6_25":"6.25",
      "HANDICAP_VALUE_6_5":"6.5",
      "HANDICAP_VALUE_6_75":"6.75",
      "HANDICAP_VALUE_7_0":"7",
      "HANDICAP_VALUE_7_25":"7.25",
      "HANDICAP_VALUE_7_5":"7.5",
      "HANDICAP_VALUE_7_75":"7.75",
      "HANDICAP_VALUE_8_0":"8",
      "HANDICAP_VALUE_8_25":"8.25",
      "HANDICAP_VALUE_8_5":"8.5",
      "HANDICAP_VALUE_8_75":"8.75",
      "HANDICAP_VALUE_9_0":"9",
      "HANDICAP_VALUE_9_25":"9.25",
      "HANDICAP_VALUE_9_5":"9.5",
      "HANDICAP_VALUE_9_75":"9.75",
      "STATE_NOTSTART" :"Chưa bắt đầu",
      "STATE_FIRSTHALF" :"Hiệp 1",
      "STATE_MIDFIELD" :"Giữa trận",
      "STATE_LASTHALF" :"Hiệp 2",
      "STATE_OVERTIME" :"Thêm giờ",
      "STATE_PENALTY" :"Hình phạt",
      "STATE_FINISH" :"Đã kết thúc",
      "STATE_CANCEL" :"Hủy",
      "STATE_UNDETERMINED" :"chưa quyết định",
      "STATE_CUT" :"Tạm dừng",
      "STATE_INTERRUPT" :"Gián đoạn",
      "STATE_DELAY" :"Hoãn lại",
      "DRAGON":"Rồng",
      "TIGER":"Hổ",
      "RAT":"Chuột",
      "CATTLE":"Bò",
      "RABBIT":"Thỏ",
      "SNAKE":"Rắn,",
      "HORSE":"Ngựa,",
      "MONKEY":"Khỉ",
      "SHEEP":"Cừu,",
      "CHICKEN":"Gà,",
      "DOG":"Chó,",
      "PIG":"Lợn,",
      "ODDS_SEAL":"Hết giờ chơi"
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
        'en_US': 'en',
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


home.controller("HomeController", [
    "$scope",
    "$window",
    "$timeout",
    "$translate",
    "HomeServiceFactory",
    function ($scope, $window, $timeout, $translate, HomeServiceFactory) {
        $scope.$watch("$viewContentLoaded", function () {
            $scope.language = $scope.getLanguage();
            $scope.initTimeCountry();//初始化时区、国家
            $scope.oddsFilterCookieValue = asiaLetOdds;
           $scope.initLanguageItems();
          //$scope.initCountryItems();
          $translate(['COUNTRY_ZH', 'COUNTRY_ZH_TW','COUNTRY_TH','COUNTRY_VI']).then(
            function (translations) {
              $scope.sampleCountryItems = [
                {"name": translations.COUNTRY_ZH, "value": 'c-zh', "checked": false},
                {"name": translations.COUNTRY_ZH_TW, "value": 'c-zh-tw', "checked": false},
                {"name": translations.COUNTRY_TH, "value": 'c-th', "checked": false},
                {"name": translations.COUNTRY_VI, "value": 'c-vi', "checked": false},
              ];
              $scope.languageSetOpen();
            }
          );
          $scope.initBanner();
          $scope.loadHomeData();
        });

        $scope.loadHomeData = function() {
            $scope.initLanguageItems();
            $scope.initCountryItems();
            $scope.initHandicapValueMap();
            $scope.initFootballStateI18n();
            $scope.initTwelveZodiac();
            HomeServiceFactory.loadHomeData($scope, $timeout);

        }

        $scope.initTimeCountry=function(){
            //时区
            var timezone = localStorage.getItem("timezone");
            if (timezone == null) {
                /*var date=new Date();
                var tz=-(date.getTimezoneOffset()/60);*/
                timezone = defaultTimeZoneKey;
                localStorage.setItem("timezone",defaultTimeZoneKey);
            }
            $scope.timezone= timezone;
            //国家
            var country = localStorage.getItem("country");
            if (country == null) {
                country = defaultCountry;
            }
            $scope.country =country;
        }
        /*初始化banner图*/
        $scope.initBanner=function(){
          var viUrl='',thUrl='';
          if(mobileUtil.isAndroid){
              viUrl = 'http://m.13322.com/fileServer/apk/download/9bf99a4ee4d28a13c174939804a40638 ';
              thUrl = 'http://m.13322.com/fileServer/apk/download/ac29b9091b95bcea065fc30bb1d3f8b6';
          }else if(mobileUtil.isIos){
              viUrl = 'https://itunes.apple.com/cn/app/ty-so-nhat-truyen-thong-ty/id1120666881?mt=8';
              thUrl = 'https://itunes.apple.com/cn/app/wan-skxr-x-phkila-thi-fas/id1118896699?mt=8';
          }
          //各国家banner数组
          var ads_vi = [
                {"picUrl" : "images/vi/advert01.jpg", "operation" : viUrl},
                {"picUrl" : "images/vi/advert02.jpg", "operation" : "#/"}/*,
                {"picUrl" : "images/vi/advert03.jpg", "operation" : "#/"}*/
              ];
          var ads_th = [
                {"picUrl" : "images/th/advert01.jpg", "operation" :thUrl},
                {"picUrl" : "images/th/advert02.jpg", "operation" : "#/"}/*,
                {"picUrl" : "images/th/advert03.jpg", "operation" : "#/"}*/
              ];
          var ads_en = [
                {"picUrl" : "images/en/advert01.jpg", "operation" : "#/"}/*,
                {"picUrl" : "images/en/advert02.jpg", "operation" : "#/"},
                {"picUrl" : "images/en/advert03.jpg", "operation" : "#/"}*/
              ];
          var ads_zh = [
              {"picUrl" : "images/zh/advert06.jpg", "operation" : "/news.html"},
              {"picUrl" : "images/zh/advert08.jpg", "operation" : "/live"}/*,
              {"picUrl" : "images/zh/advert04.jpg", "operation" : "#/"}*/
          ];
          var ads_zh_TW = [
              {"picUrl" : "images/zh-TW/advert06.jpg", "operation" : "/news.html"},
              {"picUrl" : "images/zh-TW/advert08.jpg", "operation" : "/live#/"}/*,
              {"picUrl" : "images/zh-TW/advert04.jpg", "operation" : "#/"}*/
          ];
          if($scope.country == 'c-zh') {
                $scope.advertisements = ads_zh;
            } else if($scope.country == 'c-zh-tw') {
                $scope.advertisements = ads_zh_TW;
            } else if($scope.country == 'c-vi') {
               $scope.advertisements = ads_vi;
            } else if($scope.country == 'c-th') {
              $scope.advertisements = ads_th;
            } /*else if ($scope.country == 'en') {
              $scope.advertisements = ads_en;
            }*/
            // var  apNum=0,isloop=false,page=null;
            var apNum=5000,isloop=true,page='.pagination';
            /*if($scope.country == 'c-zh'||$scope.country == 'c-zh-tw'){
			   angular.element($("#m_game")).removeClass("hidden");
            }else{
			   angular.element($("#m_game")).addClass("hidden");
            }*/
            $timeout(function() {
                var mySwiper2 = new Swiper('#banner', {
                    autoplay: apNum,
                    visibilityFullFit: true,
                    loop: isloop,
                    pagination: page,
                    lazyLoading : true
                });
            }, 200);
        }
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

        //切换语言
        $scope.languageSetOpen = function ($event) {
            angular.element($("html")).addClass("body_h");
            angular.element($("body")).addClass("body_h");
            //angular.element($(".asort")).eq($($event.target).parent().index()).addClass('show');
            angular.element($("#sort_content")).addClass("show");
            //默认选中语言
            $scope.defaultSelect('language');
             //默认选中国家
            $scope.defaultSelect('country');
        }

        //根据key从localStorage中获取对象
        $scope.getObjectFromLocalStorage = function (key) {
            return localStorage.getItem(key);
        }

        $scope.putObjectToLocalStorage = function (key, value) {
            localStorage.setItem(key, value);
        }

        $scope.removeObjectFromLocalStorage = function (key) {
            localStorage.removeItem(key);
        }

        $scope.clickCount = function ($event) {
          // 根据不同的终端，
          if(mobileUtil.isAndroid){
            _hmt.push(['_trackEvent', 'appWeb下载', 'click', 'Android']);

          }else if(mobileUtil.isIos){
            _hmt.push(['_trackEvent', 'appWeb下载', 'click', 'iPhone']);
          }
        }

        $scope.languageSetClose = function ($event) {
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#sort_content")).removeClass("show");
            //event.currentTarget指向事件所绑定的元素，而event.target始终指向事件发生时的元素
            var _this = $($event.currentTarget);
            $timeout(function () {
                _this.parent().parent().parent().removeClass('show');
            }, 300);
            navMap();
        }
        var navMap = function(){
          var navid = window.localStorage.getItem("nav_selected") || "";
          var href = "";
          switch(navid){
            case "nav1" :
              href = window.location.origin + "/live";
              break;
            case "nav2" :
              href = window.location.origin + "/basket";
              break;
            case "nav3" :
              href = window.location.origin + "/index.html";
              break;
            case "nav4" :
              href = window.location.origin + "/odds";
              break;
            case "nav5" :
              href = window.location.origin + "/data";
              break;
            case "nav6" :
              href = window.location.origin + "/basket/database.html";
              break;
            case "nav7" :
              href = window.location.origin + "/video";
              break;
            case "nav8" :
              href = window.location.origin + "/kj";
              break;
            case "nav9" :
              href = window.location.origin + "/gjcp/thai.html";
              break;
            default :
              href = window.location.origin + "/index.html";
              break;
          }
          window.location.href = href;
        }
        $scope.languageSetCancelClick = function ($event) {
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#sort_content")).removeClass("show");
            $timeout(function () {
                angular.element($("#asort-filter")).removeClass('show');
            }, 300);
            navMap();

        }

        $scope.languageSetSubmitClick = function ($event) {
            if ($scope.language == null) {
                $scope.language = defaultLanguageKey;
            }
            if ($scope.country == null) {
                $scope.country = defaultCountry;
            }
            //国际、大陆版本控制
            if(isInternational){
                /*国际版专用*/
                if($scope.country == 'c-zh'||$scope.country == 'c-zh-tw'){ //中国大陆、中国香港
                    var lan=$scope.country=='c-zh'?'zh':'zh-TW';
                    window.location.href=mainlandUrl+lan;
                    return;
                }
                /*else if($scope.country == 'c-th'){ //泰语
                    window.location.href=h5ThUrl;
                    return;
                }*/
                else if($scope.country == 'c-vi'){  //越南语
                    window.location.href=h5ViUrl;
                    return;
                }
                else{
                  $scope.putObjectToLocalStorage("language", $scope.language);
                  $scope.putObjectToLocalStorage("country", $scope.country);
                }
            }else{
                /*大陆版专用*/
                if($scope.country == 'c-th'){ //泰语
                    window.location.href=h5ThUrl;
                    return;
                }else if($scope.country == 'c-vi'){  //越南语
                    window.location.href=h5ViUrl;
                    return;
                }else{
                   $scope.putObjectToLocalStorage("language", $scope.language);
                   $scope.putObjectToLocalStorage("country", $scope.country);
                   $scope.initBanner();
                }
            }
            //切换语言展现
            $translate.use($scope.language);
            $scope.timezone = $scope.country == "c-vi" || $scope.country == "c-th" ? 7 : 8;
            $scope.putObjectToLocalStorage("timezone", $scope.timezone);
            $scope.loadHomeData();
            //关闭窗口
            $scope.languageSetCancelClick($event);

        }
       /*国家切换*/
        $scope.initCountryItems = function () {
            //语言切换
            $translate(['COUNTRY_ZH', 'COUNTRY_ZH_TW','COUNTRY_TH','COUNTRY_VI']).then(
                function (translations) {
                    $scope.sampleCountryItems = [
                      {"name": translations.COUNTRY_ZH, "value": 'c-zh', "checked": false},
                      {"name": translations.COUNTRY_ZH_TW, "value": 'c-zh-tw', "checked": false},
                      {"name": translations.COUNTRY_TH, "value": 'c-th', "checked": false},
                      {"name": translations.COUNTRY_VI, "value": 'c-vi', "checked": false},
                    ];
                }
            );
        }
        //切换国家
        $scope.countryChangeClick = function ($event) {
            var country = $scope.getRadioCheckedValue($event, "coun_radio_box");
            $scope.country = country;
        }

        $scope.initLanguageItems = function () {
            //语言切换
            $translate(['LANGUAGE_ZH', 'LANGUAGE_ZH_TW','LANGUAGE_TH','LANGUAGE_VI','LANGUAGE_EN']).then(
                function (translations) {
                    $scope.sampleLanguageItems = [
                      {"name": translations.LANGUAGE_EN, "value": 'en', "checked": false},
                        {"name": translations.LANGUAGE_ZH, "value": 'zh', "checked": false},
                        {"name": translations.LANGUAGE_ZH_TW, "value": 'zh-TW', "checked": false},
                      {"name": translations.LANGUAGE_TH, "value": 'th', "checked": false},
                      {"name": translations.LANGUAGE_VI, "value": 'vi', "checked": false},
                    ];
                }
            );
        }

        //切换语言
        $scope.languageChangeClick = function ($event) {
            var language = $scope.getRadioCheckedValue($event, "radio_box1");
            $scope.language = language;
        }

        $scope.getRadioCheckedValue = function ($event, radioId) {
            var target = $event.currentTarget;
            var value = null;
            var labels = angular.element($("#" + radioId + " label"));
            var radios = angular.element($("#" + radioId + " input"));
            var currentRadio = null;
            for (var i = 0; i < radios.length; i++) {
                angular.element($(radios[i])).checked = false;
                angular.element($(labels[i])).removeClass("checked");
                if (labels[i] == target) {
                    currentRadio = radios[i];
                }
            }
            angular.element($(target)).addClass("checked");
            value = currentRadio.value;
            return value;
        }

        $scope.initFootballStateI18n = function() {
            $translate(['STATE_NOTSTART', 'STATE_FIRSTHALF', 'STATE_MIDFIELD', 'STATE_LASTHALF',
                'STATE_OVERTIME', 'STATE_PENALTY', 'STATE_FINISH', 'STATE_CANCEL',
                'STATE_UNDETERMINED', 'STATE_CUT', 'STATE_INTERRUPT', 'STATE_DELAY'
            ]).then(function(translations) {
                $scope.footballStateMap = new Object();
                $scope.footballStateMap['0'] = translations.STATE_NOTSTART;
                $scope.footballStateMap['1'] = translations.STATE_FIRSTHALF;
                $scope.footballStateMap['2'] = translations.STATE_MIDFIELD;
                $scope.footballStateMap['3'] = translations.STATE_LASTHALF;
                $scope.footballStateMap['4'] = translations.STATE_OVERTIME;
                $scope.footballStateMap['5'] = translations.STATE_PENALTY;
                $scope.footballStateMap['-1'] = translations.STATE_FINISH;
                $scope.footballStateMap['-10'] = translations.STATE_CANCEL;
                $scope.footballStateMap['-11'] = translations.STATE_UNDETERMINED;
                $scope.footballStateMap['-12'] = translations.STATE_CUT;
                $scope.footballStateMap['-13'] = translations.STATE_INTERRUPT;
                $scope.footballStateMap['-14'] = translations.STATE_DELAY;
            });
        }

        //状态转换
        $scope.convertState = function(match) {
            if(match == null) {
                return;
            }
            if(match.statusOrigin) {
                if(match.statusOrigin == "0" || match.statusOrigin == "1" || match.statusOrigin == "3") {
                    match.status = null;
                }else{
                    match.status = $scope.footballStateMap[match.statusOrigin];
                }
            }
        }

        $scope.initHandicapValueMap = function () {
            var ret = $translate(['HANDICAP_VALUE_0_0', 'HANDICAP_VALUE_0_25', 'HANDICAP_VALUE_0_5', 'HANDICAP_VALUE_0_75',
                'HANDICAP_VALUE_1_0', 'HANDICAP_VALUE_1_25', 'HANDICAP_VALUE_1_5', 'HANDICAP_VALUE_1_75',
                'HANDICAP_VALUE_2_0', 'HANDICAP_VALUE_2_25', 'HANDICAP_VALUE_2_5', 'HANDICAP_VALUE_2_75',
                'HANDICAP_VALUE_3_0', 'HANDICAP_VALUE_3_25', 'HANDICAP_VALUE_3_5', 'HANDICAP_VALUE_3_75',
                'HANDICAP_VALUE_4_0', 'HANDICAP_VALUE_4_25', 'HANDICAP_VALUE_4_5', 'HANDICAP_VALUE_4_75',
                'HANDICAP_VALUE_5_0', 'HANDICAP_VALUE_5_25', 'HANDICAP_VALUE_5_5', 'HANDICAP_VALUE_5_75',
                'HANDICAP_VALUE_6_0', 'HANDICAP_VALUE_6_25', 'HANDICAP_VALUE_6_5', 'HANDICAP_VALUE_6_75',
                'HANDICAP_VALUE_7_0', 'HANDICAP_VALUE_7_25', 'HANDICAP_VALUE_7_5', 'HANDICAP_VALUE_7_75',
                'HANDICAP_VALUE_8_0', 'HANDICAP_VALUE_8_25', 'HANDICAP_VALUE_8_5', 'HANDICAP_VALUE_8_75',
                'HANDICAP_VALUE_9_0', 'HANDICAP_VALUE_9_25', 'HANDICAP_VALUE_9_5', 'HANDICAP_VALUE_9_75'
            ]).then(
                function (translations) {
                    $scope.handicapValueMap = new Object();
                    $scope.handicapValueMap["0"] = translations.HANDICAP_VALUE_0_0;
                    $scope.handicapValueMap["0.0"] = translations.HANDICAP_VALUE_0_0;
                    $scope.handicapValueMap["0.25"] = translations.HANDICAP_VALUE_0_25;
                    $scope.handicapValueMap["0.5"] = translations.HANDICAP_VALUE_0_5;
                    $scope.handicapValueMap["0.75"] = translations.HANDICAP_VALUE_0_75;

                    $scope.handicapValueMap["1"] = translations.HANDICAP_VALUE_1_0;
                    $scope.handicapValueMap["1.0"] = translations.HANDICAP_VALUE_1_0;
                    $scope.handicapValueMap["1.25"] = translations.HANDICAP_VALUE_1_25;
                    $scope.handicapValueMap["1.5"] = translations.HANDICAP_VALUE_1_5;
                    $scope.handicapValueMap["1.75"] = translations.HANDICAP_VALUE_1_75;

                    $scope.handicapValueMap["2"] = translations.HANDICAP_VALUE_2_0;
                    $scope.handicapValueMap["2.0"] = translations.HANDICAP_VALUE_2_0;
                    $scope.handicapValueMap["2.25"] = translations.HANDICAP_VALUE_2_25;
                    $scope.handicapValueMap["2.5"] = translations.HANDICAP_VALUE_2_5;
                    $scope.handicapValueMap["2.75"] = translations.HANDICAP_VALUE_2_75;

                    $scope.handicapValueMap["3"] = translations.HANDICAP_VALUE_3_0;
                    $scope.handicapValueMap["3.0"] = translations.HANDICAP_VALUE_3_0;
                    $scope.handicapValueMap["3.25"] = translations.HANDICAP_VALUE_3_25;
                    $scope.handicapValueMap["3.5"] = translations.HANDICAP_VALUE_3_5;
                    $scope.handicapValueMap["3.75"] = translations.HANDICAP_VALUE_3_75;

                    $scope.handicapValueMap["4"] = translations.HANDICAP_VALUE_4_0;
                    $scope.handicapValueMap["4.0"] = translations.HANDICAP_VALUE_4_0;
                    $scope.handicapValueMap["4.25"] = translations.HANDICAP_VALUE_4_25;
                    $scope.handicapValueMap["4.5"] = translations.HANDICAP_VALUE_4_5;
                    $scope.handicapValueMap["4.75"] = translations.HANDICAP_VALUE_4_75;

                    $scope.handicapValueMap["5"] = translations.HANDICAP_VALUE_5_0;
                    $scope.handicapValueMap["5.0"] = translations.HANDICAP_VALUE_5_0;
                    $scope.handicapValueMap["5.25"] = translations.HANDICAP_VALUE_5_25;
                    $scope.handicapValueMap["5.5"] = translations.HANDICAP_VALUE_5_5;
                    $scope.handicapValueMap["5.75"] = translations.HANDICAP_VALUE_5_75;

                    $scope.handicapValueMap["6"] = translations.HANDICAP_VALUE_6_0;
                    $scope.handicapValueMap["6.0"] = translations.HANDICAP_VALUE_6_0;
                    $scope.handicapValueMap["6.25"] = translations.HANDICAP_VALUE_6_25;
                    $scope.handicapValueMap["6.5"] = translations.HANDICAP_VALUE_6_5;
                    $scope.handicapValueMap["6.75"] = translations.HANDICAP_VALUE_6_75;

                    $scope.handicapValueMap["7"] = translations.HANDICAP_VALUE_7_0;
                    $scope.handicapValueMap["7.0"] = translations.HANDICAP_VALUE_7_0;
                    $scope.handicapValueMap["7.25"] = translations.HANDICAP_VALUE_7_25;
                    $scope.handicapValueMap["7.5"] = translations.HANDICAP_VALUE_7_5;
                    $scope.handicapValueMap["7.75"] = translations.HANDICAP_VALUE_7_75;

                    $scope.handicapValueMap["8"] = translations.HANDICAP_VALUE_8_0;
                    $scope.handicapValueMap["8.0"] = translations.HANDICAP_VALUE_8_0;
                    $scope.handicapValueMap["8.25"] = translations.HANDICAP_VALUE_8_25;
                    $scope.handicapValueMap["8.5"] = translations.HANDICAP_VALUE_8_5;
                    $scope.handicapValueMap["8.75"] = translations.HANDICAP_VALUE_8_75;

                    $scope.handicapValueMap["9"] = translations.HANDICAP_VALUE_9_0;
                    $scope.handicapValueMap["9.0"] = translations.HANDICAP_VALUE_9_0;
                    $scope.handicapValueMap["9.25"] = translations.HANDICAP_VALUE_9_25;
                    $scope.handicapValueMap["9.5"] = translations.HANDICAP_VALUE_9_5;
                    $scope.handicapValueMap["9.75"] = translations.HANDICAP_VALUE_9_75;
                }
            );
        }

        //亚盘赔率转换
        $scope.convertAsiaOdds = function (odds) {
            var handicapValueMap = $scope.handicapValueMap;
            if (null == odds) {
                return;
            }
            var mediumOdds = odds.handicapValue;
            if (null == mediumOdds) {
                return;
            }
            var mediumOddsVal = parseFloat(mediumOdds);
            var handicapValue = handicapValueMap[Math.abs(mediumOddsVal)];
            if (mediumOddsVal < 0) {
                handicapValue = "*" + handicapValue;
            }
            odds.handicapValue = handicapValue;
            odds.mediumOdds = handicapValue;
        }

        //大小球赔率转换
        $scope.convertSizeOdds = function (odds) {
            if(odds == null) {
                return;
            }
            var mediumOdds = odds.handicapValue;
            if (null == mediumOdds) {
                return;
            }
            var mediumOddsVal = parseFloat(mediumOdds);
            if (mediumOdds.lastIndexOf('.5') != -1) {
                if (mediumOdds.endWith('.0')) {
                    odds.mediumOdds = mediumOdds.substring(0, mediumOdds.lastIndexOf(0));
                    odds.handicapValue = odds.mediumOdds;
                } else {
                    odds.mediumOdds = mediumOdds;
                    odds.handicapValue = mediumOdds;
                }
            } else if (mediumOdds.lastIndexOf('.0') != -1) {
                var val = mediumOdds.split("\\.")[0];
                odds.mediumOdds = val;
                odds.handicapValue = val;
            } else if (mediumOdds.lastIndexOf('.25') != -1 || mediumOdds.lastIndexOf('.75') != -1) {
                var before = (mediumOddsVal - 0.25) + '';
                if(before.endWith(".0")){
                    before = before.substring(0, before.indexOf("."));
                }
                var last = (mediumOddsVal + 0.25) + '';
                if(last.endWith(".0")){
                    last = last.substring(0, last.indexOf("."));
                }
                odds.mediumOdds = before + "/" + last;
                odds.handicapValue = before + "/" + last;
            }
        }

        $scope.handicapValueToMediumOdds = function (match) {
            var props = Object.getOwnPropertyNames(match.matchOdds);
            if (props != null && props.length > 1) {
                for (var i in props) {
                    if (props[i] == euroOdds) {
                        continue;
                    }
                    var odds = match.matchOdds[props[i]];
                    odds.mediumOdds = odds.handicapValue;
                    match.matchOdds[props[i]] = odds;
                }
            }
        }

        $scope.convertHandicapValue = function(matchOdds) {
            var props = Object.getOwnPropertyNames(matchOdds);
            if(props != null && props.length > 1) {
                for(var i in props){
                    var odds = matchOdds[props[i]];
                    $scope.convertHandicapValueSelf(odds);
                }
            }

        }

        $scope.convertHandicapValueSelf = function(odds) {
            var handicap = odds.handicap;
            if(euroOdds == handicap){//欧赔
                //不做处理
                odds.handicapValueOrigin = odds.mediumOdds;
            }else if(asiaLetOdds == handicap){
                odds.handicapValueOrigin = odds.handicapValue;
                $scope.convertAsiaOdds(odds);
            }else if(asiaSizeOdds == handicap){
                odds.handicapValueOrigin = odds.handicapValue;
                $scope.convertSizeOdds(odds);
            }
        }

        //设置完场赔率颜色
        $scope.setFinishOddsColor = function (match) {
            if (match == null) {
                return;
            }
            if (match.statusOrigin != "-1") {
                return;
            }
            var homeScore = match.homeScore;
            var guestScore = match.guestScore;
            if (null == homeScore || null == guestScore) {
                return;
            }
            var homeScoreFloat = parseFloat(homeScore);
            var guestScoreFloat = parseFloat(guestScore);
            var matchOdds = match.matchOdds;
            var props = Object.getOwnPropertyNames(matchOdds);

            if (props != null && props.length > 1) {
                var odds = null;
                var handicap = null;
                var scoreDiff = null;
                for (var i in props) {
                    odds = matchOdds[props[i]];
                    handicap = odds.handicap;

                    if (handicap == euroOdds) {//欧赔
                        scoreDiff = homeScoreFloat - guestScoreFloat;
                    } else if (handicap == asiaLetOdds) {//亚盘
                        var handicapVal = odds.handicapValueOrigin;
                        if (handicapVal == null || "" == handicapVal) {
                            return;
                        }
                        scoreDiff = homeScoreFloat - guestScoreFloat - parseFloat(handicapVal);
                    } else if (handicap == asiaSizeOdds) { // 大小球
                        var handicapVal = odds.handicapValueOrigin;
                        if (handicapVal == null || "" == handicapVal) {
                            return;
                        }
                        scoreDiff = homeScoreFloat + guestScoreFloat - parseFloat(handicapVal);
                    }
                    matchOdds[props[i]] = $scope.setColorFlag(scoreDiff, odds);
                }
            }
        }

        $scope.setColorFlag = function (scoreDiff, odds) {
            if (scoreDiff == null) {
                return;
            }
            if (scoreDiff > 0) {
                odds.leftOddsState = "3";
            } else if (scoreDiff == 0 && odds.handicap == euroOdds) { //// 欧赔需要标出平赔
                odds.mediumValueState = "3";
            } else if (scoreDiff < 0) {
                odds.rightOddsState = "3";
            }
            return odds;
        }

        //处理比赛的半场比分和完场比分
        $scope.handleScore = function (match) {
            if (match == null) {
                return;
            }
            var homeHalfScore = match.homeHalfScore;
            var guestHalfScore = match.guestHalfScore;
            if (homeHalfScore != null && guestHalfScore != null) {
                match.halfScore = homeHalfScore + "-" + guestHalfScore;
            } else {
                match.halfScore = null;
            }
            var homeScore = match.homeScore;
            var guestScore = match.guestScore;
            if (homeScore != null && guestScore != null) {
                match.fullScore = homeScore + "-" + guestScore;
            } else {
                match.fullScore = null;
            }
        }

        //处理keepTime
        $scope.handleKeepTime = function (match) {
            if (match == null) {
                return;
            }
            var keepTime = match.keepTime;
            var retKeepTime = keepTime;
            if (null == keepTime || "" == keepTime) {
                retKeepTime = null;
            } else {
                var time = parseInt(keepTime);
                if (time > 90) {
                    retKeepTime = "90+";
                } else if (match.statusOrigin == '1' && time > 45) {
                    retKeepTime = "45+";
                }
            }
            match.keepTime = retKeepTime;
        }

        //处理红黄牌
        $scope.handleRedYellowCard = function(match) {
            if(match == null) {
                return;
            }
            match.home_rc = match.home_rc == '0' ? '' : match.home_rc;
            match.home_yc= match.home_yc == '0' ? '' : match.home_yc;
            match.guest_rc= match.guest_rc == '0' ? '' : match.guest_rc;
            match.guest_yc= match.guest_yc == '0' ? '' : match.guest_yc;
        }

        //封盘处理
        $scope.handleSeal = function (match) {
            if (match == null) {
                return;
            }
            if (match.matchOdds == null && match.matchOdds.length == 0) {
                return;
            }
            var props = Object.getOwnPropertyNames(match.matchOdds);
            var odds = null;
            for (var i in props) {
                odds = match.matchOdds[props[i]];
                if(odds) {
                    if (odds.handicap == euroOdds) {//欧赔
                        if ($scope.isSealFlag(odds.leftOdds) && $scope.isSealFlag(odds.mediumOdds)
                            && $scope.isSealFlag(odds.rightOdds)) {
                            odds.seal = true;
                        }
                    } else if(odds.handicap == asiaLetOdds || odds.handicap == asiaSizeOdds){
                        if ($scope.isSealFlag(odds.leftOdds) && $scope.isSealFlag(odds.handicapValue)
                            && $scope.isSealFlag(odds.rightOdds)) {
                            odds.seal = true;
                        }
                    }
                    match.matchOdds[props[i]] = odds;
                }
            }
        }

        $scope.isSealFlag = function (oddsValue) {
            if (oddsValue == '' || oddsValue == '-' || oddsValue == '|') {
                return true;
            }
            return false;
        }

        //根据keepTime将赔率转化为封盘, 当keepTime >= oddsConvertToSealAtKeepTime(89)时， 赔率转换为封盘
        $scope.turnToSealByKeepTime = function (match) {
            if (match == null || match.keepTime == null || match.statusOrigin != 3) {
                return;
            }
            var time;
            if (angular.isNumber(match.keepTime)) {
                time = parseInt(match.keepTime);
            } else {
                time = parseInt(match.keepTime.replace("+", ""));
            }
            if (time >= oddsConvertToSealAtKeepTime) {
                if (match.matchOdds == null && match.matchOdds.length == 0) {
                    return;
                }
                var props = Object.getOwnPropertyNames(match.matchOdds);
                var odds;
                for (var i in props) {
                    odds = match.matchOdds[props[i]];
                    if (odds) {
                        odds.seal = true;
                        match.matchOdds[props[i]] = odds;
                    }
                }
            }
        }

        $scope.initTwelveZodiac = function() {
            $translate(['RAT', 'CATTLE','TIGER','RABBIT','DRAGON','SNAKE','HORSE','MONKEY','SHEEP','CHICKEN','DOG','PIG']).then(
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

        //六合彩拓展算法
        $scope.lhcLotteryTrick = function (numbers, zodiac) {

            var map = {};

            var arrayNumbers = numbers.replace("#", ",").split(",");
            var zodiacNumbers = zodiac.replace("#", ",").split(",");

            for (var i = 0; i < 7; i++) {
                map['n' + i] = new Object();

                //六合彩单个开出'?'填充
                if (i < arrayNumbers.length) {
                    map['n' + i].code = pad(arrayNumbers[i]);
                    map['n' + i].zodiac = zodiacNumbers[i];
                    map['n' + i].color = getCodeColors(arrayNumbers[i]);
                } else {
                    map["n" + i].code = "-";
                    map['n' + i].zodiac = "";
                    map['n' + i].color = "blue";
                }

            }

            return map;


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


        //其他彩拓展算法
        $scope.numLotteryTrick = function (numbers) {

            var numsMap = {};

            var arrayNumbers = numbers.replace("#", ",").split(",");
            for (var i in arrayNumbers) {
                numsMap['n' + i] = arrayNumbers[i];
            }
            return numsMap;

        }

      //语言，国家默认选中方法
      $scope.defaultSelect=function(param){
        var defaultSet=param=="language"?defaultLanguageKey:defaultCountry;
        var ds = $scope.getObjectFromLocalStorage(param);
        if (ds == null) {
          ds = defaultSet;//默认设置
        }
        if(param=="language"){
          $scope.language=ds;
          $scope.languageItems = angular.copy($scope.sampleLanguageItems);
        }else{
          $scope.country=ds;
          $scope.countryItems = angular.copy($scope.sampleCountryItems);
        }
        var itemArray=param=="language"?$scope.languageItems:$scope.countryItems;
        var languageItem = null;
        for (var i in itemArray) {
          languageItem = itemArray[i];
          if (languageItem.value == ds) {
            languageItem.checked = true;
          } else {
            languageItem.checked = false;
          }
        }
      }

    }
]);

home.factory("HomeService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/main.findMainResult.do" ,{}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);

//即时服务
home.factory("HomeServiceFactory", [
    "HomeService",
    function (HomeService) {
        var obj = {};
        obj.loadHomeData = function ($scope, $timeout) {

            var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            HomeService.get({lang: $scope.language,timeZone:timezone}, function (data) {
                $scope.focusMatches = data['ball'];
                $scope.total = data['total'];
                $scope.numLottery = data['lhc'];
                $scope.pk10 = data['pk10'];
                var focusMatch = null;
                for(var i in $scope.focusMatches) {
                    focusMatch = $scope.focusMatches[i];
                    $scope.handleScore(focusMatch);
                    $scope.turnToSealByKeepTime(focusMatch);
                    $scope.handleKeepTime(focusMatch);
                    $scope.handleRedYellowCard(focusMatch);
                    $scope.convertState(focusMatch);
                    $scope.handicapValueToMediumOdds(focusMatch);
                    $scope.handleSeal(focusMatch);
                    $scope.convertHandicapValue(focusMatch.matchOdds);
                    $scope.setFinishOddsColor(focusMatch);
                }
                var temp = $scope.numLottery;
                $scope.numLottery.map = $scope.lhcLotteryTrick(temp.numbers, temp.zodiac);
                temp.map.n0.zodiac = $scope.twelveZodiac[temp.map.n0.zodiac];
                temp.map.n1.zodiac = $scope.twelveZodiac[temp.map.n1.zodiac];
                temp.map.n2.zodiac = $scope.twelveZodiac[temp.map.n2.zodiac];
                temp.map.n3.zodiac = $scope.twelveZodiac[temp.map.n3.zodiac];
                temp.map.n4.zodiac = $scope.twelveZodiac[temp.map.n4.zodiac];
                temp.map.n5.zodiac = $scope.twelveZodiac[temp.map.n5.zodiac];
                temp.map.n6.zodiac = $scope.twelveZodiac[temp.map.n6.zodiac];
                $scope.pk10.numsMap = $scope.numLotteryTrick(data['pk10'].numbers);
            });
        }
        return obj;
    }
]);

String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}

String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}

//控制两位不足前面补0
function pad(num) {
    var len = num.toString().length;
    if (len < 2) {
        num = "0" + num;
    }
    return num;
}

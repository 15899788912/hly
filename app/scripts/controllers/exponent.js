/**
 * Created by tiger on 2016/5/27.
 */
'use strict';
var exponent = angular.module("live1.exponent");

exponent.config(["$translateProvider", function ($translateProvider) {
  var translationsEn = {
		"HEAD_TITLE":"One Score Touchscreen Version",
	    "EXPONENT_TITLE":"Odds",
		"ODDS_ASIAN":"HDP",
		"ODDS_SIZE":"O/U",
		"ODDS_EUROPE":"1x2",
		"FIVE_MATCH":"Focus",
	    "HOT_MATCH":"Hot",
	    "SELECT_ALL_MATCH":"Select All",
	    "DESEELCT_MATCH":"Inverse",
	    "FILTERING":"Filtering",
	    "HOT_FILTERING":"Hot Matches",
	    "OTHER_FILTERING":"Other Matches",
	    "BUTTON_SUBMIT":"Confirm",
	    "HIDE_MATCHES":"Hide{{hideGameCount}}",
        "NO_IMMEDIATE_MATCHES": "0 match under your filtering condition",
        "NO_INIT_IMMEDIATE_MATCHES":  "No match",
        "NO_COMPANY_ODDDATA":"No Odds Data",
        "HANDICAP_VALUE_0_0":   "0",
        "HANDICAP_VALUE_0_25":    "0.25",
        "HANDICAP_VALUE_0_5": "0.5",
        "HANDICAP_VALUE_0_75":    "0.75",
        "HANDICAP_VALUE_1_0": "1",
        "HANDICAP_VALUE_1_25":    "1.25",
        "HANDICAP_VALUE_1_5": "1.5",
        "HANDICAP_VALUE_1_75":    "1.75",
        "HANDICAP_VALUE_2_0": "2",
        "HANDICAP_VALUE_2_25":    "2.25",
        "HANDICAP_VALUE_2_5": "2.5",
        "HANDICAP_VALUE_2_75":    "2.75",
        "HANDICAP_VALUE_3_0": "3",
        "HANDICAP_VALUE_3_25":    "3.25",
        "HANDICAP_VALUE_3_5": "3.5",
        "HANDICAP_VALUE_3_75":    "3.75",
        "HANDICAP_VALUE_4_0": "4",
        "HANDICAP_VALUE_4_25":    "4.25",
        "HANDICAP_VALUE_4_5": "4.5",
        "HANDICAP_VALUE_4_75":    "4.75",
        "HANDICAP_VALUE_5_0": "5",
        "HANDICAP_VALUE_5_25":    "5.25",
        "HANDICAP_VALUE_5_5": "5.5",
        "HANDICAP_VALUE_5_75":    "5.75",
        "HANDICAP_VALUE_6_0": "6",
        "HANDICAP_VALUE_6_25":    "6.25",
        "HANDICAP_VALUE_6_5": "6.5",
        "HANDICAP_VALUE_6_75":    "6.75",
        "HANDICAP_VALUE_7_0": "7",
        "HANDICAP_VALUE_7_25":    "7.25",
        "HANDICAP_VALUE_7_5": "7.5",
        "HANDICAP_VALUE_7_75":    "7.75",
        "HANDICAP_VALUE_8_0": "8",
        "HANDICAP_VALUE_8_25":    "8.25",
        "HANDICAP_VALUE_8_5": "8.5",
        "HANDICAP_VALUE_8_75":    "8.75",
        "HANDICAP_VALUE_9_0": "9",
        "HANDICAP_VALUE_9_25":    "9.25",
        "HANDICAP_VALUE_9_5": "9.5",
        "HANDICAP_VALUE_9_75":    "9.75",
        "COMPANY_CP":"Initial",
	    "COMPANY_UPDATE":"Update",
	    "COMPANY_HOMEWIN":"Home Win",
	    "COMPANY_DRAWN":"Draw",
	    "COMPANY_HANDICAP":"Handicap",
	    "COMPANY_GUESTWIN":"Away Win",
	    "COMPANY_CROWN":"Singbet",
	    "COMPANY_EXTENSIVE":"Vinbet",
	    "COMPANY_LIJI":"Sbobet",
	    "COMPANY_IBC":"IBC",
	    "COMPANY_ISN":"ISN",
	    "COMPANY_PINNACLE":"Pinnacle",
	    "EXPONENT_DATE":"Date",
	    "EXPONENT_COMPANY":"Company",
	 	"STATE_NOTSTART":	"Pre-play",
		"STATE_FIRSTHALF":	"1st Half",
		"STATE_MIDFIELD":	"HT",
		"STATE_LASTHALF":	"2nd Half",
		"STATE_OVERTIME":	"Overtime",
		"STATE_PENALTY":	"Penalty Kick",
		"STATE_FINISH":	"FT",
		"STATE_CANCEL":	"Cancel",
		"STATE_UNDETERMINED":	"Undetermined",
		"STATE_CUT":	"Abandoned",
		"STATE_INTERRUPT":	"Interrupted",
		"STATE_DELAY":	"Postponed",
        "COM_ERROR_TIPS":"Please select at least one company"
  }
  var translationsZH = {
      "HEAD_TITLE": "【完整足球指数】欧赔_亚盘_大小球即时赔率分析 –一比分",
      "EXPONENT_KEYWORDS": "足球欧赔,足球亚盘,欧赔分析,大小球分析",
      "EXPONENT_DESCRIPTION": "一比分足球指数中心，看足球即时赔率变化，免费提供各大足球赔率公司给出的欧赔、亚盘、大小球、即时盘口分析查询等数据。",
	    "EXPONENT_TITLE": "指数",
		"ODDS_ASIAN": "亚盘",
		"ODDS_SIZE": "大小",
		"ODDS_EUROPE": "欧赔",
		"FIVE_MATCH": "焦点",
	    "HOT_MATCH": "热门",
	    "SELECT_ALL_MATCH": "全选",
	    "DESEELCT_MATCH": "反选",
	    "FILTERING": "筛选",
	    "HOT_FILTERING":"热门赛事",
	    "OTHER_FILTERING":"其他赛事",
	    "BUTTON_SUBMIT": "确定",
	    "HIDE_MATCHES": "隐藏{{hideGameCount}}场",
        "NO_IMMEDIATE_MATCHES": "您筛选条件下赛事为0场.",
        "NO_INIT_IMMEDIATE_MATCHES": "暂无赛事",
        "NO_COMPANY_ODDDATA":"暂无赔率数据",
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
        "COMPANY_CP":"初盘",
	    "COMPANY_UPDATE":"更新",
	    "COMPANY_HOMEWIN":"主胜",
	    "COMPANY_DRAWN":"平局",
	    "COMPANY_HANDICAP":"盘口",
	    "COMPANY_GUESTWIN":"客胜",
	    "COMPANY_CROWN":"皇冠",
	    "COMPANY_EXTENSIVE":"VinBet",
	    "COMPANY_LIJI":"利记",
	    "COMPANY_IBC":"IBC",
	    "COMPANY_ISN":"ISN",
	    "COMPANY_PINNACLE":"平博",
	    "EXPONENT_DATE":"日期",
	    "EXPONENT_COMPANY":"公司",
	    "STATE_NOTSTART": "未开",
        "STATE_FIRSTHALF": "上半场",
        "STATE_MIDFIELD": "中场",
        "STATE_LASTHALF": "下半场",
        "STATE_OVERTIME": "加时",
        "STATE_PENALTY": "点球",
        "STATE_FINISH": "完场",
        "STATE_CANCEL": "取消",
        "STATE_UNDETERMINED": "待定",
        "STATE_CUT": "腰斩",
        "STATE_INTERRUPT": "中断",
        "STATE_DELAY": "推迟" ,
        "COM_ERROR_TIPS":"请至少选择一个公司"
  }
  var translationsZH_HANS = {
      "HEAD_TITLE": "【完整足球指數】歐賠_亞盤_大小球即時賠率分析 –一比分",
      "EXPONENT_KEYWORDS": "足球歐賠,足球亞盤,歐賠分析,大小球分析",
      "EXPONENT_DESCRIPTION": "一比分足球指數中心，看足球即時賠率變化，免費提供各大足球賠率公司給出的歐賠、亞盤、大小球、即時盤口分析查詢等數據。",
	    "EXPONENT_TITLE": "指數",
  		"ODDS_ASIAN": "亞盤",
  		"ODDS_SIZE": "大小",
  		"ODDS_EUROPE": "歐賠",
  		"FIVE_MATCH": "焦點",
	    "HOT_MATCH": "熱門",
	    "SELECT_ALL_MATCH": "全選",
	    "DESEELCT_MATCH": "反選",
	    "FILTERING": "篩選",
	    "HOT_FILTERING":"熱門賽事",
	    "OTHER_FILTERING":"其他賽事",
	    "BUTTON_SUBMIT": "確定",
	    "HIDE_MATCHES": "隱藏{{hideGameCount}}場",
        "NO_IMMEDIATE_MATCHES": "您篩選條件下的賽事為0場.",
        "NO_INIT_IMMEDIATE_MATCHES": "暫無賽事",
        "NO_COMPANY_ODDDATA":"暫無賠率數據",
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
        "COMPANY_CP":"初盤",
	    "COMPANY_UPDATE":"更新",
	    "COMPANY_HOMEWIN":"主勝",
	    "COMPANY_DRAWN":"平局",
	    "COMPANY_HANDICAP":"盤口",
	    "COMPANY_GUESTWIN":"客勝",
	    "COMPANY_CROWN":"皇冠",
	    "COMPANY_EXTENSIVE":"VinBet",
	    "COMPANY_LIJI":"利記",
	    "COMPANY_IBC":"IBC",
	    "COMPANY_ISN":"ISN",
	    "COMPANY_PINNACLE":"平博",
	    "EXPONENT_DATE":"日期",
	    "EXPONENT_COMPANY":"公司",
	    "STATE_NOTSTART": "未開",
        "STATE_FIRSTHALF": "上半場",
        "STATE_MIDFIELD": "中場",
        "STATE_LASTHALF": "下半場",
        "STATE_OVERTIME": "加時",
        "STATE_PENALTY": "點球",
        "STATE_FINISH": "完場",
        "STATE_CANCEL": "取消",
        "STATE_UNDETERMINED": "待定",
        "STATE_CUT": "腰斬",
        "STATE_INTERRUPT": "中斷",
        "STATE_DELAY": "推遲",
        "COM_ERROR_TIPS":"請至少選擇一個公司"
  }
  var translationsTH = { //泰语
		"HEAD_TITLE":"วันสกอร์รุ่นหน้าจอสัมผัส",
	    "EXPONENT_TITLE":"ราคาบอล",
		"ODDS_ASIAN":"เอเชียออดซ",
		"ODDS_SIZE":"สูง/ต่ำ",
		"ODDS_EUROPE":"1x2ออดซ",
		"FIVE_MATCH":"โฟกัส",
	    "HOT_MATCH":"ยอดนิยม",
	    "SELECT_ALL_MATCH":"เลือกทั้งหมด",
	    "DESEELCT_MATCH":"เลือกผกผัน",
	    "FILTERING":"คัดเลือก",
	    "HOT_FILTERING":"ลีกยอดนิยม",
	    "OTHER_FILTERING":"ลีกอื่นๆ",
	    "BUTTON_SUBMIT":"ตกลง",
	    "HIDE_MATCHES":"ซ่อน{{hideGameCount}}เกม",
        "NO_IMMEDIATE_MATCHES": "เกมทั้งหมดที่คุณเหลือกมี 0 เกม",
        "NO_INIT_IMMEDIATE_MATCHES":  "ไม่มีเกม",
        "NO_COMPANY_ODDDATA":"ยังไม่มีข้อมูล",
        "HANDICAP_VALUE_0_0":   "0",
        "HANDICAP_VALUE_0_25":    "0.25",
        "HANDICAP_VALUE_0_5": "0.5",
        "HANDICAP_VALUE_0_75":    "0.75",
        "HANDICAP_VALUE_1_0": "1",
        "HANDICAP_VALUE_1_25":    "1.25",
        "HANDICAP_VALUE_1_5": "1.5",
        "HANDICAP_VALUE_1_75":    "1.75",
        "HANDICAP_VALUE_2_0": "2",
        "HANDICAP_VALUE_2_25":    "2.25",
        "HANDICAP_VALUE_2_5": "2.5",
        "HANDICAP_VALUE_2_75":    "2.75",
        "HANDICAP_VALUE_3_0": "3",
        "HANDICAP_VALUE_3_25":    "3.25",
        "HANDICAP_VALUE_3_5": "3.5",
        "HANDICAP_VALUE_3_75":    "3.75",
        "HANDICAP_VALUE_4_0": "4",
        "HANDICAP_VALUE_4_25":    "4.25",
        "HANDICAP_VALUE_4_5": "4.5",
        "HANDICAP_VALUE_4_75":    "4.75",
        "HANDICAP_VALUE_5_0": "5",
        "HANDICAP_VALUE_5_25":    "5.25",
        "HANDICAP_VALUE_5_5": "5.5",
        "HANDICAP_VALUE_5_75":    "5.75",
        "HANDICAP_VALUE_6_0": "6",
        "HANDICAP_VALUE_6_25":    "6.25",
        "HANDICAP_VALUE_6_5": "6.5",
        "HANDICAP_VALUE_6_75":    "6.75",
        "HANDICAP_VALUE_7_0": "7",
        "HANDICAP_VALUE_7_25":    "7.25",
        "HANDICAP_VALUE_7_5": "7.5",
        "HANDICAP_VALUE_7_75":    "7.75",
        "HANDICAP_VALUE_8_0": "8",
        "HANDICAP_VALUE_8_25":    "8.25",
        "HANDICAP_VALUE_8_5": "8.5",
        "HANDICAP_VALUE_8_75":    "8.75",
        "HANDICAP_VALUE_9_0": "9",
        "HANDICAP_VALUE_9_25":    "9.25",
        "HANDICAP_VALUE_9_5": "9.5",
        "HANDICAP_VALUE_9_75":    "9.75",
        "COMPANY_CP":"ก่อน",
	    "COMPANY_UPDATE":"รีเฟรช",
	    "COMPANY_HOMEWIN":"ทีมเหย้าชนะ",
	    "COMPANY_DRAWN":"เสมอ",
	    "COMPANY_HANDICAP":"แฮนดิแคป",
	    "COMPANY_GUESTWIN":"ทีมเยือนชนะ",
		"COMPANY_CROWN":"Singbet",
	    "COMPANY_EXTENSIVE":"Vinbet",
	    "COMPANY_LIJI":"Sbobet",
	    "COMPANY_IBC":"IBC",
	    "COMPANY_ISN":"ISN",
	    "COMPANY_PINNACLE":"Pinnacle",
	    "EXPONENT_DATE":"วันที่",
	    "EXPONENT_COMPANY":"บริษัท",
	    "STATE_NOTSTART":	"ยังไม่เริ่ม",
        "STATE_FIRSTHALF":	"ครื่งแรก",
		"STATE_MIDFIELD":	"H-T",
		"STATE_LASTHALF":	"ครื่งหลัง",
		"STATE_OVERTIME":	"ต่อเวลา",
		"STATE_PENALTY":	"ยิงจุดโทษ",
		"STATE_FINISH":	"จบ",
		"STATE_CANCEL":	"ยกเลิก",
		"STATE_UNDETERMINED":	"รอแจ้ง",
		"STATE_CUT":	"Abandoned",
		"STATE_INTERRUPT":	"หยุดชะงัก",
		"STATE_DELAY":	"ชะลอ",
        "COM_ERROR_TIPS":"กรุณาเลือกอย่างน้อยหนึ่งบริษัท"
  }
  var translationsVI = {  //越语
	    "HEAD_TITLE":"Tỷ Số Nhất phiên bản màn hình cảm ứng",
	    "EXPONENT_TITLE":"chỉ số",
		"ODDS_ASIAN":"kèo chấu Á",
		"ODDS_SIZE":"tài xỉu",
		"ODDS_EUROPE":"tỷ lệ châu Âu",
		"FIVE_MATCH":"tập trung",
	    "HOT_MATCH":"hot",
	    "SELECT_ALL_MATCH":"chọn tất cả",
	    "DESEELCT_MATCH":"chọn ngược",
	    "FILTERING":"chọn",
	    "HOT_FILTERING":"giải đấu hot",
	    "OTHER_FILTERING":"giải đấu khách",
	    "BUTTON_SUBMIT":"xác định",
	    "HIDE_MATCHES":"giấu trận đấu{{hideGameCount}}",
        "NO_IMMEDIATE_MATCHES": "Cuộc giải đáu theo yêu cầu bạn chọn là có 0 trận",
        "NO_INIT_IMMEDIATE_MATCHES":  "Tạm không có giải đấu",
        "NO_COMPANY_ODDDATA":"Tạm Thời Chưa Có Thông Số Tỷ Lệ",
        "HANDICAP_VALUE_0_0":   "0",
        "HANDICAP_VALUE_0_25":    "0.25",
        "HANDICAP_VALUE_0_5": "0.5",
        "HANDICAP_VALUE_0_75":    "0.75",
        "HANDICAP_VALUE_1_0": "1",
        "HANDICAP_VALUE_1_25":    "1.25",
        "HANDICAP_VALUE_1_5": "1.5",
        "HANDICAP_VALUE_1_75":    "1.75",
        "HANDICAP_VALUE_2_0": "2",
        "HANDICAP_VALUE_2_25":    "2.25",
        "HANDICAP_VALUE_2_5": "2.5",
        "HANDICAP_VALUE_2_75":    "2.75",
        "HANDICAP_VALUE_3_0": "3",
        "HANDICAP_VALUE_3_25":    "3.25",
        "HANDICAP_VALUE_3_5": "3.5",
        "HANDICAP_VALUE_3_75":    "3.75",
        "HANDICAP_VALUE_4_0": "4",
        "HANDICAP_VALUE_4_25":    "4.25",
        "HANDICAP_VALUE_4_5": "4.5",
        "HANDICAP_VALUE_4_75":    "4.75",
        "HANDICAP_VALUE_5_0": "5",
        "HANDICAP_VALUE_5_25":    "5.25",
        "HANDICAP_VALUE_5_5": "5.5",
        "HANDICAP_VALUE_5_75":    "5.75",
        "HANDICAP_VALUE_6_0": "6",
        "HANDICAP_VALUE_6_25":    "6.25",
        "HANDICAP_VALUE_6_5": "6.5",
        "HANDICAP_VALUE_6_75":    "6.75",
        "HANDICAP_VALUE_7_0": "7",
        "HANDICAP_VALUE_7_25":    "7.25",
        "HANDICAP_VALUE_7_5": "7.5",
        "HANDICAP_VALUE_7_75":    "7.75",
        "HANDICAP_VALUE_8_0": "8",
        "HANDICAP_VALUE_8_25":    "8.25",
        "HANDICAP_VALUE_8_5": "8.5",
        "HANDICAP_VALUE_8_75":    "8.75",
        "HANDICAP_VALUE_9_0": "9",
        "HANDICAP_VALUE_9_25":    "9.25",
        "HANDICAP_VALUE_9_5": "9.5",
        "HANDICAP_VALUE_9_75":    "9.75",
        "COMPANY_CP":"Đầu",
	    "COMPANY_UPDATE":"làm mới",
	    "COMPANY_HOMEWIN":"chủ thắng",
	    "COMPANY_DRAWN":"hóa",
	    "COMPANY_HANDICAP":"kèo",
	    "COMPANY_GUESTWIN":"khách thắng",
		"COMPANY_CROWN":"Singbet",
	    "COMPANY_EXTENSIVE":"Vinbet",
	    "COMPANY_LIJI":"Sbobet",
	    "COMPANY_IBC":"IBC",
	    "COMPANY_ISN":"ISN",
	    "COMPANY_PINNACLE":"Pinnacle",
	    "EXPONENT_DATE":"nhày",
	    "EXPONENT_COMPANY":"công ty",
	    "STATE_NOTSTART":	"Chưa bắt đầu",
		"STATE_FIRSTHALF":	"Hiệp 1",
		"STATE_MIDFIELD":	"Nửa trận",
		"STATE_LASTHALF":	"Hiệp 2",
		"STATE_OVERTIME":	"ngoài giờ",
		"STATE_PENALTY":	"phạt bống",
		"STATE_FINISH":	"Đã kết thúc",
		"STATE_CANCEL":	"Hủy",
		"STATE_UNDETERMINED":	"Chưa quyết định",
		"STATE_CUT":	"Tạm dừng",
		"STATE_INTERRUPT":	"Gián đoạn",
		"STATE_DELAY":	"Hoãn",
        "COM_ERROR_TIPS":"Hãy Chọn Ít Nhất Một Nhà Cái"
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
    'en_US':'en',
    'th_TH':'th',
    'vi_VI':'vi'
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
//主页面
exponent.factory("MainService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/footBallIndexCenter.findAndroidIndexCenter.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);
//详情页
exponent.factory("InfoService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/footBallMatch.matchOddDetail.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);
//首页服务
exponent.factory("MainServiceFactory", [
    "MainService",
    function (MainService) {
        var obj = {};
        obj.loadMainMatchData = function ($scope, $timeout) {
            var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            var choiceTime=$scope.today;
            var slideNum = $scope.getClickedTabsSwiper();
            slideNum=slideNum==0?1:(slideNum==1?3:2);
            // console.log(slideNum);
            $scope.showLoadingImg(); //loading...
            MainService.get({lang: $scope.getLanguage(), date:choiceTime,timeZone:timezone,type:slideNum}, function (data) {
                // console.log(data);
                if(data.code==200){
					$scope.mainMatchesBak = [];
	                $scope.mainMatches = [];
	                $scope.comSwitch(data.company);  //公司转换处理
	                var comValArr = $scope.localCompany();
			        if (comValArr.length==0) {
						$scope.putObjectToLocalStorage("expCompanyed",'3,45'); //默认为皇冠,浩博
			        }
			        $scope.gameList=data.fileterTags;  //筛选赛事名称列表
	                var o=null,comList='',matchInfo='',scoreObj={},dataObj=data.allInfo;
	                for (var i in dataObj) {
	                	o = {};
	                	matchInfo=dataObj[i].matchInfo;
	                	o.leagueName=dataObj[i].leagueName;
	                	o.leagueId=dataObj[i].leagueId;
	                	o.color=dataObj[i].leagueColor;
	                	o.hot=dataObj[i].hot;
	                	o.time=matchInfo.openTime;
	                	o.status = $scope.footballStateMap[matchInfo.matchState];
	                	scoreObj=$scope.scoreSwitch(matchInfo);
	                	o.result=scoreObj["resultInfo"];
	                	o.matchColor=scoreObj["matchColor"];
	                	o.matchId=matchInfo.matchId;
	                	o.guest=matchInfo.matchGuestName;
	                	o.home=matchInfo.matchHomeName;
	                    var mainMatch = {},mainArr=[];
	                    comList=dataObj[i].comList; //公司水位信息
	                    for (var j in comList) {
	                    	mainMatch=comList[j];
	                    	mainMatch.comVal=mainMatch.comName;
	                    	mainMatch.comName=$scope.companyValueMap[mainMatch.comId];
	                    	$scope.levelSwitch(mainMatch.currLevel);
	                    	$scope.levelSwitch(mainMatch.preLevel);
	                    	mainArr.push(mainMatch);
	                    }
	                    o.comList=mainArr;
	                    $scope.mainMatchesBak.push(o);
	                }
	                // console.log($scope.mainMatchesBak);
			        //根据赛事筛选过滤
	                var leagueIdArr = $scope.getCheckedLeagueIdArrFromCookie();
	                if (leagueIdArr != null && leagueIdArr.length > 0) {
	                    $scope.getMainFilterByLeagueId(leagueIdArr);
	                } else {
	                	$scope.hotFilter();  //默认显示热门信息
						// $scope.mainMatches=$scope.mainMatchesBak;
	                }
                    $scope.mainMatches=$scope.companyFilter();//最终结果
	                // $scope.mainMatches=$scope.companyFilter().slice(0, expMainPs);  //最终结果
                    $scope.toggleNoMainMatches();
                    $scope.hideLoadingImg();
                }else{
                	console.log("首页--服务器错误！");
                    $scope.noMainMatches=true;
                    $scope.hideLoadingImg();
                }
            });
        };
        return obj;
    }
]);
//详情页服务
exponent.factory("InfoServiceFactory", [
    "InfoService",
    function (InfoService) {
        var obj = {};
        obj.loadInfoMatchData = function ($scope, $timeout,$filter) {
        	var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            var slideNum = $scope.getClickedTabsSwiper();
            slideNum=slideNum==0?1:(slideNum==1?3:2);
            var comObj=$scope.comInfoObj;
            // console.log(comObj);
            $scope.initComInfoScroll(); //初始化公司详情滚动条
            $scope.showLoadingImg(); //loading...
        	InfoService.get({lang: $scope.getLanguage(),companyId:comObj.comId,
        		thirdId:comObj.thId,timeZone:timezone,oddType:slideNum}, function (data) {
        			// console.log(data);
        			if(data.result==200){
        				$scope.comInfoMatches = [];
        				$scope.comInfoMatchesBak = [];
        				var dataObj=data.details,obj={},detailList=[],date=null,isFirst=true,
        					leftOddObj={},rightOddObj={},middObj={},oldHome=0,oldGuest=0,oldHand=0;
        				for (var i = 0; i < dataObj.length; i++) {
        						date=new Date(dataObj[i].date);
        						detailList=dataObj[i].details;
                                isFirst=i==0?true:false;
        						for (var j = 0; j < detailList.length; j++) {
        								if(j==0){
                                            if(i==0){
                                                oldHome=detailList[j].homeOdd;
                                                oldGuest=detailList[j].guestOdd;
                                                oldHand=detailList[j].hand;
                                            }
        								}else{
        									oldHome=detailList[j-1].homeOdd;
    										oldGuest=detailList[j-1].guestOdd;
                                            oldHand=detailList[j-1].hand;
        								}
        								obj=detailList[j];
        								leftOddObj["newOddNum"]=obj.homeOdd;
        								leftOddObj["oldOddNum"]=oldHome;
        								rightOddObj["newOddNum"]=obj.guestOdd;
        								rightOddObj["oldOddNum"]=oldGuest;
                                        middObj["newOddNum"]=obj.hand;
                                        middObj["oldOddNum"]=oldHand;
                                        obj.middleClass=$scope.oddSwitch(middObj);
        								obj.leftUpClass=$scope.oddSwitch(leftOddObj);
        								obj.rightUpClass=$scope.oddSwitch(rightOddObj);
                                        if($scope.tabActiveIndex==0){
                                            obj.handVal=$scope.convertAsiaOdds(obj.hand.toString());
                                        }else if($scope.tabActiveIndex==1){
                                            obj.handVal=$scope.convertSizeOdds(obj.hand.toString());
                                        }else{
                                            obj.handVal=obj.hand;
                                        }
                                        if(j==(detailList.length-1)){  //保存最后一个
                                            oldHome=detailList[j].homeOdd;
                                            oldGuest=detailList[j].guestOdd;
                                            oldHand=detailList[j].hand;
                                        }
                                        // if(j==0){obj.time='';}
                                        obj.day = date.Format("MM-dd");
                                        obj.dayInfo=obj.day+" "+obj.time;
        								$scope.comInfoMatchesBak.push(obj);
        						}
                                //过滤
                                $scope.comInfoMatchesBak=$filter("orderBy")($scope.comInfoMatchesBak,'dayInfo',true);
        						$scope.comInfoMatches=$scope.comInfoMatchesBak;
        				}
        				$scope.comInfoMatches = $scope.comInfoMatches.slice(0, expComPs);
                        $scope.toggleNoComInfoMatches();
                        $scope.hideLoadingImg();
        				// console.log($scope.comInfoMatches);
        			}else{
        				console.log("公司详情--服务器错误！");
                        $scope.hideLoadingImg();
        			}
        	});
        }
        return obj;
    }
]);
//html模版
exponent.directive('mainCon', function() {
    return {
        restrict: 'EACM',
        templateUrl: '../../views/manager/expCompanyInfo.html',
        replace: true,
        ransclude : true
    };
});
//指数控制器
exponent.controller("ExponentController", [
  "$http",
  "$scope",
  "$document",
  '$window',
  '$translate',
  '$timeout',
  '$filter',
  '$interval',
  'MainServiceFactory',
  'InfoServiceFactory',
  function ($http, $scope, $document, $window,$translate, $timeout,$filter, $interval,
  	MainServiceFactory,InfoServiceFactory)
  {
  	var ec=this;
  	var tabsSwiper = null;
    $scope.tabsSwiperInited = false;
    //加载完执行该方法
    $scope.$on("$viewContentLoaded", function ($window) {
        var initialSlide = $scope.getClickedTabsSwiper();
           $scope.initSwiper(initialSlide, false);
    });
    //swiper滑动
    $scope.initSwiper = function(initialSlide, loadFindLive) {
        $scope.manualSwitch = false;
        tabsSwiper = new Swiper('#tabs-container', {
            speed: 300,
            resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
            //shortSwipes: false,//进行快速短距离的拖动无法触发Swiper
            threshold: 50,//拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
            initialSlide : initialSlide,
            onInit: function(tabsSwiper) {
                $scope.tabsSwiperInited = true;
                $scope.initTabsSwiper(tabsSwiper.activeIndex, loadFindLive);
            },
            onSlideChangeStart: function () {
                if(tabsSwiper != null) {
                    $scope.initTabsSwiper(tabsSwiper.activeIndex, true);
                }
            },
            onSlideChangeEnd: function () {
            }
        })
        $(".tab li").on('touchstart mousedown', function (e) {
            e.preventDefault()
            $(".tab .active").removeClass('active')
            $(this).addClass('active')
            tabsSwiper.slideTo($(this).index())
        })
        $(".tab li").click(function (e) {
            e.preventDefault()
        });
    }
     /*初始化数据*/
     $scope.initMatchData = function (index) {
        $scope.hideGameCount = 0;
    	$scope.initCompanyValues();
    	$scope.initFootballStateI18n();
        $scope.initHandicapValueMap();
    	$scope.headBox=true;
    	$scope.contentBox=true;
    	$scope.mainBox=true;
    	$scope.companyInfoBox=false;
    	$scope.operateBox=true;
    	$scope.comInfoHeadBox=false;
        $scope.dialogBox=false;
        $scope.comDialog=false;
        $scope.dateDialog=false;
    	//当前是否为公司详情页
    	$scope.comTab=false;//默认为首页
    	//热门状态
    	var hoted=$scope.getObjectFromLocalStorage("hotGame");
    	$scope.hoted=hoted?JSON.parse(hoted):true;//默认为热门
    	$scope.putObjectToLocalStorage("hotGame",$scope.hoted);
    	var dayInfo=ec.daySwitch();
    	$scope.today=dayInfo;
    	//调用方法
    	MainServiceFactory.loadMainMatchData($scope, $timeout);
    }
    $scope.getClickedTabsSwiper = function() {
        var ecSwiperActiveIndex = 0;
        var ecSwiperActiveIndexStr = $scope.getObjectFromSessionStorage("ecSwiperActiveIndex");
        if(ecSwiperActiveIndexStr != null) {
            ecSwiperActiveIndex = parseInt(ecSwiperActiveIndexStr, 10);
        }
        return ecSwiperActiveIndex;
    }
     $scope.initTabsSwiper = function(activeIndex, loadFindLive) {
            $(".tab .active").removeClass('active');
            $(".tab li").eq(activeIndex).addClass('active');
            $scope.tabActiveIndex = activeIndex;
            $scope.putObjectToSessionStorage("ecSwiperActiveIndex", activeIndex);
            if($scope.comTab){
            	//调用详情服务
	    		InfoServiceFactory.loadInfoMatchData($scope, $timeout,$filter);
            }else{
            	$scope.initMatchData(activeIndex);
            }
     }
     //比分转换
     $scope.scoreSwitch=function(matchInfo){
     	var resultObj={};
     	if(matchInfo){
     		resultObj["resultInfo"]=matchInfo.matchState=="0"?"vs":matchInfo.matchResult;
     		resultObj["matchColor"]=matchInfo.matchState=="0"?'gray':(matchInfo.matchState>"0"?'blue':'');
     	}
     	return resultObj;
     }
     $scope.initCompanyValues = function () {
        //公司显示选项
        $translate(['COMPANY_CROWN', 'COMPANY_EXTENSIVE', 'COMPANY_LIJI', 'COMPANY_IBC',
        	'COMPANY_ISN','COMPANY_PINNACLE']).then(
            function (translations) {
            	$scope.companyValueMap = {};
                $scope.companyValueMap['3'] = translations.COMPANY_CROWN;
                $scope.companyValueMap['45'] = translations.COMPANY_EXTENSIVE;
                $scope.companyValueMap['31'] = translations.COMPANY_LIJI;
                $scope.companyValueMap['38'] = translations.COMPANY_IBC;
                $scope.companyValueMap['44'] = translations.COMPANY_ISN;
                $scope.companyValueMap['50'] = translations.COMPANY_PINNACLE;
            }
        );
    }
    $scope.initFootballStateI18n = function () {
        $translate(['STATE_NOTSTART', 'STATE_FIRSTHALF', 'STATE_MIDFIELD', 'STATE_LASTHALF',
            'STATE_OVERTIME', 'STATE_PENALTY', 'STATE_FINISH', 'STATE_CANCEL',
            'STATE_UNDETERMINED', 'STATE_CUT', 'STATE_INTERRUPT', 'STATE_DELAY'
        ]).then(function (translations) {
            $scope.footballStateMap = {};
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
    };
    /*级别转换*/
    $scope.levelSwitch=function(levelInfo){
    	if(levelInfo){
    		levelInfo.leftClass=$scope.cssSwitch(levelInfo.leftUp);
    		levelInfo.middleClass=$scope.cssSwitch(levelInfo.middleUp);
    		levelInfo.rightClass=$scope.cssSwitch(levelInfo.rightUp);
            if($scope.tabActiveIndex==0){
                levelInfo.middleVal=$scope.convertAsiaOdds(levelInfo.middle);
            }else if($scope.tabActiveIndex==1){
                levelInfo.middleVal=$scope.convertSizeOdds(levelInfo.middle);
            }else{
                levelInfo.middleVal=levelInfo.middle;
            }
    	}
    }
    /*赔率计算升降*/
    $scope.oddSwitch=function(oddObj){
    	var upNum=0,upClass="";
    	if(oddObj){
    		upNum=oddObj.newOddNum-oddObj.oldOddNum>0?1:(oddObj.newOddNum-oddObj.oldOddNum<0?-1:0);
    	}
    	upClass=$scope.cssSwitch(upNum);
    	return upClass;
    }
    //公司转换
    $scope.comSwitch=function(comArr){
    	$scope.comList=[];
    	var obj=null;
    	for (var i = 0; i < comArr.length; i++) {
    		obj={};
    		obj["name"]= $scope.companyValueMap[comArr[i].comId];
    		obj["id"]=comArr[i].comId;
    		obj["value"]=comArr[i].comName;
    		obj["checked"]=false;
    		$scope.comList.push(obj);
    	}
    }
    $scope.cssSwitch=function(info){
    	var classInfo;
    	classInfo=info>0?"orange":(info<0?"green":"");
    	return classInfo;
    }
    //返回链接
    ec.gotoUpper=function($event){
      angular.element($(".nav-menus")).removeClass("nav_hidden").addClass("nav_show");
    	var target=$($event.currentTarget);
    	if($scope.comTab){
    		target.attr("href","javascript:void(0);");
    		$scope.initMatchData($scope.tabActiveIndex);
        angular.element($(".header").addClass("h_shadow"));
        angular.element($(".header .tab").addClass("h_odds"));
        angular.element($(".head_bar").show());
    	}else{
    		target.attr("href","/index.html");
    	}
    }
    //公司弹出选项
    ec.comWinClick=function($event){
    	$scope.dialogBox=true;
    	$scope.comDialog=true;
    	$scope.dateDialog=false;
        $("body").addClass("body_h");
        $(".mainList").addClass('hidden');
    	ec.initCompanyList();
    }
    //公司窗口参数初始化
    ec.initCompanyList = function () {
        //赔率提示初始化
        var comValArr = $scope.localCompany();
        $scope.companyListValues = angular.copy($scope.comList);
        var comList = null;
        if(comValArr!=null&&comValArr.length!=0){
        	for (var i in $scope.companyListValues) {
	            comList = $scope.companyListValues[i];
	            if (comValArr.indexOf(comList.id)!=-1) {
	                comList.checked = true;
	            } else {
	                comList.checked = false;
	            }
	        }
        }
        // console.log($scope.companyListValues);
    }
    //公司详情
    ec.companyInfo=function($event){
    	var target=$($event.currentTarget);
    	var comInfoObj={};
	    	comInfoObj["thId"]=target.data("matchid");
	    	comInfoObj["comId"]=target.data("comid");
	    	comInfoObj["home"]=target.data("home");
	    	comInfoObj["guest"]=target.data("guest");
	    	comInfoObj["result"]=target.data("res");
	    $scope.comInfoObj=comInfoObj;
	    $scope.mainBox=false;
	    $scope.companyInfoBox=true;
	    $scope.comTab=true;
	    $scope.operateBox=false;
    	$scope.comInfoHeadBox=true;
    	$scope.hideLoadingImg();
    	$scope.comResInfo=comInfoObj["result"];
      $scope.comHomeInfo=comInfoObj["home"];
      $scope.comGuestInfo=comInfoObj["guest"];
	    $scope.comInfoListDefault(comInfoObj["comId"]);
		  angular.element($(".header").removeClass("h_shadow"));
		  angular.element($(".header .tab").removeClass("h_odds"));
		  angular.element($(".head_bar").hide());
      angular.element($(".nav-menus")).addClass("nav_hidden");
	    //调用详情服务
	    InfoServiceFactory.loadInfoMatchData($scope, $timeout,$filter);
    }
    //详情左边公司栏选项
    ec.comInfoClick=function($event){
    	var target=$($event.currentTarget);
    	target.siblings().removeClass('active');
    	target.addClass("active");
    	var comInfoObj=$scope.comInfoObj;
	    	comInfoObj["comId"]=target.data("id");
	    $scope.comInfoObj=comInfoObj;
	    $scope.comInfoListDefault(comInfoObj["comId"]);
	    //调用详情服务
	    InfoServiceFactory.loadInfoMatchData($scope, $timeout,$filter);
        $(".com_right").scrollTop(0);
    	// console.log($scope.comInfoObj);
    }
    //是否热门
    ec.hotClick=function($event){
    	var target=$($event.currentTarget);
    	if(target.hasClass("hoted")){
    		target.removeClass('hoted');
    		$scope.putObjectToLocalStorage("hotGame",false);
    		$scope.hoted=false;
    	}else{
    		target.addClass('hoted');
    		$scope.putObjectToLocalStorage("hotGame",true);
    		$scope.hoted=true;
    	}
    	$scope.hotFilter(); //筛选热门赛事
    	$scope.mainMatches=$scope.companyFilter();  //最终结果
    }
    //弹出框外层
    ec.dialogBox=function($event){
    	$scope.dialogBox=false;
        $("body").removeClass("body_h");
        $(".mainList").removeClass('hidden');
    }
    ec.comDialog=function($event){
    	$event.stopPropagation();
    }
    //公司选项事件
    ec.comListClick=function($event){
    	var target = $event.currentTarget;
        var value = null;
        var curLab=$(target).find('.choice_box');
        curLab.toggleClass("checked");
        var cb=curLab.find("input[type='checkbox']");
        if(curLab.hasClass('checked')){
        	cb[0].checked=true;
        }else{
        	cb[0].checked=false;
        }
    }
    //公司选择确认
    ec.submitClick=function($event){
    	var target = $($event.currentTarget);
    	var ulList=target.prev("#com_checkbox");
    	var chedList=ulList.find("input:checked");
    	var selectArr=[];
    	for (var i = 0; i < chedList.length; i++) {
			selectArr.push($(chedList[i]).data("id"));
		}
        //未选择公司提示
        if(selectArr.length==0){
            var errBox=target.parent().siblings(".error_box");
            errBox.show();
            setTimeout(function(){errBox.hide()},1000);
            return;
        }
		$scope.putObjectToLocalStorage("expCompanyed",selectArr.toString());
		$scope.dialogBox=false;
        $(".mainList").removeClass('hidden');
		$scope.mainMatches=$scope.companyFilter();  //最终结果
        $scope.toggleNoMainMatches();
    }
    //日期选择
    ec.dateSelect=function($event){
    	$scope.dialogBox=true;
    	$scope.comDialog=false;
    	$scope.dateDialog=true;
        $("body").addClass("body_h");
        $(".mainList").addClass('hidden');
    	ec.initDateList();
    }
    /*日期处理*/
    ec.daySwitch=function(){
        var dayInfo=$scope.getObjectFromSessionStorage("expDate");
        var localDay=new Date(dayInfo);
        var today=new Date();
        var d1=new Date(today.Format('yyyy/MM/dd'));
        var d2=new Date(localDay.Format('yyyy/MM/dd'));
        var dayNum=(d1.getTime()-d2.getTime())/24/60/60/1000;
        if(dayInfo==null||dayNum>6){
            dayInfo=today.Format("yyyy-MM-dd"); //默认选中今日
            $scope.putObjectToSessionStorage("expDate",dayInfo);
        }
        return dayInfo;
    }
    //初始化日期数据
    ec.initDateList=function(){
    	var dateList=[];
        var mydate = new Date();
        var o = null;
        var dayInfo=ec.daySwitch();
    	$scope.today=dayInfo;
        for (var i = 0; i < 14; i++) {
        	if(i==0){
        		mydate.setDate(mydate.getDate() - 6);
        	}else{
        		mydate.setDate(mydate.getDate() + 1);
        	}
            o = {};
            o.day = mydate.Format("MM-dd");
            o.yearDay=mydate.Format("yyyy-MM-dd");
            o.checked=o.yearDay==$scope.today?true:false;
            dateList.push(o);
        }
        $scope.dateList=dateList;
    }
    ec.dateClick=function($event){
    	var target=$($event.currentTarget);
    	var dateVal=target.data('info');
    	$(".dateInfo").html(dateVal);
    	$scope.putObjectToSessionStorage("expDate",dateVal);
    	$scope.dialogBox=false;
        $(".mainList").removeClass('hidden');
    	$scope.initMatchData($scope.getClickedTabsSwiper);
    }
    //筛选过滤
    ec.filterClick=function($event){
      angular.element($(".nav-menus")).addClass("nav_hidden");
    	$scope.headBox=false;
    	$scope.contentBox=false;
    	$scope.filterBox=true;
    	$scope.initGameFilter(); //初始化筛选方法
    }
    //筛选返回
    ec.backContent=function($event){
      angular.element($(".nav-menus")).removeClass("nav_hidden").addClass("nav_show");
    	$scope.headBox=true;
    	$scope.contentBox=true;
    	$scope.filterBox=false;
    }
    //公司详情--公司默认选项
    $scope.comInfoListDefault=function(comId){
    	$scope.comInfoListValues = angular.copy($scope.comList);
        var comList = null;
        if(comId){
        	for (var i in $scope.comInfoListValues) {
	            comList = $scope.comInfoListValues[i];
	            if (comId==comList.id) {
	                comList.checked = true;
	            } else {
	                comList.checked = false;
	            }
	        }
        }
    }
    /*高度计算*/
    $scope.setHeight=function (){
        var heightVal=document.documentElement.clientHeight - $(".header").height();
         $('.mainList').height(heightVal); //首页box
         $('.mainBox').height(heightVal);  //详情box
         $('.com_left').height(heightVal-6);
         $('.com_right').height(heightVal-6);
        var sidebar = document.getElementById('game_box');
        sidebar.style.height = document.documentElement.clientHeight - 105 + 'px';
    }
    /*热门筛选*/
    $scope.hotFilter=function(){
    	var tempMainMatches = [];
        var mainMatch = null;
        var hoted=$scope.getObjectFromLocalStorage("hotGame");
        var newMatch=angular.copy($scope.mainMatchesBak);  //copy原有数据
    	for (var i in newMatch) {
            mainMatch = newMatch[i];
            if(hoted!=null){
            	if ($.parseJSON(hoted)&&$.parseJSON(hoted)==mainMatch.hot) {
                    tempMainMatches.push(mainMatch);
                }
                if(!$.parseJSON(hoted)){
                	tempMainMatches.push(mainMatch);
                }
            }
        }
        $scope.filterMainMatchBak=tempMainMatches;
        return tempMainMatches;
    }
    /*公司筛选*/
    $scope.companyFilter=function(){
		var tempMainMatches = [],comArr=null;
        var mainMatch = null,comList=[];
        var comValArr = $scope.localCompany();
        var filterMain=angular.copy($scope.filterMainMatchBak);
        for (var i in filterMain) {
			mainMatch = filterMain[i];
			comList=mainMatch.comList,comArr=[];
            if(comList&&comList.length!=0){
	        	for (var j = 0; j < comList.length; j++) {
	            	if (comValArr.indexOf(comList[j].comId) > -1) {
	                    comArr.push(comList[j]);
	                }
	            }
	        }
            //剔除无数据公司
            if(comArr.length>0){
                mainMatch.comList=comArr;
                tempMainMatches.push(mainMatch);
            }
		}
        $scope.setHeight();
		// console.log(tempMainMatches);
        return tempMainMatches;
    }
    /*过滤赛事*/
    $scope.getMainFilterByLeagueId=function(checkedLeagueIdList){
    	var tempMainMatches = [];
        var mainMatch = null;
    	var newMatch=angular.copy($scope.mainMatchesBak);  //copy原有数据
    	for (var i in newMatch) {
            mainMatch = newMatch[i];
            if (checkedLeagueIdList != null) {
                if (checkedLeagueIdList.indexOf(mainMatch.leagueId) > -1) {
                    tempMainMatches.push(mainMatch);
                }
            }
        }
        $scope.filterMainMatchBak=tempMainMatches;
        return tempMainMatches;
    }
    //获取本地公司信息
    $scope.localCompany=function(){
    	var comValArr=[];
    	var comValStr = $scope.getObjectFromLocalStorage("expCompanyed");
    	if (comValStr != null) {
            comValArr=comValStr.split(",");
        }
    	return comValArr;
    }
    //获取热门赛事ThirdId数组
    $scope.getHotThirdIdArr = function () {
        var hotThirdIdArr = [];
        var curGame = null;
        for (var i in $scope.gameList) {
            curGame = $scope.gameList[i];
            if (curGame.hot) {
                hotThirdIdArr = hotThirdIdArr.concat(curGame.thirdId);
            }
        }
        return hotThirdIdArr;
    }

    //是否热门比赛
    $scope.isHotMatch = function(thirdId) {
        var hotThirdIdArr = $scope.getHotThirdIdArr();
        if(hotThirdIdArr.indexOf(thirdId) > -1 ) {
            return true;
        }
        return false;
    }
    $scope.getIndexFromHotImmediateThirdArr = function(thirdId) {
        for (var i in $scope.hotImmediateMatchThirdArr) {
            if (thirdId == $scope.hotImmediateMatchThirdArr[i]) {
                return i;
            }
        }
        return -1;
    }
    $scope.showLoadingImg = function () {
        $scope.expLoadingImg = true;
    };

    $scope.hideLoadingImg = function () {
        $scope.expLoadingImg = false;
    };
    //初始化公司详情滚动内容
    $scope.initComInfoScroll=function(){
        $scope.scrollCount = 0;
    	$(".com_right").scroll(function(){
	         var $this =$(this),
	         viewH =$(this).height(),//可见高度
	         contentH =$(this).get(0).scrollHeight,//内容高度
	         scrollTop =$(this).scrollTop();//滚动高度
	        //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
	        if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容
	        // 这里加载数据..
	       		$scope.loadMoreCompanyInfoMatches();
	        }
	    });
    }
    /*加载更多数据*/
    var isScrolling = false;
    $scope.loadMoreCompanyInfoMatches = function () {
    	// console.log("---comInfo----test--");
        if ($scope.expLoadingImg || isScrolling) {
            return;
        }
        isScrolling = true;
        var matches = $scope.comInfoMatchesBak;
        if (matches != null && matches.length > ($scope.scrollCount + 1) * expComPs) {
            $scope.showLoadingImg();
        } else {
            isScrolling = false;
            $scope.hideLoadingImg();
            return;
        }
        $timeout(function () {
            if (matches && matches.length > ($scope.scrollCount + 1) * expComPs) {
                $scope.scrollCount++;
                var arr = matches.slice($scope.scrollCount * expComPs, ($scope.scrollCount + 1) * expComPs);
                if (arr.length > 0) {
                    for (var i in arr) {
                        $scope.comInfoMatches.push(arr[i]);
                    }
                }
            }
            isScrolling = false;
            $scope.hideLoadingImg();
        }, 100);
    };
    //初始化首页滚动内容
    $scope.initMainScroll=function(){
        $(".mainList").scroll(function(){
             var $this =$(this),
             viewH =$(this).height(),//可见高度
             contentH =$(this).get(0).scrollHeight,//内容高度
             scrollTop =$(this).scrollTop();//滚动高度
            //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
            if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容
            // 这里加载数据..
                $scope.loadMoreMainMatches();
            }
        });
    }
    /*首页加载更多*/
    var isMainScrolling = false;
    var scrollMainCount = 0;
    $scope.loadMoreMainMatches = function () {
        // console.log("----main---test--");
        if ($scope.expLoadingImg || isMainScrolling) {
            return;
        }
        isMainScrolling = true;
        var matches = $scope.companyFilter();
        if (matches != null && matches.length > (scrollMainCount + 1) * expMainPs) {
            $scope.showLoadingImg();
        } else {
            isMainScrolling = false;
            $scope.hideLoadingImg();
            return;
        }
        $timeout(function () {
            if (matches && matches.length > (scrollMainCount + 1) * expMainPs) {
                scrollMainCount++;
                var arr = matches.slice(scrollMainCount * expMainPs, (scrollMainCount + 1) * expMainPs);
                if (arr.length > 0) {
                    for (var i in arr) {
                        $scope.mainMatches.push(arr[i]);
                    }
                }
            }
            isMainScrolling = false;
            $scope.hideLoadingImg();
        }, 100);
    };
    //无数据处理
    $scope.toggleNoMainMatches = function () {
        if ($scope.mainMatches === undefined || $scope.mainMatches === null ||
            $scope.mainMatches.length === 0) {
            $scope.noMainMatches = true;
        } else {
            $scope.noMainMatches = false;
        }
    };
    $scope.toggleNoComInfoMatches = function () {
        if ($scope.comInfoMatches === undefined || $scope.comInfoMatches === null ||
            $scope.comInfoMatches.length === 0) {
            $scope.noComInfoMatches = true;
        } else {
            $scope.noComInfoMatches = false;
        }
    };
    //初始化赛事筛选
    $scope.initGameFilter = function () {
        $scope.hotGameList=[];
        $scope.otherGameList=[];
        $scope.raceList = angular.copy($scope.gameList);//复制一份，防止页面定时刷新时$scope.gameList被重新初始化导致筛选页面已选赛事被清空
        if ($scope.raceList == null) {
            $scope.raceList = [];
        }
        $scope.hideGameCount = 0;
        var leagueIdArr = $scope.getCheckedLeagueIdArrFromCookie();
        if (leagueIdArr != null && leagueIdArr.length > 0) {
            var curGame = null;
            for (var i in $scope.raceList) {
                curGame = $scope.raceList[i];
                if (leagueIdArr.indexOf(curGame.leagueId) > -1) {
                    curGame.clicked = true;
                } else {
                    curGame.clicked = false;
                    $scope.hideGameCount += curGame.matchsInLeague;
                }
                //热门、非热门
                if(curGame.hot){
                    $scope.hotGameList.push(curGame);
                }else{
                    $scope.otherGameList.push(curGame);
                }
            }
        } else {
            $scope.checkHotGame();
        }
    }
    //从cookie中获取已选择赛事名称数组
    $scope.getCheckedLeagueIdArrFromCookie = function () {
        var checkedLeagueIdList = null;
            checkedLeagueIdList = $scope.getObjectFromSessionStorage("checkedLeagueIdList");
        var checkedLeagueIdArr = [];
        if (checkedLeagueIdList != null) {
            checkedLeagueIdArr = checkedLeagueIdList.split(",");
        }
        return checkedLeagueIdArr;
    }
     //赛事筛选--全选
    $scope.checkAllGame = function () {
        for (var i in $scope.raceList) {
            $scope.raceList[i].clicked = true;
        }
        $scope.hideGameCount = 0;
    }
    //赛事筛选--全不选
    $scope.uncheckAllGame = function () {
        $scope.hotGameList=[];
        $scope.otherGameList=[];
        $scope.hideGameCount = 0;
        var curGame = null;
        for (var i in $scope.raceList) {
            $scope.raceList[i].clicked = false;
            curGame = $scope.raceList[i];
            $scope.hideGameCount += $scope.raceList[i].matchsInLeague;
            //热门、非热门
            if(curGame.hot){
                $scope.hotGameList.push(curGame);
            }else{
                $scope.otherGameList.push(curGame);
            }
        }
    }
    //赛事筛选--反选
    $scope.reverseCheckGame = function () {
        $scope.hideGameCount = 0;
        var curGame = null;
        for (var i in $scope.raceList) {
            curGame = $scope.raceList[i];
            if (curGame.clicked) {
                curGame.clicked = false;
                $scope.hideGameCount += curGame.matchsInLeague;
            } else {
                curGame.clicked = true;
            }
        }
    }
    //焦点(五大)赛事名称数组
    var fiveRaceIds = ["75", "650", "652", "648", "67", "103", "192", "113", "36", "31", "34", "8", "11", "60"];

    //赛事筛选--焦点联赛
    $scope.checkFiveGame = function () {
        $scope.hideGameCount = 0;
        var game = null;
        for (var i in $scope.raceList) {
            game = $scope.raceList[i];
            if (fiveRaceIds.indexOf(game.leagueId) > -1) {
                game.clicked = true;
            } else {
                game.clicked = false;
                $scope.hideGameCount += game.matchsInLeague;
            }
        }
    }
	//赛事筛选--热门赛事
    $scope.checkHotGame = function () {
        $scope.hotGameList=[];
        $scope.otherGameList=[];
        $scope.hideGameCount = 0;
        var game = null;
        for (var i in $scope.raceList) {
            game = $scope.raceList[i];
            if (game.hot && game.hot == true) {
                game.clicked = true;
            } else {
                game.clicked = false;
                $scope.hideGameCount += game.matchsInLeague;
            }
            //热门、非热门
            if(game.hot){
                $scope.hotGameList.push(game);
            }else{
                $scope.otherGameList.push(game);
            }
        }
    }
    //单个赛事筛选
    $scope.toggleGame = function ($event, toggleClass) {
        var _this = $($event.currentTarget);
        _this.toggleClass(toggleClass);
        var clicked = false;
        if (_this.hasClass(toggleClass)) {
            $scope.hideGameCount -= parseInt(_this.data("count"));
            clicked = true;
        } else {
            $scope.hideGameCount += parseInt(_this.data("count"));
            clicked = false;
        }
        var leagueId = _this.data("id");
        for (var i = 0; i < $scope.raceList.length; i++) {
            if (leagueId == $scope.raceList[i].leagueId) {
                $scope.raceList[i].clicked = clicked;
            }
        }
    }
    //赛事筛选提交请求
    $scope.checkGameSubmit = function ($event) {
        // $scope.initScroll();
        var checkedLeagueIdList = [];
        var checkedRaceIdList = [];
        var curGame = null;
        for (var i in $scope.raceList) {
            curGame = $scope.raceList[i];
            if (curGame.clicked) {
                checkedLeagueIdList = checkedLeagueIdList.concat(curGame.leagueId);
                checkedRaceIdList.push(curGame.leagueId);
            }
        }
        //刷新model数据
        $scope.getMainFilterByLeagueId(checkedLeagueIdList);
        $scope.mainMatches=$scope.companyFilter();  //最终结果
        $scope.toggleNoMainMatches(); //无数据处理
        //将赛事id列表存入到cookie中
        $scope.putObjectToSessionStorage('checkedLeagueIdList', checkedRaceIdList.join(","));
        //当天有赛事筛选记录行为，记录到sessionStorage
        $scope.putObjectToSessionStorage('todayHasCheckLeagueId', "true");
        //关闭当前弹窗
        ec.backContent($event);
    }
    //赔率转换数据
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
                $scope.handicapValueMap = {};
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
    $scope.convertAsiaOdds = function (oddVal) {
        var handicapValueMap = $scope.handicapValueMap;
        if (null == oddVal) {
            return;
        }
        var mediumOdds = oddVal;
        if (null == mediumOdds) {
            return;
        }
        var mediumOddsVal = parseFloat(mediumOdds);
        var handicapValue = handicapValueMap[Math.abs(mediumOddsVal)];
        if (mediumOddsVal < 0) {
            handicapValue = "*" + handicapValue;
        }
        return handicapValue
    }

    //大小球赔率转换
    $scope.convertSizeOdds = function (oddVal) {
        if (oddVal == null) {
            return;
        }
        var mediumOdds = oddVal;
        if (null == mediumOdds) {
            return;
        }
        var mediumOddsVal = parseFloat(mediumOdds),handicapValue="";
        if (mediumOdds.lastIndexOf('.5') != -1) {
            if (mediumOdds.endWith('.0')) {
                handicapValue = mediumOdds.substring(0, mediumOdds.lastIndexOf(0));
            } else {
                handicapValue = mediumOdds;
            }
        } else if (mediumOdds.lastIndexOf('.0') != -1) {
            var val = mediumOdds.split(".")[0];
            handicapValue = val;
        } else if (mediumOdds.lastIndexOf('.25') != -1 || mediumOdds.lastIndexOf('.75') != -1) {
            var before = (mediumOddsVal - 0.25) + '';
            if (before.endWith(".0")) {
                before = before.substring(0, before.indexOf("."));
            }
            var last = (mediumOddsVal + 0.25) + '';
            if (last.endWith(".0")) {
                last = last.substring(0, last.indexOf("."));
            }
            handicapValue = before + "/" + last;
        }else{
            handicapValue = mediumOdds;
        }
        return handicapValue;
    }
    //langulage
    $scope.getLanguage = function () {
        var language = $scope.getObjectFromLocalStorage("language");
        if (language == null) {
            language = defaultLanguageKey;
        }
        return language;
    };
    //localStorage相关操作方法
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

    //sessionStorage相关操作方法
    $scope.getObjectFromSessionStorage = function (key) {
        return sessionStorage.getItem(key)
    };

    $scope.putObjectToSessionStorage = function (key, value) {
        sessionStorage.setItem(key, value);
    }

    $scope.removeObjectFromSessionStorage = function (key) {
        sessionStorage.removeItem(key);
    }
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
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}
String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}

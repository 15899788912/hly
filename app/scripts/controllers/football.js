/**
 * Created by lenovoa on 2015/9/30.
 */
'use strict';
var football = angular.module("live1.football");

//i18n
football.config(['$translateProvider', function ($translateProvider) {

    var translationsVI = {
      "HEAD_TITLE":	"Tỷ Số Nhất bản màn hình cảm ứng",
      "FOOTBALL_TITLE":	"Tỷ số bống đá",
      "TABS_IMMEDIATE":	"Live",
      "TABS_RESULTS":	"Kết quả",
      "TABS_SCHEDULE":	"Lịch thi đấu",
      "TABS_ATTENTION":	"thích",
      "GOALS_HINTS":	"Goal nhắc nhở",
      "GOALS_VOICE":	"Âm thanh",
      "GOALS_WINDOWS":	"hộp nhắc",
      "GOALS_VOICE1":	"Âm thanh 1",
      "GOALS_VOICE2":	"Âm thanh 2",
      "GOALS_VOICE3":	"Âm thanh 3",
      "GOALS_NO_VOICE":	"Im lặng",
      "REDCARD_HINTS":	"Thẻ đỏ nhắc nhở",
      "REDCARD_VOICE":	"Âm thanh",
      "REDCARD_WINDOWS":	"hộp nhắc",
      "ODDS_SHOW":	"Tỷ lệ hiển thị",
      "TIME_FILTER":	"Chọn thời gian ",
      "TIME_80_MINUTES_LATER":	"Sau 80 phút",
      "TIME_SECOND_HALF":	"Hiệp 2(kể tiền vệ)",
      "TIME_BEGAIN":	"Đã bắt đầu",
      "ALL_MATCHES":	"Tất cả các trận đấu",
      "SCORE_FILTER":	"Chọn tỷ số",
      "SCORE_2_GOALS_ABOVE":	"Khoảng cách 2 goal",
      "SCORE_1_GOAL":	"Khoảng cách 1 goal",
      "SCORE_DRAW":	"Hòa",
      "REDCARD_FILTER":	"Chọn thẻ đó",
      "REDCARD_EXISTS":	"Có thẻ đỏ",
      "REDCARD_NO":	"Không có thẻ đỏ",
      "BUTTON_SUBMIT":	"OK",
      "BUTTON_CANCEL":	"Hủy",
      "FILTERING":	"Chọn ",
      "SETTING":	"Cải đặt",
      "FILTERING_MATCH":	"Chọn giải đấu",
      "FILTERING_STATE":	"Chọn trạng thái",
      "HOT_FILTERING":	"Giải đấu hot",
      "OTHER_FILTERING":	"Giải đấu khác",
      "HIDE_MATCHES":	"Ẩn trận{{hideGameCount}} ",
      "FIVE_MATCH":	"Tập trung",
      "HOT_MATCH":	"Hot",
      "SELECT_ALL_MATCH":	"chọn tất cả",
      "DESEELCT_MATCH":	"Chọn ngược",
      "ODDS_ASIAN":	"Kèo châu Á",
      "ODDS_SIZE":	"kèo tài xỉu",
      "ODDS_EUROPE":	"Tỷ lệ châu Âu",
      "ODDS_HIDE":	"Không hiển thị",
      "NO_IMMEDIATE_MATCHES":	"Cuộc giải đáu theo yêu cầu bạn chọn là có 0 trận",
      "NO_INIT_IMMEDIATE_MATCHES":	"Tạm không có giải đấu",
      "NO_ATTENTION_MATCHES":	"Tạm không có sự chú ý",
      "NOTIFICATIONS_ONLY":	"Các thiết lập trên chỉ nhắc nhở những giải đấu chú ý ",
      "SUNDAY":	"Chủ nhật",
      "MONDAY":	"Thứ hai",
      "TUESDAY":	"Thứ ba",
      "WEDNESDAY":	"Thứ tư",
      "THURSDAY":	"Thứ năm",
      "FRIDAY":	"Thứ sáu",
      "SATURDAY":	"Thứ bảy",
      "ERROR_DAY":	"Lỗi hệ thống, không có thể đọc ngày !",
      "ODDS_SEAL":	"Hết thời gian chơi",
      "BUTTON_CLOSE":	"Đóng",
      "ATTENTION_SORRY":	"Xin lỗi!",
      "ATTENTION_SORRY_TEXT":	"Không thể đặt chú ý giải đấu quá {{maxAttentionMatchCount}}trận!",
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
      "DAY_SELECT":	"Chọn ngay",
      "GOALS_HOMETEAM":	"Đội chủ ghi bàn",
      "GOALS_GUESTTEAM":"Đội khách",//	"Đội khách ghi bàn"
    }
    var translationTH = {
      "HEAD_TITLE":	"วันสกอร์รุ่นหน้าจอสัมผัส ",
      "FOOTBALL_TITLE":	"สกอร์ฟุตบอล",
      "TABS_IMMEDIATE":	"เรียลไทม์",
      "TABS_RESULTS":	"ผลบอล",
      "TABS_SCHEDULE":	"โปรแกรมบอล",
      "TABS_ATTENTION":	"เกมของฉัน ",
      "GOALS_HINTS":	"เคล็ดลับการได้ประตู",
      "GOALS_VOICE":	"เสียง",
      "GOALS_WINDOWS":	"ป๊อปอัพ ",
      "GOALS_VOICE1":	"เสียง 1",
      "GOALS_VOICE2":	"เสียง 2",
      "GOALS_VOICE3":	"เสียง 3",
      "GOALS_NO_VOICE":	"ไม่มีเสียง",
      "REDCARD_HINTS":	"เคล็ดลับใบแดง",
      "REDCARD_VOICE":	"เสียง",
      "REDCARD_WINDOWS":	"ป๊อปอัพ",
      "ODDS_SHOW":	"แสดงออดซ",
      "TIME_FILTER":	"การเลือกเวลา",
      "TIME_80_MINUTES_LATER":	"หลังจาก 80 นาที",
      "TIME_SECOND_HALF":	"ครึ่งหลัง（รวม HT）",
      "TIME_BEGAIN":	"เริ่มแข่งแล้ว",
      "ALL_MATCHES":	"เกมทั้งหมด",
      "SCORE_FILTER":	"การเลือกสกอร์",
      "SCORE_2_GOALS_ABOVE":	"ผลต่างกัน2ลูก&2ลูกขึ้นไป",
      "SCORE_1_GOAL":	"ผลต่างกัน 1ลูก",
      "SCORE_DRAW":	"เสมอ",
      "REDCARD_FILTER":	"การเหลือกใบแดง",
      "REDCARD_EXISTS":	"มีใบแดง",
      "REDCARD_NO":	"ไม่มีใบแดง",
      "BUTTON_SUBMIT":	"ยืนยัน",
      "BUTTON_CANCEL":	"ยกเลิก",
      "FILTERING":	"เลือก",
      "SETTING":	"การตั้งค่า",
      "FILTERING_MATCH":	"การเลือกเกม",
      "FILTERING_STATE":	"การเลือกสภาพ",
      "HOT_FILTERING":	"เกมยอดนิยม",
      "OTHER_FILTERING":	"เกมอื่นๆ",
      "HIDE_MATCHES":	"ซ่อน {{hideGameCount}}เกม",
      "FIVE_MATCH":	"โฟกัส",
      "HOT_MATCH":	"ยอดนิยม",
      "SELECT_ALL_MATCH":	"เหลือกทั้งหมด",
      "DESEELCT_MATCH":	"เลือกผกผัน",
      "ODDS_ASIAN":	"เอเชียออดซ",
      "ODDS_SIZE":	"บอลสูง/ต่ำ",
      "ODDS_EUROPE":	"1X 2ออดซ",
      "ODDS_HIDE":	"ไม่แสดง",
      "NO_IMMEDIATE_MATCHES":	"เกมทั้งหมดที่คุณเหลือกมี 0 เกม",
      "NO_INIT_IMMEDIATE_MATCHES":	"ไม่มีเกม",
      "NO_ATTENTION_MATCHES":	"ไม่มีเกมของฉัน ",
      "NOTIFICATIONS_ONLY":	"แจ้งเตือนเฉพาะเกมของฉันเท่านั้น",
      "SUNDAY":	"วันอาทิตย์",
      "MONDAY":	"วันจันทร์",
      "TUESDAY":	"วันอังคาร",
      "WEDNESDAY":	"วันพุธ",
      "THURSDAY":	"วันพฤหัสบดี",
      "FRIDAY":	"วันศุกร์",
      "SATURDAY":	"วันเสาร์",
      "ERROR_DAY":	"เกิดข้อผิดพลาดในระบบ ไม่สามารถอ่านวันที่ได้",
      "ODDS_SEAL":	"ปิด",
      "BUTTON_CLOSE":	"ปิด",
      "ATTENTION_SORRY":	"ขออภัยค่ะ",
      "ATTENTION_SORRY_TEXT":	"เกมของฉันไม่ควรมากกว่า{{maxAttentionMatchCount}}เกม",
      "HANDICAP_VALUE_0_0":	"0",
      "HANDICAP_VALUE_0_25":	"0/0.5",
      "HANDICAP_VALUE_0_5":	"0.5",
      "HANDICAP_VALUE_0_75":	"0.5/1",
      "HANDICAP_VALUE_1_0":	"1",
      "HANDICAP_VALUE_1_25":	"1/1.5",
      "HANDICAP_VALUE_1_5":	"1.5",
      "HANDICAP_VALUE_1_75":	"1.5/2",
      "HANDICAP_VALUE_2_0":	"2",
      "HANDICAP_VALUE_2_25":	"2/2.5",
      "HANDICAP_VALUE_2_5":	"2.5",
      "HANDICAP_VALUE_2_75":	"2.5/3",
      "HANDICAP_VALUE_3_0":	"3",
      "HANDICAP_VALUE_3_25":	"3/3.5",
      "HANDICAP_VALUE_3_5":	"3.5",
      "HANDICAP_VALUE_3_75":	"3.5/4",
      "HANDICAP_VALUE_4_0":	"4",
      "HANDICAP_VALUE_4_25":	"4/4.5",
      "HANDICAP_VALUE_4_5":	"4.5",
      "HANDICAP_VALUE_4_75":	"4.5/5",
      "HANDICAP_VALUE_5_0":	"5",
      "HANDICAP_VALUE_5_25":	"5/5.5",
      "HANDICAP_VALUE_5_5":	"5.5",
      "HANDICAP_VALUE_5_75":	"5.5/6",
      "HANDICAP_VALUE_6_0":	"6",
      "HANDICAP_VALUE_6_25":	"6/6.5",
      "HANDICAP_VALUE_6_5":	"6.5",
      "HANDICAP_VALUE_6_75":	"6.5/7",
      "HANDICAP_VALUE_7_0":	"7",
      "HANDICAP_VALUE_7_25":	"7/7.5",
      "HANDICAP_VALUE_7_5":	"7.5",
      "HANDICAP_VALUE_7_75":	"7.5/8",
      "HANDICAP_VALUE_8_0":	"8",
      "HANDICAP_VALUE_8_25":	"8/8.5",
      "HANDICAP_VALUE_8_5":	"8.5",
      "HANDICAP_VALUE_8_75":	"8.5/9",
      "HANDICAP_VALUE_9_0":	"9",
      "HANDICAP_VALUE_9_25":	"9/9.5",
      "HANDICAP_VALUE_9_5":	"9.5",
      "HANDICAP_VALUE_9_75":	"9.5/10",
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
      "DAY_SELECT":	"เลือกวันที่",
      "GOALS_HOMETEAM":	"ทีมเหย้าได้ประตู",
      "GOALS_GUESTTEAM":	"ทีมเยือนได้ประตู"
    }
    var translationsEN = {
      "HEAD_TITLE":	"One Score Touchscreen Version",
      "FOOTBALL_TITLE":	"Football Score",
      "TABS_IMMEDIATE":	"Live",
      "TABS_RESULTS":	"Results",
      "TABS_SCHEDULE":	"Schedule",
      "TABS_ATTENTION":	"Favourite",
      "GOALS_HINTS":	"Goal Hint",
      "GOALS_VOICE":	"Sound ",
      "GOALS_WINDOWS":	"Pop-up",
      "GOALS_VOICE1":	"Sound 1",
      "GOALS_VOICE2":	"Sound 2",
      "GOALS_VOICE3":	"Sound 3",
      "GOALS_NO_VOICE":	"No Sound",
      "REDCARD_HINTS":	"Red Card Hint",
      "REDCARD_VOICE":	"Sound",
      "REDCARD_WINDOWS":	"Pop-up",
      "ODDS_SHOW":	"Odds Show",
      "TIME_FILTER":	"Time filtering",
      "TIME_80_MINUTES_LATER":	"80 minutes later",
      "TIME_SECOND_HALF":	"2nd Half",
      "TIME_BEGAIN":	"Started",
      "ALL_MATCHES":	"All Matches",
      "SCORE_FILTER":	"Score Filtering",
      "SCORE_2_GOALS_ABOVE":	"2 goals",
      "SCORE_1_GOAL":	"1 goal difference",
      "SCORE_DRAW":	"Draw",
      "REDCARD_FILTER":	"Red Card Filtering",
      "REDCARD_EXISTS":	"Have Red Card",
      "REDCARD_NO":	"No Red Card",
      "BUTTON_SUBMIT":	"Confirm",
      "BUTTON_CANCEL":	"Cancel",
      "FILTERING":	"Filtering",
      "SETTING":	"Settings",
      "FILTERING_MATCH":	"Match Filtering",
      "FILTERING_STATE":	"Status Filtering",
      "HOT_FILTERING":	"Hot Matches",
      "OTHER_FILTERING":	"Other Matches",
      "HIDE_MATCHES":	"Hide {{hideGameCount}} ",
      "FIVE_MATCH":	"Focus",
      "HOT_MATCH":	"Hot",
      "SELECT_ALL_MATCH":	"Select All",
      "DESEELCT_MATCH":	"Inverse",
      "ODDS_ASIAN":	"HDP",
      "ODDS_SIZE":	"O/U",
      "ODDS_EUROPE":	"1x2",
      "ODDS_HIDE":	"Hide",
      "NO_IMMEDIATE_MATCHES":	"0 match under your filtering condition",
      "NO_INIT_IMMEDIATE_MATCHES":	"No match",
      "NO_ATTENTION_MATCHES":	"No favourite",
      "NOTIFICATIONS_ONLY":	"The settings above only valid to favourite",
      "SUNDAY":	"Sunday",
      "MONDAY":	"Monday",
      "TUESDAY":	"Tuesday",
      "WEDNESDAY":	"Wednesday",
      "THURSDAY":	"Thursday",
      "FRIDAY":	"Friday",
      "SATURDAY":	"Saturday",
      "ERROR_DAY":	"System error, unable to read date!",
      "ODDS_SEAL":	"Entertained",
      "BUTTON_CLOSE":	"Close",
      "ATTENTION_SORRY":	"Sorry!",
      "ATTENTION_SORRY_TEXT":	"Favourite cannot exceed {} !",
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
      "DAY_SELECT":	"Select Date",
      "GOALS_HOMETEAM":	"Home Goal",
      "GOALS_GUESTTEAM":	"Away Goal"
    }
    var translationsZH = {
        "HEAD_TITLE": "足球比分_比分直播_即时比分_一比分-足球比分直播网",
        "FOOTBALL_KEYWORDS": "即时比分,比分直播,足球比分,足球比分直播,足球比分网,足球比分即时比分网,足球分析,足球比分直播网",
        "FOOTBALL_DESCRIPTION": "一比分是提供体育比分数据的专业网站，免费为您提供最快、最准、最全的足球比分、即时比分数据，为球迷朋友提供足球比分直播，完场比分查询，一周赛程查询等数据服务。",
        "FOOTBALL_TITLE": "足球比分",
        "TABS_IMMEDIATE": "即时",
        "TABS_RESULTS": "赛果",
        "TABS_SCHEDULE": "赛程",
        "TABS_ATTENTION": "关注",
        "GOALS_HINTS": "进球提示",
        "GOALS_VOICE": "声音",
        "GOALS_WINDOWS": "弹窗",
        "GOALS_VOICE1": "声音1",
        "GOALS_VOICE2": "声音2",
        "GOALS_VOICE3": "声音3",
        "GOALS_NO_VOICE": "无声",
        "REDCARD_HINTS": "红牌提示",
        "REDCARD_VOICE": "声音",
        "REDCARD_WINDOWS": "弹窗",
        "ODDS_SHOW": "赔率显示",
        "TIME_FILTER": "时间筛选",
        "TIME_80_MINUTES_LATER": "80分钟后",
        "TIME_SECOND_HALF": "下半场(含中场)",
        "TIME_BEGAIN": "已开始",
        "ALL_MATCHES": "全部比赛",
        "SCORE_FILTER": "比分筛选",
        "SCORE_2_GOALS_ABOVE": "2球&以上差距",
        "SCORE_1_GOAL": "1球差距",
        "SCORE_DRAW": "平局",
        "REDCARD_FILTER": "红牌筛选",
        "REDCARD_EXISTS": "有红牌",
        "REDCARD_NO": "无红牌",
        "BUTTON_SUBMIT": "确定",
        "BUTTON_CANCEL": "取消",
        "FILTERING": "筛选",
        "SETTING": "设置",
        "FILTERING_MATCH": "赛事筛选",
        "FILTERING_STATE": "状态筛选",
        "HOT_FILTERING":"热门赛事",
        "OTHER_FILTERING":"其他赛事",
        "HIDE_MATCHES": "隐藏{{hideGameCount}}场",
        "FIVE_MATCH": "焦点",
        "HOT_MATCH": "热门",
        "SELECT_ALL_MATCH": "全选",
        "DESEELCT_MATCH": "反选",
        "ODDS_ASIAN": "亚盘",
        "ODDS_SIZE": "大小球",
        "ODDS_EUROPE": "欧赔",
        "ODDS_HIDE": "不显示",
        "NO_IMMEDIATE_MATCHES": "您筛选条件下赛事为0场.",
        "NO_INIT_IMMEDIATE_MATCHES": "暂无赛事",
        "NO_ATTENTION_MATCHES": "暂无关注",
        "NOTIFICATIONS_ONLY": "以上设置仅提示关注赛事",
        "SUNDAY": "周日",
        "MONDAY": "周一",
        "TUESDAY": "周二",
        "WEDNESDAY": "周三",
        "THURSDAY": "周四",
        "FRIDAY": "周五",
        "SATURDAY": "周六",
        "ERROR_DAY": "系统错误，无法读取日期!",
        "ODDS_SEAL": "封",
        "BUTTON_CLOSE": "关闭",
        "ATTENTION_SORRY": "抱歉!",
        "ATTENTION_SORRY_TEXT": "关注赛事不能超过{{maxAttentionMatchCount}}场!",
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
        "STATE_DELAY": "推迟",


        "DAY_SELECT": "日期选择",
        "GOALS_HOMETEAM": "主进球",
        "GOALS_GUESTTEAM": "客进球"
    };
    var translationsZH_HANS = {
        "HEAD_TITLE": "足球比分_比分直播_即時比分_一比分-足球比分直播網",
        "FOOTBALL_KEYWORDS": "即時比分,比分直播,足球比分,足球比分直播,足球比分網,足球比分即時比分網,足球分析,足球比分直播網",
        "FOOTBALL_DESCRIPTION": "一比分是提供體育比分數據的專業網站，免費為您提供最快、最準、最全的足球比分、即時比分數據，為球迷朋友提供足球比分直播，完場比分查詢，一周賽程查詢等數據服務。",
        "FOOTBALL_TITLE": "足球比分",
        "TABS_IMMEDIATE": "即時",
        "TABS_RESULTS": "賽果",
        "TABS_SCHEDULE": "賽程",
        "TABS_ATTENTION": "關注",
        "GOALS_HINTS": "進球提示",
        "GOALS_VOICE": "聲音",
        "GOALS_WINDOWS": "彈窗",
        "GOALS_VOICE1": "聲音1",
        "GOALS_VOICE2": "聲音2",
        "GOALS_VOICE3": "聲音3",
        "GOALS_NO_VOICE": "無聲",
        "REDCARD_HINTS": "紅牌提示",
        "REDCARD_VOICE": "聲音",
        "REDCARD_WINDOWS": "彈窗",
        "ODDS_SHOW": "賠率顯示",
        "TIME_FILTER": "時間篩選",
        "TIME_80_MINUTES_LATER": "80分鐘後",
        "TIME_SECOND_HALF": "下半場(含中場)",
        "TIME_BEGAIN": "已開始",
        "ALL_MATCHES": "全部比賽",
        "SCORE_FILTER": "比分篩選",
        "SCORE_2_GOALS_ABOVE": "2球&以上差距",
        "SCORE_1_GOAL": "1球差距",
        "SCORE_DRAW": "平局",
        "REDCARD_FILTER": "紅牌篩選",
        "REDCARD_EXISTS": "有紅牌",
        "REDCARD_NO": "無紅牌",
        "BUTTON_SUBMIT": "確定",
        "BUTTON_CANCEL": "取消",
        "SETTING": "設置",
        "FILTERING": "篩選",
        "FILTERING_MATCH": "賽事篩選",
        "FILTERING_STATE": "狀態篩選",
        "HOT_FILTERING":"熱門賽事",
        "OTHER_FILTERING":"其他賽事",
        "HIDE_MATCHES": "隱藏{{hideGameCount}}場",
        "FIVE_MATCH": "焦點",
        "HOT_MATCH": "熱門",
        "SELECT_ALL_MATCH": "全選",
        "DESEELCT_MATCH": "反選",
        "ODDS_ASIAN": "亞盤",
        "ODDS_SIZE": "大小球",
        "ODDS_EUROPE": "歐賠",
        "ODDS_HIDE": "不顯示",
        "NO_IMMEDIATE_MATCHES": "您篩選條件下的賽事為0場.",
        "NO_INIT_IMMEDIATE_MATCHES": "暫無賽事",
        "NO_ATTENTION_MATCHES": "暫無關注",
        "NOTIFICATIONS_ONLY": "以上設置僅提示關注賽事",
        "SUNDAY": "週日",
        "MONDAY": "週一",
        "TUESDAY": "週二",
        "WEDNESDAY": "週三",
        "THURSDAY": "週四",
        "FRIDAY": "週五",
        "SATURDAY": "週六",
        "ERROR_DAY": "系統錯誤，無法讀取日期!",
        "ODDS_SEAL": "封",
        "BUTTON_CLOSE": "關閉",
        "ATTENTION_SORRY": "抱歉!",
        "ATTENTION_SORRY_TEXT": "關注賽事不能超過{{maxAttentionMatchCount}}場!",
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

        "GOALS_HOMETEAM": "主進球",
        "GOALS_GUESTTEAM": "客進球",
        "DAY_SELECT": "日期選擇"
    }

    $translateProvider.translations('zh', translationsZH);
    $translateProvider.translations('zh-TW', translationsZH_HANS);
    $translateProvider.translations('en',translationsEN);
    $translateProvider.translations('th',translationTH);
  $translateProvider.translations('vi',translationsVI);
    $translateProvider.registerAvailableLanguageKeys(['zh', 'zh-TW','en','th','vi'], {
        'zh_CN': 'zh',
        'zh_TW': 'zh-TW',
        'zh_HK': 'zh-TW',
        'en_US' : 'en',
        'th' : 'th',
        'vi' : 'vi'
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

football.factory("ImmediateService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/matchResults.findImmediateMatchs.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);

//即时服务
football.factory("ImmediateServiceFactory", [
    "ImmediateService",
    function (ImmediateService) {
        var obj = {};
        obj.loadImmediateMatchData = function ($scope, $cookieStore, $timeout) {

          var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            ImmediateService.get({lang: $scope.getLanguage(),timeZone:timezone}, function (data) {
                $scope.immediateMatches = data.immediateMatch;//所有的即时比赛数据
                var emptyData = ($scope.immediateMatches == null || $scope.immediateMatches.length == 0);
                if($scope.tabsSwiperInited == false) {
                    if(emptyData) {
                        $scope.initSwiper(1, false);//跳转到赛果
                        return;
                    } else{
                        $scope.initSwiper(0, false);
                        $scope.handleLoadImmediateMatchData(data);
                    }
                } else {
                    if(emptyData) {
                        $scope.immediateMatches = null;
                        $scope.noInitImmediateMatches = true;
                        $scope.noImmediateMatches = false;
                        $scope.websocketInit();
                        $scope.hideLoadingImg();
                    } else {
                        $scope.handleLoadImmediateMatchData(data);
                    }
                }
            });
        };
        return obj;
    }
]);


football.factory("ResultService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/matchResults.findResultOfBallMatchs.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);

//赛果服务
football.factory("ResultServiceFactory", [
    "ResultService",
    function (ResultService) {
        var obj = {};
        //赛果日期选择
        obj.getDayWeeks = function ($scope) {
            var dayWeeks = [];
            var mydate = new Date($scope.resultToday);
            //if (mydate.getHours() < 10) {//小于10点, 往前推一天。
            //    mydate.setDate(mydate.getDate() - 1);
            //}
            mydate.setDate(mydate.getDate() + 1);
            var o = null;
            for (var i = 1; i < 8; i++) {
                mydate.setDate(mydate.getDate() - 1);
                o = {};
                o.day = mydate.Format("yyyy-MM-dd");
                o.week = $scope.getWeek(mydate);
                dayWeeks.push(o);
            }
            return dayWeeks;
        };

        //赛果数据, flag: 是否取日期，只有进入页面时才获取(即为true)，选择具体日期后不获取(即为false)
        obj.loadResultMatchData = function ($scope, $cookieStore, date, flag) {
            $scope.resultMatches = null;
            $scope.resultMatchesBak = null;
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();

          var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            ResultService.get({date: date, lang: $scope.getLanguage(),timeZone:timezone}, function (data) {
                var index = 0;
                var dayWeek = null;
                $scope.resultMatches = [];
                $scope.resultMatchesBak = [];
                $scope.gameList = data.finishFilter;
                var hasAttentionMatch = attentionThirdIdArr != null && attentionThirdIdArr.length > 0;
                var o = null;
                for (var i in data) {
                    o = {};
                    if (index >= 2) {
                        break;
                    }
                    if (i.substring(0, 2) == "20") {
                        if(data[i].length === 0) {
                            continue;
                        }
                        dayWeek = i.split(" ");
                        o.day = dayWeek[0];
                        if (index == 0) {
                            if (flag) {
                                $scope.resultToday = dayWeek[0];
                            }
                        }
                        o.week = $scope.getWeek(new Date(dayWeek[0]));
                        o.dataType = "0";
                        $scope.resultMatchesBak.push(o);
                        var resultMatch = null;
                        for (var j in data[i]) {
                            resultMatch = data[i][j];
                            $scope.handleScore(resultMatch);
                            $scope.convertState(resultMatch);
                            $scope.handleRedYellowCard(resultMatch);
                            $scope.handicapValueToMediumOdds(resultMatch);
                            $scope.handleSeal(resultMatch);
                            $scope.convertHandicapValue(resultMatch.matchOdds);
                            $scope.setFinishOddsColor(resultMatch);
                            $scope.refreshOddsStyle(resultMatch);
                            if (hasAttentionMatch) {
                                if (attentionThirdIdArr.indexOf(resultMatch.thirdId) > -1) {
                                    resultMatch.attented = true;
                                } else {
                                    resultMatch.attented = false;
                                }
                            }
                            resultMatch.dataType = "1";
                            $scope.resultMatchesBak.push(resultMatch);
                        }
                        index++;
                    }
                }
                var hasFilter = false;
                var lastFilterType = $scope.getObjectFromLocalStorage("resultLastFilterType");
                if (lastFilterType == null) {
                    lastFilterType = "matchType";
                }
                if ("stateFilter" == lastFilterType) {//状态筛选
                    var scoreFilterValue = $scope.getObjectFromLocalStorage("resultScoreFilterValue");
                    if (scoreFilterValue == null) {
                        scoreFilterValue = "-1";
                    }
                    var redCardFilterValue = $scope.getObjectFromLocalStorage("resultRedCardFilterValue");
                    if (redCardFilterValue == null) {
                        redCardFilterValue = "-1";
                    }
                    hasFilter = true;
                    $scope.resultMatches = $scope.getResultMatchesFilterByState(scoreFilterValue, redCardFilterValue);
                } else {
                    //根据赛事筛选过滤
                    var raceIdArr = $scope.getCheckedRaceIdArrFromCookie();
                    if (raceIdArr != null && raceIdArr.length > 0) {
                        var checkedThirdIdList = [];
                        var curGame = null;
                        for (var k in $scope.gameList) {
                            curGame = $scope.gameList[k];
                            if (raceIdArr.indexOf(curGame.raceId) > -1) {
                                checkedThirdIdList = checkedThirdIdList.concat(curGame.thirdId);
                            }
                        }
                        hasFilter = true;
                        $scope.resultMatches = $scope.getResultMatchesFilterByRaceId(checkedThirdIdList);
                    }
                }
                if (hasFilter) {
                    $scope.filterResultMatches = $scope.resultMatches;
                } else {
                    $scope.resultMatches = $scope.resultMatchesBak;
                }
                $scope.resultMatches = $scope.resultMatches.slice(0, pageSize);
                $scope.toggleNoResultMatches();
                $scope.hideLoadingImg();
            });
        };
        return obj;
    }
]);

football.factory("ScheduleService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/matchResults.findCeaselessMatchs.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);

football.factory("ScheduleServiceFactory", [
    "ScheduleService",
    function (ScheduleService) {
        var obj = {};
        //赛程日期选择
        obj.getDayWeeks = function ($scope) {
            var dayWeeks = [];
            var mydate = new Date($scope.scheduleToday);
            if (mydate.getHours() < 10) {//小于10点, 往前推一天。
                mydate.setDate(mydate.getDate() - 1);
            }
            var o = null;
            for (var i = 1; i < 8; i++) {
                mydate.setDate(mydate.getDate() + 1);
                o = {};
                o.day = mydate.Format("yyyy-MM-dd");
                o.week = $scope.getWeek(mydate);
                dayWeeks.push(o);
            }
            return dayWeeks;
        };

        //赛程数据
        obj.loadScheduleMatchData = function ($scope, $cookieStore, date, flag) {
            $scope.scheduleMatches = null;
            $scope.scheduleMatchesBak = null;
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();

          var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            ScheduleService.get({date: date, lang: $scope.getLanguage(),timeZone:timezone}, function (data) {
                var index = 0;
                var dayWeek = null;
                $scope.scheduleMatchesBak = [];
                $scope.scheduleMatches = [];
                var o = null;
                var hasAttentionMatch = attentionThirdIdArr != null && attentionThirdIdArr.length > 0;
                for (var i in data) {
                    if (index >= 1) {
                        break;
                    }
                    o = {};
                    if (i.substring(0, 2) == "20") {
                        if(data[i].length === 0) {
                            continue;
                        }
                        dayWeek = i.split(" ");
                        o.day = dayWeek[0];
                        if (index == 0 && flag) {
                            $scope.scheduleToday = dayWeek[0];
                        }
                        o.week = $scope.getWeek(new Date(dayWeek[0]));
                        o.dataType = "0";
                        $scope.scheduleMatchesBak.push(o);
                        var scheduleMatch = null;
                        for (var j in data[i]) {
                            scheduleMatch = data[i][j];
                            $scope.convertState(scheduleMatch);
                            $scope.handicapValueToMediumOdds(scheduleMatch);
                            $scope.convertHandicapValue(scheduleMatch.matchOdds);
                            $scope.refreshOddsStyle(scheduleMatch);
                            if (hasAttentionMatch) {
                                if (attentionThirdIdArr.indexOf(scheduleMatch.thirdId) > -1) {
                                    scheduleMatch.attented = true;
                                } else {
                                    scheduleMatch.attented = false;
                                }
                            }
                            scheduleMatch.dataType = "1";
                            $scope.scheduleMatchesBak.push(scheduleMatch);
                        }
                    }
                    index++;
                }
                $scope.gameList = data.ceaselessFilter;
                //根据赛事筛选过滤
                var raceIdArr = $scope.getCheckedRaceIdArrFromCookie();
                if (raceIdArr != null && raceIdArr.length > 0) {
                    var checkedThirdIdList = [];
                    var curGame = null;
                    for (var k in $scope.gameList) {
                        curGame = $scope.gameList[k];
                        if (raceIdArr.indexOf(curGame.raceId) > -1) {
                            checkedThirdIdList = checkedThirdIdList.concat(curGame.thirdId);
                        }
                    }
                    $scope.scheduleMatches = $scope.getScheduleMatchesFilterByRaceId(checkedThirdIdList);
                    $scope.filterScheduleMatches = $scope.scheduleMatches;
                } else {
                    $scope.scheduleMatches = $scope.scheduleMatchesBak;
                }
                $scope.scheduleMatches = $scope.scheduleMatches.slice(0, pageSize);
                $scope.toggleNoScheduleMatches();
                $scope.hideLoadingImg();
            });
        };
        return obj;
    }
]);

//websocket服务
var connection = null;
football.factory('WebSocket', function () {
    return {
        connect: function (url, $scope) {
            connection = Stomp.client(url);
            //var clientId = new String(new Date().getTime()) + Math.ceil(Math.random() * 1000);
            var headers = {
                'login': websocketLogin,
                'passcode': websocketPasscode
                //'client-id': clientId
            };
            connection.debug = function () {
                //
            };
            connection.heartbeat.outgoing = 10000;
            connection.heartbeat.incoming = 10000;
            connection.connect(headers, function (frame) {
                console.info("connected to Stomp");
                this.subscribe(websocketDestination, function (message) {
                    if (message.body) {
                        $scope.$apply(function () {
                            $scope.refreshImmediateAndAttentionData(message.body);
                        });
                    }
                });
            }, function (error) {
                console.info(error);
                console.info("Stomp error");
            });
        },
        state: function () {
            var state;
            try {
                state = connection.ws.readyState;
            } catch (e) {
                state = -1;
            }
            return state;
        },
        close: function () {
            try {
                if(connection != null){
                    connection.disconnect(function () {
                        console.info("disconnect from Stomp");
                    });
                    connection = null;
                }
            } catch (e) {
            }
        }
    }
});


football.factory("AttentionService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/matchResults.findFocusMatchs.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: false
            }
        });
    }
]);


//关注服务
football.factory("AttentionServiceFactory", [
    "AttentionService",
    function (AttentionService) {
        var obj = {};
        obj.loadAttentionMatchData = function ($scope, $cookieStore, $timeout, attentionThirdIds) {
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();

          var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            AttentionService.get({lang: $scope.getLanguage(), focusString: attentionThirdIds,timeZone:timezone}, function (data) {
                $scope.attentionEventLst = [];
                $scope.attentionMatches = data.focus;
                $scope.gameList = data.filter;
                $scope.attentionThirdIdMap = {};//关注比赛数据map, key为thirdId, value为整个比赛对象
                var attentionMatch = null;
                var tempArr = [];
                for (var i in $scope.attentionMatches) {
                    attentionMatch = $scope.attentionMatches[i];
                    attentionMatch.attented = true;
                    $scope.handleScore(attentionMatch);
                    $scope.convertState(attentionMatch);
                    $scope.handleRedYellowCard(attentionMatch);
                    $scope.turnToSealByKeepTime(attentionMatch);
                    $scope.handleKeepTime(attentionMatch);
                    $scope.handicapValueToMediumOdds(attentionMatch);
                    $scope.handleSeal(attentionMatch);
                    $scope.convertHandicapValue(attentionMatch.matchOdds);
                    $scope.setFinishOddsColor(attentionMatch);
                    $scope.refreshOddsStyle(attentionMatch);
                    $scope.attentionThirdIdMap[attentionMatch.thirdId] = attentionMatch;
                    if (attentionThirdIdArr != null && attentionThirdIdArr.length > 0) {
                        if (attentionThirdIdArr.indexOf(attentionMatch.thirdId) != -1) {
                            tempArr.push(attentionMatch.thirdId);
                        }
                    }
                }
                $scope.putObjectToLocalStorage("attentionThirdIds", tempArr.join(",") + ",");
                $scope.putObjectToLocalStorage("attentionMatchCount", tempArr.length);
                $scope.attentionMatchCount = tempArr.length;
                $scope.hideLoadingImg();
                if ($scope.attentionMatches == null || $scope.attentionMatches.length == 0) {
                    $scope.noAttentionMatches = true;
                } else {
                    $scope.noAttentionMatches = false;
                }
                $scope.websocketInit();
            });
        };
        return obj;
    }
]);

//比赛增量数据轮询服务
football.factory("IncrementService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/matchResults.findIncrementMatch.do", {}, {
            query: {
                method: "get",
                params: {},
                isArray: true
            }
        });
    }
]);

football.factory("IncrementServiceFactory", [
    "IncrementService",
    function (IncrementService) {
        var obj = {};
        obj.processIncrementMatchData = function ($scope) {

          var timezone = window.localStorage.getItem("timezone") || $scope.timezone;
            IncrementService.query({"refreshId": $scope.refreshId,"timeZone":timezone}, function (data) {
                if (data != null && data.length > 0) {
                    var last = data[data.length - 1];
                    $scope.refreshId = last.refreshId;
                }
                while(data != null && data.length > 0) {
                    var refreshData = data.pop();
                    $scope.refreshImmediateAndAttentionData(refreshData);
                }
            }, function (data) {

            });
        };
        return obj;
    }
]);

/**
 * Created by lenovoa on 2015/9/7.
 */

var homeTeamGoalSoundChange = null;
var guestTeamGoalSoundChange = null;

football.controller("FootballController", [
    "$http",
    "$scope",
    "$document",
    '$window',
    '$timeout',
    '$interval',
    '$cookieStore',
    '$translate',
    'ImmediateServiceFactory',
    'ResultServiceFactory',
    'ScheduleServiceFactory',
    'AttentionServiceFactory',
    'IncrementServiceFactory',
    'WebSocket',
    function ($http, $scope, $document, $window, $timeout, $interval, $cookieStore, $translate, ImmediateServiceFactory,
              ResultServiceFactory, ScheduleServiceFactory, AttentionServiceFactory, IncrementServiceFactory, WebSocket) {
        var goalSoundCookieId = "goalSound";
        var redCardSoundCookieId = "redCardSound";
        var tabsSwiper = null;
        var websocketAttemptCountCookieId = "websocketAttemptCount";
        $scope.tabsSwiperInited = false;
        $scope.$on("$viewContentLoaded", function ($window) {
            $scope.maxAttentionMatchCount = maxAttentionMatchCount;
            $scope.eventLst = {};
            $scope.tabActiveIndex = $scope.getClickedTabsSwiper();
            $scope.showFilterIcon = true;
            var callbacks_list = $('.demo-callbacks ul');
            $('.set_list input').on('ifCreated ifClicked  ', function (event) {
                callbacks_list.prepend('<li><span>#' + this.id + '</span> is ' + event.type.replace('if', '').toLowerCase() + '</li>');
                if (event.type == "ifCreated") {
                    //进球提示--声音
                    var goalSound = $scope.getObjectFromLocalStorage(goalSoundCookieId);
                    if (goalSound == null || goalSound == 'true') {
                        goalSound = true;
                    } else if (goalSound == 'false') {
                        goalSound = false;
                    }
                    $("#goalSound").attr("checked", goalSound);

                    //进球提示--弹窗

                    //红牌提示--声音
                    var redCardSound = $scope.getObjectFromLocalStorage(redCardSoundCookieId);
                    if (redCardSound == null || redCardSound == 'true') {
                        redCardSound = true;
                    } else if (redCardSound == 'false') {
                        redCardSound = false;
                    }
                    $("#redCardSound").attr("checked", redCardSound);

                    //红牌提示--弹窗

                } else if (event.type == "ifClicked") {
                    $scope.$apply(function () {
                        var objId = event.target.id;
                        if (objId == "goalSound") {
                            $scope.goalSound = !event.target.checked;
                        } else if (objId == "goalWindow") {
                            $scope.goalWindow = !event.target.checked;
                        } else if(objId == "redCardSound") {
                            $scope.redCardSound = !event.target.checked;
                        }
                    });
                }
            }).iCheck({
                checkboxClass: 'check_icon',
                radioClass: 'check_icon',
            });

            $(".css_select").selectCss();

            if (!window.WebSocket) {//不支持websocket
                $scope.intervalId = $scope.incrementMatchDataPollingIntervalTask();
            } else {
                $scope.websocketIntervalTask();
            }

            var initialSlide = $scope.getClickedTabsSwiper();
            if(initialSlide == 0) {
                $scope.initMatchData(initialSlide);
            } else{
                $scope.initSwiper(initialSlide, false);
            }
        });

        $scope.initSwiper = function(initialSlide, loadImmediate) {
            $scope.manualSwitch = false;
            tabsSwiper = new Swiper('#tabs-container', {
                speed: 300,
                resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
                //shortSwipes: false,//进行快速短距离的拖动无法触发Swiper
                threshold: 50,//拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动
                initialSlide : initialSlide,
                onInit: function(tabsSwiper) {
                    $scope.tabsSwiperInited = true;
                    $scope.initTabsSwiper(tabsSwiper.activeIndex, loadImmediate);
                },
                onSlideChangeStart: function () {
                    if(tabsSwiper != null) {
                        $scope.initTabsSwiper(tabsSwiper.activeIndex, true);
                    }
                },
                onSlideChangeEnd: function () {
                    //$scope.initMatchData(tabsSwiper.activeIndex);
                    //$scope.clearMatchData();
                }
            })
            $(".tabs a").on('touchstart mousedown', function (e) {
                e.preventDefault()
                $(".tabs .active").removeClass('active')
                $(this).addClass('active')
                tabsSwiper.slideTo($(this).index())
            })
            $(".tabs a").click(function (e) {
                e.preventDefault()
            });
        }

        $scope.getClickedTabsSwiper = function() {
            var swiperActiveIndex = 0;
            var swiperActiveIndexStr = $scope.getObjectFromSessionStorage("swiperActiveIndex");
            if(swiperActiveIndexStr != null) {
                swiperActiveIndex = parseInt(swiperActiveIndexStr, 10);
            }
            return swiperActiveIndex;
        }

        $scope.initTabsSwiper = function(activeIndex, loadImmediate) {
            $(".tabs .active").removeClass('active');
            $(".tabs a").eq(activeIndex).addClass('active');

            $scope.tabActiveIndex = activeIndex;
            $scope.clearMatchData();
            $scope.maxAttentionMatchesCountWarn = false;
            $scope.showLoadingImg();
            if(activeIndex != 0 || loadImmediate == true) {
                $scope.initMatchData(activeIndex);
            }
            if (!window.WebSocket) {
                if ($scope.tabActiveIndex == 1 || $scope.tabActiveIndex == 2) {
                    if ($scope.intervalId != null) {
                        $interval.cancel($scope.intervalId);
                    }
                } else {
                    $scope.intervalId = $scope.incrementMatchDataPollingIntervalTask();
                }
            }else {
                if ($scope.tabActiveIndex == 1 || $scope.tabActiveIndex == 2) {
                    if ($scope.websocketIntervalId != null) {
                        $interval.cancel($scope.websocketIntervalId);
                    }
                } else {
                    if($scope.websocketIntervalId == null) {
                        $scope.websocketIntervalTask();
                    }
                }
            }
            $scope.putObjectToSessionStorage("swiperActiveIndex", activeIndex);
        }

        //websocket定时任务，每3s运行一次，用于检测websocket状态
        $scope.websocketIntervalTask = function () {
            $scope.websocketIntervalId = $interval(function () {
                if($scope.tabActiveIndex == 0 || $scope.tabActiveIndex == 3) {
                    var websocketState = WebSocket.state();
                    var count = $scope.getWebsocketAttemptCount();
                    if (websocketState != 1) {
                        if(count >= websocketAttemptMaxCount) {
                            $interval.cancel($scope.websocketIntervalId);
                            $scope.intervalId = $scope.incrementMatchDataPollingIntervalTask();
                        } else {
                            $scope.putObjectToLocalStorage(websocketAttemptCountCookieId, ++count);
                            $scope.websocketClose();
                            $window.location.reload();
                        }
                    } else {
                        if(count != 0) {
                            $scope.putObjectToLocalStorage(websocketAttemptCountCookieId, 0);
                        }
                        if ($scope.intervalId != null) {
                            $interval.cancel($scope.intervalId);
                        }
                    }
                }
            }, websocketReconnectPeriod);
        }

        $scope.getWebsocketAttemptCount = function() {
            var attemptCount = 0;
            var attemptCountStr = $scope.getObjectFromLocalStorage(websocketAttemptCountCookieId);
            if(attemptCountStr != null) {
                attemptCount = parseInt(attemptCountStr, 10);
            }
            return attemptCount;
        }

        $scope.incrementMatchDataPollingIntervalTask = function () {
            return $interval(function () {
                var now = new Date().getTime();
                if ($scope.incrmentTaskStartTime != null && now - $scope.incrmentTaskStartTime >= incrementPollingPeriodDifference) {
                    $window.location.reload();
                } else {
                    $scope.incrmentTaskStartTime = now;
                    IncrementServiceFactory.processIncrementMatchData($scope);
                }
            }, incrementPollingPeriod);
        };

        $scope.initScroll = function () {
            scrollCount = 0;
            isScrolling = false;
            isResultScrolling = false;
            isScheduleScrolling = false;
        };

        $scope.reloadImmediateMatchData = function () {
            $scope.websocketClose();
            $scope.initScroll();
            $scope.loadImmediateMatchData();
        };

        $scope.showLoadingImg = function () {
            $scope.loadingImg = true;
        };

        $scope.hideLoadingImg = function () {
            $scope.loadingImg = false;
        };

        var isScrolling = false;
        var scrollCount = 0;
        $scope.loadMoreImmediateMatches = function () {
            if ($scope.tabActiveIndex != 0 || $scope.loadingImg || isScrolling) {
                return;
            }
            isScrolling = true;
            var matches = $scope.filterImmediateMatches;
            if (matches != null && matches.length > (scrollCount + 1) * pageSize) {
                $scope.loadingImg = true;
            } else {
                isScrolling = false;
                $scope.loadingImg = false;
                return;
            }
            $timeout(function () {
                if (matches && matches.length > (scrollCount + 1) * pageSize) {
                    scrollCount++;
                    var arr = matches.slice(scrollCount * pageSize, (scrollCount + 1) * pageSize);
                    if (arr.length > 0) {
                        for (var i in arr) {
                            $scope.immediateMatches.push(arr[i]);
                            $scope.fullThirdIdMap[arr[i].thirdId] = arr[i];
                            $scope.refreshOddsStyle(arr[i]);
                        }
                    }
                }
                isScrolling = false;
                $scope.loadingImg = false;
            }, 100);
        };

        var isResultScrolling = false;
        //加载下页赛果数据
        $scope.loadMoreResultMatches = function () {
            if ($scope.tabActiveIndex != 1 || $scope.loadingImg || isResultScrolling) {
                return;
            }
            isResultScrolling = true;
            var matches = null;
            var lastFilterType = $scope.getObjectFromLocalStorage("resultLastFilterType");
            if (lastFilterType != null) {
                matches = $scope.filterResultMatches;
            } else {
                matches = $scope.resultMatchesBak;
            }
            if (matches != null && matches.length > (scrollCount + 1) * pageSize) {
                $scope.loadingImg = true;
            } else {
                isResultScrolling = false;
                $scope.loadingImg = false;
                return;
            }
            $timeout(function () {
                if (matches && matches.length > (scrollCount + 1) * pageSize) {
                    scrollCount++;
                    var arr = matches.slice(scrollCount * pageSize, (scrollCount + 1) * pageSize);
                    if (arr.length > 0) {
                        for (var i in arr) {
                            $scope.resultMatches.push(arr[i]);
                        }
                    }
                }
                isResultScrolling = false;
                $scope.loadingImg = false;
            }, 100);
        };

        var isScheduleScrolling = false;
        //加载下页赛程数据
        $scope.loadMoreScheduleMatches = function () {
            if ($scope.tabActiveIndex != 2 || $scope.loadingImg || isScheduleScrolling) {
                return;
            }
            isScheduleScrolling = true;
            var matches = null;
            var raceIdArr = $scope.getCheckedRaceIdArrFromCookie();
            if (raceIdArr != null && raceIdArr.length > 0) {
                matches = $scope.filterScheduleMatches;
            } else {
                matches = $scope.scheduleMatchesBak;
            }
            if (matches != null && matches.length > (scrollCount + 1) * pageSize) {
                $scope.loadingImg = true;
            } else {
                isScheduleScrolling = false;
                $scope.loadingImg = false;
                return;
            }
            $timeout(function () {
                if (matches && matches.length > (scrollCount + 1) * pageSize) {
                    scrollCount++;
                    var arr = matches.slice(scrollCount * pageSize, (scrollCount + 1) * pageSize);
                    if (arr.length > 0) {
                        for (var i in arr) {
                            $scope.scheduleMatches.push(arr[i]);
                        }
                    }
                }
                isScheduleScrolling = false;
                $scope.loadingImg = false;
            }, 100);

        };

        $scope.getLanguage = function () {
            var language = $scope.getObjectFromLocalStorage("language");
            if (language == null) {
                language = defaultLanguageKey;
            }
            return language;
        };

        $scope.websocketInit = function () {
            if (window.WebSocket) {
                WebSocket.close();
                WebSocket.connect(websocketUrl, $scope);
            }
        };

        $scope.websocketClose = function () {
            if (window.WebSocket) {
                WebSocket.close();
            }
        };

        $scope.refreshEventTimeOut = function (thirdId, eventType, eventId) {
            var timeoutId = $scope.goalEventTimeOutList[eventId];
            if (timeoutId != null) {
                $timeout.cancel(timeoutId);
            }
            $scope.goalEventTimeOutList[eventId] = $timeout(function () {
                $scope.eventDomChange(thirdId, eventType);
            }, 10000);
        };

        //加载即时、赛果、赛程、关注初始数据
        $scope.initMatchData = function (index) {
            $scope.initScroll();
            $scope.noAttentionMatches = false;
            $scope.noImmediateMatches = false;
            $scope.noInitImmediateMatches = false;
            $scope.maxAttentionMatchesCountWarn = false;
            $scope.loadAttentionMatchCountFromCookie();
            //加载赔率显示设置信息
            var oddsFilterCookieValue = $scope.getOddsFilterCookieValue();
            if (oddsFilterCookieValue == null) {
                $scope.oddsFilterCookieValue = asiaLetOdds;//默认亚盘
            } else {
                $scope.oddsFilterCookieValue = oddsFilterCookieValue;
            }
            $scope.gameList = null;
            $scope.timeFilterValue = null;
            $scope.scoreFilterValue = null;
            $scope.redCardFilterValue = null;
            $scope.oddsFilterValue = null;
            $scope.initHandicapValueMap();
            $scope.initFilterSetValuesI18n();
            $scope.initFootballStateI18n();
            $scope.initWeekI18n();
            if (index == 0) {//即时比赛数据
                $scope.websocketClose();
                $scope.loadImmediateMatchData();
            } else if (index == 1) {//赛果比赛数据
                $scope.loadResultMatchData();
                $scope.websocketClose();
            }
            else if (index == 2) {//赛程
                $scope.loadScheduleMatchData();
                $scope.websocketClose();
            }
            else if (index == 3) {//关注
                $scope.websocketClose();
                $scope.loadAttentionMatchData();

            }
            $window.document.body.scrollTop = 0;
        }

        //刷新即时和关注数据
        $scope.refreshImmediateAndAttentionData = function (data) {
            var refreshData = angular.fromJson(data);
            var tempMatch = null;
            if (refreshData.type == 1) {//刷新状态、时间
                if ($scope.tabActiveIndex == 0) {//刷新即时
                    try {
                        tempMatch = $scope.fullThirdIdMap[refreshData.thirdId];
                    } catch (e) {

                    }
                    if (refreshData.data.statusOrigin == "-1" || refreshData.data.statusOrigin == "-10"
                        || refreshData.data.statusOrigin == "-12" || refreshData.data.statusOrigin == "-14") {
                        var resultThirdId = $scope.resultThirdIdMap[refreshData.thirdId];
                        if (resultThirdId == null) {
                            $scope.resultThirdIdMap[refreshData.thirdId] = refreshData.thirdId;
                            $scope.removeResultMatch(refreshData.thirdId);
                        }
                    }
                } else if ($scope.tabActiveIndex == 3) {//刷新关注
                    tempMatch = $scope.attentionThirdIdMap[refreshData.thirdId];
                }
                if (tempMatch != null) {
                    $scope.refreshStateAndTimeData(refreshData.data, tempMatch);
                    $scope.handleScore(tempMatch);
                    $scope.convertState(tempMatch);
                    $scope.turnToSealByKeepTime(tempMatch);
                    $scope.handleKeepTime(tempMatch);
                    $scope.handleRedYellowCard(tempMatch);
                    $scope.setFinishOddsColor(tempMatch);
                    var immediateLastFilterType = $scope.getObjectFromLocalStorage("immediateLastFilterType");
                    if (immediateLastFilterType != null && immediateLastFilterType == "stateFilter") {
                        $scope.handleImmediateMatchByStateFilter(tempMatch);
                    }
                }
            } else if (refreshData.type == 2) {//刷新赔率
                if ($scope.tabActiveIndex == 0) {
                    try {
                        tempMatch = $scope.fullThirdIdMap[refreshData.thirdId];
                    } catch (e) {

                    }
                } else if ($scope.tabActiveIndex == 3) {
                    try {
                        tempMatch = $scope.attentionThirdIdMap[refreshData.thirdId];
                    } catch (e) {

                    }

                }
                if (tempMatch != null) {
                    $scope.handleOddsState(tempMatch, refreshData.data);
                    $scope.refreshOddsStyle(tempMatch, refreshData.data);
                }
            } else if (refreshData.type == 3) {//刷新事件

                //2.检查缓存中是否有此事件ID
                var eventId = refreshData.thirdId + refreshData.data.eventId;//thirdId + eventId

                if ($scope.tabActiveIndex == 0) {
                    try {
                        tempMatch = $scope.fullThirdIdMap[refreshData.thirdId];
                    } catch (e) {

                    }
                    var haveEvent = $scope.eventLst[eventId] != null;

                    // 3. 如果有，则continue，处理其余的事件
                    if (haveEvent)  return;

                    //6.将事件ID写入缓存
                    $scope.eventLst[eventId] = eventId;
                } else if ($scope.tabActiveIndex == 3) {
                    try {
                        tempMatch = $scope.attentionThirdIdMap[refreshData.thirdId];
                    } catch (e) {

                    }

                    var haveEvent = $scope.attentionEventLst[eventId] != null;

                    // 3. 如果有，则continue，处理其余的事件
                    if (haveEvent)  return;

                    //6.将事件ID写入缓存
                    $scope.attentionEventLst[eventId] = eventId;
                }

                if (tempMatch != null) {
                    $scope.refreshEventData(refreshData, tempMatch);
                    var immediateLastFilterType = $scope.getObjectFromLocalStorage("immediateLastFilterType");
                    if (immediateLastFilterType != null && immediateLastFilterType == "stateFilter") {
                        $scope.handleImmediateMatchByStateFilter(tempMatch);
                    }
                }
            } else if (refreshData.type == 4) {
                //主动刷新即时数据
                if ($scope.tabActiveIndex == 0) {
                    $timeout(function () {
                        //$scope.removeObjectFromSessionStorage("immediateTodayHasCheckRaceId");
                        //$scope.removeObjectFromSessionStorage("checkedImmediateRaceIdList");
                        $scope.reloadImmediateMatchData();
                    }, fullMatchesRefreshDelay);
                }
            } else if (refreshData.type == 5) {

                if(refreshData.data.region != $scope.getLanguage()) {
                    return;
                }

                //场次名称变动
                if ($scope.tabActiveIndex == 0) {//刷新即时
                    try {
                        tempMatch = $scope.fullThirdIdMap[refreshData.thirdId];
                    } catch (e) {
                    }
                } else if ($scope.tabActiveIndex == 3) {//刷新关注
                    try {
                        tempMatch = $scope.attentionThirdIdMap[refreshData.thirdId];
                    } catch (e) {
                    }
                }
                var data = refreshData.data;
                if (tempMatch != null && data != null) {
                    tempMatch.guestteam = data.guestteam;
                    tempMatch.hometeam = data.hometeam;
                    tempMatch.raceId = data.raceId;
                    tempMatch.racename = data.racename;
                    for(var i in $scope.gameList) {
                        if(data.raceId == $scope.gameList[i].raceId) {
                            $scope.gameList[i].racename = data.racename;
                            break;
                        }
                    }
                }
            }
        }

        //清空原比赛数据
        $scope.clearMatchData = function () {
            switch ($scope.tabActiveIndex) {
                case 0:
                    $scope.clearResultMatchData();
                    $scope.clearScheduleMatchData();
                    $scope.clearAttentionMatchData();
                    break;
                case 1:
                    $scope.clearImmediateMatchData();
                    $scope.clearScheduleMatchData();
                    $scope.clearAttentionMatchData();
                    break;
                case 2:
                    $scope.clearImmediateMatchData();
                    $scope.clearResultMatchData();
                    $scope.clearAttentionMatchData();
                    break;
                case 3:
                    $scope.clearImmediateMatchData();
                    $scope.clearResultMatchData();
                    $scope.clearScheduleMatchData();
                    break;
            }
        }

        //清空即时比赛数据
        $scope.clearImmediateMatchData = function () {
            $scope.immediateMatches = null;
            $scope.immediateMatchesBak = null;
            $scope.fullThirdIdMap = null;
            $scope.resultThirdIdMap = null;
        }

        //清空赛果比赛数据
        $scope.clearResultMatchData = function () {
            $scope.resultMatches = null;
            $scope.resultMatchesBak = null;
            $scope.filterResMatches = null;
        }

        //清空赛程比赛数据
        $scope.clearScheduleMatchData = function () {
            $scope.scheduleMatches = null;
            $scope.scheduleMatchesBak = null;
            $scope.filterScheduleMatches = null;
        }

        //清空关注比赛数据
        $scope.clearAttentionMatchData = function () {
            $scope.attentionMatches = null;
        }

        //加载即时比赛数据
        $scope.loadImmediateMatchData = function () {
            $scope.eventLst = {};
            $scope.goalEventTimeOutList = {};
            $scope.fullThirdIdMap = null;
            $scope.showFilterIcon = true;
            $scope.immediateMatchesBak = null;
            ImmediateServiceFactory.loadImmediateMatchData($scope, $cookieStore, $timeout);
        }

        //处理及时比赛数据，只能在loadImmediateMatchData里面使用。
        $scope.handleLoadImmediateMatchData = function (data) {
            $scope.fullThirdIdMap = {};//所有即时比赛数据map
            $scope.gameList = data.all;//所有即时的赛事筛选数据
            $scope.immediateMatchesBak = $scope.immediateMatches;//备份数据
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();
            var hasAttentionMatch = attentionThirdIdArr != null && attentionThirdIdArr.length > 0;
            var immediateMatch = null;
            for (var j in $scope.immediateMatchesBak) {
                immediateMatch = $scope.immediateMatchesBak[j];
                $scope.handleScore(immediateMatch);
                $scope.convertState(immediateMatch);
                $scope.turnToSealByKeepTime(immediateMatch);
                $scope.handleKeepTime(immediateMatch);
                $scope.handleRedYellowCard(immediateMatch);
                $scope.handicapValueToMediumOdds(immediateMatch);
                $scope.handleSeal(immediateMatch);
                $scope.convertHandicapValue(immediateMatch.matchOdds);
                $scope.refreshOddsStyle(immediateMatch);
                if (hasAttentionMatch) {
                    if (attentionThirdIdArr.indexOf(immediateMatch.thirdId) > -1) {
                        immediateMatch.attented = true;
                    } else {
                        immediateMatch.attented = false;
                    }
                }
                $scope.fullThirdIdMap[immediateMatch.thirdId] = immediateMatch;
            }
            $scope.resultThirdIdMap = {};
            var lastFilterType = $scope.getObjectFromLocalStorage("immediateLastFilterType");
            if (lastFilterType == null) {
                //$scope.immediateMatches = $scope.immediateMatchesBak;
                //根据热门赛事筛选
                $scope.loadImmediateHotMatchData();
            } else if ("stateFilter" == lastFilterType) {//状态筛选
                var timeFilterValue = $scope.getObjectFromLocalStorage("immediateTimeFilterValue");
                if (timeFilterValue == null) {
                    timeFilterValue = "-1";
                }
                var scoreFilterValue = $scope.getObjectFromLocalStorage("immediateScoreFilterValue");
                if (scoreFilterValue == null) {
                    scoreFilterValue = "-1";
                }
                var redCardFilterValue = $scope.getObjectFromLocalStorage("immediateRedCardFilterValue");
                if (redCardFilterValue == null) {
                    redCardFilterValue = "-1";
                }
                $scope.immediateMatches = $scope.getImmediateMatchesFilterByState(timeFilterValue,
                    scoreFilterValue, redCardFilterValue);
            } else if ("matchFilter" == lastFilterType) {
                var checkedThirdIdList = [];
                var todayHasCheckRaceId = $scope.getObjectFromSessionStorage("immediateTodayHasCheckRaceId");
                if (todayHasCheckRaceId != null && todayHasCheckRaceId == "true") {
                    //根据所选赛事筛选过滤
                    var raceIdArr = $scope.getCheckedRaceIdArrFromCookie();
                    if (raceIdArr != null && raceIdArr.length > 0) {
                        var curGame = null;
                        for (var i in $scope.gameList) {
                            curGame = $scope.gameList[i];
                            if (raceIdArr.indexOf(curGame.raceId) > -1) {
                                checkedThirdIdList = checkedThirdIdList.concat(curGame.thirdId);
                            }
                        }
                    }
                    $scope.immediateMatches = $scope.getImmediateMatchesFilterByRaceId(checkedThirdIdList);
                } else {
                    $scope.loadImmediateHotMatchData();
                }

            }
            $scope.hotImmediateMatchThirdArr = $scope.getHotThirdIdArr();
            $scope.toggleNoImmediateMatches();
            $scope.filterImmediateMatches = $scope.immediateMatches;
            if ($scope.immediateMatches != null && $scope.immediateMatches.length > 0) {
                $scope.immediateMatches = $scope.immediateMatches.slice(0, pageSize);
                for (var i = 0; i < $scope.immediateMatches.length; i++) {
                    $scope.refreshOddsStyle($scope.immediateMatches[i]);
                }
            }
            $scope.websocketInit();
            $scope.hideLoadingImg();
            $scope.noInitImmediateMatches=false;
        }

        //加载即时热门比赛数据，如果热门比赛为空，则加载全部场次的比赛
        $scope.loadImmediateHotMatchData = function () {
            var checkedThirdIdList = $scope.getHotThirdIdArr();
            if (checkedThirdIdList != null && checkedThirdIdList.length > 0) {
                $scope.immediateMatches = $scope.getImmediateMatchesFilterByRaceId(checkedThirdIdList);
            } else {
                $scope.immediateMatches = $scope.immediateMatchesBak;
            }
        }

        //加载赛果热门比赛数据，如果热门比赛为空，则加载全部场次的比赛
        $scope.loadResultHotMatchData = function () {
            var checkedThirdIdList = $scope.getHotThirdIdArr();
            if (checkedThirdIdList != null && checkedThirdIdList.length > 0) {
                $scope.resultMatches = $scope.getResultMatchesFilterByRaceId(checkedThirdIdList);
            } else {
                $scope.resultMatches = $scope.resultMatchesBak;
            }
        }

        $scope.loadScheduleHotMatchData = function () {
            var checkedThirdIdList = $scope.getHotThirdIdArr();
            if (checkedThirdIdList != null && checkedThirdIdList.length > 0) {
                $scope.scheduleMatches = $scope.getScheduleMatchesFilterByRaceId(checkedThirdIdList);
            } else {
                $scope.scheduleMatches = $scope.scheduleMatchesBak;
            }
        }

        /**
         * 移除即时标签中的完场赛事
         * @param thirdId   赛事id
         */
        $scope.removeResultMatch = function (thirdId) {
            $timeout(function () {
                if ($scope.immediateMatches != null && $scope.immediateMatches.length > 0) {
                    var index = $scope.getImmediateMatchIndex(thirdId, $scope.immediateMatches);
                    if (index > -1) {
                        $scope.immediateMatches.splice(index, 1);
                        $scope.fullThirdIdMap[thirdId] == undefined;
                    }
                    index = $scope.getImmediateMatchIndex(thirdId, $scope.immediateMatchesBak);
                    if (index > -1) {
                        $scope.immediateMatchesBak.splice(index, 1);
                    }
                    index = $scope.getIndexFromHotImmediateThirdArr(thirdId);
                    if(index > -1) {
                        $scope.hotImmediateMatchThirdArr.splice(index, 1);
                    }
                    $scope.toggleNoImmediateMatchesFlag();
                }
            }, 60000);
        }

        $scope.toggleNoImmediateMatchesFlag = function() {
            var raceIdArr = $scope.getCheckedRaceIdArrFromCookie();
            if(raceIdArr == null ||  raceIdArr.length == 0) {//如果没有选择筛选条件
                //如果还有热门赛事
                var hotThirdIdArr = $scope.hotImmediateMatchThirdArr;
                if(hotThirdIdArr != null && hotThirdIdArr.length > 0) {
                    $scope.noImmediateMatches = false;
                    $scope.noInitImmediateMatches = false;
                } else {
                    if($scope.immediateMatchesBak == null || $scope.immediateMatchesBak.length == 0) {
                        $scope.noImmediateMatches = false;
                        $scope.noInitImmediateMatches = true;
                    } else {
                        $scope.toggleNoImmediateMatches();
                        $scope.noInitImmediateMatches = false;
                    }
                }
            } else { //有筛选条件
                $scope.toggleNoImmediateMatches();
                $scope.noInitImmediateMatches = false;
            }
        }

        $scope.getImmediateMatchIndex = function (thirdId, immediateMatches) {
            for (var i in immediateMatches) {
                if (thirdId == immediateMatches[i].thirdId) {
                    return i;
                }
            }
            return -1;
        }

        //加载赛果比赛数据
        $scope.loadResultMatchData = function () {
            $scope.showFilterIcon = true;
            $scope.resultMatchsBak = null;
            ResultServiceFactory.loadResultMatchData($scope, $cookieStore, null, true);
        };

        //加载赛程比赛数据
        $scope.loadScheduleMatchData = function () {
            $scope.showFilterIcon = true;
            $scope.scheduleMatchsBak = null;
            ScheduleServiceFactory.loadScheduleMatchData($scope, $cookieStore, null, true);
        };

        //加载关注比赛数据
        $scope.loadAttentionMatchData = function () {
            $scope.goalEventTimeOutList = {};
            $scope.showFilterIcon = false;
            var attentionThirdIds = $scope.getObjectFromLocalStorage("attentionThirdIds");
            AttentionServiceFactory.loadAttentionMatchData($scope, $cookieStore, $timeout, attentionThirdIds);
            //})
        };


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

        //处理比赛数据
        $scope.handleMatchData = function (match) {
            ////1、处理半场比分、全程比分
            //$scope.handleScore(match);
            ////2、处理keepTime
            //$scope.handleKeepTime(match);
            ////3、处理红黄牌
            //$scope.handleRedYellowCard(match);
            ////4、转换比赛状态
            //$scope.convertState(match);
            ////6、设置完场赔率颜色
            //$scope.setFinishOddsColor(match);
        };

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
        };

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
        };

        //处理比赛的半场比分和完场比分
        $scope.handleScore = function (match) {
            $scope.handleHalfScore(match);
            $scope.handleFullScore(match);
        };

        //处理半场比分
        $scope.handleHalfScore = function (match) {
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
        };

        //处理全场比分
        $scope.handleFullScore = function (match) {
            if (match == null) {
                return;
            }
            var homeScore = match.homeScore;
            var guestScore = match.guestScore;
            if (homeScore != null && guestScore != null) {
                match.fullScore = homeScore + "-" + guestScore;
            } else {
                match.fullScore = null;
            }
        };

        //处理红黄牌
        $scope.handleRedYellowCard = function (match) {
            if (match == null) {
                return;
            }
            match.home_rc = match.home_rc == '0' ? '' : match.home_rc;
            match.home_yc = match.home_yc == '0' ? '' : match.home_yc;
            match.guest_rc = match.guest_rc == '0' ? '' : match.guest_rc;
            match.guest_yc = match.guest_yc == '0' ? '' : match.guest_yc;
        };

        //状态转换
        $scope.convertState = function (match) {
            if (match == null) {
                return;
            }
            //if(!match.statusOrigin  || match.statusOrigin == null || match.statusOrigin == "")) {
            //    return;
            //}
            if (match.statusOrigin) {
                if (match.statusOrigin == "0" || match.statusOrigin == "1" || match.statusOrigin == "3") {
                    match.status = null;
                } else {
                    match.status = $scope.footballStateMap[match.statusOrigin];
                }
            }
        };

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
        };

        $scope.setColorFlag = function (scoreDiff, odds) {
            if (scoreDiff == null) {
                return;
            }
            if (scoreDiff > 0) {
                odds.resultLeftOddsState = "3";
            } else if (scoreDiff == 0 && odds.handicap == euroOdds) { //// 欧赔需要标出平赔
                odds.resultMediumValueState = "3";
            } else if (scoreDiff < 0) {
                odds.resultRightOddsState = "3";
            }
            return odds;
        };

        //添加到关注
        $scope.addToAttention = function ($event) {
            $scope.addShoping($event, $scope, $cookieStore);
        };

        //筛选、设置弹窗
        $scope.filterSetWindowClick = function ($event) {
          angular.element($(".nav-menus")).addClass("nav_hidden");
            angular.element($("html")).addClass("body_h");
            angular.element($("body")).addClass("body_h");
            angular.element($("#sort_content")).addClass("show");
            var index = $($event.target).parent().index();
            if (index == 0) {
                angular.element($(".asort")).eq(0).addClass('show');
                angular.element($(".asort")).eq(1).removeClass('show');
            } else {
                angular.element($(".asort")).eq(1).addClass('show');
                angular.element($(".asort")).eq(0).removeClass('show');
            }
            //赛事筛选初始化
            $scope.initGameFilter();
            //状态筛选初始化
            $scope.initStateFilter();
            //设置窗口参数初始化
            $scope.initSetParams();
            if ($scope.tabActiveIndex == 0) {//即时
                $scope.initFilterPanel("immediateLastFilterType");
                $scope.showTimeFilter = true;
                $scope.showStateFilter = true;
            } else if ($scope.tabActiveIndex == 1) {//赛果
                $scope.initFilterPanel("resultLastFilterType");
                $scope.showTimeFilter = false;
                $scope.showStateFilter = true;
            } else if ($scope.tabActiveIndex == 2) {//赛程
                $scope.matchFilterLiClicked = true;
                $scope.stateFilterLiClicked = false;
                $scope.showMatchFilterDiv = true;
                $scope.showStateFilterDiv = false;
                $scope.showStateFilter = false;
            } else if ($scope.tabActiveIndex == 3) {//关注
                //$scope.showTimeFilter = true;
                //$scope.showStateFilter = true;
            }
        };

        $scope.initFilterSetValuesI18n = function () {
            $scope.initTimeFilterValues();
            $scope.initScoreFilterValues();
            $scope.initRedCardFilterValues();
            $scope.initOddsFilterValues();
        };

        $scope.initFilterPanel = function (lastFilterTypeCookieId) {
            var lastFilterType = $scope.getObjectFromLocalStorage(lastFilterTypeCookieId);
            if (lastFilterType == null) {
                lastFilterType = "matchFilter";
            }
            if ("matchFilter" == lastFilterType) {//赛事筛选
                $scope.matchFilterLiClicked = true;
                $scope.showMatchFilterDiv = true;
                $scope.stateFilterLiClicked = false;
                $scope.showStateFilterDiv = false;
            } else if ("stateFilter" == lastFilterType) {//状态筛选
                $scope.matchFilterLiClicked = false;
                $scope.showMatchFilterDiv = false;
                $scope.stateFilterLiClicked = true;
                $scope.showStateFilterDiv = true;
            }
        }

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


        $scope.initTimeFilterValues = function () {
            //时间筛选选项
            $translate(['TIME_80_MINUTES_LATER', 'TIME_SECOND_HALF', 'TIME_BEGAIN', 'ALL_MATCHES']).then(
                function (translations) {
                    $scope.sampleTimeFilterValues = [
                        {"name": translations.TIME_80_MINUTES_LATER, "value": '80', "checked": false},
                        {"name": translations.TIME_SECOND_HALF, "value": '45', "checked": false},
                        {"name": translations.TIME_BEGAIN, "value": '0', "checked": false},
                        {"name": translations.ALL_MATCHES, "value": '-1', "checked": false}
                    ];
                }
            );
        }

        $scope.initScoreFilterValues = function () {
            //比分筛选选项
            $translate(['SCORE_2_GOALS_ABOVE', 'SCORE_1_GOAL', 'SCORE_DRAW', 'ALL_MATCHES']).then(
                function (translations) {
                    $scope.sampleScoreFilterValues = [
                        {"name": translations.SCORE_2_GOALS_ABOVE, "value": '2', "checked": false},
                        {"name": translations.SCORE_1_GOAL, "value": '1', "checked": false},
                        {"name": translations.SCORE_DRAW, "value": '0', "checked": false},
                        {"name": translations.ALL_MATCHES, "value": '-1', "checked": false}
                    ];
                }
            );
        }

        $scope.initRedCardFilterValues = function () {
            //红牌筛选选项
            $translate(['REDCARD_EXISTS', 'REDCARD_NO', 'ALL_MATCHES']).then(
                function (translations) {
                    $scope.sampleRedCardFilterValues = [
                        {"name": translations.REDCARD_EXISTS, "value": '1', "checked": false},
                        {"name": translations.REDCARD_NO, "value": '0', "checked": false},
                        {"name": translations.ALL_MATCHES, "value": '-1', "checked": false}
                    ];
                }
            );
        }

        $scope.initOddsFilterValues = function () {
            //赔率显示选项
            $translate(['ODDS_ASIAN', 'ODDS_SIZE', 'ODDS_EUROPE', 'ODDS_HIDE']).then(
                function (translations) {
                    $scope.sampleOddsFilterValues = [
                        {"name": translations.ODDS_ASIAN, "value": asiaLetOdds, "checked": false},
                        {"name": translations.ODDS_SIZE, "value": asiaSizeOdds, "checked": false},
                        {"name": translations.ODDS_EUROPE, "value": euroOdds, "checked": false},
                        {"name": translations.ODDS_HIDE, "value": '0', "checked": false}
                    ];
                }
            );
        }


        //状态筛选初始化
        $scope.initStateFilter = function () {
            var timeFilterValue = null;
            var scoreFilterValue = null;
            var redCardFilterValue = null;
            if ($scope.tabActiveIndex == 0) {//即时
                //时间筛选
                timeFilterValue = $scope.getObjectFromLocalStorage("immediateTimeFilterValue");
                //比分筛选
                scoreFilterValue = $scope.getObjectFromLocalStorage("immediateScoreFilterValue");
                //红牌筛选
                redCardFilterValue = $scope.getObjectFromLocalStorage("immediateRedCardFilterValue");
            } else if ($scope.tabActiveIndex == 1) {//赛果
                //比分筛选
                scoreFilterValue = $scope.getObjectFromLocalStorage("resultScoreFilterValue");
                //红牌筛选
                redCardFilterValue = $scope.getObjectFromLocalStorage("resultRedCardFilterValue");
            } else if ($scope.tabActiveIndex == 2) {//赛程
                //do nothing
            } else if ($scope.tabActiveIndex == 3) {//关注
            }

            $scope.initTimeFilter(timeFilterValue);

            $scope.initScoreFilter(scoreFilterValue);

            $scope.initRedCardFilter(redCardFilterValue);
        }

        //初始化时间筛选
        $scope.initTimeFilter = function (timeFilterValue) {
            if (timeFilterValue == null) {
                timeFilterValue = "-1";//默认全部比赛
            }
            $scope.timeFilterValue = timeFilterValue;
            $scope.timeFilterValues = angular.copy($scope.sampleTimeFilterValues);
            var timeFilter = null;
            for (var i in $scope.timeFilterValues) {
                timeFilter = $scope.timeFilterValues[i];
                if (timeFilter.value == timeFilterValue) {
                    timeFilter.checked = true;
                } else {
                    timeFilter.checked = false;
                }
            }
        }

        //初始化比分筛选
        $scope.initScoreFilter = function (scoreFilterValue) {
            if (scoreFilterValue == null) {
                scoreFilterValue = "-1";//默认全部比赛
            }
            $scope.scoreFilterValue = scoreFilterValue;
            var scoreFilter = null;
            $scope.scoreFilterValues = angular.copy($scope.sampleScoreFilterValues);
            for (var j in $scope.scoreFilterValues) {
                scoreFilter = $scope.scoreFilterValues[j];
                if (scoreFilter.value == scoreFilterValue) {
                    scoreFilter.checked = true;
                } else {
                    scoreFilter.checked = false;
                }
            }
        }

        //初始化红牌筛选
        $scope.initRedCardFilter = function (redCardFilterValue) {
            if (redCardFilterValue == null) {
                redCardFilterValue = "-1";//默认全部比赛
            }
            $scope.redCardFilterValue = redCardFilterValue;
            $scope.redCardFilterValues = angular.copy($scope.sampleRedCardFilterValues);
            var redCardFilter = null;
            for (var j in $scope.redCardFilterValues) {
                redCardFilter = $scope.redCardFilterValues[j];
                if (redCardFilter.value == redCardFilterValue) {
                    redCardFilter.checked = true;
                } else {
                    redCardFilter.checked = false;
                }
            }
        }

        //根据状态筛选条件处理即时比赛, 可能重新出现或删除
        $scope.handleImmediateMatchByStateFilter = function (match) {
            var thirdId = match.thirdId;
            var timeFilterValue = $scope.getObjectFromLocalStorage("immediateTimeFilterValue");
            if (timeFilterValue == null) {
                timeFilterValue = "-1";
            }
            var scoreFilterValue = $scope.getObjectFromLocalStorage("immediateScoreFilterValue");
            if (scoreFilterValue == null) {
                scoreFilterValue = "-1";
            }
            var redCardFilterValue = $scope.getObjectFromLocalStorage("immediateRedCardFilterValue");
            if (redCardFilterValue == null) {
                redCardFilterValue = "-1";
            }
            //时间
            var timeFlag = $scope.getMatchTimeFlag(match, timeFilterValue);
            //比分
            var scoreFlag = $scope.getMatchScoreFlag(match, scoreFilterValue);
            //红牌
            var redCardFlag = $scope.getMatchRedCardFlag(match, redCardFilterValue);

            if (timeFlag && scoreFlag && redCardFlag) {
                var index = $scope.getImmediateMatchIndex(thirdId, $scope.immediateMatches);
                if (index == -1) {
                    var tempMatch = null;
                    try{
                        tempMatch = $scope.fullThirdIdMap[thirdId];
                    }catch(e) {
                    }
                    if ($scope.immediateMatches == null) {
                        $scope.immediateMatches = [];
                    }
                    if(tempMatch != null) {
                        $scope.immediateMatches.push(tempMatch);
                    }
                    $scope.noInitImmediateMatches = false;
                    $scope.noImmediateMatches = false;
                }
            } else {// 只要有一个不满足,就移除当前比赛
                if ($scope.immediateMatches != null && $scope.immediateMatches.length > 0) {
                    var index = $scope.getImmediateMatchIndex(thirdId, $scope.immediateMatches);
                    if (index > -1) {
                        $scope.immediateMatches.splice(index, 1);
                        $scope.toggleNoImmediateMatchesFlag();
                    }
                }
            }
        }

        $scope.toggleNoImmediateMatches = function () {
            if ($scope.immediateMatches == null || $scope.immediateMatches.length == 0) {
                $scope.noImmediateMatches = true;
            } else {
                $scope.noImmediateMatches = false;
            }
        };

        $scope.toggleNoResultMatches = function () {
            if ($scope.resultMatches === undefined || $scope.resultMatches === null ||
                $scope.resultMatches.length === 0) {
                $scope.noResultMatches = true;
            } else {
                $scope.noResultMatches = false;
            }
        };

        $scope.toggleNoScheduleMatches = function () {
            if ($scope.scheduleMatches === undefined || $scope.scheduleMatches === null ||
                $scope.scheduleMatches.length === 0) {
                $scope.noScheduleMatches = true;
            } else {
                $scope.noScheduleMatches = false;
            }
        };

        /**
         * 刷新状态和时间数据
         * @param sourceImmediateMatch  源即时比赛数据
         * @param targetImmediateMatch  目标即时比赛数据
         */
        $scope.refreshStateAndTimeData = function (sourceImmediateMatch, targetImmediateMatch) {
            targetImmediateMatch.statusOrigin = sourceImmediateMatch.statusOrigin;//比赛状态
            if (sourceImmediateMatch.keepTime != null) {
                targetImmediateMatch.keepTime = sourceImmediateMatch.keepTime;//进行时间
            }
            if (sourceImmediateMatch.home_yc != null) {
                targetImmediateMatch.home_yc = sourceImmediateMatch.home_yc;//主队黄牌
            }
            if (sourceImmediateMatch.guest_yc != null) {
                targetImmediateMatch.guest_yc = sourceImmediateMatch.guest_yc;//客队黄牌
            }
            if (sourceImmediateMatch.homeHalfScore != null) {
                targetImmediateMatch.homeHalfScore = sourceImmediateMatch.homeHalfScore;//主队半场比分
            }
            if (sourceImmediateMatch.guestHalfScore != null) {
                targetImmediateMatch.guestHalfScore = sourceImmediateMatch.guestHalfScore;//客队半场比分
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
                //odds.transfereeFlag = true;
            }
            odds.handicapValue = handicapValue;
            odds.mediumOdds = handicapValue;
        }

        //大小球赔率转换
        $scope.convertSizeOdds = function (odds) {
            if (odds == null) {
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
                var val = mediumOdds.split(".")[0];
                odds.mediumOdds = val;
                odds.handicapValue = val;
            } else if (mediumOdds.lastIndexOf('.25') != -1 || mediumOdds.lastIndexOf('.75') != -1) {
                var before = (mediumOddsVal - 0.25) + '';
                if (before.endWith(".0")) {
                    before = before.substring(0, before.indexOf("."));
                }
                var last = (mediumOddsVal + 0.25) + '';
                if (last.endWith(".0")) {
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

        $scope.convertHandicapValue = function (matchOdds) {
            var props = Object.getOwnPropertyNames(matchOdds);
            if (props != null && props.length > 1) {
                for (var i in props) {
                    var odds = matchOdds[props[i]];
                    $scope.convertHandicapValueSelf(odds);
                }
            }

        }

        $scope.convertHandicapValueSelf = function (odds) {
            var handicap = odds.handicap;
            if (euroOdds == handicap) {//欧赔
                //不做处理
                odds.handicapValueOrigin = odds.mediumOdds;
            } else if (asiaLetOdds == handicap) {
                odds.handicapValueOrigin = odds.handicapValue;
                $scope.convertAsiaOdds(odds);
            } else if (asiaSizeOdds == handicap) {
                odds.handicapValueOrigin = odds.handicapValue;
                $scope.convertSizeOdds(odds);
            }
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
                if (odds) {
                    if (odds.handicap == euroOdds) {//欧赔
                        if ($scope.isSealFlag(odds.leftOdds) && $scope.isSealFlag(odds.mediumOdds)
                            && $scope.isSealFlag(odds.rightOdds)) {
                            odds.seal = true;
                        }
                    } else if (odds.handicap == asiaLetOdds || odds.handicap == asiaSizeOdds) {
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
            if (oddsValue == null || oddsValue == '' || oddsValue == '-' || oddsValue == '|') {
                return true;
            }
            return false;
        }

        //处理赔率，包括升降、封盘、盘口转换等。
        $scope.handleOddsState = function (match, refreshData) {
            if (match.matchOdds != null) {
                var oddsType;
                for (var i in refreshData) {
                    oddsType = refreshData[i].handicap;
                    var oldOdd = match.matchOdds[oddsType];
                    var newOdd = refreshData[i];
                    newOdd = $scope.fixedOddsValue(newOdd, 2);//先四舍五入再比较，否则赔率 变化很频繁
                    if (oldOdd && oldOdd != null) {
                        oldOdd.mediumValueState = $scope.compareOdds(oldOdd.handicapValueOrigin, newOdd.mediumOdds);
                        oldOdd.leftOddsState = $scope.compareOdds(oldOdd.leftOdds, newOdd.leftOdds);
                        oldOdd.rightOddsState = $scope.compareOdds(oldOdd.rightOdds, newOdd.rightOdds);
                    } else {
                        oldOdd = {};
                        oldOdd.mediumValueState = null;
                        oldOdd.leftOddsState = null;
                        oldOdd.rightOddsState = null;
                        oldOdd.handicap = oddsType;
                    }
                    oldOdd.leftOdds = newOdd.leftOdds;
                    oldOdd.rightOdds = newOdd.rightOdds;
                    oldOdd.mediumOdds = newOdd.mediumOdds;
                    oldOdd.handicapValue = oldOdd.mediumOdds;
                    //封盘处理
                    oldOdd.seal = false;
                    if (match.keepTime != null) {
                        var keepTime;
                        if (angular.isNumber(match.keepTime)) {
                            keepTime = parseInt(match.keepTime);
                        } else {
                            keepTime = parseInt(match.keepTime.replace("+", ""));
                        }
                        if (keepTime >= oddsConvertToSealAtKeepTime) {
                            oldOdd.seal = true;
                        }
                    }
                    if (oldOdd.seal == false) {
                        if (oddsType == euroOdds) {//欧赔
                            if ($scope.isSealFlag(oldOdd.leftOdds) && $scope.isSealFlag(oldOdd.mediumOdds)
                                && $scope.isSealFlag(oldOdd.rightOdds)) {
                                oldOdd.seal = true;
                            }
                        } else if (oddsType == asiaLetOdds || oddsType == asiaSizeOdds) {
                            if ($scope.isSealFlag(oldOdd.leftOdds) && $scope.isSealFlag(oldOdd.handicapValue)
                                && $scope.isSealFlag(oldOdd.rightOdds)) {
                                oldOdd.seal = true;
                            }
                        }
                    }
                    //盘口转换
                    $scope.convertHandicapValueSelf(oldOdd);
                    match.matchOdds[oddsType] = oldOdd;
                }
            }
        }

        //格式化赔率值，保留2位小数，不足的后面补0，大于3位的，四舍五入。
        //handleOddsState专用。
        $scope.fixedOddsValue = function (odds, num) {
            if (odds == null) {
                return;
            }
            if (num == undefined || num == null) {
                num = 2;//默认保留2位小数
            }
            if (odds.leftOdds != null) {
                var leftOddsFloat = parseFloat(odds.leftOdds);
                if (!isNaN(leftOddsFloat)) {
                    odds.leftOdds = leftOddsFloat.toFixed(num);
                }
            }
            if (odds.mediumOdds != null) {
                var mediumOddsFloat = parseFloat(odds.mediumOdds);
                if (!isNaN(mediumOddsFloat)) {
                    odds.mediumOdds = mediumOddsFloat.toFixed(num);
                }
            }
            if (odds.rightOdds != null) {
                var rightOddsFloat = parseFloat(odds.rightOdds);
                if (!isNaN(rightOddsFloat)) {
                    odds.rightOdds = rightOddsFloat.toFixed(num);
                }
            }
            return odds;
        }

        /**
         * 比较赔率值,返回赔率变化，0 : 平盘, 1: 降盘， 3： 升盘
         * @param oldValue  旧赔率值
         * @param newValue  新赔率值
         * @returns {string}    赔率变化
         */
        $scope.compareOdds = function (oldValue, newValue) {
            if ("" == (oldValue) || "" == (newValue)) {
                return "0";
            }

            var oldVal = parseFloat(oldValue);
            var newVal = parseFloat(newValue);
            if (newVal > oldVal) {
                return "3";
            } else if (oldVal == newVal) {
                return "0";
            } else {
                return "1";
            }
        }


        //刷新赔率样式
        $scope.refreshOddsStyle = function (match, refreshData) {
            var oddsType;
            if (refreshData == undefined || refreshData == null) {
                $scope.refreshOddsStyleSelf(match, $scope.oddsFilterCookieValue);
            } else {
                for (var i in refreshData) {
                    oddsType = refreshData[i].handicap;
                    if (oddsType == $scope.oddsFilterCookieValue) {
                        $scope.refreshOddsStyleSelf(match, oddsType);
                    }
                }
            }
        }

        $scope.refreshOddsStyleSelf = function (match, oddsType) {
            var redClass = "f_red";
            var blackClass = "f_black";
            var greenClass = "f_green";
            var matchOdds = match.matchOdds[oddsType];
            if (matchOdds != null && (matchOdds.seal == null || matchOdds.seal == false)) {
                var needCancelTimeout = false;
                if (matchOdds.leftOddsState == '3') {//升盘
                    match.leftOddsClass = redClass;
                    needCancelTimeout = true;
                } else if (matchOdds.leftOddsState == '1') {//降盘
                    match.leftOddsClass = greenClass;
                    needCancelTimeout = true;
                }

                //处理中间赔率
                if (matchOdds.mediumValueState == "3") {
                    match.mediumOddsClass = redClass;
                    needCancelTimeout = true;
                } else if (matchOdds.mediumValueState == "1") {
                    match.mediumOddsClass = greenClass;
                    needCancelTimeout = true;
                } else {
                    if (!needCancelTimeout) {
                        if ($scope.oddsFilterCookieValue == euroOdds) {//欧赔
                            match.mediumOddsClass = "";
                        } else {
                            match.mediumOddsClass = blackClass;
                        }
                    }
                }

                //处理右边赔率
                if (matchOdds.rightOddsState == '3') {//升盘
                    match.rightOddsClass = redClass;
                    needCancelTimeout = true;
                } else if (matchOdds.rightOddsState == '1') {//降盘
                    match.rightOddsClass = greenClass;
                    needCancelTimeout = true;
                }
                if (needCancelTimeout) {
                    if (match.timeout != null) {
                        $timeout.cancel(match.timeout);
                    }
                    match.timeout = $timeout(function () {
                        match.leftOddsClass = "";
                        if ($scope.oddsFilterCookieValue == euroOdds) {
                            match.mediumOddsClass = "";
                        } else {
                            match.mediumOddsClass = blackClass;
                        }
                        match.rightOddsClass = "";
                        needCancelTimeout = false;
                    }, 5000);
                }
            }

        }


        //刷新事件数据
        $scope.refreshEventData = function (refreshDataObject, match) {
            var refreshData = refreshDataObject.data;
            var thirdId = refreshDataObject.thirdId;
            var eventType = refreshData.eventType;
            var defaultRedCardSoundId = "3";
            var box = angular.element($("#" + thirdId));
            if (box) {
                box.addClass("goal_bg");
                if (eventType == 1 || eventType == 2 || eventType == 5 || eventType == 6) {
                    if (eventType == 1 || eventType == 2) {//主队进球和取消进球
                        match.homeScore = refreshData.homeScore;
                        match.guestScore = refreshData.guestScore;
                        $scope.handleFullScore(match);
                        var home = angular.element($("#" + thirdId + " [hometeam]"));
                        if (home) {
                            home.addClass("f_red");
                        }
                        var homeTeamGoalSoundId = $scope.getObjectFromLocalStorage("homeTeamGoalSound");
                        if (homeTeamGoalSoundId == null || homeTeamGoalSoundId == undefined) {
                            homeTeamGoalSoundId = "1";
                        }
                        var index = $scope.getImmediateMatchIndex(match.thirdId, $scope.immediateMatches);
                        if(index > -1) {
                            $scope.playSound(match.thirdId, homeTeamGoalSoundId, goalSoundCookieId);
                        }
                    } else if (eventType == 5 || eventType == 6) {//客队进球和取消进球
                        match.homeScore = refreshData.homeScore;
                        match.guestScore = refreshData.guestScore;
                        $scope.handleFullScore(match);
                        var guest = angular.element($("#" + thirdId + " [guestteam]"));
                        if (guest) {
                            guest.addClass("f_red");
                        }
                        var guestTeamGoalSoundId = $scope.getObjectFromLocalStorage("guestTeamGoalSound");
                        if (guestTeamGoalSoundId == null || guestTeamGoalSoundId == undefined) {
                            guestTeamGoalSoundId = "2";
                        }
                        var index = $scope.getImmediateMatchIndex(match.thirdId, $scope.immediateMatches);
                        if(index > -1) {
                            $scope.playSound(match.thirdId, guestTeamGoalSoundId, goalSoundCookieId);
                        }
                    }
                } else if (eventType == 3 || eventType == 4) {//主队红牌
                    $scope.refreshRedYellowCard(match, refreshData);
                    $scope.handleRedYellowCard(match);
                    var home = angular.element($("#" + thirdId + " [hometeam]"));
                    if (home) {
                        home.addClass("f_red");
                    }
                    var index = $scope.getImmediateMatchIndex(match.thirdId, $scope.immediateMatches);
                    if(index > -1) {
                        $scope.playSound(match.thirdId, defaultRedCardSoundId, redCardSoundCookieId);
                    }
                } else if (eventType == 7 || eventType == 8) {//客队红牌
                    $scope.refreshRedYellowCard(match, refreshData);
                    $scope.handleRedYellowCard(match);
                    var guest = angular.element($("#" + thirdId + " [guestteam]"));
                    if (guest) {
                        guest.addClass("f_red");
                    }
                    var index = $scope.getImmediateMatchIndex(match.thirdId, $scope.immediateMatches);
                    if(index > -1) {
                        $scope.playSound(match.thirdId, defaultRedCardSoundId, redCardSoundCookieId);
                    }
                }
                $scope.refreshEventTimeOut(thirdId, eventType, refreshData.eventId);
            }
        }

        $scope.refreshRedYellowCard = function (match, refreshData) {
            if (refreshData.home_rc != null) {
                match.home_rc = refreshData.home_rc;
            }
            if (refreshData.home_yc != null) {
                match.home_yc = refreshData.home_yc;
            }
            if (refreshData.guest_rc != null) {
                match.guest_rc = refreshData.guest_rc;
            }
            if (refreshData.guest_yc != null) {
                match.guest_yc = refreshData.guest_yc;
            }
        }

        $scope.playSound = function (thirdId, soundId, soundCookieId) {
            var isSound = $scope.getObjectFromLocalStorage(soundCookieId);
            if (isSound == null) {
                isSound = "true";
            }
            if(soundCookieId == "redCardSound") {//屏蔽红牌声音
                isSound = "false";
            }
            var promptOnlyForAttention = $scope.getObjectFromLocalStorage("promptOnlyForAttention");
            if (promptOnlyForAttention == null) {
                promptOnlyForAttention = "true";
            }
            if (isSound == "true") {//开启进球、红牌声音提示
                var attentionMatch = false;
                var attentionThirdIds = $scope.getAttentionThirdIdArrFromCookie();
                if (attentionThirdIds != null && attentionThirdIds.indexOf(thirdId) > -1) {
                    attentionMatch = true;
                }
                if (promptOnlyForAttention == "true") {//是否只提示关注赛事
                    if (attentionMatch) {
                        document.getElementById("sound" + soundId).play();
                    }
                } else {
                    document.getElementById("sound" + soundId).play();
                }
            }
        }


        //设置窗口参数初始化
        $scope.initSetParams = function () {
            var oddsFilterValue = $scope.getOddsFilterCookieValue();//赔率显示参数
            if (oddsFilterValue == null) {
                oddsFilterValue = asiaLetOdds;//默认为亚盘
            }
            $scope.oddsFilterValue = oddsFilterValue;
            $scope.oddsFilterValues = angular.copy($scope.sampleOddsFilterValues);
            var oddsFilter = null;
            for (var i in $scope.oddsFilterValues) {
                oddsFilter = $scope.oddsFilterValues[i];
                if (oddsFilter.value == oddsFilterValue) {
                    oddsFilter.checked = true;
                } else {
                    oddsFilter.checked = false;
                }
            }
            var goalSound = $scope.getObjectFromLocalStorage(goalSoundCookieId);//进球声音提示
            if (goalSound == null || goalSound == 'true') {
                goalSound = true;
            } else if (goalSound == 'false') {
                goalSound = false;
            }
            $scope.goalSound = goalSound;
            var homeTeamGoalSound = $scope.getObjectFromLocalStorage("homeTeamGoalSound");//主进球声音
            if (homeTeamGoalSound == null) {
                homeTeamGoalSound = "1";
            }
            angular.element($("#homeTeamGoalSound")).val(homeTeamGoalSound);
            $scope.homeTeamGoalSound = homeTeamGoalSound;
            var guestTeamGoalSound = $scope.getObjectFromLocalStorage("guestTeamGoalSound");//客进球声音
            if (guestTeamGoalSound == null) {
                guestTeamGoalSound = "2";
            }
            $scope.guestTeamGoalSound = guestTeamGoalSound;
            angular.element($("#guestTeamGoalSound")).val(guestTeamGoalSound);
            var promptOnlyForAttention = $scope.getObjectFromLocalStorage("promptOnlyForAttention");//进球、红牌提示仅提示关注赛事
            if (promptOnlyForAttention == null || promptOnlyForAttention == 'true') {
                promptOnlyForAttention = true;
            } else if (promptOnlyForAttention == 'false') {
                promptOnlyForAttention = false;
            }
            $scope.promptOnlyForAttention = promptOnlyForAttention;
            var redCardSound = $scope.getObjectFromLocalStorage(redCardSoundCookieId);//红牌声音提示
            if (redCardSound == null || redCardSound == 'true') {
                redCardSound = true;
            } else if (redCardSound == 'false') {
                redCardSound = false;
            }
            $scope.redCardSound = goalSound;
            $(".css_select").selectCss();
        }

        homeTeamGoalSoundChange = function (obj) {
            if ($(obj).val() != "") {
                document.getElementById("sound" + $(obj).val()).play();
            }
            $scope.$apply(function () {
                $scope.homeTeamGoalSound = $(obj).val();
            });
        };

        guestTeamGoalSoundChange = function (obj) {
            if ($(obj).val() != "") {
                document.getElementById("sound" + $(obj).val()).play();
            }
            $scope.$apply(function () {
                $scope.guestTeamGoalSound = $(obj).val();
            });
        }

        //关闭筛选、设置弹窗
        $scope.filterSetWindowClose = function ($event) {
            angular.element($(".nav-menus")).removeClass("nav_hidden").addClass("nav_show");
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#sort_content")).removeClass("show");
            //event.currentTarget指向事件所绑定的元素，而event.target始终指向事件发生时的元素
            var _this = $($event.currentTarget);
            $timeout(function () {
                _this.parent().parent().parent().removeClass('show');
            }, 300);
        }

        //筛选取消
        $scope.filterCancelClick = function ($event) {
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#sort_content")).removeClass("show");
            $timeout(function () {
                angular.element($("#asort-filter")).removeClass('show');
            }, 300);
        }

        //设置取消
        $scope.setCancelClick = function ($event) {
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#sort_content")).removeClass("show");
            $timeout(function () {
                angular.element($("#asort-set")).removeClass('show');
            }, 300);
        }

        //从cookie中获取已选择赛事名称数组
        $scope.getCheckedRaceIdArrFromCookie = function () {
            var checkedRaceIdList = null;
            if ($scope.tabActiveIndex == 0) {
                checkedRaceIdList = $scope.getObjectFromSessionStorage("checkedImmediateRaceIdList");
            } else if ($scope.tabActiveIndex == 1) {
                checkedRaceIdList = $scope.getObjectFromSessionStorage("checkedResultRaceIdList");
            } else if ($scope.tabActiveIndex == 2) {
                checkedRaceIdList = $scope.getObjectFromSessionStorage("checkedScheduleRaceIdList");
            } else if ($scope.tabActiveIndex == 3) {
                checkedRaceIdList = $scope.getObjectFromSessionStorage("checkedAttentionRaceIdList");
            }
            var checkedRaceIdArr = [];
            if (checkedRaceIdList != null) {
                checkedRaceIdArr = checkedRaceIdList.split(",");
            }
            return checkedRaceIdArr;
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

        //初始化赛事筛选
        $scope.initGameFilter = function () {
            $scope.hotGameList=[];
            $scope.otherGameList=[];
            $scope.raceList = angular.copy($scope.gameList);//复制一份，防止页面定时刷新时$scope.gameList被重新初始化导致筛选页面已选赛事被清空
            if ($scope.raceList == null) {
                $scope.raceList = [];
            }
            $scope.hideGameCount = 0;
            var raceIdArr = $scope.getCheckedRaceIdArrFromCookie();
            if (raceIdArr != null && raceIdArr.length > 0) {
                var curGame = null;
                for (var i in $scope.raceList) {
                    curGame = $scope.raceList[i];
                    if (raceIdArr.indexOf(curGame.raceId) > -1) {
                        curGame.clicked = true;
                    } else {
                        curGame.clicked = false;
                        $scope.hideGameCount += curGame.count;
                    }
                    //热门、非热门
                    if(curGame.hot){
                        $scope.hotGameList.push(curGame);
                    }else{
                        $scope.otherGameList.push(curGame);
                    }
                }
            } else {
                if($scope.tabActiveIndex == 0 ) { //即时，默认选中热门赛事
                    $scope.checkHotGame();
                } else { //其他，默认全不选
                    $scope.uncheckAllGame();
                }

            }
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
                $scope.hideGameCount += $scope.raceList[i].count;
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
                    $scope.hideGameCount += curGame.count;
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
                if (fiveRaceIds.indexOf(game.raceId) > -1) {
                    game.clicked = true;
                } else {
                    game.clicked = false;
                    $scope.hideGameCount += game.count;
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
                    $scope.hideGameCount += game.count;
                }
                //热门、非热门
                if(game.hot){
                    $scope.hotGameList.push(game);
                }else{
                    $scope.otherGameList.push(game);
                }
            }
        }

//赛事筛选
        $scope.filterFootball = function ($event) {
            $scope.matchFilterLiClicked = true;
            $scope.stateFilterLiClicked = false;
            $scope.showMatchFilterDiv = true;
            $scope.showStateFilterDiv = false;
        }

        $scope.toggleGame = function ($event, toggleClass) {
            var _this = $($event.currentTarget);
            _this.toggleClass(toggleClass);
            var clicked = false;
            if (_this.hasClass(toggleClass)) {
                $scope.hideGameCount -= parseInt(_this.attr("count"));
                clicked = true;
            } else {
                $scope.hideGameCount += parseInt(_this.attr("count"));
                clicked = false;
            }
            var raceId = _this.attr("raceid");
            for (var i = 0; i < $scope.raceList.length; i++) {
                if (raceId == $scope.raceList[i].raceId) {
                    $scope.raceList[i].clicked = clicked;
                }
            }
        }

//赛事筛选提交请求
        $scope.checkGameSubmit = function ($event) {
            angular.element($(".nav-menus")).removeClass("nav_hidden").addClass("nav_show");
            $scope.initScroll();
            var checkedThirdIdList = [];
            var checkedRaceIdList = [];
            var curGame = null;
            for (var i in $scope.raceList) {
                curGame = $scope.raceList[i];
                if (curGame.clicked) {
                    checkedThirdIdList = checkedThirdIdList.concat(curGame.thirdId);
                    checkedRaceIdList.push(curGame.raceId);
                }
            }
            var raceIdCookieId = null;
            var lastFilterTypeCookieId = null;
            var todayHasCheckRaceIdCookieId = null;
            //刷新model数据
            if ($scope.tabActiveIndex == 0) {//即时
                raceIdCookieId = "checkedImmediateRaceIdList";
                lastFilterTypeCookieId = "immediateLastFilterType";
                todayHasCheckRaceIdCookieId = "immediateTodayHasCheckRaceId";
                var immediateMatches = $scope.getImmediateMatchesFilterByRaceId(checkedThirdIdList);
                $scope.filterImmediateMatches = angular.copy(immediateMatches);
                $scope.immediateMatches = immediateMatches.splice(0, pageSize);
                $scope.toggleNoImmediateMatches();
            } else if ($scope.tabActiveIndex == 1) {//赛果
                raceIdCookieId = "checkedResultRaceIdList";
                lastFilterTypeCookieId = "resultLastFilterType";
                todayHasCheckRaceIdCookieId = "resultTodayHasCheckRaceId";
                var resultMatches = $scope.getResultMatchesFilterByRaceId(checkedThirdIdList);
                $scope.filterResultMatches = angular.copy(resultMatches);
                $scope.resultMatches = resultMatches.splice(0, pageSize);
                $scope.toggleNoResultMatches();
            } else if ($scope.tabActiveIndex == 2) {//赛程
                raceIdCookieId = "checkedScheduleRaceIdList";
                todayHasCheckRaceIdCookieId = "scheduleTodayHasCheckRaceId";
                var scheduleMatches = $scope.getScheduleMatchesFilterByRaceId(checkedThirdIdList);
                $scope.filterScheduleMatches = angular.copy(scheduleMatches);
                $scope.scheduleMatches = scheduleMatches.splice(0, pageSize);
                $scope.toggleNoScheduleMatches();
            } else if ($scope.tabActiveIndex == 3) {//关注
                raceIdCookieId = "checkedAttentionRaceIdList";
                //do nothing
            }
            //将赛事id列表存入到cookie中
            if (raceIdCookieId != null) {
                $scope.putObjectToSessionStorage(raceIdCookieId, checkedRaceIdList.join(","));
            }
            //将上一次筛选类型存入到cookie中
            if (lastFilterTypeCookieId != null) {
                $scope.putObjectToLocalStorage(lastFilterTypeCookieId, "matchFilter");
            }
            //当天有赛事筛选记录行为，记录到sessionStorage
            $scope.putObjectToSessionStorage(todayHasCheckRaceIdCookieId, "true");
            //关闭当前弹窗
            $scope.filterCancelClick($event);
        }

//获取根据赛事筛选后的即时数据
        $scope.getImmediateMatchesFilterByRaceId = function (checkedThirdIdList) {
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();
            var tempImmediateMatches = [];
            var immediateMatch = null;
            //先刷新关注状态，防止多次筛选过程中有新增关注赛事，否则出现显示异常。
            for (var j in $scope.immediateMatchesBak) {
                immediateMatch = $scope.immediateMatchesBak[j];
                if (attentionThirdIdArr != null) {
                    if (attentionThirdIdArr.indexOf(immediateMatch.thirdId) > -1) {
                        immediateMatch.attented = true;
                    } else {
                        immediateMatch.attented = false;
                    }
                }
                if (checkedThirdIdList != null
                    && checkedThirdIdList.indexOf(immediateMatch.thirdId) > -1) {
                    tempImmediateMatches.push(immediateMatch);
                }
            }
            return tempImmediateMatches;
        }

//获取根据赛事筛选后的赛果数据
        $scope.getResultMatchesFilterByRaceId = function (checkedThirdIdList) {
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();
            var tempResultMatches = [];
            var resultMatch = null;
            for (var i in $scope.resultMatchesBak) {
                resultMatch = $scope.resultMatchesBak[i];
                if (resultMatch.dataType && resultMatch.dataType == "0") {
                    //判断下tempResultMatches中的数目, 第一次进入，值为0，如果为1，那么表示上一日期下没有赛事。则删除
                    if(tempResultMatches.length === 1) {
                        tempResultMatches = [];
                    }
                    tempResultMatches.push(resultMatch);
                    continue;
                }
                if (attentionThirdIdArr != null) {
                    if (attentionThirdIdArr.indexOf(resultMatch.thirdId) > -1) {
                        resultMatch.attented = true;
                    } else {
                        resultMatch.attented = false;
                    }
                }
                if (checkedThirdIdList != null) {
                    if (checkedThirdIdList.indexOf(resultMatch.thirdId) > -1) {
                        tempResultMatches.push(resultMatch);
                    }
                }
            }
            if(tempResultMatches.length === 1) {
                tempResultMatches = [];
            }
            if(tempResultMatches.length > 1) {
                if(tempResultMatches[tempResultMatches.length -1].dataType == "0") {
                    tempResultMatches.splice(tempResultMatches.length -1, 1);
                }
            }
            return tempResultMatches;
        };

//获取根据赛事筛选后的赛程数据
        $scope.getScheduleMatchesFilterByRaceId = function (checkedThirdIdList) {
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();
            var tempScheduleMatches = [];
            var scheduleMatch = null;
            for (var i in $scope.scheduleMatchesBak) {
                scheduleMatch = $scope.scheduleMatchesBak[i];
                if (scheduleMatch.dataType && scheduleMatch.dataType == "0") {
                    //判断下tempScheduleMatches中的数目, 第一次进入，值为0，如果为1，那么表示上一日期下没有赛事。则删除
                    if(tempScheduleMatches.length === 1) {
                        tempScheduleMatches = [];
                    }
                    tempScheduleMatches.push(scheduleMatch);
                    continue;
                }
                if (attentionThirdIdArr != null) {
                    if (attentionThirdIdArr.indexOf(scheduleMatch.thirdId) > -1) {
                        scheduleMatch.attented = true;
                    } else {
                        scheduleMatch.attented = false;
                    }
                }
                if (checkedThirdIdList != null) {
                    if (checkedThirdIdList.indexOf(scheduleMatch.thirdId) > -1) {
                        tempScheduleMatches.push(scheduleMatch);
                    }
                }
            }
            if(tempScheduleMatches.length == 1) {
                tempScheduleMatches = [];
            }
            if(tempScheduleMatches.length > 1) {
                if(tempScheduleMatches[tempScheduleMatches.length -1].dataType == "0") {
                    tempScheduleMatches.splice(tempScheduleMatches.length -1, 1);
                }
            }
            return tempScheduleMatches;
        };

//状态筛选
        $scope.filterState = function ($event) {
            $scope.matchFilterLiClicked = false;
            $scope.stateFilterLiClicked = true;
            $scope.showMatchFilterDiv = false;
            $scope.showStateFilterDiv = true;
        }

//状态筛选提交
        $scope.checkStateSubmit = function ($event) {
            angular.element($(".nav-menus")).removeClass("nav_hidden").addClass("nav_show");
            $scope.initScroll();
            var redCardFilterCookieId = null;
            var timeFilterCookieId = null;
            var scoreFilterCookieId = null;
            var lastFilterTypeCookieId = null;
            if ($scope.tabActiveIndex == 0) {
                timeFilterCookieId = "immediateTimeFilterValue";
                scoreFilterCookieId = "immediateScoreFilterValue";
                redCardFilterCookieId = "immediateRedCardFilterValue";
                lastFilterTypeCookieId = "immediateLastFilterType";
            } else if ($scope.tabActiveIndex == 1) {
                scoreFilterCookieId = "resultScoreFilterValue";
                redCardFilterCookieId = "resultRedCardFilterValue";
                lastFilterTypeCookieId = "resultLastFilterType";
            } else if ($scope.tabActiveIndex == 2) {
                //do nothing
            } else if ($scope.tabActiveIndex == 3) {
                //do nothing
            }
            if (timeFilterCookieId != null) {
                $scope.putObjectToLocalStorage(timeFilterCookieId, $scope.timeFilterValue);
            }
            if (scoreFilterCookieId != null) {
                $scope.putObjectToLocalStorage(scoreFilterCookieId, $scope.scoreFilterValue);
            }
            if (redCardFilterCookieId != null) {
                $scope.putObjectToLocalStorage(redCardFilterCookieId, $scope.redCardFilterValue);
            }

            //保存上一次筛选类型到cookie中，此处为stateFilter（表示状态筛选）
            if (lastFilterTypeCookieId != null) {
                $scope.putObjectToLocalStorage(lastFilterTypeCookieId, "stateFilter");
            }

            //刷新model数据
            if ($scope.tabActiveIndex == 0) {
                var immediateMatches = $scope.getImmediateMatchesFilterByState($scope.timeFilterValue, $scope.scoreFilterValue, $scope.redCardFilterValue);
                $scope.filterImmediateMatches = angular.copy(immediateMatches);
                $scope.immediateMatches = immediateMatches.splice(0, pageSize);
                $scope.toggleNoImmediateMatches();
            } else if ($scope.tabActiveIndex == 1) {
                var resultMatches = $scope.getResultMatchesFilterByState($scope.scoreFilterValue, $scope.redCardFilterValue);
                $scope.filterResultMatches = angular.copy(resultMatches);
                $scope.resultMatches = resultMatches.splice(0, pageSize);
                $scope.toggleNoResultMatches();
            }

            //关闭当前弹窗
            $scope.filterCancelClick($event);
        }

//获取根据状态筛选后的即时数据
        $scope.getImmediateMatchesFilterByState = function (timeFilterValue, scoreFilterValue, redCardFilterValue) {
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();
            var tempImmediateMatches = [];
            var immediateMatch = null;
            var timeFlag = false;
            var scoreFlag = false;
            var redCardFlag = false;
            //先刷新关注状态，防止多次筛选过程中有新增关注赛事，否则出现显示异常。
            for (var j in $scope.immediateMatchesBak) {
                immediateMatch = $scope.immediateMatchesBak[j];
                if (attentionThirdIdArr != null) {
                    if (attentionThirdIdArr.indexOf(immediateMatch.thirdId) > -1) {
                        immediateMatch.attented = true;
                    } else {
                        immediateMatch.attented = false;
                    }
                }
                //时间
                timeFlag = $scope.getMatchTimeFlag(immediateMatch, timeFilterValue);
                //比分
                scoreFlag = $scope.getMatchScoreFlag(immediateMatch, scoreFilterValue);
                //红牌
                redCardFlag = $scope.getMatchRedCardFlag(immediateMatch, redCardFilterValue);

                if (timeFlag && scoreFlag && redCardFlag) {//三个条件同时满足条件
                    tempImmediateMatches.push(immediateMatch);
                }
            }
            return tempImmediateMatches;
        }

//获取根据状态筛选后的赛果数据
        $scope.getResultMatchesFilterByState = function (scoreFilterValue, redCardFilterValue) {
            var attentionThirdIdArr = $scope.getAttentionThirdIdArrFromCookie();
            var tempResultMatches = [];
            var resultMatch = null;
            var scoreFlag = false;
            var redCardFlag = false;
            for (var key in $scope.resultMatchesBak) {
                resultMatch = $scope.resultMatchesBak[key];
                if (resultMatch.dataType && resultMatch.dataType == "0") {
                    //判断下tempResultMatches中的数目, 第一次进入，值为0，如果为1，那么表示上一日期下没有赛事。则删除
                    if(tempResultMatches.length === 1) {
                        tempResultMatches = [];
                    }
                    tempResultMatches.push(resultMatch);
                    continue;
                }
                if (attentionThirdIdArr != null) {
                    if (attentionThirdIdArr.indexOf(resultMatch.thirdId) > -1) {
                        resultMatch.attented = true;
                    } else {
                        resultMatch.attented = false;
                    }
                }
                //比分
                scoreFlag = $scope.getMatchScoreFlag(resultMatch, scoreFilterValue);
                //红牌
                redCardFlag = $scope.getMatchRedCardFlag(resultMatch, redCardFilterValue);

                if (scoreFlag && redCardFlag) {
                    tempResultMatches.push(resultMatch);
                }
            }
            if(tempResultMatches.length === 1) {
                tempResultMatches = [];
            }
            if(tempResultMatches.length > 1) {
                if(tempResultMatches[tempResultMatches.length -1].dataType == "0") {
                    tempResultMatches.splice(tempResultMatches.length -1, 1);
                }
            }
            return tempResultMatches;
        };

        $scope.getMatchTimeFlag = function (match, timeFilterValue) {
            var keepTime = 0;
            var timeFlag = false;
            if (match.keepTime != null) {
                if (angular.isNumber(match.keepTime)) {
                    keepTime = parseInt(match.keepTime);
                } else {
                    keepTime = parseInt(match.keepTime.replace("+", ""));
                }
            }

            if (timeFilterValue == "80") {//80分钟后
                timeFlag = (keepTime > 80);
            } else if (timeFilterValue == "45") {
                timeFlag = (keepTime > 45 || match.statusOrigin == "2" || match.statusOrigin == "2");
            } else if (timeFilterValue == "0") {
                timeFlag = (keepTime > 0);
            } else {
                timeFlag = true;
            }
            return timeFlag;
        }

        $scope.getMatchScoreFlag = function (match, scoreFilterValue) {
            var scoreFlag = false;
            var scoreArr = 0;
            var absoluteScore = -1;
            if (match.fullScore != null) {
                scoreArr = match.fullScore.split("-");
                absoluteScore = Math.abs(parseInt(scoreArr[0]) - parseInt(scoreArr[1]));
            }
            if (scoreFilterValue == "2") {//>=2
                scoreFlag = (absoluteScore >= scoreFilterValue);
            } else if (scoreFilterValue == "1") {//==1
                scoreFlag = (absoluteScore == 1);
            } else if (scoreFilterValue == "0") {//==0
                scoreFlag = (absoluteScore == 0);
            } else {
                scoreFlag = true;
            }
            return scoreFlag;
        }

        $scope.getMatchRedCardFlag = function (match, redCardFilterValue) {
            var redCardFlag = false;
            var homeRedCardCount = 0;
            var guestRedCardCount = 0;
            if (match.home_rc != null && match.home_rc != "") {
                homeRedCardCount = parseInt(match.home_rc);
            }
            if (match.guest_rc != null && match.guest_rc != "") {
                guestRedCardCount = parseInt(match.guest_rc);
            }
            if (redCardFilterValue == "1") {
                redCardFlag = (homeRedCardCount + guestRedCardCount > 0);
            } else if (redCardFilterValue == "0") {
                redCardFlag = (homeRedCardCount + guestRedCardCount == 0);
            } else {
                redCardFlag = true;
            }
            return redCardFlag;
        }

        $scope.timeDivClick = function ($event) {
            $scope.resultDayWeeks = ResultServiceFactory.getDayWeeks($scope);
            angular.element($("html")).addClass("body_h");
            angular.element($("body")).addClass("body_h");
            angular.element($("#day_time")).addClass("show");
            angular.element($("#day_div")).addClass("show");
        }

//赛果具体日期选择,并根据其获取对应的赛事列表
        $scope.dayTimeLiClick = function ($event) {
            $scope.loadingImg = true;
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#day_time")).removeClass("show");
            angular.element($("#day_div")).removeClass("show");
            //获取赛果列表
            var date = $event.currentTarget.getAttribute("day");
            $scope.resultMatches = [];
            $scope.resultMatchesBak = [];
            ResultServiceFactory.loadResultMatchData($scope, $cookieStore, date, false);
            $scope.removeObjectFromLocalStorage("resultLastFilterType");
            $scope.removeObjectFromSessionStorage("checkedResultRaceIdList");
            $scope.removeObjectFromSessionStorage("resultTodayHasCheckRaceId");
            $scope.initScroll();
            $scope.initGameFilter();
        }

        $scope.dayDivClick = function ($event) {
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#day_time")).removeClass("show");
            angular.element($("#day_time2")).removeClass("show");
            angular.element($("#day_div")).removeClass("show");
        }

        $scope.timeDiv2Click = function ($event) {
            $scope.scheduleDayWeeks = ScheduleServiceFactory.getDayWeeks($scope);
            angular.element($("html")).addClass("body_h");
            angular.element($("body")).addClass("body_h");
            angular.element($("#day_time2")).addClass("show");
            angular.element($("#day_div")).addClass("show");
        }

//赛程具体日期选择，并根据其获取对应的赛事列表
        $scope.dayTime2LiClick = function ($event) {
            $scope.loadingImg = true;
            angular.element($("html")).removeClass("body_h");
            angular.element($("body")).removeClass("body_h");
            angular.element($("#day_time2")).removeClass("show");
            angular.element($("#day_div")).removeClass("show");
            var date = $event.currentTarget.getAttribute("day");
            //获取赛程列表
            $scope.scheduleMatchDatas = [];
            $scope.scheduleMatchDatasBak = [];
            ScheduleServiceFactory.loadScheduleMatchData($scope, $cookieStore, date, false);
            $scope.removeObjectFromSessionStorage("checkedScheduleRaceIdList");
            $scope.removeObjectFromSessionStorage("scheduleTodayHasCheckRaceId");
            $scope.initScroll();
            $scope.initGameFilter();

        }

        $scope.promptButtonClick = function ($event) {
            $scope.promptOnlyForAttention = !$scope.promptOnlyForAttention;
        }

        $(".screening-select").click(function () {
            var _parent = $(this);
            var _postX = _parent.position().left;
            _parent.siblings(".screening-select").removeClass("current");
            _parent.addClass("current");
            _parent.siblings(".project-screening-yellow").animate({width: _postX}, 300);
            _parent.siblings(".select-1-yellow").animate({left: _postX - 5}, 300);
            _parent.prevAll(".screening-select").css("background", "none");
            _parent.nextAll().removeAttr("style");
        });

        /*获取筛选框的高度*/
        function setheight() {
            var sidebar = document.getElementById('game_box');
            sidebar.style.height = document.documentElement.clientHeight - 95 + 'px';
            var sidebar = document.getElementById('scr_state');
            sidebar.style.height = document.documentElement.clientHeight - 100 + 'px';
            var sidebar = document.getElementById('set_box');
            sidebar.style.height = document.documentElement.clientHeight - 50 + 'px';
            var sidebar = document.getElementById('live_bd1');
            sidebar.style.minHeight = document.documentElement.clientHeight - 100 + 'px';
            var sidebar = document.getElementById('live_bd2');
            sidebar.style.minHeight = document.documentElement.clientHeight - 100 + 'px';
            var sidebar = document.getElementById('live_bd3');
            sidebar.style.minHeight = document.documentElement.clientHeight - 100 + 'px';
            var sidebar = document.getElementById('live_bd4');
            sidebar.style.minHeight = document.documentElement.clientHeight - 100 + 'px';
        }

//从cookie中获取关注比赛id数组
        $scope.getAttentionThirdIdArrFromCookie = function () {
            var attentionThirdIds = $scope.getObjectFromLocalStorage("attentionThirdIds");
            var attentionThirdIdArr = null;
            if (attentionThirdIds != null) {
                attentionThirdIdArr = attentionThirdIds.split(",");
            }
            return attentionThirdIdArr;
        }

        $scope.loadAttentionMatchCountFromCookie = function () {
            var attentionMatchCount = $scope.getObjectFromLocalStorage("attentionMatchCount");
            if (attentionMatchCount == null) {
                attentionMatchCount = 0;
            } else {
                attentionMatchCount = parseInt(attentionMatchCount);
            }
            $scope.attentionMatchCount = attentionMatchCount;
            if (attentionMatchCount == 0) {
                $scope.showAttentionMatchCount = false;
            } else {
                $scope.showAttentionMatchCount = true;
            }
        }

        setheight();
        var onresize = setheight;

        $scope.addShoping = function (e) {

            var self = this,
                $shop = $('.J-shoping'),
            //$title=$('.J-shoping-title'),
                $body = $('.J-shoping-body'),
                $num = $('.J-shoping-num'),
                $close = $('.J-shoping-close');
            e.stopPropagation();
            var $target = $(e.target);
            var id = $target.attr('id');
            var dis = $target.attr('isClicked');
            var thirdId = $target.attr("thirdId");
            var x = $target.offset().left - 25,
                y = $target.offset().top + 20,
                X = $shop.offset().left + $shop.width() / 2 - $target.width() / 2 + 10,
                Y = $shop.offset().top;
            var attentionThirdIds = $scope.getObjectFromLocalStorage("attentionThirdIds");
            var attentionMatchCount = $scope.getObjectFromLocalStorage("attentionMatchCount");
            var count = 0;
            if (attentionMatchCount != null) {
                count = parseInt(attentionMatchCount);
            }
            if (dis == "false" || dis == "") {
                var attentionThirdIdArr = [];
                if (attentionThirdIds == null) {
                    attentionThirdIdArr.push(thirdId);
                    $scope.putObjectToLocalStorage("attentionThirdIds", thirdId + ",");
                    $scope.putObjectToLocalStorage("attentionMatchCount", ++count);
                } else {
                    attentionThirdIdArr = attentionThirdIds.split(",");
                    if (attentionThirdIdArr.indexOf(thirdId) == -1) {
                        if (count < maxAttentionMatchCount) {
                            $scope.putObjectToLocalStorage("attentionThirdIds", attentionThirdIds + thirdId + ",");
                            $scope.putObjectToLocalStorage("attentionMatchCount", ++count);
                        } else {
                            $scope.maxAttentionMatchesCountWarn = true;
                            if ($scope.attentionWarnTimeout != null) {
                                $timeout.cancel($scope.attentionWarnTimeout);
                            }
                            $scope.attentionWarnTimeout = $timeout(function () {
                                $scope.maxAttentionMatchesCountWarn = false;
                            }, 3000);
                            return;
                        }
                    }
                }
                $target.attr('isClicked', true);
                $target.addClass('coll_slt');
                $scope.attentionMatchCount = count;
                $scope.showAttentionMatchCount = true;
                if ($('#floatOrder').length <= 0) {
                    $('body').append('<div id="floatOrder"><img src="/images/xingxing.png" width="30" height="28" /></div>');
                }

                var $obj = $('#floatOrder');
                if (!$obj.is(':animated')) {
                    $obj.css({'left': x, 'top': y}).animate({'left': X, 'top': Y - 25}, 370, function () {
                        $obj.stop(false, false).animate({'top': Y - 20, 'opacity': 0}, 370, function () {
                            $obj.fadeOut(100, function () {
                                $obj.remove();
                                //$target.attr('isClicked', true);
                                //$target.addClass('coll_slt');
                                //var l = $('.J-shoping-list').length;
                                //    //num = Number($num.text());
                                if (l < 5) {
                                    //$body.prepend('<div class="J-shoping-list" data-id="' + 10 + '"><a href="#"title=""><img src="../../images/xingxing.png" width="30" height="28" /></a></div>');
                                }
                                //$num.text(num + 1);
                                //$scope.toggleAttentionClicked();
                            });
                        });
                    });
                }
            } else {
                if (attentionThirdIds != null) {
                    attentionThirdIds = attentionThirdIds.replace(thirdId + ",", "");
                    $scope.putObjectToLocalStorage("attentionThirdIds", attentionThirdIds);
                    $scope.putObjectToLocalStorage("attentionMatchCount", --count);
                }

                $target.removeClass('coll_slt');
                var l = $('.J-shoping-list').length;
                if (count == 0) {
                    $scope.showAttentionMatchCount = false;
                    if ($scope.tabActiveIndex == 3) {
                        $scope.noAttentionMatches = true;
                    }
                }
                if (count < maxAttentionMatchCount) {
                    $scope.maxAttentionMatchesCountWarn = false;
                }
                $scope.attentionMatchCount = count;
                var helperArray = [];
                for (var i in $scope.attentionMatches) {
                    if ($scope.attentionMatches[i].thirdId != thirdId) {
                        helperArray.push($scope.attentionMatches[i]);
                    }
                }
                $scope.attentionMatches = helperArray;

                $target.attr('isClicked', false);
            }
        }

        $scope.attentionWarnCloseClick = function ($event) {
            $scope.maxAttentionMatchesCountWarn = false;
        }

//时间筛选
        $scope.timeFilterClick = function ($event) {
            var timeFilterValue = $scope.getRadioCheckedValue($event, "radio_box1");
            $scope.timeFilterValue = timeFilterValue;
        };

//比分筛选
        $scope.scoreFilterClick = function ($event) {
            var scoreFilterValue = $scope.getRadioCheckedValue($event, "radio_box2");
            $scope.scoreFilterValue = scoreFilterValue;
        }

//红牌筛选
        $scope.redCardFilterClick = function ($event) {
            var redCardFilterValue = $scope.getRadioCheckedValue($event, "radio_box3");
            $scope.redCardFilterValue = redCardFilterValue;
        }

//赔率设置
        $scope.oddsFilterClick = function ($event) {
            var oddsFilterValue = $scope.getRadioCheckedValue($event, "radio_box4");
            $scope.oddsFilterValue = oddsFilterValue;
        }

//从cookie中获取赔率显示设置
        $scope.getOddsFilterCookieValue = function () {
            var cookieId = "oddsFilterValue";
            //if ($scope.tabActiveIndex == 0) {
            //    cookieId = "immediateOddsFilterValue";
            //} else if ($scope.tabActiveIndex == 1) {
            //    cookieId = "resultOddsFilterValue";
            //} else if ($scope.tabActiveIndex == 2) {
            //    cookieId = "scheduleOddsFilterValue";
            //} else if ($scope.tabActiveIndex == 3) {
            //    cookieId = "attentionOddsFilterValue";
            //}
            var oddsFilterValue = null;
            if (cookieId != null) {
                oddsFilterValue = $scope.getObjectFromLocalStorage(cookieId);
            }
            return oddsFilterValue;
        }

//时间、比分、红牌筛选公用获取当前选中radio的value值方法
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

//设置确定提交
        $scope.setSubmit = function ($event) {
            angular.element($(".nav-menus")).removeClass("nav_hidden").addClass("nav_show");
            $scope.putObjectToLocalStorage("oddsFilterValue", $scope.oddsFilterValue);
            $scope.putObjectToLocalStorage(goalSoundCookieId, $scope.goalSound);
            $scope.putObjectToLocalStorage("homeTeamGoalSound", $scope.homeTeamGoalSound);
            $scope.putObjectToLocalStorage("guestTeamGoalSound", $scope.guestTeamGoalSound);
            $scope.putObjectToLocalStorage("promptOnlyForAttention", $scope.promptOnlyForAttention);
            $scope.putObjectToLocalStorage(redCardSoundCookieId, $scope.redCardSound);

            //刷新当前比赛页面
            $scope.initMatchData($scope.tabActiveIndex);

            //关闭弹窗
            $scope.filterCancelClick($event);
        }

        $scope.eventDomChange = function (thirdId, eventType) {
            var box = angular.element($("#" + thirdId));
            if (box) {
                //box.toggleClass("goal_bg");
                box.removeClass("goal_bg");
                if (eventType >= 1 && eventType <= 4 ) { // 1-4 为主队
                    var home = angular.element($("#" + thirdId + " [hometeam]"));
                    if (home) {
                        home.removeClass("f_red");
                    }
                } else if (eventType >= 5 && eventType <= 8) { // 5-8 为客队
                    var guest = angular.element($("#" + thirdId + " [guestteam]"));
                    if (guest) {
                        guest.removeClass("f_red");
                    }
                }
            }
        };

        //获取指定日期对应为周几
        $scope.initWeekI18n = function() {
            $translate(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'ERROR_DAY']).then(
                function (translations) {
                    $scope.getWeek = function (date) {
                        var myxingqi = date.getDay();
                        var text = "";
                        switch (myxingqi) {
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
        };
    }
])

/**
 * Created by lenovoa on 2015/9/7.
 */


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

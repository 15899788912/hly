/**
 * Created by jeff on 2016/9/18.
 *
 * to-do :
 *  1. 获取语言为什么加上International...
 *
 */

var third = {};
third.appInfo = {
  appid : "",
  secret : "",
  weixinAppId : "wx7819ec8fd6b8005a",
  weixinSecret: "d4624c36b6795d1d99dcf0547af5443d",
  weixinAuthUrl : "https://open.weixin.qq.com/connect/oauth2/authorize?appid=[APPID]&redirect_uri=[REDIRECT_URI]&response_type=code&scope=SCOPE&state=STATE#wechat_redirect",
  tokenUrl : "https://api.weixin.qq.com/sns/oauth2/access_token?appid=[APPID]&secret=[SECRET]&code=[CODE]&grant_type=authorization_code "
}
/** 微信登录**/
third.getWeixinOpenId = function(){
  //本地是否有openid,有直接用,否则请求...
  var openid = window.localStorage.getItem("weixinOpenid") || "";
  if (openid == "") {
    this.weixinRequest();
  } else {
    return openid;
  }
}
this.weixinRequest = function(){
    var code = this.getQueryString("code") || "";
    if (code == "") {
      var redirect_url = window.location.href;
      var codeUrl = this.appInfo.weixinAuthUrl.replace("[APPID]",this.appInfo.weixinAppId)
        .replace("[REDIRECT_URI",redirect_url);
      window.location.href = codeUrl;
    } else {
      var tokenUrl = this.appInfo.weixinAuthUrl.replace("[APPID]",this.appInfo.weixinAppId)
                                                .replace("[SECRET]",this.appInfo.weixinSecret)
                                                 .replace("[CODE]",code);
      var requestUrl = "http://localhost:8080/mp/access_token?appid="+this.appInfo.weixinAPPId
                                                              +"&secret="+this.appInfo.weixinSecret
                                                              +"&code="+code;
      $.ajax({
        url:requestUrl,
        method : "GET",
        success: function(data){
          // console.log("data:");
        },
        fail : function(err) {
          // console.log("err:");
        }
      })
    }
}

this.getQueryString = function (name) {
  var params = {},
    e,
    a = /\+/g,  // Regex for replacing addition symbol with a space
    r = /([^&=]+)=?([^&]*)/g,
    d = function (s) {
      return decodeURIComponent(s.replace(a, " "));
    },
    q = window.location.search.substring(1);

  while (e = r.exec(q))
    params[d(e[1])] = d(e[2]);

  return params;
//}
  //if (!this.queryStringParams)
  //  this.queryStringParams = parseParams();
  //
  //return this.queryStringParams[name];
}

/**
 * @国际化配置.
 * @type {Array}
 */

var backend_i18n = {
  zh : {
    "e1":"系统错误",
    "e2" : "传递参数有误",
    "e3" : "没有对应的协议",
    "e4" : "邮箱格式错误",
    "e5" : "该邮箱已注册",
    "e6" : "验证码错误",
    "e7" : "该用户已激活",
    "e8" : "验证码已失效",
    "e9" : "该手机号已注册",
    "e10" : "两次发送间隔不得小于60秒",
    "e11" : "登录名或者密码错误",
    "e12" : "手机号码不合法",
    "e13" : "用户不存在",
    "e14" : "短信发送失败",
    "e15" : "该昵称已存在",
    "e16" : "用户名已存在",
    "e17" : "登录账号错误",
    "e18" : "平台不存在",
    "e19" : "操作类型不存在",
    "e20" : "获取qq用户信息失败",
    "e21" : "获取微博用户信息失败",
    "e22" : "该用户未登录",
    "e25" : "同一手机号每天只能发送5次短信",
    "e41" : "真实姓名错误",
    "e42" : "身份证格式错误",
    "e43" : "密码错误",
    "e70" : "包含敏感词汇",
    "e500" : "后台报错"
  },
  zh_hans: {
    "e1" :"系統錯誤" ,
    "e2" :"傳遞參數有誤" ,
    "e3" :"沒有對應的協定" ,
    "e4" :"郵箱格式錯誤" ,
    "e5" :"該郵箱已注册" ,
    "e6" :"驗證碼錯誤" ,
    "e7" :"該用戶已啟動" ,
    "e8" :"驗證碼已失效" ,
    "e9" :"該手機號已注册" ,
    "e10" :"兩次發送間隔不得小於60秒" ,
    "e11" :"登錄名或者密碼錯誤" ,
    "e12" :"手機號碼不合法" ,
    "e13" :"用戶不存在" ,
    "e14" :"短信發送失敗" ,
    "e15" :"該昵稱已存在" ,
    "e16" :"用戶名已存在" ,
    "e17" :"登入帳號錯誤" ,
    "e18" :"平臺不存在" ,
    "e19" :"操作類型不存在" ,
    "e20" :"獲取qq用戶資訊失敗" ,
    "e21" :"獲取微博用戶資訊失敗" ,
    "e22" :"該用戶未登錄" ,
    "e25" :"同一手機號每天只能發送5次簡訊" ,
    "e41" :"真實姓名錯誤" ,
    "e42" :"身份證格式錯誤" ,
    "e43" :"密碼錯誤" ,
    "e70" :"包含敏感詞彙" ,
    "e500" :"後臺報錯"
  },
  zh_TW : {
    "e1" :"系統錯誤" ,
    "e2" :"傳遞參數有誤" ,
    "e3" :"沒有對應的協定" ,
    "e4" :"郵箱格式錯誤" ,
    "e5" :"該郵箱已注册" ,
    "e6" :"驗證碼錯誤" ,
    "e7" :"該用戶已啟動" ,
    "e8" :"驗證碼已失效" ,
    "e9" :"該手機號已注册" ,
    "e10" :"兩次發送間隔不得小於60秒" ,
    "e11" :"登錄名或者密碼錯誤" ,
    "e12" :"手機號碼不合法" ,
    "e13" :"用戶不存在" ,
    "e14" :"短信發送失敗" ,
    "e15" :"該昵稱已存在" ,
    "e16" :"用戶名已存在" ,
    "e17" :"登入帳號錯誤" ,
    "e18" :"平臺不存在" ,
    "e19" :"操作類型不存在" ,
    "e20" :"獲取qq用戶資訊失敗" ,
    "e21" :"獲取微博用戶資訊失敗" ,
    "e22" :"該用戶未登錄" ,
    "e25" :"同一手機號每天只能發送5次簡訊" ,
    "e41" :"真實姓名錯誤" ,
    "e42" :"身份證格式錯誤" ,
    "e43" :"密碼錯誤" ,
    "e70" :"包含敏感詞彙" ,
    "e500" :"後臺報錯"
  },
  th : {
    "e1" :"ระบบผิดพลาด" ,
    "e2" :"Parameter Passing ผิดพลาด" ,
    "e3" :"ไม่มีความสอดคล้องของข้อตกลง" ,
    "e4" :"รูปแบบอีเมล์ผิดพลาด" ,
    "e5" :"อีเมล์นี้ลงทะเบียนแล้ว" ,
    "e6" :"รหัสยืนยันผิดพลาด" ,
    "e7" :"ผู้ใช้เปิดใช้งานแล้ว" ,
    "e8" :"รหัสยืนยันหมดอาย" ,
    "e9" :"หมายเลโทรศัพท์นี้ลงทะเบียนแล้ว" ,
    "e10" :"ช่วงระยะห่างในการส่ง2ครั้งห้ามน้อยกว่า60วินาที" ,
    "e11" :"ชื่อล็อกอินหรือรหัสผ่านผิดพลาด" ,
    "e12" :"หมายเลขโทรศัพท์ไม่ถูกต้อง" ,
    "e13" :"ไม่มีชื่อผู้ใช้" ,
    "e14" :"ส่งSMS ล้มเหลว" ,
    "e15" :"ชื่อเล่นนี้มีผู้ใช้ไปแล้ว" ,
    "e16" :"ชื่อผู้ใช้นี้มีผู้ใช้ไปแล้ว" ,
    "e17" :"ล็อกอินบัญชีผิดพลาด" ,
    "e18" :"ไม่มีแพลตฟอร์มนี้อยู" ,
    "e19" :"ไม่มีการดำเนินงานประเภทนี" ,
    "e20" :"รับข้อมูลข่าวสารผู้ใช้qqล้มเหลว" ,
    "e21" :"รับข้อมูลข่าวสารผู้ใช้wechatล้มเหลว" ,
    "e22" :"ยังไม่ได้ล็อกอินผู้ใช" ,
    "e25" :"ภายในทุกวันหนึ่งหมายเลขโทรศัพท์สามารถส่งได้เพียง5ข้อความ" ,
    "e41" :"ชื่อนามสกุลจริงผิดพลาด" ,
    "e42" :"รูปแบบรหัสประชาชนผิดพลาด" ,
    "e43" :"รหัสผ่านผิดพลาด" ,
    "e70" :"รวมถึงคำศัพท" ,
    "e500" :"ระบบหลังบ้านผิดพลาด"
  },
  en : {
    "e1" :"System error" ,
    "e2" :"Pass parameter error" ,
    "e3" :"No corresponding agreement" ,
    "e4" :"Email format error" ,
    "e5" :"Email exists" ,
    "e6" :"Verification code error" ,
    "e7" :"The user has been activated" ,
    "e8" :"Invalid verification code" ,
    "e9" :"The telephone number has been registered" ,
    "e10" :"Sending interval no less than 60s" ,
    "e11" :"Username or password error" ,
    "e12" :"Illegal telephone number" ,
    "e13" :"User does not exist" ,
    "e14" :"Send short message failed" ,
    "e15" :"The nickname exists" ,
    "e16" :"The username exists" ,
    "e17" :"Account error" ,
    "e18" :"Platform does not exist" ,
    "e19" :"Operation type does not exist" ,
    "e20" :"Get QQ user information failed" ,
    "e21" :"Get Weibo user information failed" ,
    "e22" :"The user has not logged in" ,
    "e25" :"One telephone number can send only five short massages per day" ,
    "e41" :"Real name error" ,
    "e42" :"ID format error" ,
    "e43" :"Password error" ,
    "e70" :"Contain sensitive vocabulary" ,
    "e500" :"Background error"
  },
  vi : {
    "e1":"Lỗi hệ thống",
    "e2" : "Lỗi truyền tham số",
    "e3" : "Không có giao thức tương ứng",
    "e4" : "Định dạng hòm thư sai",
    "e5" : "Hòm thư này đã đăng ký",
    "e6" : "Mã xác minh sai",
    "e7" : "Người dùng này đã kích hoạt",
    "e8" : "Mã xác minh không hiệu lực",
    "e9" : "Số di động này đã đăng ký",
    "e10" : "2 lần gửi cách nhau không ít hơn 60 giây",
    "e11" : "Tên đăng nhập hoặc mật mã sai",
    "e12" : "Số di động không hợp lệ",
    "e13" : "Không tồn tại người dùng này",
    "e14" : "Gửi tin nhắn thất bại",
    "e15" : "Biệt danh này đã tồn tại",
    "e16" : "Tên người dùng đã tồn tại",
    "e17" : "Số tài khoản đăng nhập sai",
    "e18" : "Số tài khoản đăng nhập sai",
    "e19" : "Phân loại thao tác không tồn tại",
    "e20" : "Thu thập thông tin người dùng QQ thất bại",
    "e21" : "Thu thập thông tin người dùng Wechat thất bại",
    "e22" : "Người dùng này chưa đăng nhập",
    "e25" : "1 số di động chỉ được gửi 5 tin nhắn 1 ngày",
    "e41" : "Họ tên thật sai",
    "e42" : "Định dạng CMTND sai",
    "e43" : "Mật mã sai",
    "e70" : "Có từ ngữ nhạy cảm",
    "e500" : "Background báo lỗi"
  }
}
var account_i18n = {
  "zh" : {

    "HEAD_TITLE" : "账户",
    "DATABASE_KEYWORDS" : "账户",
    "DATABASE_DESCRIPTION" : "账户",
    "login" : {
      "login_account" : "请输入手机号",
      "login_gw_account" : "请输入用户名",
      "login_login" : "登录",
      "login_reg" : "注册",
      "login_password" : "6-16 位字符,区分大小写",
      "login_tip_password" : "请输入密码",
      "login_find" : "忘记密码",
      "login_third" : "社交账号快速登录",
      "login_success" : "登录成功",
      "login_fail" : "登录失败",
      "login_exception" : "登录请求异常"
    },
    "reg" : {
      "reg_account" : "请输入手机号",
      "reg_gw_account" : "请输入用户名",
      "reg_sms" : "请输入验证码",
      "reg_password" : "请输入密码",
      "reg_getSMS" : "获取验证码",
      "reg_reg" : "注册",
      "reg_login" : "登录",
      "reg_sms_sent" : "短信已发",
      "reg_sms_err" : "短信发送失败",
      "reg_code_error" : "获取验证码失败",
      "reg_success" : "注册成功",
      "reg_fail" : "注册失败",
      "reg_excpetion" : "注册请求异常",
      "reg_password_error" : "密码中含有非法字符,请修改",
      "reg_sms_exception" : "短信接口请求异常",
    },
    "find" : {
      "find_find" : "找回密码",
      "find_account" : "请输入手机号",
      "find_code" : "请输入验证码",
      "find_fcode" : "获取验证码",
      "find_password" : "请输入密码",
      "find_submit" : "修改密码",
      "find_success" : 	"修改密码成功",
      "find_fail" :	"修改密码失败",
      "find_exception" :	"修改密码请求异常"
    }
  },
  zh_hans : {

    "HEAD_TITLE" : "賬戶",
    "DATABASE_KEYWORDS" : "賬戶",
    "DATABASE_DESCRIPTION" : "賬戶",
    "login":{
      "login_account":"請輸入手機號",
      "login_gw_account":"請輸入用戶名",
      "login_login":"登入",
      "login_reg":"注册",
      "login_password":"6-16比特字元,區分大小寫",
      "login_tip_password":"請輸入密碼",
      "login_find":"忘記密碼",
      "login_third":"社交帳號快速登錄",
      "login_success":"登入成功",
      "login_fail":"登入失敗",
      "login_exception":"登入請求异常"
    },
    "reg":{
      "reg_account":"請輸入手機號",
      "reg_gw_account":"請輸入用戶名",
      "reg_sms":"請輸入驗證碼",
      "reg_password":"請輸入密碼",
      "reg_getSMS":"獲取驗證碼",
      "reg_reg":"注册",
      "reg_login":"登入",
      "reg_sms_sent":"簡訊已發",
      "reg_sms_err":"短信發送失敗",
      "reg_code_error" : "获取验证码失败",
      "reg_success" : "注册成功",
      "reg_fail" : "注册失敗",
      "reg_excpetion" : "注册請求异常",
      "reg_password_error" : "密碼中含有非法字元，請修改",
      "reg_sms_exception" : "簡訊介面請求异常",
    },
    "find":{
      "find_find":"找回密碼",
      "find_account":"請輸入手機號",
      "find_code":"請輸入驗證碼",
      "find_fcode":"獲取驗證碼",
      "find_password":"請輸入密碼",
      "find_submit":"修改密碼",
      "find_success" : 	"修改密碼成功",
      "find_fail" :	"修改密碼失敗",
      "find_exception" :	"修改密碼請求异常"
    }
  },
  zh_TW : {

    "HEAD_TITLE" : "賬戶",
    "DATABASE_KEYWORDS" : "賬戶",
    "DATABASE_DESCRIPTION" : "賬戶",
    "login":{
      "login_account":"請輸入手機號",
      "login_gw_account":"請輸入用戶名",
      "login_login":"登入",
      "login_reg":"注册",
      "login_password":"6-16比特字元,區分大小寫",
      "login_tip_password":"請輸入密碼",
      "login_find":"忘記密碼",
      "login_third":"社交帳號快速登錄",
      "login_success":"登入成功",
      "login_fail":"登入失敗",
      "login_exception":"登入請求异常"
    },
    "reg":{
      "reg_account":"請輸入手機號",
      "reg_gw_account":"請輸入用戶名",
      "reg_sms":"請輸入驗證碼",
      "reg_password":"請輸入密碼",
      "reg_getSMS":"獲取驗證碼",
      "reg_reg":"注册",
      "reg_login":"登入",
      "reg_sms_sent":"簡訊已發",
      "reg_sms_err":"短信發送失敗",
      "reg_code_error":"獲取驗證碼失敗",
      "reg_success":"注册成功",
      "reg_password_error":"密碼中含有非法字元,請修改"
    },
    "find":{
      "find_find":"找回密碼",
      "find_account":"請輸入手機號",
      "find_code":"請輸入驗證碼",
      "find_fcode":"獲取驗證碼",
      "find_password":"請輸入密碼",
      "find_submit":"修改密碼",
      "find_success" : 	"修改密碼成功",
      "find_fail" :	"修改密碼失敗",
      "find_exception" :	"修改密碼請求异常"
    }
  },
  en : {
    "HEAD_TITLE" : "Account",
    "DATABASE_KEYWORDS" : "Account",
    "DATABASE_DESCRIPTION" : "Account",
    "login" : {
      "login_account" : "Enter mobile phone number",
      "login_gw_account" : "Enter username",
      "login_login" : "Login",
      "login_reg" : "Register",
      "login_password" : "6-16 characters, case sensitive",
      "login_tip_password" : "Enter password",
      "login_find" : "Forget password",
      "login_third" : "Social account login",
      "login_success" : "Login successfully",
      "login_fail" : "Login failed",
      "login_exception" : "Login request abnormal"
    },
    "reg" : {
      "reg_account" : "Enter mobile phone number",
      "reg_gw_account" : "Enter username",
      "reg_sms" : "Enter verification code",
      "reg_password" : "Enter password",
      "reg_getSMS" : "Get verification code",
      "reg_reg" : "Register",
      "reg_login" : "Login",
      "reg_sms_sent" : "SMS has been sent",
      "reg_sms_err" : "Send SMS failed",
      "reg_code_error" : "Get verification code failed",
      "reg_success" : "Register successfully",
      "reg_fail" : "Register failed",
      "reg_excpetion" : "Register request exception",
      "reg_password_error" : "Password contains illegal characters, please modify",
      "reg_sms_exception" : "Short message port request exception",
    },
    "find" : {
      "find_find" : "Forget password",
      "find_account" : "Enter mobile phone number",
      "find_code" : "Enter verification code",
      "find_fcode" : "Get verification code",
      "find_password" : "Enter password",
      "find_submit" : "Modify password",
      "find_success" : 	"Modify password successfully",
      "find_fail" :	"Modify password failed",
      "find_exception" :	"Modify password request exception"
    }
  },
  th : {
    "HEAD_TITLE" : "บัญช",   //賬號是：หมายเลขบัญชี
    "DATABASE_KEYWORDS" : "บัญช",
    "DATABASE_DESCRIPTION" : "บัญช",
    "login" : {
      "login_account" : "กรุณาป้อนหมายเลขโทรศัพท",
      "login_gw_account" : "กรุณาป้อนชื่อผู้ใช",
      "login_login" : "ล็อกอิน",
      "login_reg" : "ลงทะเบียน",
      "login_password" : "6-16 ตัวอักษร,แบ่งเป็นตัวอักษรใหญ่และเล็ก",
      "login_tip_password" : "กรุณาป้อนรหัสผ่าน",
      "login_find" : "ลืมรหัสผ่าน",
      "login_third" : "ล็อกอินบัญชีโซเชียล",
      "login_success" : "ล็อกอินสำเร็จ",
      "login_fail" : "ล็อกอินล้มเหลว",
      "login_exception" : "คำร้องขอล็อกอินผิดปกต"
    },
    "reg" : {
      "reg_account" : "กรุณาป้อนหมายเลขโทรศัพท",
      "reg_gw_account" : "กรุณาป้อนชื่อผู้ใช",
      "reg_sms" : "กรุณาป้อนรหัสยืนยัน",
      "reg_password" : "กรุณาป้อนรหัสผ่าน",
      "reg_getSMS" : "รับรหัสยืนยัน",
      "reg_reg" : "ลงทะเบียน",
      "reg_login" : "ล็อกอิน",
      "reg_sms_sent" : "ส่งSMSเรียบร้อยแล้ว",
      "reg_sms_err" : "ส่งSMSล้มเหลว",
      "reg_code_error" : "รับรหัสยืนยันล้มเหลว",
      "reg_success" : "ลงทะเบียนสำเร็จ",
      "reg_fail" : "ลงทะเบียนล้มเหลว",
      "reg_excpetion" : "คำร้องขอลงทะเบียนผิดปกต",
      "reg_password_error" : "รหัสผ่านมีตัวอักษรผิด，กรุณาแก้ไข",
      "reg_sms_exception" : "หน้าต่างร้องขอSMSผิดปกต",
    },
    "find" : {
      "find_find" : "กู้คืนรหัสผ่าน",
      "find_account" : "กรุณาป้อนหมายเลขโทรศัพท",
      "find_code" : "กรุณาป้อนรหัสยืนยัน",
      "find_fcode" : "รับรหัสยืนยัน",
      "find_password" : "กรุณาป้อนรหัสผ่าน",
      "find_submit" : "แก้ไขรหัสผ่าน",
      "find_success" : 	"แก้ไขรหัสผ่านสำเร็จ",
      "find_fail" :	"แก้ไขรหัสผ่านล้มเหลว",
      "find_exception" :	"หน้าต่างแก้ไขรหัสผ่านผิดปกต"
    }
  },
  vi : {
    "HEAD_TITLE" : "Tài khoản",        //賬號是Số tài khoản
    "DATABASE_KEYWORDS" : "Tài khoản",
    "DATABASE_DESCRIPTION" : "Tài khoản",
    "login" : {
      "login_account" : "Mời nhập số di động",
      "login_gw_account" : "Mời nhập tên người dùng",
      "login_login" : "Đăng nhập",
      "login_reg" : "Đăng ký",
      "login_password" : "Gồm 6~16 ký tự, phân biệt HOA thường",
      "login_tip_password" : "Mời nhập mật mã",
      "login_find" : "Quên mật khẩu",
      "login_third" : "Đăng nhập nhanh bằng tài khoản mạng xã hội",
      "login_success" : "Đăng nhập thành công",
      "login_fail" : "Đăng nhập thất bại",
      "login_exception" : "Sự cố yêu cầu đăng nhập"
    },
    "reg" : {
      "reg_account" : "Mời nhập vào số di động",
      "reg_gw_account" : "Mời nhập vào tên người dùng",
      "reg_sms" : "Mời nhập vào mã xác minh",
      "reg_password" : "Mời nhập vào mật mã",
      "reg_getSMS" : "Nhận mã xác minh",
      "reg_reg" : "Đăng ký",
      "reg_login" : "Đăng nhập",
      "reg_sms_sent" : "Đã gửi tin nhắn",
      "reg_sms_err" : "Gửi tin nhắn thất bại",
      "reg_code_error" : "Thu thập mã xác minh thất bại",
      "reg_success" : "Đăng ký thành công",
      "reg_fail" : "Đăng ký thất bại",
      "reg_excpetion" : "Sự cố yêu cầu đăng ký",
      "reg_password_error" : "Mật mã có ký tự không hợp lệ, mời sửa lại",
      "reg_sms_exception" : "Sự cố yêu cầu cổng tiếp nhận tin nhắn",
    },
    "find" : {
      "find_find" : "Tìm lại mật mã",
      "find_account" : "Mời nhập số di động",
      "find_code" : "Mời nhập mã xác minh",
      "find_fcode" : "Nhận mã xác minh",
      "find_password" : "Mời nhập mật mã",
      "find_submit" : "Sửa mật mã",
      "find_success" : 	"Sửa mật mã thành công ",
      "find_fail" :	"Sửa mật mã thất bại",
      "find_exception" :	"Sự cố cổng tiếp nối sửa mật mã"
    }
  }
};

var i18nConfig = ["$translateProvider", function ($translateProvider) {
  var pre_i18n = {
    zh : {
      "login" : {
        "login_account" : "请输入手机号",
        "login_gw_account" : "请输入用户名",
        "login_login" : "登录",
        "login_reg" : "注册",
        "login_password" : "6-16 位字符,区分大小写",
        "login_tip_password" : "请输入密码",
        "login_find" : "忘记密码",
        "login_third" : "社交账号快速登录"
      },
      "reg" : {
        "reg_account" : "请输入手机号",
        "reg_gw_account" : "请输入用户名",
        "reg_sms" : "请输入验证码",
        "reg_password" : "请输入密码",
        "reg_getSMS" : "获取验证码",
        "reg_reg" : "注册",
        "reg_login" : "登录",
        "reg_sms_sent" : "短信已发",
        "reg_sms_err" : "短信发送失败"
      },
      "find" : {
        "find_find" : "找回密码",
        "find_account" : "请输入手机号",
        "find_code" : "请输入验证码",
        "find_fcode" : "获取验证码",
        "find_password" : "请输入密码",
        "find_submit" : "修改密码"
      }
    },
    zh_hans : {},
    en : {
      "DATABASE_KEYWORDS" : "Register",
       "DATABASE_DESCRIPTION" : "Register",
      "login" : {
      "login_account" : "Enter mobile phone number",
      "login_gw_account" : "Enter username",
      "login_login" : "Login",
      "login_reg" : "Register",
      "login_password" : "6-16 characters, case sensitive",
      "login_tip_password" : "Enter password",
      "login_find" : "Forget password",
      "login_third" : "Social account login"
      },
      "reg" : {
        "reg_account" : "Enter mobile phone number",
        "reg_gw_account" : "Enter username",
        "reg_sms" : "Enter verification code",
        "reg_password" : "Enter password",
        "reg_getSMS" : "Get verification code",
        "reg_reg" : "Register",
        "reg_login" : "Login",
        "reg_sms_sent" : "SMS has been sent",
        "reg_sms_err" : "Send SMS failed"
      },
      "find" : {
        "find_find" : "找回密码",
        "find_account" : "Enter mobile phone number",
        "find_code" : "Enter verification code",
        "find_fcode" : "Get verification code",
        "find_password" : "Enter password",
        "find_submit" : "Modify password"
      }
    },
    th : {},
    vi : {}
  };
  $translateProvider.translations('zh', account_i18n.zh);
  $translateProvider.translations('zh-TW', account_i18n.zh_hans);
  $translateProvider.translations('en',account_i18n.en);
  $translateProvider.translations('th',account_i18n.th);
  $translateProvider.translations('vi',account_i18n.vi);

  $translateProvider.registerAvailableLanguageKeys(['zh', 'zh-TW','en','th','vi'], {
    'zh_CN': 'zh',
    'zh_TW': 'zh-TW',
    'zh_HK': 'zh-TW',
    'en_US':'en',
    'th':'th',
    'vi':'vi'
  });

  $translateProvider.useSanitizeValueStrategy(null);
  // try to find out preferred language by yourself
  //$translateProvider.determinePreferredLanguage();
  var language = window.localStorage.getItem("language");
  if (language == null) {
    language = defaultLanguageKey;
  }
  $translateProvider.preferredLanguage(language);
}];

/**
 * @路由配置
 * @type {*[]}
 */
var routerConfig =  ['$routeProvider', function ($routeProvider) {
  $routeProvider
    //.when("/account", {
    //  templateUrl: "../../views/account/account_template.html",
    //  controller: "accountCon"
    //})
    .when("/login",{
      templateUrl : "../../views/account/login_template.html",
      controller:"loginCon"
    })
    .when("/reg",{
      templateUrl : "../../views/account/reg_template.html",
      controller:"regCon"
    })
    .when("/find",{
      templateUrl : "../../views/account/find_template.html",
      controller: "findPasswordCon"
    })
    .otherwise({
      redirectTo: "/login"
    });
  }
];

/**
 * @desp loading directive
 */
var loadingDirective = [function() {
  return {
    restrict: 'E',
    controller: '$ionicSpinner',
    link: function($scope, $element, $attrs, ctrl) {
      //var spinnerName = ctrl.init();
      $element.addClass('spinner spinner-');
      $element.on('$destroy', function onDestroy() {
        ctrl.stop();
      });
    }
  };
}];

/**
 * @http post Peiz
 */
var postConfig = ['$httpProvider',function($httpProvider){
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
}]


/**
 * @账号服务
 * @type {*[]}
 */
var accountFactory = ['$resource','$http','$timeout','$interval',function($resource,$http,$timeout,$interval){
    var accountFactory =  {
      //constant:
      //后台接口地址
      backendUrl :{
        //baseUrl : "http://192.168.10.242:8181/mlottery",
        // baseUrl : "http://m.1332255.com:81/mlottery",
        // baseUrl : "http://m.13322.com/mlottery",
        baseUrl : baseUrl,
        //baseUrl : "http://192.168.31.18:8080/mlottery",
        login : {
          url:"/core/h5UserCenter.login.do",
          params: {
            account : "",
            password : ""
          }
        },
        reg : {
          url : "/core/h5UserCenter.register.do",
          params : {

          }
        },
        smsCode : {
          url : "/core/h5UserCenter.sendSmsCode.do",
          //url : "/core/IOSUserCenter.sendSmsCode.do",
          params : {

          }
        },
        resetPassword : {
          url : "/core/h5UserCenter.resetPassword.do",
          params: {

          }
        },
        verifySms : {
          "url" : "/core/h5UserCenter.verifySmsCode.do",
          params:{}
        }
      },
      //登录类型.
      loginType : {
        web : "web",
        weixin : "weixin",
        qq : "qq",
        weibo : "weibo"
      },

      //登录....
      login : function($scope,type) {
        var loginObj = this.LoginFactory(type);
        // console.log("loginObj",loginObj);
        loginObj.execute();
      },
      LoginFactory : function(type,scope){
        switch(type) {
          case this.loginType.web :
                return new this.webLogin(scope);
                break;
          case this.loginType.weixin :
                return new weixinLogin();
                break;
          case this.loginType.qq :
                return new qqLogin();
                break;
          case this.loginType.weibo :
                return new weiboLogin();
                break;
          default :
                return new webLogin();
        }
      },
      webLogin : function(scope,type){
        var lan = getLanguage(); // 获取语言,是为了方便的使用对象字面量给提示单词赋予国际化..而不使用$translation这种异步方法.
        lan = lan ? lan : "zh" ;
        scope.disableLogin = true;
        // console.log(scope.disableLogin);
        scope.loading = true;
        scope.infos = [];
        var _this = this;
        var isChecked = true;
          var params = angular.copy(_this.backendUrl.login.params);
          params.account = scope.account || "";
          params.password = scope.password || "";
          params.password = hex_md5(params.password).toUpperCase();
          // console.log("params.password",params);
          //params.deviceToken = "Msdf12341234asdf";
          //params.ip = "192.168.0.1";
          var httpService = this.genHttpService(this.backendUrl.login.url,params,"POST");
          httpService.then(webLoginSuccessFn,webLoginFailFn)
            .finally(function(){
                $timeout(function(){
                  scope.maskShow = false;
                  scope.disableLogin = false;
                },2000);
              }
            )

        //login success
        function webLoginSuccessFn(resp) {
          var data = resp.data || {msg:""};
          // console.log("success",data);
          scope.loading = false;
          scope.maskShow = true;
          if (data.result == 0) {
            scope.infos.push(account_i18n[lan].login.login_success);
            sessionStorage.setItem("user",JSON.stringify(data.data));
            window.location.href = "/index.html#/"; //跳转到首页..
          } else {
            scope.infos.push(account_i18n[lan].login.login_fail);
            var resultInfo = backend_i18n[lan] ? backend_i18n[lan]["e"+data.result] : "";  //后台不国际化，前台国际化了....
            // console.log(resultInfo);
            scope.infos.push(resultInfo);
          }
        }
        //login fail
        function webLoginFailFn(err) {
          // console.log("err",err);
          var errorinfo =  account_i18n[lan].login.login_exception;
          scope.loginFail = true;
          scope.errorInfo = errorinfo;
          scope.infos.push(errorinfo);
          scope.loading = false;
          scope.maskShow = true;
        }

        function webLoginFinish(){
              // console.log("finished");
        }
      },
      weixinLogin : function (){
        var appid = "wx7819ec8fd6b8005a";
        var secretid = "d4624c36b6795d1d99dcf0547af5443d";
        var currentUrl = window.location.href;
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7819ec8fd6b8005a&redirect_uri="+currentUrl+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect "
      },
      qqLogin : function(){

      },
      weiboLogin : function(scope,type) {
        // console.log(WB2);
        if (WB2) {
          WB2.anyWhere(function (W) {
            //W.widget.connectButton({
            //  id: "sianLogin"
            //});
            W.widget.connectButton({
              id: "sianLogin",
              type: "7,1",
              callback: {
                login: function (o) {
                  // console.log(o);
                  self.location = '#/login';
                },
                logout: function () {

                }
              }
            });
          });
        } else {
          scope.infos.push("")
        }

      },
      reg : function(scope){
        var lan = getLanguage();
        lan = lan ? lan : "zh";
        scope.infos = [];
        var infos = [];
        var isReturn = false;   //成功自动登录返回首页..
        scope.loading = true;   //显示加载图片
        scope.maskShow = false; //隐藏提示..

        var params = angular.copy(this.backendUrl.reg.params);
        // console.log("default",defaultCountry);
        if (scope.country != 'c-zh') {  //国外用户名,
          params.account = scope.account || "";
          params.password = scope.password || "";
          params.code = scope.smsCode || "";
          params.registerType = 1 || scope.registerType ;//1用户名2手机号3邮箱
          //params.sign = "1234512345123451234512345123451234512" ; //暂流.
          params.password = hex_md5(params.password).toUpperCase();
        } else {  //国内
          params.account = scope.account || "";
          params.password = scope.password || "";
          params.smsCode = scope.smsCode || "";
          params.registerType = 2 || scope.registerType ;//1用户名2手机号3邮箱
          //params.sign = "1234512345123451234512345123451234512" ; //暂流.
          params.password = hex_md5(params.password).toUpperCase();
        }
        var posts = this.genHttpService(this.backendUrl.reg.url,params,"POST");
        posts.then(regSuccessFn,regFailFn)
          .finally(function(){
            $timeout(function(){
              scope.maskShow = false;
              // console.log("isReturn",isReturn);
              if (isReturn) {
                window.location.href="/index.html#/";
              }
            },1000);
          }
        )
        function regSuccessFn(data) {
          var info =  data.data  ;
          // console.log("成功",info);
          //中央提示,自动登录返回首页.
          scope.loading = false;
          scope.maskShow = true;
          if (info.result == 0) {
            isReturn = true;
            infos.push(account_i18n[lan].reg.reg_success);
            window.sessionStorage.setItem("user",JSON.stringify(info.data));
          } else {
            var i18n_info = backend_i18n[lan] ? backend_i18n[lan]["e"+info.result] : info.msg;
            infos.push(account_i18n[lan].reg.reg_fail);
            // console.log("国际化语言",i18n_info);
            infos.push(i18n_info);
          }
          scope.infos = infos;
        }
        function regFailFn(err){
          // console.log("fail",err);
          scope.loading = false;
          scope.maskShow = true;
          scope.infos = [account_i18n[lan].reg.reg_excpetion];

        }

      },
      autoLogin : function(params) {
        params.account = params.account || "";
        params.password = params.password || "";
        //params.deviceToken = "Msdf12341234asdf";
        //params.ip = "192.168.0.1";
        var httpService = this.genHttpService(this.backendUrl.login.url,params,"POST");
        httpService.then(webLoginSuccessFn,webLoginFailFn);

        //login success
        function webLoginSuccessFn(resp) {
          var data = resp.data || {msg:""};
          // console.log("success",data);
          if (data.result == 0) {
            sessionStorage.setItem("user",JSON.stringify(data.data));
            window.location.href = "/index.html#/"; //跳转到首页..
          }
        }
        //login fail
        function webLoginFailFn(err) {
          // console.log("err",err);
        }
      },
      findPassword : function(scope) {
        var lan = getLanguage();
        lan = lan ? lan : "zh";
        scope.infos = [];
        scope.loading = true; // 显示加载...
        var _this = this;
        // console.log("scope:",scope);
        var params = angular.copy(this.backendUrl.resetPassword.params);
        params.account = scope.account || "";
        params.newPassword = scope.password || "";
        params.smsCode = scope.smsCode || "";
        params.accountType = 3 || scope.accountType ;//账户类型1:用户名、2:邮件 3:手机号
        params.phone = scope.account || ""; //暂流.

        params.newPassword = hex_md5(params.newPassword).toUpperCase();

        var posts = this.genHttpService(this.backendUrl.resetPassword.url,params,"POST");
        posts.then(resetSuccessFn,resetFailFn)
          .finally(function(){
            $timeout(function(){
              scope.maskShow = false;
              scope.loading = false;
            },1000);
          }
        )
        function resetSuccessFn(data) {
          //中央提示,自动登录返回首页. 同注册一样...
          scope.loading = false;
          scope.maskShow = true;     // maskShow 显示,loading就要隐藏.
          var info = data.data;
          // console.log(info);
          if (info.result == 0) {
            scope.infos.push(account_i18n[lan].find.find_success);
            var autoParams = {
              account : params.account,
              password : params.newPassword
            }
            _this.autoLogin(autoParams);
          } else {
            var i18n_info = backend_i18n[lan] ?
                      (backend_i18n[lan]["e"+info.result]
                        ?
                        backend_i18n[lan]["e"+info.result]
                        :
                        info.msg
                      )
                      : info.msg;
            scope.infos.push(i18n_info);
          }
        }
        function resetFailFn(err){
          // console.log("fail",err);
          scope.loading = false;
          scope.maskShow = true;
          scope.infos.push(account_i18n[lan].find.find_exception);
        }
      },
      /**
       * @desp 注册和找回密码 发送短信验证码:
       *        ltime 每次发送短信的间隔为60秒,
       *        disableSMS : 没有手机号,或者点击发送之后还没过60秒 不能再次点击按钮.
       *
       * @param scope
       * @param type
       */
      sendSMS : function(scope,type) {
        var lan = getLanguage() ;
        lan = lan ? lan : "zh";
        scope.loading = true;  //加载图片...
        scope.disableSMS = true;
        scope.ltime = 60;
        scope.timeInterval = $interval(function() {
          scope.ltime = scope.ltime -1;
          if (scope.ltime == 0) {
            scope.disableSMS = false;
            $interval.cancel(scope.timeInterval);
          }
        },1000);
        scope.infos = [];
        var params = angular.copy(this.backendUrl.smsCode.params);
        params.phone =  scope.account || "";
        params.operateType = type || scope.operateType; //
        //params.sign = "";
        var httpService = this.genHttpService(this.backendUrl.smsCode.url,params,"POST");
        httpService
          .then(smsSuccessFn,smsFailFn)
          .finally(function(){
            $timeout(function(){
              scope.maskShow = false;
            },2000);
          })

        function smsSuccessFn(data) {
          scope.loading = false;
          var info = data.data;

          scope.maskShow = true;
          if (info.result == 0) {
            scope.infos.push(account_i18n[lan].reg.reg_sms_sent);
          } else {
            // console.log(info.result);
            //if (info.result == 16 || info.result ==12 || info.result == 500) {//用户名已存在或手机号码不合法的情况 ,清楚定时限制...
              scope.ltime = "";
              scope.disableSMS = false;
              $interval.cancel(scope.timeInterval);
            var i18n_result = backend_i18n[lan] ? backend_i18n[lan]["e"+info.result] : "";
            // console.log("国际化语言:",i18n_result);
            scope.infos.push(i18n_result);
          }
        }
        function smsFailFn(err){
          scope.loading = false;
          scope.maskShow = true;
          scope.infos.push( account_i18n[lan].reg.reg_sms_exception);
        }
      },
      verifySMS : function(scope) {

      },
      showTips : function(msg){

      },
      hideTips : function() {

      },
      getService : function(url){
        var base = baseUrl;
        return $resource(base + url,{},{
          post : {method : "POST"}
        })
      },
      genHttpService : function(url,params,type){

        var httpurl = baseUrl + url;
        //return $http.post(httpurl,params);
        // console.log("params:",params);
        // console.log(JSON.stringify(params));
        return $http({
          method : type || "POST",
          url : httpurl,
          data : params,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
      },
      // this is deprecated..
      geti18n : function() {
        var country = defaultCountry || 'c-zh' ; //
        if (country == 'c-zh') {
          return account_i18n.zh;
        }
        if (country =='c-zh-tw' ) {
          return account_i18n.zh_hans;
        }
        if (country == 'c-th') {
          return account_i18n.th;
        }
        if (country == 'c-vi') {
          return account_i18n.vi;
        }
      }
    };

    return accountFactory;
}]


/**
 *@账户controller.
 * @type {*[]}
 */
var accountCon = ['accountFactory','$routeParams','$scope',function(accountFactory,$routeParams,$scope){
  // console.log($routeParams);
  var showType = "";
  $scope.showType = 1;
  $scope.isLogin = false;
  $scope.login = function(){
    accountFactory.login();
  }

}]

/**
 * @登录
 */
var loginCon = ['$scope',"accountFactory",function($scope,accountFactory){

  //third.getWeixinOpenId();
  $scope.country =  defaultCountry || "c-th" ||  "c-zh";  // 国内手机,国外用户名..
  $scope.login = function(type){
    if (type === "web")
      accountFactory.webLogin($scope,type);
    if (type === "weixin")
      accountFactory.weixinLogin($scope,type);
    if (type === "weibo")
      accountFactory.weiboLogin($scope,type);
  }
  //返回，哪个模块点击返回哪个模块.
  $scope.accountBack = function(){
    navMap();
  }
  $scope.$on("$viewContentLoaded",function(){
    //$scope.initWeibo();   //weibo need check the style in the html and ...
    $scope.initQQ();
  })

  $scope.initQQ = function(){
    //QC.Login({
    //    btnId: "",
    //    //用户需要确认的scope授权项,可选,默认all
    //    scope: "all",
    //    //按钮尺寸,可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S],可选,默认B_S
    //    size: "B_M"
    //  }, function (reqData, opts) {//登录成功
    //
    //    QC.Login.getMe(function (openId, accessToken) {
    //      self.location = '/login.qqLogin.do?accessToken=' + accessToken + '&appid=' + 101308317;
    //    });
    //    //根据返回数据,更换按钮显示状态方法
    //    var dom = document.getElementById(opts['btnId']),
    //      _logoutTemplate = [
    //        //头像
    //        '<span><img src="{figureurl}" class="{size_key}"/></span>',
    //        //昵称
    //        '<span>{nickname}</span>',
    //        //退出
    //        '<span><a href="javascript:QC.Login.signOut();">退出</a></span>'
    //      ].join("");
    //    dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
    //      nickname: QC.String.escHTML(reqData.nickname), //做xss过滤
    //      figureurl: reqData.figureurl
    //    }));
    //  }, function (opts) {//注销成功
    //
    //  }
    //);
  }
  $scope.initWeibo = function(){
    WB2.anyWhere(function (W) {
      //W.widget.connectButton({
      //  id: "sianLogin"
      //});
      W.widget.connectButton({
        id: "sianLogin",
        type: "7,1",
        callback: {
          login: function (o) {
            self.location = '/login.weiBoLogin.do';
          },
          logout: function () {

          }
        }
      });
    });
  }

  $scope.hideMask = function(e) {
    var tar = e.target || e.srcElement ;
    if (tar.tagName !== "UL") {
      $scope.maskShow = false;
    }
  }
}]

/**
 * @注册
 * 按照需求来, 国外的也是输入手机号码.... 所以placeholder应全部为手机号码..
 */
var regCon = ['$interval','$timeout','$scope','accountFactory',function($interval,$timeout,$scope,accountFactory){

  var lan = getLanguage();
  lan = lan ? lan : "zh";
  $scope.country =   'c-th' ||   defaultCountry ||  'c-zh' ;  //当前国家....
  $scope.account = "";
  $scope.password = "";
  $scope.smsCode = "";
  $scope.infos  = [];
  //国内短信.
  $scope.sendSMS = function(){
    //disableSMS ., 禁止发送验证码,60秒后才能再次发送. disableSMS disable按钮, ltime 显示还剩余多少秒.
    // console.log($scope.account,isEmpty($scope.account));
    /**
     * @desp isNumber()不需要验证,因为接口就会返回手机号码不合法., 但是需要保留下来,因为国外的不调用短信接口目前。。。
     */
    if (!isEmpty($scope.account) && isNumber($scope.account)) {
      accountFactory.sendSMS($scope,1);
    } else {
      $scope.maskShow = true;
      $scope.infos = [account_i18n[lan].reg.reg_account];
    }

  }

  //国外图像验证码
  $scope.sendPic = function() {
    // console.log("开始获取验证码:",$scope.account);
    if (!isEmpty($scope.account)) {
      var imgurl = accountFactory.backendUrl.baseUrl+"/core/h5UserCenter.findVerifyCode.do?account="+$scope.account +"&randomId="+Date.now();;
      $scope.codeurl = imgurl;

      //img.onerror = function() {
      //  // console.log("error",imgurl);
      //  $scope.maskShow = true;
      //  $scope.infos.push(account_i18n[lan].reg.reg_code_error);
      //};
    } else {
      $scope.maskShow = true;
      $scope.infos.push(account_i18n[lan].reg.reg_account);
    }


  }

  $scope.changeCode = function() {
    if (!isEmpty($scope.account)) {
      var imgurl = "http://192.168.31.18:8080/mlottery/core/h5UserCenter.findVerifyCode.do?account="+$scope.account +"&randomId="+Date.now();
      $scope.codeurl = imgurl;

      img.onerror = function() {
        // console.log("error",imgurl);
        $scope.maskShow = true;
        $scope.infos.push(account_i18n[lan].reg.reg_code_error);
      };
    } else {
      $scope.maskShow = true;
      $scope.infos.push(account_i18n[lan].reg.reg_account);
    }
  }


  //返回，哪个模块点击返回哪个模块.
  $scope.accountBack = function(){
    navMap();
  }
  $scope.reg = function(){
    var isok = $scope.validate();
    if (isok) {
      accountFactory.reg($scope);
    }
  }

  $scope.back = function(){
    window.location.href = "/index.html#/";
  }

  //验证账号或手机号码是否全部为数字.

  //验证
  $scope.validate = function(){
    $scope.infos = [];
    // console.log($scope);
    var lan = getLanguage();
    lan = lan ? lan : "zh";
    if (isEmpty($scope.password)){
      $scope.infos.push(account_i18n[lan].reg.reg_password);
    }
    if (isEmpty($scope.account)) {
      //$scope.infos.push( defaultCountry == 'c-zh' ? account_i18n[lan].reg.reg_account : "请输入用户名");
      $scope.infos.push( account_i18n[lan].reg.reg_account);
    }
    if (isEmpty($scope.smsCode)) {
      $scope.infos.push(account_i18n[lan].reg.reg_sms);
    }
    var emptyLen = $scope.infos.length;   //非空...
    if (emptyLen > 0) {
      $scope.maskShow = true;
      return false;
    } else {           //都不为空验证字符是否非法...
      if (!isPassword($scope.password)){
        $scope.infos.push(account_i18n[lan].reg.reg_password_error);
        $scope.maskShow = true;
        return false;
      }
    }
    return true;
  }

  $scope.hideMask = function(e) {
    var tar = e.target || e.srcElement ;
    if (tar.tagName !== "UL") {
      $scope.maskShow = false;
    }
  }
  //清除定时60s..
  $scope.$on('$destroy', function() {
    $interval.cancel($scope.timeInterval);
  })
}]

/**
 * @找回密码,国外的找回密码暂时屏蔽掉, 等国外的短信接口处理后再添加上去
 */
var findPasswordCon = ['$interval','$scope','accountFactory',function($interval,$scope,accountFactory){

  $scope.$on("$viewContentLoaded",function(){
    $scope.find = {
      account : "",
      password : "",
      smsCode : "",
      loading : false,
      maskShow : false
    }
  })
  // console.log("find scope:",$scope);
  $scope.sendFindSMS = function(){
    //disableSMS .
    // console.log("send SMS",$scope);
    if (!isEmpty($scope.account) && isNumber($scope.account)) {
      accountFactory.sendSMS($scope,4);
    } else {
      $scope.maskShow = true;
      $scope.infos = ["请输入手机号"];
    }
  }
  $scope.findPassword = function(){
    if ($scope.validate()) {
      accountFactory.findPassword($scope);
    }
  }
  $scope.back = function(){
    window.location.href = "#/login";
  }
  //验证
  $scope.validate = function(){
    $scope.infos = [];
    // console.log($scope);
    if (isEmpty($scope.password)){
      $scope.infos.push("请输入密码!");
    }
    if (isEmpty($scope.account)) {
      $scope.infos.push( defaultCountry == 'c-zh' ? "请输入手机号码" : "请输入用户名");
    }
    if (isEmpty($scope.smsCode)) {
      $scope.infos.push("请输入验证码");
    }
    var emptyLen = $scope.infos.length;   //非空...
    if (emptyLen > 0) {
      $scope.maskShow = true;
      return false;
    } else {           //都不为空验证字符是否非法...
      if (!isPassword($scope.password)){
        $scope.infos.push("密码中含有非法字符,请修改");
        $scope.maskShow = true;
        return false;
      }
    }
    return true;
  }

  $scope.hideMask = function(e) {
    var tar = e.target || e.srcElement ;
    if (tar.tagName !== "UL") {
      $scope.maskShow = false;
    }
  }
}]


/**
 * @简单.
 */
function isEmpty(val) {
  var emptys = false;
  if (val == null || val == undefined || val== "undefined" || val == "null" || val == "") {
    emptys = true;
  }
  return emptys;
}
function isPassword(str) {
  str = isEmpty(str) ? "" : str;
  // console.log(str);
  var regPassword = /[a-zA-Z\d]+$/;
  return regPassword.test(str);
}
function isNumber(str) {
  str = isEmpty(str) ? "" : str;
  var regNumber = /[\d]+$/;
  // console.log(str,regNumber.test(str));
  return regNumber.test(str);
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
      href = window.location.origin + "/basket/database.html#/";
      break;
    case "nav7" :
      href = window.location.origin + "/video#/";
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
function getLanguage() {
  ///*大陆版使用start*/
  //if (!isInternational) {
  //  var setLang = mobileUtil.getSearch()['lan'];
  //  if (setLang) {
  //    localStorage.setItem("language", setLang);
  //  }
  //}
  /*大陆版使用end*/
  var language = localStorage.getItem("language");
  if (language == null) {
    language = defaultLanguageKey;
  }
  return language;
}

/**
 * @desp module  account......
 */
angular
  .module("live1.account", [
        "ngRoute",
        "ngResource",
        "pascalprecht.translate"
      ])
  .config(routerConfig)
  .config(i18nConfig)
  .config(postConfig)
  .factory("accountFactory",accountFactory)
  .controller("loginCon",loginCon)
  .controller("regCon",regCon)
  .controller("findPasswordCon",findPasswordCon);

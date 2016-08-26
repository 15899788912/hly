/**
 * Created by lenovoa on 2015/10/13.
 */
'use strict';

var guide = angular.module("live1.guide", [
    "ngRoute",
    "ngResource",
    "pascalprecht.translate"
]);
guide.config(["$translateProvider", function ($translateProvider) {
    var translationsEN = {
      "HEAD_TITLE": 	"One Score Touchscreen Version ",
      "CLASS_LOGO":	 "logo",
      "CLASS_IOS_BTN": 	 "ios_btn",
      "CLASS_QR_ANDROID": 	 "qr_Android",
      "CLASS_ANDROID_BTN": 	 "Android_btn"
    }
    var translationsZH = {
        "HEAD_TITLE" : "一比分触屏版",
        "CLASS_LOGO": "logo",
        "CLASS_IOS_BTN" : "ios_btn",
        "CLASS_QR_ANDROID" : "qr_Android",
        "CLASS_ANDROID_BTN" : "Android_btn"
    };

    var translationsZH_HANS = {
        "HEAD_TITLE" : "壹比分觸屏版",
        "CLASS_LOGO": "logo_zh-TW",
        "CLASS_IOS_BTN" : "ios_btn_zh-TW",
        "CLASS_QR_ANDROID" : "qr_Android_zh-TW",
        "CLASS_ANDROID_BTN" : "Android_btn_zh-TW"
    }

    $translateProvider.translations('zh', translationsZH);
    $translateProvider.translations('zh-TW', translationsZH_HANS);
    $translateProvider.translations('en',translationsEN);

    $translateProvider.registerAvailableLanguageKeys(['zh', 'zh-TW','en'], {
        'zh_CN': 'zh',
        'zh_TW': 'zh-TW',
        'zh_HK': 'zh-TW',
        'en_US': 'en'
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

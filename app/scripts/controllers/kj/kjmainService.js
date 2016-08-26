/**
 * Created by john on 2015/9/24.
 */

kjMain.factory("LastLotteryService", [
    "$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/lastLotteryResults.findLastLotteryResults.do", {}, {
            query: {
                method: "post",
                params: {},
                isArray: false
            }
        });
    }
]);

kjMain.factory("DetailLotteryService", ["$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/:url", {url: '@url'}, {
            query: {
                method: 'post',
                params: {},
                isArray: false
            }
        });
    }]);

/**
 * Created by john on 2015/9/28.
 */

kjdetail.factory("DetailLotteryService", ["$resource",
    function ($resource) {
        return $resource(baseUrl + "/core/:url", {url:'@url'}, {
            query: {
                method: 'post',
                params: {},
                isArray: false
            }
        });
    }]);

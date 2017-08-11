cordova.define("cordova-khenshin.khenshin", function(require, exports, module) {
module.exports = {
	startByPaymentId: function (params, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "Khenshin", "startByPaymentId", [params]);
	},
	startByAutomatonId: function (params, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "Khenshin", "startByAutomatonId", params);
	}
};
});

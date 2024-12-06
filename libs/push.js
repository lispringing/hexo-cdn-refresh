module.exports = function(args) {
var qcloudSDK = require('./submit'); 
var config = this.config;
var secret_Id = config.tencentcdn.secretId;
var secret_Key = config.tencentcdn.secretKey;
var type = config.tencentcdn.type;
var timer = config.tencentcdn.timer;
var url = config.url
console.log('目前延时器设置:' + timer + '毫秒,请等待延时器倒计时结束后自动刷新cdn缓存');
setTimeout(() => {
qcloudSDK.config({
    secretId: secret_Id,
    secretKey: secret_Key
})
qcloudSDK.request('RefreshCdnDir', {
    'dirs.0': url,
    "type": type
}, (res) => {
console.log('cdn刷新结果' + res);
console.log('url:' + url);
})
}, timer);
};


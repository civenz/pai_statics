const wxConfig = {
    debug: true, // 开启调试模式，调用的所有api的返回值会在客户端alert出来
    appId: 'wx4358dcc200e69c1c', // 替换为你的微信公众号 appId
    timestamp: 123456789, //  填入非空任意值即可
    nonceStr: 'your_nonce_str', //  填入非空任意值即可
    signature: 'your_signature', //  填入非空任意值即可
    jsApiList: [
    'updateAppMessageShareData',
    'updateTimelineShareData'
    ] // 必需的 JS 接口列表
};

wx.config(wxConfig);

wx.ready(function () {
    wx.updateAppMessageShareData({
        title: '这是一条分享给朋友的标题', // 分享标题
        desc: '这是分享给朋友的详细描述，支持更多文案说明～', // 分享描述
        link: 'https://www.pai.com.cn/', // 分享链接
        imgUrl: 'https://www.pai.com.cn/favicon.png', // 分享图标（建议 300x300 像素以上）
        success: function () {
        },
        fail: function (err) {
        }
    });

    wx.updateTimelineShareData({
        title: '这是一条分享到朋友圈的标题（无描述）', // 分享标题
        link: 'https://www.pai.com.cn/',
        imgUrl: 'https://www.pai.com.cn/favicon.png', // 分享图标（建议 300x300 像素以上）
        success: function () {
        },
        fail: function (err) {
        }
    });

});

wx.error(function (res) {
});

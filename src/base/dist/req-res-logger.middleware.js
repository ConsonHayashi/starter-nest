"use strict";
exports.__esModule = true;
exports.reqresLogger = void 0;
var common_1 = require("@nestjs/common");
exports.reqresLogger = function (req, res, next) {
    var reqInfo = {
        ip: req.ip,
        headers: req.headers,
        ua: req.headers['user-agent'],
        method: req.method,
        url: req.url,
        query: req.query,
        param: req.param,
        body: req.body
    };
    common_1.Logger.log("请求开始：" + JSON.stringify(reqInfo));
    next();
    common_1.Logger.log("响应结束：" + JSON.stringify(res.body));
};

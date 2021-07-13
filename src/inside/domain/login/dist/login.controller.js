"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.LoginController = void 0;
var common_1 = require("@nestjs/common");
var LoginController = /** @class */ (function () {
    function LoginController(loginService, emailService) {
        this.loginService = loginService;
        this.emailService = emailService;
    }
    LoginController.prototype.register = function (createLoginDto) {
        common_1.Logger.log("登陆开始" + JSON.stringify(createLoginDto));
        var flag = this.check(createLoginDto);
        return this.loginService.logup(createLoginDto);
    };
    LoginController.prototype.login = function (createLoginDto) {
        return this.loginService.login(createLoginDto);
    };
    LoginController.prototype.getCode = function (email) {
        this.emailService.send(email, "验证码", "11");
    };
    LoginController.prototype.findAll = function () {
        return this.loginService.findAll();
    };
    LoginController.prototype.findOne = function (id) {
        return this.loginService.findOne(+id);
    };
    LoginController.prototype.update = function (id, updateLoginDto) {
        return this.loginService.update(+id, updateLoginDto);
    };
    LoginController.prototype.remove = function (id) {
        return this.loginService.remove(+id);
    };
    LoginController.prototype.check = function (createLoginDto) {
        // throw new BadRequestException("邮箱格式异常：" + createLoginDto.email)
        return false;
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], LoginController.prototype, "register");
    __decorate([
        common_1.Put(),
        __param(0, common_1.Body())
    ], LoginController.prototype, "login");
    __decorate([
        common_1.Get('code/:email'),
        __param(0, common_1.Param('email'))
    ], LoginController.prototype, "getCode");
    __decorate([
        common_1.Get()
    ], LoginController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], LoginController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], LoginController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], LoginController.prototype, "remove");
    LoginController = __decorate([
        common_1.Controller('user')
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;

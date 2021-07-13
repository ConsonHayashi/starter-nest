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
exports.LoginService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var login_entity_1 = require("../../../entity/login.entity");
var LoginService = /** @class */ (function () {
    function LoginService(repo) {
        this.repo = repo;
    }
    LoginService.prototype.login = function (createLoginDto) {
    };
    LoginService.prototype.logup = function (createLoginDto) {
    };
    LoginService.prototype.getCode = function () {
    };
    LoginService.prototype.create = function (createLoginDto) {
        return 'This action adds a new login';
    };
    LoginService.prototype.findAll = function () {
        return "This action returns all login";
    };
    LoginService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " login";
    };
    LoginService.prototype.update = function (id, updateLoginDto) {
        return "This action updates a #" + id + " login";
    };
    LoginService.prototype.remove = function (id) {
        return "This action removes a #" + id + " login";
    };
    LoginService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(login_entity_1.Login))
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;

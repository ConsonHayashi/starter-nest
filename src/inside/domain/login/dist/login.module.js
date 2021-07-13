"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginModule = void 0;
var common_1 = require("@nestjs/common");
var login_service_1 = require("./login.service");
var login_controller_1 = require("./login.controller");
var typeorm_1 = require("@nestjs/typeorm");
var login_entity_1 = require("src/entity/login.entity");
var email_service_1 = require("src/inside/base/email.service");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([login_entity_1.Login])
            ],
            controllers: [login_controller_1.LoginController],
            providers: [login_service_1.LoginService, email_service_1.EmailService]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;

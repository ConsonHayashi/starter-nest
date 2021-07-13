"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var dictionary_module_1 = require("./inside/domain/dictionary/dictionary.module");
var app_mysql_module_1 = require("./app.mysql.module");
var login_module_1 = require("./inside/domain/login/login.module");
var app_mail_module_1 = require("./app.mail.module");
var AppModule = /** @class */ (function () {
    function AppModule(connection) {
        this.connection = connection;
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                app_mysql_module_1.AppMysqlModule,
                dictionary_module_1.DictionaryModule,
                login_module_1.LoginModule,
                app_mail_module_1.AppMailModule,
            ],
            controllers: [],
            providers: [
            // {
            //   provide: APP_FILTER,
            //   useClass: HttpExceptionFilter,
            // },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

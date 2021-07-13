"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DictionaryModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var dictionary_controller_1 = require("./dictionary.controller");
var dictionary_entity_1 = require("../../../entity/dictionary.entity");
var dictionary_service_1 = require("./dictionary.service");
var DictionaryModule = /** @class */ (function () {
    function DictionaryModule() {
    }
    DictionaryModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([dictionary_entity_1.Dictionary])
            ],
            controllers: [dictionary_controller_1.DictionaryController],
            providers: [
                dictionary_service_1.DictionaryService
            ]
        })
    ], DictionaryModule);
    return DictionaryModule;
}());
exports.DictionaryModule = DictionaryModule;

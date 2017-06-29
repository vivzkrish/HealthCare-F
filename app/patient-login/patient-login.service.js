"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var Observable_1 = require("rxjs/Observable");
var PatientloginService = (function () {
    function PatientloginService(http) {
        this.http = http;
    }
    PatientloginService.prototype.login = function (email, pwd) {
        var params = new http_1.URLSearchParams();
        params.set('email', email);
        params.set('pwd', pwd);
        var body = params;
        return this.http.post('http://localhost:9090/patient-login', body)
            .map(function (res) { return res.text(); })
            .catch(function (error) {
            console.log('Somthing went wrong with the request');
            return Observable_1.Observable.throw(error);
        });
    };
    PatientloginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PatientloginService);
    return PatientloginService;
}());
exports.PatientloginService = PatientloginService;
//# sourceMappingURL=patient-login.service.js.map
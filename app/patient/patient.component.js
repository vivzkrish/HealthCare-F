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
var patient_routes_config_1 = require("./patient-routes.config");
var common_1 = require('@angular/common');
var PatientComponent = (function () {
    function PatientComponent(location) {
        this.location = location;
    }
    PatientComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        $.getScript('../../assets/js/material-dashboard.js');
        $.getScript('../../assets/js/initMenu.js');
        this.menuItems = patient_routes_config_1.Route.filter(function (menuItem) { return menuItem; });
    };
    PatientComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'app-patient',
            templateUrl: './patient.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.component.js.map
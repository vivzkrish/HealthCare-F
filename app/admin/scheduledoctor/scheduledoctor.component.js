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
var ScheduledoctorComponent = (function () {
    function ScheduledoctorComponent() {
        this.weekday = {
            "1": "Monday",
            "2": "Tuesday",
            "3": "Wednesday",
            "4": "Thursday",
            "5": "Friday",
        };
    }
    ScheduledoctorComponent.prototype.ngOnInit = function () {
    };
    ScheduledoctorComponent = __decorate([
        core_1.Component({
            selector: 'app-scheduledoctor',
            templateUrl: './scheduledoctor.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduledoctorComponent);
    return ScheduledoctorComponent;
}());
exports.ScheduledoctorComponent = ScheduledoctorComponent;
//# sourceMappingURL=scheduledoctor.component.js.map
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
var home_tab_pane_component_1 = require('../home_tabPane/home-tab-pane.component');
var notification = (function () {
    function notification() {
        this.data = "Notification";
    }
    notification.prototype.notificationFunction = function (data) {
        console.log(data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', home_tab_pane_component_1.homeTabPaneComponent)
    ], notification.prototype, "homeTab", void 0);
    notification = __decorate([
        core_1.Component({
            selector: 'notification-comp',
            templateUrl: 'app/homeComponent/notification/notification.component.html',
            styleUrls: ['app/homeComponent/notification/notification.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], notification);
    return notification;
}());
exports.notification = notification;
//# sourceMappingURL=notification.component.js.map
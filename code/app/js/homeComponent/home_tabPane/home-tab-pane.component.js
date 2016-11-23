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
var notification_component_1 = require('../notification/notification.component');
var homeTabPaneComponent = (function () {
    function homeTabPaneComponent() {
        this.tabInd = 1;
        this.notificationClass = new notification_component_1.notification();
    }
    homeTabPaneComponent.prototype.tabChange = function (tabIndex) {
        this.tabInd = tabIndex;
    };
    homeTabPaneComponent.prototype.goClicked1 = function (info) {
        this.notificationData = info;
        this.notificationClass.notificationFunction(this.notificationData);
    };
    homeTabPaneComponent = __decorate([
        core_1.Component({
            selector: 'home-tab-pane',
            templateUrl: 'app/homeComponent/home_tabPane/home-tab-pane.html',
            styleUrls: ['app/homeComponent/home_tabPane/home-tab-pane.component.css'] /*,
            directives : [quickChangesTabComponent]*/
        }), 
        __metadata('design:paramtypes', [])
    ], homeTabPaneComponent);
    return homeTabPaneComponent;
}());
exports.homeTabPaneComponent = homeTabPaneComponent;
//# sourceMappingURL=home-tab-pane.component.js.map
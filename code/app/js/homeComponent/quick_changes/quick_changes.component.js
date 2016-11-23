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
var QuickChangesTab = (function () {
    function QuickChangesTab() {
        this.goClicked = new core_1.EventEmitter();
        this.NotificationsDetails = [
            { notificationType: "Cause", notificationDesc: 'SMS Maintenance' },
            { notificationType: 'Duration', notificationDesc: '1:00 AM EDT to 6:00 AM EST' },
            { notificationType: 'Impacts', notificationDesc: 'VEC Network manager' },
            { notificationType: 'Details', notificationDesc: 'The Network Manager users will   not be able to reserve toll free numbers during the following Window.During this downtime,SMS personnel will change the system clock from Daylight Saving Time to Standard Time.SMS personnel will also complete internal network upgrades.'
            }
        ];
        this.showNotification = false;
        this.activeTab = 'SearchByNumber';
    }
    QuickChangesTab.prototype.searchByPlan = function (selectedPlan) {
        this.activeTab = selectedPlan;
    };
    QuickChangesTab.prototype.EnableStruc = function (phoneNum) {
        if (phoneNum && phoneNum.length == 10) {
            this.EnableStructureName = true;
        }
        else {
            this.EnableStructureName = false;
        }
    };
    QuickChangesTab.prototype.showNotifications = function (structureName) {
        if (structureName) {
            this.showNotification = true;
            this.goClicked.emit({ notificationDetails: this.NotificationsDetails });
        }
        else {
            this.showNotification = false;
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], QuickChangesTab.prototype, "goClicked", void 0);
    QuickChangesTab = __decorate([
        core_1.Component({
            selector: 'Quick-changes-tab',
            templateUrl: 'app/homeComponent/quick_changes/quick_changes.html',
            styleUrls: ['app/homeComponent/quick_changes/quick_change.css']
        }), 
        __metadata('design:paramtypes', [])
    ], QuickChangesTab);
    return QuickChangesTab;
}());
exports.QuickChangesTab = QuickChangesTab;
//# sourceMappingURL=quick_changes.component.js.map
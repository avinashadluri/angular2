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
var ImplementTab = (function () {
    function ImplementTab() {
        this.selectedRadio = 'searchNumber';
        this.showSetId = false;
        this.NotificationsDetails = [
            { notificationType: "Cause", notificationDesc: 'SMS Maintenance' },
            { notificationType: 'Duration', notificationDesc: '1:00 AM EDT to 6:00 AM EST' },
            { notificationType: 'Impacts', notificationDesc: 'VEC Network manager' },
            { notificationType: 'Details', notificationDesc: 'The Network Manager users will   not be able to reserve toll free numbers during the following Window.During this downtime,SMS personnel will change the system clock from Daylight Saving Time to Standard Time.SMS personnel will also complete internal network upgrades.'
            }
        ];
        this.goClicked = new core_1.EventEmitter();
    }
    ImplementTab.prototype.implementSearch = function (selectedPlan) {
        this.selectedRadio = selectedPlan;
    };
    ImplementTab.prototype.selectedNumber = function () {
        console.log(this.implementNumberSelect);
    };
    ImplementTab.prototype.selectedCustomerId = function () {
        if (this.customerId != undefined) {
            this.showSetId = true;
        }
    };
    ImplementTab.prototype.selectedSetId = function () {
    };
    ImplementTab.prototype.numberGo = function () {
        alert("Search Number selected :" + this.implementNumberSelect);
    };
    ImplementTab.prototype.setGo = function () {
        console.log("CustomerId :" + this.customerId + "             " + "SetId :" + this.setId);
        this.goClicked.emit({ custId: this.customerId, showNotification: true, notificationDetails: this.NotificationsDetails });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImplementTab.prototype, "goClicked", void 0);
    ImplementTab = __decorate([
        core_1.Component({
            selector: 'implement-tab',
            templateUrl: 'app/homeComponent/implement_tab/implement-tab.component.html',
            styleUrls: ['app/homeComponent/implement_tab/implement-tab.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ImplementTab);
    return ImplementTab;
}());
exports.ImplementTab = ImplementTab;
//# sourceMappingURL=implement-tab.component.js.map
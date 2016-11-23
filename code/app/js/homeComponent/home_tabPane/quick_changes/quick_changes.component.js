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
        this.placeHolder = 'Search By Number';
    }
    QuickChangesTab.prototype.searchByPlan = function (selectedPlan) {
        this.placeHolder = selectedPlan;
    };
    QuickChangesTab = __decorate([
        core_1.Component({
            selector: 'Quick-changes-tab',
            templateUrl: 'app/homeComponent/home_tabPane/quick_changes/quick_changes.html',
        }), 
        __metadata('design:paramtypes', [])
    ], QuickChangesTab);
    return QuickChangesTab;
}());
exports.QuickChangesTab = QuickChangesTab;
//# sourceMappingURL=quick_changes.component.js.map
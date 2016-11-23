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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
//import { Router } from '@angular/router';
var app_routing_module_1 = require('./route/app-routing.module');
var root_component_1 = require('./rootComponent/root.component');
var home_component_1 = require('./homeComponent/home.component');
var login_component_1 = require('./loginComponents/login.component');
var menu_component_1 = require('./commonComponents/menu/menu.component');
var number_routing_component_1 = require('./numberRoutingComponents/number-routing.component');
var main_dismiss_alert_component_1 = require('./homeComponent/home_dismiss_alert/main-dismiss-alert.component');
var implement_tab_component_1 = require('./homeComponent/implement_tab/implement-tab.component');
var home_tab_pane_component_1 = require('./homeComponent/home_tabPane/home-tab-pane.component');
var quick_changes_component_1 = require('./homeComponent/quick_changes/quick_changes.component');
var notification_component_1 = require('./homeComponent/notification/notification.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule],
            declarations: [root_component_1.Root, login_component_1.loginComponent, home_component_1.homeComponent, menu_component_1.menuComponent,
                main_dismiss_alert_component_1.mainDismissAlertComponent, number_routing_component_1.numberRoutingComponent,
                home_tab_pane_component_1.homeTabPaneComponent, quick_changes_component_1.QuickChangesTab, implement_tab_component_1.ImplementTab, notification_component_1.notification],
            bootstrap: [root_component_1.Root]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';

import { AppRoutingModule } from './route/app-routing.module';

import { Root } from './rootComponent/root.component';
import { homeComponent }   from './homeComponent/home.component';
import { loginComponent } from './loginComponents/login.component';
import { menuComponent } from './commonComponents/menu/menu.component';
import { numberRoutingComponent } from './numberRoutingComponents/number-routing.component';
import { mainDismissAlertComponent }   from './homeComponent/home_dismiss_alert/main-dismiss-alert.component';
import { ImplementTab }   from './homeComponent/implement_tab/implement-tab.component'; 
import { homeTabPaneComponent }   from './homeComponent/home_tabPane/home-tab-pane.component';
import { QuickChangesTab }   from './homeComponent/quick_changes/quick_changes.component';
import { notification }   from './homeComponent/notification/notification.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ Root, loginComponent, homeComponent,menuComponent,
                  mainDismissAlertComponent,numberRoutingComponent,
                  homeTabPaneComponent,QuickChangesTab, ImplementTab,notification],
  bootstrap:    [ Root ]
})

export class AppModule { 

  /*constructor(public router: Router) {
    if( window.localStorage.getItem("userLoggedIn") == "true")
      router.navigate(['home']);
  }*/
}




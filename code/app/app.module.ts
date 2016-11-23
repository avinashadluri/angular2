import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './route/app-routing.module';
import { Root } from './rootComponent/root.component';
import { homeComponent }   from './homeComponent/home.component';
import { loginComponent } from './loginComponents/login.component';
import { menuComponent } from './commonComponents/menu/menu.component';
import { numberRoutingComponent } from './numberRoutingComponents/number-routing.component';
import { mainDismissAlertComponent }   from './homeComponent/home_dismiss_alert/main-dismiss-alert.component';
import { homeTabPaneComponent }   from './homeComponent/home_tabPane/home-tab-pane.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ Root, loginComponent, homeComponent,menuComponent,
                  mainDismissAlertComponent,numberRoutingComponent,
                  homeTabPaneComponent],
  bootstrap:    [ Root ]
})

export class AppModule { 

}




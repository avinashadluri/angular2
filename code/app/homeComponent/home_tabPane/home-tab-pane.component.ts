import {Component } from '@angular/core';
import { notification } from '../notification/notification.component';

@Component({
	selector:'home-tab-pane',
	templateUrl:'app/homeComponent/home_tabPane/home-tab-pane.html',
	styleUrls:['app/homeComponent/home_tabPane/home-tab-pane.component.css']/*,
	directives : [quickChangesTabComponent]*/

})

export class homeTabPaneComponent{
	public tabInd:Number = 1;
	notificationClass:notification = new notification();
	public notificationData:Object;
	tabChange(tabIndex){
		this.tabInd = tabIndex;
	}
	goClicked1(info: Object) {
	this.notificationData = info;
	this.notificationClass.notificationFunction(this.notificationData);
  }
}
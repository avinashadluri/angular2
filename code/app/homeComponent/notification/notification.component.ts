import { Component, Input } from '@angular/core';
import { homeTabPaneComponent } from '../home_tabPane/home-tab-pane.component';
@Component({
  selector: 'notification-comp',
  templateUrl:'app/homeComponent/notification/notification.component.html',
	styleUrls:['app/homeComponent/notification/notification.component.css']
})
export class notification { 
    public data:string = "Notification";
    public displayNoti:boolean;
    @Input() homeTab: homeTabPaneComponent;
    constructor() {
    }
    notificationFunction(data:Object){
        console.log(data);
    }
    
}

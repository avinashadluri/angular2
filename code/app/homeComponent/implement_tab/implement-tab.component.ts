import { Component, EventEmitter, Input, Output } from '@angular/core';
import { notification }   from '../notification/notification.component';
@Component({
  selector: 'implement-tab',
  templateUrl:'app/homeComponent/implement_tab/implement-tab.component.html',
	styleUrls:['app/homeComponent/implement_tab/implement-tab.component.css']
})
export class ImplementTab { 
	 public selectedRadio:string = 'searchNumber';
	 implementNumberSelect:number;
	 customerId:number;
	 showSetId:boolean = false;
	 setId:number;
	public NotificationsDetails :Object[] = [
        {notificationType: "Cause",notificationDesc: 'SMS Maintenance'}, 
        {notificationType: 'Duration', notificationDesc: '1:00 AM EDT to 6:00 AM EST'},
        {notificationType: 'Impacts', notificationDesc: 'VEC Network manager'},
        {notificationType: 'Details',notificationDesc: 'The Network Manager users will   not be able to reserve toll free numbers during the following Window.During this downtime,SMS personnel will change the system clock from Daylight Saving Time to Standard Time.SMS personnel will also complete internal network upgrades.'
        }
    ];
	 @Output() goClicked = new EventEmitter<Object>();
	implementSearch(selectedPlan){
		this.selectedRadio = selectedPlan;
	} 
	selectedNumber(){
		console.log(this.implementNumberSelect);
	}
	selectedCustomerId(){
		if(this.customerId != undefined){
			this.showSetId = true;
		}
	}
	selectedSetId(){

	}
	numberGo(){
		alert("Search Number selected :" + this.implementNumberSelect);
	}
	setGo(){
		console.log("CustomerId :" + this.customerId + "             " + "SetId :" + this.setId);
		this.goClicked.emit({custId:this.customerId,showNotification:true,notificationDetails:this.NotificationsDetails});
	}
}
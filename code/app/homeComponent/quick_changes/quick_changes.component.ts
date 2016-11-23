import { Component, EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'Quick-changes-tab',
  templateUrl: 'app/homeComponent/quick_changes/quick_changes.html',
  styleUrls:['app/homeComponent/quick_changes/quick_change.css']
})

export class QuickChangesTab {
   @Output() goClicked = new EventEmitter<Object>();
   public NotificationsDetails :Object[] = [
        {notificationType: "Cause",notificationDesc: 'SMS Maintenance'}, 
        {notificationType: 'Duration', notificationDesc: '1:00 AM EDT to 6:00 AM EST'},
        {notificationType: 'Impacts', notificationDesc: 'VEC Network manager'},
        {notificationType: 'Details',notificationDesc: 'The Network Manager users will   not be able to reserve toll free numbers during the following Window.During this downtime,SMS personnel will change the system clock from Daylight Saving Time to Standard Time.SMS personnel will also complete internal network upgrades.'
        }
    ];
    public EnableStructureName:boolean;
  public phoneNumber:Number;
  public structureName:string;
  public showNotification:boolean = false;
  public activeTab:string = 'SearchByNumber';
 
	searchByPlan(selectedPlan){
		this.activeTab = selectedPlan;
	} 
  EnableStruc(phoneNum){
    if(phoneNum && phoneNum.length == 10)
    {
      this.EnableStructureName = true;
    }
    else
    {
      this.EnableStructureName = false;
    }
  }
  showNotifications(structureName){
     if(structureName){
       this.showNotification = true;
       this.goClicked.emit({notificationDetails:this.NotificationsDetails});
     }
     else{
       this.showNotification = false;
     }
  }
}
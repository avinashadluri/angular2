import {Component } from '@angular/core';

@Component({
	selector:'home-tab-pane',
	templateUrl:'app/homeComponent/home_tabPane/home-tab-pane.html',
	styleUrls:['app/homeComponent/home_tabPane/home-tab-pane.component.css']

})

export class homeTabPaneComponent{
	public title:string = "Search Routing Plans";
	public tabInd:Number = 1;
	public placeHolder:string = 'Search By Number';
	tabChange(tabIndex){
		this.tabInd = tabIndex;
	}
	searchByPlan(selectedPlan){
		this.placeHolder = selectedPlan;
	}
}
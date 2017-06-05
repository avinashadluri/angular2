import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {


  @Input() test: number;
  tempTest:number;

  @Output() notify:EventEmitter<number> = new EventEmitter<number>();

  onTest():void {
    this.tempTest = this.test;
    this.tempTest++;
    this.notify.emit(this.tempTest);
  }




  constructor() { }

  ngOnInit() { }

}

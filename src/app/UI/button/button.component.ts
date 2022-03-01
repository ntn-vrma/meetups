import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() usernameValues:any={};
  @Input() passwordValues:any={};
  @Input() buttonSpecs:any={};
  @Output() clicked=new EventEmitter();
  constructor() { }
  onClickHandler(){
    this.clicked.emit();
  }
}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  constructor() { }

  @Input() currentStatus: string;

  @Output() onLogout = new EventEmitter();
}

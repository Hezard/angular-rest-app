import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  title: string;
  color = "blue";

  constructor() { }

  ngOnInit() {
    this.title = "Hello!";
  }

  log(color): string {
    console.log(color);
    return color;
  }
}

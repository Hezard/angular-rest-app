import { Component, OnInit } from '@angular/core';
import { WidgetsService } from 'app/shared/widgets.service';
import { WidgetItem } from 'app/shared/widget.model';



@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: WidgetItem[]; // or Array<WidgetItem>
  selectedWidget: WidgetItem;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
   this.widgets = this.widgetsService.getWidgets();
  }

  selectWidget(widget: WidgetItem) {
    this.selectedWidget = widget;
  }
}

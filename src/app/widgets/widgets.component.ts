import { Component, OnInit } from '@angular/core';
import { WidgetsService } from 'app/shared/widgets.service';
import { WidgetItem } from 'app/shared/widget.model';
import { NotificationsService } from 'app/shared/notifications.service';



@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: WidgetItem[]; // or Array<WidgetItem>
  selectedWidget: WidgetItem;

  constructor(private widgetsService: WidgetsService, private ns: NotificationsService) { }

  ngOnInit() {
    this.loadWidgets();
    this.reset();
  }

  loadWidgets() {
    this.widgetsService.all().subscribe(
      widgets => this.widgets = widgets
    );
  }

  saveWidget(widget: WidgetItem) {
    if (widget.id) {
      this.widgetsService.update(widget).subscribe(response => {
        this.ns.emit({body: 'Item was updated!'});
        this.loadWidgets();
        this.reset();
      });
    } else {
      this.widgetsService.create(widget).subscribe(response => {
        this.ns.emit({body: 'Item was created!'});
        this.loadWidgets();
        this.reset();
      });
    }
  }

  reset() {
    this.selectedWidget = {
      id: null,
      name: '',
      description: ''
    };
  }

  cancel() {
    this.reset();
  }
  
  deleteWidget(widget: WidgetItem){
    this.widgetsService.delete(widget.id).subscribe(response => {
      this.ns.emit({body: 'Item was deleted!'});
      this.loadWidgets();
      this.reset();
    })
  }

  selectWidget(widget: WidgetItem) {
    this.selectedWidget = widget;
  }
}

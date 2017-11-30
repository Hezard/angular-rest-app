import { Component, OnInit } from '@angular/core';
import { WidgetsService } from 'app/shared/widgets.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WidgetItem } from 'app/shared/widget.model';

@Component({
  selector: 'app-widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.css']
})
export class WidgetItemComponent implements OnInit {
  widget: WidgetItem;
  constructor(private widgetsService: WidgetsService, private routeParams: ActivatedRoute) { }

  ngOnInit() {
    this.routeParams.paramMap
      .map((params: ParamMap) => +params.get('id'))
      .switchMap(id => this.widgetsService.read(id))
      .subscribe(widget => this.widget = widget)
  }

  saveWidget(event) {

  }

  cancel(event) {

  }

}

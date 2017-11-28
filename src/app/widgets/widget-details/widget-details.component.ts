import {Component, EventEmitter, Input, Output} from '@angular/core';
import { WidgetItem } from '../../shared';

@Component({
    selector: 'app-widget-details',
    templateUrl: './widget-details.component.html',
    styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent {
    widgetName: string;
    widget: WidgetItem;

    @Input() set selectedWidget(value: WidgetItem){
        if (value) { this.widgetName = value.name }
        this.widget = Object.assign({}, value);
    };
    @Output() onSave = new EventEmitter();
    @Output() onCancel = new EventEmitter();
}
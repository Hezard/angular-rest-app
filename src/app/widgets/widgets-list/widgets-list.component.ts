import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { WidgetItem } from '../../shared'

@Component({
    selector: 'app-widgets-list',
    templateUrl: './widgets-list.component.html',
    styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {

    @Input() widgets: WidgetItem[];
    @Output() onSelectWidget = new EventEmitter();
    @Output() onDeleteWidget = new EventEmitter();
}
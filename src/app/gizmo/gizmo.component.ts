import { Component, OnInit } from '@angular/core';
import { gizmoItem, GizmoService } from '../shared/gizmo.service';

@Component({
  selector: 'app-gizmo',
  templateUrl: './gizmo.component.html',
  styleUrls: ['./gizmo.component.css']
})



export class GizmoComponent implements OnInit {
  item = <gizmoItem>{}; 

  constructor(private GizmoService: GizmoService) { }

  ngOnInit() {
    this.item = this.GizmoService.getData();
  }

}

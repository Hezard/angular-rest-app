import { Injectable } from '@angular/core';

export interface gizmoItem {
  title: string,
  description: string
};

@Injectable()
export class GizmoService {

  constructor() { }

  getData(): gizmoItem {
    return {
      title: 'Gizmo title',
      description: 'Gizmo description'
    }
  }

}

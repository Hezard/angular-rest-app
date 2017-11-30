import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'app/shared/notifications.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular REST App';
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/items', icon: 'list', label: 'Items'},
    { path: '/reviews', icon: 'list', label: 'Reviews'},
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets'},    
    { path: '/gizmo', icon: 'list', label: 'Gizmo'},
    { path: '/lazy', icon: 'home', label: 'Lazy Module'}
  ];
  
  constructor(private ns: NotificationsService,
              private snackbar: MatSnackBar){ }

  ngOnInit(){
    this.ns.notifications$.subscribe(notification => this.showNotification(notification));
  }

  showNotification(notification) {
    this.snackbar.open(notification.body, 'OK', {
      duration: 4000
    });
  }

}

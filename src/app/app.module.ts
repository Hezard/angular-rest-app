import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { ItemsService, GizmoService, NotificationsService, WidgetsService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { GizmoComponent } from './gizmo/gizmo.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { ReviewsComponent } from 'app/reviews/reviews.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { WidgetItemComponent } from './widgets/widget-item/widget-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    GizmoComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
    ReviewsComponent,
    StatusComponent,
    LoginComponent,
    WidgetItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [ItemsService, NotificationsService, GizmoService, WidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

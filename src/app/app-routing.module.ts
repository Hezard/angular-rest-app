import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { GizmoComponent } from './gizmo/gizmo.component';
import { WidgetsComponent } from 'app/widgets/widgets.component';
import { ReviewsComponent } from 'app/reviews/reviews.component';
import { WidgetItemComponent } from 'app/widgets/widget-item/widget-item.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gizmo', component: GizmoComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'widget/:id', component: WidgetItemComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'lazy', loadChildren: './lazy-load/lazy-load.module#LazyLoadModule'},  
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routing: Routes = [
  {path: '', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routing)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }

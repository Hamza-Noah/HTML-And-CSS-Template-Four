import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetteingsComponent } from './setteings/setteings.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "settings", component: SetteingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

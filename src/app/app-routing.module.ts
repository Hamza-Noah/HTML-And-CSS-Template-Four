import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "settings", component: SettingsPageComponent},
  {path: "profile", component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

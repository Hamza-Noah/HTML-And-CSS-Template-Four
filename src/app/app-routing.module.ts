import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "settings", component: SettingsPageComponent},
  {path: "profile", component: ProfilePageComponent},
  {path: "projects", component: ProjectsPageComponent},
  {path: "courses", component: CoursesComponent},
  {path: "**", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

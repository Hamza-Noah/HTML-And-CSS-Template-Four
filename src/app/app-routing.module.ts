import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendsComponent } from './dashboard/friends/friends.component';
import { FilesPageComponent } from './files-page/files-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [

  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "settings", component: SettingsPageComponent },
  { path: "profile", component: ProfilePageComponent },
  { path: "projects", component: ProjectsPageComponent },
  { path: "courses", component: CoursesComponent },
  { path: "friends", component: FriendsComponent },
  { path: "files", component: FilesPageComponent },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

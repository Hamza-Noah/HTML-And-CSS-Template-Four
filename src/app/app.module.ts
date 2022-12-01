import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetteingsComponent } from './dashboard/setteings/setteings.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ProjectsComponent } from './projects-page/projects/projects.component';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { FriendsComponent } from './dashboard/friends/friends.component';
import { FilesComponent } from './dashboard/files/files.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { QuickDraftComponent } from './dashboard/quick-draft/quick-draft.component';
import { TagetsWidgetComponent } from './dashboard/tagets-widget/tagets-widget.component';
import { TweetStatisticsComponent } from './dashboard/ticket-statistics/ticket-statistics.component';
import { LatestNewsComponent } from './dashboard/latest-news/latest-news.component';
import { TasksWidgetComponent } from './dashboard/tasks-widget/tasks-widget.component';
import { TopSearchWidgetComponent } from './dashboard/top-search-widget/top-search-widget.component';
import { LatestUploadsComponent } from './dashboard/latest-uploads/latest-uploads.component';
import { LastProgressProjectComponent } from './dashboard/last-progress-project/last-progress-project.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectsTableComponent } from './dashboard/projects-table/projects-table.component';
import { FilesPageComponent } from './files-page/files-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SetteingsComponent,
    ProfileComponent,
    ProjectsComponent,
    CoursesComponent,
    FriendsComponent,
    FilesComponent,
    PlansComponent,
    SidebarComponent,
    WelcomeComponent,
    QuickDraftComponent,
    TagetsWidgetComponent,
    TweetStatisticsComponent,
    LatestNewsComponent,
    TasksWidgetComponent,
    TopSearchWidgetComponent,
    LatestUploadsComponent,
    LastProgressProjectComponent,
    SettingsPageComponent,
    ProfilePageComponent,
    ProjectsPageComponent,
    ProjectsTableComponent,
    FilesPageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

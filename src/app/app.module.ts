import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetteingsComponent } from './setteings/setteings.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';
import { FriendsComponent } from './friends/friends.component';
import { FilesComponent } from './files/files.component';
import { PlansComponent } from './plans/plans.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuickDraftComponent } from './quick-draft/quick-draft.component';
import { TagetsWidgetComponent } from './tagets-widget/tagets-widget.component';

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
    TagetsWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
// import { MatRippleModule } from '@angular/material/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const appRoutes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Projects', component: ProjectDetailComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '', redirectTo: 'About', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ProjectDetailComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    FontAwesomeModule,
    // MatRippleModule,
    RouterModule.forRoot(appRoutes, {})
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';

import {RouterModule, Routes} from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { QuizComponent } from './components/quiz/quiz.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'contact',
    component: ContactComponent,
  },{
    path: 'map',
    component: MapComponent,
  },{
    path: 'quiz',
    component: QuizComponent,
  },{
    path: 'blog',
    component: BlogComponent,
  }];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    MapComponent,
    BlogComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class
AppModule { }

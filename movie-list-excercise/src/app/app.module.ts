import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPeliculasGeneralComponent } from './component/list-peliculas-general/list-peliculas-general.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthApprovedComponent } from './component/auth-approved/auth-approved.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPeliculasGeneralComponent,
    HomePageComponent,
    MovieCardComponent,
    NavBarComponent,
    AuthApprovedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

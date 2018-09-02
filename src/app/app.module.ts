import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { FavMoviesComponent } from './component/fav-movies/fav-movies.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieListComponent } from './component/movies/movie-list/movie-list.component';
import { MovieComponent } from './component/movies/movie-list/movie/movie.component';
import { MovieSearchComponent } from './component/movies/movie-search/movie-search.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  FavMoviesComponent,
  MoviesComponent,
  MovieListComponent,
  MovieComponent,
  MovieSearchComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

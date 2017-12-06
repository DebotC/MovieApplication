import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieService } from './services/movie/movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

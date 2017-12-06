import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

export const routes = [
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id', component: MoviesDetailComponent },
    { path: '**', redirectTo: 'movies', pathMatch: 'full' }
];

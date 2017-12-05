import { Component, OnInit } from '@angular/core';
import { Movie } from './model/movie.model';
import { MovieService } from './services/movie/movie.service';

@Component({
  selector: 'rd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}

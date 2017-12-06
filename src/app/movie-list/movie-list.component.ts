import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'rd-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      (res) => {
        this.movies = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

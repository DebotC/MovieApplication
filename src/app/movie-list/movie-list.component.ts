import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rd-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private router: Router) {

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

  getDetailsOfMovie(movie: Movie) {
    this.router.navigate(['movies', movie.id]);
  }

}

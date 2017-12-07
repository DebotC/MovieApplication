import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'rd-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private router: Router) {

  }

  ngOnInit() {
  }

  search(title: string) {
    this.movieService.lookupMovie(title).subscribe(
      (res) => {
        this.movies = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addMovie(movie: Movie) {
    this.movieService.addMovie(movie.onlineId).subscribe(
      (res) => {
        // res returns a Movie (see MovieService)
        this.router.navigate(['/movies', res.id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

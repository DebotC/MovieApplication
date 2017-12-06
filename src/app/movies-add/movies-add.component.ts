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

  title: string;
  movies: Movie[];

  constructor(private movieService: MovieService, private router: Router) { 

  }

  ngOnInit() {
  }

  search() {
    this.movieService.lookupMovie(this.title).subscribe(
      (res) => {
        this.movies = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addMovie(movie: Movie) {
    console.log(movie.onlineId);
    this.movieService.addMovie(movie.onlineId).subscribe(
      (res) => {
        // res returns a Movie (see MovieService)
        this.router.navigate(['/movies', res.id]);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'rd-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    const movieId = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(movieId).subscribe(
      (res) => {
        this.movie = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movie.id).subscribe(
      (res) => {
        this.router.navigate(['/movies']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

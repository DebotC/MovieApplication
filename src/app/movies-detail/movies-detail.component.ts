import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'rd-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const movieId = +this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovie(movieId);
  }

}

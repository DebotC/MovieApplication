import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'rd-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  @Output() selected = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  selectMovie() {
    this.selected.emit(this.movie);
  }

}

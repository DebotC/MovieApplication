import { Injectable } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class MovieService {
  API = environment.apiUrl;

  constructor(private http: HttpClient ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.API);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.API + `/${id}`);
  }
}

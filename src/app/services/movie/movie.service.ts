import { Injectable } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  lookupMovie(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.API + '/search', {
      params: new HttpParams().set('title', title)
    });
  }

  addMovie(onlindeId: string): Observable<Movie> {
    return this.http.post<Movie>(this.API, {
      apiId: onlindeId
    });
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(this.API + `/${id}` )
  }
}

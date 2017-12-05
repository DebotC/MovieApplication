import { Injectable } from '@angular/core';
import { Movie } from '../../model/movie.model';

@Injectable()
export class MovieService {

  movies: Movie[] = [
    { id: 1,
      title: 'Star Wars',
      poster: 'https://image.tmdb.org/t/p/w185/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
      year: 1977,
    },
    { id: 2,
      title: 'Star Wars: The Force Awakens',
      poster: 'https://image.tmdb.org/t/p/w185/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg',
      year: 2015,
    },
    { id: 3,
      title: 'Star Wars: The Last Jedi',
      poster: 'https://image.tmdb.org/t/p/w185/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
      year: 2017,
      plot: 'Having taken her first steps into a larger world in "Star Wars: The Force Awakens",' +
      'Rey continues her epic journey with Finn, Poe and Luke Skywalker in the next chapter of the Star Wars saga.',
      runtime: 150,
    },
    { id: 4,
      title: 'Rogue One: A Star Wars Story',
      poster: 'https://image.tmdb.org/t/p/w185/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg',
      year: 2016,
    },
    { title: 'Star Wars: Episode IX',
    poster: 'https://image.tmdb.org/t/p/w185/yVYTFvIiKyr6vsrPw3o5C6t2eoL.jpg',
    year: 2019,
    }];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }
}

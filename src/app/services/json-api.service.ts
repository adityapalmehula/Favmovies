import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';

@Injectable()
export class JsonApiService {

  constructor(private http: Http) {
  }

// Call rest api to save favourite movie into json database
addToFavourite(movie){
  return this.http.post(AppConfig.apiUrl+'/movies', movie)
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

    // Call rest api to get favourite movies from json database
    getFavourite(){
      return this.http.get(AppConfig.apiUrl+'/movies')
      .map(data => data.json(),
        (error: any)=>this.handleError(error));
    }
    // Handle errors
    private handleError(error: Response){
      return Observable.throw(error.statusText);
    }

    deleteMovie(movieId){
     return this.http.delete(AppConfig.apiUrl+'/movies/'+movieId)
     .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }
  
  }

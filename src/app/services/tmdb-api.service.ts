import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from './../config/config.constant';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbApiService {
  data:any={};
  constructor(private http: Http) {
  }

// search movie data entered by user in search bar
searchMovie(movieName: any){
  return this.http.get(AppConfig.search_api+movieName)
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

//handling error
private handleError(error: Response){
  return Observable.throw(error.statusText);
}
}
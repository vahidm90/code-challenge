import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IPoemModel } from '../interfaces/poem.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoetryDbService {

  constructor(private _http: HttpClient) { }

  getRandomPoems(): Observable<IPoemModel[]> {
    return this._http.get<IPoemModel[]>('https://poetrydb.org/random/20')
      .pipe(catchError(err => {
        console.error(err);
        return of([]);
      //  todo: an API call error Handler service which displays toast upon errors
      }));
  }

}

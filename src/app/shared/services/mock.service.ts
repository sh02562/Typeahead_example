import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { IUserItem } from '../model/user';
import { MyUtils } from '../Utils/myUtils';
import { catchError } from "rxjs/operators";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  getUserData(user:string): Observable<any>{
    let userUrl="https://api.github.com/search/users?q="+user;
    return this.http.get<any>(userUrl)
      .pipe(catchError(this.handleError));
  }

  getRepoData(repo:string): Observable<any>{
    let repoUrl="https://api.github.com/search/repositories?q="+repo;
    return this.http.get<any>(repoUrl)
      .pipe(catchError(this.handleError));
  }

  // getUserData(): Observable<IUserItem[]>{
  //   return this.http.get<any>(this.userURL)
  //     .pipe(map(data=>{return data["items"]}));
  // }
  handleError(error) {
    return throwError(error.message || "Server Error");
  }

}

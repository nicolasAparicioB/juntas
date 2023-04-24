import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Login } from '../interfaces/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'https://servicosjac-v0.herokuapp.com';

  constructor(private http: HttpClient) { }

  login(username:string,password:string): Observable<Login> {
    const url = `${this.url}/v0/login`;
    const body = {username,password}
    return this.http.post<Login>(url,body)
      .pipe(
        tap(({token}) =>sessionStorage.setItem('token',token)),
        map(resp => true),
        catchError(error => of(error.ok))
        )
      
  }
}

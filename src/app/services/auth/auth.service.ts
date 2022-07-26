import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Auth, AuthResponse, User } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!
  private _user!: User;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor( private http: HttpClient ) { }

 

  validarToken(): Observable<boolean> {
    // const url = 'api/auth/renew';
    const url = `${this.baseUrl}api/auth/renew`;

    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( res => {
            // localStorage.setItem('token', res.token! );
            // this._user = {
            //   name: res.name,
            //   uid: res.uid,
            //   email: res.email
            // }

            return res.ok;
          }),
          catchError( err => of(false) )
        );

  }




  login( email: string, password: string ) {
   
    // const url  = 'api/auth/login';
    const url  = `${this.baseUrl}api/auth/login`;
        const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( res => {
        if( res.ok ){
     
          // localStorage.setItem('token', res.token );
          // this._user = {
          //   name: res.name,
          //   uid: res.uid,
          //   email: res.email
          // }
        }
      }),
      map(res => res.ok),
      // catchError( err => of(err.error.msg) )

      
    );
      
  }



  logout() {
    this._auth = undefined;
    localStorage.clear();
  }

}

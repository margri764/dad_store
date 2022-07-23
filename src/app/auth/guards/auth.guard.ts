import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate, CanLoad {

private _auth: Auth |undefined;

constructor( private authservice: AuthService,
  private router: Router ){}


canActivate(): Observable<boolean> | boolean {
  return this.authservice.validarToken()
          .pipe(
            tap( valid => {
              if ( !valid ) {
          alert('Usuario no autenticado')

                this.router.navigateByUrl('/home');
              }
            })
          );
// console.log('activate');
// return true;
}

canLoad(): Observable<boolean> | boolean {
  return this.authservice.validarToken()
    .pipe(
      tap( valid => {
        if ( !valid ) {
          alert('Usuario no autenticado')
          this.router.navigateByUrl('/home');
        }
      })
    );
//     console.log('load');
// return true;

}
}

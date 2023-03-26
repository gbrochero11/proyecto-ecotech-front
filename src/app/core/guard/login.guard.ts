import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){

  }
  canActivate() {
    const currentUser = this.loginService.obtenerDatos();
    if (currentUser && currentUser.token) {
        const typeUser  = currentUser.tipousuario;
        if (typeUser === 1) {
          this.router.navigateByUrl('bodyhoreca')
        } else {
          this.router.navigateByUrl('bodyempresa')
        }
        return false;
    }
    return true;
  }
  
}

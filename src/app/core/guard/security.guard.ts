import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";
import { AlertService } from "@core/services/alert.service";
import { LoginService } from "src/app/feature/login/shared/service/service/login.service";

@Injectable({
  providedIn: "root",
})
export class SecurityGuard implements CanActivate, CanActivateChild {
  constructor(
    private loginService: LoginService,
    private alertService: AlertService
  ) {}

  canActivate() {
    return this.validAuth();
  }

  canActivateChild() {
    return this.validAuth();
  }

  private validAuth(): boolean {
    const currentUser = this.loginService.obtenerDatos();
    if (currentUser && currentUser.token) {
      const time = Math.floor(new Date().getTime() / 1000);
      const payload = JSON.parse(atob(currentUser.token.split(".")[1]));
      const { exp } = payload;
      if (exp > time) {
        return true;
      } else {
        this.alertService.showToast("Su session ha expirado.", "info");
        this.loginService.closeSession();
        return false;
      }
    }
    this.loginService.closeSession();
    return false;
  }
}

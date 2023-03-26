import { HttpService } from "src/app/core/services/http.service";
import { Injectable } from "@angular/core";
import { Response } from "../model/response";
import { Usuario } from "../model/usuario";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(protected http: HttpService, private router: Router) {}

  public loginUsuario(userName: string, password: string) {
    return this.http.doGet<Response>(
      `${environment.apiURL}/api/user/login-user?userName=${userName}&password=${password}`,
      this.http.optsName("login")
    );
  }

  public guardar(usuario: Usuario) {
    return this.http.doPost<Usuario, boolean>(
      `${environment.apiURL}/api/user/register`,
      usuario,
      this.http.optsName("crear servicios")
    );
  }

  public guardarDatos(valor) {
    const jsonData = JSON.stringify(valor);
    localStorage.setItem("usuarioDatos", jsonData);
  }

  public obtenerDatos(): any {
    return JSON.parse(localStorage.getItem("usuarioDatos"));
  }

  public login(data: any) {
    return this.http.doPost<Usuario, any>(
      `${environment.apiURL}/api/user/authenticate`,
      data,
      this.http.optsName("login")
    );
  }

  public closeSession(): void{
    localStorage.clear();
    this.router.navigateByUrl('auth/login');
  }
}

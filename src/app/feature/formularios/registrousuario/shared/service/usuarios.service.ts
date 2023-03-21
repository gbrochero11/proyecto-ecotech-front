import { Usuarios } from './../model/usuarios';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Conductor } from '../model/conductor';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(protected http: HttpService) {}

  public guardar(usuarios: Usuarios) {
    return this.http.doPost<Usuarios, number>(`${environment.endpoint}/user/register`, usuarios,
                                                this.http.optsName('crear/usuario'));
  }

  public obtenerConductores() {
    return this.http.doGet<Conductor[]>(`${environment.endpoint}/usuarios-carrion/2`,
                                                this.http.optsName('crear/usuario'));
  }
}

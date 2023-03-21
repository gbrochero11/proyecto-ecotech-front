import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { AssignedResource } from './model/AssignedResource';
import { UserAppDTO } from './model/UserAppDTO';

@Injectable({
  providedIn: 'root'
})
export class ResourcecompanyService {

  constructor(protected http: HttpService) {}

  public guardar(userAppDTO: UserAppDTO) {
    debugger
    return this.http.doPost<UserAppDTO, boolean>(`https://ecotechcol.herokuapp.com/api/user-app/register`, userAppDTO,
                                                this.http.optsName('crear recurso'));
  }

  public obtenerResource(document: number) {
    return this.http.doGet<UserAppDTO[]>(`https://ecotechcol.herokuapp.com/api/user-app/userapp-company?idCompany=${document}`, this.http.optsName('consultar servicios'));
  }

  public assignedResource(userAppDTO: AssignedResource) {
    debugger
    return this.http.doPost<AssignedResource, boolean>(`https://ecotechcol.herokuapp.com/api/orderservice/update-resource`, userAppDTO,
                                                this.http.optsName('crear recurso'));
  }
}

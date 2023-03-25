import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { AssignedResource } from './model/AssignedResource';
import { UserAppDTO } from './model/UserAppDTO';

@Injectable({
  providedIn: 'root'
})
export class ResourcecompanyService {

  constructor(protected http: HttpService) {}

  public guardar(userAppDTO: UserAppDTO) {
    return this.http.doPost<UserAppDTO, boolean>(`${environment.apiURL}/api/user-app/register`, userAppDTO,
                                                this.http.optsName('crear recurso'));
  }

  public obtenerResource(document: number) {
    return this.http.doGet<UserAppDTO[]>(`${environment.apiURL}/api/user-app/userapp-company?idCompany=${document}`, this.http.optsName('consultar servicios'));
  }

  public assignedResource(userAppDTO: AssignedResource) {
    return this.http.doPost<AssignedResource, boolean>(`${environment.apiURL}/api/orderservice/update-resource`, userAppDTO,
                                                this.http.optsName('crear recurso'));
  }
}

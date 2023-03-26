import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Oferrs } from './model/Oferrs';

@Injectable({
  providedIn: 'root'
})
export class OferrsService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Oferrs[]>(`${environment.apiURL}/api/orderservice/order-service-avaible`, this.http.optsName('consultar servicios'));
  }

  public guardarNovedad(oferrs: Oferrs) {
    return this.http.doPost<Oferrs, boolean>(`${environment.apiURL}/api/orderservice/update-order`, oferrs,
                                                this.http.optsName('asociar servicio a empresa'));
  }
}

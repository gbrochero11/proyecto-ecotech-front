import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Oferrs } from './model/Oferrs';

@Injectable({
  providedIn: 'root'
})
export class OferrsService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Oferrs[]>(`https://ecotechcol.herokuapp.com/api/orderservice/order-service-avaible`, this.http.optsName('consultar servicios'));
  }

  public guardarNovedad(oferrs: Oferrs) {
    console.log(JSON.stringify(oferrs))
    return this.http.doPost<Oferrs, boolean>(`https://ecotechcol.herokuapp.com/api/orderservice/update-order`, oferrs,
                                                this.http.optsName('asociar servicio a empresa'));
  }
}

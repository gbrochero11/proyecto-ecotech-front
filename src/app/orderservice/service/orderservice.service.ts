import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { OrderService } from './model/OrderService';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(protected http: HttpService) {}

  public guardar(orderservice: OrderService) {
    debugger
    return this.http.doPost<OrderService, boolean>(`https://ecotechcol.herokuapp.com/api/orderservice/registerorder`, orderservice,
                                                this.http.optsName('crear servicios'));
  }
}

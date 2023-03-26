import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { OrderService } from './model/OrderService';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(protected http: HttpService) {}

  public guardar(orderservice: OrderService) {
    return this.http.doPost<OrderService, boolean>(`${environment.apiURL}/api/orderservice/registerorder`, orderservice,
                                                this.http.optsName('crear servicios'));
  }
}

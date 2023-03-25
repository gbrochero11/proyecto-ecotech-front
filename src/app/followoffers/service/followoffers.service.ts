import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { FollowOffers } from './model/followoffers';

@Injectable({
  providedIn: 'root'
})
export class FollowoffersService {

  constructor(protected http: HttpService) {}

  public consultar(document: string) {
    return this.http.doGet<FollowOffers[]>(`${environment.apiURL}/api/orderservice/order-oferrs-accepted?document=${document}`, this.http.optsName('consultar servicios'));
  }

  public consultarNotAssigned(document: string) {
    return this.http.doGet<FollowOffers[]>(`${environment.apiURL}/api/orderservice/oferrs-not-assigned?document=${document}`, this.http.optsName('consultar servicios'));
  }

  
}

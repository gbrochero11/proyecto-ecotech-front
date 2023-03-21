import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { FollowOffers } from './model/followoffers';

@Injectable({
  providedIn: 'root'
})
export class FollowoffersService {

  constructor(protected http: HttpService) {}

  public consultar(document: string) {
    return this.http.doGet<FollowOffers[]>(`https://ecotechcol.herokuapp.com/api/orderservice/order-oferrs-accepted?document=${document}`, this.http.optsName('consultar servicios'));
  }

  public consultarNotAssigned(document: string) {
    return this.http.doGet<FollowOffers[]>(`https://ecotechcol.herokuapp.com/api/orderservice/oferrs-not-assigned?document=${document}`, this.http.optsName('consultar servicios'));
  }

  
}

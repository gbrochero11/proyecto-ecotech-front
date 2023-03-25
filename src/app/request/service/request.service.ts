import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Request } from './model/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(protected http: HttpService) {}

  public consultar(document: string) {
    return this.http.doGet<Request[]>(`${environment.apiURL}/api/orderservice/order-services-document?document=${document}`, this.http.optsName('consultar servicios'));
  }
}

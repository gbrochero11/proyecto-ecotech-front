import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { LogBook } from './model/LogBook';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  constructor(protected http: HttpService) {}

  public consultar(idSolicitud: number) {
    return this.http.doGet<LogBook[]>(`${environment.apiURL}/api/logbook/logbook-id?idSolicitud=${idSolicitud}`, this.http.optsName('consultar bitacora de servicio'));
  }
}

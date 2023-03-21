import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LogBook } from './model/LogBook';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  constructor(protected http: HttpService) {}

  public consultar(idSolicitud: number) {
    console.log('Llego a realizar peticion', idSolicitud)
    return this.http.doGet<LogBook[]>(`https://ecotechcol.herokuapp.com/api/logbook/logbook-id?idSolicitud=${idSolicitud}`, this.http.optsName('consultar bitacora de servicio'));
  }
}

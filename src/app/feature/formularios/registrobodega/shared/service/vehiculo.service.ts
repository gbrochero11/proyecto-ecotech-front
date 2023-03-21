import { Vehiculo } from '../model/vehiculo';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { NewWinnery } from '../model/newwinnery';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(protected http: HttpService) {}

  public guardar(vehiculo: Vehiculo) {
    console.log(JSON.stringify(vehiculo))
    return this.http.doPost<Vehiculo, boolean>(`${environment.endpoint}/vehiculo`, vehiculo,
                                                this.http.optsName('crear/actualizar vehiculo'));
  }

  public guardarNovedad(newwinnery: NewWinnery) {
    console.log(JSON.stringify(newwinnery))
    return this.http.doPost<NewWinnery, boolean>(`${environment.endpoint}/new-winery/register`, newwinnery,
                                                this.http.optsName('crear/actualizar vehiculo'));
  }
}

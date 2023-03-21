import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Unidades } from '../../materiales/shared/model/unidades';
import { Ciudades } from '../model/ciudades';
import { Departamento } from '../model/departamento';


@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(protected http: HttpService) { }

  public consultarCiudades(departament:  string) {
    return this.http.doGet<Ciudades[]>(`${environment.endpoint}/city/cityDepartament?departament=${departament}`,
                this.http.optsName('consultar ciudades'));
  }

  public consultarDepartament() {
    return this.http.doGet<Departamento[]>(`${environment.endpoint}/city/departament`,
                this.http.optsName('consultar departamentos'));
  }

  public consultarUnidad(unidad: string) {
    return this.http.doGet<Unidades[]>(`${environment.endpoint}/materials/unitMaterial?codigo=${unidad}`,
                this.http.optsName('consultar ciudades'));
  }

  public consultarAllCiudades() {
    return this.http.doGet<Ciudades[]>(`${environment.endpoint}/city/allCity`,
                this.http.optsName('consultar ciudades'));
  }
}

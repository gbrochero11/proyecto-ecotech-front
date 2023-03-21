import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Materiales } from '../model/materiales';
import { Unidades } from '../model/unidades';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  constructor(protected http: HttpService) { }


  public consultarMateriales() {
    return this.http.doGet<Materiales[]>(`${environment.endpoint}/materials/allMaterials`,
                this.http.optsName('consultar materiales'));
  }

  public consultarFiltrarMateriales(suministro: string) {
    return this.http.doGet<Materiales[]>(`${environment.endpoint}/materials/materials-owned?suministro=${suministro}`,
                this.http.optsName('consultar materiales'));
  }

  public consultarUnidades() {
    return this.http.doGet<Unidades[]>(`${environment.endpoint}/materials/units`,
                this.http.optsName('consultar unidades'));
  }

  public actualizarCrearMaterial(materiales: Materiales) {
    console.log(JSON.stringify(materiales))
    return this.http.doPost<Materiales, boolean>(`${environment.endpoint}/materials/register-materials`, materiales,
                                                this.http.optsName('crear/actualizar material'));
  }
}

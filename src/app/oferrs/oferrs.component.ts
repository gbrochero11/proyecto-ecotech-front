import { Component} from '@angular/core';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { Oferrs } from './service/model/Oferrs';
import { OferrsService } from './service/oferrs.service';

@Component({
  selector: 'app-oferrs',
  templateUrl: './oferrs.component.html',
  styleUrls: ['./oferrs.component.scss']
})
export class OferrsComponent {

  public columnas: string[] = ['Fecha', 'Cliente', 'Toneladas', 'Ciudad', 'Telefono', 'Fecha', 'Aceptar', 'Rechazar'];
  searchText: string;
  selected = "Ofertas"
  data: Oferrs[] =[];
  update(e){
    this.selected = e.target.value
  }

  constructor(protected oferrsService: OferrsService, protected loginService: LoginService) { }

  ngOnInit(): void {
    this.listarOferrs();
  }
  aceptarSolicitud(data: Oferrs) {
    const datos=JSON.parse(this.loginService.obtenerDatos());
    console.log('obtuvo el id de usuario', datos.data.documento_empresa)
    if (confirm("¿Quiere aceptar esta solicitud?")) {
      data.documento_empresa = datos.data.documento
      data.codigo_estado = 2
      this.oferrsService.guardarNovedad(data).subscribe((numero)=> {
        console.log(numero)
      });
      this.refresh();
    }
  }


  rechazarSolicitud(cod: number) {
    if (confirm("¿Quiere rechazar esta solicitud?")) {
      this.data.splice(cod, 1);
    }
  }

  private listarOferrs(){
    const datos=JSON.parse(this.loginService.obtenerDatos());
    console.log('obtuvo el id de usuario', datos.data.documento)

    this.oferrsService.consultar().subscribe(listaOferrs=>{
      this.data = listaOferrs['data'];
      console.log(this.data);
    })
  }

  refresh(): void {
    window.location.reload();
  }
}



export class Articulo {
  constructor(public codigo: string, public descripcion: string) {
  }
}

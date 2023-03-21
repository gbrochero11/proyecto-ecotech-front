import { Component, OnInit } from '@angular/core';
import { Ciudades } from './model/ciudades';
import { CiudadesService } from './shared/ciudades.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  public titulo: string = 'VISUALIZAR DATOS DE CIUDADES';
  public encabezadoTabla: string[] = ['Codigo','Zona',  'Ciudad'];
  searchText: string;
  selected = "Ciudades"
  listaCiudades: Ciudades[] =[];
  update(e){
    this.selected = e.target.value
  }

  constructor(protected ciudadesService: CiudadesService) { }

  ngOnInit(): void {
    this.listarCiudades();
  }

  private listarCiudades(){
    this.ciudadesService.consultarAllCiudades().subscribe(datosRespuesta => {
      this.listaCiudades=datosRespuesta;
      console.log(datosRespuesta)
    })
  }

}

import { Component, OnInit} from '@angular/core';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { LogbookService } from '../logbook/service/logbook.service';
import { LogBook } from '../logbook/service/model/LogBook';
import { FollowoffersService } from './service/followoffers.service';
import { FollowOffers } from './service/model/followoffers';

@Component({
  selector: 'app-followoffers',
  templateUrl: './followoffers.component.html',
  styleUrls: ['./followoffers.component.scss']
})
export class FollowoffersComponent   implements OnInit{

  public encabezadoTabla: string[] = ['Codigo',  'Fecha', 'Descripcion', 'Estado Servicio'];
  public columnas: string[] = ['Codigo', 'Dirección', 'Fecha Solicitud', 'Visualizar Bitacora'];

  searchText: string;
  selected = "Solicitud"
  data: FollowOffers[] =[];
  listaBitacora: LogBook[] =[];
  
  update(e){
    this.selected = e.target.value
  }

  constructor(protected followService: FollowoffersService, protected loginService: LoginService, protected logBookService: LogbookService) { }

  borrarFila(/*cod: number*/) {
    if (confirm("Realmente quiere borrarlo?")) {
     /* this.datos.splice(cod, 1);
      this.tabla1.renderRows();*/
    }
  }

  ngOnInit(): void {
    this.listarOffersAccept()
  }

  private listarOffersAccept(){
    const datos=JSON.parse(this.loginService.obtenerDatos());
    this.followService.consultar(datos.data.documento).subscribe(listaRequests=>{
      this.data = listaRequests['data'];
      console.log(this.data);
    })
  }

  public dataLogBook(id: number){
    this.logBookService.consultar(id).subscribe(bitacora=>{
      this.listaBitacora = bitacora['data'];
      console.log(this.listaBitacora);
    });
  }

}


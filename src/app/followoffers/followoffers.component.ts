import { Component, OnInit, ViewChild} from '@angular/core';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { LogbookService } from '../logbook/service/logbook.service';
import { LogBook } from '../logbook/service/model/LogBook';
import { FollowoffersService } from './service/followoffers.service';
import { FollowOffers } from './service/model/followoffers';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;

  
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
    const datos=this.loginService.obtenerDatos();
    this.followService.consultar(datos.documento).subscribe(listaRequests=>{
      this.data = listaRequests['data'];
    })
  }

  public dataLogBook(id: number){
    this.logBookService.consultar(id).subscribe(bitacora=>{
      this.listaBitacora = bitacora['data'];
      this.showChildModal()
    });
  }

  showChildModal(): void {
    this.childModal.config = {
      backdrop: false
    }
    this.childModal?.show();
  }
 
  hideChildModal(): void {
    this.childModal?.hide();
  }

}


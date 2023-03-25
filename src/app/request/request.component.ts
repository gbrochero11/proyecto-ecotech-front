import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { LogbookService } from '../logbook/service/logbook.service';
import { LogBook } from '../logbook/service/model/LogBook';
import { Request } from './service/model/Request';
import { RequestService } from './service/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit{

  public encabezadoTabla: string[] = ['Fecha', 'Descripcion', 'Estado Servicio'];
  public columnas: string[] = ['Codigo', 'Dirección', 'Fecha Solicitud', 'Visualizar Bitacora'];
  searchText: string;
  selected = "Solicitud"
  data: Request[] =[];
  listaBitacora: LogBook[] =[];
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;


  update(e){
    this.selected = e.target.value
  }

  constructor(protected requestService: RequestService, protected loginService: LoginService, protected logBookService: LogbookService) { }

  ngOnInit(): void {
    this.listarRequest();
  }

  private listarRequest(){
    const datos=JSON.parse(this.loginService.obtenerDatos());
    console.log('obtuvo el id de usuario', datos.data.documento)

    this.requestService.consultar(datos.data.documento).subscribe(listaRequests=>{
      this.data = listaRequests['data'];
      console.log(this.data);
    })
  }

  public dataLogBook(id: number){
    this.logBookService.consultar(id).subscribe(bitacora=>{
      this.listaBitacora = bitacora['data'];
      console.log(this.listaBitacora);
    });
    this.showChildModal()
  }

  showChildModal(): void {
    this.childModal?.show();
  }
 
  hideChildModal(): void {
    this.childModal?.hide();
  }

}

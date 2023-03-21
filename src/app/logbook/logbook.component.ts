import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { LogbookService } from './service/logbook.service';
import { LogBook } from './service/model/LogBook';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.scss']
})
export class LogbookComponent implements OnInit {

  public listaBitacora: Observable<LogBook[]>;

  public encabezadoTabla: string[] = ['Codigo',  'Fecha', 'Número Solicitud', 'Descripcion'];
  searchText: string;

  constructor(protected logBookService: LogbookService, protected loginService: LoginService) { }
  ngOnInit(): void {
    const datos=JSON.parse(this.loginService.obtenerDatos());
    console.log('obtuvo el id de usuario', datos.id)
    this.listaBitacora = this.logBookService.consultar(datos.id);
  }

}

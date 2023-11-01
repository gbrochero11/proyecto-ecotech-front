import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { OrderserviceService } from './service/orderservice.service';
import { formatDate} from '@angular/common';
import { AlertService } from '@core/services/alert.service';



@Component({
  selector: 'app-orderservice',
  templateUrl: './orderservice.component.html',
  styleUrls: ['./orderservice.component.scss'],
})
export class OrderserviceComponent implements OnInit {
  
  solicitudForm: FormGroup;

  cities : [
    {name:"Barranquilla", value:"Barranquilla"},
    {name:"Medellin", value:"Medellin"},
    {name:"Bogota", value:"Bogota"},
    {name:"Santa Marta", value:"Santa Marta"},
    {name:"Riohacha", value:"Riohacha"},
    {name:"Cartagena", value:"Cartagena"},
    {name:"Cali", value:"Cali"},
    {name:"Cucuta", value:"Cucuta"}
  ]

  constructor(protected orderServices: OrderserviceService, protected loginService: LoginService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.construirFormularioSolicitud();
  }

  crearSolicitud() {
    this.solicitudForm.get('fecha_solicitud')
    .setValue(formatDate(this.solicitudForm.get('fecha_solicitud').value,'yyyy-MM-dd HH:mm:ss' , 'en-US'))
    this.orderServices.guardar(this.solicitudForm.value).subscribe({
      next: ()=> {
        this.alertService.showToast('Solicitud creada correctamente', 'info')
        this.solicitudForm.reset()
      },
      error: ()=>  {
        this.alertService.showToast('Ha ocurrido un error comuniquese con el administrador', 'error')
      },
    })
  }

  private construirFormularioSolicitud() {
    const datos=this.loginService.obtenerDatos();
    this.solicitudForm = new FormGroup({
      documento_usuario: new FormControl(datos.documento),
      direccion: new FormControl('', [Validators.required]),
      toneladas: new FormControl('', [Validators.required]),
      fecha_solicitud: new FormControl('', [Validators.required]),
      ciudad_origen: new FormControl('', [Validators.required]),
      codigo_estado: new FormControl('1', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
    });
  }

}

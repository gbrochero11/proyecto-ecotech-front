import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { OrderserviceService } from './service/orderservice.service';

@Component({
  selector: 'app-orderservice',
  templateUrl: './orderservice.component.html',
  styleUrls: ['./orderservice.component.scss']
})
export class OrderserviceComponent implements OnInit {


  
  solicitudForm: FormGroup;

  constructor(protected orderServices: OrderserviceService, protected loginService: LoginService) { }

  ngOnInit(): void {
    this.construirFormularioSolicitud();
  }

  crearSolicitud() {
    this.orderServices.guardar(this.solicitudForm.value).subscribe(()=> {
      this.solicitudForm.patchValue({
        documento_usuario: [''],
        direccion: [''],
        toneladas: [''],
        fecha_solicitud: [''],
        ciudad_origen: [''],
        codigo_estado: [''],
        telefono: ['']
       });
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

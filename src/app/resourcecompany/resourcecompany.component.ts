import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { ResourcecompanyService } from './service/resourcecompany.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-resourcecompany',
  templateUrl: './resourcecompany.component.html',
  styleUrls: ['./resourcecompany.component.scss']
})
export class ResourcecompanyComponent implements OnInit {


  solicitudForm: FormGroup;

  constructor(protected resourceService: ResourcecompanyService, protected loginService: LoginService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.construirFormularioResource();
  }

  crearRecurso() {
    this.resourceService.guardar(this.solicitudForm.value).subscribe(usuarioServicio=> {
      console.log("Response Data: ", usuarioServicio);
      this.solicitudForm.reset();
      this.toastService.success("Recurso creado exitosamente.", "SUCCESS");
    }, () => {
      this.toastService.error("Ha ocurrido un error creando el recurso, por favor comunicarse con el administrador.", "ERROR");
    });
  }

  private construirFormularioResource() {
    const datos=JSON.parse(this.loginService.obtenerDatos());
    this.solicitudForm = new FormGroup({
      id_empresa: new FormControl(datos.data.id),
      documento: new FormControl('', [Validators.required]),
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      usuarioapp: new FormControl('', [Validators.required]),
      contrasenaapp: new FormControl('', [Validators.required]),
    });
  }

}

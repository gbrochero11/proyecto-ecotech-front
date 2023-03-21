import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { ResourcecompanyService } from './service/resourcecompany.service';

@Component({
  selector: 'app-resourcecompany',
  templateUrl: './resourcecompany.component.html',
  styleUrls: ['./resourcecompany.component.scss']
})
export class ResourcecompanyComponent implements OnInit {


  solicitudForm: FormGroup;

  constructor(protected resourceService: ResourcecompanyService, protected loginService: LoginService) { }

  ngOnInit(): void {
    this.construirFormularioResource();
  }

  crearRecurso() {
    this.resourceService.guardar(this.solicitudForm.value).subscribe(usuarioServicio=> {
      console.log("Response Data: ", usuarioServicio)
      this.solicitudForm.patchValue({
        id_empresa: [''],
        documento: [''],
        nombres: [''],
        apellidos: [''],
        usuarioapp: [''],
        contrasenaapp: ['']
       });
    })
  }

  private construirFormularioResource() {
    const datos=JSON.parse(this.loginService.obtenerDatos());
    debugger
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

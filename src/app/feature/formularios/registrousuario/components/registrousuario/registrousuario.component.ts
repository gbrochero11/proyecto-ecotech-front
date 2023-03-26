import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../shared/service/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrouUsuariosComponent implements OnInit {

  public titulo = 'Registrar Usuario';
  registroUsuariosForm: FormGroup;
  constructor(protected usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.construirFormularioRegistrouUsuarios();
  }

  crear() {
    this.usuariosService.guardar(this.registroUsuariosForm.value).subscribe(()=> {
    });
  }

  private construirFormularioRegistrouUsuarios() {
    this.registroUsuariosForm = new FormGroup({
    identificacion: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    segundo_nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    segundo_apellido: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]),
    tiporol: new FormControl('', [Validators.required]),
    });
  }


}

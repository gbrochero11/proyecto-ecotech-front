import { Router } from '@angular/router';
import { LoginService } from '../shared/service/service/login.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '../shared/service/model/response';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public titulo = 'Iniciar sesión';
  public loginForm: FormGroup;
  public registerUserForm: FormGroup;
  private usuario: Response;
  
  modalRef?: BsModalRef;
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;
  @ViewChild('childModalRegister', { static: false }) childModalRegister?: ModalDirective;

  public isToogleMenu: boolean;


  
  constructor(protected loginService: LoginService, protected router: Router, protected modalService: BsModalService) {
    this.usuario = new Response();
  }

  ngOnInit(): void {
    this.construirFormularioLogin();
    this.construirFormularioRegister();
  }

  private construirFormularioRegister() {
    this.registerUserForm = new FormGroup({
      documento: new FormControl('', [Validators.required]),
      tipoUsuario: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      razon_social: new FormControl('', [Validators.required]),
      codigo_rut: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      representante: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo_electronico: new FormControl('', [Validators.required]),
      usuario_app: new FormControl('', [Validators.required]),
      password_app: new FormControl('', [Validators.required])
    });
  }

  private construirFormularioLogin() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', [Validators.required])
    });
  }

  crearUsuario() {
    
    this.loginService.guardar(this.registerUserForm.value).subscribe(usuarioServicio=> {
      console.log("Response Data: ", usuarioServicio)
      this.hideChildModalRegister()
    })
  }

  public login() {

    this.fabricarUsuario();
    this.hideChildModal();
  }

  private fabricarUsuario() {
  const usuario=this.loginForm.get('usuario').value;
  const clave = this.loginForm.get('contraseña').value;

    this.loginService.loginUsuario(usuario,clave).subscribe(usuarioServicio=> {
      this.usuario=usuarioServicio;
      this.loginService.guardarDatos(this.usuario)
      console.log("Response Data: ", this.loginService.obtenerDatos())
      const url = this.usuario.data.tipousuario == "1" ? 'bodyhoreca' : 'bodyempresa'
      this.router.navigate([url])
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


 
  showChildModal(): void {
    this.childModal?.show();
  }

  showChildModalRegister(): void {
    this.childModalRegister?.show();
  }
 
  hideChildModal(): void {
    this.childModal?.hide();
  }

  hideChildModalRegister(): void {
    this.childModalRegister?.hide();
  }

  changeToogle(): void {
    this.isToogleMenu = !this.isToogleMenu;
  }
}

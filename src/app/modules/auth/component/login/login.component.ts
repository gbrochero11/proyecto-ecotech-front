import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@core/services/alert.service';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;


  constructor(protected loginService: LoginService, protected router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public login(): void {
    this.form.get('password').setValue(btoa(this.form.get('password').value))
      this.loginService.login(this.form.value).subscribe(response=> {
        this.loginService.guardarDatos(response)
        if (response && !response.tipousuario) {
          this.alertService.showToast("Ha ocurrido un error, por favor comuniquese con el administrador.", 'error');
          return;
        }
        const url = response.tipousuario == 1 ? 'bodyhoreca' : 'bodyempresa'
        this.router.navigate([url])
      }, err => {
        const messageResponse = err.error.message;
        if (messageResponse === "INVALID_CREDENTIALS") {
          this.alertService.showToast('Nombre de usuario y/o contraseña incorrecta.', 'error');
        }else {
          this.alertService.showToast(messageResponse, 'error');
        }
      })
    }

    redirectoToRegister(): void {
      this.router.navigateByUrl('auth/register');
    }

}

import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";
import { AlertService } from "@core/services/alert.service";
import { LoginService } from "src/app/feature/login/shared/service/service/login.service";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"],
})
export class UserRegisterComponent implements OnInit {
  public form: FormGroup;
  public typeDocuments: any[] = [
    { id: 1, name: "Cédula de ciudadania" },
    { id: 2, name: "Pasaporte" },
    { id: 3, name: "NIT" },
  ];
  public typeAccounts: any[] = [
    { id: 1, name: "Usuario HORECA" },
    { id: 2, name: "Usuario EMPRESA" },
  ];

  constructor(
    protected loginService: LoginService, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }
  setForm(): void {
    this.form = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      tipo_documento: new FormControl("", [Validators.required]),
      documento: new FormControl("", [Validators.required]),
      ciudad: new FormControl("", [Validators.required]),
      razon_social: new FormControl("", [Validators.required]),
      codigoRut: new FormControl("", [Validators.required]),
      representante: new FormControl("", [Validators.required]),
      correoElectronico: new FormControl("", [
        Validators.required,
        Validators.email,
      ]),
      direccion: new FormControl("", [Validators.required]),
      telefono: new FormControl("", [Validators.required]),
      usuarioApp: new FormControl("", [Validators.required]),
      passwordApp: new FormControl("", [Validators.required]),
      tipoUsuario: new FormControl("", [Validators.required]),
      password_confirm: new FormControl("", []),
    });
    this.form
      .get("password_confirm")
      .setValidators([
        this.equalsValidator(this.form.get("passwordApp")),
        Validators.required,
      ]);
  }

  equalsValidator(otherControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value: any = control.value;
      const otherValue: any = otherControl.value;
      return otherValue === value ? null : { notEquals: { value, otherValue } };
    };
  }

  submit(): void {
    const formData = JSON.parse(JSON.stringify(this.form.value));
    formData.passwordApp = btoa(formData.passwordApp);
    formData.password_confirm = formData.passwordApp
    
    this.loginService.guardar(formData).subscribe(
      () => {
        this.alertService.showToast("Cuenta creada exitosamente.", 'success');
        this.form.reset();
      },
      () => {
        this.alertService.showToast("Ha ocurrido un error al crear la cuenta, por favor comuniquese con el administrador.", 'error');
      }
    );
  }
}

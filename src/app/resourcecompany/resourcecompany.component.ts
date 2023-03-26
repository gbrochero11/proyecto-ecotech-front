import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../feature/login/shared/service/service/login.service";
import { ResourcecompanyService } from "./service/resourcecompany.service";
import { AlertService } from "@core/services/alert.service";

@Component({
  selector: "app-resourcecompany",
  templateUrl: "./resourcecompany.component.html",
  styleUrls: ["./resourcecompany.component.scss"],
})
export class ResourcecompanyComponent implements OnInit {
  solicitudForm: FormGroup;

  constructor(
    protected resourceService: ResourcecompanyService,
    protected loginService: LoginService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.construirFormularioResource();
  }

  crearRecurso() {
    this.resourceService.guardar(this.solicitudForm.value).subscribe(
      () => {
        this.solicitudForm.reset();
        this.alertService.showToast("Recurso creado exitosamente.", "success");
      },
      () => {
        this.alertService.showToast(
          "Ha ocurrido un error creando el recurso, por favor comunicarse con el administrador.",
          "error"
        );
      }
    );
  }

  private construirFormularioResource() {
    const datos = this.loginService.obtenerDatos();
    this.solicitudForm = new FormGroup({
      id_empresa: new FormControl(datos.id),
      documento: new FormControl("", [Validators.required]),
      nombres: new FormControl("", [Validators.required]),
      apellidos: new FormControl("", [Validators.required]),
      usuarioapp: new FormControl("", [Validators.required]),
      contrasenaapp: new FormControl("", [Validators.required]),
    });
  }
}

import { Component } from "@angular/core";
import { LoginService } from "../feature/login/shared/service/service/login.service";
import { Oferrs } from "./service/model/Oferrs";
import { OferrsService } from "./service/oferrs.service";
import { AlertService } from "@core/services/alert.service";

@Component({
  selector: "app-oferrs",
  templateUrl: "./oferrs.component.html",
  styleUrls: ["./oferrs.component.scss"],
})
export class OferrsComponent {
  public columnas: string[] = [
    "Fecha",
    "Cliente",
    "Toneladas",
    "Ciudad",
    "Telefono",
    "Fecha",
    "Aceptar",
    "Rechazar",
  ];
  searchText: string;
  selected = "Ofertas";
  data: Oferrs[] = [];
  update(e) {
    this.selected = e.target.value;
  }

  constructor(
    protected oferrsService: OferrsService,
    protected loginService: LoginService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.listarOferrs();
  }
  aceptarSolicitud(data: Oferrs) {
    const datos = this.loginService.obtenerDatos();
    if (confirm("¿Quiere aceptar esta solicitud?")) {
      data.documento_empresa = datos.documento;
      data.codigo_estado = 2;
      this.oferrsService.guardarNovedad(data).subscribe(
        () => {
          this.listarOferrs();
          this.alertService.showToast(
            "Solicitud aceptada exitosamente.",
            "success"
          );
        },
        () => {
          this.alertService.showToast(
            "Ha ocurrido un error aceptando la solicitud, por favor comunicarse con el administrador.",
            "error"
          );
        }
      );
    }
  }

  rechazarSolicitud(cod: number) {
    if (confirm("¿Quiere rechazar esta solicitud?")) {
      this.data.splice(cod, 1);
    }
  }

  private listarOferrs() {
    this.oferrsService.consultar().subscribe((listaOferrs) => {
      this.data = listaOferrs["data"];
    });
  }
}

export class Articulo {
  constructor(public codigo: string, public descripcion: string) {}
}

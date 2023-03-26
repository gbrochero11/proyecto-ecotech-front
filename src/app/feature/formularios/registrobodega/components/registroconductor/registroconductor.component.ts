import { VehiculoService } from '../../shared/service/vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Materiales } from 'src/app/feature/maestros/materiales/shared/model/materiales';
import { MaterialesService } from 'src/app/feature/maestros/materiales/shared/service/materiales.service';
import { Ciudades } from 'src/app/feature/maestros/ciudades/model/ciudades';
import { CiudadesService } from 'src/app/feature/maestros/ciudades/shared/ciudades.service';
import { Departamento } from 'src/app/feature/maestros/ciudades/model/departamento';
import { MaterialPertenece } from '../../shared/model/materialpertenece';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';

@Component({
  selector: 'app-registroconductor',
  templateUrl: './registroconductor.component.html',
  styleUrls: ['./registroconductor.component.css']
})
export class RegistroconductorComponent implements OnInit {
  public titulo = 'REGISTRAR NOVEDAD DE BODEGA';
  registroVehiculoForm: FormGroup;
  materialesLista: Materiales[]=[];
  ciudadesLista: Ciudades[]=[];
  zonasLista: Departamento[]=[];
  unidad: String;
  seleccionados:string[]=[];
  loading = false;

  startDate = new Date(2000, 0, 2);
  selected = "MATERIALES"

  pertenece: MaterialPertenece[] = [
    { id: 1, pertenece: 'Propio' },
    { id: 2, pertenece: 'Cliente' }
  ];
  
  update(e){
    this.selected = e.target.value
  }
  
  constructor(protected vehiculoService: VehiculoService,
    protected materialesServices: MaterialesService,
    protected ciudadesServices: CiudadesService,
    protected loginService: LoginService) { }

  ngOnInit(): void {
    this.construirFormularioRegistrouUsuarios();
    //this.obtenerMateriales();
    this.obtenerDepartamentos();
  }

  crear() {
    this.vehiculoService.guardarNovedad(this.registroVehiculoForm.value).subscribe(()=> {
    });
    this.refresh();
  }

  private construirFormularioRegistrouUsuarios() {
    this.registroVehiculoForm = new FormGroup({
      id_movimiento: new FormControl('', []),
      id_estado: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      pertenece: new FormControl('', [Validators.required]),
      solicitado_por: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
      serial: new FormControl('', [Validators.required]),
      id_ciudad: new FormControl('', [Validators.required]),
      zona: new FormControl('', [Validators.required])
    });
  }

  /*obtenerMateriales(){
    this.materialesServices.consultarMateriales().subscribe(listaDatos=>{
        this.materialesLista=listaDatos;
        console.log(this.materialesLista)
    })
  }*/

  obtenerDepartamentos(){
    this.ciudadesServices.consultarDepartament().subscribe(listaDatosDeparment=>{
        this.zonasLista=listaDatosDeparment;
    })
  }

  metodoCargarCiudades(departament: string) {
    this.ciudadesServices.consultarCiudades(departament).subscribe(listaDatosCiudad=>{
      this.ciudadesLista=listaDatosCiudad;
    })
  };

  metodoCargarUnidades(e: any) {
    this.unidad=e.target.value;
  };

  obtenerFiltrarMateriales(suministro: string){
    this.materialesServices.consultarFiltrarMateriales(suministro).subscribe(listaDatos=>{
        this.materialesLista=listaDatos;
    })
  }

  refresh(): void {
    window.location.reload();
  }

}

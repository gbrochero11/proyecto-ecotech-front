import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Materiales } from '../shared/model/materiales';
import { Unidades } from '../shared/model/unidades';
import { MaterialesService } from '../shared/service/materiales.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  public titulo: string = 'VISUALIZAR DATOS DE MATERIALES';
  public encabezadoTabla: string[] = ['Actualizar','Codigo',  'Material', 'Unidad', 'Suministro', 'Cantidad'];
  listaMateriales: Materiales[] =[];
  searchText: string;
  editMaterialForm: FormGroup;
  createMaterialForm: FormGroup;
  listaUnidades: Unidades[]=[];
  
  selected = "Unidades"
  
  update(e){
    this.selected = e.target.value
  }

  constructor(protected materialesService: MaterialesService, private fb: FormBuilder, private fbCreate: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listarMateriales();
    this.obtenerUnidades();
    this.editMaterialForm = this.fb.group({
      codigo: [''],
      material: [''],
      unidad: [''],
      suministro: [''],
      cantidad: ['']
     });
     this.createMaterialForm = this.fbCreate.group({
      codigo: [''],
      material: [''],
      unidad: [''],
      suministro: [''],
      cantidad: ['']
     });
  }

  private listarMateriales(){
    this.materialesService.consultarMateriales().subscribe(datosRespuesta => {
      this.listaMateriales=datosRespuesta;
      console.log(datosRespuesta)
    })
  }

  obtenerUnidades(){
    this.materialesService.consultarUnidades().subscribe(listaUnidades=>{
        this.listaUnidades=listaUnidades;
        console.log(this.listaUnidades);
    })
  }

  openModal(targetModal, material) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    this.editMaterialForm.patchValue({
     codigo: material.codigo,
     material: material.material,
     unidad: material.unidad,
     suministro: material.suministro,
     cantidad: material.cantidad
    });

   }
   onSubmit() {
    this.materialesService.actualizarCrearMaterial(this.editMaterialForm.value).subscribe((numero)=> {
      this.listarMateriales();
      console.log(numero)
    });
    this.modalService.dismissAll();
    console.log("res:", this.editMaterialForm.getRawValue());
   }

   openModalCreate(targetModal) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    this.createMaterialForm.patchValue({
     codigo: [''],
     material: [''],
     unidad: [''],
     suministro: [''],
     cantidad: ['']
    });
   }

   onCreateSubmit() {
    this.materialesService.actualizarCrearMaterial(this.createMaterialForm.value).subscribe((numero)=> {
      this.listarMateriales();
      console.log(numero)
    });
    this.modalService.dismissAll();
    console.log("res:", this.createMaterialForm.getRawValue());
   }
}

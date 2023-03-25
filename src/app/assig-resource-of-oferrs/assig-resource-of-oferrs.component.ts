import { Component, OnInit } from '@angular/core';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { FollowoffersService } from '../followoffers/service/followoffers.service';
import { FollowOffers } from '../followoffers/service/model/followoffers';
import { AssignedResource } from '../resourcecompany/service/model/AssignedResource';
import { UserAppDTO } from '../resourcecompany/service/model/UserAppDTO';
import { ResourcecompanyService } from '../resourcecompany/service/resourcecompany.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-assig-resource-of-oferrs',
  templateUrl: './assig-resource-of-oferrs.component.html',
  styleUrls: ['./assig-resource-of-oferrs.component.scss']
})
export class AssigResourceOfOferrsComponent implements OnInit {


  public columnas: string[] = ['Codigo', 'Dirección', 'Fecha Solicitud', 'Asignar Recurso'];

  searchText: string;
  selectIdTask: number;
  selectedResource = "Recurso"
  data: FollowOffers[] =[];
  resourceCompany: UserAppDTO[] =[];

  update(e, id){
    this.selectedResource = e.target.value
    this.selectIdTask = id
    this.onSelect()
  }

  

  constructor(protected followService: FollowoffersService,protected resourceCompanyService: ResourcecompanyService ,protected loginService: LoginService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private listarNotOffersAccept(){
    const datos=JSON.parse(this.loginService.obtenerDatos());
    this.followService.consultarNotAssigned(datos.data.documento).subscribe(listaRequests=>{
      this.data = listaRequests['data'];
    })
  }

  private listarResource(){
    const datos=JSON.parse(this.loginService.obtenerDatos());
    
    this.resourceCompanyService.obtenerResource(datos.data.id).subscribe(listaRequests=>{
      this.resourceCompany = listaRequests['data'];
    }, () => {
      this.toastService.error("Ha ocurrido un error al listar los recurso, por favor comuniquese con el administrador.", 'ERROR');
    });
  }

  onSelect() {
    const assigned = new AssignedResource(this.selectIdTask, parseInt(this.selectedResource, 10)); 
    this.resourceCompanyService.assignedResource(assigned).subscribe(listaRequests=>{
      this.resourceCompany = listaRequests['data'];
      this.toastService.success("Recurso asignado exitosamente.", "SUCCESS");
      this.loadData();
    }, () => {
      this.toastService.error("Ha ocurrido un error al asignar recurso, por favor comuniquese con el administrador.", 'ERROR');
    });
  }

  loadData(): void{
    this.listarNotOffersAccept();
    this.listarResource();
  }

}

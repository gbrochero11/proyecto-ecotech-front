import { Component, OnInit } from '@angular/core';
import { LoginService } from '../feature/login/shared/service/service/login.service';
import { FollowoffersService } from '../followoffers/service/followoffers.service';
import { FollowOffers } from '../followoffers/service/model/followoffers';
import { AssignedResource } from '../resourcecompany/service/model/AssignedResource';
import { UserAppDTO } from '../resourcecompany/service/model/UserAppDTO';
import { ResourcecompanyService } from '../resourcecompany/service/resourcecompany.service';

@Component({
  selector: 'app-assig-resource-of-oferrs',
  templateUrl: './assig-resource-of-oferrs.component.html',
  styleUrls: ['./assig-resource-of-oferrs.component.scss']
})
export class AssigResourceOfOferrsComponent implements OnInit {


  public columnas: string[] = ['Codigo', 'Dirección', 'Fecha Solicitud', 'Asignar Recurso'];

  searchText: string;
  selectIdTask= Number;
  selectedResource = "Recurso"
  data: FollowOffers[] =[];
  resourceCompany: UserAppDTO[] =[];

  update(e, id){
    this.selectedResource = e.target.value
    this.selectIdTask = id
    this.onSelect()
  }

  

  constructor(protected followService: FollowoffersService,protected resourceCompanyService: ResourcecompanyService ,protected loginService: LoginService) { }

  ngOnInit(): void {
    this.listarNotOffersAccept();
    this.listarResource();
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
      debugger
      this.resourceCompany = listaRequests['data'];
    })
  }

  onSelect() {
    const assigned = new AssignedResource(this.selectIdTask, parseInt(this.selectedResource, 10)); 
    debugger
    this.resourceCompanyService.assignedResource(assigned).subscribe(listaRequests=>{
      debugger
      this.resourceCompany = listaRequests['data'];
    })
    this.refresh();
    console.log(this.selectedResource); 
  }

  refresh(): void {
    debugger
    window.location.reload();
    this.ngOnInit();
  }

}

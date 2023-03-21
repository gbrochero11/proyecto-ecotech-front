import { NgModule } from '@angular/core';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { OferrsComponent } from './oferrs/oferrs.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { SidenavempresasComponent } from './sidenavempresas/sidenavempresas.component';
import { BodyempresasComponent } from './bodyempresas/bodyempresas.component';
import { FollowoffersComponent } from './followoffers/followoffers.component';
import { EmpresasComponent } from './empresas.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilertempresasPipe } from './filertempresas.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ResourcecompanyComponent } from './resourcecompany/resourcecompany.component';
import { AssigResourceOfOferrsComponent } from './assig-resource-of-oferrs/assig-resource-of-oferrs.component';

@NgModule({
  declarations: [
    EmpresasComponent,
    OferrsComponent,
    FollowoffersComponent,
    SidenavempresasComponent,
    BodyempresasComponent,
    FilertempresasPipe,
    ResourcecompanyComponent,
    AssigResourceOfOferrsComponent,
  ],
  imports: [
    EmpresasRoutingModule,
    SharedModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ModalModule.forRoot()
  ]
})
export class EmpresasModule { }

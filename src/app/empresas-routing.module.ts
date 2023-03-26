import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecurityGuard } from "@core/guard/security.guard";
import { AssigResourceOfOferrsComponent } from "./assig-resource-of-oferrs/assig-resource-of-oferrs.component";
import { EmpresasComponent } from "./empresas.component";
import { FollowoffersComponent } from "./followoffers/followoffers.component";
import { OferrsComponent } from "./oferrs/oferrs.component";
import { ResourcecompanyComponent } from "./resourcecompany/resourcecompany.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [SecurityGuard],
    canActivateChild: [SecurityGuard],
    children: [
      { path: "offersempresa", component: OferrsComponent },
      { path: "followoffers", component: FollowoffersComponent },
      { path: "assignedresource", component: AssigResourceOfOferrsComponent },
      { path: "resourcecompany", component: ResourcecompanyComponent },
    ],
    component: EmpresasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "@core/guard/login.guard";
import { LoginComponent } from "./component/login/login.component";
import { UserRegisterComponent } from "./component/user-register/user-register.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full", canActivate:[LoginGuard]
  },
  { path: "register", component: UserRegisterComponent, pathMatch: "full" },
  { path: "", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

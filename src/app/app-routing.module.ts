import { NgModule } from '@angular/core';
import { HomeComponent } from '@home/home.component';
import { RegistroconductorComponent } from './feature/formularios/registrobodega/components/registroconductor/registroconductor.component';
import { RegistrouUsuariosComponent } from './feature/formularios/registrousuario/components/registrousuario/registrousuario.component';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { MaterialComponent } from './feature/maestros/materiales/material/material.component';
import { CiudadesComponent } from './feature/maestros/ciudades/ciudades.component';
import { LoginComponent } from './feature/login/components/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [SecurityGuard]  },
  { path: 'registro-conductor', component: RegistroconductorComponent, canActivate: [SecurityGuard]  },
  { path: 'registro-usuario', component: RegistrouUsuariosComponent, canActivate: [SecurityGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'ciudades', component: CiudadesComponent, canActivate: [SecurityGuard]  },
  { path: 'materiales', component: MaterialComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'bodyhoreca', loadChildren: () => import('src/app/horeca.module').then(mod => mod.HorecaModule) },
  { path: 'bodyempresa', loadChildren: () => import('src/app/empresas.module').then(mod => mod.EmpresasModule) },
  { path: 'auth', loadChildren: () => import('@auth/auth.module').then(mod => mod.AuthModule) },
  {path: '',  redirectTo: '/login', pathMatch: 'full'},
  {path: '**',  redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

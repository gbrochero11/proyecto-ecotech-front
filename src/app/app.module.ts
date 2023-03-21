import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrouUsuariosComponent } from './feature/formularios/registrousuario/components/registrousuario/registrousuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AngularMaterialModule } from './angularmaterial/angularmaterial.module';
import { CiudadesComponent } from './feature/maestros/ciudades/ciudades.component';
import { MaterialComponent } from './feature/maestros/materiales/material/material.component';
import { FilterPipe } from './feature/maestros/materiales/material/filter.pipe';
import { HorecaModule } from './horeca.module';
import { LoginComponent } from './feature/login/components/login.component';
import { EmpresasModule } from './empresas.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrouUsuariosComponent,
    CiudadesComponent,
    MaterialComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    AngularMaterialModule,
    HorecaModule,
    EmpresasModule,
    ModalModule.forRoot()
    ],
    exports: [
      BrowserAnimationsModule
    ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HorecaComponent } from './horeca.component';
import { OrderserviceComponent } from './orderservice/orderservice.component';
import { LogbookComponent } from './logbook/logbook.component';
import { RequestComponent } from './request/request.component';
import { LibraryimageComponent } from './libraryimage/libraryimage.component';
import { HorecaRoutingModule } from './horeca-routing.module';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilerthorecaPipe } from './filerthoreca.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    HorecaComponent,
    OrderserviceComponent,
    LogbookComponent,
    RequestComponent,
    LibraryimageComponent,
    SidenavComponent,
    BodyComponent,
    FilerthorecaPipe,
    
  ],
  imports: [
    HorecaRoutingModule,
    SharedModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ModalModule.forRoot(),
    MatDatepickerModule,
    NgxMaskModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HorecaModule {}

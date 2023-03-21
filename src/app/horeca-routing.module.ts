import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryimageComponent } from 'src/app/libraryimage/libraryimage.component';
import { LogbookComponent } from 'src/app/logbook/logbook.component';
import { OrderserviceComponent } from 'src/app/orderservice/orderservice.component';
import { RequestComponent } from 'src/app/request/request.component';
import { HorecaComponent } from './horeca.component';


const routes: Routes = [
  {path: '', children: [
  {path: 'orderservicehoreca', component: OrderserviceComponent},
  {path: 'logbookhoreca', component: LogbookComponent},
  {path: 'libraryhoreca', component: LibraryimageComponent},
  {path: 'requesthoreca', component: RequestComponent},] , component: HorecaComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorecaRoutingModule { }

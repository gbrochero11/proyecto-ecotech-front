import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroconductorComponent } from './registroconductor.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/shared/service/service/login.service';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('RegistroconductorComponent', () => {
  let component: RegistroconductorComponent;
  let fixture: ComponentFixture<RegistroconductorComponent>;
  let router: Router;
  let vehiculoService: VehiculoService;
  let loginService: LoginService;
  const usuario : any='{"id":1}';
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroconductorComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [VehiculoService, LoginService, HttpService, NgbModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroconductorComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    loginService = TestBed.inject(LoginService);
    vehiculoService = TestBed.inject(VehiculoService);
    spyOn(loginService,'obtenerDatos').and.returnValue(usuario);
    spyOn(vehiculoService, 'guardar').and.returnValue(of(null));
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia guardar el vehiculo', async () => {
    component.registroVehiculoForm.controls.placa.setValue(1);
    component.registroVehiculoForm.controls.numeroMotor.setValue(12);
    component.registroVehiculoForm.controls.numeroChasis.setValue(1);
    component.registroVehiculoForm.controls.toneladas.setValue('2022/05/10');
    component.registroVehiculoForm.controls.tipoVehiculo.setValue('Barranquilla');
    component.registroVehiculoForm.controls.modelo.setValue('Soledad');
    component.registroVehiculoForm.controls.marca.setValue(false);
    expect(component.registroVehiculoForm.valid).toBeTruthy();
    component.crear();
  });

});

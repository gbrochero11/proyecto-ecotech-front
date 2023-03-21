import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegistrouUsuariosComponent } from './registrousuario.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { UsuariosService } from '../../shared/service/usuarios.service';
import { Router } from '@angular/router';


describe('RegistrousuarioComponent', () => {
  let component: RegistrouUsuariosComponent;
  let fixture: ComponentFixture<RegistrouUsuariosComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrouUsuariosComponent ],
      imports: [HttpClientModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [UsuariosService, HttpService, NgbModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrouUsuariosComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deberia guardar el usuario', async () => {
    component.registroUsuariosForm.controls.identificacion.setValue(1111111);
    component.registroUsuariosForm.controls.nombre.setValue('Json');
    component.registroUsuariosForm.controls.apellido.setValue('JsonGB');
    component.registroUsuariosForm.controls.usuario.setValue('JsonGALEANO');
    component.registroUsuariosForm.controls.clave.setValue('JsonGALEANO');
    component.registroUsuariosForm.controls.edad.setValue(12);
    component.registroUsuariosForm.controls.tipoRol.setValue(1);
    component.registroUsuariosForm.controls.ciudadResidencia.setValue('Barranquill');
    component.registroUsuariosForm.controls.correoElectronico.setValue('Json@gmail.com');
    component.registroUsuariosForm.controls.fechaCreacion.setValue('2022/05/10');
    expect(component.registroUsuariosForm.valid).toBeTruthy();
    component.crear();
  });
});

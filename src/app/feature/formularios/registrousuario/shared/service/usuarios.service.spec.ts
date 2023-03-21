import { HttpService } from './../../../../../core/services/http.service';
import { Usuarios } from './../model/usuarios';
import { environment } from './../../../../../../environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';
import { HttpResponse } from '@angular/common/http';

describe('UsuariosService', () => {
  let service: UsuariosService;
  let httpMock: HttpTestingController;
  const apiEndpointUsuarios = `${environment.endpoint}/usuarios-carrion`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuariosService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuariosService);
  });


  it('deberia guardar usuarios', () => {
    let listaUsuario = new Usuarios(
      1143171016,
      'test',
      'test',
      'testunit',
      'testunit',
      24,
      1,
      'Barranquilla',
      'testunit@gmail.com',
      '2022-05-09',1);
    service.guardar(listaUsuario).subscribe(usuarios => {
      expect(usuarios).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointUsuarios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({ body: 1 }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

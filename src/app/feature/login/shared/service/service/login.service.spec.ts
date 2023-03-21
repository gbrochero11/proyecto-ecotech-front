import { Usuario } from '../model/usuario';
import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  const apiEndpointLogin = `${environment.endpoint}/usuarios-carrion/login/json/json1`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  it('deberia consultar login', () => {
    const listaLogin: Usuario  =
    {
        id: 1,
        idRol: 1,
        usuario: 'json',
        clave: 'json1'
      };

    service.loginUsuario('json','json1').subscribe(login => {
      expect(login).toEqual(listaLogin);
    });
    const req = httpMock.expectOne(apiEndpointLogin);
    expect(req.request.method).toBe('GET');
    req.flush(listaLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

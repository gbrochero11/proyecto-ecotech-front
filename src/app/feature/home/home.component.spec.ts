/*import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';

import { HomeComponent } from './home.component';
import { Trm } from './shared/Model/trm';
import { HomeService } from './shared/Service/home.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let trmService: HomeService;
  let trm: Trm = new Trm('1234','COP','2022-05-04T00:00:00-05:00', '2022-05-04T00:00:00-05:00', '4016.34', 'true');


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [HomeService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    trmService = TestBed.inject(HomeService);
    spyOn(trmService, 'consultar').and.returnValue(of(trm));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

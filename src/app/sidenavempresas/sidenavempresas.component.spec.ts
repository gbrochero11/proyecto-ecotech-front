import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavempresasComponent } from './sidenavempresas.component';

describe('SidenavempresasComponent', () => {
  let component: SidenavempresasComponent;
  let fixture: ComponentFixture<SidenavempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavempresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

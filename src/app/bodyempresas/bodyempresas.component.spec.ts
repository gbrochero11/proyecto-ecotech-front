import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyempresasComponent } from './bodyempresas.component';

describe('BodyempresasComponent', () => {
  let component: BodyempresasComponent;
  let fixture: ComponentFixture<BodyempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyempresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OferrsComponent } from './oferrs.component';

describe('OferrsComponent', () => {
  let component: OferrsComponent;
  let fixture: ComponentFixture<OferrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OferrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OferrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcecompanyComponent } from './resourcecompany.component';

describe('ResourcecompanyComponent', () => {
  let component: ResourcecompanyComponent;
  let fixture: ComponentFixture<ResourcecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcecompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

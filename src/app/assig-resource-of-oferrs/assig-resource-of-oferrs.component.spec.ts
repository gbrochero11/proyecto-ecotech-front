import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigResourceOfOferrsComponent } from './assig-resource-of-oferrs.component';

describe('AssigResourceOfOferrsComponent', () => {
  let component: AssigResourceOfOferrsComponent;
  let fixture: ComponentFixture<AssigResourceOfOferrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigResourceOfOferrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigResourceOfOferrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

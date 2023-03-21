import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowoffersComponent } from './followoffers.component';

describe('FollowoffersComponent', () => {
  let component: FollowoffersComponent;
  let fixture: ComponentFixture<FollowoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

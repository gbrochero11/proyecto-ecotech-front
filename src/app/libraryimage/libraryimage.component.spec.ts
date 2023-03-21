import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryimageComponent } from './libraryimage.component';

describe('LibraryimageComponent', () => {
  let component: LibraryimageComponent;
  let fixture: ComponentFixture<LibraryimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatUserComponent } from './mat-user.component';

describe('MatUserComponent', () => {
  let component: MatUserComponent;
  let fixture: ComponentFixture<MatUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRepositoryComponent } from './mat-repository.component';

describe('MatRepositoryComponent', () => {
  let component: MatRepositoryComponent;
  let fixture: ComponentFixture<MatRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

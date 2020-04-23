import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTypeaheadComponent } from './bootstrap-typeahead.component';

describe('BootstrapTypeaheadComponent', () => {
  let component: BootstrapTypeaheadComponent;
  let fixture: ComponentFixture<BootstrapTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

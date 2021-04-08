import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsHomeComponent } from './reactive-forms-home.component';

describe('ReactiveFormsHomeComponent', () => {
  let component: ReactiveFormsHomeComponent;
  let fixture: ComponentFixture<ReactiveFormsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

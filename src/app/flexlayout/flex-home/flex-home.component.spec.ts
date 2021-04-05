import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexHomeComponent } from './flex-home.component';

describe('FlexHomeComponent', () => {
  let component: FlexHomeComponent;
  let fixture: ComponentFixture<FlexHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

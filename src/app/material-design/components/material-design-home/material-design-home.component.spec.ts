import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignHomeComponent } from './material-design-home.component';

describe('MaterialDesignHomeComponent', () => {
  let component: MaterialDesignHomeComponent;
  let fixture: ComponentFixture<MaterialDesignHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDesignHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDesignHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

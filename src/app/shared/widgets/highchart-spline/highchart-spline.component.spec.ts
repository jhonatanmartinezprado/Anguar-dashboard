import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartSplineComponent } from './highchart-spline.component';

describe('HighchartSplineComponent', () => {
  let component: HighchartSplineComponent;
  let fixture: ComponentFixture<HighchartSplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartSplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartSplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

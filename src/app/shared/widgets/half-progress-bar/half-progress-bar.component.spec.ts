import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfProgressBarComponent } from './half-progress-bar.component';

describe('HalfProgressBarComponent', () => {
  let component: HalfProgressBarComponent;
  let fixture: ComponentFixture<HalfProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

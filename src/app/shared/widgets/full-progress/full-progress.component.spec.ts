import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProgressComponent } from './full-progress.component';

describe('FullProgressComponent', () => {
  let component: FullProgressComponent;
  let fixture: ComponentFixture<FullProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

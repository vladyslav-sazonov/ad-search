import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProbabilityComponent } from './ad-probability.component';

describe('AdProbabilityComponent', () => {
  let component: AdProbabilityComponent;
  let fixture: ComponentFixture<AdProbabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdProbabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

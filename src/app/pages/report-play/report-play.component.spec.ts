import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPlayComponent } from './report-play.component';

describe('ReportPlayComponent', () => {
  let component: ReportPlayComponent;
  let fixture: ComponentFixture<ReportPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportPlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

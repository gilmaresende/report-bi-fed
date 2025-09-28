import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEntityQueryComponent } from './report-entity-query.component';

describe('ReportEntityQueryComponent', () => {
  let component: ReportEntityQueryComponent;
  let fixture: ComponentFixture<ReportEntityQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEntityQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEntityQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

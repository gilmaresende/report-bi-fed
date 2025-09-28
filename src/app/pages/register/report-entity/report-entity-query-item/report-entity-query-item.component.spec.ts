import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEntityQueryItemComponent } from './report-entity-query-item.component';

describe('ReportEntityQueryItemComponent', () => {
  let component: ReportEntityQueryItemComponent;
  let fixture: ComponentFixture<ReportEntityQueryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEntityQueryItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEntityQueryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEntityQueryModeloComponent } from './report-entity-query-modelo.component';

describe('ReportEntityQueryModeloComponent', () => {
  let component: ReportEntityQueryModeloComponent;
  let fixture: ComponentFixture<ReportEntityQueryModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEntityQueryModeloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEntityQueryModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

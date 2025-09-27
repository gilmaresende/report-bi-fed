import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEntityDetalheComponent } from './report-entity-detalhe.component';

describe('ReportEntityDetalheComponent', () => {
  let component: ReportEntityDetalheComponent;
  let fixture: ComponentFixture<ReportEntityDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEntityDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEntityDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

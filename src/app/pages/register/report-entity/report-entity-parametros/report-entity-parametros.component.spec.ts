import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEntityParametrosComponent } from './report-entity-parametros.component';

describe('ReportEntityParametrosComponent', () => {
  let component: ReportEntityParametrosComponent;
  let fixture: ComponentFixture<ReportEntityParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEntityParametrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEntityParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportValoresFixosComponent } from './report-valores-fixos.component';

describe('ReportValoresFixosComponent', () => {
  let component: ReportValoresFixosComponent;
  let fixture: ComponentFixture<ReportValoresFixosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportValoresFixosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportValoresFixosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

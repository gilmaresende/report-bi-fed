import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEntityPage } from './report-entity.page';

describe('ReportEntityPage', () => {
  let component: ReportEntityPage;
  let fixture: ComponentFixture<ReportEntityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEntityPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportEntityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

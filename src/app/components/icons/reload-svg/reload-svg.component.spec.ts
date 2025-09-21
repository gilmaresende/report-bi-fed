import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadSvgComponent } from './reload-svg.component';

describe('ReloadSvgComponent', () => {
  let component: ReloadSvgComponent;
  let fixture: ComponentFixture<ReloadSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReloadSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

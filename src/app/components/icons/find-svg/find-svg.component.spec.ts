import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSvgComponent } from './find-svg.component';

describe('FindSvgComponent', () => {
  let component: FindSvgComponent;
  let fixture: ComponentFixture<FindSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFile2Component } from './input-file2.component';

describe('InputFile2Component', () => {
  let component: InputFile2Component;
  let fixture: ComponentFixture<InputFile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFile2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

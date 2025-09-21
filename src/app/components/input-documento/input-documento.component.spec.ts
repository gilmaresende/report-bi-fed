import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDocumentoComponent } from './input-documento.component';

describe('InputDocumentoComponent', () => {
  let component: InputDocumentoComponent;
  let fixture: ComponentFixture<InputDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

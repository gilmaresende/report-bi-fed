import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelImpComponent } from './model-imp.component';

describe('ModelImpComponent', () => {
  let component: ModelImpComponent;
  let fixture: ComponentFixture<ModelImpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelImpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

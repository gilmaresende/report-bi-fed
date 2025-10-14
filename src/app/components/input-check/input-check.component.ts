import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'input-check',
  imports: [FormsModule],
  templateUrl: './input-check.component.html',
  styleUrl: './input-check.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputCheckComponent,
    },
  ],
})
export class InputCheckComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | null = null;
  @Input() id: string | null = null;

  value = false;

  @Output() valueChanged = new EventEmitter<any>();

  touched = false;

  ngOnInit(): void {}

  /////////////////////////////////////////////////////////////////////////////////////////////
  //que funções são essas?
  /////////////////////////////////////////////////////////////////////////////////////////////

  onChange = (quantity: boolean) => {};

  onTouched = () => {};

  /////////////////////////////////////////////////////////////////////////////////////////////
  //implementação da interface
  /////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * O writeValuemétodo é chamado pelo módulo Angular
   * Forms sempre que o formulário pai
   * deseja definir um valor no controle filho.
   */
  writeValue(value: boolean) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  change() {
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
    this.valueChanged.emit(this.value);
  }
}

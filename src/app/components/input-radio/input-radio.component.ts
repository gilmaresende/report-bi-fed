import {
  Component,
  EventEmitter,
  forwardRef,
  input,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { InputAbs } from '../abs/input.abs';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'input-radio',
  imports: [FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true,
    },
  ],
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.scss',
})
export class InputRadioComponent
  extends InputAbs
  implements ControlValueAccessor, OnInit
{
  @Input() name!: string;
  @Input() valueFix: any;
  @Input() tipoDocumento: 'cpf' | 'cnpj' = 'cpf';
  @Input() label: string | null = null;
  @Input() placeholder: string = '';
  @Input() id?: string;
  @Input() alwaysDisable?: boolean;
  @Output() valueChanged = new EventEmitter<string>();

  disabled: boolean = false;

  ngOnInit(): void {
    if (this.alwaysDisable) {
      this.disabled = true;
    }
  }

  teclar() {
    this.markAsTouched();
    if (!this.disabled) {
      this.valueChanged.emit(this.value);
      this.onChange(this.value);
      this.updateErrorState();
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { CepDiretDirective } from '../../diretives/cep/cep-diret.directive';
import { ObservableElement } from '../../core/tools/observable.tool';
import { InputAbs } from '../abs/input.abs';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'input-cep',
  templateUrl: './input-cep.component.html',
  styleUrls: ['./input-cep.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CepDiretDirective, TooltipModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputCepComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputCepComponent,
    },
  ],
})
export class InputCepComponent
  extends InputAbs
  implements ControlValueAccessor, OnInit
{
  @Input() label: string | null = null;
  @Input() placeholder: string = '';
  @Input() id?: string;
  @Input() alwaysDisable?: boolean;
  @Output() valueChanged = new EventEmitter<string>();
  @Output() onEventConsulta = new EventEmitter<string>();

  isTooltipVisible: boolean = false;

  disabled: boolean = false;
  classCss = 'label';

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
      if (this.value && this.value.length == 9) {
        this.onEventConsulta.emit(this.value);
      }
    }
  }

  findEndereco() {
    this.onEventConsulta.emit(this.value);
  }

  override writeValue(value: string): void {
    if (value) {
      const v = value.replace(/\D/g, '');
      if (v.length <= 5) {
        this.value = v.replace(/(\d{5})(\d{0,3})/, '$1-$2');
      } else {
        this.value = v.replace(/(\d{5})(\d{3})/, '$1-$2');
      }
    } else {
      this.value = '';
    }
  }
}

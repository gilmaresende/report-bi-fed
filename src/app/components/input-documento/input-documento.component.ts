import {
  Component,
  EventEmitter,
  forwardRef,
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
import { CpfCnpjMaskDirective } from '../../diretives/cnpjCpf/cnpj-cpf-mask.directive';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'input-documento',
  templateUrl: './input-documento.component.html',
  styleUrl: './input-documento.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CpfCnpjMaskDirective,
    TooltipModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDocumentoComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputDocumentoComponent),
      multi: true,
    },
  ],
})
export class InputDocumentoComponent
  extends InputAbs
  implements ControlValueAccessor, OnInit
{
  @Input() tipoDocumento: 'CPF' | 'CNPJ' = 'CPF';
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

  override writeValue(value: string): void {
    if (value) {
      const v = value.replace(/\D/g, ''); // Remove caracteres não numéricos
      if (v.length === 11) {
        this.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      } else if (v.length === 14) {
        this.value = v.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          '$1.$2.$3/$4-$5'
        );
      } else {
        this.value = v;
      }
    } else {
      this.value = '';
    }
  }
}

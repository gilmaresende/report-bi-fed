import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputAbs } from '../abs/input.abs';
import { PhoneMaskDirective } from '../../diretives/phone/phone-mask.directive';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PhoneMaskDirective,
    TooltipModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPhoneComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputPhoneComponent),
      multi: true,
    },
  ],
})
export class InputPhoneComponent
  extends InputAbs
  implements ControlValueAccessor, OnInit
{
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

  override writeValue(value: string): void {
    if (value) {
      let valorLimpo = value;
      let p1 = `${valorLimpo.substring(0, 2)}`;
      if (valorLimpo.length == 10) {
        let p2 = `${valorLimpo.substring(2, 6)}`;
        let p3 = `${valorLimpo.substring(6, 10)}`;
        this.value = `(${p1}) ${p2}-${p3}`;
      } else if (valorLimpo.length == 11) {
        let p2 = `${valorLimpo.substring(2, 7)}`;
        let p3 = `${valorLimpo.substring(7, 11)}`;
        this.value = `(${p1}) ${p2}-${p3}`;
      } else {
        this.value = value;
      }
    } else {
      this.value = null;
    }
  }
}

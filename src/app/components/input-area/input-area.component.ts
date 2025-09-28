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
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'input-area',
  imports: [FormsModule, ReactiveFormsModule, TooltipModule],
  templateUrl: './input-area.component.html',
  styleUrl: './input-area.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAreaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputAreaComponent),
      multi: true,
    },
  ],
})
export class InputAreaComponent
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
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, TooltipModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputSenhaComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputSenhaComponent,
    },
  ],
})
export class InputSenhaComponent
  extends InputAbs
  implements ControlValueAccessor, OnInit
{
  @Input() label: string | null = null;
  @Input() placeholder: string = '';
  @Input() id?: string;
  @Output() valueChanged = new EventEmitter<string>();

  @Input() disabledFix: boolean = false;
  disabled: boolean = false;

  ngOnInit(): void {}

  teclar() {
    this.markAsTouched();
    if (!this.disabled) {
      this.valueChanged.emit(this.value);
      this.onChange(this.value);
    }
  }
}

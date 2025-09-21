import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CompImpl } from '../../core/abs/comp-impl.abs';
import { Anexo } from '../../model/anexo.model';

@Component({
  selector: 'input-file2',
  imports: [],
  templateUrl: './input-file2.component.html',
  styleUrl: './input-file2.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputFile2Component,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputFile2Component,
    },
  ],
})
export class InputFile2Component extends CompImpl<Anexo> {
  override populate(obj: Anexo): void {}
  fileName: string = '';
  @Input() label: string = 'Selecione um Arquivo';
  @Input() id: string = 'id';
  @Output() valueChanged = new EventEmitter<any>();

  selectedFile: File | null = null;

  anexo: Anexo = {};

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
      this.onChange(this.selectedFile);
      this.valueChanged.emit(this.selectedFile);
    }
  }

  override vincular(obj: Anexo): void {
    if (obj) {
      this.fileName = obj.nome!;
      this.anexo = obj;
    }
  }
}

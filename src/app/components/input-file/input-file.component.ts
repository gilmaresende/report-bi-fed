import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Anexo } from '../../model/anexo.model';
import { InputAbs } from '../abs/input.abs';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'input-file',
  imports: [TooltipModule],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputFileComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputFileComponent,
    },
  ],
})
export class InputFileComponent
  extends InputAbs
  implements ControlValueAccessor
{
  //override populate(obj: Anexo): void {}
  fileName: string = '';
  @Input() label: string = 'Selecione um Arquivo';
  @Input() id: string = 'id';
  @Output() valueChanged = new EventEmitter<any>();

  anexo: Anexo = {};

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!(input.files && input.files.length > 0)) {
      this.fileName = 'Nenhum arquivo selecionado';
      return;
    }
    const file = input.files[0];
    this.fileName = file.name;

    const reader = new FileReader();
    const fileExtension = this.fileName.split('.').pop();

    this.anexo.nome = this.fileName;
    this.anexo.extensao = fileExtension;

    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(',')[1];
      this.anexo.base64 = base64String;
      this.onChange(this.anexo);
      this.valueChanged.emit(this.anexo);
      this.updateErrorState();
    };
    reader.readAsDataURL(file);
  }
}

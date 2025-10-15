import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { getApiReport, setApieport } from '../../utils/localstorage.util';

@Component({
  selector: 'app-config',
  imports: [InputTextComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent implements OnInit {
  public static ROTE: string = 'config-page';
  static TITLE: string = 'Configuração';
  api: string = '';

  ngOnInit() {
    this.api = getApiReport() || '';
  }

  save() {
    setApieport(this.api);
  }
}

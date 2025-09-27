import { Component, Input } from '@angular/core';

@Component({
  selector: 'model-imp',
  templateUrl: './model-imp.component.html',
  styleUrl: './model-imp.component.scss',
})
export class ModelImpComponent {
  show = false;
  @Input() titleModal?: string;

  fecharModal() {
    this.show = false;
  }

  showModal() {
    this.show = true;
  }
}

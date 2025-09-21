import { Component } from '@angular/core';

@Component({
  selector: 'model-imp',
  templateUrl: './model-imp.component.html',
  styleUrl: './model-imp.component.scss',
})
export class ModelImpComponent {
  show = false;

  fecharModal() {
    this.show = false;
  }

  showModal() {
    this.show = true;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-body',
  imports: [],
  templateUrl: './tab-body.component.html',
  styleUrl: './tab-body.component.scss',
})
export class TabBodyComponent {
  @Input() id: string = '';
  active = false;

  activate() {
    this.active = true;
  }
}

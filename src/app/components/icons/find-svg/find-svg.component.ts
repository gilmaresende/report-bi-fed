import { Component, Input } from '@angular/core';

@Component({
  selector: 'find-svg',
  imports: [],
  templateUrl: './find-svg.component.html',
  styleUrl: './find-svg.component.scss',
})
export class FindSvgComponent {
  @Input() customClass = '';
}

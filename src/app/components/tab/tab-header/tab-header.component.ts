import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'tab-header',
  imports: [],
  templateUrl: './tab-header.component.html',
  styleUrl: './tab-header.component.scss',
})
export class TabHeaderComponent implements AfterContentInit {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() active = false;

  @Output() tabSelected = new EventEmitter();

  ngAfterContentInit(): void {
    if (this.active) this.selectTab();
  }

  selectTab() {
    this.tabSelected.emit();
  }
}

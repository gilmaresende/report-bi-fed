import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TabBodyComponent } from './tab-body/tab-body.component';

@Component({
  selector: 'tab',
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent implements AfterContentInit {
  @Input() id = null;

  @ContentChildren(TabHeaderComponent) headers?: QueryList<TabHeaderComponent>;

  @ContentChildren(TabBodyComponent) bodys?: QueryList<TabBodyComponent>;

  ngAfterContentInit() {
    const activeHeader = this.headers?.find((header) => header.active);
    if (activeHeader) {
      activeHeader.selectTab();
    }
  }

  selectTab(header: TabHeaderComponent) {
    this.bodys?.forEach((b) => (b.active = false));
    this.headers?.forEach((h) => (h.active = false));
    header.active = true;
    header.selectTab();
  }
}

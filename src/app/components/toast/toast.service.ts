import { Injectable } from '@angular/core';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  error(msg: string) {
    this.component.showError(msg);
  }
  inf(msg: string) {
    this.component.showSuccess(msg);
  }
  warn(msg: string) {
    this.component.showWarn(msg);
  }
  component!: ToastComponent;
  constructor() {}

  setComponent(component: ToastComponent) {
    this.component = component;
  }
}

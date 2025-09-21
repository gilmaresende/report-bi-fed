import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';
import { Toast } from 'primeng/toast';
@Component({
  selector: 'toast',
  imports: [Toast],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  providers: [MessageService],
})
export class ToastComponent {
  constructor(
    private messageService: MessageService,
    private service: ToastService
  ) {
    service.setComponent(this);
  }
  showSuccess(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: msg,
    });
  }

  showInfo(msg: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: msg,
    });
  }

  showWarn(msg: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: msg,
    });
  }

  showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
    });
  }

  showContrast(msg: string) {
    this.messageService.add({
      severity: 'contrast',
      summary: 'Error',
      detail: 'Message Content',
    });
  }

  showSecondary(msg: string) {
    this.messageService.add({
      severity: 'secondary',
      summary: 'Secondary',
      detail: 'Message Content',
    });
  }
}

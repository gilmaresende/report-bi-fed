import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastService } from '../../components/toast/toast.service';
import { LocalStroraServiceService } from './local-strora-service.service';
import { RouteService } from '../../core/route.service';

@Injectable({
  providedIn: 'root',
})
export class BuildService {
  constructor(
    private formBuilder: FormBuilder,
    private router: RouteService,
    private toastService: ToastService,
    private localService: LocalStroraServiceService
  ) {}

  getFormBuilder(): FormBuilder {
    return this.formBuilder;
  }

  getRouteService(): RouteService {
    return this.router;
  }

  getToastService(): ToastService {
    return this.toastService;
  }

  getStorage(): LocalStroraServiceService {
    return this.localService;
  }
}

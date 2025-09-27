import { Injectable } from '@angular/core';
import { HttpApiService } from '../core/http-api.service';
import { HttpService } from '../core/http.service';
import { ResponseApi } from '../core/response-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService extends HttpApiService {
  constructor(private http: HttpService) {
    super(http);
  }

  getAll(): Observable<ResponseApi<any>> {
    return this.getApi('report');
  }
}

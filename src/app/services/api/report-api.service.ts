import { Injectable } from '@angular/core';
import { HttpApiService } from '../core/http-api.service';
import { HttpService } from '../core/http.service';
import { ResponseApi } from '../core/response-api';
import { Observable } from 'rxjs';
import { ReportBI } from '../../models/report-bi';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService extends HttpApiService {
  constructor(private http: HttpService) {
    super(http);
  }

  getAll(): Observable<ResponseApi<Array<ReportBI>>> {
    return this.getApi('report');
  }

  save(ob: ReportBI): Observable<ResponseApi<ReportBI>> {
    return this.postApi('report', ob);
  }
}

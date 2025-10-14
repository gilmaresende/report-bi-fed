import { Injectable } from '@angular/core';
import { HttpApiService } from '../core/http-api.service';
import { HttpService } from '../core/http.service';
import { ResponseApi } from '../core/response-api';
import { Observable } from 'rxjs';
import { ReportBI } from '../../models/report-bi';
import { ReportToPlay } from '../../models/report-bi-to-play';
import { DownloadDTO } from '../../utils/download.util';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService extends HttpApiService {
  constructor(private http: HttpService) {
    super(http);
  }

  remove(id: number): Observable<ResponseApi<ReportBI>> {
    return this.deleteApi(`report/${id}`);
  }

  getById(id: number): Observable<ResponseApi<ReportBI>> {
    return this.getApi(`report/${id}`);
  }

  getByIdToPlay(id: number): Observable<ResponseApi<ReportToPlay>> {
    return this.getApi(`report/to-play/${id}`);
  }

  playReport(value: any, id: number): Observable<ResponseApi<DownloadDTO>> {
    return this.postApi(`report/play/${id}`, value);
  }

  getAll(): Observable<ResponseApi<Array<ReportBI>>> {
    return this.getApi('report');
  }

  save(ob: ReportBI): Observable<ResponseApi<ReportBI>> {
    if (!ob.id) return this.postApi('report', ob);
    else return this.putApi(`report/${ob.id}`, ob);
  }
}

import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { ResponseApi } from './response-api';

export class HttpApiService {
  rote: string = '';
  httpSuper: HttpService;
  constructor(httpSuper: HttpService) {
    this.rote = environment.apiUrl;
    this.httpSuper = httpSuper;
  }

  getApi(complementoUrl: string): Observable<ResponseApi<any>> {
    console.log(`${this.rote}/${complementoUrl}`);
    return this.httpSuper.get(`${this.rote}/${complementoUrl}`);
  }

  postApi(complementoUrl: string, data: any): Observable<ResponseApi<any>> {
    return this.httpSuper.post(`${this.rote}/${complementoUrl}`, data);
  }

  putApi(complementoUrl: string, data: any): Observable<ResponseApi<any>> {
    return this.httpSuper.put(`${this.rote}/${complementoUrl}`, data);
  }

  deleteApi(complementoUrl: string): Observable<ResponseApi<any>> {
    return this.httpSuper.delete(`${this.rote}/${complementoUrl}`);
  }
}

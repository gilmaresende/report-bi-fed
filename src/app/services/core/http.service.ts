import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public post(url: string, obj: any): Observable<any> {
    const response = this.http.post<any>(url, obj, {
      observe: 'response',
      responseType: 'json',
    });
    return response;
  }

  public put(url: string, obj: any): Observable<any> {
    const response = this.http.put<any>(url, obj, {
      observe: 'response',
      responseType: 'json',
    });
    return response;
  }

  get(url: string) {
    const response = this.http.get<any>(url, {
      observe: 'response',
      responseType: 'json',
    });
    return response;
  }

  delete(url: string) {
    const response = this.http.delete<any>(url, {
      observe: 'response',
      responseType: 'json',
    });
    return response;
  }
}

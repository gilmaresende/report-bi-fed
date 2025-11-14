import { Injectable } from '@angular/core';
import { HttpApiService } from '../core/http-api.service';
import { HttpService } from '../core/http.service';
import { Observable } from 'rxjs';
import { ResponseApi } from '../core/response-api';
import { ItemDTO } from '../../models/item-dto';

@Injectable({
  providedIn: 'root',
})
export class GrupoUsuarioService extends HttpApiService {
  constructor(private http: HttpService) {
    super(http);
  }

  findAllActive(): Observable<ResponseApi<Array<ItemDTO>>> { 
    return this.getApi('grupo-usuario/actives');
  }
}

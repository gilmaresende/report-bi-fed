import { Injectable } from '@angular/core';
import { LocalStroraServiceService } from './local-strora-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private jwtHelper = new JwtHelperService(); // Instância global

  constructor(private localService: LocalStroraServiceService) {}

  public isAutenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    if (this.jwtHelper.isTokenExpired(token)) {
      this.localService.getFromLocalStrotage('token');
      return false;
    }
    return true;
  }

  public getToken(): string | null {
    return this.localService.getFromLocalStrotage('token');
  }

  public getRoles(): string {
    const token = this.getToken();
    if (!token) return '';

    try {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken?.roles[0] || ''; // A claim `permissions` contém as permissões
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return '';
    }
  }

  // public getMenus(): [] {
  //   // const token = this.getToken();
  //   // if (!token) return [];

  //   // try {
  //   //   const decodedToken = this.jwtHelper.decodeToken(token);
  //   //   return decodedToken?.menus || []; // A claim `permissions` contém as permissões
  //   // } catch (error) {
  //   //   console.error('Erro ao decodificar o token:', error);
  //   //   return [];
  //   // }
  //   return [{

  //   }]
  // }

  public saveLogin(login: any) {
    this.localService.saveInf('token', login);
  }
}

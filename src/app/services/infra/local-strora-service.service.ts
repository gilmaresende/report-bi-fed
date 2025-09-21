import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStroraServiceService {
  constructor() {}

  getFromLocalStrotage(key: string) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  saveInf(key: string, data: any) {
    const dataSrt = JSON.stringify(data);
    return localStorage.setItem(key, dataSrt);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

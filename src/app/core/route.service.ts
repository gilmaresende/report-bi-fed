import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}

  nav(rote: string) {
    this.router.navigate([rote]);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor() { }

  getPermiso(): string{
    return localStorage.getItem('permisos') || '';
  }
}

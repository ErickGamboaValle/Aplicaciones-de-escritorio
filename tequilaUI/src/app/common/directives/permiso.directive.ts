import { Directive } from '@angular/core';

@Directive({
  selector: '[appPermiso]'
})
export class PermisoDirective {

  constructor() { 
    console.log('directiva cargada');
  }


}

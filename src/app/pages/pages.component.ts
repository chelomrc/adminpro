import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() {



      // this.regresaObservable().pipe(
      //   // se envía el número de intentos
      //   retry(2)
      // ).subscribe(
      //   numero => console.log('Subs ', numero ),
      //   error => console.log('Error en el Obs', error),
      //   () => console.log('El Observador terminó')
      // );

  }

  ngOnInit() {
    init_plugins();
  }

  // regresaObservable(): Observable< any > {

  //     return new Observable( (observer: Subscriber< any >) => {

  //     let contador = 0;
  //     let intervalo = setInterval( () => {

  //       contador += 1;

  //       const salida = {
  //         valor: contador
  //       };

  //       observer.next( salida );
  //       if ( contador === 3  ) {
  //         clearInterval( intervalo );
  //         observer.complete();
  //       }
  //       // if ( contador === 2 ) {
  //       //   // clearInterval( intervalo );
  //       //   observer.error('Auxilio!');
  //       // }

  //     }, 1000);
  //     }).pipe(

  //       map( resp => resp.valor)
  //       );

  // }

}

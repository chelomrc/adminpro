import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

declare function init_plugins();

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {





    this.suscripcion = this.regresaObservable().pipe(
      // se envía el número de intentos
      retry(2)
    ).subscribe(
      numero => console.log('Subs ', numero ),
      error => console.log('Error en el Obs', error),
      () => console.log('El Observador terminó')
    );

}

ngOnInit() {
  init_plugins();
}

ngOnDestroy() {

  this.suscripcion.unsubscribe();
  console.log('La página se va a cerrar');

}

regresaObservable(): Observable< any > {

    return new Observable( (observer: Subscriber< any >) => {

    let contador = 0;
    let intervalo = setInterval( () => {

      contador += 1;

      const salida = {
        valor: contador
      };

      observer.next( salida );


      // if ( contador === 3  ) {
      //   clearInterval( intervalo );
      //   observer.complete();
      // }


      // if ( contador === 2 ) {
      //   // clearInterval( intervalo );
      //   observer.error('Auxilio!');
      // }

    }, 1000);
    }).pipe(

      map( resp => resp.valor),
      filter( ( valor, index ) => {
        // console.log('filter', valor, index );
        if ( (valor % 2) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
      );

}

}

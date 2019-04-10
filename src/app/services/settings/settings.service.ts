import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject( DOCUMENT ) private _document ) {
    this.cargarAjustes();

   }

  guardarAjustes () {

    // console.log('guardado en el LocalStorage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }
  cargarAjustes () {


    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema(this.ajustes.tema);
      // console.log('Cargando del LocalStorage');
    } else {
      // console.log('Usando Ajustes por Defecto');
      this.aplicarTema(this.ajustes.tema);

    }

  }

  aplicarTema( tema: string ) {

    const url = `assets/css/colors/${ tema }.css`;
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;


    this._document.getElementById('tema').setAttribute('href', this.ajustes.temaUrl );
    this.guardarAjustes();

  }

  // Podemos aplicar ésta función o la del account-settings
  aplicarCheck( ) {

    document.getElementsByClassName('working')[0].classList.remove('working');
    const tema = `${ this.ajustes.tema }-theme`;
    // console.log('check en servicio', tema);
    document.getElementsByClassName(tema)[0].classList.add('working');


  }

}

interface Ajustes {

  temaUrl: string;
  tema: string;
}

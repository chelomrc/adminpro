
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

// Servicios
import { SettingsService } from './../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject( DOCUMENT ) private _document,
              public _ajustes: SettingsService ) { }

  ngOnInit() {
    // console.log(document.getElementsByClassName('working')[0]);
    this.aplicarCheck();

    // Si queremos usar aplicarCheck del servicio lo llamamos aquí
    // this._ajustes.aplicarCheck();

  }


  cambiarColor( color: string, link: any ) {

    this._ajustes.aplicarTema(color);
    // this.aplicarCheck( link );
    this.aplicarCheck();

    // Si queremos usar aplicarCheck del servicio lo llamamos aquí
    // this._ajustes.aplicarCheck();

  }

  aplicarCheck( ) {

    document.getElementsByClassName('working')[0].classList.remove('working');
    const tema = `${ this._ajustes.ajustes.tema }-theme`;
    // console.log('check en servicio', tema);
    document.getElementsByClassName(tema)[0].classList.add('working');


  }

}


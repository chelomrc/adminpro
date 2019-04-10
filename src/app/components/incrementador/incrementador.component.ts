import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda = 'Leyenda';
  @Input() progreso = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda: ', this.leyenda);
    // console.log('Progreso: ', this.progreso);
  }

  ngOnInit() {
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('valProgreso')[0];

    // console.log(this.txtProgress);

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else  if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );
    // console.log(this.txtProgress);

  }




  incrementar() {

    if ( this.progreso < 100) {
       this.progreso = this.progreso + 5;
       this.cambioValor.emit( this.progreso );
      }
      this.txtProgress.nativeElement.focus();
    }

    decrementar() {

      if ( this.progreso > 0) {
        this.progreso = this.progreso - 5;
        this.cambioValor.emit( this.progreso );
    }
      this.txtProgress.nativeElement.focus();
  }


}

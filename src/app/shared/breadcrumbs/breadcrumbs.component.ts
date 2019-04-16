import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, RouterStateSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor( private router: Router,
              private tittle: Title ) {

    this.getDataRoute().subscribe( data => {

      this.titulo = data.titulo;
      this.tittle.setTitle( this.titulo );
      console.log( this.titulo );

      // console.log(event.snapshot.data);

    } );
   }

  ngOnInit() {
  }

  getDataRoute () {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }
}

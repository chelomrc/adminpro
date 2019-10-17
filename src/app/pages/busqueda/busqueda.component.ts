import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Medico } from '../../models/medico.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Hospital } from 'src/app/models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  termino: string;
  usuarios: Usuario[] = [];
  hospitales: Hospital[] = [];
  medicos: Medico[] = [];


  constructor(
      public activatedRoute: ActivatedRoute,
      public http: HttpClient
  ) {
    this.activatedRoute.params
    .subscribe( params => {
        this.termino = params['termino'];
        this.buscar(this.termino);
    });
   }

  ngOnInit() {

  }

  buscar( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/todo/' + termino;
    this.http.get( url )
          .subscribe( (resp: any) => {

            // console.log(resp);
            this.hospitales = resp.hospitales;
            this.medicos = resp.medicos;
            this.usuarios = resp.usuarios;

          });

  }

}

import { CommonModule } from '@angular/common';
import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { SharedModule } from './../shared/shared.module';


import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PAGES_ROUTES } from './pages.routes';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// pipeModule
import { PipesModule } from '../pipes/pipes.module';

// ng2-charts graficas
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PAGES_ROUTES,
    ChartsModule,
    PipesModule
  ],
  providers: [],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingsComponent
  ]
})
export class PagesModule {}

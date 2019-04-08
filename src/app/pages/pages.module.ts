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

// ng2-charts graficas
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    PAGES_ROUTES,
    ChartsModule
  ],
  providers: [],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule {}

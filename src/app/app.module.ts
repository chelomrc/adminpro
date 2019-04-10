import { FormsModule } from '@angular/forms';

import { PagesModule } from './pages/pages.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';

// Servicios
import { ServiceModule } from './services/service.module';
// import { SettingsService } from './services/service.index';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // GraficoDonaComponent,
    // IncrementadorComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    PagesModule,
    ServiceModule
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

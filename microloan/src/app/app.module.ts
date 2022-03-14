import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PrincipalComponent } from './views/dashboard/components/principal/principal.component';
import { SolicitudesComponent } from './dashboard/solicitudes/solicitudes.component';
import { ClientesComponent } from './dashboard/clientes/clientes.component';
import { ConfiguracionComponent } from './dashboard/configuracion/configuracion.component';
import { RecibirpagoComponent } from './dashboard/recibirpago/recibirpago.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PrincipalComponent,
    SolicitudesComponent,
    ClientesComponent,
    ConfiguracionComponent,
    RecibirpagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

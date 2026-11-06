import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Tablas
import { DataTablesModule } from "angular-datatables";
import { GenerarDocumentoComponent } from './generar-documento/generar-documento.component';
import { MisSeguimientosComponent } from './mis-seguimientos/mis-seguimientos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PorContestarComponent } from './por-contestar/por-contestar.component';
import { EstadisticoGeneralComponent } from './estadistico-general/estadistico-general.component';
import { DatePipe } from '@angular/common';
import { CambioPasswordComponent } from './cambio-password/cambio-password.component';
import { ExistenciasComponent } from './app/existencias/existencias.component';
import { GeneraRequisicionComponent } from './app/genera-requisicion/genera-requisicion.component';
import { RequisicionesPendientesComponent } from './app/requisiciones-pendientes/requisiciones-pendientes.component';
import { ReporteMovimientosXPartidaComponent } from './app/reporte-movimientos-x-partida/reporte-movimientos-x-partida.component';
import { ReporteExistenciaXPartidaComponent } from './app/reporte-existencia-x-partida/reporte-existencia-x-partida.component';
import { ReporteComprasComponent } from './app/reporte-compras/reporte-compras.component';
import { AltaArticuloComponent } from './registrar-articulo/alta-articulo.component';
import { ListaMovimientosComponent } from './app/lista-movimientos/lista-movimientos.component';
import { UsarArticuloComponent } from './app/usar-articulo/usar-articulo.component';
import { CargarExistenciasComponent } from './cargar-existencias/cargar-existencias/cargar-existencias.component';
import { ListarArticulosPartidaComponent } from './listar-articulos-partida/listar-articulos-partida.component';
import { RegistrarPartidaComponent } from './registrar-partida/registrar-partida.component';
import { RegistrarProveedorComponent } from './registrar-proveedor/registrar-proveedor.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    GenerarDocumentoComponent,
    MisSeguimientosComponent,
    ListaUsuariosComponent,
    PorContestarComponent,
    EstadisticoGeneralComponent,
    CambioPasswordComponent,
    ExistenciasComponent,
    GeneraRequisicionComponent,
    RequisicionesPendientesComponent,
    ReporteMovimientosXPartidaComponent,
    ReporteExistenciaXPartidaComponent,
    ReporteComprasComponent,
    AltaArticuloComponent,
    ListaMovimientosComponent,
    UsarArticuloComponent,
    CargarExistenciasComponent,
    ListarArticulosPartidaComponent,
    RegistrarPartidaComponent,
    RegistrarProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
})
export class AppModule { }

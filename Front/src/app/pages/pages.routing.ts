import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';

import { PermisosModulosComponent } from './permisos-modulos/permisos-modulos.component';
import { GenerarDocumentoComponent } from '../generar-documento/generar-documento.component';
import { MisSeguimientosComponent } from '../mis-seguimientos/mis-seguimientos.component';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';
import { PorContestarComponent } from '../por-contestar/por-contestar.component';
import { EstadisticoGeneralComponent } from '../estadistico-general/estadistico-general.component';
import { CambioPasswordComponent } from '../cambio-password/cambio-password.component';
import { ExistenciasComponent } from '../app/existencias/existencias.component';
import { GeneraRequisicionComponent } from '../app/genera-requisicion/genera-requisicion.component';
import { RequisicionesPendientesComponent } from '../app/requisiciones-pendientes/requisiciones-pendientes.component';
import { ReporteMovimientosXPartidaComponent } from '../app/reporte-movimientos-x-partida/reporte-movimientos-x-partida.component';
import { ReporteExistenciaXPartidaComponent } from '../app/reporte-existencia-x-partida/reporte-existencia-x-partida.component';
import { ReporteComprasComponent } from '../app/reporte-compras/reporte-compras.component';
import { ListaMovimientosComponent } from '../app/lista-movimientos/lista-movimientos.component';
import { UsarArticuloComponent } from '../app/usar-articulo/usar-articulo.component';
import { CargarExistenciasComponent } from '../cargar-existencias/cargar-existencias/cargar-existencias.component';
import { InicioComponent } from './inicio/inicio.component';

import { AltaArticuloComponent } from '../registrar-articulo/alta-articulo.component';
import { ListarArticulosPartidaComponent } from '../listar-articulos-partida/listar-articulos-partida.component';
import { RegistrarPartidaComponent } from '../registrar-partida/registrar-partida.component';
import { RegistrarProveedorComponent } from '../registrar-proveedor/registrar-proveedor.component';



const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,canActivate:[AuthGuard],
        children: [
            { path: '', component: InicioComponent,canActivate:[AuthGuard] },
        

 
            {path: 'permisos-modulos',component:PermisosModulosComponent,canActivate:[AuthGuard]},
            {path: 'generar-documento',component:GenerarDocumentoComponent,canActivate:[AuthGuard]},
            {path: 'mis-seguimientos',component:MisSeguimientosComponent,canActivate:[AuthGuard]},
            {path: 'lista-usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard, AdminGuard]},
            {path: 'por-contestar', component:PorContestarComponent,canActivate:[AuthGuard]},
            {path: 'estadistico-general', component:EstadisticoGeneralComponent,canActivate:[AuthGuard]},
            {path: 'cambio-password', component: CambioPasswordComponent, canActivate: [AuthGuard]},
            {path: 'existencias',component:ExistenciasComponent,canActivate:[AuthGuard]},
            {path:'generar-requisicion',component:GeneraRequisicionComponent,canActivate:[AuthGuard]},
            {path:'requisiciones-pendientes',component:RequisicionesPendientesComponent,canActivate:[AuthGuard]},
            {path:'reporte_movimiento_x_partida',component:ReporteMovimientosXPartidaComponent,canActivate:[AuthGuard]},
            {path:'reporte_existencias_x_partida',component:ReporteExistenciaXPartidaComponent,canActivate:[AuthGuard]},
            {path:'reporte_compras',component:ReporteComprasComponent,canActivate:[AuthGuard]},
            {path:'agregar-articulo',component:AltaArticuloComponent,canActivate:[AuthGuard]},
            {path:'lista-movimientos',component:ListaMovimientosComponent,canActivate:[AuthGuard]},
            {path:'usar-articulo',component:UsarArticuloComponent,canActivate:[AuthGuard]},
            {path: 'cargar-existencias', component: CargarExistenciasComponent, canActivate: [AuthGuard]},
            { path: 'reporte-compras', component: ReporteComprasComponent, canActivate: [AuthGuard] },
            { path: 'reporte-existencia-x-partida', component: ReporteExistenciaXPartidaComponent, canActivate: [AuthGuard] },
            { path: 'reporte-movimiento-x-partida', component: ReporteMovimientosXPartidaComponent, canActivate: [AuthGuard] },
            { path: 'bajo-stock', component: DashboardComponent, canActivate: [AuthGuard] },

			{ path: 'listar-articulos-partida', component: ListarArticulosPartidaComponent, canActivate: [AuthGuard] },
			{ path: 'registrar-partida', component: RegistrarPartidaComponent, canActivate: [AuthGuard] },
			{ path: 'registrar-proveedor', component: RegistrarProveedorComponent, canActivate: [AuthGuard] },			


        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
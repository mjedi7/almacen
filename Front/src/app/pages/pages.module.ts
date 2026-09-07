import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CurrencyPipe } from '@angular/common';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PermisosModulosComponent } from './permisos-modulos/permisos-modulos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CmAngularDualListboxModule } from 'cm-angular-dual-listbox';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    PermisosModulosComponent,
    InicioComponent,
  ],

  providers:[
    CurrencyPipe
  ],

  exports: [
DashboardComponent,
PagesComponent   
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
DataTablesModule,
NgxPaginationModule,
CmAngularDualListboxModule, 
AngularDualListBoxModule
  ],

})
export class PagesModule { }

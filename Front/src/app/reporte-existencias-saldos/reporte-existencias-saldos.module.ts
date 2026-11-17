import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReporteExistenciasSaldosRoutingModule } from './reporte-existencias-saldos-routing.module';
import { ReporteExistenciasSaldosComponent } from './reporte-existencias-saldos/reporte-existencias-saldos.component';

@NgModule({
  declarations: [ReporteExistenciasSaldosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReporteExistenciasSaldosRoutingModule,
  ],
})
export class ReporteExistenciasSaldosModule {}
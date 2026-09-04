import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
//import { ListarArticulosPartidaComponent } from './listar-articulos-partida/listar-articulos-partida.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
 
  { path: '**', component: NopagefoundComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

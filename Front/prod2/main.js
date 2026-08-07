(self["webpackChunkadminpro"] = self["webpackChunkadminpro"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_pages_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.routing */ 3360);
/* harmony import */ var _auth_auth_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.routing */ 8860);
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ 9149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);

// Modulos





const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_2__.NopagefoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        _pages_pages_routing__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
        _auth_auth_routing__WEBPACK_IMPORTED_MODULE_1__.AuthRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _pages_pages_routing__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
        _auth_auth_routing__WEBPACK_IMPORTED_MODULE_1__.AuthRoutingModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'adminpro';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ 9149);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 3899);
/* harmony import */ var _generar_documento_generar_documento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generar-documento/generar-documento.component */ 9085);
/* harmony import */ var _mis_seguimientos_mis_seguimientos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mis-seguimientos/mis-seguimientos.component */ 759);
/* harmony import */ var _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lista-usuarios/lista-usuarios.component */ 9123);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _por_contestar_por_contestar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./por-contestar/por-contestar.component */ 4138);
/* harmony import */ var _estadistico_general_estadistico_general_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./estadistico-general/estadistico-general.component */ 4020);
/* harmony import */ var _cambio_password_cambio_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cambio-password/cambio-password.component */ 7642);
/* harmony import */ var _app_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/existencias/existencias.component */ 7947);
/* harmony import */ var _app_genera_requisicion_genera_requisicion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/genera-requisicion/genera-requisicion.component */ 4471);
/* harmony import */ var _app_requisiciones_pendientes_requisiciones_pendientes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app/requisiciones-pendientes/requisiciones-pendientes.component */ 7702);
/* harmony import */ var _app_reporte_movimientos_x_partida_reporte_movimientos_x_partida_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app/reporte-movimientos-x-partida/reporte-movimientos-x-partida.component */ 8892);
/* harmony import */ var _app_reporte_existencia_x_partida_reporte_existencia_x_partida_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app/reporte-existencia-x-partida/reporte-existencia-x-partida.component */ 5422);
/* harmony import */ var _app_reporte_compras_reporte_compras_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app/reporte-compras/reporte-compras.component */ 9909);
/* harmony import */ var _app_alta_articulo_alta_articulo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app/alta-articulo/alta-articulo.component */ 885);
/* harmony import */ var _app_lista_movimientos_lista_movimientos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app/lista-movimientos/lista-movimientos.component */ 8779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);


// Modulos







//tablas

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__.HashLocationStrategy }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_1__.PagesModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__.NopagefoundComponent,
        _generar_documento_generar_documento_component__WEBPACK_IMPORTED_MODULE_6__.GenerarDocumentoComponent,
        _mis_seguimientos_mis_seguimientos_component__WEBPACK_IMPORTED_MODULE_7__.MisSeguimientosComponent,
        _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_8__.ListaUsuariosComponent,
        _por_contestar_por_contestar_component__WEBPACK_IMPORTED_MODULE_9__.PorContestarComponent,
        _estadistico_general_estadistico_general_component__WEBPACK_IMPORTED_MODULE_10__.EstadisticoGeneralComponent,
        _cambio_password_cambio_password_component__WEBPACK_IMPORTED_MODULE_11__.CambioPasswordComponent,
        _app_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_12__.ExistenciasComponent,
        _app_genera_requisicion_genera_requisicion_component__WEBPACK_IMPORTED_MODULE_13__.GeneraRequisicionComponent,
        _app_requisiciones_pendientes_requisiciones_pendientes_component__WEBPACK_IMPORTED_MODULE_14__.RequisicionesPendientesComponent,
        _app_reporte_movimientos_x_partida_reporte_movimientos_x_partida_component__WEBPACK_IMPORTED_MODULE_15__.ReporteMovimientosXPartidaComponent,
        _app_reporte_existencia_x_partida_reporte_existencia_x_partida_component__WEBPACK_IMPORTED_MODULE_16__.ReporteExistenciaXPartidaComponent,
        _app_reporte_compras_reporte_compras_component__WEBPACK_IMPORTED_MODULE_17__.ReporteComprasComponent,
        _app_alta_articulo_alta_articulo_component__WEBPACK_IMPORTED_MODULE_18__.AltaArticuloComponent,
        _app_lista_movimientos_lista_movimientos_component__WEBPACK_IMPORTED_MODULE_19__.ListaMovimientosComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_1__.PagesModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule] }); })();


/***/ }),

/***/ 885:
/*!**************************************************************!*\
  !*** ./src/app/app/alta-articulo/alta-articulo.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AltaArticuloComponent": () => (/* binding */ AltaArticuloComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_articulos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/articulos.service */ 7490);
/* harmony import */ var src_app_services_partidas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partidas.service */ 8709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function AltaArticuloComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AltaArticuloComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", p_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", p_r4.clave, " - ", p_r4.descripcion, " ");
} }
function AltaArticuloComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AltaArticuloComponent {
    constructor(artSrv, partSrvc) {
        this.artSrv = artSrv;
        this.partSrvc = partSrvc;
        this.articulo = {
            clave: '',
            descripcion: '',
            esActivo: true,
            esBasico: true
        };
        this.loading = false;
    }
    ngOnInit() {
        this.partSrvc.listarPartidas().subscribe({
            next: (resp) => this.partidas = resp.partidas || [],
            error: () => this.partidas = []
        });
    }
    guardarArticulo(f) {
        if (f.invalid || this.loading) {
            f.control.markAllAsTouched();
            return;
        }
        this.loading = true;
        this.articulo.clave = this.articulo.clave?.toUpperCase()?.trim();
        this.articulo.descripcion = this.articulo.descripcion?.trim();
        this.artSrv.crearArticulo({
            clave: this.articulo.clave,
            id_partidas: this.articulo.id_partidas,
            descripcion: this.articulo.descripcion,
            esActivo: this.articulo.esActivo ?? true,
            esBasico: this.articulo.esBasico ?? true
        }).subscribe({
            next: (resp) => {
                if (resp?.ok) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        title: 'Guardado',
                        icon: 'success',
                        text: 'Articulo guardado correctamente'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        title: 'Error',
                        icon: 'warning',
                        text: 'No se pudo guardar el articulo'
                    });
                }
                this.loading = false;
            }
        });
    }
}
AltaArticuloComponent.ɵfac = function AltaArticuloComponent_Factory(t) { return new (t || AltaArticuloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_articulos_service__WEBPACK_IMPORTED_MODULE_1__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_partidas_service__WEBPACK_IMPORTED_MODULE_2__.PartidasService)); };
AltaArticuloComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AltaArticuloComponent, selectors: [["app-alta-articulo"]], decls: 19, vars: 8, consts: [[1, "card", "p-4", "shadow", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["name", "clave", "required", "", "maxlength", "20", "maxlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["class", "text-danger", 4, "ngIf"], ["name", "id_partidas", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "descripcion", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "w-25", "m-auto", 3, "disabled"], [1, "text-danger"], [3, "ngValue"]], template: function AltaArticuloComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AltaArticuloComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.guardarArticulo(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Clave (ej. 001)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AltaArticuloComponent_Template_input_ngModelChange_5_listener($event) { return ctx.articulo.clave = $event; })("input", function AltaArticuloComponent_Template_input_input_5_listener() { let tmp_b_0; return ctx.articulo.clave = ctx.articulo.clave == null ? null : (tmp_b_0 = ctx.articulo.clave.toUpperCase()) == null ? null : tmp_b_0.trim(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AltaArticuloComponent_small_6_Template, 2, 0, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Partida (opcional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AltaArticuloComponent_Template_select_ngModelChange_10_listener($event) { return ctx.articulo.id_partidas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AltaArticuloComponent_option_11_Template, 2, 3, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AltaArticuloComponent_Template_input_ngModelChange_15_listener($event) { return ctx.articulo.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AltaArticuloComponent_small_16_Template, 2, 0, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.articulo.clave);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.submitted && (_r0.controls["clave"] == null ? null : _r0.controls["clave"].invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.articulo.id_partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.articulo.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.submitted && (_r0.controls["descripcion"] == null ? null : _r0.controls["descripcion"].invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading || _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Guardando\u2026" : "Guardar art\u00EDculo", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHRhLWFydGljdWxvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7947:
/*!**********************************************************!*\
  !*** ./src/app/app/existencias/existencias.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExistenciasComponent": () => (/* binding */ ExistenciasComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 3899);










function ExistenciasComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const plantel_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", plantel_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](plantel_r6.descripcion);
} }
function ExistenciasComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ExistenciasComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Utilizar art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ExistenciasComponent_tr_39_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 47)(1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExistenciasComponent_tr_39_td_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const existencia_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.PasarCantidadDisponible(existencia_r7.existencias, existencia_r7.id_costos)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ExistenciasComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExistenciasComponent_tr_39_td_7_Template, 3, 0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const existencia_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](existencia_r7.partida);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](existencia_r7.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](existencia_r7.existencias);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.botonUtilizaArticulo);
} }
class ExistenciasComponent {
    constructor(traer) {
        this.traer = traer;
        this.planteles = [];
        this.existencias = [];
        this.opcionSeleccionado = 0;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
        this.UsarArticulo = {
            nombreAutoriza: localStorage.getItem('nombre'),
            nombreSolicita: '',
            cantidadDisponible: null,
            cantidadAUtilizar: null,
            observacion: '',
            fecha: '',
            idPlantel: null,
            idCostos: null
        };
        this.botonUtilizaArticulo = false;
    }
    ngOnInit() {
        this.traerPlanteles();
        let fecha = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(new Date(), 'dd-MM-yyyy', 'en-US');
        this.UsarArticulo.fecha = fecha;
        var centroT = localStorage.getItem('centro_trabajo');
        var centroTrabajoInt = parseInt(centroT);
        if (centroTrabajoInt >= 1 && centroTrabajoInt <= 31) {
            this.botonUtilizaArticulo = true;
        }
        else if (centroTrabajoInt > 32) {
            this.botonUtilizaArticulo = false;
        }
    }
    getListaExistencias(idplantel) {
        $('#articulos').DataTable().clear();
        $('#articulos').DataTable().draw();
        $('#articulos').DataTable().destroy();
        try {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                searching: true,
                processing: true,
                destroy: true,
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
                },
            };
            this.traer.http.get(this.API_URL + `/getExistencias/${idplantel}`)
                .subscribe((res) => {
                this.existencias = res;
                console.log(this.existencias);
                this.dtTrigger.next();
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    traerPlanteles() {
        var plantel = localStorage.getItem('centro_trabajo');
        this.traer.http.get(this.API_URL + `/traerPlanteles/${plantel}`)
            .subscribe((res) => {
            this.planteles = res;
            console.log(this.planteles);
        });
    }
    plantelSeleccionado() {
        this.verSeleccion = this.opcionSeleccionado;
        console.log(this.verSeleccion);
        this.getListaExistencias(this.verSeleccion);
    }
    PasarCantidadDisponible(cantidadDisponible, id_costos) {
        this.UsarArticulo.cantidadDisponible = cantidadDisponible;
        this.UsarArticulo.idCostos = id_costos;
    }
    AsignarArticulo(form) {
        this.UsarArticulo.idPlantel = this.verSeleccion;
        if (this.UsarArticulo.cantidadAUtilizar > this.UsarArticulo.cantidadDisponible || this.UsarArticulo.cantidadAUtilizar <= 0) {
            console.log("No hay stock");
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: "Operación no realizada",
                text: "La cantidad a utilizar no es valida",
                icon: 'warning'
            });
        }
        else {
            this.traer.http.post(this.API_URL + `/UsarArticuloPlantel`, this.UsarArticulo)
                .subscribe((res) => {
                console.log(res);
                if (res == "Add") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Operación realizada', 'El articulo se disminuyo del stock', 'success');
                    this.getListaExistencias(this.verSeleccion);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', '¡No se guardaron los cambios!', 'error');
                }
            });
        }
    }
    //REPORTE
    reporteGneral() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                'Content-Type': 'application/json',
            }), responseType: 'blob'
        };
        this.traer.http.get(this.API_URL + `/reporteGeneral/${this.verSeleccion}`, httpOptions)
            .subscribe((res) => {
            var file = new Blob([res], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
        });
    }
    descargarFormato() {
        const link = document.createElement('a');
        link.href = 'assets/Formato_plantel.pdf';
        link.download = 'Formato_plantel.pdf';
        link.click();
    }
}
ExistenciasComponent.ɵfac = function ExistenciasComponent_Factory(t) { return new (t || ExistenciasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
ExistenciasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExistenciasComponent, selectors: [["app-existencias"]], decls: 78, vars: 13, consts: [[1, "formulario"], [1, "Titulo", 2, "text-align", "center"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-3", 2, "padding-left", "120px"], ["for", "inputPassword4"], ["id", "areaEmite", "name", "Plantel", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Plantel", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], [1, "form-group", "col-md-3", 2, "padding-left", "80px"], [1, "btn", "btn-success", 3, "click"], [1, "mdi", "mdi-file-pdf", 2, "color", "brown"], [1, "form-group", "col-md-2"], [1, "btn", "btn-danger", 3, "click"], [1, "mdi", "mdi-file-pdf", 2, "color", "rgb(226, 222, 222)"], [1, "mt-2", 2, "width", "85%", "margin", "0 auto"], ["id", "articulos", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "left", "width", "auto"], [2, "text-align", "center", "width", "30px"], ["style", "text-align:center;width: 80px;", 4, "ngIf"], [2, "font-size", "15px"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "autoriza-name", 1, "col-form-label"], ["type", "text", "name", "nomAutoriza", "readonly", "", "id", "autoriza-name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "nomSolicita", "id", "autoriza-name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "cantidad-name", 1, "col-form-label"], ["type", "number", "name", "cantidadDisponible", "readonly", "", "id", "cantidad-name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "cantidadUtilizar", "id", "cantidad-name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "observacion", "id", "cantidad-name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fecha", "readonly", "", "id", "cantidad-name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success"], [3, "value"], [1, "form-text", "text-danger", "animated", "fadeIn"], [2, "text-align", "center", "width", "80px"], [2, "text-align", "left"], [2, "text-transform", "capitalize"], [2, "text-align", "center"], ["style", "text-align:center;", 4, "ngIf"], ["title", "usar art\u00EDculo", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-light", 3, "click"], [1, "mdi", "mdi-poll", 2, "color", "brown"]], template: function ExistenciasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mis existencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Plantel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_select_ngModelChange_9_listener($event) { return ctx.opcionSeleccionado = $event; })("change", function ExistenciasComponent_Template_select_change_9_listener() { return ctx.plantelSeleccionado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ExistenciasComponent_ng_container_11_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExistenciasComponent_small_12_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9)(14, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Descargar Inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExistenciasComponent_Template_button_click_17_listener() { return ctx.reporteGneral(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " .PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12)(21, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Formato requisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExistenciasComponent_Template_button_click_24_listener() { return ctx.descargarFormato(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " .PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15)(28, "table", 16)(29, "thead")(30, "tr", 17)(31, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Existencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ExistenciasComponent_th_37_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ExistenciasComponent_tr_39_Template, 8, 4, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 22)(41, "div", 23)(42, "div", 24)(43, "div", 25)(44, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Usar Art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 27)(47, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 29)(50, "form", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ExistenciasComponent_Template_form_ngSubmit_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.AsignarArticulo(_r5)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 32)(53, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Nombre de quien autoriza:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_input_ngModelChange_55_listener($event) { return ctx.UsarArticulo.nombreAutoriza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 32)(57, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Nombre de quien solicita:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_input_ngModelChange_59_listener($event) { return ctx.UsarArticulo.nombreSolicita = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 32)(61, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Cantidad Disponible:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_input_ngModelChange_63_listener($event) { return ctx.UsarArticulo.cantidadDisponible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 32)(65, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Cantidad a utilizar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_input_ngModelChange_67_listener($event) { return ctx.UsarArticulo.cantidadAUtilizar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 32)(69, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Observaci\u00F3n (opcional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_input_ngModelChange_71_listener($event) { return ctx.UsarArticulo.observacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 32)(73, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Fecha de autorizaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_input_ngModelChange_75_listener($event) { return ctx.UsarArticulo.fecha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Autorizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.opcionSeleccionado);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.planteles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.botonUtilizaArticulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.existencias);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.UsarArticulo.nombreAutoriza);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.UsarArticulo.nombreSolicita);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.UsarArticulo.cantidadDisponible);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.UsarArticulo.cantidadAUtilizar);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.UsarArticulo.observacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.UsarArticulo.fecha);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective], styles: ["label[_ngcontent-%COMP%]{\r\n    font-weight:600;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4aXN0ZW5jaWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHOztBQUVIO0lBQ0ksZUFBZTtFQUNqQiIsImZpbGUiOiJleGlzdGVuY2lhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGVcclxue1xyXG4gICAgY291bnRlci1yZXNldDogcm93TnVtYmVyO1xyXG59XHJcblxyXG50YWJsZSB0ciA+IHRkOmZpcnN0LWNoaWxkXHJcbntcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiByb3dOdW1iZXI7XHJcbn1cclxuICAgICAgICAgICAgICAgIFxyXG50YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZDo6YmVmb3JlXHJcbntcclxuICAgIGNvbnRlbnQ6IGNvdW50ZXIocm93TnVtYmVyKTtcclxuICAgIG1pbi13aWR0aDogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxufSAqL1xyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 4471:
/*!************************************************************************!*\
  !*** ./src/app/app/genera-requisicion/genera-requisicion.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneraRequisicionComponent": () => (/* binding */ GeneraRequisicionComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 3899);










function GeneraRequisicionComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const plantel_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", plantel_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](plantel_r18.descripcion);
} }
function GeneraRequisicionComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GeneraRequisicionComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const partida_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", partida_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](partida_r19.descripcion);
} }
function GeneraRequisicionComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GeneraRequisicionComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GeneraRequisicionComponent_ul_27_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneraRequisicionComponent_ul_27_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const producto_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.seleccionarProducto(producto_r21)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", producto_r21.nombre_producto, " ");
} }
function GeneraRequisicionComponent_ul_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GeneraRequisicionComponent_ul_27_li_1_Template, 2, 1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.productosfiltrados);
} }
function GeneraRequisicionComponent_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GeneraRequisicionComponent_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GeneraRequisicionComponent_small_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GeneraRequisicionComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneraRequisicionComponent_button_53_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.formatoRequisicion()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GeneraRequisicionComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 47)(10, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneraRequisicionComponent_tr_68_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const articulo_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.eliminarArticulo(articulo_r26.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const articulo_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](articulo_r26.nom_articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](articulo_r26.cantidad_solicitada);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 3, articulo_r26.fecha_solicitud, "shortDate"));
} }
const _c0 = function () { return { standalone: true }; };
class GeneraRequisicionComponent {
    constructor(traer) {
        this.traer = traer;
        this.requisicion = {
            plantel: null,
            partida: null,
            idcosto: '',
            fecha: null,
            cantidadSolicitar: null,
            consecutivo: null,
            nombreProducto: ''
        };
        this.productosfiltrados = [];
        this.productoBuscado = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.articulosRequisicion = [];
        this.planteles = [];
        this.partidas = [];
        this.productos = [];
        this.mostrarBotonTransferir = false;
    }
    ngOnInit() {
        this.traerPlanteles();
        this.traerPartidas();
        this.TraerConsecutivo();
        this.fechaResgistro = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(new Date(), 'dd-MM-yyyy', 'en-US');
        this.requisicion.fecha = this.fechaResgistro;
    }
    filtrarProductos() {
        const texto = this.productoBuscado.toLowerCase();
        this.productosfiltrados = this.productos.filter(p => p.nombre_producto.toLowerCase().includes(texto));
    }
    seleccionarProducto(producto) {
        this.requisicion.idcosto = producto.id_costos;
        this.productoBuscado = producto.nombre_producto;
        this.productosfiltrados = [];
    }
    traerPlanteles() {
        var id_plantel = localStorage.getItem('centro_trabajo');
        this.traer.http.get(this.API_URL + `/traerPlantelRequisicion/${id_plantel}`)
            .subscribe((res) => {
            this.planteles = res;
            console.log(this.planteles);
        });
    }
    plantelSeleccionado() {
        console.log(this.requisicion.plantel);
    }
    traerPartidas() {
        this.traer.http.get(this.API_URL + `/traerPartidas`)
            .subscribe((res) => {
            this.partidas = res;
            console.log(this.partidas);
        });
    }
    opcionSeleccionadaX() {
        console.log(this.requisicion.partida);
        this.traer.http.get(this.API_URL + `/traerProductosDesdeTransferir/${this.requisicion.partida}`)
            .subscribe((res) => {
            this.productos = res;
            this.productosfiltrados = res;
            console.log(this.productos);
            this.requisicion.idcosto = null;
            this.requisicion.nombreProducto = '';
        });
    }
    agregarArticulo(form) {
        if (form.valid == true) {
            if (this.requisicion.cantidadSolicitar <= 0 || Number.isInteger(this.requisicion.cantidadSolicitar) == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: "Operación no realizada",
                    text: "La cantidad a solicitar debe ser mayor a 0 y número entero",
                    icon: "warning"
                });
            }
            else {
                this.traer.http.post(this.API_URL + `/TramitarRequisicion`, this.requisicion)
                    .subscribe((res) => {
                    console.log(res);
                    if (res == "Add") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ok', 'Articulo agregado a la lista', 'success');
                        this.getListaArticulosRequisicion();
                    }
                    else if (res == "Duplicado") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: "Artículo duplicado",
                            icon: 'warning',
                            text: "Este artículo ya fue agregado a la lista"
                        });
                    }
                    else if (res == "ErrorProducto") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: "Artículo no válido",
                            icon: 'warning',
                            text: "Debe elegir un artículo de la lista"
                        });
                    }
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: "Operación no realizada",
                text: "Complete todos los campos",
                icon: "warning"
            });
        }
    }
    TraerConsecutivo() {
        var id_plantel = localStorage.getItem('centro_trabajo');
        this.traer.http.get(this.API_URL + `/traerConsecutivoRequisicion/${id_plantel}`)
            .subscribe((res) => {
            var consecutivo = res;
            this.requisicion.consecutivo = consecutivo;
        });
    }
    eliminarArticulo(idarticulo) {
        console.log(idarticulo);
        this.traer.http.delete(this.API_URL + `/eliminarArticuloRequisicion/${idarticulo}`)
            .subscribe((res) => {
            this.getListaArticulosRequisicion();
        });
    }
    getListaArticulosRequisicion() {
        $('#articulos').DataTable().clear();
        $('#articulos').DataTable().draw();
        $('#articulos').DataTable().destroy();
        try {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                searching: false,
                processing: true,
                destroy: true,
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
                },
            };
            var folio = this.requisicion.consecutivo;
            var id = this.requisicion.plantel;
            this.traer.http.get(this.API_URL + `/getListaArticulosRequisicion/${folio}/${id}`)
                .subscribe((res) => {
                this.articulosRequisicion = res;
                console.log(this.articulosRequisicion);
                this.dtTrigger.next();
                if (this.articulosRequisicion.length > 0) {
                    this.mostrarBotonTransferir = true;
                }
                else {
                    this.mostrarBotonTransferir = false;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    formatoRequisicion() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "¿Estas seguro de terminar la lista?",
            text: "Una vez terminada no podrá agregar nuevos artículos ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: 'Cancelar',
            confirmButtonText: "Si, terminar"
        }).then((result) => {
            if (result.isConfirmed) {
                if (this.requisicion.plantel > 31) {
                    const httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                            'Content-Type': 'application/json',
                        }), responseType: 'blob'
                    };
                    this.traer.http.get(this.API_URL + `/formatoRequisicionDG/${this.requisicion.plantel}/${this.requisicion.consecutivo}`, httpOptions)
                        .subscribe((res) => {
                        var file = new Blob([res], { type: 'application/pdf' });
                        var fileURL = URL.createObjectURL(file);
                        const link = document.createElement('a');
                        link.href = fileURL;
                        link.download = 'Formato_Requisición';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        // console.log(fileURL);
                        // window.open(fileURL); 
                        setTimeout(function () { location.reload(); }, 3000);
                    });
                }
                else {
                    const httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
                            'Content-Type': 'application/json',
                        }), responseType: 'blob'
                    };
                    this.traer.http.get(this.API_URL + `/formatoRequisicion/${this.requisicion.plantel}/${this.requisicion.consecutivo}`, httpOptions)
                        .subscribe((res) => {
                        var file = new Blob([res], { type: 'application/pdf' });
                        var fileURL = URL.createObjectURL(file);
                        const link = document.createElement('a');
                        link.href = fileURL;
                        link.download = 'Formato_Requisición';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        // console.log(fileURL);
                        // window.open(fileURL); 
                        setTimeout(function () { location.reload(); }, 3000);
                    });
                }
            }
            else {
            }
        });
    }
}
GeneraRequisicionComponent.ɵfac = function GeneraRequisicionComponent_Factory(t) { return new (t || GeneraRequisicionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
GeneraRequisicionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GeneraRequisicionComponent, selectors: [["app-genera-requisicion"]], decls: 69, vars: 21, consts: [[1, "formulario", 2, "width", "75%", "height", "500px", "margin", "0 auto"], [1, "Titulo", 2, "text-align", "center"], [2, "margin-top", "50px", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-4"], ["for", "inputPassword4"], ["id", "areaEmite", "name", "Plantel", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Plantel", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], ["id", "areaEmite", "name", "Partida", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Partida", "ngModel"], [1, "form-group", "col-md-4", 2, "position", "relative"], ["for", "inputProducto"], ["type", "text", "id", "inputProducto", "name", "Producto", "placeholder", "Escribe el nombre del art\u00EDculo", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "input"], ["Producto", "ngModel"], ["class", "list-group mt-1", "style", "\n                position: absolute;\n                z-index: 1000;\n                width: 100%;\n                max-height: 400px;\n                overflow-y: auto;\n                box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                background-color: white;\n                border: 1px solid #ccc;\n            ", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-2"], ["for", "inputAddress"], ["type", "text", "name", "Fecha", "id", "inputAddress", "readonly", "", "placeholder", "", "required", "", 1, "form-control", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["Fecha", "ngModel"], [1, "form-group", "col-md-3"], ["type", "number", "name", "cantidadSolicitar", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["cantidadSolicitar", "ngModel"], ["type", "number", "name", "folioTransferencia", "id", "inputAddress", "readonly", "", "placeholder", "", "required", "", 1, "form-control", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["folioTransferencia", "ngModel"], [1, "boton", "mt-4", 2, "margin", "0 auto", "text-align", "center"], ["type", "submit", "title", "Agregar art\u00EDculo", 1, "btn", "btn-light", 2, "padding", "10px", "margin-right", "10px"], [1, "fas", "fa-cart-plus", "fa-2x", 2, "color", "rgb(255, 166, 0)"], [1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "-160px", "width", "75%"], ["class", "btn", "style", "float: right;", "title", "Generar Formato", 3, "click", 4, "ngIf"], [1, "mt-2", 2, "width", "85%", "margin", "0 auto"], ["id", "articulos", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "center", "width", "50px"], [2, "text-align", "center", "width", "200px"], [2, "text-align", "center", "width", "80px"], [2, "font-size", "15px"], [3, "value"], [1, "form-text", "text-danger", "animated", "fadeIn"], [1, "list-group", "mt-1", 2, "position", "absolute", "z-index", "1000", "width", "100%", "max-height", "400px", "overflow-y", "auto", "box-shadow", "0 4px 8px rgba(0,0,0,0.1)", "background-color", "white", "border", "1px solid #ccc"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click"], ["title", "Generar Formato", 1, "btn", 2, "float", "right", 3, "click"], [1, "mdi", "mdi-file-pdf", "fa-2x", 2, "color", "rgb(223, 21, 21)"], [2, "text-align", "center"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash"]], template: function GeneraRequisicionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Generar Requisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function GeneraRequisicionComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.agregarArticulo(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Plantel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GeneraRequisicionComponent_Template_select_ngModelChange_10_listener($event) { return ctx.requisicion.plantel = $event; })("change", function GeneraRequisicionComponent_Template_select_change_10_listener() { return ctx.plantelSeleccionado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, GeneraRequisicionComponent_ng_container_12_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, GeneraRequisicionComponent_small_13_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5)(15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GeneraRequisicionComponent_Template_select_ngModelChange_17_listener($event) { return ctx.requisicion.partida = $event; })("change", function GeneraRequisicionComponent_Template_select_change_17_listener() { return ctx.opcionSeleccionadaX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, GeneraRequisicionComponent_ng_container_19_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, GeneraRequisicionComponent_small_20_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GeneraRequisicionComponent_Template_input_ngModelChange_24_listener($event) { return ctx.productoBuscado = $event; })("input", function GeneraRequisicionComponent_Template_input_input_24_listener() { return ctx.filtrarProductos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, GeneraRequisicionComponent_small_26_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, GeneraRequisicionComponent_ul_27_Template, 2, 1, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GeneraRequisicionComponent_Template_input_ngModelChange_32_listener($event) { return ctx.requisicion.fecha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, GeneraRequisicionComponent_small_34_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 23)(36, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Cantidad a solicitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GeneraRequisicionComponent_Template_input_ngModelChange_38_listener($event) { return ctx.requisicion.cantidadSolicitar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, GeneraRequisicionComponent_small_40_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 23)(42, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Folio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GeneraRequisicionComponent_Template_input_ngModelChange_44_listener($event) { return ctx.requisicion.consecutivo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, GeneraRequisicionComponent_small_46_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 28)(48, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 31)(51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Lista de art\u00EDculos a transferir");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, GeneraRequisicionComponent_button_53_Template, 2, 0, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 33)(55, "table", 34)(56, "thead")(57, "tr", 35)(58, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Num.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Fecha autorizada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "tbody", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, GeneraRequisicionComponent_tr_68_Template, 12, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](39);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.requisicion.plantel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.planteles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.requisicion.partida);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoBuscado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.productosfiltrados.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.requisicion.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r10.invalid && _r10.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.requisicion.cantidadSolicitar);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r12.invalid && _r12.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.requisicion.consecutivo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r14.invalid && _r14.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrarBotonTransferir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.articulosRequisicion);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["table[_ngcontent-%COMP%]\r\n{\r\n    counter-reset: rowNumber;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child\r\n{\r\n    counter-increment: rowNumber;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child::before\r\n{\r\n    content: counter(rowNumber);\r\n    min-width: 1em;\r\n    margin-right: 0.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYS1yZXF1aXNpY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZ2VuZXJhLXJlcXVpc2ljaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZVxyXG57XHJcbiAgICBjb3VudGVyLXJlc2V0OiByb3dOdW1iZXI7XHJcbn1cclxuXHJcbnRhYmxlIHRyID4gdGQ6Zmlyc3QtY2hpbGRcclxue1xyXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHJvd051bWJlcjtcclxufVxyXG4gICAgICAgICAgICAgICAgXHJcbnRhYmxlIHRyIHRkOmZpcnN0LWNoaWxkOjpiZWZvcmVcclxue1xyXG4gICAgY29udGVudDogY291bnRlcihyb3dOdW1iZXIpO1xyXG4gICAgbWluLXdpZHRoOiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG59Il19 */"] });


/***/ }),

/***/ 8779:
/*!**********************************************************************!*\
  !*** ./src/app/app/lista-movimientos/lista-movimientos.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaMovimientosComponent": () => (/* binding */ ListaMovimientosComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 3899);









function ListaMovimientosComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const plantel_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", plantel_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](plantel_r4.descripcion);
} }
function ListaMovimientosComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ListaMovimientosComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 22)(13, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ListaMovimientosComponent_tr_30_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.upload($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaMovimientosComponent_tr_30_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const salida_r5 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.subirPDF(salida_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaMovimientosComponent_tr_30_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const salida_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.abrirPDF(salida_r5.ruta)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const salida_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](salida_r5.num_articulos_solicitados);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 5, salida_r5.fecha, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](salida_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](salida_r5.nombre_solicita);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](salida_r5.nombre_autoriza);
} }
class ListaMovimientosComponent {
    constructor(traer) {
        this.traer = traer;
        this.planteles = [];
        this.salidas = [];
        this.opcionSeleccionado = 0;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
    }
    ngOnInit() {
        this.traerPlanteles();
    }
    traerPlanteles() {
        var plantel = localStorage.getItem('centro_trabajo');
        this.traer.http.get(this.API_URL + `/traerPlanteles/${plantel}`)
            .subscribe((res) => {
            this.planteles = res;
            console.log(this.planteles);
        });
    }
    plantelSeleccionado() {
        this.verSeleccion = this.opcionSeleccionado;
        console.log(this.verSeleccion);
        this.getListaSalidas(this.verSeleccion);
    }
    getListaSalidas(idplantel) {
        $('#articulos').DataTable().clear();
        $('#articulos').DataTable().draw();
        $('#articulos').DataTable().destroy();
        try {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                searching: true,
                processing: true,
                destroy: true,
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
                },
            };
            this.traer.http.get(this.API_URL + `/getSalidas/${idplantel}`)
                .subscribe((res) => {
                this.salidas = res;
                console.log(this.salidas);
                this.dtTrigger.next();
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    upload(event) {
        const file = event.target.files[0];
        if (event.target.files.length > 0) {
            if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
                this.myFiles = event.target.files;
                console.log(this.myFiles);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'warning',
                    title: 'Error en documento',
                    text: 'Solo se permiten archivos .pdf'
                });
            }
        }
        else {
            console.log("NO");
        }
    }
    subirPDF(id) {
        this.id = id;
        if (this.myFiles == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'No ha seleccionado un documento',
                icon: 'warning'
            });
        }
        this.numidentificador = Date.now();
        const formdata = new FormData();
        for (var i = 0; i < this.myFiles.length; i++) {
            formdata.append('files', this.myFiles[i]);
        }
        var areaAlmacenaDoc = parseInt(localStorage.getItem('centro_trabajo'));
        if (areaAlmacenaDoc == 1) {
            var areaDocumento = "tres_valles";
        }
        else if (areaAlmacenaDoc == 2) {
            var areaDocumento = "papantla";
        }
        else if (areaAlmacenaDoc == 3) {
            var areaDocumento = "benito_juarez";
        }
        else if (areaAlmacenaDoc == 4) {
            var areaDocumento = "naolinco";
        }
        else if (areaAlmacenaDoc == 5) {
            var areaDocumento = "vega_de_alatorre";
        }
        else if (areaAlmacenaDoc == 6) {
            var areaDocumento = "huitzila";
        }
        else if (areaAlmacenaDoc == 7) {
            var areaDocumento = "coxquihui";
        }
        else if (areaAlmacenaDoc == 8) {
            var areaDocumento = "uxpanapa";
        }
        else if (areaAlmacenaDoc == 9) {
            var areaDocumento = "huayacocotla";
        }
        else if (areaAlmacenaDoc == 10) {
            var areaDocumento = "agua_dulce";
        }
        else if (areaAlmacenaDoc == 11) {
            var areaDocumento = "pajapan";
        }
        else if (areaAlmacenaDoc == 12) {
            var areaDocumento = "filomeno_mata";
        }
        else if (areaAlmacenaDoc == 13) {
            var areaDocumento = "planton_sanchez";
        }
        else if (areaAlmacenaDoc == 14) {
            var areaDocumento = "atzalan";
        }
        else if (areaAlmacenaDoc == 15) {
            var areaDocumento = "san_rafael";
        }
        else if (areaAlmacenaDoc == 16) {
            var areaDocumento = "omealca";
        }
        else if (areaAlmacenaDoc == 17) {
            var areaDocumento = "huatusco";
        }
        else if (areaAlmacenaDoc == 18) {
            var areaDocumento = "la_camelia";
        }
        else if (areaAlmacenaDoc == 19) {
            var areaDocumento = "ciudad_olmeca";
        }
        else if (areaAlmacenaDoc == 20) {
            var areaDocumento = "las_lomas";
        }
        else if (areaAlmacenaDoc == 21) {
            var areaDocumento = "guayalejo";
        }
        else if (areaAlmacenaDoc == 22) {
            var areaDocumento = "medellin";
        }
        else if (areaAlmacenaDoc == 23) {
            var areaDocumento = "la_cuesta";
        }
        else if (areaAlmacenaDoc == 24) {
            var areaDocumento = "huazuntlan";
        }
        else if (areaAlmacenaDoc == 25) {
            var areaDocumento = "otatitlan";
        }
        else if (areaAlmacenaDoc == 26) {
            var areaDocumento = "catemaco";
        }
        else if (areaAlmacenaDoc == 27) {
            var areaDocumento = "palma_sola";
        }
        else if (areaAlmacenaDoc == 28) {
            var areaDocumento = "veracruz";
        }
        else if (areaAlmacenaDoc == 29) {
            var areaDocumento = "general_alatriste";
        }
        else if (areaAlmacenaDoc == 30) {
            var areaDocumento = "palo_blanco";
        }
        else if (areaAlmacenaDoc == 31) {
            var areaDocumento = "coetzala";
        }
        else if (areaAlmacenaDoc == 32) {
            var areaDocumento = "direccion_general";
        }
        else if (areaAlmacenaDoc == 33) {
            var areaDocumento = "administrativo";
        }
        else if (areaAlmacenaDoc == 34) {
            var areaDocumento = "academico";
        }
        else if (areaAlmacenaDoc == 35) {
            var areaDocumento = "planeacion";
        }
        else if (areaAlmacenaDoc == 36) {
            var areaDocumento = "vinculacion";
        }
        else if (areaAlmacenaDoc == 37) {
            var areaDocumento = "tecnologia";
        }
        else if (areaAlmacenaDoc == 39) {
            var areaDocumento = "recursos_humanos";
        }
        else if (areaAlmacenaDoc == 40) {
            var areaDocumento = "recursos_financieros";
        }
        else if (areaAlmacenaDoc == 41) {
            var areaDocumento = "recursos_materiales";
        }
        else if (areaAlmacenaDoc == 42) {
            var areaDocumento = "contabilidad";
        }
        else if (areaAlmacenaDoc == 43) {
            var areaDocumento = "juridico";
        }
        else if (areaAlmacenaDoc == 44) {
            var areaDocumento = "genero";
        }
        else if (areaAlmacenaDoc == 45) {
            var areaDocumento = "transparencia";
        }
        else if (areaAlmacenaDoc == 46) {
            var areaDocumento = "sindicato";
        }
        console.log(formdata);
        this.traer.http.post(this.API_URL + `/SubirArchivoRequisicionPlantel/${this.numidentificador}/${areaDocumento}`, formdata).subscribe((res) => {
            console.log(res);
            this.actualizarCampoRuta();
        }, (err) => {
            console.log(err);
        });
    }
    actualizarCampoRuta() {
        var idPlantel = localStorage.getItem('centro_trabajo');
        this.traer.http.put(this.API_URL + `/actualizaRutaPlanteles/${this.numidentificador}/${this.id}/${idPlantel}`, null)
            .subscribe((res) => {
            if (res == "rutaActualizada") {
                // this.traerRequisicionesPendientes();
            }
            else {
            }
        });
    }
    abrirPDF(ruta) {
        var a = ruta.toString();
        var url = (a.replaceAll('/', '-'));
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
            }), responseType: 'blob'
        };
        this.traer.http.get(this.API_URL + `/abrirPDFRequisicionPlantel/${url}`, httpOptions).subscribe((res) => {
            console.log(res);
            var file = new Blob([res], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
        });
    }
}
ListaMovimientosComponent.ɵfac = function ListaMovimientosComponent_Factory(t) { return new (t || ListaMovimientosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
ListaMovimientosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListaMovimientosComponent, selectors: [["app-lista-movimientos"]], decls: 31, vars: 6, consts: [[1, "formulario"], [1, "Titulo", 2, "text-align", "center"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-3", 2, "padding-left", "120px"], ["for", "inputPassword4"], ["id", "areaEmite", "name", "Plantel", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Plantel", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], [1, "mt-2", 2, "width", "85%", "margin", "0 auto"], ["id", "articulos", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "left", "width", "20px"], [2, "text-align", "left", "width", "80px"], [2, "text-align", "center", "width", "350px"], [2, "text-align", "center", "width", "300px"], [2, "font-size", "15px"], [3, "value"], [1, "form-text", "text-danger", "animated", "fadeIn"], [2, "text-align", "left"], [2, "text-align", "center", "text-transform", "lowercase"], [2, "text-transform", "capitalize"], [2, "text-align", "center"], ["id", "file", "type", "file", "multiple", "multiple", "accept", ".pdf", "required", "", 1, "btn", "btn-primary", "form-control", 2, "width", "110px", 3, "change"], [1, "btn", "btn-warning", 2, "margin", "4px", 3, "click"], [1, "mdi", "mdi-cloud-upload"], [1, "btn", "btn-light", 2, "margin", "4px", 3, "click"], [1, "mdi", "mdi-file-pdf", "fa-1x", 2, "color", "rgb(223, 21, 21)"]], template: function ListaMovimientosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Lista de salidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Plantel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListaMovimientosComponent_Template_select_ngModelChange_9_listener($event) { return ctx.opcionSeleccionado = $event; })("change", function ListaMovimientosComponent_Template_select_change_9_listener() { return ctx.plantelSeleccionado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ListaMovimientosComponent_ng_container_11_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ListaMovimientosComponent_small_12_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9)(14, "table", 10)(15, "thead")(16, "tr", 11)(17, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Cantidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Solicit\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Autoriz\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Subir Formato");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ListaMovimientosComponent_tr_30_Template, 18, 8, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.opcionSeleccionado);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.planteles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.salidas);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1tb3ZpbWllbnRvcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9909:
/*!******************************************************************!*\
  !*** ./src/app/app/reporte-compras/reporte-compras.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteComprasComponent": () => (/* binding */ ReporteComprasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_models_reporte_movimientos_x_partida__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/reporte_movimientos_x_partida */ 7415);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








function ReporteComprasComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReporteComprasComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReporteComprasComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const partida_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", partida_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", partida_r20.clave, "--", partida_r20.descripcion, " ");
} }
function ReporteComprasComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReporteComprasComponent_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReporteComprasComponent_small_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReporteComprasComponent_small_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReporteComprasComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const proveedor_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", proveedor_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r21.razon_social);
} }
function ReporteComprasComponent_small_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReporteComprasComponent_small_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ReporteComprasComponent {
    constructor(traer) {
        this.traer = traer;
        this.reporte = {
            fechaIni: null,
            fechaFin: null,
            partida: '',
            fechaReporte: null
        };
        this.reporte2 = {
            fechaIni: null,
            fechaFin: null,
            idproveedor: null,
            fechaReporte: null
        };
        this.datosproveedor = [];
        this.proveedores = [];
        this.partidas = [];
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.uri_api;
    }
    ngOnInit() {
        this.traerPartidas();
        this.traerProveedores();
    }
    GeneraReporte(form) {
        if (form.valid == true) {
            if (this.reporte.partida == "0") {
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                        'Content-Type': 'application/json',
                    }), responseType: 'blob'
                };
                this.traer.http.post(this.API_URL + `/reporte_de_compras_todas`, this.reporte, httpOptions)
                    .subscribe((res) => {
                    var file = new Blob([res], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.download = 'Reporte_de_todas_las_compras';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }
            else if (this.reporte.partida != "0") {
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                        'Content-Type': 'application/json',
                    }), responseType: 'blob'
                };
                this.traer.http.post(this.API_URL + `/reporte_de_compras_x_partida`, this.reporte, httpOptions)
                    .subscribe((res) => {
                    var file = new Blob([res], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.download = 'Reporte_compras_por_partida';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: "Complete todos los campos",
                icon: "warning"
            });
        }
    }
    traerPartidas() {
        this.traer.http.get(this.API_URL + `/traerPartidas`)
            .subscribe((res) => {
            this.partidas = res;
            this.partidas.push({ id: '0', clave: '0', descripcion: 'Todos' });
            console.log(this.partidas);
            console.log(this.partidas);
        });
    }
    traerProveedores() {
        this.traer.http.get(this.API_URL + `/traerProveedores`)
            .subscribe((res) => {
            this.proveedores = res;
            console.log(this.proveedores);
        });
    }
    CapturarValor() {
        var idproveedor = this.direccionSeleccionada;
        console.log(idproveedor);
        this.traer.http.get(this.API_URL + `/traerDatosProveedores/${idproveedor}`)
            .subscribe((res) => {
            this.datosproveedor = res;
        });
    }
    GeneraReportePorProveedor(form) {
        if (form.valid == true) {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                    'Content-Type': 'application/json',
                }), responseType: 'blob'
            };
            this.traer.http.post(this.API_URL + `/reporte_de_compras_x_proveedor`, this.reporte2, httpOptions)
                .subscribe((res) => {
                var file = new Blob([res], { type: 'application/pdf' });
                var fileURL = URL.createObjectURL(file);
                const link = document.createElement('a');
                link.href = fileURL;
                link.download = 'Reporte_compras_x_proveedor';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: "Complete todos los campos",
                icon: "warning"
            });
        }
    }
}
ReporteComprasComponent.ɵfac = function ReporteComprasComponent_Factory(t) { return new (t || ReporteComprasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_3__.TraerDatosService)); };
ReporteComprasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReporteComprasComponent, selectors: [["app-reporte-compras"]], decls: 79, vars: 19, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "50px"], [1, "contendor", "d-flex", "justify-content-center", "align-items-center", 2, "width", "90%", "margin", "0 auto"], [2, "width", "80%", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-2"], ["for", "inputPassword4"], ["type", "date", "name", "FechaIni", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaIni", "ngModel"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], ["type", "date", "name", "FechaFin", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaFin", "ngModel"], [1, "form-group", "col-md-4"], ["id", "areaEmite", "name", "Partida", "required", "", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Partida", "ngModel"], ["value", ""], [4, "ngFor", "ngForOf"], ["type", "date", "name", "FechaReporte", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaReporte", "ngModel"], [1, "boton", 2, "margin", "0 auto", "text-align", "center", "margin-top", "17px"], ["type", "submit", "title", "Generar Reporte", 1, "btn", "btn-light", 2, "font-size", "30px"], [1, "mdi", "mdi-file-pdf-box", 2, "color", "#ac0808", "font-size", "50x"], ["f2", "ngForm"], ["type", "date", "name", "FechaIni2", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaIni2", "ngModel"], ["type", "date", "name", "FechaFin2", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaFin2", "ngModel"], ["id", "areaEmite", "name", "Proveedor2", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Proveedor2", "ngModel"], ["type", "date", "name", "FechaReporte2", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaReporte2", "ngModel"], [1, "form-text", "text-danger", "animated", "fadeIn"], [3, "value"]], template: function ReporteComprasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3")(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Reporte de entradas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1)(6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ReporteComprasComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.GeneraReporte(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Fecha Inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_input_ngModelChange_12_listener($event) { return ctx.reporte.fechaIni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ReporteComprasComponent_small_14_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5)(16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Fecha Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_input_ngModelChange_18_listener($event) { return ctx.reporte.fechaFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ReporteComprasComponent_small_20_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_select_ngModelChange_24_listener($event) { return ctx.reporte.partida = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Seleccione...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ReporteComprasComponent_ng_container_28_Template, 3, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ReporteComprasComponent_small_29_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 5)(31, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Fecha del reporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_input_ngModelChange_33_listener($event) { return ctx.reporte.fechaReporte = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ReporteComprasComponent_small_35_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 5)(37, "div", 19)(38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 0)(41, "h3")(42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Reporte de entradas por proveedor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 1)(46, "form", 2, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ReporteComprasComponent_Template_form_ngSubmit_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.GeneraReportePorProveedor(_r10)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 4)(49, "div", 5)(50, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Fecha Inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_input_ngModelChange_52_listener($event) { return ctx.reporte2.fechaIni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ReporteComprasComponent_small_54_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 5)(56, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Fecha Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_input_ngModelChange_58_listener($event) { return ctx.reporte2.fechaFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ReporteComprasComponent_small_60_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 12)(62, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "select", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_select_ngModelChange_64_listener($event) { return ctx.reporte2.idproveedor = $event; })("ngModelChange", function ReporteComprasComponent_Template_select_ngModelChange_64_listener($event) { return ctx.direccionSeleccionada = $event; })("change", function ReporteComprasComponent_Template_select_change_64_listener() { return ctx.CapturarValor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, ReporteComprasComponent_ng_container_66_Template, 3, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ReporteComprasComponent_small_67_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 5)(69, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Fecha del reporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReporteComprasComponent_Template_input_ngModelChange_71_listener($event) { return ctx.reporte2.fechaReporte = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, ReporteComprasComponent_small_73_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 5)(75, "div", 19)(76, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "hr");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](53);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](59);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](65);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte.partida);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte.fechaReporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r8.invalid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte2.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte2.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte2.idproveedor)("ngModel", ctx.direccionSeleccionada);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.proveedores);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r15.invalid && _r15.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reporte2.fechaReporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r18.invalid && _r18.touched);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLWNvbXByYXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5422:
/*!********************************************************************************************!*\
  !*** ./src/app/app/reporte-existencia-x-partida/reporte-existencia-x-partida.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteExistenciaXPartidaComponent": () => (/* binding */ ReporteExistenciaXPartidaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function ReporteExistenciaXPartidaComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const partida_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", partida_r6.clave);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", partida_r6.clave, " -- ", partida_r6.descripcion, "");
} }
function ReporteExistenciaXPartidaComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReporteExistenciaXPartidaComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ReporteExistenciaXPartidaComponent {
    constructor(traer) {
        this.traer = traer;
        this.reporte = {
            centro_trabajo: parseInt(localStorage.getItem('centro_trabajo')),
            partida: '',
            fecha: null
        };
        this.partidas = [];
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
    }
    ngOnInit() {
        this.traerPartidas();
    }
    GeneraReporte(form) {
        if (form.valid == true) {
            if (this.reporte.partida == "0") {
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                        'Content-Type': 'application/json',
                    }), responseType: 'blob'
                };
                this.traer.http.post(this.API_URL + `/reporte_existencias_x_partida_todas`, this.reporte, httpOptions)
                    .subscribe((res) => {
                    var file = new Blob([res], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.download = 'Reporte_existencias_todas_las_partidas';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }
            else if (this.reporte.partida != "0") {
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                        'Content-Type': 'application/json',
                    }), responseType: 'blob'
                };
                this.traer.http.post(this.API_URL + `/reporte_existencias_x_partida`, this.reporte, httpOptions)
                    .subscribe((res) => {
                    var file = new Blob([res], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.download = 'Reporte_existencia_por_partida';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    // window.open(fileURL); 
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: "Complete todos los campos",
                icon: "warning"
            });
        }
    }
    traerPartidas() {
        this.traer.http.get(this.API_URL + `/traerPartidas`)
            .subscribe((res) => {
            this.partidas = res;
            this.partidas.push({ id: '', clave: '0', descripcion: 'Todos' });
            console.log(this.partidas);
        });
    }
}
ReporteExistenciaXPartidaComponent.ɵfac = function ReporteExistenciaXPartidaComponent_Factory(t) { return new (t || ReporteExistenciaXPartidaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
ReporteExistenciaXPartidaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReporteExistenciaXPartidaComponent, selectors: [["app-reporte-existencia-x-partida"]], decls: 26, vars: 5, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "50px"], [1, "contendor", "d-flex", "justify-content-center", "align-items-center", 2, "width", "90%"], [2, "width", "80%", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-6"], ["for", "inputPassword4", 2, "font-weight", "600"], ["id", "areaEmite", "name", "Partida", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Partida", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], [1, "form-group", "col-md-3"], ["type", "date", "name", "FechaReporte", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaReporte", "ngModel"], [1, "form-group", "col-md-2"], [1, "boton", 2, "margin", "0 auto", "text-align", "center", "margin-top", "17px"], ["type", "submit", "title", "Generar Reporte", 1, "btn", "btn-light", 2, "font-size", "30px"], [1, "mdi", "mdi-file-pdf-box", 2, "color", "#ac0808", "font-size", "50x"], [3, "value"], [1, "form-text", "text-danger", "animated", "fadeIn"]], template: function ReporteExistenciaXPartidaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3")(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reporte de existencias por partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1)(6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReporteExistenciaXPartidaComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.GeneraReporte(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Partida:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteExistenciaXPartidaComponent_Template_select_ngModelChange_12_listener($event) { return ctx.reporte.partida = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReporteExistenciaXPartidaComponent_ng_container_14_Template, 3, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReporteExistenciaXPartidaComponent_small_15_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11)(17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Fecha para reporte:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteExistenciaXPartidaComponent_Template_input_ngModelChange_19_listener($event) { return ctx.reporte.fecha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ReporteExistenciaXPartidaComponent_small_21_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14)(23, "div", 15)(24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.reporte.partida);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.reporte.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLWV4aXN0ZW5jaWEteC1wYXJ0aWRhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8892:
/*!**********************************************************************************************!*\
  !*** ./src/app/app/reporte-movimientos-x-partida/reporte-movimientos-x-partida.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteMovimientosXPartidaComponent": () => (/* binding */ ReporteMovimientosXPartidaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function ReporteMovimientosXPartidaComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReporteMovimientosXPartidaComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReporteMovimientosXPartidaComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const partida_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", partida_r8.clave);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", partida_r8.clave, " -- ", partida_r8.descripcion, "");
} }
function ReporteMovimientosXPartidaComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ReporteMovimientosXPartidaComponent {
    constructor(traer) {
        this.traer = traer;
        this.reporte = {
            fechaIni: null,
            fechaFin: null,
            partida: ''
        };
        this.partidas = [];
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
    }
    ngOnInit() {
        this.traerPartidas();
    }
    GeneraReporte(form) {
        if (form.valid == true) {
            if (this.reporte.partida == "0") {
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                        'Content-Type': 'application/json',
                    }), responseType: 'blob'
                };
                this.traer.http.post(this.API_URL + `/reporte_movimiento_x_partida_todos`, this.reporte, httpOptions)
                    .subscribe((res) => {
                    var file = new Blob([res], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.download = 'Reporte_movimientos_por_partida_todos';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }
            else if (this.reporte.partida != "0") {
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                        'Content-Type': 'application/json',
                    }), responseType: 'blob'
                };
                this.traer.http.post(this.API_URL + `/reporte_movimiento_x_partida`, this.reporte, httpOptions)
                    .subscribe((res) => {
                    var file = new Blob([res], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.download = 'Reporte_movimientos_por_partida';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: "Complete todos los campos",
                icon: "warning"
            });
        }
    }
    traerPartidas() {
        this.traer.http.get(this.API_URL + `/traerPartidas`)
            .subscribe((res) => {
            this.partidas = res;
            this.partidas.push({ id: '', clave: '0', descripcion: 'Todos' });
            console.log(this.partidas);
            console.log(this.partidas);
        });
    }
}
ReporteMovimientosXPartidaComponent.ɵfac = function ReporteMovimientosXPartidaComponent_Factory(t) { return new (t || ReporteMovimientosXPartidaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
ReporteMovimientosXPartidaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReporteMovimientosXPartidaComponent, selectors: [["app-reporte-movimientos-x-partida"]], decls: 32, vars: 7, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "50px"], [1, "contendor", "d-flex", "justify-content-center", "align-items-center", 2, "width", "90%", "margin", "0 auto"], [2, "width", "80%", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-3"], ["for", "inputPassword4"], ["type", "date", "name", "FechaIni", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaIni", "ngModel"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], ["type", "date", "name", "FechaFin", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaFin", "ngModel"], [1, "form-group", "col-md-4"], ["id", "areaEmite", "name", "Partida", "required", "", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Partida", "ngModel"], [4, "ngFor", "ngForOf"], [1, "form-group", "col-md-2"], [1, "boton", 2, "margin", "0 auto", "text-align", "center", "margin-top", "17px"], ["type", "submit", "title", "Generar Reporte", 1, "btn", "btn-light", 2, "font-size", "30px"], [1, "mdi", "mdi-file-pdf-box", 2, "color", "#ac0808", "font-size", "50x"], [1, "form-text", "text-danger", "animated", "fadeIn"], [3, "value"]], template: function ReporteMovimientosXPartidaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3")(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reporte de salidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1)(6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReporteMovimientosXPartidaComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.GeneraReporte(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Fecha Inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteMovimientosXPartidaComponent_Template_input_ngModelChange_12_listener($event) { return ctx.reporte.fechaIni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReporteMovimientosXPartidaComponent_small_14_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Fecha Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteMovimientosXPartidaComponent_Template_input_ngModelChange_18_listener($event) { return ctx.reporte.fechaFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ReporteMovimientosXPartidaComponent_small_20_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12)(22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteMovimientosXPartidaComponent_Template_select_ngModelChange_24_listener($event) { return ctx.reporte.partida = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ReporteMovimientosXPartidaComponent_ng_container_26_Template, 3, 3, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ReporteMovimientosXPartidaComponent_small_27_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.reporte.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.reporte.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.reporte.partida);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm], styles: ["label[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydGUtbW92aW1pZW50b3MteC1wYXJ0aWRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicmVwb3J0ZS1tb3ZpbWllbnRvcy14LXBhcnRpZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7702:
/*!************************************************************************************!*\
  !*** ./src/app/app/requisiciones-pendientes/requisiciones-pendientes.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisicionesPendientesComponent": () => (/* binding */ RequisicionesPendientesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 3899);










function RequisicionesPendientesComponent_tr_24_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RequisicionesPendientesComponent_tr_24_input_9_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.upload($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisicionesPendientesComponent_tr_24_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisicionesPendientesComponent_tr_24_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.subirPDF(req_r2.id, req_r2.folio_solicitud)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisicionesPendientesComponent_tr_24_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisicionesPendientesComponent_tr_24_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.abrirPDF(req_r2.ruta)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisicionesPendientesComponent_tr_24_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RequisicionesPendientesComponent_tr_24_input_13_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.uploadDG($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisicionesPendientesComponent_tr_24_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisicionesPendientesComponent_tr_24_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.subirPDFDG(req_r2.id, req_r2.folio_solicitud, req_r2.id_centrotrabajo_solicitante)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisicionesPendientesComponent_tr_24_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisicionesPendientesComponent_tr_24_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.abrirPDFDG(req_r2.ruta_dg)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisicionesPendientesComponent_tr_24_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisicionesPendientesComponent_tr_24_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.obtenerIdParaComentario(req_r2.folio_solicitud, req_r2.id_centrotrabajo_solicitante)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisicionesPendientesComponent_tr_24_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisicionesPendientesComponent_tr_24_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.obtenerIdParaComentario(req_r2.folio_solicitud, req_r2.id_centrotrabajo_solicitante)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "color": a0, "font-weight": "bolder", "text-align": "center" }; };
function RequisicionesPendientesComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, RequisicionesPendientesComponent_tr_24_input_9_Template, 1, 0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, RequisicionesPendientesComponent_tr_24_button_10_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, RequisicionesPendientesComponent_tr_24_button_11_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, RequisicionesPendientesComponent_tr_24_input_13_Template, 1, 0, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RequisicionesPendientesComponent_tr_24_button_14_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RequisicionesPendientesComponent_tr_24_button_15_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RequisicionesPendientesComponent_tr_24_button_19_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RequisicionesPendientesComponent_tr_24_button_22_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const req_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](req_r2.folio_solicitud);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](req_r2.plantel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 15, req_r2.fecha_solicitud, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.con_url && ctx_r0.permiso2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.con_url && ctx_r0.permiso2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.sin_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.con_url_dg && ctx_r0.permiso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.con_url_dg && ctx_r0.permiso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.sin_url_dg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c0, req_r2.status == "Enviado a Almac\u00E9n General" ? "#F57627" : req_r2.status == "Pendiente" ? "red" : "green"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](req_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.status == "Proceso Terminado" && ctx_r0.BotonComentarioPlantel && ctx_r0.mostrarBotonsegunFecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", req_r2.comentario_plantel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", req_r2.status == "Proceso Terminado" && ctx_r0.BotonComentarioDg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", req_r2.comentario_dg, " ");
} }
class RequisicionesPendientesComponent {
    constructor(traer) {
        this.traer = traer;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.comentario = {
            comentario: '',
            fechaComentarioPlantel: '',
            cts: null
        };
        this.req_pendientes = [];
        this.mostrarsubirfile = false;
        this.mostrarabrir = false;
        this.permiso = false;
        this.permiso2 = false;
        this.BotonComentarioPlantel = false;
        this.BotonComentarioDg = false;
        this.mostrarBotonsegunFecha = false;
    }
    ngOnInit() {
        var centroTrabajo = localStorage.getItem('centro_trabajo');
        if (centroTrabajo == '47') {
            this.BotonComentarioDg = true;
            this.BotonComentarioPlantel = false;
        }
        else {
            this.BotonComentarioPlantel = true;
            this.BotonComentarioDg = false;
        }
        this.traerRequisicionesPendientes();
    }
    traerRequisicionesPendientes() {
        $('#requisiciones').DataTable().clear();
        $('#requisiciones').DataTable().draw();
        $('#requisiciones').DataTable().destroy();
        try {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                searching: true,
                processing: true,
                destroy: true,
                language: {
                    lengthMenu: 'Mostrando _MENU_ Registros',
                    info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
                    infoEmpty: 'Mostrando 0 to 0 of 0 entradas',
                    infoFiltered: '(Resultados del filtrado)',
                    search: 'Buscar:',
                    paginate: {
                        first: 'Inicio',
                        last: 'Último',
                        next: 'Siguiente',
                        previous: 'Anterior'
                    },
                }
            };
            var id_plantel = localStorage.getItem('centro_trabajo');
            this.traer.http.get(this.API_URL + `/traerRequisicionesPendientes/${id_plantel}`)
                .subscribe((res) => {
                this.req_pendientes = res;
                console.log(this.req_pendientes);
                this.dtTrigger.next();
                var permisoShowBoton = localStorage.getItem('centro_trabajo');
                if (permisoShowBoton == '47') {
                    this.permiso = true;
                    this.permiso2 = false;
                }
                else {
                    this.permiso = false;
                    this.permiso2 = true;
                }
                for (var i = 0; i <= this.req_pendientes.length; i++) {
                    if (this.req_pendientes[i]?.en_tiempo == true) {
                        this.mostrarBotonsegunFecha = true;
                    }
                    else {
                    }
                    // this.mostrarBotonsegunFecha=this.req_pendientes[i].en_tiempo;
                    // console.log(this.mostrarBotonsegunFecha);
                    if (this.req_pendientes[i]?.status == null) {
                        this.req_pendientes[i].status = "Pendiente";
                    }
                    else {
                    }
                    if (this.req_pendientes[i]?.ruta != null) {
                        this.req_pendientes[i].con_url = false;
                        this.req_pendientes[i].sin_url = true;
                    }
                    else if (this.req_pendientes[i]?.ruta == null) {
                        this.req_pendientes[i].con_url = true;
                        this.req_pendientes[i].sin_url = false;
                    }
                    if (this.req_pendientes[i]?.ruta_dg != null) {
                        this.req_pendientes[i].con_url_dg = false;
                        this.req_pendientes[i].sin_url_dg = true;
                    }
                    else if (this.req_pendientes[i]?.ruta_dg == null) {
                        this.req_pendientes[i].con_url_dg = true;
                        this.req_pendientes[i].sin_url_dg = false;
                    }
                }
                this.dtTrigger.next();
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    upload(event) {
        const file = event.target.files[0];
        if (event.target.files.length > 0) {
            if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
                this.myFiles = event.target.files;
                console.log(this.myFiles);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'warning',
                    title: 'Error en documento',
                    text: 'Solo se permiten archivos .pdf'
                });
            }
        }
        else {
            console.log("NO");
        }
    }
    subirPDF(id, folio_solicitud) {
        this.id = id;
        this.folio_solicitud = folio_solicitud;
        if (this.myFiles == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'No ha seleccionado un documento',
                icon: 'warning'
            });
        }
        this.numidentificador = Date.now();
        const formdata = new FormData();
        for (var i = 0; i < this.myFiles.length; i++) {
            formdata.append('files', this.myFiles[i]);
        }
        var areaAlmacenaDoc = parseInt(localStorage.getItem('centro_trabajo'));
        if (areaAlmacenaDoc == 1) {
            var areaDocumento = "tres_valles";
        }
        else if (areaAlmacenaDoc == 2) {
            var areaDocumento = "papantla";
        }
        else if (areaAlmacenaDoc == 3) {
            var areaDocumento = "benito_juarez";
        }
        else if (areaAlmacenaDoc == 4) {
            var areaDocumento = "naolinco";
        }
        else if (areaAlmacenaDoc == 5) {
            var areaDocumento = "vega_de_alatorre";
        }
        else if (areaAlmacenaDoc == 6) {
            var areaDocumento = "huitzila";
        }
        else if (areaAlmacenaDoc == 7) {
            var areaDocumento = "coxquihui";
        }
        else if (areaAlmacenaDoc == 8) {
            var areaDocumento = "uxpanapa";
        }
        else if (areaAlmacenaDoc == 9) {
            var areaDocumento = "huayacocotla";
        }
        else if (areaAlmacenaDoc == 10) {
            var areaDocumento = "agua_dulce";
        }
        else if (areaAlmacenaDoc == 11) {
            var areaDocumento = "pajapan";
        }
        else if (areaAlmacenaDoc == 12) {
            var areaDocumento = "filomeno_mata";
        }
        else if (areaAlmacenaDoc == 13) {
            var areaDocumento = "planton_sanchez";
        }
        else if (areaAlmacenaDoc == 14) {
            var areaDocumento = "atzalan";
        }
        else if (areaAlmacenaDoc == 15) {
            var areaDocumento = "san_rafael";
        }
        else if (areaAlmacenaDoc == 16) {
            var areaDocumento = "omealca";
        }
        else if (areaAlmacenaDoc == 17) {
            var areaDocumento = "huatusco";
        }
        else if (areaAlmacenaDoc == 18) {
            var areaDocumento = "la_camelia";
        }
        else if (areaAlmacenaDoc == 19) {
            var areaDocumento = "ciudad_olmeca";
        }
        else if (areaAlmacenaDoc == 20) {
            var areaDocumento = "las_lomas";
        }
        else if (areaAlmacenaDoc == 21) {
            var areaDocumento = "guayalejo";
        }
        else if (areaAlmacenaDoc == 22) {
            var areaDocumento = "medellin";
        }
        else if (areaAlmacenaDoc == 23) {
            var areaDocumento = "la_cuesta";
        }
        else if (areaAlmacenaDoc == 24) {
            var areaDocumento = "huazuntlan";
        }
        else if (areaAlmacenaDoc == 25) {
            var areaDocumento = "otatitlan";
        }
        else if (areaAlmacenaDoc == 26) {
            var areaDocumento = "catemaco";
        }
        else if (areaAlmacenaDoc == 27) {
            var areaDocumento = "palma_sola";
        }
        else if (areaAlmacenaDoc == 28) {
            var areaDocumento = "veracruz";
        }
        else if (areaAlmacenaDoc == 29) {
            var areaDocumento = "general_alatriste";
        }
        else if (areaAlmacenaDoc == 30) {
            var areaDocumento = "palo_blanco";
        }
        else if (areaAlmacenaDoc == 31) {
            var areaDocumento = "coetzala";
        }
        else if (areaAlmacenaDoc == 32) {
            var areaDocumento = "direccion_general";
        }
        else if (areaAlmacenaDoc == 33) {
            var areaDocumento = "administrativo";
        }
        else if (areaAlmacenaDoc == 34) {
            var areaDocumento = "academico";
        }
        else if (areaAlmacenaDoc == 35) {
            var areaDocumento = "planeacion";
        }
        else if (areaAlmacenaDoc == 36) {
            var areaDocumento = "vinculacion";
        }
        else if (areaAlmacenaDoc == 37) {
            var areaDocumento = "tecnologia";
        }
        else if (areaAlmacenaDoc == 39) {
            var areaDocumento = "recursos_humanos";
        }
        else if (areaAlmacenaDoc == 40) {
            var areaDocumento = "recursos_financieros";
        }
        else if (areaAlmacenaDoc == 41) {
            var areaDocumento = "recursos_materiales";
        }
        else if (areaAlmacenaDoc == 42) {
            var areaDocumento = "contabilidad";
        }
        else if (areaAlmacenaDoc == 43) {
            var areaDocumento = "juridico";
        }
        else if (areaAlmacenaDoc == 44) {
            var areaDocumento = "genero";
        }
        else if (areaAlmacenaDoc == 45) {
            var areaDocumento = "transparencia";
        }
        else if (areaAlmacenaDoc == 46) {
            var areaDocumento = "sindicato";
        }
        console.log(formdata);
        this.traer.http.post(this.API_URL + `/SubirArchivoRequisicion/${this.numidentificador}/${areaDocumento}`, formdata).subscribe((res) => {
            console.log(res);
            this.actualizarCampoRuta();
        }, (err) => {
            console.log(err);
        });
    }
    actualizarCampoRuta() {
        var idPlantel = localStorage.getItem('centro_trabajo');
        this.traer.http.put(this.API_URL + `/actualizaRuta/${this.numidentificador}/${this.folio_solicitud}/${idPlantel}`, null)
            .subscribe((res) => {
            if (res == "rutaActualizada") {
                this.traerRequisicionesPendientes();
            }
            else {
            }
        });
    }
    abrirPDF(ruta) {
        var a = ruta.toString();
        var url = (a.replaceAll('/', '-'));
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
            }), responseType: 'blob'
        };
        this.traer.http.get(this.API_URL + `/abrirPDFRequisicion/${url}`, httpOptions).subscribe((res) => {
            console.log(res);
            var file = new Blob([res], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
        });
    }
    uploadDG(event) {
        const file = event.target.files[0];
        if (event.target.files.length > 0) {
            if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
                this.myFilesDG = event.target.files;
                console.log(this.myFilesDG);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'warning',
                    title: 'Error en documento',
                    text: 'Solo se permiten archivos .pdf'
                });
            }
        }
        else {
            console.log("NO");
        }
    }
    subirPDFDG(id, folio_solicitud, id_cetrotrabajo_solicitante) {
        this.id = id;
        this.folio_solicitud = folio_solicitud;
        if (this.myFilesDG == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'No ha seleccionado un documento',
                icon: 'warning'
            });
        }
        this.numidentificador = Date.now();
        const formdata = new FormData();
        for (var i = 0; i < this.myFilesDG.length; i++) {
            formdata.append('files', this.myFilesDG[i]);
        }
        var areaAlmacenaDoc = parseInt(localStorage.getItem('centro_trabajo'));
        if (areaAlmacenaDoc == 1) {
            var areaDocumento = "tres_valles";
        }
        else if (areaAlmacenaDoc == 2) {
            var areaDocumento = "papantla";
        }
        else if (areaAlmacenaDoc == 3) {
            var areaDocumento = "benito_juarez";
        }
        else if (areaAlmacenaDoc == 4) {
            var areaDocumento = "naolinco";
        }
        else if (areaAlmacenaDoc == 5) {
            var areaDocumento = "vega_de_alatorre";
        }
        else if (areaAlmacenaDoc == 6) {
            var areaDocumento = "huitzila";
        }
        else if (areaAlmacenaDoc == 7) {
            var areaDocumento = "coxquihui";
        }
        else if (areaAlmacenaDoc == 8) {
            var areaDocumento = "uxpanapa";
        }
        else if (areaAlmacenaDoc == 9) {
            var areaDocumento = "huayacocotla";
        }
        else if (areaAlmacenaDoc == 10) {
            var areaDocumento = "agua_dulce";
        }
        else if (areaAlmacenaDoc == 11) {
            var areaDocumento = "pajapan";
        }
        else if (areaAlmacenaDoc == 12) {
            var areaDocumento = "filomeno_mata";
        }
        else if (areaAlmacenaDoc == 13) {
            var areaDocumento = "planton_sanchez";
        }
        else if (areaAlmacenaDoc == 14) {
            var areaDocumento = "atzalan";
        }
        else if (areaAlmacenaDoc == 15) {
            var areaDocumento = "san_rafael";
        }
        else if (areaAlmacenaDoc == 16) {
            var areaDocumento = "omealca";
        }
        else if (areaAlmacenaDoc == 17) {
            var areaDocumento = "huatusco";
        }
        else if (areaAlmacenaDoc == 18) {
            var areaDocumento = "la_camelia";
        }
        else if (areaAlmacenaDoc == 19) {
            var areaDocumento = "ciudad_olmeca";
        }
        else if (areaAlmacenaDoc == 20) {
            var areaDocumento = "las_lomas";
        }
        else if (areaAlmacenaDoc == 21) {
            var areaDocumento = "guayalejo";
        }
        else if (areaAlmacenaDoc == 22) {
            var areaDocumento = "medellin";
        }
        else if (areaAlmacenaDoc == 23) {
            var areaDocumento = "la_cuesta";
        }
        else if (areaAlmacenaDoc == 24) {
            var areaDocumento = "huazuntlan";
        }
        else if (areaAlmacenaDoc == 25) {
            var areaDocumento = "otatitlan";
        }
        else if (areaAlmacenaDoc == 26) {
            var areaDocumento = "catemaco";
        }
        else if (areaAlmacenaDoc == 27) {
            var areaDocumento = "palma_sola";
        }
        else if (areaAlmacenaDoc == 28) {
            var areaDocumento = "veracruz";
        }
        else if (areaAlmacenaDoc == 29) {
            var areaDocumento = "general_alatriste";
        }
        else if (areaAlmacenaDoc == 30) {
            var areaDocumento = "palo_blanco";
        }
        else if (areaAlmacenaDoc == 31) {
            var areaDocumento = "coetzala";
        }
        else if (areaAlmacenaDoc == 33) {
            var areaDocumento = "administrativo";
        }
        else if (areaAlmacenaDoc == 34) {
            var areaDocumento = "academico";
        }
        else if (areaAlmacenaDoc == 35) {
            var areaDocumento = "planeacion";
        }
        else if (areaAlmacenaDoc == 36) {
            var areaDocumento = "vinculacion";
        }
        else if (areaAlmacenaDoc == 37) {
            var areaDocumento = "tecnologia";
        }
        else if (areaAlmacenaDoc == 39) {
            var areaDocumento = "recursos_humanos";
        }
        else if (areaAlmacenaDoc == 40) {
            var areaDocumento = "recursos_financieros";
        }
        else if (areaAlmacenaDoc == 41) {
            var areaDocumento = "recursos_materiales";
        }
        else if (areaAlmacenaDoc == 42) {
            var areaDocumento = "contabilidad";
        }
        else if (areaAlmacenaDoc == 43) {
            var areaDocumento = "juridico";
        }
        else if (areaAlmacenaDoc == 44) {
            var areaDocumento = "genero";
        }
        else if (areaAlmacenaDoc == 45) {
            var areaDocumento = "transparencia";
        }
        else if (areaAlmacenaDoc == 46) {
            var areaDocumento = "sindicato";
        }
        else if (areaAlmacenaDoc == 47) {
            var areaDocumento = "almacen_general";
        }
        console.log(formdata);
        this.traer.http.post(this.API_URL + `/SubirArchivoRequisicionDG/${this.numidentificador}/${areaDocumento}`, formdata).subscribe((res) => {
            console.log(res);
            this.actualizarCampoRutaDG(id_cetrotrabajo_solicitante);
        }, (err) => {
            console.log(err);
        });
    }
    abrirPDFDG(ruta) {
        var a = ruta.toString();
        var url = (a.replaceAll('/', '-'));
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
            }), responseType: 'blob'
        };
        this.traer.http.get(this.API_URL + `/abrirPDFRequisicionDG/${url}`, httpOptions).subscribe((res) => {
            console.log(res);
            var file = new Blob([res], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
        });
    }
    actualizarCampoRutaDG(plantelActualizar) {
        var idPlantel = localStorage.getItem('centro_trabajo');
        var fechaResgistro = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(), 'dd-MM-yyyy', 'en-US'); // inserta la fecha para habilitar el boton de comentario del plantel cuando es estatus es Proceso TErminado
        this.traer.http.put(this.API_URL + `/actualizaRutaDG/${this.numidentificador}/${this.folio_solicitud}/${idPlantel}/${plantelActualizar}/${fechaResgistro}`, null)
            .subscribe((res) => {
            if (res == "rutaActualizada") {
                this.traerRequisicionesPendientes();
            }
            else {
            }
        });
    }
    AgregarComentario(form) {
        var centro_trabajo = localStorage.getItem('centro_trabajo');
        if (form.valid == true && centro_trabajo == '47') {
            this.traer.http.post(this.API_URL + `/subirComentario/${this.Folio_comentatrio}/${this.cts}`, this.comentario).subscribe((res) => {
                console.log(res);
                // Swal.fire({
                //     title:'Se envío su comentario al plantel',
                //     icon:'success'
                // });
                window.location.reload();
            }, (err) => {
                console.log(err);
            });
        }
        else if (form.valid == true && centro_trabajo != '47') {
            this.fechaComentarioPlantel = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(), 'dd-MM-yyyy', 'en-US');
            this.comentario.fechaComentarioPlantel = this.fechaComentarioPlantel;
            this.traer.http.post(this.API_URL + `/subirComentario/${this.Folio_comentatrio}/${this.cts}`, this.comentario).subscribe((res) => {
                console.log(res);
                //  Swal.fire({
                //     title:'Se envío su comentario a DG',
                //     icon:'success'
                // });
                window.location.reload();
            }, (err) => {
                console.log(err);
            });
        }
    }
    obtenerIdParaComentario(folio_solicitud, centro_trabajo_solicitante) {
        this.Folio_comentatrio = folio_solicitud;
        this.cts = centro_trabajo_solicitante;
    }
}
RequisicionesPendientesComponent.ɵfac = function RequisicionesPendientesComponent_Factory(t) { return new (t || RequisicionesPendientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
RequisicionesPendientesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RequisicionesPendientesComponent, selectors: [["app-requisiciones-pendientes"]], decls: 46, vars: 4, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "width", "75%"], [1, "mt-5", 2, "width", "90%", "margin", "0 auto"], ["id", "requisiciones", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "center", "width", "50px"], [2, "text-align", "center"], [2, "text-align", "center", "width", "160px"], [2, "text-align", "center", "width", "165px"], [2, "text-align", "center", "width", "180px"], [2, "font-size", "15px"], [4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["f", "ngForm"], [1, "row"], [1, "col-12"], ["for", "exampleFormControlTextarea1"], ["name", "comentario", "id", "exampleFormControlTextarea1", "required", "", "rows", "3", "maxlength", "200", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], [1, "modal-footer"], ["id", "file", "type", "file", "style", "width: 110px;", "class", " btn btn-primary form-control", "multiple", "multiple", "accept", ".pdf", "required", "", 3, "change", 4, "ngIf"], ["class", "btn btn-warning", "style", "margin:4px;", 3, "click", 4, "ngIf"], ["class", "btn btn-light", "style", "margin:4px;", 3, "click", 4, "ngIf"], ["id", "miArchivo", "type", "file", "style", "width: 110px;", "class", " btn btn-primary form-control", "multiple", "multiple", "accept", ".pdf", "required", "", 3, "change", 4, "ngIf"], ["id", "Texto", 3, "ngStyle"], [2, "text-align", "center", "max-width", "10%"], ["class", "btn btn-light", "data-toggle", "modal", "data-target", "#exampleModal", "title", "Agregar un comentario", "style", "margin:4px;", 3, "click", 4, "ngIf"], ["id", "file", "type", "file", "multiple", "multiple", "accept", ".pdf", "required", "", 1, "btn", "btn-primary", "form-control", 2, "width", "110px", 3, "change"], [1, "btn", "btn-warning", 2, "margin", "4px", 3, "click"], [1, "mdi", "mdi-cloud-upload"], [1, "btn", "btn-light", 2, "margin", "4px", 3, "click"], [1, "mdi", "mdi-file-pdf", "fa-1x", 2, "color", "rgb(223, 21, 21)"], ["id", "miArchivo", "type", "file", "multiple", "multiple", "accept", ".pdf", "required", "", 1, "btn", "btn-primary", "form-control", 2, "width", "110px", 3, "change"], ["data-toggle", "modal", "data-target", "#exampleModal", "title", "Agregar un comentario", 1, "btn", "btn-light", 2, "margin", "4px", 3, "click"], [1, "mdi", "mdi-comment", 2, "color", "gray"]], template: function RequisicionesPendientesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Requisiciones Pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "table", 2)(5, "thead")(6, "tr", 3)(7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Folio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Plantel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Archivo petici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Archivo Finalizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Estatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Comentario Plantel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Comentario DG");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, RequisicionesPendientesComponent_tr_24_Template, 24, 20, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 11)(26, "div", 12)(27, "div", 13)(28, "div", 14)(29, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Agregar comentario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 16)(32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 18)(35, "form", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RequisicionesPendientesComponent_Template_form_ngSubmit_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](36); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.AgregarComentario(_r1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 21)(38, "div", 22)(39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Escriba su comentario (200 caracteres)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RequisicionesPendientesComponent_Template_textarea_ngModelChange_41_listener($event) { return ctx.comentario.comentario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.req_pendientes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.comentario.comentario);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["input[type=\"file\"][_ngcontent-%COMP%]:invalid {\r\n  border: 1px solid red;\r\n  background-color: #ffcccc;\r\n}\r\n\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%]:valid {\r\n  border: 2px solid green;\r\nbackground-color: green;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpc2ljaW9uZXMtcGVuZGllbnRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSx1QkFBdUI7QUFDekIsdUJBQXVCOztBQUV2QiIsImZpbGUiOiJyZXF1aXNpY2lvbmVzLXBlbmRpZW50ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJmaWxlXCJdOmludmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl06dmFsaWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8146);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 7225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule], exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent] }); })();


/***/ }),

/***/ 8860:
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ 7225);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





// import { CambioPasswordComponent } from '../cambio-password/cambio-password.component';
const routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    // { path: 'cambio-password', component:CambioPasswordComponent},
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/registro.service */ 23);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function LoginComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Olvido escribir su Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Olvido escribir su contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, registro) {
        this.router = router;
        this.registro = registro;
        this.usuario = {
            email: '',
            nombre: '',
            password: '',
            cargo: 0,
            numemp: 0,
        };
        this.recordarUsuario = false;
    }
    ngOnInit() {
        let hoy = new Date();
        this.fecha = hoy.toLocaleDateString();
        this.anio = hoy.getFullYear();
        if (localStorage.getItem('token')) {
            localStorage.clear();
        }
    }
    buscaUsuario(form, email, password) {
        if (form.invalid) {
            console.log('Formulario Invalido');
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', '¡Complete todos los campos!', 'error');
            return;
        }
        else {
            this.registro.loginUsuario(email, password).subscribe(res => {
                localStorage.setItem('datos', JSON.stringify(res));
                let datos = JSON.parse(localStorage.getItem('datos'));
                if (res == "NoEncontrado") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('¡Error de autenticación!', 'Verifique sus datos', 'error');
                }
                else {
                    localStorage.setItem('token', datos.token);
                    localStorage.setItem('usuario', datos.correop);
                    localStorage.setItem('area', datos.area);
                    localStorage.setItem('numemp', datos.numemp);
                    localStorage.setItem('nombre', datos.nombre);
                    localStorage.setItem('departamento', datos.nom_departamento);
                    localStorage.setItem('nombreArea', datos.nombreArea);
                    localStorage.setItem('id_departamento', datos.id_departamento);
                    localStorage.setItem('permiso', datos.tipo_usuario);
                    localStorage.setItem('centro_trabajo', datos.centro_trabajo);
                    this.router.navigateByUrl("/dashboard");
                }
            }, err => console.log(err));
        }
    }
    login() {
        this.router.navigateByUrl('/');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_1__.RegistroService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 4, consts: [[1, "login-page"], [1, "form", "card-body"], [1, "line-1", "anim-typewriter"], ["src", "./assets/images/NuevoSICAI.png", "alt", "", 2, "max-width", "100%", "max-height", "100%"], [1, "form-horizontal", "form-material", "login-form", "m-t-20", 3, "ngSubmit"], ["f", "ngForm"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], [1, "form-group", "m-t-5"], [1, "col-xs-12"], ["type", "text", "name", "usuario", "required", "", "placeholder", "Usuario", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "Contrase\u00F1a", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit"], [1, "form-text", "text-danger", "animated", "fadeIn"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); ctx.buscaUsuario(_r0, ctx.usuario.email, ctx.usuario.password); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.resetForm()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LoginComponent_small_6_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.usuario.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_small_11_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.usuario.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.usuario.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.usuario.password);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["body[_ngcontent-%COMP%] {\n    font-family: 'Exo', sans-serif;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  width: 450px;\n  padding: 2% 0 0;\n  margin: auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 450px;\n  border-radius: 25px 0px 25px 0px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.6), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #d97103;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  background: #43A047;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBS0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEVBQTBFO0FBQzVFOztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBRWYsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcbn1cblxuXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XG5cbi5sb2dpbi1wYWdlIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBwYWRkaW5nOiAyJSAwIDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDBweCAyNXB4IDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gIHBhZGRpbmc6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4uZm9ybSBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybSBidXR0b24ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogI2Q5NzEwMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0gYnV0dG9uOmhvdmVyLC5mb3JtIGJ1dHRvbjphY3RpdmUsLmZvcm0gYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzQzQTA0Nztcbn0gXG5cbiJdfQ== */"] });


/***/ }),

/***/ 7225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 43, vars: 0, consts: [["id", "wrapper", 1, "login-register", "login-sidebar", 2, "background-image", "url(../assets/images/background/login-register.jpg)"], [1, "login-box", "card"], [1, "card-body"], ["id", "loginform", "action", "index.html", 1, "form-horizontal", "form-material"], ["href", "javascript:void(0)", 1, "text-center", "db"], ["src", "../assets/images/logo-icon.png", "alt", "Home"], ["src", "../assets/images/logo-text.png", "alt", "Home"], [1, "box-title", "m-t-40", "m-b-0"], [1, "form-group", "m-t-20"], [1, "col-xs-12"], ["type", "text", "required", "", "placeholder", "Name", 1, "form-control"], [1, "form-group"], ["type", "text", "required", "", "placeholder", "Email", 1, "form-control"], ["type", "password", "required", "", "placeholder", "Password", 1, "form-control"], ["type", "password", "required", "", "placeholder", "Confirm Password", 1, "form-control"], [1, "form-group", "row"], [1, "col-md-12"], [1, "checkbox", "checkbox-primary", "p-t-0"], ["id", "checkbox-signup", "type", "checkbox"], ["for", "checkbox-signup"], ["href", "#"], [1, "form-group", "text-center", "m-t-20"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block", "text-uppercase", "waves-effect", "waves-light"], [1, "form-group", "m-b-0"], [1, "col-sm-12", "text-center"], ["href", "pages-login-2.html", 1, "text-info", "m-l-5"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5)(6, "br")(7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create your account and enjoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11)(19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " I agree to all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21)(33, "div", 9)(34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23)(37, "div", 24)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 25)(41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".login-register[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    height: 100%;\n    width: 100%;\n    padding: 10% 0;\n    position: fixed; }\n.login-box[_ngcontent-%COMP%] {\n    width: 400px;\n    margin: 0 auto; }\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n      width: 100%;\n      left: 0px;\n      right: 0px; }\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n      display: block;\n      margin-bottom: 30px; }\n#recoverform[_ngcontent-%COMP%] {\n    display: none; }\n.login-sidebar[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-top: 0px; }\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n      right: 0px;\n      position: absolute;\n      height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0M7QUFDRDs7Ozs7Q0FLQztBQUNELGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O2tCQUVrQjtBQUNsQjtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWUsRUFBRTtBQUVuQjtJQUNFLFlBQVk7SUFDWixjQUFjLEVBQUU7QUFDaEI7TUFDRSxXQUFXO01BQ1gsU0FBUztNQUNULFVBQVUsRUFBRTtBQUNkO01BQ0UsY0FBYztNQUNkLG1CQUFtQixFQUFFO0FBRXpCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0UsWUFBWTtJQUNaLGVBQWUsRUFBRTtBQUNqQjtNQUNFLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsWUFBWSxFQUFFIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogQWRtaW4gcHJvIEFkbWluXG5BdXRob3I6IFdyYXBwaXhlbFxuRW1haWw6IG5pcmF2am9zaGk4N0BnbWFpbC5jb21cbkZpbGU6IHNjc3NcbiovXG4vKlxuVGVtcGxhdGUgTmFtZTogQWRtaW4gUHJvIEFkbWluXG5BdXRob3I6IFdyYXBwaXhlbFxuRW1haWw6IG5pcmF2am9zaGk4N0BnbWFpbC5jb21cbkZpbGU6IHNjc3NcbiovXG4vKlRoZW1lIENvbG9ycyovXG4vKmJvb3RzdHJhcCBDb2xvciovXG4vKkxpZ2h0IGNvbG9ycyovXG4vKk5vcm1hbCBDb2xvciovXG4vKkV4dHJhIFZhcmlhYmxlKi9cbi8qKioqKioqKioqKioqKioqKioqXG5Mb2dpbiByZWdpc3RlciBhbmQgcmVjb3ZlciBwYXNzd29yZCBQYWdlXG4qKioqKioqKioqKioqKioqKiovXG4ubG9naW4tcmVnaXN0ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMCUgMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cbiAgXG4gIC5sb2dpbi1ib3gge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAgIC5sb2dpbi1ib3ggLmZvb3RlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7IH1cbiAgICAubG9naW4tYm94IC5zb2NpYWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gIFxuICAjcmVjb3ZlcmZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgXG4gIC5sb2dpbi1zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4OyB9XG4gICAgLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 7642:
/*!**************************************************************!*\
  !*** ./src/app/cambio-password/cambio-password.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambioPasswordComponent": () => (/* binding */ CambioPasswordComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function CambioPasswordComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Escriba su nombre de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CambioPasswordComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Olvido escribir su contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CambioPasswordComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Olvido confirmar su contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CambioPasswordComponent {
    constructor(traer) {
        this.traer = traer;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.uri_api;
        this.cambio = {
            usuario: localStorage.getItem('usuario'),
            password: '',
            confirmar: ''
        };
    }
    ngOnInit() {
    }
    cambiarPassword(form, usuario, password, confirmar) {
        this.cambio.password = password;
        this.cambio.confirmar = confirmar;
        if (this.cambio.password == this.cambio.confirmar) {
            this.traer.http.put(this.API_URL + `/actualizar/${this.cambio.usuario}/${this.cambio.confirmar}`, this.cambio).subscribe((res) => {
                if (res == "Actualizado") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        icon: 'success',
                        title: 'Contraseña actualizada',
                        text: 'La próxima vez inicia con tu nueva contraseña'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        icon: 'error',
                        text: 'La cont'
                    });
                }
            }, (err) => {
                console.log(err);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'warning',
                text: 'Las contraseñas no coinciden'
            });
        }
    }
}
CambioPasswordComponent.ɵfac = function CambioPasswordComponent_Factory(t) { return new (t || CambioPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
CambioPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CambioPasswordComponent, selectors: [["app-cambio-password"]], decls: 24, vars: 6, consts: [[1, "cambio-password", "mt-5", 2, "width", "30%", "margin", "0 auto"], [2, "text-align", "center"], [1, "form", "card-body", 2, "margin", "0 auto", "text-align", "center"], [1, "form-horizontal", "form-material", "login-form", "m-t-20", 3, "ngSubmit"], ["f", "ngForm"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], [1, "form-group", "m-t-5"], [1, "col-xs-12"], ["type", "text", "name", "usuario", "required", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["usuario", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "Nueva contrase\u00F1a", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "password", "name", "confirmar", "required", "", "placeholder", "Confirmar contrase\u00F1a", 1, "form-control", 3, "ngModel", "ngModelChange"], ["confirmar", "ngModel"], ["type", "submit", 1, "btn", "btn-success"], [1, "form-text", "text-danger", "animated", "fadeIn"]], template: function CambioPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cambio de contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CambioPasswordComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.cambiarPassword(_r0, ctx.cambio.usuario, ctx.cambio.password, ctx.cambio.confirmar)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CambioPasswordComponent_small_6_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CambioPasswordComponent_Template_input_ngModelChange_9_listener($event) { return ctx.cambio.usuario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CambioPasswordComponent_small_11_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CambioPasswordComponent_Template_input_ngModelChange_14_listener($event) { return ctx.cambio.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CambioPasswordComponent_small_16_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6)(18, "div", 7)(19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CambioPasswordComponent_Template_input_ngModelChange_19_listener($event) { return ctx.cambio.confirmar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Confirmar cambio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.cambio.usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.cambio.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.invalid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.cambio.confirmar);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: [".form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWJpby1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNhbWJpby1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0gaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var _incrementador_incrementador_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incrementador/incrementador.component */ 8669);
/* harmony import */ var _dona_dona_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dona/dona.component */ 6845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_5__.ChartsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_incrementador_incrementador_component__WEBPACK_IMPORTED_MODULE_0__.IncrementadorComponent,
        _dona_dona_component__WEBPACK_IMPORTED_MODULE_1__.DonaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_5__.ChartsModule], exports: [_incrementador_incrementador_component__WEBPACK_IMPORTED_MODULE_0__.IncrementadorComponent,
        _dona_dona_component__WEBPACK_IMPORTED_MODULE_1__.DonaComponent] }); })();


/***/ }),

/***/ 6845:
/*!***************************************************!*\
  !*** ./src/app/components/dona/dona.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonaComponent": () => (/* binding */ DonaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 3808);


class DonaComponent {
    constructor() {
        this.title = 'Sin titulo';
        this.doughnutChartLabels = ['Label1', 'Label2', 'Label2'];
        this.doughnutChartData = [
            [350, 450, 100],
        ];
        this.colors = [
            { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
        ];
    }
}
DonaComponent.ɵfac = function DonaComponent_Factory(t) { return new (t || DonaComponent)(); };
DonaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonaComponent, selectors: [["app-dona"]], inputs: { title: "title", doughnutChartLabels: ["labels", "doughnutChartLabels"], doughnutChartData: ["data", "doughnutChartData"] }, decls: 6, vars: 4, consts: [[1, "card"], [1, "card-body"], [2, "display", "block"], ["baseChart", "", "chartType", "doughnut", 3, "data", "labels", "colors"]], template: function DonaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("colors", ctx.colors);
    } }, dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], encapsulation: 2 });


/***/ }),

/***/ 8669:
/*!*********************************************************************!*\
  !*** ./src/app/components/incrementador/incrementador.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncrementadorComponent": () => (/* binding */ IncrementadorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);




const _c0 = function (a0) { return { "is-invalid": a0 }; };
class IncrementadorComponent {
    constructor() {
        this.progreso = 40;
        this.btnClass = 'btn-primary';
        this.valorSalida = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.btnClass = `btn ${this.btnClass}`;
    }
    cambiarValor(valor) {
        if (this.progreso >= 100 && valor >= 0) {
            this.valorSalida.emit(100);
            return this.progreso = 100;
        }
        if (this.progreso <= 0 && valor < 0) {
            this.valorSalida.emit(0);
            return this.progreso = 0;
        }
        this.progreso = this.progreso + valor;
        this.valorSalida.emit(this.progreso);
    }
    onChange(nuevoValor) {
        if (nuevoValor >= 100) {
            this.progreso = 100;
        }
        else if (nuevoValor <= 0) {
            this.progreso = 0;
        }
        else {
            this.progreso = nuevoValor;
        }
        this.valorSalida.emit(this.progreso);
    }
}
IncrementadorComponent.ɵfac = function IncrementadorComponent_Factory(t) { return new (t || IncrementadorComponent)(); };
IncrementadorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncrementadorComponent, selectors: [["app-incrementador"]], inputs: { progreso: ["valor", "progreso"], btnClass: "btnClass" }, outputs: { valorSalida: "valor" }, decls: 8, vars: 6, consts: [[1, "input-group"], [1, "input-group-btn"], ["type", "button", 3, "ngClass", "click"], [1, "fa", "fa-minus"], ["type", "number", "placeholder", "Progreso", "min", "0", "max", "100", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [1, "fa", "fa-plus"]], template: function IncrementadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncrementadorComponent_Template_button_click_2_listener() { return ctx.cambiarValor(-5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IncrementadorComponent_Template_input_ngModelChange_4_listener($event) { return ctx.onChange($event); })("ngModelChange", function IncrementadorComponent_Template_input_ngModelChange_4_listener($event) { return ctx.progreso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncrementadorComponent_Template_button_click_6_listener() { return ctx.cambiarValor(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.btnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.progreso > 100 || ctx.progreso < 0))("ngModel", ctx.progreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.btnClass);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 4020:
/*!**********************************************************************!*\
  !*** ./src/app/estadistico-general/estadistico-general.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticoGeneralComponent": () => (/* binding */ EstadisticoGeneralComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 3899);








function EstadisticoGeneralComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const plantel_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", plantel_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](plantel_r20.descripcion);
} }
function EstadisticoGeneralComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const partida_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", partida_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", partida_r21.clave, " -- ", partida_r21.descripcion, "");
} }
function EstadisticoGeneralComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_ul_27_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EstadisticoGeneralComponent_ul_27_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const producto_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.seleccionarProducto(producto_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", producto_r23.nombre_producto, " ");
} }
function EstadisticoGeneralComponent_ul_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EstadisticoGeneralComponent_ul_27_li_1_Template, 2, 1, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.productosFiltrados);
} }
function EstadisticoGeneralComponent_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_small_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_small_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EstadisticoGeneralComponent_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.confirmarTranferencia()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EstadisticoGeneralComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 48)(10, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EstadisticoGeneralComponent_tr_74_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const articulo_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.eliminarArticulo(articulo_r28.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const articulo_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](articulo_r28.nom_articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](articulo_r28.num_articulos_solicitados);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 3, articulo_r28.fecha, "dd/MM/yyyy"));
} }
const _c0 = function () { return { standalone: true }; };
class EstadisticoGeneralComponent {
    constructor(traer) {
        this.traer = traer;
        this.transferencia = {
            plantel: null,
            partida: null,
            idcosto: null,
            fecha: null,
            cantidadEnStock: null,
            cantidadTransferir: null,
            consecutivo: null,
            autorizo: localStorage.getItem('nombre'),
            recibio: '',
            nombreProducto: ''
        };
        this.productosFiltrados = [];
        this.productoBuscado = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.articulosTransferir = [];
        this.planteles = [];
        this.partidas = [];
        this.productos = [];
        this.datosAdmin = [];
        this.direccionSeleccionada = '';
        this.asig = [];
        this.numlista = 0;
        this.sumagenerados = 0;
        this.mostrarBotonTransferir = false;
    }
    ngOnInit() {
        this.traerPartidas();
        this.traerPlanteles();
        this.TraerConsecutivo();
        this.productosFiltrados;
    }
    filtrarProductos() {
        const texto = this.productoBuscado.toLowerCase();
        this.productosFiltrados = this.productos.filter(p => p.nombre_producto.toLowerCase().includes(texto));
    }
    seleccionarProducto(producto) {
        this.transferencia.idcosto = producto.id_costos;
        this.productoBuscado = producto.nombre_producto;
        this.productosFiltrados = [];
        this.TraerTotalDisponible();
    }
    getListaArticulosTransferir() {
        $('#articulos').DataTable().clear();
        $('#articulos').DataTable().draw();
        $('#articulos').DataTable().destroy();
        try {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                searching: false,
                processing: true,
                destroy: true,
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
                },
            };
            var folio = this.transferencia.consecutivo;
            this.traer.http.get(this.API_URL + `/getListaArticulosTransferir/${folio}`)
                .subscribe((res) => {
                this.articulosTransferir = res;
                console.log(this.articulosTransferir);
                this.dtTrigger.next();
                if (this.articulosTransferir.length > 0) {
                    this.mostrarBotonTransferir = true;
                }
                else {
                    this.mostrarBotonTransferir = false;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    eliminarArticulo(idarticulo) {
        console.log(idarticulo);
        this.traer.http.delete(this.API_URL + `/eliminarArticulo/${idarticulo}`)
            .subscribe((res) => {
            this.getListaArticulosTransferir();
        });
    }
    confirmarTranferencia() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "¿Estas seguro de terminar la lista?",
            text: "Una vez terminada no podrá agregar nuevos artículos ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: 'Cancelar',
            confirmButtonText: "Si, terminar"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("ID transferencia=" + this.transferencia.consecutivo);
                this.traer.http.get(this.API_URL + `/confirmarTransferencia/${this.transferencia.consecutivo}`)
                    .subscribe((res) => {
                    if (res == "ListaOk") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: "Lista asignada",
                            text: "Los artículos se asignaron correctamente",
                            icon: "success"
                        });
                        this.generarFormatoListaSurtido();
                        setTimeout(function () {
                            location.reload();
                        }, 7000);
                    }
                });
            }
            else {
                console.log("Cancelado...");
            }
        });
    }
    generarFormatoListaSurtido() {
        this.traer.http.get(this.API_URL + `/formatoListaArticulosSurtidos/${this.transferencia.consecutivo}/${this.transferencia.plantel}`, {
            responseType: 'text'
        }).subscribe((res) => {
            console.log(res);
            this.generarFormatoListaSurtidoSinMontos();
        });
    }
    generarFormatoListaSurtidoSinMontos() {
        console.log("Entro a sin montos");
        this.traer.http.get(this.API_URL + `/formatoListaArticulosSurtidosSinMontos/${this.transferencia.consecutivo}/${this.transferencia.plantel}`, { responseType: 'text' }).subscribe({
            next: (res) => {
                console.log(res);
                this.descargarZip();
            },
            error: (err) => {
                console.error("Error al generar el PDF", err);
            }
        });
    }
    traerPartidas() {
        this.traer.http.get(this.API_URL + `/traerPartidas`)
            .subscribe((res) => {
            this.partidas = res;
            console.log(this.partidas);
        });
    }
    descargarZip() {
        const httpOptions = {
            responseType: 'blob'
        };
        this.traer.http.post(this.API_URL + `/descargarzip`, null, httpOptions).subscribe((res) => {
            const fileURL = window.URL.createObjectURL(res);
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = 'Formato_Transferencia_Sin_Montos.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(fileURL);
        }, error => {
            console.error('Error descargando ZIP', error);
        });
    }
    opcionSeleccionadaX() {
        console.log(this.transferencia.partida);
        this.traer.http.get(this.API_URL + `/traerProductosDesdeTransferir/${this.transferencia.partida}`)
            .subscribe((res) => {
            this.productos = res;
            this.productosFiltrados = res;
            console.log(this.productos);
            this.transferencia.cantidadEnStock = 0;
            this.transferencia.idcosto = null;
            this.transferencia.nombreProducto = '';
        });
    }
    plantelSeleccionado() {
        console.log(this.transferencia.plantel);
        this.traer.http.get(this.API_URL + `/traerDatosAdministrativo/${this.transferencia.plantel}`)
            .subscribe((res) => {
            this.datosAdmin = res;
            console.log(this.datosAdmin);
            this.transferencia.recibio = res[0].administrativo;
        });
    }
    traerPlanteles() {
        this.traer.http.get(this.API_URL + `/traerPlanteles`)
            .subscribe((res) => {
            this.planteles = res;
            console.log(this.planteles);
        });
    }
    TraerTotalDisponible() {
        console.log(this.transferencia.partida);
        console.log(this.transferencia.idcosto);
        this.traer.http.get(this.API_URL + `/traerTotalDisponible/${this.transferencia.idcosto}`)
            .subscribe((res) => {
            if (res == "SinDatos") {
                this.transferencia.cantidadEnStock = 0;
            }
            else {
                this.transferencia.cantidadEnStock = res[0].existencias;
                console.log(res);
            }
        });
    }
    TraerConsecutivo() {
        this.traer.http.get(this.API_URL + `/traerConsecutivo`)
            .subscribe((res) => {
            var consecutivo = res;
            this.transferencia.consecutivo = consecutivo;
        });
    }
    agregarArticulo(form) {
        console.log(this.transferencia);
        if (this.transferencia.idcosto == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Producto no válido',
                text: 'Debe elegir un producto de la lista',
                icon: 'warning'
            });
        }
        else if (Number.isInteger(this.transferencia.cantidadTransferir) == false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Cantidad no valida',
                text: 'La cantidad a transferir debe ser número entero',
                icon: 'warning'
            });
        }
        else {
            if (form.valid == true) {
                console.log(this.transferencia);
                if (this.transferencia.cantidadEnStock < this.transferencia.cantidadTransferir) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: "Operación no realizada",
                        text: "No hay suficiente stock de este producto",
                        icon: "warning"
                    });
                }
                else if (this.transferencia.cantidadTransferir <= 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: "Operación no realizada",
                        text: "Debe transferir mínimo 1 artículo",
                        icon: "warning"
                    });
                }
                else {
                    this.traer.http.post(this.API_URL + `/TransferirArticulosPlantel`, this.transferencia)
                        .subscribe((res) => {
                        console.log(res);
                        if (res == "Add") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ok', 'Articulo agregado a la lista', 'success');
                            this.transferencia.idcosto = null;
                            this.getListaArticulosTransferir();
                            this.productoBuscado = '';
                            this.transferencia.cantidadEnStock = null;
                            this.transferencia.cantidadTransferir = null;
                        }
                        else if (res == "Duplicado") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Artículo Duplicado', 'Este artículo ya fue agregado a la lista', 'warning');
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', '¡No se guardaron los cambios!', 'error');
                        }
                    });
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: "Operación no realizada",
                    text: "Complete todos los campos",
                    icon: "warning"
                });
            }
        }
    }
    validarProducto() {
        console.log("Entro a validar Producto");
        this.transferencia.idcosto = null;
    }
}
EstadisticoGeneralComponent.ɵfac = function EstadisticoGeneralComponent_Factory(t) { return new (t || EstadisticoGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService)); };
EstadisticoGeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EstadisticoGeneralComponent, selectors: [["app-estadistico-general"]], decls: 75, vars: 23, consts: [[1, "formulario", 2, "width", "75%", "height", "500px", "margin", "0 auto"], [1, "Titulo", 2, "text-align", "center"], [2, "margin-top", "50px", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-4"], ["for", "inputPassword4"], ["id", "areaEmite", "name", "Plantel", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Plantel", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], ["id", "areaEmite", "name", "Partida", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Partida", "ngModel"], [1, "form-group", "col-md-4", 2, "position", "relative"], ["for", "inputProducto"], ["type", "text", "id", "inputProducto", "name", "Producto", "autocomplete", "off", "placeholder", "Escribe el nombre del art\u00EDculo", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "input", "click"], ["Producto", "ngModel"], ["class", "list-group mt-1", "style", "\n                position: absolute;\n                z-index: 1000;\n                width: 100%;\n                max-height: 400px;\n                overflow-y: auto;\n                box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                background-color: white;\n                border: 1px solid #ccc;\n            ", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-3"], ["for", "inputAddress"], ["type", "date", "name", "Fecha", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Fecha", "ngModel"], ["type", "number", "name", "cantidadEnStock", "id", "inputAddress", "placeholder", "", "required", "", "readonly", "", 1, "form-control", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["cantidadEnStock", "ngModel"], ["type", "number", "name", "cantidadTransferir", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["cantidadTransferir", "ngModel"], ["type", "number", "name", "folioTransferencia", "id", "inputAddress", "readonly", "", "placeholder", "", "required", "", 1, "form-control", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["folioTransferencia", "ngModel"], [1, "boton", "mt-4", 2, "margin", "0 auto", "text-align", "center"], ["type", "submit", "title", "Agregar art\u00EDculo", 1, "btn", "btn-light", 2, "padding", "10px", "margin-right", "10px"], [1, "fas", "fa-cart-plus", "fa-2x", 2, "color", "rgb(255, 166, 0)"], [1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "-100px", "width", "75%"], ["class", "btn btn-success", "style", "float: right;", "title", "Confirmar Transferencia", 3, "click", 4, "ngIf"], [1, "mt-2", 2, "width", "85%", "margin", "0 auto"], ["id", "articulos", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "center", "width", "50px"], [2, "text-align", "center", "width", "200px"], [2, "text-align", "center", "width", "80px"], [2, "font-size", "15px"], [3, "value"], [1, "form-text", "text-danger", "animated", "fadeIn"], [1, "list-group", "mt-1", 2, "position", "absolute", "z-index", "1000", "width", "100%", "max-height", "400px", "overflow-y", "auto", "box-shadow", "0 4px 8px rgba(0,0,0,0.1)", "background-color", "white", "border", "1px solid #ccc"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click"], ["title", "Confirmar Transferencia", 1, "btn", "btn-success", 2, "float", "right", 3, "click"], [1, "fas", "fa-clipboard-check", "fa-2x"], [2, "text-align", "center"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash"]], template: function EstadisticoGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Transferir Art\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EstadisticoGeneralComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.agregarArticulo(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Plantel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EstadisticoGeneralComponent_Template_select_ngModelChange_10_listener($event) { return ctx.transferencia.plantel = $event; })("change", function EstadisticoGeneralComponent_Template_select_change_10_listener() { return ctx.plantelSeleccionado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, EstadisticoGeneralComponent_ng_container_12_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, EstadisticoGeneralComponent_small_13_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5)(15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EstadisticoGeneralComponent_Template_select_ngModelChange_17_listener($event) { return ctx.transferencia.partida = $event; })("change", function EstadisticoGeneralComponent_Template_select_change_17_listener() { return ctx.opcionSeleccionadaX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EstadisticoGeneralComponent_ng_container_19_Template, 3, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, EstadisticoGeneralComponent_small_20_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EstadisticoGeneralComponent_Template_input_ngModelChange_24_listener($event) { return ctx.productoBuscado = $event; })("input", function EstadisticoGeneralComponent_Template_input_input_24_listener() { return ctx.filtrarProductos(); })("click", function EstadisticoGeneralComponent_Template_input_click_24_listener() { return ctx.validarProducto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, EstadisticoGeneralComponent_small_26_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, EstadisticoGeneralComponent_ul_27_Template, 2, 1, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EstadisticoGeneralComponent_Template_input_ngModelChange_32_listener($event) { return ctx.transferencia.fecha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, EstadisticoGeneralComponent_small_34_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 19)(36, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Cantidad disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EstadisticoGeneralComponent_Template_input_ngModelChange_38_listener($event) { return ctx.transferencia.cantidadEnStock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, EstadisticoGeneralComponent_small_40_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 19)(42, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Cantidad a transferir");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EstadisticoGeneralComponent_Template_input_ngModelChange_44_listener($event) { return ctx.transferencia.cantidadTransferir = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, EstadisticoGeneralComponent_small_46_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 19)(48, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Folio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EstadisticoGeneralComponent_Template_input_ngModelChange_50_listener($event) { return ctx.transferencia.consecutivo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, EstadisticoGeneralComponent_small_52_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 29)(54, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 32)(57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Lista de art\u00EDculos a transferir");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, EstadisticoGeneralComponent_button_59_Template, 2, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 34)(61, "table", 35)(62, "thead")(63, "tr", 36)(64, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Num.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Fecha autorizada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "tbody", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, EstadisticoGeneralComponent_tr_74_Template, 12, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](39);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.transferencia.plantel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.planteles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.transferencia.partida);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoBuscado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.productosFiltrados.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.transferencia.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r10.invalid && _r10.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.transferencia.cantidadEnStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r12.invalid && _r12.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.transferencia.cantidadTransferir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r14.invalid && _r14.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.transferencia.consecutivo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r16.invalid && _r16.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrarBotonTransferir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.articulosTransferir);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["table[_ngcontent-%COMP%]\r\n{\r\n    counter-reset: rowNumber;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child\r\n{\r\n    counter-increment: rowNumber;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child::before\r\n{\r\n    content: counter(rowNumber);\r\n    min-width: 1em;\r\n    margin-right: 0.5em;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGFkaXN0aWNvLWdlbmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImVzdGFkaXN0aWNvLWdlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlXHJcbntcclxuICAgIGNvdW50ZXItcmVzZXQ6IHJvd051bWJlcjtcclxufVxyXG5cclxudGFibGUgdHIgPiB0ZDpmaXJzdC1jaGlsZFxyXG57XHJcbiAgICBjb3VudGVyLWluY3JlbWVudDogcm93TnVtYmVyO1xyXG59XHJcbiAgICAgICAgICAgICAgICBcclxudGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGQ6OmJlZm9yZVxyXG57XHJcbiAgICBjb250ZW50OiBjb3VudGVyKHJvd051bWJlcik7XHJcbiAgICBtaW4td2lkdGg6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 9085:
/*!******************************************************************!*\
  !*** ./src/app/generar-documento/generar-documento.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerarDocumentoComponent": () => (/* binding */ GenerarDocumentoComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function GenerarDocumentoComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const stock_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", stock_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", stock_r27.clave, " -- ", stock_r27.descripcion, "");
} }
function GenerarDocumentoComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_ul_21_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GenerarDocumentoComponent_ul_21_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const producto_r29 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.seleccionarProducto(producto_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", producto_r29.descripcion, " ");
} }
function GenerarDocumentoComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GenerarDocumentoComponent_ul_21_li_1_Template, 2, 1, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.productosFiltrados);
} }
function GenerarDocumentoComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const proveedor_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", proveedor_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](proveedor_r32.razon_social);
} }
function GenerarDocumentoComponent_small_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_small_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerarDocumentoComponent_ng_container_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 49)(3, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const multiple_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "flexCheckDefault", i_r34, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "flexCheckDefault", i_r34, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](multiple_r33.nombre_completo);
} }
const _c0 = function () { return { standalone: true }; };
class GenerarDocumentoComponent {
    constructor(traer, currencyPipe) {
        this.traer = traer;
        this.currencyPipe = currencyPipe;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.stocks = [];
        this.partidas = [];
        this.productos = [];
        this.proveedores = [];
        this.datosproveedor = [];
        this.opcionSeleccionada = '';
        this.mostrarBoton = false;
        this.fecha_registrox = '';
        this.deptosmultipleEnvio = [];
        this.direccmultipleEnvio = [];
        this.multipleEnvio = [];
        this.multipleEnviodirecciones = [];
        this.stock = {
            partida: null,
            producto: null,
            fechaAd: null,
            cantidad: null,
            unidad: '',
            descripcion: '',
            proveedor: '',
            telefono: '',
            direccion: '',
            costo: null,
            iva: '16%',
            total: null,
            folio: '',
            centro_trabajo: localStorage.getItem('centro_trabajo')
        };
        this.productosFiltrados = [];
        this.productoBuscado = '';
        this.result = [];
        this.monedaFormateada = '$ 0.00';
        this.monedaFormateada2 = '$ 0.00';
    }
    ngOnInit() {
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var anio = fecha.getFullYear();
        if (dia < 10) {
            this.day = "0" + dia;
        }
        else {
            this.day = dia.toString();
        }
        if (mes < 10) {
            this.month = "0" + mes;
        }
        else {
            this.month = mes.toString();
        }
        this.fecha_registrox = this.day + "-" + this.month + "-" + anio;
        console.log(this.fecha_registrox);
        this.traerPartidas();
        this.traerProveedores();
    }
    AgregarStock(form) {
        if (form.valid == true && this.stock.cantidad > 0) {
            this.traer.http.post(this.API_URL + `/registrarStock`, this.stock)
                .subscribe((res) => {
                console.log(res);
                if (res == "Save") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ok', '¡Los datos fueron guardados!', 'success');
                }
                else if (res == "Duplicado") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Artículo Duplicado', 'Este artículo ya fue registrado', 'error');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', '¡No se guardaron los cambios!. Contacte a soporte', 'error');
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error al guardar', '¡Revise que los campos tengan información correcta!', 'error');
        }
    }
    opcionSeleccionadaX() {
        console.log(this.stock.partida);
        this.traer.http.get(this.API_URL + `/traerProductos/${this.stock.partida}`)
            .subscribe((res) => {
            this.productos = res;
            this.productosFiltrados = res; //Se agrego
            console.log(this.productos);
        });
    }
    traerProveedores() {
        this.traer.http.get(this.API_URL + `/traerProveedores`)
            .subscribe((res) => {
            this.proveedores = res;
            console.log(this.proveedores);
        });
    }
    CapturarValor() {
        var idproveedor = this.direccionSeleccionada;
        console.log(idproveedor);
        this.traer.http.get(this.API_URL + `/traerDatosProveedores/${idproveedor}`)
            .subscribe((res) => {
            this.datosproveedor = res;
            this.stock.telefono = res[0].telefono;
            this.stock.direccion = res[0].direccion;
        });
    }
    calculoCompra() {
        this.stock.total = (this.stock.cantidad * this.stock.costo);
        var iva = (this.stock.total * 0.16);
        this.stock.total = this.stock.total + iva;
        this.monedaFormateada = this.currencyPipe.transform(this.stock.total, 'USD', '$');
        this.stock.subTotal = (this.stock.cantidad * this.stock.costo);
        this.monedaFormateada2 = this.currencyPipe.transform(this.stock.subTotal, 'USD', '$');
    }
    traerPartidas() {
        this.traer.http.get(this.API_URL + `/traerPartidas`)
            .subscribe((res) => {
            this.partidas = res;
            console.log(this.partidas);
        });
    }
    filtrarProductos() {
        const texto = this.productoBuscado.toLowerCase();
        this.productosFiltrados = this.productos.filter(p => p.descripcion.toLowerCase().includes(texto));
    }
    seleccionarProducto(producto) {
        this.stock.producto = producto.id.toString();
        this.productoBuscado = producto.descripcion;
        this.productosFiltrados = [];
        console.log(this.stock.producto);
    }
}
GenerarDocumentoComponent.ɵfac = function GenerarDocumentoComponent_Factory(t) { return new (t || GenerarDocumentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe)); };
GenerarDocumentoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GenerarDocumentoComponent, selectors: [["app-generar-documento"]], decls: 111, vars: 32, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "50px"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-3"], ["for", "inputPassword4"], ["id", "areaEmite", "name", "Partida", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Partida", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], [1, "form-group", "col-md-3", 2, "position", "relative"], ["for", "inputProducto"], ["type", "text", "id", "inputProducto", "name", "Producto", "autocomplete", "off", "placeholder", "Escribe el nombre del art\u00EDculo", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "input"], ["Producto", "ngModel"], ["class", "list-group mt-1", "style", "\n                position: absolute;\n                z-index: 1000;\n                width: 100%;\n                max-height: 400px;\n                overflow-y: auto;\n                box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                background-color: white;\n                border: 1px solid #ccc;\n            ", 4, "ngIf"], [1, "form-group", "col-md-2"], ["for", "inputAddress"], ["type", "date", "name", "FechaAdqui", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaAdqui", "ngModel"], ["type", "number", "name", "Cantidad", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Cantidad", "ngModel"], ["id", "areaEmite", "name", "Partida", "required", "", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["unidad", "ngModel"], [1, "form-row"], ["type", "text", "name", "Comentario", "id", "inputAddress", "placeholder", "", "required", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Comentario", "ngModel"], ["id", "areaEmite", "name", "Proveedor", "required", "", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Proveedor", "ngModel"], ["type", "text", "name", "Telefono", "id", "inputAddress", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Telefono", "ngModel"], ["type", "text", "name", "Dirreccion", "id", "inputAddress", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Direccion", "ngModel"], ["type", "text", "name", "Costo", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Costo", "ngModel"], ["type", "text", "name", "subTotal", "id", "inputAddress", "placeholder", "", "required", "", "readonly", "", 1, "form-control", 3, "value", "change"], ["type", "text", "name", "Iva", "id", "inputAddress", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Iva", "ngModel"], ["type", "text", "name", "Total", "id", "inputAddress", "placeholder", "", "required", "", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", "name", "Folio", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-row", "mt-3"], [1, "boton", "mt-5", 2, "margin", "0 auto", "text-align", "center"], ["type", "submit", 1, "btn", "btn-primary", 2, "padding", "10px", "margin-right", "10px"], [1, "mdi", "mdi-content-save"], [3, "value"], [1, "form-text", "text-danger", "animated", "fadeIn"], [1, "list-group", "mt-1", 2, "position", "absolute", "z-index", "1000", "width", "100%", "max-height", "400px", "overflow-y", "auto", "box-shadow", "0 4px 8px rgba(0,0,0,0.1)", "background-color", "white", "border", "1px solid #ccc"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click"], ["type", "checkbox", "value", "", 1, "form-check-input", "form-group", "col-md-2", 3, "id"], [1, "form-check-label", 2, "padding-right", "10px", 3, "for"], [2, "font-size", "14px"]], template: function GenerarDocumentoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3")(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Registrar Nueva Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function GenerarDocumentoComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.AgregarStock(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_select_ngModelChange_11_listener($event) { return ctx.stock.partida = $event; })("change", function GenerarDocumentoComponent_Template_select_change_11_listener() { return ctx.opcionSeleccionadaX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GenerarDocumentoComponent_ng_container_13_Template, 3, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, GenerarDocumentoComponent_small_14_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_18_listener($event) { return ctx.productoBuscado = $event; })("input", function GenerarDocumentoComponent_Template_input_input_18_listener() { return ctx.filtrarProductos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, GenerarDocumentoComponent_small_20_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, GenerarDocumentoComponent_ul_21_Template, 2, 1, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15)(23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Fecha de adquisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_25_listener($event) { return ctx.stock.fechaAd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, GenerarDocumentoComponent_small_27_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15)(29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Cantidad adquirida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_31_listener($event) { return ctx.stock.cantidad = $event; })("change", function GenerarDocumentoComponent_Template_input_change_31_listener() { return ctx.calculoCompra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, GenerarDocumentoComponent_small_33_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 15)(35, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Unidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_select_ngModelChange_37_listener($event) { return ctx.stock.unidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Litros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Kilos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Bultos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Paquetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Metros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Piezas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Otro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, GenerarDocumentoComponent_small_54_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 23)(56, "div", 4)(57, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Descripci\u00F3n y/o comentario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_59_listener($event) { return ctx.stock.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, GenerarDocumentoComponent_small_61_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 4)(63, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "select", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_select_ngModelChange_65_listener($event) { return ctx.stock.proveedor = $event; })("ngModelChange", function GenerarDocumentoComponent_Template_select_ngModelChange_65_listener($event) { return ctx.direccionSeleccionada = $event; })("change", function GenerarDocumentoComponent_Template_select_change_65_listener() { return ctx.CapturarValor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, GenerarDocumentoComponent_ng_container_67_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, GenerarDocumentoComponent_small_68_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 4)(70, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_72_listener($event) { return ctx.stock.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, GenerarDocumentoComponent_small_74_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 4)(76, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_78_listener($event) { return ctx.stock.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, GenerarDocumentoComponent_small_80_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 15)(82, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Costo unitario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_84_listener($event) { return ctx.stock.costo = $event; })("change", function GenerarDocumentoComponent_Template_input_change_84_listener() { return ctx.calculoCompra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, GenerarDocumentoComponent_small_86_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 15)(88, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Importe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GenerarDocumentoComponent_Template_input_change_90_listener() { return ctx.calculoCompra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 15)(92, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_94_listener($event) { return ctx.stock.iva = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, GenerarDocumentoComponent_small_96_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 4)(98, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Total de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 4)(102, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Folio de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GenerarDocumentoComponent_Template_input_ngModelChange_104_listener($event) { return ctx.stock.folio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](106, GenerarDocumentoComponent_ng_container_106_Template, 5, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 40)(108, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](38);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](60);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](66);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](73);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](79);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](85);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.partida);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productoBuscado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.productosFiltrados.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.fechaAd);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.cantidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.unidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.proveedor)("ngModel", ctx.direccionSeleccionada);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.proveedores);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r15.invalid && _r15.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r18.invalid && _r18.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r20.invalid && _r20.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.costo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r22.invalid && _r22.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.monedaFormateada2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r24.invalid && _r24.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.monedaFormateada);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stock.folio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.deptosmultipleEnvio);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["label[_ngcontent-%COMP%]{\r\n    font-weight:500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXItZG9jdW1lbnRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImdlbmVyYXItZG9jdW1lbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/registro.service */ 23);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class AuthGuard {
    constructor(registro, router) {
        this.registro = registro;
        this.router = router;
    }
    canActivate() {
        if (this.registro.estaAutenticado()) {
            return true;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('No estas autorizado', 'escriba sus credenciales', 'error');
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_registro_service__WEBPACK_IMPORTED_MODULE_1__.RegistroService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9123:
/*!************************************************************!*\
  !*** ./src/app/lista-usuarios/lista-usuarios.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaUsuariosComponent": () => (/* binding */ ListaUsuariosComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traer-datos.service */ 5735);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 3899);









function ListaUsuariosComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const usuario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](usuario_r1.numempleado);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](usuario_r1.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](usuario_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](usuario_r1.nombrearea);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](usuario_r1.activo ? "Si" : "No");
} }
class ListaUsuariosComponent {
    constructor(traer, moda) {
        this.traer = traer;
        this.moda = moda;
        this.nuevo_usuario = {
            nombre: '',
            usuario: '',
            password: '',
            numempleado: '',
            area: localStorage.getItem('nombreArea'),
            clave_area: localStorage.getItem('area'),
            esactivo: true
        };
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.usuarios = [];
    }
    ngOnInit() {
        this.traerListaUsuarios();
    }
    traerListaUsuarios() {
        $('#empleados').DataTable().clear();
        $('#empleados').DataTable().draw();
        $('#empleados').DataTable().destroy();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            searching: true,
            processing: true,
            destroy: true,
            language: {
                lengthMenu: 'Mostrando _MENU_ Registros',
                info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
                infoEmpty: 'Mostrando 0 to 0 of 0 entradas',
                infoFiltered: '(Resultados del filtrado)',
                search: 'Buscar:',
                paginate: {
                    first: 'Inicio',
                    last: 'Último',
                    next: 'Siguiente',
                    previous: 'Anterior'
                },
            }
        };
        try {
            this.traer.http.get(this.API_URL + `/getUsuarios/${localStorage.getItem('centro_trabajo')}`)
                .subscribe((res) => {
                this.usuarios = res;
                this.dtTrigger.next();
                console.log(this.usuarios);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    AgregarUsuario() {
        this.traer.http.post(this.API_URL + `/AgregarUsuario`, this.nuevo_usuario).subscribe((res) => {
            if (res == "Registrado") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'success',
                    title: '¡Usuario Registrado!',
                    confirmButtonColor: '#FFC900',
                });
            }
            else {
                console.log("Error al registrar el usuario...");
            }
        }, (err) => {
            console.log(err);
        });
    }
}
ListaUsuariosComponent.ɵfac = function ListaUsuariosComponent_Factory(t) { return new (t || ListaUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
ListaUsuariosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListaUsuariosComponent, selectors: [["app-lista-usuarios"]], decls: 57, vars: 8, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "20px"], [1, "mt-2"], ["id", "empleados", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "center", "width", "100px"], [2, "text-align", "center", "width", "80px"], [2, "text-align", "center", "width", "250px"], [2, "text-align", "center", "width", "150px"], [2, "font-size", "15px"], [4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-7"], ["for", "inputAddress"], ["type", "text", "name", "contrase\u00F1a", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-5"], ["type", "text", "name", "usuario", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "contrase\u00F1a", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "numempleado", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text ", "name", "Area", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-success"], [2, "text-align", "center"]], template: function ListaUsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Lista de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "table", 2)(6, "thead")(7, "tr", 3)(8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "N\u00FAm. Empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u00C1rea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ListaUsuariosComponent_tr_19_Template, 11, 5, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "div", 12)(23, "div", 13)(24, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Agregar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 15)(27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 17)(30, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ListaUsuariosComponent_Template_form_ngSubmit_30_listener() { return ctx.AgregarUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19)(32, "div", 20)(33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListaUsuariosComponent_Template_input_ngModelChange_35_listener($event) { return ctx.nuevo_usuario.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 23)(37, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListaUsuariosComponent_Template_input_ngModelChange_39_listener($event) { return ctx.nuevo_usuario.usuario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 19)(41, "div", 20)(42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListaUsuariosComponent_Template_input_ngModelChange_44_listener($event) { return ctx.nuevo_usuario.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 23)(46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "N\u00FAm. empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListaUsuariosComponent_Template_input_ngModelChange_48_listener($event) { return ctx.nuevo_usuario.numempleado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 19)(50, "div", 20)(51, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "\u00C1rea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListaUsuariosComponent_Template_input_ngModelChange_53_listener($event) { return ctx.nuevo_usuario.area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 28)(55, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Dar de alta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.nuevo_usuario.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.nuevo_usuario.usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.nuevo_usuario.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.nuevo_usuario.numempleado);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.nuevo_usuario.area);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS11c3Vhcmlvcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 759:
/*!****************************************************************!*\
  !*** ./src/app/mis-seguimientos/mis-seguimientos.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisSeguimientosComponent": () => (/* binding */ MisSeguimientosComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function MisSeguimientosComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stock_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", stock_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", stock_r8.clave, " -- ", stock_r8.descripcion, " ");
} }
function MisSeguimientosComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MisSeguimientosComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "option", 24);
} if (rf & 2) {
    const p_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r9.descripcion);
} }
function MisSeguimientosComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proveedor_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", proveedor_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", proveedor_r10.razon_social, " ");
} }
function MisSeguimientosComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class MisSeguimientosComponent {
    constructor(traer, currencyPipe) {
        this.traer = traer;
        this.currencyPipe = currencyPipe;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.stocks = [];
        this.partidas = [];
        this.productos = [];
        this.proveedores = [];
        this.datosproveedor = [];
        this.opcionSeleccionada = '';
        this.mostrarBoton = false;
        this.fecha_registrox = '';
        this.deptosmultipleEnvio = [];
        this.direccmultipleEnvio = [];
        this.multipleEnvio = [];
        this.multipleEnviodirecciones = [];
        this.articuloValido = false;
        this.terminoBusqueda = '';
        this.productosFiltrados = [];
        this.Recargastock = {
            partida: null,
            producto: null,
            proveedor: '',
            folio: '',
            cantidad: null,
            fechaAd: null,
            importe: null,
            totalCompra: null
        };
        this.result = [];
        this.monedaFormateada = '$ 0.00';
        this.monedaFormateada2 = '$ 0.00';
    }
    ngOnInit() {
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var anio = fecha.getFullYear();
        if (dia < 10) {
            this.day = "0" + dia;
        }
        else {
            this.day = dia.toString();
        }
        if (mes < 10) {
            this.month = "0" + mes;
        }
        else {
            this.month = mes.toString();
        }
        this.fecha_registrox = this.day + "-" + this.month + "-" + anio;
        console.log(this.fecha_registrox);
        this.traerPartidas();
        this.traerProveedores();
    }
    RecargarStock(form) {
        // linea nacho
        this.Recargastock.proveedor = this.direccionSeleccionada.toString();
        if (!this.Recargastock.partida || !this.Recargastock.producto ||
            !this.Recargastock.proveedor || !this.Recargastock.cantidad ||
            !this.Recargastock.fechaAd || !this.Recargastock.folio) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', '¡Todos los campos son obligatorios antes de enviar!', 'warning');
            return;
        }
        console.log(this.Recargastock);
        this.traer.http.post(this.API_URL + `/recargarStock/${this.Recargastock.producto}/${this.Recargastock.proveedor}`, this.Recargastock)
            .subscribe((res) => {
            console.log(res);
            if (res == "reload") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ok', '¡Los datos fueron agregados al stock!', 'success');
                this.articuloValido = false;
                this.terminoBusqueda = '';
                this.monedaFormateada = '$ 0.00';
                this.monedaFormateada2 = '$ 0.00';
                this.costo_unitario = 0;
                this.direccionSeleccionada = null;
                this.Recargastock = {
                    partida: null,
                    producto: null,
                    proveedor: '',
                    folio: '',
                    cantidad: null,
                    fechaAd: null,
                    importe: null,
                    totalCompra: null
                };
                form.resetForm();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', 'Contacte a soporte', 'error');
            }
        });
    }
    opcionSeleccionadaX() {
        this.articuloValido = false;
        this.terminoBusqueda = '';
        this.Recargastock.producto = null;
        this.productosFiltrados = [];
        this.traer.http.get(this.API_URL + `/traerProductos/${this.Recargastock.partida}`)
            .subscribe((res) => {
            this.productos = res;
            this.productosFiltrados = res;
        });
    }
    buscarProducto() {
        if (!this.terminoBusqueda) {
            this.productosFiltrados = this.productos;
            return;
        }
        const busqueda = this.terminoBusqueda.toLowerCase();
        this.productosFiltrados = this.productos.filter(p => p.descripcion?.toLowerCase().includes(busqueda) ||
            p.idproducto?.toString().toLowerCase().includes(busqueda));
    }
    buscarYSeleccionar() {
        const match = this.productos.find(p => p.descripcion === this.terminoBusqueda);
        if (match) {
            this.Recargastock.producto = match.id;
            console.log("Match encontrado:", this.Recargastock.producto);
            if (this.direccionSeleccionada) {
                this.CapturarValor();
            }
        }
        else {
            this.Recargastock.producto = null;
        }
    }
    traerProveedores() {
        this.traer.http.get(this.API_URL + `/traerProveedores`)
            .subscribe((res) => {
            this.proveedores = res;
            console.log(this.proveedores);
        });
    }
    CapturarValor() {
        const idproveedor = this.direccionSeleccionada;
        console.log(idproveedor);
        const idArticulo = this.Recargastock.producto;
        console.log(idArticulo);
        if (!idproveedor || !idArticulo) {
            console.warn("Faltan Ids para validar");
            return;
        }
        if (!this.productos) {
            return;
        }
        //     this.traer.http.get( this.API_URL+/traerDatosProveedores/${idproveedor})
        // .subscribe((res:any)=>{
        //   this.datosproveedor=res;
        // }); 
        this.traer.http.get(this.API_URL + `/traerCostoArticulo/${idproveedor}/${this.Recargastock.producto}`)
            .subscribe((res) => {
            // console.log(Respuesta del servidor: ${res});
            if (res == 'ArticuloNoEncontrado') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'No encontrado',
                    text: 'El artículo con el proveedor seleccionado no se encuantra en el almacén',
                    icon: 'warning'
                });
                this.costo_unitario = 0.00;
                this.articuloValido = false;
                this.Recargastock.importe = 0;
                this.Recargastock.totalCompra = 0;
                this.monedaFormateada = '$ 0.00';
                this.monedaFormateada2 = '$ 0.00';
                this.Recargastock.folio = '';
                this.Recargastock.cantidad = 0;
            }
            else {
                console.log(res);
                this.costo_unitario = +res;
                this.articuloValido = true;
                if (this.Recargastock.cantidad) {
                    this.CalcularImporteyTotal();
                }
            }
        });
    }
    CalcularImporteyTotal() {
        if (this.Recargastock.cantidad <= 0) {
            this.Recargastock.cantidad = 1;
        }
        this.Recargastock.importe = (this.costo_unitario * this.Recargastock.cantidad);
        this.monedaFormateada = this.currencyPipe.transform(this.Recargastock.importe, 'USD', '$');
        this.Recargastock.totalCompra = (this.Recargastock.importe + (this.Recargastock.importe * 0.16));
        this.monedaFormateada2 = this.currencyPipe.transform(this.Recargastock.totalCompra, 'USD', '$');
    }
    traerPartidas() {
        this.traer.http.get(this.API_URL + `/traerPartidas`)
            .subscribe((res) => {
            this.partidas = res;
            console.log(this.partidas);
        });
    }
}
MisSeguimientosComponent.ɵfac = function MisSeguimientosComponent_Factory(t) { return new (t || MisSeguimientosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe)); };
MisSeguimientosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MisSeguimientosComponent, selectors: [["app-mis-seguimientos"]], decls: 59, vars: 23, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "50px"], [1, "formulario", 2, "margin", "0 auto", "float", "none"], [2, "width", "100%", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5", 2, "margin", "0 auto", "width", "100%"], [1, "form-group", "col-md-4"], ["name", "Partida", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Partida", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "Escriba el nombre del producto...", "name", "Busqueda", "list", "listaProductos", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["id", "listaProductos"], ["name", "Proveedor", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["Proveedor", "ngModel"], [1, "form-row"], [1, "form-group", "col-md-2"], ["type", "text", "name", "Folio", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "CostoUnitario", "readonly", "", 1, "form-control", 3, "value"], ["type", "number", "name", "Cantidad", "min", "1", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["type", "date", "name", "FechaAdqui", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "boton", "mt-5", 2, "margin", "0 auto", "text-align", "center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "mdi", "mdi-content-save"], [3, "value"], [1, "text-danger"]], template: function MisSeguimientosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3")(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Recargar Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1)(6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MisSeguimientosComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.RecargarStock(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MisSeguimientosComponent_Template_select_ngModelChange_12_listener($event) { return ctx.Recargastock.partida = $event; })("change", function MisSeguimientosComponent_Template_select_change_12_listener() { return ctx.opcionSeleccionadaX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, MisSeguimientosComponent_option_14_Template, 2, 3, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MisSeguimientosComponent_small_15_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 5)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Producto (Busque y seleccione)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MisSeguimientosComponent_Template_input_ngModelChange_19_listener($event) { return ctx.terminoBusqueda = $event; })("input", function MisSeguimientosComponent_Template_input_input_19_listener() { return ctx.buscarYSeleccionar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "datalist", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, MisSeguimientosComponent_option_21_Template, 1, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 5)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MisSeguimientosComponent_Template_select_ngModelChange_25_listener($event) { return ctx.direccionSeleccionada = $event; })("change", function MisSeguimientosComponent_Template_select_change_25_listener() { return ctx.CapturarValor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, MisSeguimientosComponent_option_27_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, MisSeguimientosComponent_small_28_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Folio factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MisSeguimientosComponent_Template_input_ngModelChange_33_listener($event) { return ctx.Recargastock.folio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 15)(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Costo unitario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 15)(40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Cantidad adquirida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MisSeguimientosComponent_Template_input_ngModelChange_42_listener($event) { return ctx.Recargastock.cantidad = $event; })("input", function MisSeguimientosComponent_Template_input_input_42_listener() { return ctx.CalcularImporteyTotal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 15)(44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Importe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 15)(48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Total de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 15)(52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Fecha de adquisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MisSeguimientosComponent_Template_input_ngModelChange_54_listener($event) { return ctx.Recargastock.fechaAd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 21)(56, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Recargastock.partida);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.partidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.terminoBusqueda);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.Recargastock.partida ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productosFiltrados);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.direccionSeleccionada)("disabled", !ctx.terminoBusqueda);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.proveedores);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Recargastock.folio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.articuloValido === false ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 21, ctx.costo_unitario));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.articuloValido === false ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Recargastock.cantidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.articuloValido === false ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.monedaFormateada);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.monedaFormateada2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Recargastock.fechaAd);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.articuloValido === false ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || ctx.articuloValido === false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["@media (min-width: 768px) {\r\n    .modal-xl[_ngcontent-%COMP%] {\r\n      width: 90%;\r\n     max-width:1200px;\r\n    }\r\n  }\r\n\r\n  label[_ngcontent-%COMP%]{\r\n    font-weight:600;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pcy1zZWd1aW1pZW50b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO01BQ0UsVUFBVTtLQUNYLGdCQUFnQjtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJtaXMtc2VndWltaWVudG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tb2RhbC14bCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgbWF4LXdpZHRoOjEyMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 7415:
/*!*********************************************************!*\
  !*** ./src/app/models/reporte_movimientos_x_partida.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reporte_de_compras": () => (/* binding */ reporte_de_compras),
/* harmony export */   "reporte_de_compras_x_proveedor": () => (/* binding */ reporte_de_compras_x_proveedor),
/* harmony export */   "reporte_existencia_x_partida": () => (/* binding */ reporte_existencia_x_partida),
/* harmony export */   "reporte_x_partida": () => (/* binding */ reporte_x_partida)
/* harmony export */ });
class reporte_x_partida {
}
class reporte_de_compras {
}
class reporte_de_compras_x_proveedor {
}
class reporte_existencia_x_partida {
}


/***/ }),

/***/ 9149:
/*!******************************************************!*\
  !*** ./src/app/nopagefound/nopagefound.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NopagefoundComponent": () => (/* binding */ NopagefoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NopagefoundComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
}
NopagefoundComponent.ɵfac = function NopagefoundComponent_Factory(t) { return new (t || NopagefoundComponent)(); };
NopagefoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NopagefoundComponent, selectors: [["app-nopagefound"]], decls: 11, vars: 1, consts: [["id", "wrapper", 1, "error-page"], [1, "error-box"], [1, "error-body", "text-center"], [1, "text-uppercase"], ["href", "index.html", 1, "btn", "btn-info", "btn-rounded", "waves-effect", "waves-light", "m-b-40"], [1, "footer", "text-center"]], template: function NopagefoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pagina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Regresar al inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " SIGE");
    } }, styles: [".error-box[_ngcontent-%COMP%] {\n    height: 100%;\n    position: fixed;\n    background: url('error-bg.jpg') no-repeat center center #fff;\n    width: 100%;\n}\n\n\n.error-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0px;\n    right: 0px;\n}\n\n\n.error-body[_ngcontent-%COMP%] {\n    padding-top: 5%;\n}\n\n\n.error-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 210px;\n    font-weight: 900;\n    text-shadow: 4px 4px 0 #ffffff, 6px 6px 0 #263238;\n    line-height: 210px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcGFnZWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0M7OztBQUdEOzs7OztDQUtDOzs7QUFHRCxlQUFlOzs7QUFHZixrQkFBa0I7OztBQUdsQixlQUFlOzs7QUFHZixlQUFlOzs7QUFHZixpQkFBaUI7OztBQUdqQjs7a0JBRWtCOzs7QUFFbEI7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLDREQUF5RjtJQUN6RixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtJQUNqRCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoibm9wYWdlZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UZW1wbGF0ZSBOYW1lOiBBZG1pbiBwcm8gQWRtaW5cbkF1dGhvcjogV3JhcHBpeGVsXG5FbWFpbDogbmlyYXZqb3NoaTg3QGdtYWlsLmNvbVxuRmlsZTogc2Nzc1xuKi9cblxuXG4vKlxuVGVtcGxhdGUgTmFtZTogQWRtaW4gUHJvIEFkbWluXG5BdXRob3I6IFdyYXBwaXhlbFxuRW1haWw6IG5pcmF2am9zaGk4N0BnbWFpbC5jb21cbkZpbGU6IHNjc3NcbiovXG5cblxuLypUaGVtZSBDb2xvcnMqL1xuXG5cbi8qYm9vdHN0cmFwIENvbG9yKi9cblxuXG4vKkxpZ2h0IGNvbG9ycyovXG5cblxuLypOb3JtYWwgQ29sb3IqL1xuXG5cbi8qRXh0cmEgVmFyaWFibGUqL1xuXG5cbi8qKioqKioqKioqKioqKioqKioqXG5FcnJvciBQYWdlXG4qKioqKioqKioqKioqKioqKiovXG5cbi5lcnJvci1ib3gge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9lcnJvci1iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lcnJvci1ib3ggLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cbi5lcnJvci1ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5lcnJvci1ib2R5IGgxIHtcbiAgICBmb250LXNpemU6IDIxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMCAjZmZmZmZmLCA2cHggNnB4IDAgIzI2MzIzODtcbiAgICBsaW5lLWhlaWdodDogMjEwcHg7XG59Il19 */"] });


/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 3899);






function DashboardComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const existencia_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](existencia_r1.partida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](existencia_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](existencia_r1.existencias);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](existencia_r1.proveedor);
} }
class DashboardComponent {
    constructor(traer) {
        this.traer = traer;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.existenciasBajas = [];
    }
    ngOnInit() {
        this.getListaExistenciasBajas();
    }
    getListaExistenciasBajas() {
        $('#articulos').DataTable().clear();
        $('#articulos').DataTable().draw();
        $('#articulos').DataTable().destroy();
        try {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 20,
                searching: true,
                processing: true,
                destroy: true,
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
                },
            };
            var idplantel = localStorage.getItem('centro_trabajo');
            this.traer.http.get(this.API_URL + `/getExistenciasBajas/${idplantel}`)
                .subscribe((res) => {
                this.existenciasBajas = res;
                console.log(this.existenciasBajas);
                this.dtTrigger.next();
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_1__.TraerDatosService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 19, vars: 3, consts: [[1, "formulario"], [1, "Titulo", 2, "text-align", "center"], [1, "mt-5", 2, "width", "85%", "margin", "0 auto"], ["id", "articulos", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "center"], [2, "font-size", "15px"], [4, "ngFor", "ngForOf"], [2, "width", "500px", "text-transform", "lowercase"], [2, "text-align", "center", "width", "50px"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Art\u00EDculos con bajo stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "table", 3)(7, "thead")(8, "tr", 4)(9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Existencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DashboardComponent_tr_18_Template, 9, 4, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.existenciasBajas);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective], encapsulation: 2 });


/***/ }),

/***/ 7664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/settings.service */ 452);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/registro.service */ 23);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ 7500);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






class PagesComponent {
    constructor(settingsService, registroService) {
        this.settingsService = settingsService;
        this.registroService = registroService;
        this.datos = JSON.parse(localStorage.getItem('datos'));
        // this.restaurarSesion();
    }
    ngOnInit() {
        customInitFunctions();
        let hoy = new Date();
        this.fecha = hoy.toLocaleDateString();
        this.anio = hoy.getFullYear();
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_registro_service__WEBPACK_IMPORTED_MODULE_1__.RegistroService)); };
PagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 10, vars: 0, consts: [["id", "main-wrapper"], [1, "page-wrapper"], [1, "container-fluid"], [1, "col-12"], [1, "card"], [1, "card-body"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-header")(2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, dependencies: [_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 3899);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ 7664);
/* harmony import */ var _permisos_modulos_permisos_modulos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permisos-modulos/permisos-modulos.component */ 473);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var cm_angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cm-angular-dual-listbox */ 5830);
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-dual-listbox */ 9317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);




// Modulos










class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        cm_angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__.CmAngularDualListboxModule,
        angular_dual_listbox__WEBPACK_IMPORTED_MODULE_12__.AngularDualListBoxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        _pages_component__WEBPACK_IMPORTED_MODULE_4__.PagesComponent,
        _permisos_modulos_permisos_modulos_component__WEBPACK_IMPORTED_MODULE_5__.PermisosModulosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        cm_angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__.CmAngularDualListboxModule,
        angular_dual_listbox__WEBPACK_IMPORTED_MODULE_12__.AngularDualListBoxModule], exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        _pages_component__WEBPACK_IMPORTED_MODULE_4__.PagesComponent] }); })();


/***/ }),

/***/ 3360:
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 7664);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4789);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/auth.guard */ 5107);
/* harmony import */ var _permisos_modulos_permisos_modulos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permisos-modulos/permisos-modulos.component */ 473);
/* harmony import */ var _generar_documento_generar_documento_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generar-documento/generar-documento.component */ 9085);
/* harmony import */ var _mis_seguimientos_mis_seguimientos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mis-seguimientos/mis-seguimientos.component */ 759);
/* harmony import */ var _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lista-usuarios/lista-usuarios.component */ 9123);
/* harmony import */ var _por_contestar_por_contestar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../por-contestar/por-contestar.component */ 4138);
/* harmony import */ var _estadistico_general_estadistico_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../estadistico-general/estadistico-general.component */ 4020);
/* harmony import */ var _cambio_password_cambio_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cambio-password/cambio-password.component */ 7642);
/* harmony import */ var _app_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/existencias/existencias.component */ 7947);
/* harmony import */ var _app_genera_requisicion_genera_requisicion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/genera-requisicion/genera-requisicion.component */ 4471);
/* harmony import */ var _app_requisiciones_pendientes_requisiciones_pendientes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/requisiciones-pendientes/requisiciones-pendientes.component */ 7702);
/* harmony import */ var _app_reporte_movimientos_x_partida_reporte_movimientos_x_partida_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/reporte-movimientos-x-partida/reporte-movimientos-x-partida.component */ 8892);
/* harmony import */ var _app_reporte_existencia_x_partida_reporte_existencia_x_partida_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/reporte-existencia-x-partida/reporte-existencia-x-partida.component */ 5422);
/* harmony import */ var _app_reporte_compras_reporte_compras_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/reporte-compras/reporte-compras.component */ 9909);
/* harmony import */ var _app_alta_articulo_alta_articulo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/alta-articulo/alta-articulo.component */ 885);
/* harmony import */ var _app_lista_movimientos_lista_movimientos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/lista-movimientos/lista-movimientos.component */ 8779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);





















const routes = [
    {
        path: 'dashboard',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'permisos-modulos', component: _permisos_modulos_permisos_modulos_component__WEBPACK_IMPORTED_MODULE_3__.PermisosModulosComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'generar-documento', component: _generar_documento_generar_documento_component__WEBPACK_IMPORTED_MODULE_4__.GenerarDocumentoComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'mis-seguimientos', component: _mis_seguimientos_mis_seguimientos_component__WEBPACK_IMPORTED_MODULE_5__.MisSeguimientosComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'lista-usuarios', component: _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_6__.ListaUsuariosComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'por-contestar', component: _por_contestar_por_contestar_component__WEBPACK_IMPORTED_MODULE_7__.PorContestarComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'estadistico-general', component: _estadistico_general_estadistico_general_component__WEBPACK_IMPORTED_MODULE_8__.EstadisticoGeneralComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'cambio-password', component: _cambio_password_cambio_password_component__WEBPACK_IMPORTED_MODULE_9__.CambioPasswordComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'existencias', component: _app_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_10__.ExistenciasComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'generar-requisicion', component: _app_genera_requisicion_genera_requisicion_component__WEBPACK_IMPORTED_MODULE_11__.GeneraRequisicionComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'requisiciones-pendientes', component: _app_requisiciones_pendientes_requisiciones_pendientes_component__WEBPACK_IMPORTED_MODULE_12__.RequisicionesPendientesComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'reporte_movimiento_x_partida', component: _app_reporte_movimientos_x_partida_reporte_movimientos_x_partida_component__WEBPACK_IMPORTED_MODULE_13__.ReporteMovimientosXPartidaComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'reporte_existencias_x_partida', component: _app_reporte_existencia_x_partida_reporte_existencia_x_partida_component__WEBPACK_IMPORTED_MODULE_14__.ReporteExistenciaXPartidaComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'reporte_compras', component: _app_reporte_compras_reporte_compras_component__WEBPACK_IMPORTED_MODULE_15__.ReporteComprasComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'agregar-articulo', component: _app_alta_articulo_alta_articulo_component__WEBPACK_IMPORTED_MODULE_16__.AltaArticuloComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
            { path: 'lista-movimientos', component: _app_lista_movimientos_lista_movimientos_component__WEBPACK_IMPORTED_MODULE_17__.ListaMovimientosComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] }
        ]
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 473:
/*!**********************************************************************!*\
  !*** ./src/app/pages/permisos-modulos/permisos-modulos.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermisosModulosComponent": () => (/* binding */ PermisosModulosComponent)
/* harmony export */ });
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 3899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/traer-datos.service */ 5735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function PermisosModulosComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermisosModulosComponent_tr_11_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const user_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.datos(user_r1.cargo, user_r1.idcargo)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r1.idcargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r1.cargo);
} }
class PermisosModulosComponent {
    constructor(traer) {
        this.traer = traer;
        this.datoss = JSON.parse(localStorage.getItem('datos'));
        this.mailusu = this.datoss.correop;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
        this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.uri_api;
        this.users = [];
        this.us = [];
        this.checkControlEscolar = true;
        this.checkProgramExtra = true;
        this.checkCatalogos = true;
        this.checkUsuarios = true;
        this.checkOvh = true;
        this.checkPreinscripcion = true;
        this.checkPermisos = true;
        this.checkAjedrez = true;
        this.checkDescargas = true;
        this.checkReapertura = true;
    }
    ngOnInit() {
        this.traerUsuarios();
        console.log(this.mailusu);
    }
    traerUsuarios() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            searching: true,
            processing: true,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
            }
        };
        this.traer.http.get(this.API_URI + `/getCargos`).subscribe(res => {
            this.users = res;
            //  console.log(res)
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    openPermisos(idcargo) {
        // this.datosStorage=JSON.parse(localStorage.getItem('datos')!);
        // this.cargoperfil=this.datosStorage.cargodb;
        this.traer.http.get(this.API_URI + `/getPermisos/${idcargo}`)
            .subscribe((res) => {
            console.log(res);
            this.us = res;
            this.VerModulos();
        });
    }
    VerModulos() {
        if (this.us[0].control_escolar == false) {
            this.checkControlEscolar = false;
        }
        else {
            this.checkControlEscolar = true;
        }
        if (this.us[0].programas_extra == false) {
            this.checkProgramExtra = false;
        }
        else {
            this.checkProgramExtra = true;
        }
        if (this.us[0].catalogos == false) {
            this.checkCatalogos = false;
        }
        else {
            this.checkCatalogos = true;
        }
        if (this.us[0].usuarios == false) {
            this.checkUsuarios = false;
        }
        else {
            this.checkUsuarios = true;
        }
        if (this.us[0].ovh == false) {
            this.checkOvh = false;
        }
        else {
            this.checkOvh = true;
        }
        if (this.us[0].preinscripcion == false) {
            this.checkPreinscripcion = false;
        }
        else {
            this.checkPreinscripcion = true;
        }
        if (this.us[0].permisos_modulos == false) {
            this.checkPermisos = false;
        }
        else {
            this.checkPermisos = true;
        }
        if (this.us[0].ajedrez == false) {
            this.checkAjedrez = false;
        }
        else {
            this.checkAjedrez = true;
        }
        if (this.us[0].descargas == false) {
            this.checkDescargas = false;
        }
        else {
            this.checkDescargas = true;
        }
        if (this.us[0].reapertura == false) {
            this.checkReapertura = false;
        }
        else {
            this.checkReapertura = true;
        }
    }
    testCheckControlEscolar(event) {
        console.log(event.target.checked);
        this.us[0].control_escolar = event.target.checked;
        console.log(this.us);
    }
    testCheckProgramExtra(event) {
        console.log(event.target.checked);
        this.us[0].programas_extra = event.target.checked;
        console.log(this.us);
    }
    testCheckCatalogos(event) {
        console.log(event.target.checked);
        this.us[0].catalogos = event.target.checked;
        console.log(this.us);
    }
    testCheckUsuarios(event) {
        console.log(event.target.checked);
        this.us[0].usuarios = event.target.checked;
        console.log(this.us);
    }
    testCheckOvh(event) {
        console.log(event.target.checked);
        this.us[0].ovh = event.target.checked;
        console.log(this.us);
    }
    testCheckPreinscripcion(event) {
        console.log(event.target.checked);
        this.us[0].preinscripcion = event.target.checked;
        console.log(this.us);
    }
    testCheckPermisos(event) {
        console.log(event.target.checked);
        this.us[0].permisos_modulos = event.target.checked;
        console.log(this.us);
    }
    testCheckAjedrez(event) {
        console.log(event.target.checked);
        this.us[0].ajedrez = event.target.checked;
        console.log(this.us);
    }
    testCheckDescargas(event) {
        console.log(event.target.checked);
        this.us[0].descargas = event.target.checked;
        console.log(this.us);
    }
    testCheckReapertura(event) {
        console.log(event.target.checked);
        this.us[0].reapertura = event.target.checked;
        console.log(this.us);
    }
    savePermisos() {
        this.traer.http.post(this.API_URI + `/savePermisos/${this.us[0].idcargo}/${this.mailusu}`, this.us[0], {})
            .subscribe((res) => {
            if (res == "Actualizados") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Permisos Actualizados',
                    showConfirmButton: false,
                    timer: 1500
                });
                location.reload();
            }
            else {
                console.log("Error al actualizar");
            }
            console.log(res);
        });
    }
    datos(cargo, idcargo) {
        this.cargo = cargo;
        this.idcargo = idcargo;
        console.log(this.idcargo);
        this.openPermisos(this.idcargo);
    }
}
PermisosModulosComponent.ɵfac = function PermisosModulosComponent_Factory(t) { return new (t || PermisosModulosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_3__.TraerDatosService)); };
PermisosModulosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PermisosModulosComponent, selectors: [["app-permisos-modulos"]], viewQuery: function PermisosModulosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 90, vars: 14, consts: [[1, "mt-5", 2, "width", "95%"], ["datatable", "", 1, "table", "table-striped", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [2, "color", "brown"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["id", "ejemplo", 1, "table", 2, "padding", "60px", "width", "50%"], [2, "font-size", "12px", "text-align", "center"], [2, "text-align", "center"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault2", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault3", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault4", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault4", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault5", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault5", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault6", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault6", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault7", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault7", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault8", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault8", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault9", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault9", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault10", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault10", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-primary", 3, "click"]], template: function PermisosModulosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Permisos M\u00F3dulos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PermisosModulosComponent_tr_11_Template, 8, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3)(13, "div", 4)(14, "div", 5)(15, "div", 6)(16, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Permisos M\u00F3dulos De: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10)(22, "table", 11)(23, "thead")(24, "tr", 12)(25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Control Escolar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Program. Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Cat\u00E1logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Pagos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Preinscripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Permisos Modulos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Ajedrez");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Descargas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Reapertura por plantel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "tbody", 13)(46, "tr", 13)(47, "td")(48, "div", 14)(49, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_49_listener($event) { return ctx.testCheckControlEscolar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "td")(52, "div", 14)(53, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_53_listener($event) { return ctx.testCheckProgramExtra($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td")(56, "div", 14)(57, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_57_listener($event) { return ctx.testCheckCatalogos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td")(60, "div", 14)(61, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_61_listener($event) { return ctx.testCheckUsuarios($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "td")(64, "div", 14)(65, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_65_listener($event) { return ctx.testCheckOvh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "td")(68, "div", 14)(69, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_69_listener($event) { return ctx.testCheckPreinscripcion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "td")(72, "div", 14)(73, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_73_listener($event) { return ctx.testCheckPermisos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "td")(76, "div", 14)(77, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_77_listener($event) { return ctx.testCheckAjedrez($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "td")(80, "div", 14)(81, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_81_listener($event) { return ctx.testCheckDescargas($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "td")(84, "div", 14)(85, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PermisosModulosComponent_Template_input_change_85_listener($event) { return ctx.testCheckReapertura($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 35)(88, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermisosModulosComponent_Template_button_click_88_listener() { return ctx.savePermisos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkControlEscolar);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkProgramExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkCatalogos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkUsuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkOvh);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkPreinscripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkPermisos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkAjedrez);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkDescargas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checkReapertura);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNvcy1tb2R1bG9zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4138:
/*!**********************************************************!*\
  !*** ./src/app/por-contestar/por-contestar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PorContestarComponent": () => (/* binding */ PorContestarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traer-datos.service */ 5735);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 3899);










function PorContestarComponent_div_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const area_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", area_r25.clave);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r25.nombre_completo);
} }
function PorContestarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00C1rea");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_div_6_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.areas2 = $event); })("change", function PorContestarComponent_div_6_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.traerDatosPorContestarCombo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PorContestarComponent_div_6_ng_container_5_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.areas2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.areasLocales2);
} }
function PorContestarComponent_tr_37_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 74);
} }
function PorContestarComponent_tr_37_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 75);
} }
function PorContestarComponent_tr_37_i_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 76);
} }
function PorContestarComponent_tr_37_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 77);
} }
function PorContestarComponent_tr_37_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorContestarComponent_tr_37_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const contestar_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.ObtenerIdyAreaEmite(contestar_r29.id, contestar_r29.area_que_emite, contestar_r29.folio_unico)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_tr_37_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorContestarComponent_tr_37_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const contestar_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.VerDocumentoRespuesta(contestar_r29.url_respuesta)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_tr_37_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorContestarComponent_tr_37_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const contestar_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.ObtenerIdyAreaEmite(contestar_r29.id, contestar_r29.area_que_emite, contestar_r29.folio_unico)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_tr_37_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorContestarComponent_tr_37_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51); const contestar_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.ObtenerIdyAreaEmite(contestar_r29.id, contestar_r29.area_que_emite, contestar_r29.folio_unico)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_tr_37_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorContestarComponent_tr_37_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54); const contestar_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r52.ObtenerIdyAreaEmite(contestar_r29.id, contestar_r29.area_que_emite, contestar_r29.folio_unico)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_tr_37_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorContestarComponent_tr_37_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r57); const contestar_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r55.ObtenerFolioyId(contestar_r29.id, contestar_r29.folio_unico)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PorContestarComponent_tr_37_i_20_Template, 1, 0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PorContestarComponent_tr_37_i_21_Template, 1, 0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, PorContestarComponent_tr_37_i_22_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PorContestarComponent_tr_37_i_23_Template, 1, 0, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td", 11)(25, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorContestarComponent_tr_37_Template_button_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59); const contestar_r29 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r58.VerDocPeticion(contestar_r29.id, contestar_r29.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, PorContestarComponent_tr_37_button_28_Template, 2, 0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, PorContestarComponent_tr_37_button_29_Template, 2, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PorContestarComponent_tr_37_button_30_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, PorContestarComponent_tr_37_button_31_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, PorContestarComponent_tr_37_button_32_Template, 2, 0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, PorContestarComponent_tr_37_button_36_Template, 2, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const contestar_r29 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contestar_r29.referencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contestar_r29.tipo_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contestar_r29.folio_unico);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contestar_r29.prioridad);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contestar_r29.asunto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contestar_r29.nombre_completo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 19, contestar_r29.fecha_documento, "dd/MM/yy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 22, contestar_r29.fecha_limite_respuesta, "dd/MM/yy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_proceso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_atendido);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_conocimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_no_atendido);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_proceso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_atendido);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_conocimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.auxiliarConocimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.auxiliarAtencion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contestar_r29.atendido_por);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contestar_r29.guia_proceso && (ctx_r1.NumeroPermiso == 4 || ctx_r1.NumeroPermiso == 2));
} }
function PorContestarComponent_small_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_small_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_small_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_small_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_small_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_small_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54)(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enviar Respuesta");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function PorContestarComponent_small_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_small_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PorContestarComponent_ng_container_194_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PorContestarComponent_ng_container_194_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63); const multiple_r60 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r62.CapturaCheck(multiple_r60.id_centrotrabajo)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 88)(3, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const multiple_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "flexCheckDefault", i_r61, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("for", "flexCheckDefault", i_r61, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](multiple_r60.nombre_completo);
} }
function PorContestarComponent_div_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54)(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class PorContestarComponent {
    constructor(traer, modal) {
        this.traer = traer;
        this.modal = modal;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        this.porContestar = [];
        this.guiones = false;
        this.otro = false;
        this.mostrarBoton = false;
        this.botonReenviar = false;
        this.areas = [];
        this.areasLocales = [];
        this.opcionSeleccionada = '';
        this.documento = {
            tipo: '',
            tipoAtencion: 'Respuesta',
            personaQueEmite: localStorage.getItem('nombre'),
            tipoDocumento: '',
            referenciaDocumento: '',
            fechaRespuesta: null,
            resumen: '',
            nombreAreaEmite: localStorage.getItem('nombreArea'),
            nombreAreaTurnada: '',
            atendidoPor: '',
            id_departamentox: parseInt(localStorage.getItem('id_departamento'))
        };
        this.documentosinPDF = {
            tipoAtencion: 'Respuesta',
            personaQueEmite: localStorage.getItem('nombre'),
            tipoDocumento: '',
            fechaRespuesta: null,
            resumen: '',
            nombreAreaEmite: localStorage.getItem('nombreArea'),
            nombreAreaTurnada: '',
            url_respuesta: 'Sin PDF',
            atendidoPor: '',
            id_departamentox: parseInt(localStorage.getItem('id_departamento'))
        };
        this.areas2 = [];
        this.areasLocales2 = [];
        this.deptosPorDireccion = [];
        this.deptosPorDireccion2 = [];
        this.dg = false;
        this.result = [];
        this.multipleEnvio = [];
        this.fecha_registrox = '';
        this.auxiliarPorAtender = false;
        this.auxiliarDeConocimiento = false;
        this.sinAtender = false;
    }
    ngOnInit() {
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var anio = fecha.getFullYear();
        if (dia < 10) {
            this.day = "0" + dia;
        }
        else {
            this.day = dia.toString();
        }
        if (mes < 10) {
            this.month = "0" + mes;
        }
        else {
            this.month = mes.toString();
        }
        this.fecha_registrox = this.day + "-" + this.month + "-" + anio;
        console.log(this.fecha_registrox);
        if (Number(localStorage.getItem('area')) == 99 && (Number(localStorage.getItem('permiso')) == 1 || Number(localStorage.getItem('permiso')) == 4)) {
            this.dg = true;
        }
        this.traerDatosPorContestar();
        this.traerAreasLocales();
        // this.traerdeptosPorDireccion();
        this.traerdeptosPorDireccion2();
        this.NumeroPermiso = parseInt(localStorage.getItem('permiso'));
    }
    traerDatosPorContestar() {
        var clave_area = localStorage.getItem('area');
        var clave_departamento = localStorage.getItem('id_departamento');
        var permiso = localStorage.getItem('permiso');
        $('#empleados').DataTable().clear();
        $('#empleados').DataTable().draw();
        $('#empleados').DataTable().destroy();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            searching: true,
            processing: true,
            destroy: true,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
            },
        };
        try {
            this.traer.http.get(this.API_URL + `/getDocPorContestar/${clave_area}/${clave_departamento}/${permiso}`)
                .subscribe((res) => {
                this.porContestar = res;
                console.log(res);
                this.dtTrigger.next();
                for (var i = 0; i < this.porContestar.length; i++) {
                    if (this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion == "Para su atención" && this.porContestar[i].estatus != "Sin atender") {
                        this.porContestar[i].guia_atendido = false;
                        this.porContestar[i].guia_conocimiento = false;
                        this.porContestar[i].guia_no_atendido = false;
                        this.auxiliarDeConocimiento = false;
                        this.auxiliarPorAtender = false;
                        this.porContestar[i].guia_proceso = true;
                    }
                    else if (this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion == "Para su conocimiento" && this.porContestar[i].estatus != "Sin atender") {
                        this.porContestar[i].guia_atendido = false;
                        this.porContestar[i].guia_proceso = false;
                        this.auxiliarDeConocimiento = false;
                        this.auxiliarPorAtender = false;
                        this.porContestar[i].guia_no_atendido = false;
                        this.porContestar[i].guia_conocimiento = true;
                    }
                    else if (this.porContestar[i].url_respuesta != null && this.porContestar[i].estatus == "Atendido") {
                        this.porContestar[i].guia_proceso = false;
                        this.porContestar[i].guia_conocimiento = false;
                        this.porContestar[i].guia_no_atendido = false;
                        this.auxiliarDeConocimiento = false;
                        this.auxiliarPorAtender = false;
                        this.porContestar[i].guia_atendido = true;
                    }
                    else if (this.porContestar[i].estatus == "Sin atender" && this.porContestar[i].tipo_atencion == "Para su atención") {
                        this.porContestar[i].guia_atendido = false;
                        this.porContestar[i].guia_proceso = false;
                        this.porContestar[i].guia_conocimiento = false;
                        this.porContestar[i].auxiliarConocimiento = false;
                        this.porContestar[i].guia_no_atendido = true;
                        this.porContestar[i].auxiliarAtencion = true;
                    }
                    else if (this.porContestar[i].estatus == "Sin atender" && this.porContestar[i].tipo_atencion == "Para su conocimiento") {
                        this.porContestar[i].guia_atendido = false;
                        this.porContestar[i].guia_proceso = false;
                        this.porContestar[i].guia_conocimiento = false;
                        this.porContestar[i].auxiliarConocimiento = true;
                        this.porContestar[i].guia_no_atendido = true;
                        this.porContestar[i].auxiliarConocimiento = true;
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    Capturar() {
        this.tipo = this.opcionSeleccionada;
        this.traer.http.get(this.API_URL + `/traerAreas/${this.tipo}`)
            .subscribe((res) => {
            this.areas = res;
            console.log(this.areas);
        });
    }
    VerDocPeticion(id, url) {
        var a = url.toString();
        var ruta = (a.replaceAll('/', '-'));
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
            }), responseType: 'blob'
        };
        this.traer.http.get(this.API_URL + `/traerNombreArchivo/${ruta}`, httpOptions).subscribe((res) => {
            console.log(res);
            var file = new Blob([res], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
        });
    }
    VerDocumentoRespuesta(url) {
        var a = url.toString();
        var ruta = (a.replaceAll('/', '-'));
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
            }), responseType: 'blob'
        };
        this.traer.http.get(this.API_URL + `/traerNombreArchivoRespuesta/${ruta}`, httpOptions).subscribe((res) => {
            console.log(res.type);
            if (res.type == "application/json") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: 'info',
                    title: 'Respuesta sin PDF',
                    html: '<p>este documento fue turnado como <strong>De Conocimiento</strong> por lo que no fue necesario un documento de respuesta</p>'
                });
            }
            else {
                var file = new Blob([res], { type: 'application/pdf' });
                var fileURL = URL.createObjectURL(file);
                console.log(fileURL);
                window.open(fileURL);
            }
        });
    }
    ObtenerIdyAreaEmite(id, areaEmite, folio_unico) {
        console.log("ID: " + id);
        this.folioUnico = folio_unico;
        console.log("F_U:" + this.folioUnico);
        this.idDocumento = id;
        this.traer.http.get(this.API_URL + `/traerNombreAreaEmite/${areaEmite}`).subscribe((res) => {
            this.areaTurnada = res[0].nombre_completo;
            this.documento.nombreAreaTurnada = this.areaTurnada;
            this.documentosinPDF.nombreAreaTurnada = this.areaTurnada;
        });
    }
    GenerarDocumentoRespuesta(form) {
        if (form.invalid) {
            console.log('Formulario Invalido');
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Operación no realizada', '¡Complete todos los campos!', 'error');
            Object.values(form.controls).forEach(control => {
                control.markAllAsTouched();
            });
            return;
        }
        else {
            this.numidentificador = Date.now();
            var Idarea = localStorage.getItem('area');
            console.log(Idarea);
            this.traer.http.post(this.API_URL + `/generarDocumentoRespuesta/${this.numidentificador}/${Idarea}/${this.idDocumento}/${this.folioUnico}/${this.fecha_registrox}`, this.documento).subscribe((res) => {
                let datos1 = JSON.stringify(res);
                let datos2 = JSON.parse(datos1);
                if (res == "Repetido") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        icon: 'warning',
                        title: '¡Documento duplicado!',
                        text: 'Esta petición ya fue contestada'
                    });
                }
                else {
                    if (datos2.mensaje == "Registrado") {
                        if (datos2.incremento < 10) {
                            var incremento = "0000" + datos2.incremento;
                        }
                        else if (datos2.incremento < 100) {
                            var incremento = "000" + datos2.incremento;
                        }
                        else if (datos2.incremento < 1000) {
                            var incremento = "00" + datos2.incremento;
                        }
                        else if (datos2.incremento < 10000) {
                            var incremento = "0" + datos2.incremento;
                        }
                        var fecha = new Date();
                        var anio = fecha.getFullYear();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            icon: 'success',
                            title: '¡Respuesta Realizada!',
                            confirmButtonColor: '#59d65a',
                            html: 'Número de Folio único: <h2>' + anio + '/' + incremento + '</h2>'
                        });
                        setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                    this.subirPDF();
                }
                if (this.subirPDF) {
                    // $('#exampleModal').modal('hide');
                    // (document.getElementById('exampleModal') as HTMLInputElement).hidden=true;            
                    this.traerDatosPorContestar();
                }
            }, (err) => {
                console.log(err);
            });
        }
    }
    // *************
    GenerarDocumentoRespuestaSinPDF(form) {
        console.log(form.invalid);
        console.log(form);
        if (form.invalid) {
            console.log('Formulario Invalido');
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Operación no realizadaxx', '¡Complete todos los campos!', 'error');
            Object.values(form.controls).forEach(control => {
                control.markAllAsTouched();
            });
            return;
        }
        else {
            var Idarea = localStorage.getItem('area');
            console.log(Idarea);
            this.traer.http.post(this.API_URL + `/generarDocumentoRespuestaSinPDF/${Idarea}/${this.idDocumento}/${this.folioUnico}/${this.fecha_registrox}`, this.documentosinPDF).subscribe((res) => {
                let datos1 = JSON.stringify(res);
                let datos2 = JSON.parse(datos1);
                if (datos2.mensaje == "Registrado") {
                    if (datos2.incremento < 10) {
                        var incremento = "0000" + datos2.incremento;
                    }
                    else if (datos2.incremento < 100) {
                        var incremento = "000" + datos2.incremento;
                    }
                    else if (datos2.incremento < 1000) {
                        var incremento = "00" + datos2.incremento;
                    }
                    else if (datos2.incremento < 10000) {
                        var incremento = "0" + datos2.incremento;
                    }
                    var fecha = new Date();
                    var anio = fecha.getFullYear();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        icon: 'success',
                        title: '¡Respuesta Realizada!',
                        confirmButtonColor: '#59d65a',
                        html: 'Número de Folio único: <h2>' + anio + '/' + incremento + '</h2>'
                    });
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
                else {
                    console.log("Error al guardar la respuesta");
                }
                this.traerDatosPorContestar();
            }, (err) => {
                console.log(err);
            });
        }
    }
    // ****
    subirPDF() {
        const formdata = new FormData();
        for (var i = 0; i < this.myFiles.length; i++) {
            formdata.append('files', this.myFiles[i]);
        }
        var areaAlmacenaDoc = parseInt(localStorage.getItem('area'));
        if (areaAlmacenaDoc == 99) {
            var areaDocumento = "Direccion";
        }
        else if (areaAlmacenaDoc == 98) {
            var areaDocumento = "Academica";
        }
        else if (areaAlmacenaDoc == 97) {
            var areaDocumento = "Administrativa";
        }
        else if (areaAlmacenaDoc == 96) {
            var areaDocumento = "Vinculacion";
        }
        else if (areaAlmacenaDoc == 95) {
            var areaDocumento = "Planeacion";
        }
        else if (areaAlmacenaDoc == 94) {
            var areaDocumento = "Tecnologia";
        }
        else if (areaAlmacenaDoc == 93) {
            var areaDocumento = "Juridico";
        }
        else if (areaAlmacenaDoc == 92) {
            var areaDocumento = "Transparencia";
        }
        else if (areaAlmacenaDoc == 91) {
            var areaDocumento = "UnidadGenero";
        }
        else if (areaAlmacenaDoc == 90) {
            var areaDocumento = "Oficialia";
        }
        console.log(formdata);
        this.traer.http.post(this.API_URL + `/agregarArchivoRespuesta/${this.numidentificador}/${areaDocumento}`, formdata).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    upload(event) {
        if (event.target.files.length > 0) {
            this.myFiles = event.target.files;
            console.log(this.myFiles);
            this.mostrarBoton = true;
        }
        else {
            console.log("NO");
            this.mostrarBoton = false;
        }
    }
    // add
    traerDatosPorContestarCombo() {
        console.log("valor del combo " + this.areas);
        var clave_area = this.areas2;
        var clave_departamento = localStorage.getItem('id_departamento');
        var permiso = localStorage.getItem('permiso');
        console.log("Valor de clave_area " + clave_area);
        $('#empleados').DataTable().clear();
        $('#empleados').DataTable().draw();
        $('#empleados').DataTable().destroy();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            searching: true,
            processing: true,
            destroy: true,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
            },
        };
        try {
            this.traer.http.get(this.API_URL + `/getDocPorContestar/${clave_area}/${clave_departamento}/${permiso}`)
                .subscribe((res) => {
                this.porContestar = res;
                console.log(res);
                this.dtTrigger.next();
                for (var i = 0; i < this.porContestar.length; i++) {
                    if (this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion == "Para su atención") {
                        this.porContestar[i].guia_atendido = false;
                        this.porContestar[i].guia_proceso = true;
                        this.porContestar[i].guia_conocimiento = false;
                    }
                    else if (this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion == "Para su conocimiento") {
                        this.porContestar[i].guia_atendido = false;
                        this.porContestar[i].guia_proceso = false;
                        this.porContestar[i].guia_conocimiento = true;
                    }
                    else if (this.porContestar[i].url_respuesta != null) {
                        this.porContestar[i].guia_atendido = true;
                        this.porContestar[i].guia_proceso = false;
                        this.porContestar[i].guia_conocimiento = false;
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    traerAreasLocales() {
        console.log("ENtro");
        this.traer.http.get(this.API_URL + `/traerAreasLocales`)
            .subscribe((res) => {
            this.areasLocales2 = res;
            console.log(this.areasLocales);
        });
    }
    // traerdeptosPorDireccion(){   // Trae opcion de Mas de uno
    //   var idDireccion=localStorage.getItem('area');
    //       this.traer.http.get( this.API_URL+`/traerDeptosPorDireccion/${idDireccion}`)
    //       .subscribe((res:any)=>{
    //         this. deptosPorDireccion=res;
    //         console.log(this. deptosPorDireccion);
    //       });
    // }
    traerdeptosPorDireccion2() {
        var idDireccion = localStorage.getItem('area');
        this.traer.http.get(this.API_URL + `/traerDeptosPorDireccion2/${idDireccion}`)
            .subscribe((res) => {
            this.deptosPorDireccion2 = res;
            console.log(this.deptosPorDireccion2);
        });
    }
    CapturaCheck(dato) {
        if (this.result.includes(dato)) {
            this.result = this.multipleEnvio.filter(i => i != dato);
            this.multipleEnvio = this.result;
            console.log(this.multipleEnvio);
        }
        else {
            this.multipleEnvio.push(dato);
            this.result = this.multipleEnvio;
            console.log(this.multipleEnvio);
        }
        if (this.multipleEnvio.length == 0) {
            this.botonReenviar = false;
        }
        else if (this.multipleEnvio.length > 0) {
            this.botonReenviar = true;
        }
    }
    ObtenerFolioyId(id, folio_unico) {
        this.folioUnico = folio_unico;
        this.idDocumento = id;
        console.log(this.folioUnico);
        console.log(this.idDocumento);
    }
    reenviar() {
        if (this.multipleEnvio.length == 1) {
            this.traer.http.post(this.API_URL + `/reenviarUnDepto/${this.idDocumento}`, this.multipleEnvio)
                .subscribe((res) => {
                console.log(res);
                if (res == "Editado") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: 'Acción exitosa',
                        icon: 'success',
                        text: 'La reasignación del documento fue realizada ',
                        showConfirmButton: false
                    });
                }
                setTimeout(function () {
                    location.reload();
                }, 1500);
            });
        }
        else if (this.multipleEnvio.length >= 2) {
            var areaTurnada = localStorage.getItem('area');
            this.traer.http.post(this.API_URL + `/reenviarVariosDeptos/${this.idDocumento}/${areaTurnada}`, this.multipleEnvio)
                .subscribe((res) => {
                console.log(res);
                if (res == "Masivo") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: 'Acción exitosa',
                        icon: 'success',
                        text: 'La reasignación del documento fue realizada ',
                        showConfirmButton: false
                    });
                }
                setTimeout(function () {
                    location.reload();
                }, 1500);
            });
        }
    }
}
PorContestarComponent.ɵfac = function PorContestarComponent_Factory(t) { return new (t || PorContestarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_traer_datos_service__WEBPACK_IMPORTED_MODULE_2__.TraerDatosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
PorContestarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PorContestarComponent, selectors: [["app-por-contestar"]], decls: 196, vars: 32, consts: [[1, "titulo", 2, "margin", "0 auto", "text-align", "center", "margin-top", "20px"], [1, "mt-2", "table-responsive"], ["class", "form-group col-md-3", 4, "ngIf"], ["id", "empleados", "datatable", "", 1, "table", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [2, "color", "#000"], [2, "text-align", "center", "width", "50px"], [2, "text-align", "center", "width", "130px"], [2, "text-align", "center", "width", "80px"], [2, "text-align", "center", "width", "350px"], [2, "text-align", "center", "width", "150px"], [2, "text-align", "center", "width", "200px"], [2, "text-align", "center"], [2, "text-align", "center", "width", "120px"], [2, "font-size", "15px"], [4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-row", "mt-5"], [1, "form-group", "col-md-4"], ["for", "inputEmail4"], ["id", "inputState", "name", "Tipo", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Origen", "ngModel"], ["class", "form-text text-danger animated fadeIn", 4, "ngIf"], ["for", "inputAddress"], ["type", "text", "name", "areaEmite", "id", "inputAddress", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "tipoAtencion", "id", "inputAddress", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-row"], ["type", "text", "name", "personaQueEmite", "id", "inputAddress", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputAddress2"], ["id", "inputState", "name", "TipoDocumento", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["TipoDoc", "ngModel"], ["selected", ""], ["type", "text", "name", "areaTurnada", "id", "inputAddress", "placeholder", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Referencia", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NumOficio", "ngModel"], ["type", "date", "name", "FechaRespuesta", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FechaRes", "ngModel"], ["type", "text", "name", "Resumen", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Comentario", "ngModel"], ["type", "text", "name", "AtendidoPor", "id", "inputAddress", "placeholder", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AtendidoPor", "ngModel"], ["for", "inputPassword4"], ["id", "file", "type", "file", "multiple", "multiple", "accept", ".pdf", "required", "", 1, "form-control", 3, "change"], ["class", "boton mt-5", "style", "margin: 0 auto;text-align: center;", 4, "ngIf"], ["id", "exampleModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["formu", "ngForm"], [1, "boton", "mt-5", 2, "margin", "0 auto", "text-align", "center"], ["type", "submit", 1, "btn", "btn-success", 2, "padding", "10px", "margin-right", "10px"], ["id", "exampleModal3", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm"], [1, "form-row", "mt-2"], [1, "form-row", "mt-3"], [1, "form-group", "col-md-3"], ["id", "inputState", "name", "AreaTurnada", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["AreaTurnada", "ngModel"], [3, "value"], ["class", " mdi mdi-checkbox-blank-circle", "title", "En proceso", "style", "color: #f07e32;", 4, "ngIf"], ["class", " mdi mdi-checkbox-blank-circle", "title", "Atendido", "style", "color: rgb(82, 167, 4);", 4, "ngIf"], ["class", " mdi mdi-checkbox-blank-circle", "title", "De conocimiento", "style", "color: rgb(24, 127, 245);", 4, "ngIf"], ["class", " mdi mdi-checkbox-blank-circle", "title", "No atendido", "style", "color: rgb(202, 17, 7);", 4, "ngIf"], ["type", "button", "title", "Abrir", 1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "mdi", "mdi-file-pdf", 2, "color", "#bb0606"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", "class", "btn btn-light", "title", "Subir Respuesta", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-light", "title", "Ver Respuesta", 3, "click", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal2", "class", "btn btn-light", "title", "Contestar", 3, "click", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal3", "class", "btn btn-light", "title", "Reenviar", 3, "click", 4, "ngIf"], ["title", "En proceso", 1, "mdi", "mdi-checkbox-blank-circle", 2, "color", "#f07e32"], ["title", "Atendido", 1, "mdi", "mdi-checkbox-blank-circle", 2, "color", "rgb(82, 167, 4)"], ["title", "De conocimiento", 1, "mdi", "mdi-checkbox-blank-circle", 2, "color", "rgb(24, 127, 245)"], ["title", "No atendido", 1, "mdi", "mdi-checkbox-blank-circle", 2, "color", "rgb(202, 17, 7)"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", "title", "Subir Respuesta", 1, "btn", "btn-light", 3, "click"], [1, "mdi", "mdi-upload", 2, "color", "rgb(187, 6, 6)"], ["type", "button", "title", "Ver Respuesta", 1, "btn", "btn-light", 3, "click"], [1, "mdi", "mdi-file-pdf", 2, "color", "rgb(187, 6, 6)"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal2", "title", "Contestar", 1, "btn", "btn-light", 3, "click"], [1, "mdi", "mdi-message-draw", 2, "color", "rgb(114, 113, 113)"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal3", "title", "Reenviar", 1, "btn", "btn-light", 3, "click"], [1, "mdi", "mdi-redo", 2, "color", "rgb(187, 6, 6)"], [1, "form-text", "text-danger", "animated", "fadeIn"], ["type", "checkbox", "value", "", 1, "form-check-input", "form-group", "col-md-2", 3, "id", "change"], [1, "form-check-label", 2, "padding-right", "10px", 3, "for"], [2, "font-size", "14px"]], template: function PorContestarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3")(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Documentos Por Atender");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PorContestarComponent_div_6_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "table", 3)(8, "thead")(9, "tr", 4)(10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "N\u00FAmero oficio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Folio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Prioridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Emitido por");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Fecha Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Fecha L\u00EDmite de respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Estatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Doc. Recibido");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Doc. Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Atendido por");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Reasignar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, PorContestarComponent_tr_37_Template, 37, 25, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 15)(39, "div", 16)(40, "div", 17)(41, "div", 18)(42, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Subir Documento de Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 20)(45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 22)(48, "form", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PorContestarComponent_Template_form_ngSubmit_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r64); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](49); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.GenerarDocumentoRespuesta(_r2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 25)(51, "div", 26)(52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Origen del documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "select", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_select_ngModelChange_54_listener($event) { return ctx.documento.tipo = $event; })("ngModelChange", function PorContestarComponent_Template_select_ngModelChange_54_listener($event) { return ctx.opcionSeleccionada = $event; })("change", function PorContestarComponent_Template_select_change_54_listener() { return ctx.Capturar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Interno");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Externo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, PorContestarComponent_small_60_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 26)(62, "label", 31)(63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\u00C1rea que emite");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_65_listener($event) { return ctx.documento.nombreAreaEmite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 26)(67, "label", 31)(68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Tipo de atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_70_listener($event) { return ctx.documento.tipoAtencion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 34)(72, "div", 26)(73, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Persona que lo emite");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_75_listener($event) { return ctx.documento.personaQueEmite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 26)(77, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Tipo de documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "select", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_select_ngModelChange_79_listener($event) { return ctx.documento.tipoDocumento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Seleccione...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Oficio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Tarjeta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Circular");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Memorandum");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Otro");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](95, PorContestarComponent_small_95_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 26)(97, "label", 31)(98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "\u00C1rea turnada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_100_listener($event) { return ctx.documento.nombreAreaTurnada = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 34)(102, "div", 26)(103, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "N\u00FAmero de oficio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_105_listener($event) { return ctx.documento.referenciaDocumento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, PorContestarComponent_small_107_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 26)(109, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Fecha de respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_111_listener($event) { return ctx.documento.fechaRespuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](113, PorContestarComponent_small_113_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 26)(115, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Comentario(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "input", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_117_listener($event) { return ctx.documento.resumen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, PorContestarComponent_small_119_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 34)(122, "div", 26)(123, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Atendido por");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "input", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_125_listener($event) { return ctx.documento.atendidoPor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](127, PorContestarComponent_small_127_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 26)(129, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Cargar Documento (solo .pdf)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PorContestarComponent_Template_input_change_131_listener($event) { return ctx.upload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](132, PorContestarComponent_div_132_Template, 3, 0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 52)(134, "div", 16)(135, "div", 17)(136, "div", 18)(137, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Respuesta sin archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "button", 20)(140, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 22)(143, "form", 23, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PorContestarComponent_Template_form_ngSubmit_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r64); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](144); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.GenerarDocumentoRespuestaSinPDF(_r16)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "div", 25)(146, "div", 26)(147, "label", 31)(148, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "\u00C1rea que emite");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_150_listener($event) { return ctx.documentosinPDF.nombreAreaEmite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "div", 26)(152, "label", 31)(153, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "Tipo de atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_155_listener($event) { return ctx.documentosinPDF.tipoAtencion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 26)(157, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, "Persona que lo emite");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_159_listener($event) { return ctx.documentosinPDF.personaQueEmite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "div", 34)(161, "div", 26)(162, "label", 31)(163, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "\u00C1rea turnada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_165_listener($event) { return ctx.documentosinPDF.nombreAreaTurnada = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "div", 26)(167, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Fecha de respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_169_listener($event) { return ctx.documentosinPDF.fechaRespuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](171, PorContestarComponent_small_171_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "div", 26)(173, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Acci\u00F3n de respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "input", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PorContestarComponent_Template_input_ngModelChange_175_listener($event) { return ctx.documentosinPDF.atendidoPor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](177, PorContestarComponent_small_177_Template, 2, 0, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "div", 54)(179, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "Enviar Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "div", 56)(182, "div", 57)(183, "div", 17)(184, "div", 18)(185, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Reasignar a...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "button", 20)(188, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div", 22)(191, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PorContestarComponent_Template_form_ngSubmit_191_listener() { return ctx.reenviar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 58)(193, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](194, PorContestarComponent_ng_container_194_Template, 5, 3, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](195, PorContestarComponent_div_195_Template, 3, 0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](55);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](80);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](106);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](112);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](118);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.porContestar);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.tipo)("ngModel", ctx.opcionSeleccionada);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.nombreAreaEmite);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.tipoAtencion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.personaQueEmite);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.tipoDocumento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.nombreAreaTurnada);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.referenciaDocumento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.fechaRespuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.resumen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documento.atendidoPor);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrarBoton);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documentosinPDF.nombreAreaEmite);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documentosinPDF.tipoAtencion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documentosinPDF.personaQueEmite);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documentosinPDF.nombreAreaTurnada);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documentosinPDF.fechaRespuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.documentosinPDF.atendidoPor);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.deptosPorDireccion2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.botonReenviar);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["@media (min-width: 768px) {\r\n    .modal-xl[_ngcontent-%COMP%] {\r\n      width: 90%;\r\n     max-width:1200px;\r\n    }\r\n  }\r\n\r\n  @media (min-width: 600px) {\r\n    .modal-sm[_ngcontent-%COMP%] {\r\n      width: 90%;\r\n     max-width:450px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvci1jb250ZXN0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO01BQ0UsVUFBVTtLQUNYLGdCQUFnQjtJQUNqQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0tBQ1gsZUFBZTtJQUNoQjtFQUNGIiwiZmlsZSI6InBvci1jb250ZXN0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1vZGFsLXhsIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICBtYXgtd2lkdGg6MTIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubW9kYWwtc20ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgIG1heC13aWR0aDo0NTBweDtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ 7490:
/*!***********************************************!*\
  !*** ./src/app/services/articulos.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticulosService": () => (/* binding */ ArticulosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ArticulosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
    }
    //  API_URI = environment.uri_api;
    crearArticulo(dto) {
        return this.http.post(`${this.API}/articulos`, dto);
    }
    obtenerArticulo(id) {
        return this.http.get(`${this.API}/articulos/${id}`);
    }
    listarArticulos() {
        return this.http.get(`${this.API}/articulos`);
    }
    actualizarArticulo(id, payload) {
        return this.http.put(`${this.API}/articulos/${id}`, payload);
    }
}
ArticulosService.ɵfac = function ArticulosService_Factory(t) { return new (t || ArticulosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ArticulosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArticulosService, factory: ArticulosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8709:
/*!**********************************************!*\
  !*** ./src/app/services/partidas.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartidasService": () => (/* binding */ PartidasService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PartidasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
    }
    listarPartidas() {
        return this.http.get(`${this.API}/partidas`);
    }
}
PartidasService.ɵfac = function PartidasService_Factory(t) { return new (t || PartidasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PartidasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PartidasService, factory: PartidasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23:
/*!**********************************************!*\
  !*** ./src/app/services/registro.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroService": () => (/* binding */ RegistroService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class RegistroService {
    constructor(http) {
        this.http = http;
        this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api;
        //'http://localhost:3000';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.uri_api + '/users';
        this.userToken = "";
    }
    addUsuario(usuario) {
        console.log(usuario);
        console.log("valor de usuario.cargo en addUsuario " + usuario.cargo);
        return this.http.post(this.url, usuario);
    }
    loginUsuario(email, password) {
        return this.http.get(this.url + '/' + email + '/' + password)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            if (res == "NoEncontrado") {
                return res;
            }
            else {
                localStorage.setItem('datos', JSON.stringify(res)); //Grabamos la respuesta del RES (token y cargodb) en formato JSON
                var datos = JSON.parse(localStorage.getItem('datos') || '{}'); //Pasamos los datos de STORAGE a  formato legible en consola
                var token = datos.token;
                this.guardarToken(token);
                return res;
            }
        }));
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('datos'); // Elimina datos del Storage (respuesta de la peticion (token y cargodb))
    }
    guardarToken(idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
    }
    // leerToken(){
    //   if(localStorage.getItem('token')){
    //     this.userToken=localStorage.getItem('token');
    //   }else{
    //     this.userToken='';
    //   }
    //   return this.userToken;
    // }
    // cargarSesionDesdeStorage() {
    //   const token = localStorage.getItem('token');
    //   const datos = localStorage.getItem('datos');
    //   if (token) {
    //     this.userToken = token;
    //   }
    //   if (datos) {
    //     try {
    //       return JSON.parse(datos); 
    //     } catch (e) {
    //       console.error('Error al parsear datos de sesión:', e);
    //       return null;
    //     }
    //   }
    //   return null;
    // }
    estaAutenticado() {
        let token;
        token = localStorage.getItem('token');
        var extraccion = "";
        if (token == null) {
            token = "";
        }
        extraccion = token.substring(0, 37);
        // console.log("--------"+token.length)
        if (token.length >= 150 && extraccion == "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.") {
            return true;
        }
        else {
            return false;
        }
    }
    getPlanteles() {
        var t = localStorage.getItem('token');
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'content-type': 'application/json',
            'Authorization': '' + t
        });
        return this.http.get(this.url, { headers: httpHeaders });
    }
    getCargos() {
        var t = localStorage.getItem('token');
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'content-type': 'application/json',
            'Authorization': '' + t
        });
        return this.http.get(this.url + '/cargos', { headers: httpHeaders });
    }
    actualizarPassword(email, password) {
        var t = localStorage.getItem('token');
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'content-type': 'application/json',
            'Authorization': '' + t
        });
        return this.http.get(this.url + '/actualizar/' + email + '/' + password, { headers: httpHeaders });
        //return this.http.get(this.url+'/cargos',{headers:httpHeaders});
        // return this.http.put(`${this.url}/actualizarPassword/${email}/${password}`,{headers:httpHeaders});
    }
    getDocentes(idplantel) {
        // console.log(idplantel)
        var t = localStorage.getItem('token');
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'content-type': 'application/json',
            'Authorization': '' + t
        });
        return this.http.get(`${this.API_URI}/docentesusuario/${idplantel}`, { headers: httpHeaders });
    }
    getDatosDocentes(numempleado) {
        console.log(numempleado);
        var t = localStorage.getItem('token');
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'content-type': 'application/json',
            'Authorization': '' + t
        });
        return this.http.get(`${this.API_URI}/docenteos/${numempleado}`, { headers: httpHeaders });
    }
    getpermodulos(cargodb) {
        var t = localStorage.getItem('token');
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'content-type': 'application/json',
            'Authorization': '' + t
        });
        return this.http.get(`${this.API_URI}/permodulos/${cargodb}`, { headers: httpHeaders });
    }
    getAdministrativo(idplantel) {
        // console.log(idplantel)
        var t = localStorage.getItem('token');
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'content-type': 'application/json',
            'Authorization': '' + t
        });
        return this.http.get(`${this.API_URI}/administrativousuario/${idplantel}`, { headers: httpHeaders });
    }
}
RegistroService.ɵfac = function RegistroService_Factory(t) { return new (t || RegistroService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RegistroService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RegistroService, factory: RegistroService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 452:
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SettingsService {
    constructor() {
        this.linkTheme = document.querySelector('#theme');
        const url = localStorage.getItem('theme') || './assets/css/colors/red.css';
        this.linkTheme.setAttribute('href', url);
    }
    changeTheme(theme) {
        const url = `./assets/css/colors/${theme}.css`;
        this.linkTheme.setAttribute('href', url);
        localStorage.setItem('theme', url);
        this.checkCurrentTheme();
    }
    checkCurrentTheme() {
        const links = document.querySelectorAll('.selector');
        links.forEach(elem => {
            elem.classList.remove('working');
            const btnTheme = elem.getAttribute('data-theme');
            const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
            const currentTheme = this.linkTheme.getAttribute('href');
            if (btnThemeUrl === currentTheme) {
                elem.classList.add('working');
            }
        });
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5613:
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarService": () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SidebarService {
    constructor() {
        this.menu = [
            {
                titulo: 'Almacén',
                icono: '',
                submenu: [
                    { titulo: 'Registrar Compra', url: 'generar-documento', mostrar: false },
                    { titulo: 'Recargar Stock', url: 'mis-seguimientos', mostrar: false },
                    { titulo: 'Existencias', url: 'existencias', mostrar: false },
                ]
            },
        ];
        this.menu2 = [
            {
                titulo: 'Buscar Documento',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Capturados', url: '', mostrar: false },
                    { titulo: 'Generados', url: '', mostrar: false },
                ]
            },
        ];
        this.menu3 = [
            {
                titulo: 'Transferencias',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Asignar Artículos', url: 'estadistico-general', mostrar: false },
                    // { titulo: 'Generar', url: 'Listadealumnos',mostrar:false },
                ]
            },
        ];
        this.menu4 = [
            {
                titulo: 'Requisiciones',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Generar', url: 'generar-requisicion', mostrar: false },
                    { titulo: 'Pendientes', url: 'requisiciones-pendientes', mostrar: false },
                    //  { titulo: 'Atendidas', url: 'Requisiciones-Atendidas',mostrar:false },
                ]
            },
        ];
        this.menu4B = [
            {
                titulo: 'Movimientos',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Salidas', url: 'lista-movimientos', mostrar: true },
                ]
            },
        ];
        this.menu55 = [
            {
                titulo: 'Artículos',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Agregar artículo', url: 'agregar-articulo', mostrar: true },
                ]
            },
        ];
        this.menu44 = [
            {
                titulo: 'Reportes',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Entradas', url: 'reporte_compras', mostrar: true },
                    { titulo: 'Salidas', url: 'reporte_movimiento_x_partida', mostrar: true },
                    { titulo: 'Existencias', url: 'reporte_existencias_x_partida', mostrar: true },
                ]
            },
        ];
        this.menu5 = [
            {
                titulo: 'Usuarios',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Ver usuarios', url: 'lista-usuarios', mostrar: false },
                ]
            },
        ];
        this.menu10 = [
            {
                titulo: 'Contraseña',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Cambiar', url: 'cambio-password', mostrar: false },
                ]
            },
        ];
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5735:
/*!*************************************************!*\
  !*** ./src/app/services/traer-datos.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraerDatosService": () => (/* binding */ TraerDatosService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);



class TraerDatosService {
    constructor(http) {
        this.http = http;
    }
}
TraerDatosService.ɵfac = function TraerDatosService_Factory(t) { return new (t || TraerDatosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TraerDatosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TraerDatosService, factory: TraerDatosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.datos = JSON.parse(localStorage.getItem('datos'));
        // this.cargo=this.datos.cargodb;
        this.plantel = this.datos.nombreArea;
        this.Nombre = this.datos.nombre;
        this.Correo = this.datos.correop;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 49, vars: 3, consts: [[1, "topbar"], [1, "navbar", "top-navbar", "navbar-expand-md", "navbar-light", 2, "background-color", "#ffffff"], [1, "navbar-header"], ["routerLink", "/dashboard", 1, "navbar-brand"], ["src", "./assets/images/home.png", "width", "30px", "height", "30px", "alt", "homepage", 1, "dark-logo"], ["src", "./assets/images/home.png", "width", "30px", "height", "30px", "alt", "homepage", 1, "light-logo"], [1, "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "nav-toggler", "hidden-md-up", "waves-effect", "waves-dark"], [1, "ti-menu", 2, "color", "#b40f0f"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "hidden-sm-down", "waves-effect", "waves-dark"], [1, "nav-item", "hidden-sm-down"], [1, "navbar-collapse", 2, "text-align", "center", "background", "transparent"], ["src", "./assets/images/pleca-diglet.jpg", "width", "660px", "height", "105px", 1, "rounded", "mx-auto", "d-block", 2, "background", "transparent"], [1, "navbar-nav", "my-lg-0"], [1, "nav-item", "dropdown"], ["href", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], ["src", "./assets/images/cecytev.ico", 1, "profile-pic"], [1, "dropdown-menu", "dropdown-menu-right", "animated", "fadeIn", "fast"], [1, "dropdown-user"], [1, "dw-user-box"], ["role", "separator", 1, "divider"], [2, "color", "#555555"], [1, "ti-home", 2, "color", "#b40f0f"], [1, "ti-user", 2, "color", "#b40f0f"], ["routerLink", "/login", 2, "color", "#b40f0f"], [1, "fa", "fa-power-off", 2, "color", "#646363"], [2, "text-align", "center"], [2, "color", "brown"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3)(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4)(6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8)(13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 15)(19, "li", 16)(20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19)(23, "ul", 20)(24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "li", 22)(38, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Cerrar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 28)(45, "strong", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bienvenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.plantel, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Correo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Nombre, "");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 7500);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent] }); })();


/***/ }),

/***/ 7500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/sidebar.service */ 5613);
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/registro.service */ 23);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function SidebarComponent_li_6_li_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r10.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r10.titulo, " ");
} }
function SidebarComponent_li_6_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_6_li_8_a_1_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subMenuItem_r10.mostrar);
} }
function SidebarComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidebarComponent_li_6_li_8_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r8.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r8.submenu.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r8.submenu);
} }
function SidebarComponent_li_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item3_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item3_r13.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item3_r13.submenu.length, " ");
} }
function SidebarComponent_li_7_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subMenuItem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r17.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r17.titulo, " ");
} }
function SidebarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_7_a_1_Template, 6, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_7_li_3_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item3_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.vertransferencias);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item3_r13.submenu);
} }
function SidebarComponent_li_8_li_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r20.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r20.titulo, " ");
} }
function SidebarComponent_li_8_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_8_li_8_a_1_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subMenuItem_r20.mostrar);
} }
function SidebarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidebarComponent_li_8_li_8_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item4_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item4_r18.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item4_r18.submenu.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item4_r18.submenu);
} }
function SidebarComponent_li_9_li_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r25.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r25.titulo, " ");
} }
function SidebarComponent_li_9_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_9_li_8_a_1_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subMenuItem_r25.mostrar);
} }
function SidebarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidebarComponent_li_9_li_8_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item4B_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item4B_r23.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item4B_r23.submenu.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item4B_r23.submenu);
} }
function SidebarComponent_li_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item55_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item55_r28.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item55_r28.submenu.length, " ");
} }
function SidebarComponent_li_10_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r32.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r32.titulo, " ");
} }
function SidebarComponent_li_10_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_10_li_3_a_1_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subMenuItem_r32.mostrar);
} }
function SidebarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_10_a_1_Template, 6, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_10_li_3_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item55_r28 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.verArticulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item55_r28.submenu);
} }
function SidebarComponent_li_11_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item44_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item44_r35.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item44_r35.submenu.length, " ");
} }
function SidebarComponent_li_11_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r39.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r39.titulo, " ");
} }
function SidebarComponent_li_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_11_li_3_a_1_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenuItem_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subMenuItem_r39.mostrar);
} }
function SidebarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_11_a_1_Template, 6, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_11_li_3_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item44_r35 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.verReportes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item44_r35.submenu);
} }
function SidebarComponent_li_12_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subMenuItem_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r44.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r44.titulo, " ");
} }
function SidebarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidebarComponent_li_12_li_8_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item5_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item5_r42.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item5_r42.submenu.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item5_r42.submenu);
} }
function SidebarComponent_li_13_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subMenuItem_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuItem_r47.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" * ", subMenuItem_r47.titulo, " ");
} }
function SidebarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidebarComponent_li_13_li_8_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item10_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item10_r45.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item10_r45.submenu.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item10_r45.submenu);
} }
class SidebarComponent {
    /////////////////////////////////////////////////////
    constructor(sidebarService, permodulos) {
        this.sidebarService = sidebarService;
        this.permodulos = permodulos;
        // Almacen
        this.resgistraCompra = true;
        this.recargaStock = true;
        this.existencias = true;
        // Requisiciones
        this.generarRequisicion = false;
        this.pendientes = false;
        this.atendidas = false;
        // Transferencias
        this.vertransferencias = false;
        this.verReportes = false;
        this.verArticulos = false;
        this.muestraUsuarios = false;
        this.menuItems = sidebarService.menu;
        this.menuItems2 = sidebarService.menu2;
        this.menuItems3 = sidebarService.menu3;
        this.menuItems4 = sidebarService.menu4;
        this.menuItems4B = sidebarService.menu4B;
        this.menuItems44 = sidebarService.menu44;
        this.menuItems55 = sidebarService.menu55;
        this.menuItems5 = sidebarService.menu5;
        this.menuItems10 = sidebarService.menu10;
    }
    ngOnInit() {
        this.getpetmisosModulos();
    }
    getpetmisosModulos() {
        var permiso = parseInt(localStorage.getItem('permiso'));
        if (permiso == 1) {
            //Almacen
            this.menuItems[0].submenu[0].mostrar = true;
            this.menuItems[0].submenu[1].mostrar = true;
            this.menuItems[0].submenu[2].mostrar = true;
            // Transferencias
            this.vertransferencias = true;
            // Requisiciones
            this.menuItems4[0].submenu[0].mostrar = false;
            this.menuItems4[0].submenu[1].mostrar = true;
            // Articulos
            // this.menuItems4[0].submenu[0].mostrar=false;
            // this.menuItems4[0].submenu[1].mostrar=true;
            this.verArticulos = true;
            this.menuItems55[0].submenu[0].mostrar = true;
            //Reportes
            this.verReportes = true;
        }
        else if (permiso == 3) {
            // ALMACEN
            this.menuItems[0].submenu[2].mostrar = true;
            this.menuItems[0].submenu[0].mostrar = false;
            this.menuItems[0].submenu[1].mostrar = false;
            //Transferencias
            this.vertransferencias = false;
            //  REQUISIONES
            this.menuItems4[0].submenu[0].mostrar = true;
            this.menuItems4[0].submenu[1].mostrar = true;
            //Reportes
            this.verReportes = false;
            // Articulos
            this.verArticulos = false;
            this.menuItems55[0].submenu[0].mostrar = false;
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_1__.RegistroService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 14, vars: 8, consts: [[1, "left-sidebar", 2, "background-color", "brown"], [1, "scroll-sidebar", 2, "background-color", "brown"], [1, "sidebar-nav", 2, "background-color", "brown"], ["id", "sidebarnav"], [1, "nav-small-cap", 2, "text-align", "center", "padding", "15px 0 1px 0"], ["src", "./assets/images/NuevoSICAI2.png", "alt", "Logo SICAI", 2, "width", "85%", "max-width", "170px"], ["style", "margin-top: 30px;", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [2, "margin-top", "30px"], ["href", "#", "aria-expanded", "false", 1, "has-arrow", "waves-effect", "waves-dark", 2, "text-decoration", "none", "background-color", "brown"], [1, "mdi", "mdi-store", 2, "color", "#FFF"], ["onmouseover", "this.style.cssText='color:Orange'", "onmouseout", "this.style.cssText='color:white'", 1, "hide-menu", 2, "color", "#FFF", "background-color", "brown"], ["id", "uno", 1, "label", "label-rouded", "label-themecolor", "pull-right", 2, "background-color", "rgb(103, 101, 101)"], ["aria-expanded", "false", 1, "collapse", 2, "background-color", "brown"], ["style", "text-decoration:none;color: #FFF;  background-color: brown;", "onmouseover", "this.style.cssText='color:orange'", "onmouseout", "this.style.cssText='color:white'", 3, "routerLink", 4, "ngIf"], ["onmouseover", "this.style.cssText='color:orange'", "onmouseout", "this.style.cssText='color:white'", 2, "text-decoration", "none", "color", "#FFF", "background-color", "brown", 3, "routerLink"], ["class", "has-arrow waves-effect waves-dark", "href", "#", "aria-expanded", "false", "style", "text-decoration:none; background-color: brown", 4, "ngIf"], [1, "mdi", "mdi-repeat", 2, "color", "#FFF", "background-color", "brown"], [1, "label", "label-rouded", "label-themecolor", "pull-right", 2, "background-color", "rgb(103, 101, 101)"], [1, "mdi", "mdi-file-document", 2, "color", "#FFF", "background-color", "brown"], ["onmouseover", "this.style.cssText='color:orange'", "onmouseout", "this.style.cssText='color:white'", 1, "hide-menu", 2, "color", "#FFF", "background-color", "brown"], ["style", "text-decoration:none;color: #FFF; background-color: brown", "onmouseover", "this.style.cssText='color:orange'", "onmouseout", "this.style.cssText='color:white'", 3, "routerLink", 4, "ngIf"], [1, "mdi", "mdi-account-switch", 2, "color", "#FFF", "background-color", "brown"], [1, "mdi", "mdi-view-module", 2, "color", "#FFF", "background-color", "brown"], [1, "mdi", "mdi-chart-areaspline", 2, "color", "#FFF", "background-color", "brown"], [1, "mdi", "mdi-account-multiple", 2, "color", "#FFF", "background-color", "brown"], [1, "mdi", "mdi-key", 2, "color", "#FFF", "background-color", "brown"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "aside", 0)(1, "div", 1)(2, "nav", 2)(3, "ul", 3)(4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SidebarComponent_li_6_Template, 9, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SidebarComponent_li_7_Template, 4, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidebarComponent_li_8_Template, 9, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SidebarComponent_li_9_Template, 9, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SidebarComponent_li_10_Template, 4, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SidebarComponent_li_11_Template, 4, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SidebarComponent_li_12_Template, 9, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 9, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems4B);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems10);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// export const environment = {
//   production: false
// };
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyChy6wZLk_OwgP_Zs8rWlcI29DRwkBCafM",
        authDomain: "contacto-9f96c.firebaseapp.com",
        projectId: "contacto-9f96c",
        storageBucket: "contacto-9f96c.appspot.com",
        messagingSenderId: "707598495946",
        appId: "1:707598495946:web:1708c22c2aa5aa904c4433",
        measurementId: "G-X89XNXH6TT"
    },
    uri_api: 'http://172.16.0.148:3000'
    // uri_api: 'http://172.16.0.4:3001'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 8999,
	"./hy-am.js": 8999,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2469,
	"./tg.js": 2469,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
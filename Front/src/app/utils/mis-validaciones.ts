import { AbstractControl, ValidatorFn } from "@angular/forms";

export class MisValidaciones{

  static limiteFechaNacimiento( control:AbstractControl){

    let anioActual = new Date().getFullYear()-10;

    let fechaEntrada = new Date(control.value).getFullYear();

    if(!(anioActual > fechaEntrada)){
      return{limiteFechaNacimiento:true}
    }

    return null;
  }


  // static numerosObligatorios(numero:number) : ValidatorFn {

  //   return function validar(control:AbstractControl){

  //     let cadenaNumero:number = parseInt(control.value);

  //     let cadenaString:string = cadenaNumero.toString();

  //     if (cadenaString.length == numero) {
  //       return {validar:true};
  //     }

  //     return null;
  //   }
  // }

}

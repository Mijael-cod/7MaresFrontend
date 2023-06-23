export class PlatillosDto {

    idPlatillos: number;
    nombrePlatillo: string;
    costoPlatillo: number;
    estadoPlatillo: number;

    categorias: number;
    tipoPlatillo: number;

    constructor(){
      this.estadoPlatillo = 1;
    }

}
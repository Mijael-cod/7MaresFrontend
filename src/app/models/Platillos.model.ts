import { Categorias } from "./Categorias.model";
import { TipoPlatillos } from "./TipoPlatillos.model";

export class Platillos{

    idPlatillos: number;
    nombrePlatillos: string;
    costoPlatillos: number;
    estadoPlatillos: number;

    categorias: Categorias;
    tipoPlatillo: TipoPlatillos;

}
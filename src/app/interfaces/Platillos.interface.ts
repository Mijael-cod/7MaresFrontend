import { ICategorias } from "./Categorias.interface";
import { ITipoPlatillos } from "./TipoPlatillos.interface";

export interface IPlatillos  {

    idPlatillos: number;
    nombrePlatillos: string;
    costoPlatillos: number;
    estadoPlatillos: number;

    categorias: ICategorias;
    tipoPlatillas: ITipoPlatillos;
    
}
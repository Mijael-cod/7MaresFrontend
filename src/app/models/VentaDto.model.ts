import { ClienteDto } from "./ClienteDto.model";

export class Venta {

    idVenta: number;
    idCliente: number;
    fechaVenta: string;
    estadoVenta: number;

    cliente: ClienteDto;
}
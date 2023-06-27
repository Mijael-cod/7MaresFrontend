export class ClienteDto{

    idCliente: number;
    nombreCliente: string;
    estadoCliente: number;

    constructor(){
        this.estadoCliente = 1;
    }

}